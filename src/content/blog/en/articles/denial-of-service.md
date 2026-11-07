---
title: "What is a Denial-of-Service (DoS) attack?"
description: "Understanding the history, evolution, and severity of denial-of-service attack"
date: 2025-09-01
section: articles
lang: en
tags: [cybersecurity]
cover: "/blog/denial-of-service/cover.webp"
source: "https://nym.com/blog/denial-of-service-attacks"
sourceName: "Nym"
readingTime: 6
draft: false
---
**Denial of Service (DoS)** is one of the oldest and most persistent forms of cyberattack. Its objective is simple: **to deny the availability of a legitimate service**.

## Forms of Denial-of-service attacks

DoS attacks occurs mainly through the following techniques:
- **Flooding**: a coordinated attack overloads the servers responsible for supporting the service with more traffic than they can handle
- **Exploiting a vulnerability**: specific messages — called **exploits** — make the service unavailable by exhausting its computational resources, either by inducing an infinite loop, slowing it down, crashing it, freezing it, or restarting the application.

Thus, attackers exploit vulnerabilities or overload resources such as **network bandwidth, CPU, and memory** until the target can no longer serve its customers.

One of the most effective forms of this attack is its distributed form — **Distributed Denial of Service (DDoS)** — in which an attacker invades and controls multiple machines, then orchestrates an attack on the victim. Typically, attacks using the above **flooding** method are DDoS.

Difficult to trace and with an aggressive impact, DoS and DDoS attacks are as old as the commercial internet and are constantly evolving into more modern and effective methods of denial of service, such as the recent introduction of artificial intelligence and cloud technology in the orchestration of these attacks.

So how does a DoS attack begin?

## How devices are recruited, hacked, and exploited
You may have heard about botnets and the [risks of free VPNs](https://nym.com/blog/botnets-and-backdoors). Downloading malicious programs that hide under legitimate services is one of the most common ways devices are hacked, reminding us of the philosophical maxim of Reddit forums: **if the service is free, you are the product**.

The basic idea behind a **DDoS attack** — i.e., the distributed form of a DoS attack, which is currently its most popular form — is, first and foremost, to **recruit enough computing power to overload the victim's service**. This is done by hijacking vulnerable devices and installing malicious software on them, which allows the attack's mastermind to remotely control that device.

The set of hijacked computers, servers, and IoT devices is called a [**botnet**](https://nym.com/blog/what-is-a-botnet), and it is the cybercriminals' computing army.
Second, the invasion of this nation of computers serves to **anonymize the source of the attack**, which means that those responsible for DDoS attacks are rarely held accountable for their crimes.

Therefore, before downloading a “free” VPN or web service, **consider the fact that your machine may be hijacked into a criminal botnet** and that, without your knowledge, various illegal activities — especially DDoS attacks — may be [linked to your IP address](https://nym.com/blog/what-is-my-ip-address).

## DoS attack architecture
Below is an example of **distributed architecture** in which an attacker compromises multiple machines through handlers, keeping their identity anonymous and incriminating the owners of the machines recruited to the botnet.

![](/blog/denial-of-service/what_is_a_denial_of_service_dos_attack_i_nym_explains.webp)

Figure 1.1 - handlers / agent architecture.

The central idea behind **handlers**, which are intermediate servers between the attacker and the infected machines, is to make it difficult to trace the hacker or group responsible for the attack.
Thus, **agent machines** — the frontline soldiers — respond directly to handler servers, carrying out a DoS or DDoS attack on the victim, either through **exploits** or **flooding**. Handlers are, of course, controlled by the attacker.

What do agents and handlers have in common? Usually, **weak cybersecurity policies**, such as:
- Weak or default passwords
- Poorly configured firewalls
- Outdated systems without security patches.

Also, **social engineering**, in which criminals routinely falsify internal company communications, inducing the installation of malicious software, manipulating employees to provide privileged access to the company's system, or simply exchanging malicious links via email, is one of the most effective ways to invade and control devices.
## Cloud, AI, and the DoS market revolution
### Risk in the clouds

No one wants to remember the years of the COVID-19 pandemic: lockdowns, economic crisis, overcrowded public health services, and deaths... Indeed, they were agonizing years. But one lasting effect — perhaps positive for some — was the acceleration and popularization of the **home office**.

However, working from home means, in almost all possible scenarios, accessing your company's system remotely. This, in turn, implies the availability of services in **clouds**.

Roughly speaking, we can summarize **clouds** as very powerful machines located in huge data centers around the world that host and provide commercial services. In other words, instead of running on your machine or your company's server, the service runs on the machines of cloud providers such as AWS, Microsoft Azure, and Google Cloud.

Often, a company hires **two, three, or more cloud providers** to host its services. However, each cloud has **different settings, permissions, and logs**. This fragmentation can create security inconsistencies. More importantly, the massive adoption of cloud services **increases the possible surface of attack**.

Thus, we can see that DoS attack methods evolve according to the state-of-the-art technology at that point in history.

### Home PCs
In the 1990s and 2000s, the popularization of home PCs led to the creation of self-replicating worms and other malware such as **Phatbot**, which invaded Windows systems and were used in botnets.

### The Internet of Things
In the years 2010–2015, the Internet of Things (IoT) device revolution greatly multiplied the number of vulnerable machines, generating emblematic cases such as **Mirai**.

### Cloud services
After 2020, the **mass adoption of cloud services** brought both new possibilities and new risks. Now, volumetric attacks can be directed against critical cloud services, exploiting their elasticity and turning DDoS into an **economic attack**: the cloud supports the traffic, but charges for each request.

### AI acceleration of risks

At the same time, **artificial intelligence** has come to play a central role in these attacks. Previously dependent on manual coordination by hackers or groups, attacks are now automated by **machine learning algorithms**. These systems analyze defenses in real time and adjust the attack in seconds, making it more resilient. In addition, democratization via models such as **FraudGPT** and **WormGPT** has put attack tools in the hands of even beginners. Script kiddies now do pair programming with large language models (LLMs), amplifying their impact capacity, even given their low technical training.

### AI Revolutionizing the market

Therefore, the combination of **cloud and AI** has revolutionized the DDoS market: the cloud has provided scale and economic impact, while AI has provided adaptability and accessibility.

Last but not least, we are talking about a **DDoS market**: just as we can rent monthly streaming and cloud storage services, criminal markets for on-demand DDoS attacks are also available on Telegram channels.

Indeed, it has never been easier to attack your competitor on Black Friday or even gift your favorite enemies with millions of HTTP requests per second.

### History of DoS attacks

| Date | Description | Tech Stack | Responsible(s) |
| --- | --- | --- | --- |
| 2003-2004 | Emergence of the Phatbot [1]  worm, which exploited vulnerabilities in Windows systems to control millions of machines, used for spam, credential theft, and massive DDoS attacks. | Exploiting vulnerabilities in Windows + self-replicating worms | No clear central authorship |
| 2016 | The Mirai [2]  botnet, made up of millions of insecure IoT devices (cameras, routers, DVRs), was used in an attack against **DynDNS**, which resulted in the shutdown of global services such as Netflix & Amazon. | Exploitation of default passwords on IoT devices, creation of a massive botnet, and distributed volumetric attack | In 2017, Paras Jha, Josiah White, and Dalton Norman pleaded guilty to crimes related to the Mirai botnet. [45] By assisting the government in other investigations, they were sentenced to probation and community service without |
| 2016 | Exploitation of the TR-069 protocol, used by modems for remote management. Malicious files sent caused a mass reboot of millions of devices in Europe | Exploitation of the TR-069 (CWMP) protocol, sending malicious SOAP payloads [2]. | Daniel Kaye (“SpiderMan”), British hacker hired to attack a Liberian telecom company. He ended up shutting down the entire internet in Liberia. |
| 2018 | GitHub suffered one of the largest DDoS attacks in history at the time, with peaks of 1.3 Tbps, exploiting open memcached servers on the internet. | Memcached amplification [3] (reflection and amplification via UDP) | Not attributed to a specific group; likely operators of rented botnets (DDoS-for-hire) |
| 2022 | During the Russia–Ukraine war, Telegram channels coordinated DDoS attacks against government websites, banks, and private companies in both countries | Distributed botnets + coordination via Telegram bots | Killnet (pro-Russia) and the IT Army of Ukraine (pro-Ukraine) |
| 2022 | During the Russia–Ukraine war, Telegram channels coordinated DDoS attacks against government websites, banks, and private companies in both countries | Distributed botnets + coordination via Telegram bots | Killnet (pro-Russia) and the IT Army of Ukraine (pro-Ukraine) |
| 2023 | Discovery and exploitation of the HTTP/2 Rapid Reset Attack [4], in which multiple connections are opened and quickly canceled, overloading modern web servers | HTTP/2 protocol, exploitation of the pipelining mechanism and stream reset | The attack was claimed by the pro-Russia hacker activist group NoName05617 |
| 2025 | The social network X (formerly Twitter) was the target of a massive DDoS attack, which sought to draw political attention and cause media chaos | Botnets distributed across cloud servers + coordination on Telegram, using modern L3/L4/L7 flooding [5] techniques | Dark Storm Team, a pro-Palestinian hacker activist group. |

**Note:** *Claims of responsibility for attacks by hackeractivist groups are not sufficient to prove their authorship. It is important to remember that there is a market for DDoS-for-hire and that different groups — with or without political motivations behind them — are competing for media attention, supporters, and money.*

## Why DoS is difficult to combat
Combating DoS and DDoS attacks is one of the greatest challenges in contemporary digital security. The reasons range from technical limitations to economic and social factors. Among the main difficulties are:

### Scalability of the attack
Cloud providers can absorb millions of simultaneous connections without their services going down. However, each extra request processed generates costs — and these costs are passed on to the target company. Thus, a volumetric attack can not only make services unavailable, but also **force massive economic losses**, turning DDoS into a financial weapon.

### Limited tracking
A classic technique used in attacks is **IP spoofing**. In this technique, the attacker falsifies the source IP address in the packets sent, making them appear to come from somewhere else. Combined with the use of **handlers** (intermediary servers) and distributed networks, this makes it difficult to identify the true author of the attack. The result is that, often, the investigation ends up tracking only the **agent machines** — those hijacked to compose the botnet — and not the attacker orchestrating the DDoS.

### Similarity between legitimate and illegitimate traffic
Separating real users from bots is one of the most complex aspects of DDoS defense. This is because **attackers** do not send “strange” or easily identifiable packets, but **simulate perfectly valid requests**, using the same protocols (HTTP/HTTPS, [DNS](https://nym.com/blog/dns-leaks)), ports, and data formats as legitimate access. Often, the packets have correct headers, valid tokens, and even follow typical human user browsing patterns.

In **layer 7 attacks**, for example, a simple GET or POST request made by a bot is identical to one made by a person. In addition, some groups apply **machine learning** techniques that **analyze real traffic** and generate patterns that mimic it — reproducing access cadences, peak times, and even API interactions. Therefore, in essence, **criminal traffic is often indistinguishable from legitimate traffic**, coming from various sources, with patterns similar to those of legitimate users, with only a clear distinction in scale between the two — i.e., the number of requests per second.

### Expanded attack surface
In the current scenario, dependence on multiple cloud providers, the proliferation of IoT devices without security patches, and the explosion of third-party APIs create even more vulnerabilities. The case of APIs is critical: since communication is machine-to-machine, distinguishing legitimate traffic from malicious traffic is particularly difficult. An attacker can simulate correct requests, with valid variables and tokens, and still use them at scale to exhaust system resources.

### Competition among hackers
Authorship in DDoS attacks is rarely clear. Groups may claim responsibility for attacks without actually having carried them out, just to gain notoriety. Since attacks are coordinated anonymously, often on channels such as [Telegram](https://nym.com/blog/what-is-telegram), “authorship” does not equate to “truth.” Furthermore, since botnets incriminate the owners of the agent machines, correctly attributing the attack to the hacker or group responsible becomes even more uncertain.

## Conclusion
DoS and DDoS attacks have evolved alongside the internet itself. While they began as rudimentary traffic overload offensives, today they combine global scale, automation, and artificial intelligence, becoming more sophisticated and resilient.

The democratization of cybercrime, which is openly marketed today on Telegram channels, with DDoS-as-a-service plans, crypto payments, and even LLMs trained to assist in the [creation of malware](https://nym.com/blog/stop-malware), such as FraudGPT and WormGPT, lowers the barrier to entry for DDoS attacks.

As the Radware Threat Report shows [7], **web DDoS attacks increased by 550% from 2023 to 2024**, while **network DDoS attacks increased by 120%**. We are also experiencing an expansion of the attack surface with the expansion of the cloud market, and the future outlook remains the same as it was 30 years ago: **as new features emerge, new vulnerabilities arise**, which will be exploited, then addressed, and re-exploited in the eternal cat-and-mouse game that drives digital security.

In the end, DDoS is not just a technical problem — it is a mirror of the internet itself: open, powerful, and fragile, reminding us that resilience must evolve as quickly as the threats do.

## References

1. [Phatbot](https://www.sciencedirect.com/topics/computer-science/phatbot) - Science Direct

2. [What was the Mirai botnet?](https://www.malwarebytes.com/pt-br/what-was-the-mirai-botnet) - Malwarebytes

3. [How TR-069 works](https://made4it.com.br/en/how-works-tr-069/) - Made4it

4. [Top 7 SOAP vulnerabilities](https://brightsec.com/blog/top-7-soap-api-vulnerabilities) - Brightsec

5. [Memcached DDoS attacks](https://www.cloudflare.com/learning/ddos/memcached-ddos-attack) - Cloudflare

6. [Rapid Reset DDoS attacks](https://blog.cloudflare.com/technical-breakdown-http2-rapid-reset-ddos-attack) - Cloudfare

7. [What is Layer 3,4 and 7?](https://prophaze.com/learn/ddos/what-is-layer-3-4-and-7-ddos/?) - Prophaze

### DDoS: FAQs

#### What is the main goal of a denial-of-service attack?

A DoS attack floods a server or network with excessive traffic to overwhelm its resources. The goal is to make a website, service, or app temporarily unavailable to real users by exhausting bandwidth or system capacity.

#### How do DDoS attacks differ from regular DoS attacks?

A DoS attack comes from one source, while a DDoS (distributed denial-of-service) uses hundreds or thousands of infected devices worldwide. DDoS attacks are harder to trace and defend against because they appear as legitimate traffic from many endpoints.

#### Can VPNs protect against denial-of-service attacks?

A VPN hides your real IP address, making it harder for attackers to target your device directly. Decentralized VPNs like NymVPN add stronger protection by routing data through mixnets, so attackers can’t even identify or trace your connection source.

#### What should you do if you think you’re under a DoS attack?

Disconnect immediately, reboot your router, and contact your ISP or hosting provider. Switching networks or using a VPN can help mask your new IP. For organizations, deploying anti-DDoS tools and decentralized routing can mitigate future attacks.
