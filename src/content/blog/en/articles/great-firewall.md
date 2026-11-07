---
title: "What is China’s Great Firewall?"
description: "How the world's largest censorship apparatus works — and how to circumvent it"
date: 2025-08-01
section: articles
lang: en
tags: [privacy, technology-and-society]
cover: "/blog/great-firewall/cover.webp"
source: "https://nym.com/blog/what-is-great-firewall-of-china"
sourceName: "Nym"
readingTime: 7
draft: false
---
The Great Wall of China, one of the great wonders of the ancient world, was erected to protect the kingdom from invading armies. Today, another wall exists, no less tangible even if unseen. China’s **Great Firewall** is the **largest and most sophisticated censorship system in the world**. Controlling both content traffic at the service level and infrastructure, it separates the Chinese internet from the rest of the world, limiting Chinese people's free access to information and free expression.

In fact, the internet in China should be understood more as a **national intranet**, which is heavily regulated and isolated from the rest, than as a global internet. And this, of course, is no accident: it is ideologically and politically motivated.

>“Anti-China forces in the West have constantly and unsuccessfully attempted to exploit the internet to ‘overthrow China’... Our ability to maintain our position and win this battle on the internet has a direct influence on the ideological and political security of our country.”

– Xi Jinping, speech at the National Propaganda and Ideology Conference, August 2013

Thus, the maintenance, expansion, and modification of China’s Great Firewall is an **active state policy**, varying according to state interests.

## How the Great Firewall works
To understand how a [surveillance and censorship system](https://nym.com/blog/internet-censorship-global-threat) of this scale works, let's briefly recap the global architecture and infrastructure of the internet.

**[Internet Service Providers](https://nym.com/blog/internet-service-providers) (ISPs)** are responsible for connecting the local networks of individuals and organizations to the internet. ISPs basically operate as gateways to other parts of the global network, managing the hardware necessary to establish and maintain these connections.

Unlike most of the world, **ISPs in China** are not private companies, but **entities directly linked to the government**, in particular **China Unicom** and **China Telecom**. Both constitute the **backbone of the Chinese internet**, that is, the main infrastructure that manages everything from national data traffic — through network cables, servers, and routers — to international traffic, through gateways and intercontinental submarine cables.

Using techniques such as **IP filtering, DNS domain blocking, and deep packet inspection (DPI)**, these companies are able to detect and block content deemed sensitive or undesirable by the Chinese government, both within China and on international connections. This means that when Chinese people try to access foreign websites or communicate with people outside China, their data must pass through these control points where it is monitored, analyzed, and, if necessary, blocked or limited by the Great Firewall.

Therefore, censorship occurs at multiple layers: ISPs, data centers, and national traffic exchanges. It ranges from content filtering, throttling, service blocking, and even complete internet suspension. All of this is implemented uniformly by state-owned companies under **centralized government control**.

Finally, it is worth noting that the greatest regulation occurs at the international exchange points of the Chinese internet backbone (Beijing, Guangzhou, Shanghai, Urumqi, Xi'an). However, the Great Firewall operates nationally.

### Main censorship techniques in China

| Features | Description of technique |
| --- | --- |
| DNS blocking | A technique that prevents domain name resolution, blocking access to specific websites through manipulated DNS servers |
| IP blocking | Prevents direct access to certain IP addresses considered undesirable or dangerous by the Chinese government |
| SNI TLS inspection | A technique that analyzes the Server Name Indication (SNI) of TLS certificates to detect and block access to specific domains even on encrypted connections |
| Deep Packet Inspection (DPI) | Detailed inspection of data packet content to detect prohibited or sensitive content and block traffic in real time |
| Blocking of suspicious protocols | Blocking or restricting protocols that can circumvent censorship, such as VPNs, Tor networks, and other forms of encrypted or anonymized communication |
| Active Probing | Proactive technique in which the government sends probes to identify and block VPN servers and proxies that are active on the network |
| Throttling (controlled slowdown) | Technique of purposely reducing available bandwidth, making certain connections so slow that they are practically unusable, without explicitly blocking them |

## Notable cases of China’s Great Firewall censorship
### Shaoguan incident (2009)
Following interethnic conflicts in Shaoguan, Guangdong province, the Chinese government completely **cut off internet access in the Xinjiang autonomous region**, directly **affecting 20 million people**, mostly of Uyghur ethnicity – an Islamic ethnic minority of China. The internet shutdown was used as a means to control information, prevent external communication, and contain protests and complaints. [1]

### CryptoCurrency Ban (2017–2021)
In 2017, at the height of the global cryptocurrency boom, Chinese authorities blocked access to major cryptocurrency exchanges. In 2021, regulation became stricter, ultimately leading to cryptocurrency transactions being made illegal in China. [2]

### Increased censorship in 2023 during Xi Jinping's election
According to a report presented at the [2023 USENIX Security Symposium](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingshi), there was a significant increase in censorship of encrypted traffic in the months leading up to Xi Jinping's re-election. Strict techniques, including **advanced statistical analysis and specific heuristics**, were widely used to **detect and block encrypted connections**.

However, shortly after the election, there was a notable reduction in this intensified censorship, indicating that the Great Firewall's control responds directly to the specific political contexts of the Chinese government. [3]

### Winnie the Pooh Censorship (2017–Present)

Beginning in mid-2017, images and references to Disney’s Winnie the Pooh were systematically removed from Chinese social media and streaming platforms after netizens memes began comparing the bear to President Xi Jinping. [4]

## Censorship circumvention and resistance
Embedding privacy into technology, through the implementation of techniques that confuse censors, is the fastest way to circumvent and resist a mega-censorship infrastructure like China’s Great Firewall.

### AmneziaWG
A practical example is the [AmneziaWG protocol](https://nym.com/blog/introducing-amneziawg-for-nymvpn), a fork of WireGuard adopted in **[NymVPN](https://nym.com)**, which modifies the traditional behavior of [WireGuard](https://nym.com/blog/what-is-wireguard-vpn) to **resist deep packet inspection (DPI)**. Among its strategies are sending fake packets before the handshake and varying headers between packets — tactics that make automatic detection by rigid DPI patterns difficult, without compromising connection efficiency.

### Tor
The [Tor project](https://nym.com/blog/what-is-tor) offers robust alternatives to circumvent censorship in China. These include:
- **WebTunnel** disguises traffic as regular HTTPS access
- **Snowflake** uses ephemeral proxies to create connections that are difficult to track
- Private **obfs4 bridges** avoid detection by not being publicly listed
- **Meek-azure** camouflages traffic as if it were from large cloud services, albeit with bandwidth limitations.

These tools, [as Tor notes](https://support.torproject.org/censorship/connecting-from-china), comprise an essential arsenal in the fight against digital censorship and demonstrate how reverse engineering and decentralization remain fundamental strategies for ensuring freedom and access to information.

## NymVPN’s censorship resistance project
In 2025, Nym is strengthening NymVPN's anti-censorship techniques. In addition to the already implemented **AmneziaWG as the default protocol** for its **Fast mode**, the censorship resistance team is currently working on:
- **Hardening APIs and infrastructure** (including more secure domain resolutions and more resilient configuration retrieval) for greater stability under restrictive networks
- **Integrating evasion transports** such as VMess/V2Ray, obfs4, and TLS tunnels (XRay/ShadowTLS style), as well as using “commoditized” QUIC, WebRTC, and TLS with obfuscation to blend in with ordinary traffic
- **[Post-quantum strengthening](https://nym.com/blog/nym-post-quantum-roadmap)**, updating the mixnet packet format and adding post-quantum handshake to an improved obfs4.

For more information on censorship resistance within the Nym community, check out [Nym’s official roadmap](https://nym.com/blog/NymVPN-Roadmap-for-censorship-resistance-2025).

## Conclusion
[Internet surveillance](/blog/articles/surveilled-internet/), as a market and a form of population management, spans across the entire political spectrum. Much less than a partisan position, the core of so-called **surveillance capitalism** – or would it be better in China to call it **surveillance communism?** – is the understanding of behaviors, tastes, and preferences with the ultimate intention of “conducting behaviour” – i.e., producing new trends in accordance with the interests of the surveillance agent.

This **population control** and surveillance of individuals – based on knowing where an individual is, what they do, who they communicate with, what they access online – is only possible **due to a centralized infrastructure** that does not prioritize user privacy.

**China's Great Firewall** and its success in building the world's largest censorship system are a direct legacy of an internet that was born as an American weapon during the Cold War, exposed information about users and the networks that constitute it, and was quickly privatised with the commercial power of the internet in mind.

Surveillance has thus become a global and connected market, in which countries and companies around the world collaborate to control populations. This was the case with China's Great Firewall, which in its early years had the [collaboration of American big tech companies](https://www.hrw.org/report/2006/08/10/race-bottom/corporate-complicity-chinese-internet-censorship) to get off the ground, and today [exports censorship and surveillance technology](https://www.voanews.com/a/china-seen-backing-digital-authoritarianism-in-latin-america-/6398072.html?utm_source=chatgpt.com) to various countries.

The question, however, of how to oppose this industry is not a simple one. How can we resist surveillance when we are surrounded by such a politically and financially profitable business?

Once again, we endorse [embedding anonymization techniques](https://nym.com/blog/what-is-a-mixnet) directly into the technology, along with the implementation of an architecture that does not rely on trust as a parameter.

But beyond that, we might ask: what if we manage to make the free internet something as interesting as — or even more interesting than — the monitored internet?

Indeed, that is the whole [appeal of Web3](https://nym.com/blog/what-is-web3).

<figure class="video"><div class="video-frame"><iframe src="https://player.vimeo.com/video/1094374610?dnt=1" title="Nym's Noise Generating Mixnet" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe></div><figcaption>Nym's Noise Generating Mixnet</figcaption></figure>

## References

[1] [The Guardian](https://www.theguardian.com/world/2009/jul/28/china-restores-limited-internet-access?utm_source=chatgpt.com)

[2] [Cointelegraph](https://cointelegraph.com/news/skirting-the-great-wall-the-chequered-saga-of-crypto-in-china-2013-2017)

[3] [Usenix](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingshi)

[4] [BBC](https://www.bbc.com/news/blogs-china-blog-40627855)

### The Great Firewall of China: FAQs

#### How does the Great Firewall of China block websites?

The Great Firewall combines DNS filtering, IP blocking, and deep packet inspection to restrict access to foreign sites. It identifies and blocks VPN traffic patterns, making most traditional VPNs detectable and ineffective inside China.

#### Is it legal to use a VPN in China?

VPN use is heavily restricted. Only government-approved VPNs are technically legal, but they lack privacy protections and are often monitored by the government. Tools like NymVPN use decentralized routing and advanced censorship resistance technology, making detection and blocking more difficult.

#### Can decentralized VPNs bypass the Great Firewall?

Yes. Decentralized VPNs like NymVPN don’t rely on centralized servers or fixed IP addresses, so they’re harder for censorship systems to detect or block. This architecture allows access to censored content without exposing user data.

#### Why is the Great Firewall important to global internet freedom?

China’s censorship model has influenced similar systems in other countries. Understanding how it works helps developers and privacy advocates strengthen global resistance to surveillance and information control.
