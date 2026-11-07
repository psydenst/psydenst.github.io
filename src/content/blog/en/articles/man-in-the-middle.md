---
title: "What is a man-in-the-middle (MITM) cyberattack?"
description: "Why trusting the network is dangerous, and what you can do to prevent man-in-the-middle attacks"
date: 2025-11-20
section: articles
lang: en
tags: [cybersecurity]
cover: "/blog/man-in-the-middle/cover.webp"
source: "https://nym.com/blog/what-is-man-in-the-middle"
sourceName: "Nym"
readingTime: 10
draft: false
---
[Inheriting a surveilled internet](/blog/articles/surveilled-internet/), with outdated protocols and low authentication rigor, is perhaps one of the biggest causes of cybersecurity vulnerabilities today.

Several network protocols have weak security rules, performing little or no verification of the legitimacy of a given communication.

This fragile trust is the main attack surface for **man-in-the-middle (MITM) cyberattacks**. MITM is a technique in which an **attacker intercepts and/or alters communication packets** without the parties involved in the communication noticing.

By exploiting the different OSI Layer protocols<sup>1</sup>, MITM is a cyberattack as old as the internet itself. It is still widely used today, targeting victims ranging from local networks (LAN/Wi-Fi) to [DNS servers](https://nym.com/blog/dns-leaks) and HTTPS connections.

In this article, we will explore the main network vulnerabilities that enable a MITM attack, some tech tools for penetration and defense, as well as famous cases.

## What is a man-in-the-middle attack?
In practical terms, a **man-in-the-middle attack exploits the lack of or weak authentication** at certain points in the network to **intercept packets** and establish the attacker between two communication points. By doing this, the attacker creates two channels: one *between the attacker and the client*, and another *between the attacker and a server*.

The main **purposes** of MITM attacks are:
- Espionage
- Credential theft
- Script injections
- Redirection to fake websites
- Message manipulation
- Session hijacking

This is a very common attack, accounting for around **35% of current cyberattacks** online.<sup>2</sup>

## The case of MITM and ARP

For example, in the case of the **Address Resolution Protocol (ARP)**, which was created to translate IP addresses into MAC addresses, there is a central vulnerability: ARP **believes that any response it receives is legitimate**, without need of verification.

Therefore, ARP seeks to connect layers 2 and 3 of the OSI model — which we will detail shortly — which have different address records. Layer 2, specific to LANs and switches, comprises MAC addresses, but layer 3, specific to routers, understands [IP addresses](https://nym.com/blog/what-is-my-ip-address).

Thus, deceiving communications between different network protocols and exploiting the vulnerability of this connection is at the heart of a man-in-the-middle attacks.

## How MITM on the layers of OSI

Now let’s look at the 7 layers of OSI to demonstrate which critical vulnerabilities in the legacy design of the internet an attacker exploits.

| Layer | Role / Function | Vulnerability | Attack (how to exploit for MITM) |
| --- | --- | --- | --- |
| 7. Application | User-network interface; application protocols (HTTP, SMTP, DNS, FTP, etc.) | Plaintext transmission; weak certificate validation; unvalidated inputs | HTTP hijacking, phishing, HTTPS spoofing, content injection, credential interception in unencrypted protocols |
| 6. Presentation | Formatting, encryption, and encoding (TLS/SSL, compression, data representation).<br>Use of weak TLS versions, lack of secure configuration, absence of session/signature validation. | Use of weak TLS versions, lack of secure configuration,  absence of session/signature validation | SSL/TLS downgrade, SSL stripping (remove/force HTTP), exploitation of weak ciphers to decrypt traffic |
| 5. Session | Establishment, maintenance, and termination of sessions (cookie/session tokens, dialog control). | Predictable tokens or tokens not linked to the client, cookies without security flags (HttpOnly, Secure). | Session hijacking/sidejacking (theft of cookies/tokens), session hijacking after credential capture |
| 4. Transport | End-to-end transport (TCP/UDP): segmentation, flow control, ports, and connections | No encryption at the transport level,  predictable sequence numbers, possibility of injection/RST | TCP session hijacking (injecting packets, resetting connections), sniffing unencrypted payloads, packet injection |
| 3. Network | Logical addressing and routing (IPv4/IPv6),  forwarding between networks | IP spoofing, unauthenticated routing, lack of integrity in network responses | IP spoofing, route manipulation, ICMP/DNS redirection, creation of false routes to intercept traffic |
| 2. Link | Physical addressing (MAC), Ethernet frames, media access control; devices: switches, bridges | ARP protocol without authentication, possibility of MAC spoofing, switch CAM tables can be exhausted | ARP spoofing/poisoning to poison ARP tables and redirect traffic, MAC spoofing. CAM flooding (force hub behavior) |
| 1. Physics | Physical transmission medium (cables, Wi‑Fi radio, fiber); conversion of bits into signals | Shared medium (Wi‑Fi), physical exposure of cables, possibility of rogue APs and interference | Evil Twin (fake access point), Wi‑Fi eavesdropping, cable tapping, and direct interception of the medium |
| 0. Services/Infrastructure (cross-layer) | Network support services (DHCP, DNS, gateways, NAT) that operate between layers | Unauthenticated responses (DNS/DHCP), cache poisoning, vulnerable distributed services | DNS spoofing/cache poisoning for redirection, DHCP spoofing to provide malicious gateway/DNS; rogue gateway insertion |

## Understanding vectors of MITM attacks

### Low-level attacks and local network (Layers 1, 2, and 3)
At the base of the OSI model are the layers that deal with the **physical medium** and **local delivery** of frames: cables, fibers, radio signals, network cards, switches, and routers.

#### **Layer 1 (Physical)**
At this level, the risk is eminently physical: any access to the medium (an exposed cable, an installed TAP, a rogue device connected to the infrastructure) allows direct capture of signals converted into bits.

In **wireless** environments, the broadcast nature of the medium makes the **physical layer even more vulnerable**: clients and devices can be lured to a **fake access point (evil twin)** and have all their traffic made available to the attacker.
Furthermore, it is possible to perform **cable tapping**<sup>3</sup> directly on the connection cables of that network.

#### **Layer 2 (Link/MAC)**

Here, ARP and Ethernet dominate local communication. The aforementioned **Address Resolution Protocol (ARP)** translates IP addresses into MAC addresses without any authentication mechanism. As already pointed out, this flaw is the root cause of classic **ARP spoofing/cache poisoning** in which a malicious host sends fake ARP replies to convince victims to associate the gateway IP with the attacker's MAC.

The practical result is that local traffic passes through the attacker, who can simply spy on, manipulate, or inject content.

In the context of Layer 2 wireless, the **evil twin** works on the same principle: getting the client to connect to a point controlled by the attacker.

#### **Layer 3 (Network/IP)**
Finally, this later deals with routing and forwarding between subnets. Its main vulnerabilities are:
- **IP spoofing:** a technique in which the attacker falsifies the source IP address in packets sent over the network, making them appear to come from another machine. In MITM, this technique can be used to deceive routing tables or to impersonate a legitimate host, facilitating redirects or forged responses that divert traffic through the attacker.
- **Unauthenticated routing and traffic redirection (DNS spoofing/cache poisoning):** the absence of mechanisms that verify the authenticity of routes and resolution service responses. In routers/services without authentication, an attacker can inject false routes (or manipulate DNS caches) so that names or prefixes are resolved by paths controlled by them. The practical effect is the same as ARP spoofing, but at the network level: traffic is rerouted to malicious points, allowing inspection, alteration, or blocking.

### High-level attacks (Layers 4, 5, 6, and 7)
Moving up the OSI stack, **Layers 4–7** deal with transport, session state, presentation/encryption, and application logic — vectors that have their protocol, configuration, and design weaknesses exploited, often without the need for direct physical access to the network.

#### **Layer 4 (Transport)**
This layer's role is to ensure **end-to-end transport** via TCP or connectionless delivery via UDP, relevant vulnerabilities occur when the flow is not protected by higher layers. The absence of encryption at the transport level (or above) leaves payloads and headers readable to any interceptor along the route, facilitating credential capture and data exfiltration.

In addition, the design of TCP allows for injection techniques and forged packets: an attacker who can predict or manipulate sequence numbers can insert segments, force resets (RST), or cause reconnection conditions that enable session hijacking or alteration. In practice, these attacks are used to interrupt legitimate connections, force insecure reconnections, or insert payloads into unencrypted streams.

#### **Layer 5 (Session)**
This focuses on maintaining dialogue between client and server: cookies, tokens, session identifiers, and keep-alive mechanisms. Typical flaws — cookies without Secure/HttpOnly flags, tokens transmitted in plain text, or sessions not tied to the client — open the door to sidejacking and replay attacks: an attacker who captures a valid [cookie](https://nym.com/blog/what-are-cookies) or token can reuse it on another host and take over the user's session without needing credentials.

In MITM scenarios, this is often the next step after intercepting traffic: capturing a token at Layer 4 and using it at Layer 5 for unauthorized access.

#### **Layer 6 (Presentation/TLS)**
This should be the defense layer: this is where TLS/SSL encrypts data before it is delivered to the transport. However, weak configurations, poorly managed certificates, or the absence of mechanisms such as HSTS<sup>4</sup> allow **downgrade**<sup>5</sup> and **SSL-stripping**<sup>6</sup> attacks.

In these attacks, the attacker, often in a MITM position, forces the client to negotiate an insecure connection (HTTP) or takes advantage of the lack of certificate validation to insert a proxy that sees the traffic in clear text. The result is that the protection expected by the application disappears exactly where it should exist.

#### **Layer 7 (Application)**
This is the final stage: protocols and services (HTTP/S, REST APIs, SMTP, FTP, DNS in its resolution role) offer rich surfaces for exploitation — credential theft, content injection (XSS), endpoint exposure, and authentication/authorization failures. When lower layers (especially TLS) fail, the application layer is fully exposed: a user redirected to a cloned website (via DNS spoofing) or connecting via HTTP may have their credentials, cookies, and tokens exfiltrated or manipulated.

Hands-on tests combine DNS manipulation, [proxies](https://nym.com/blog/proxy-vs-vpn), and fake servers to demonstrate phishing, HTTPS spoofing, and exfiltration through poorly protected APIs.

## Attack and defense tools

A well-known tool for performing MITM tests is Bettercap<sup>7</sup>, a modular tool written in Go, developed as an evolution of Ettercap<sup>8</sup> and the old MITMf<sup>9</sup>. This tool allows you to discover local networks, rogue APs, ARP spoofing, DNS/HTTP proxies, TLS inspection, and packet capture in a single lightweight framework. It is important to note that it requires elevated privileges and should only be used in controlled environments or with explicit authorization.

Some of its main modules and utilities are described in this table. For more information, see the official documentation.<sup>10</sup>.

## MITM attack and defense tools

| Module / Command | Offense / Demonstration: How to exploit | Defense / Test & Hardening: How to defend |
| --- | --- | --- |
| wifi.recon | Discovers APs and clients, maps the wireless environment to plan rogue AP/eavesdropping | Allows inventory of Wi‑Fi networks and detection of suspicious APs; useful in wireless audits |
| wifi.ap | Creates rogue AP / evil‑twin to lure clients and capture traffic (lab) | Used to test connection policies, captive portals and rogue AP detection; validates endpoint controls |
| sniffer (pcap) | Captures packets/streams for analysis of credentials, headers, and unencrypted payloads | Enables incident reconstruction and validation that sensitive traffic is encrypted; IDS/monitoring testing |
| arp.spoof | Poisons ARP caches to position MITM on the LAN and redirect traffic | Used to validate detection of ARP poisoning, DHCP/ARP spoof protection policies, and network segmentation |
| net.recon / net.probe | Discovers hosts, associates IP↔MAC, and maps local topology to choose targets | Allows attack surface assessment, asset inventory, and verification of VLAN isolation |
| dns.spoof | Redirects DNS resolution to controlled servers (phishing, clone sites) | Tests robustness of DNSSEC, resolver monitoring, and unexpected responses; validates DNS filtering policies |
| http.proxy | Interposes HTTP/S requests (in lab with TLS inspection) to view/modify traffic and demonstrate SSL‑stripping | Assesses robustness of TLS, HSTS, certificate pinning; tests application protection against injection and header validation |
| http.server | Serves test pages or cloned pages for phishing/controlled campaigns | Allows creation of test environments for education, phishing detection, and simulation of malicious pages without real harm |
| tls (handshake inspection) | Inspects TLS handshakes to identify weak versions/ciphers and insecure negotiations | Helps audit TLS configurations of services, verify support for modern TLS, and measure exposure to downgrade attacks |
| tcp.proxy | Intercepts/manipulates TCP flows to demonstrate injection or alteration of payloads in unencrypted protocols | Used to test anomaly detection in transport layers and validate integrity of critical flows |
| events.stream | Real‑time event and log stream to monitor intercepted cookies/tokens/hosts | Useful to create exfiltration proof‑of‑concepts and to validate SIEM/IDS alerts from real events |
| mac (changer) | Changes the attacker's host MAC to mimic other devices and avoid MAC‑based detection | Tests MAC‑based access control policies and link‑layer authentication mechanisms |
| arp.spoof + ip_forward (host OS) | Combination to redirect traffic via attacker with forwarding enabled (full man-in-the-middle) | Allows you to simulate malicious forwarding and test forwarding/iptables rules, routers, and egress policies |
| net.probe (passive) | Passive scanning to map ports/services without generating active noise | Important for non-invasive assessments and for measuring visibility that IDS/IPS have in passive mode |

## Famous cases of MITM
### Tesla account phishing & MITM (2024)
**Attack used:** Using a phishing-based MITM, attackers phished Tesla users and interposed themselves in the auth/registration flow (e.g., tricking users into registering a new “phone key”), enabling credential/session capture and remote vehicle control (unlock/start) via the mobile-app path.<sup>11</sup>

**Vulnerability/weakness exploited:** Social engineering & weaknesses in the authentication/registration flows were exposed via HTTP(S) interactions (user tricked into revealing one-time codes or authorizing device links) and the ability to intercept or proxy the relevant mobile app/web traffic during the registration flow.

### OpenSSH session hijacking vulnerabilities (Feb. 2025)
**Attack used:** Active man-in-the-middle and [denial-of-service](/blog/articles/denial-of-service/) scenario where a malicious host impersonated a legitimate SSH server to a client that relies on DNS-host-key verification.<sup>12</sup>

**Vulnerability/weakness exploited:** A logic/verification bug in OpenSSH’s handling of VerifyHostKeyDNS (how hostkey verification and error codes are handled), allowing the attacker to spoof DNS responses (or otherwise manipulate verification) and trick clients into accepting a forged hostkey.

### Salt Typhoon and U.S. telecom breach (2024–2025)
**Attack used:** Compromise of carrier management infrastructure followed by router reconfiguration (creation of GRE/IP-in-IP tunnels, policy routes and traffic mirroring) and deployment of persistent implants — effectively turning provider routers into transparent interception points for signaling and media (carrier-scale MITM).<sup>13</sup>

**Vulnerability/weakness exploited:** Chained device-level flaws and operational weaknesses: exploitation of Cisco IOS/XE web-UI and privilege-escalation CVEs (to gain root on routers) combined with credential compromise and misuse of management interfaces, allowing attackers to modify routing/forwarding state and establish covert tunnels for traffic interception.

## Conclusion
**Man-in-the-middle attacks** persist because they exploit both technological gaps and misplaced trust in the network. From large-scale intrusions like *Salt Typhoon* to targeted phishing campaigns such as the *Tesla* case, these incidents reveal how attackers continue to bypass weak encryption practices, poor authentication, and outdated routing protocols.

Mitigation depends on layered defense: [encrypting all traffic](https://nym.com/blog/what-is-encryption) with strong TLS configurations, enforcing HSTS and certificate pinning, securing routers and DNS with authenticated mechanisms, and constantly monitoring for anomalies.

Ultimately, protecting against MITM means eliminating blind trust. Their persistence and repercussions also indicate that we should question the systems left behind by internet designers — systems built for openness and interoperability, not for adversarial resilience. The future of secure communication depends on rebuilding that trust layer by layer, ensuring that every interaction, from local packets to global routing, is verifiable, encrypted, and beyond manipulation.

And it is logical that all technology, no matter how robust, will always have vulnerabilities.

But sometimes it just seems too easy, don't you think?

## References
1. [Imperva: OSI Layer](https://www.imperva.com/learn/application-security/osi-model/)
2. [Netwrix: Man in the Middle represents 35% of cyber attacks](https://netwrix.com/pt/cybersecurity-glossary/cyber-security-attacks/man-in-the-middle-attack-mitm/)
3. [PMC: Cable-tapping](https://pmc.ncbi.nlm.nih.gov/articles/PMC8778650/)
4. [Princeton: HSTS Pinning](https://jbonneau.com/doc/KB15-NDSS-hsts_pinning_survey.pdf?)
5. [Alashwali & Rasmussen: Downgrade](https://arxiv.org/pdf/1809.05681)
6. [Nikiforakis, Younan & Joosen: SSL Striping](https://link.springer.com/chapter/10.1007/978-3-642-14215-4_12)
7. [GitHub: BetterCap](https://github.com/bettercap/bettercap)
8. [Github: Ettercap](https://github.com/Ettercap/ettercap)
9. [GitHub: Mitmf]( https://github.com/byt3bl33d3r/MITMf)
10. [Bettercap.org: Bettercap Documentation]( https://www.bettercap.org/)
11. [Sysnet Shielf: MITM attack on Tesla](https://sysnetshield.com/mitm-phishing-attack-may-enable-tesla-car-theft/)
12. [National Vulnerability Database: OpenSSH Vulnerability](https://nvd.nist.gov/vuln/detail/cve-2025-26465)
13. [Recorded Future: US Telecom Breach](https://go.recordedfuture.com/hubfs/reports/cta-cn-2025-0213.pdf)
