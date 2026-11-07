---
title: "What is packet sniffing?"
description: "Tcpdump, Wireshark, and how your neighbor spies on you"
date: 2025-09-24
section: articles
lang: en
tags: [cybersecurity]
cover: "/blog/man-in-the-middle/cover.webp"
source: "https://nym.com/blog/what-is-packet-sniffing"
sourceName: "Nym"
readingTime: 9
draft: false
---
Curiosity might have killed the cat, but not hackers.

**Packet sniffing** is an extremely common technique in the world of cybersecurity. It consists of monitoring and capturing data packets that cross a given network. What makes **packet sniffing different from packet analysis** is basically their intent: the former “sniffs” data belonging to other users, and is therefore unauthorized interception, while packet analysis is a legitimate analysis of data flow.

Usually based on tools such as **tcpdump** and **Wireshark**, packet sniffing and analysis are widely used to monitor the health of a given system and can be used for both:

- **Legitimate purposes** such as resolving connectivity issues and identifying TCP retransmissions; analyzing performance (latency, throughput, and packet loss); and **forensic investigation and application debugging** to reconstruct incidents.

- **Malicious purposes** such as capturing credentials transmitted in plain text (e.g., FTP/HTTP without TLS); stealing session cookies or API tokens for account hijacking; and espionage and [metadata collection](https://nym.com/blog/what-is-metadata) for infrastructure mapping and social engineering.

### How does a network work?

To understand what packet sniffing is, we should understand first what a network is.
A **computer network** is, in simple terms, a set of devices connected to each other, capable of exchanging information.

This communication takes place in an organized and standardized manner, following a conceptual model called **Open Systems Interconnection (OSI)** which divides data transmission into the following **7 layers**:

| Layer (OSI) | Role / Function | Example — Encapsulation (web browsing) |
| --- | --- | --- |
| 7. Application | Interface between the user and the network; protocols that software uses to communicate (HTTP, SMTP, FTP, etc.). | The browser (e.g., Brave) generates an HTTP GET request to `https://example.com`. |
| 6. Presentation | Formatting, encoding, encryption, and compression of data so applications can understand data (UTF‑8, JPEG, TLS). | The HTTP request is encoded in UTF‑8 and, if HTTPS, the payload is encrypted with TLS before being sent. |
| 5. Session | Manages communication sessions between applications: establishing, maintaining, and terminating dialogues. | The browser reuses the same session/dialogue for multiple HTTP requests (keep‑alive), or manages a TLS session between client and server. |
| 4. Transport | End‑to‑end transport; reliable delivery, flow control, and multiplexing (TCP/UDP). | HTTP data is segmented and sent via TCP; source/destination ports (e.g., client: random, server: 443 for HTTPS). |
| 3. Network | Logical addressing and routing between networks (IPv4/IPv6). | TCP segments are encapsulated in IP packets with src=192.168.1.100 and dst=93.184.216.34; routers forward the packet through the Internet. |
| 2. Data link | Frames, physical addressing (MAC), error detection, and media access (Ethernet, Wi‑Fi). | IP packets are encapsulated in Ethernet frames containing source/destination MAC addresses; switches deliver frames within the LAN. |
| 1. Physical | Transmission of bits over the physical medium: electrical, optical, or radio signals; corresponds to cables, connectors, and network cards. | Ethernet frames are converted into electrical pulses (or Wi‑Fi signals) and transmitted through the cable (or air) to the next node. |

### Packet sniffers in the data flow

When a user accesses a website or sends a message, the information is fragmented into data packets. Each packet carries pieces of the communication and contains information that is [public by default](/blog/articles/surveilled-internet/), such as the source and destination addresses and control flags. Thus, during their route, packets can be intercepted and exploited for various purposes.

This is where **sniffers** come in: programs or devices that can **“eavesdrop” on each packet as it flows through the network**, monitoring and recording traffic. These tools can observe all communication passing through a given point in the infrastructure if the network is not properly protected.

Thus, the technique of *packet sniffing* is a form of [traffic analysis](https://nym.com/blog/what-is-traffic-analysis) that consists of **intercepting and recording packets in transit**, which can serve a variety of purposes: from diagnosing failures and optimizing performance to spying on communications and stealing sensitive information.

### The sniffer
A **sniffer** is the mechanism — in software or hardware — that makes packet sniffing possible. It acts as a **network traffic log**, observing the packets that pass through an interface and making them available for analysis.

In modern networks, sniffers are mainly used in two distinct ways:
- **Legitimate contexts** in which network administrators use tools such as **tcpdump** (command line, focused on capture) or **Wireshark** (graphical interface, with advanced decoding) to diagnose failures, audit configurations, and perform forensic analysis. Thus, it is the use of packet inspection tools to verify the health and security of a system.
- **Malicious contexts** in which hacker communities use adapted sniffers to capture credentials, session tokens, and other sensitive data, which can then be used for espionage or more elaborate attacks.

Therefore, the difference is not in the technology itself, but in the **intention** of the operator.

## Broadcast and sniffing techniques
The **broadcast sniffing technique** exploits the operation of Ethernet networks in shared environments. Whenever a machine sends data, it is encapsulated in a MAC frame that carries the physical address of the recipient.

The **network interface card (NIC)** is the hardware component responsible for this communication: it connects the computer to the network, translating data into electrical or radio signals, and has a **unique 48-bit MAC address**. The first 24 bits identify the manufacturer and the last 24 bits identify the card's serial number. This address serves as the machine's physical “identity” within the network.

![](/blog/packet-sniffing/image1.jpg)

Normally, the NIC only accepts frames destined for its own MAC address and discards the rest. However, a sniffer changes this behavior by putting the card into **promiscuous mode**. In this state, the **NIC accepts all incoming frames**, regardless of the recipient, and delivers them to the operating system for analysis.

In networks based on hubs or other means of diffusion, this means that a single computer can observe virtually all local traffic. In modern networks with switches, **port isolation** limits this visibility, requiring additional resources such as port mirroring, TAPs, or traffic manipulation techniques (e.g., ARP spoofing) for effective capture.

Therefore, in short, *broadcast sniffing* consists of exploiting the network card's ability to accept packets that do not belong to it, turning the network's broadcast architecture into an opportunity to monitor other people's communications.

## Legitimate and illegitimate uses of packet sniffing
If we stick with the definition of **packet sniffing** as the capture by a user of communication packets to which they do not have access permission, we should consider all sniffer activity to be malicious. However, as is often the case in the world of information security, the same tools and techniques can be used for hacking, protecting, or optimizing.

Therefore, we can refer to the legitimate practices of monitoring a network, using tools such as Wireshark and tcpdump, as **packet analysis**. The beneficiaries of inspecting data packets on a network with these tools include:
- **Developers**: to diagnose slow responses, retransmissions, and bottlenecks; validate payload and header formats; and reconstruct requests and measure latencies during debugging processes.
- **System administrators**: to obtain an accurate snapshot of current network conditions (throughput, losses, congestion), adjust performance parameters, and use advanced filters to maintain infrastructure efficiency.
- **Security analysts**: to perform forensic investigations based on captured traffic, identify anomalous behavior, confirm exfiltration vectors, and produce solid evidence in response to incidents.
- **Students**: to observe the functioning of protocols (such as DHCP, TCP, TLS) in a practical way in laboratories or controlled environments, transforming abstract concepts into concrete experiences and accelerating learning.

**Packet sniffing**, on the other hand, which is the use of these same tools with malicious intent, benefits cybercriminals in two ways:
1. **Passive attacks**: the attacker only observes traffic for reconnaissance (mapping hosts, ports, and services), captures plaintext data (HTTP, FTP, Telnet, some VoIP streams) to extract credentials, tokens, or cookies, and collects useful metadata to plan the next phases of the attack (timings, communication patterns, exposed endpoints). It is stealthy and difficult to detect because it does not alter the observed flow.
2. **Active attacks**: the attacker acts to **increase their visibility** or manipulate traffic — for example, using **ARP spoofing** to redirect packets, injects or modifies packets to falsify sessions or cause failures, and to create conditions that enable data interception and alteration. These methods are preliminary steps in the famous **Man in The Middle attack** and constitute one of the most efficient attacks for hijacking data and credentials.

### Defense techniques against packet sniffing
The best defense practices against sniffing are:
#### 1. Use end-to-end encryption
[End-to-end encryption](https://nym.com/blog/end-to-end-encryption) ensures that even if an attacker intercepts network packets, they cannot read the content. Secure protocols such as HTTPS, TLS, and SSH help protect confidential communications.
#### 2. Implement network segmentation
Dividing a network into smaller segments reduces the chances of an attacker gaining access to the entire system. This method of [decentralization](/blog/articles/decentralization/) limits the damage caused by a successful interception attempt.
#### 3. Enable secure authentication mechanisms
[Multi-factor authentication (MFA)](https://nym.com/blog/password-risks#what-is-multi-factor-authentication-and-why-is-it-important) and [strong password policies](https://nym.com/blog/password-risks) can prevent attackers from using stolen credentials to access sensitive data.
#### 4. Deploy network monitoring tools
Regularly monitoring network traffic using **intrusion detection systems (IDS)** and **intrusion prevention systems (IPS)** can help identify suspicious activity and mitigate threats before they cause damage.
#### 5. Use Virtual Private Networks (VPNs)
[VPNs](https://nym.com/blog/what-is-a-vpn) encrypt internet traffic, making it difficult for hackers to intercept or examine network packets. This applies particularly to remote employees and those who access company networks via public Wi-Fi.

For the best protections against packet analysis, using a decentralized VPN is essential. Traditional VPNs are based on centralized servers, making your [IP address](https://nym.com/blog/what-is-my-ip-address) linkable to your online activities on the VPN company’s single proxy. With a [decentralized VPN](https://nym.com/blog/decentralized-vpns-vs-traditional-vpns-all-the-differences) like **NymVPN**, your data packets are routed through a **multi-hop, decentralized network** to make you unlinkable to your destination or activity.

#### 6. Regularly update software and security patches
Outdated software often contains vulnerabilities that attackers can exploit to deploy packet sniffers. Keeping operating systems, network devices, and applications up to date reduces the risk of such attacks.

### Conclusion
**Packet sniffing** is both one of the most powerful and most dangerous tools in the field of cybersecurity. When used legitimately — in development environments, system administration, teaching, or forensic analysis — it becomes indispensable for understanding, debugging, and strengthening computer networks. On the other hand, when exploited with malicious intent, it becomes a stealthy mechanism for spying and stealing sensitive information.

This dual nature highlights a central lesson: technology itself is neither good nor bad, nor even neutral: it depends on the purposes of those who use it, as Melvin Kranzberg rightly pointed out. It is up to organizations and users to adopt robust defense measures — such as [encryption](https://nym.com/blog/what-is-encryption), network segmentation, strong authentication, and continuous monitoring — to reduce the attack surface and hinder the actions of malicious sniffers.

Finally, understanding the workings, uses, and risks of packet sniffing is not just an academic exercise, but an essential step for anyone interested in [protecting data](https://nym.com/blog/encryption-and-data-protection) and maintaining the integrity of communications in today's digital world.

#### Packet sniffing: FAQs

#### What is the main purpose of packet sniffing?

Packet sniffing is used to capture data traveling across a network. While it’s often a legitimate tool for troubleshooting or network performance monitoring, it can also be abused by hackers to steal sensitive information like passwords and session tokens.

#### How can packet sniffers see private information?

When traffic is unencrypted, packet sniffers can intercept and read raw data packets, including login credentials and personal messages. Even on secure sites, metadata like IP addresses and timestamps may still be visible without proper encryption.

#### How can I protect myself from packet sniffing?

Always use encrypted connections (HTTPS, SSL, TLS) and connect through a trusted VPN. NymVPN offers decentralized routing that hides both your data and metadata, making it impossible for sniffers to trace your activity or identify your device.

#### Can packet sniffing happen on public Wi-Fi?

Yes. Open Wi-Fi networks are common targets for packet sniffing because data often travels unencrypted. Using NymVPN or other strong encryption tools helps block interception and ensures your private information stays private.
