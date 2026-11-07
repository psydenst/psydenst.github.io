---
title: "Terraform in Depth"
description: "Reading notes on Robert Hafner's Terraform in Depth (Manning, 2025), from the overview to the first notes on functions."
date: 2026-11-07
section: fichamentos
lang: en
tags: [devops]
draft: false
---

[Fichamento] Terraform in Depth
Robert Hafner  
Manning Publications, NY, US, 2025

This reading note follows the divisions of the original notes in sequence. Book pagination is cited only where the notes themselves supply it; the pages of the printed notes are not pages of the book. Gaps remain visible for a return to the reading. The short HCL examples below reproduce examples attempted in the notes, with transcription corrections; they are not a complete deployment configuration.

## Tf Overview

The starting point is Terraform's declarative character: we describe what we want instead of directly writing the sequence of operations that would produce it. The promise of a common language across providers does not, however, remove the conditions under which that description can be realized. The notes emphasize circular dependencies between resources: if each depends on the other in order to exist, Terraform cannot create them without a manual workaround.

It seems important to retain this tension. Declaring a result does not mean that every collection of declarations is executable. Dependencies are part of the problem too. The notes place the following diagram under that heading: modules in a deployment reach Core through the CLI, then providers, public APIs, and vendor resources, while state is retained in the backend.

![Terraform overview: modules in a deployment reach Core in the Terraform CLI, then providers, public APIs, and vendor resources. State lives in the backend.](/blog/terraform-in-depth/overview.webp)

## tf CLI

The CLI appears as the entry point for creating, updating, and destroying infrastructure, as well as for the manual interventions mentioned in the notes. Terraform core is presented as built into, and accessed through, the CLI. We therefore distinguish the description written in HCL from the tool that interprets it and conducts execution; these are not the same thing.

## Providers

A provider interfaces between Terraform and a vendor's systems. Communication with Terraform occurs over gRPC.

![Terraform Core communicates with a provider over gRPC; the provider talks to the vendor over an API.](/blog/terraform-in-depth/core-provider-vendor.webp)

The notes describe a tendency toward a one-to-one relationship between provider and platform, but we retain “tendency”: this is not presented as a necessary identity.

Each provider has its own nomenclature, style, and documentation. A common language does not remove the need to read that particular documentation. It unifies the form of declaration without making the declared objects identical.

## Vendors

A vendor has its own API, resources, and way of operating, which the provider must abstract. References to the [pizza provider](https://mng.bz/dXPz) and the [McDonald's ice cream provider](https://mng.bz/BXDq) help separate the idea of a provider from the narrower idea of a large cloud service. The interface is decisive, not a single category of vendor.

## Backends

A backend determines where a workspace stores its state files. Without backend configuration, the notes record local storage. A distinction begins to emerge between managing resources through a provider and retaining the record of that management through a backend. Confusing these roles would obscure the flow that follows.

## Workspaces

The notes describe a workspace as a deployment of a Terraform codebase with a particular backend and set of input variables. We take this formulation as the scope adopted in the reading: a codebase alone does not determine every deployment. The precise relationship between workspace, backend selection, and inputs should be revisited in the book, rather than turning a short definition into a complete theory of isolation.

## Deployment flow

The notes represent that cycle as a loop: a desired change moves through init, plan, and review; review may return to the desired change or continue to apply, which then returns to a new desired change.

![Deployment flow: a desired change goes through init, plan, and review; review can return to the desired change or continue to apply, which then returns to a new desired change.](/blog/terraform-in-depth/deployment-flow.webp)

## Init

Initialization downloads the modules and providers defined in the configuration. Modules may be public or private. The move here is to prepare what execution depends on, not yet to realize the desired infrastructure. The availability of these components should be distinguished from applying changes.

## Plan

The `terraform plan` command calculates a plan that can be used during apply. The notes separate three movements: **refresh**, reading the actual infrastructure state and data sources; **compare**, comparing what was read with what the code requests; and **plan**, constructing a DAG of actions.

DAG means directed acyclic graph: dependency relations orient the possible order of actions without cycles. The difficulty recorded at the beginning returns here. Planning is not simply an order-indifferent list but an organization of changes according to their dependencies.

The notes mention `terraform graph` and include this example of a plan graph, from root through an `aws_instance.web` resource and related data sources to the AWS provider.

![Example terraform graph from root through an aws_instance.web resource and related data sources to the AWS provider.](/blog/terraform-in-depth/plan-graph.webp)

## Apply

Apply executes the plan. Each created resource has a unique identifier, and completion reports counts of creations, updates, and destructions, along with errors encountered. It seems necessary to distinguish the anticipation of actions in plan from their realization in apply: the plan is not yet the changed infrastructure.

## Terraform vs OpenTofu

The notes place Terraform's licensing change in 2023 and associate it with version 1.6; they then present OpenTofu as an open-source fork. They also describe it as a superset of the Terraform language with additional features. We record these formulations as part of the notes, not as a general compatibility guarantee across arbitrary versions. The exact version boundary and the reach of this comparison remain to be checked as the reading continues.

## Block Structure

Blocks are presented as the basis of HCL and may contain arguments and subblocks. The first example places a `data "aws_subnets" "main"` lookup, with a `filter` subblock, alongside a `resource "aws_instance" "hello_world"` that uses its result. Relationships between declarations already appear in the form of references.

The enumeration announces twelve types, but the available transcription names eleven: `terraform`, `provider`, `resource`, `data`, `variable`, `module`, `locals`, `moved`, `removed`, `check`, and `output`. We do not complete the count by supposition. The `terraform` block concentrates settings; `provider` configures the specific interface; `resource` declares infrastructure; `data` queries; `variable` receives inputs; `module` groups reusable code; `locals` retains internal values; and `output` exposes values.

`moved` is noted as a refactoring tool for renaming resources. The description of `removed` contrasts withdrawing management with destroying the object; this is how we read the ambiguous phrase about removing it “from the infrastructure,” without equating those operations. **Check** has no explanation: to be continued from the book.

## Labels

### No labels

The `terraform` block takes no labels. In the example, `required_providers` sits inside it; `aws` is the key naming the provider to be used in the configuration.

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
```

The absence of a label does not mean an absence of internal structure. The block type already determines its function.

### Single label

The example `provider "aws"` has one label and configures the `us-east-1` region. The notes also present `module`, `variable`, and `output` with names chosen by the configuration's author. It matters to distinguish the name identifying a declaration from the arguments configuring it; the empty bodies in the print are schemas, not complete modules.

### Subtype and label

`resource "aws_instance" "hello_world"` and `data "aws_vpc" "default"` combine subtype and name. This combination makes specific references possible. The resource address is `aws_instance.hello_world`; the lookup is `data.aws_vpc.default`. Here we correct the transcription that prefixed the resource address with `resource.`. Block type, object type, and local name should not be confused.

## Arguments and subblocks / Syntax

The section moves from the outer form to the contents of blocks. Arguments assign values; subblocks organize internal configuration. The **terraform settings** passage brings together `required_providers`, `cloud`, and `backend` configuration, warning that `cloud` and `backend` are alternatives rather than two destinations to enable simultaneously.

The printed backend example has unfilled fields and no backend type. We describe that incompleteness rather than publish an invented configuration. The earlier `required_providers` example provides a readable declaration of `source` and `version`.

Under **Terraform Providers**, the notes allow multiple instances and draw attention to provider, version, and credentials. The `provider "aws"` example sets `region = "us-east-1"`; other arguments depend on specific documentation. **Required provider**, in turn, concerns declaring source and version inside `terraform`, not the same usage settings. The second example has an imprecise Azure identifier in the transcription; we do not reproduce it as verified configuration.

## Resources

The central passage makes the relationship between declaration and managed object explicit. We quote:

> Each resource block that a developer creates represents an actual piece of infrastructure that they want to launch and manage using Terraform
>
> — Hafner, 2025, p. 49

A resource has a provider-supplied type and its own arguments. The notes emphasize the multiplicity of resources across providers, but their counts vary; the argument does not depend on fixing a number. In the instance example, `ami`, `subnet_id`, and `instance_type` receive references to data and variables. The block is not merely a name: it relates the desired object to the information needed to manage it.

## Data Sources

A data source fetches external data without modifying the queried object. Its syntax resembles a resource's, but its function differs. The example looks up the default VPC and uses its identifier to filter subnets:

```hcl
data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}
```

What matters here is the dependency between lookups: existing information can feed another declaration without querying becoming equivalent to creating.

## Meta arguments

The notes move from resource-specific arguments to meta-arguments: `count`, `for_each`, `depends_on`, `provider`, and `lifecycle`. The first three appear as multiplication of instances, use of map or set keys, and explicit dependency, respectively. We correct `counts` to `count`.

The `count` example uses `var.instance_count` for a resource and the value `5` for a module. Repetition is therefore a dimension of the declaration, not the manual copying of five blocks. `provider` is accompanied by question marks and `lifecycle` remains undeveloped: their details remain open in the notes.

## Modules

The reading reaches the unit of reuse. We quote the definition recorded in the notes and attributed to Hafner, with no page supplied:

> A module is, at its core, a collection of data sources, resources, and any assets (configuration files, templates) that are bundled together into reusable components. They are reusable libraries that can be packaged up and distributed for reuse.

A module brings together elements that previously appeared separately. The notes compare it to a Python package or a JavaScript module and present it as the standard way to share Terraform code between projects. It seems that the relevant abstraction is not hiding names but giving a collection of resources and data a reusable unity.

## Input, output and local

### Variables

Variables are module inputs. The examples declare values such as `ami` and `subnet_id` with `type = string` and consume them through `var.ami` and `var.subnet_id`. The reference to `var.instance_type` is not accompanied by a declaration in this passage; we do not complete the example as though it were intact.

The notes enumerate `string`, `number`, `bool`, `list`, `set`, `map`, `object`, `tuple`, and `any`. We record this vocabulary without developing a theory of types absent from the material. `sensitive = true` is associated with avoiding display of the value; we do not take this short indication as a demonstration of every property involved in protecting a secret.

### Outputs

An output is presented as a module's return value. The example exposes `aws_instance.hello_world`. Whereas a variable receives a value from outside, an output makes an internal value available to other modules or workspaces. The direction of this passage matters more here than an attribute list.

### Locals

Locals exist within the module's scope for internal data and logic processing. The distinction seems to be between receiving, exposing, and working internally. The correct block is `locals`, although the print has `local`; `local.name`, by contrast, is the reference form for a value defined there.

## Chapter 4. Expressions and iterations

Only the heading is present, with no body of notes. To be continued from the book: we do not infer an account of expressions and iterations from the heading.

## Permissions (IAM and RBAC)

The section contains only a provisional marker and no developed argument. Permissions: to be continued from the book. We do not attribute to the book an explanation of IAM or RBAC that was not recorded.

## Functions

Functions are compared to programming functions through their structure of name and parameters. The example uses `startswith`, `split`, and `upper` to work with the environment. In readable HCL, preserving the passage's intention:

```hcl
locals {
  is_dev    = startswith(var.environment, "dev-")
  env_name  = split("-", var.environment)[1]
  env_label = upper(local.env_name)
}
```

Alongside correcting `local` to `locals`, the argument order of `split` has been adjusted. The example presupposes an input containing the expected separator; it is not a discussion of every possible format.

The notes contrast data transformation with infrastructure operations, but the sentence about sockets and disk is too brief to establish its scope. This is a question to revisit in the reading, not permission to supply features from memory. **Standard Library** announces nine types of functions and ends at “A” without listing them. Standard library: incomplete, to be continued from the book.
