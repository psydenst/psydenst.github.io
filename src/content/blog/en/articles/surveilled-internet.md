---
title: "Why did we inherit a surveilled internet?"
description: "The beginnings of the Internet, the Cold War, and its military-commercial roots"
date: 2025-06-13
section: articles
lang: en
tags: [privacy, technology-and-society]
cover: "/blog/surveilled-internet/cover.webp"
source: "https://nym.com/blog/the-surveilled-internet"
sourceName: "Nym"
readingTime: 8
draft: false
---
## Why nobody talks about metadata
There is growing and widespread marketing around data security. From start-ups to big tech companies, it’s common to see the promotion of technologies aimed at increasing user privacy, such as end-to-end encryption used in products like WhatsApp and Google Drive.

However, the core of surveillance lies in something less talked about: **metadata analysis**.

So, what is metadata excatly?
[Metadata](https://nym.com/blog/what-is-metadata) is **technical and descriptive details about digital communications**. They include source and destination IP addresses, transmission time, packet sizes, and connection state indicators (flags).

At first glance, these details seem harmless, but on a large scale, they allow for the creation of detailed profiles about individuals and groups  –  revealing sensitive patterns like location, daily habits, interpersonal relationships, and personal or professional preferences. In fact:

>“Metadata tells us absolutely everything about someone’s life. If we have enough metadata, we don’t need content.”
— Stewart Baker, former General Counsel of the U.S. National Security Agency

<figure class="video"><div class="video-frame"><iframe src="https://player.vimeo.com/video/1103924698?dnt=1" title="What is metadata?" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe></div><figcaption>What is metadata?</figcaption></figure>

Also, it's important to mention that **[end-to-end encryption](https://nym.com/blog/end-to-end-encryption) doesn’t guarantee the anonymity of metadata**.

Actually, your metadata is structurally exposed within the current architecture of the Internet. But who decided on this architecture?

## The Cold War and the early days of the internet
The internet first emerged as a collaborative experiment between some U.S. universities and the U.S. Department of Defense.

In 1971, ARPANET (the internet’s predecessor) had fifteen connection points. The central demand for a network like this was simple: resilience against a possible Soviet attack on America’s communication systems, which were then heavily reliant on telephone networks.

Thus, ARPANET was funded by the U.S. government and managed by the **Advanced Research Projects Agency (ARPA)**.

Unlike the extensive commercial and recreational use the internet would have decades later, **ARPANET had clear military objectives**: operational security, robustness, and high resistance to attacks. These strategic priorities deeply shaped the technologies and architectural decisions of the network.

## The secret ingredient: Packet switching
One of the key technological innovations in ARPANET’s development was **packet switching**, created simultaneously by Paul Baran in the U.S. and Donald Davies in the U.K.

This concept **broke messages into smaller packets that could travel independently** across various routes to reach their final destination. If one route was blocked or destroyed, other packets could still arrive using alternate paths.
By eliminating the reliance on a single centralized line, **packet switching lowered the chance of packet loss and communication breakdown**  –  fulfilling the military goal of building a resilient communication system against the Soviet threat.

However, **it was this same technology that exposed our metadata**. In order for a communication packet to navigate the network and find its final destination, the metadata is exposed unencrypted in the header of the communication packets. In other words, the cradle of the structural exposure of our metadata is related to how packet switching operates –, in addition, of course, to how the network infrastructure is operated. But we'll get into that later.

## Technological integrations: Telephones, radio, and satellites
Initially, ARPANET used the existing U.S. **telephone network infrastructure**. Though practical and cost-effective, this soon revealed geographic and operational limits.

To expand reach and capacity, ARPANET began exploring emerging technologies: **radio** and **satellite** communications. In the 1970s, the Alohanet project tried to connect Hawaii’s islands via radio. Signal interference led Robert Metcalfe to develop a system of waiting before retransmitting packets  —  an approach that later evolved into the **Ethernet standard**, replacing radio with physical cables for local networks.

At the same time, satellite technology greatly boosted global communications. Satellites allowed reliable long-distance data transmission, aligning with the U.S.’s strategic and military goals.
By the mid-70s, ARPA was running three distinct experimental networks:
- **ARPANET** (landlines)
- **PRNET** (radio)
- **SATNET** (satellites)

The urgent need to integrate these networks led to the creation of the **TCP/IP protocol** by Vint Cerf, Jon Postel, and Danny Cohen.

## TCP/IP
The TCP/IP protocol has two main parts:
1. **TCP (Transmission Control Protocol):** Manages point-to-point connections, ensuring secure and orderly packet delivery
2. **IP (Internet Protocol):** Handles the delivery of packets across diverse networks

This structure introduced a clear hierarchy:

- A **network level** (which identifies the user’s connected network)
- A **host level** (which identifies the specific device within that network)

Additionally, the creation of **gateways** (devices connecting different networks and directing traffic between them) was essential to connect local networks on this hierarchical structure.

This technical setup exposed significant amounts of user information  —  structurally embedded in the internet’s architecture. Each IP address can reveal key details such as approximate geographic location, institution or internet provider, and the type of device being used.

To work efficiently, the TCP/IP protocol required a large amount of metadata, including **timestamps** and **flags** showing connection states.

The designers of the Internet essentially imposed the exposure of this data as a prerequisite for accessing the network  —  all backed by heavy U.S. government funding to expand TCP/IP globally.

#### So, why did we inherit a surveilled internet?

Because, strategically, for the civilian and military institutions building the internet, it was useful to know **when, where, and how** someone connected. Among other commercial reasons, of course.

## The mass adoption of the Internet
The internet’s rise to popularity wasn’t driven by one single actor or centralized plan. It resulted from the convergence of many **institutional, political, commercial, and social forces**.

In the 1980s and 1990s, the network evolved from a U.S.-based military-academic experiment to a **global infrastructure** shaped by competing interests and visions.

Initially, ARPANET access was restricted to a few U.S. universities funded by ARPA. This caused pressure to democratize access, especially through the National Science Foundation (NSF), which began building its own network in 1984.

When the NSF integrated its network with ARPANET, nearly all U.S. universities gained access to the internet, opening the door to a **civilian internet**. This marked a key shift: the internet began expanding in a **decentralized way**, with users creating local networks (LANs) that would be connected to broader infrastructures.

To support this growth, the **Domain Name System (DNS)** was created. DNS decentralized host address management by assigning servers to manage different domains like **.edu, .gov, .mil, .com, .org, and .net.** This helped the internet grow and reinforced its hierarchical, international structure.

However, a major problem arose: U.S. law prohibited the commercial use of public infrastructure.

During the NSF’s management, internet use was limited to education and research. But rising demand and pressure from the private sector led to the **privatization** of internet infrastructure.

Starting in 1991, the first **Internet Service Providers (ISPs)** appeared, marking the commercialization of the web.
Private companies began managing the physical network  —  cables, switches, and servers  —  providing TCP/IP connections to end-users (and also collecting all users metadata).

Thus, from the 90s, the civilian Internet stopped being an educational/scientific platform and became a **space for consumption, entertainment, socializing, and self-expression** in line with the contemporary use of the web.

## Rethinking the internet’s technical foundations
Understanding the internet’s historical origins helps explain why it exposes so much metadata ,  and why it wasn’t designed with individual privacy in mind.

In fact, this historical legacy significantly limits today’s ability to protect online privacy.
However, rather than pointing to a historical culprit, our real question should be: **Why has this infrastructure not been changed to date?**

To this day, metadata continues to be leaked at the network level, exposing sensitive user information to **governments, private companies, and cybercriminals**.

Layer-0 anonymity networks, like [NymVPN’s Noise Generating Mixnet](https://nym.com/blog/what-is-a-mixnet) which advances on [Tor](https://nym.com/blog/what-is-tor)'s now vulnerable network design, are crucial new technologies on the market capable of scrambling metadata in order to protect user information and traffic patterns at the network level.

If privacy wasn’t a founding principle of the internet, it’s up to today’s generation to make it one.

Either by pushing for a structural change in the architecture of the network, or by direct and individual action, embedding privacy into the very technology use itself.

### Internet surveillance: FAQs

#### How did military and commercial history shape today’s deep metadata surveillance infrastructure?

Internet governance shifted from NSF-managed academic networks to privatized ISPs that log traffic for commercialization and law enforcement—embedding mass metadata collection into the core of the infrastructure.

#### What technical designs from Cold War-era systems still underlie modern surveillance capabilities?

Techniques like TCP/IP logging, DPI, and centralized backbone monitoring emerged from military research, and their legacy persists in today’s network oversight systems.

#### Why is metadata considered more invasive than content records in surveillance law?

Metadata—like timestamps, IP addresses, and routing logs—can reveal associations and patterns over time, often without requiring communication decryption.

#### How could mixnet architecture reverse long-standing metadata visibility in internet routing?

Mixnets break persistent linkability by batching messages, injecting cover traffic, and reordering packets—making it practically infeasible to trace the origin of traffic.

#### What role do ISPs and telecom firms play in the surveillance economy today?

They are primary data collectors—logging subscriber traffic metadata, throttling access, or selling usage profiles—and they act as chokepoints for both state and corporate surveillance infrastructure.
