---
title: "Terraform State: from code to apply"
description: "CLI, backend, and cloud: how state bridges logical addresses and real resources through init, plan, and apply."
date: 2026-11-07
section: articles
lang: en
tags: [devops]
draft: false
---

Terraform code, the state file, and infrastructure are not three versions of the same thing. They belong to distinct domains. Understanding their boundaries makes it possible to follow what actually travels between a declaration in a `.tf` file and an operation on a cloud resource.

![Hand-drawn diagram of Terraform State: local CLI, remote backend, and Azure cloud, showing init, plan, and apply across those domains.](/blog/terraform-state/from-code-to-apply.webp)

The scenario in this article consists of a local CLI, a remote backend in Azure Blob Storage, and resources in Azure. The following account organizes the stages in the source notes conceptually: it is not an exact trace of every internal call or a universal sequence for every execution option. Its central question is simpler: who reads the code, who retains the record, and who actually owns the resources?

## Three domains, three responsibilities

The **local CLI** interprets the `.tf` files. This is the domain in which the desired configuration acquires meaning for Terraform. The declaration is not sent to Azure as a program Azure must interpret.

The **remote backend**, Blob Storage in this scenario, holds `terraform.tfstate`. Its role in the model is to retain state, not to execute configuration or host the managed resources. The file is JSON and contains the registry of known resources, a `serial`, and a `lineage`. The serial distinguishes revisions of the state; lineage identifies the line of continuity to which those revisions belong. The file is therefore more than a list without a history.

The third domain is the **cloud**, Azure, which has its own resource identification system accessed through Azure Resource Manager, or ARM. To manage a virtual machine, Azure does not need to know what name it received in Terraform code. It knows the resource and its identity within its own domain.

This separation prevents a recurring confusion: storing state in Azure does not turn the backend into the infrastructure controller. Retaining the record and managing resources remain distinct responsibilities.

## Init: preparing access is not reading resources

During `init`, the CLI downloads the provider plugins needed to communicate with services. For the remote backend, it records a local reference to where state is stored. That reference should not be confused with a local copy of the entire resource registry.

In the scope described by the notes, no resource data is transferred at this stage. Components are prepared and the backend is located; infrastructure refresh has not yet occurred. The pointer says where to find the record but does not replace its contents.

## Plan: relating the desired to the observed

`plan` begins by interpreting the code and constructing a DAG, a directed acyclic graph of dependencies. Declarations cease to be merely adjacent blocks: their references establish relationships that constrain the order of actions.

In the notes' conceptual sequence, the CLI downloads remote state and acquires a lock to prevent concurrent work. The lock protects work on the shared record; it is not a change to a cloud resource. Terraform then queries the actual resources through read operations such as GET to perform a **refresh**. The known record is checked against what the cloud reports now.

Next, the desired configuration is evaluated and compared with the state refreshed by those reads. This diff is not simply a comparison between two files: it relates what was observed in a resource to what configuration requests. Dependencies organize the actions proposed in the plan.

The lock is released at the end. Infrastructure has not been changed by this phase. Observing a difference and planning its correction are distinct from carrying out that correction. This distance is precisely what makes the plan readable as a proposal rather than an account of a change already made.

## Apply: executing and recording

`apply` loads the plan and acquires the lock again. Planning's use of a lock does not mean execution remains protected by that same lock: these are separate moments in the described flow.

For each resource to be handled, the operation takes place through REST requests via ARM. ARM acts here as a control-plane gateway, routing the request to the particular service API, such as Compute. Blob Storage is not the executor in this passage; its function remains storing state.

Execution waits for the operation to finish, checking its progress through polling. In the notes' model, the result is incorporated into state with a new serial, and the process continues with the next resources according to the plan's dependencies. This per-resource description explains the connection between an operation and its record; it does not require every execution to be strictly serial.

The lock is released at the end. The relevant result is twofold: infrastructure has been modified, and the record now reflects the known results of those operations. One should not be mistaken for the other.

## State: the bridge between names that do not recognize each other

Terraform's logical address and the provider's real identifier belong to distinct namespaces. The notes contrast `aws_instance.web` with an Azure identifier such as `/subscriptions/.../virtualMachines/myvm`.

The contrast deliberately mixes an AWS logical address with an Azure ID. It does not claim that this AWS resource corresponds to that Azure machine, nor does it offer a valid mapping between them. The examples make visible the difference between **how code names a resource** and **how a platform identifies its object**. In an actual association, both sides must correspond to the same resource and the appropriate provider.

State is where that association is recorded. It functions as a translation table between “what the code calls” and “what the cloud actually has.” Azure does not infer a Terraform address from the ID; the name in code, by itself, is not the cloud identifier either.

This is why state should be treated as central to the relationship, rather than as a leftover from execution. Code declares the desired configuration; the cloud maintains the objects; state retains the identity bridge that lets Terraform return to those objects, compare them, and manage them.
