---
title: "O que é um ataque de Negação de Serviço (DoS)?"
description: "Compreendendo o histórico, a evolução e a gravidade dos ataques de negação de serviço"
date: 2025-09-01
section: articles
lang: pt
tags: [cybersecurity]
cover: "/blog/denial-of-service/cover.webp"
source: "https://nym.com/pt/blog/negativo-de-ataque"
sourceName: "Nym"
readingTime: 6
draft: false
---
**Negação de Serviço (DoS)** é uma das formas mais antigas e persistentes de ataque cibernético. Seu objetivo é simples: **impedir a disponibilidade de um serviço legítimo**.

## Formas de ataques de negação de serviço

Os ataques DoS ocorrem principalmente por meio das seguintes técnicas:

- **Flooding**: um ataque coordenado sobrecarrega os servidores responsáveis por dar suporte ao serviço com mais tráfego do que eles podem suportar
- **Exploração de uma vulnerabilidade**: mensagens específicas — chamadas de **exploits** — tornam o serviço indisponível ao esgotar seus recursos computacionais, seja induzindo um loop infinito, desacelerando-o, causando falhas, travando-o ou reiniciando o aplicativo.

Assim, os invasores exploram vulnerabilidades ou sobrecarregam recursos como **largura de banda da rede, CPU e memória** até que o alvo não consiga mais atender seus clientes.

Uma das formas mais eficazes desse ataque é a distribuída — **Negação de Serviço Distribuída (DDoS)** — na qual um invasor invade e controla várias máquinas e, em seguida, orquestra um ataque contra a vítima. Normalmente, os ataques que utilizam o método de **flooding** acima são do tipo DDoS.

Difíceis de rastrear e com um impacto agressivo, os ataques DoS e DDoS são tão antigos quanto a internet comercial e estão em constante evolução para métodos mais modernos e eficazes de negação de serviço, como a recente introdução da inteligência artificial e da tecnologia em nuvem na orquestração desses ataques.

Então, como um ataque DoS começa?

## Como os dispositivos são recrutados, hackeados e explorados

Você talvez já tenha ouvido falar sobre botnets e os [riscos das VPNs gratuitas](https://nym.com/pt/blog/botnets-and-backdoors). Baixar programas maliciosos que se escondem sob serviços legítimos é uma das formas mais comuns de dispositivos serem hackeados, o que nos lembra da máxima filosófica dos fóruns do Reddit: **se o serviço é gratuito, você é o produto**.

A ideia básica por trás de um **ataque DDoS** — ou seja, a forma distribuída de um ataque DoS, que atualmente é sua forma mais comum — é, antes de tudo, **reunir poder de computação suficiente para sobrecarregar o serviço da vítima**. Isso é feito sequestrando dispositivos vulneráveis e instalando software malicioso neles, o que permite que o autor do ataque controle remotamente esse dispositivo.

O conjunto de computadores, servidores e dispositivos de IoT sequestrados é chamado de [**botnet**](https://nym.com/pt/blog/what-is-a-botnet) e constitui o exército de computação dos cibercriminosos.
Em segundo lugar, a invasão dessa rede de computadores serve para **anonimizar a origem do ataque**, o que significa que os responsáveis por ataques DDoS raramente são responsabilizados por seus crimes.

Portanto, antes de baixar uma VPN ou serviço da web “gratuito”, **leve em consideração o fato de que seu computador pode ser sequestrado e transformado em parte de uma botnet criminosa** e que, sem o seu conhecimento, várias atividades ilegais — especialmente ataques DDoS — podem estar [vinculadas ao seu endereço IP](https://nym.com/pt/blog/what-is-my-ip-address).

## Arquitetura de ataque DoS

Abaixo está um exemplo de **arquitetura distribuída** na qual um invasor compromete várias máquinas por meio de handlers, mantendo sua identidade anônima e incriminando os proprietários das máquinas recrutadas para a botnet.

![](/blog/denial-of-service/what_is_a_denial_of_service_dos_attack_i_nym_explains.webp)

Figura 1.1 — arquitetura de handlers/agentes.

A ideia central por trás dos **handlers**, que são servidores intermediários entre o invasor e as máquinas infectadas, é dificultar o rastreamento do hacker ou do grupo responsável pelo ataque.
Assim, as **máquinas agentes** — os soldados da linha de frente — respondem diretamente aos servidores controladores, realizando um ataque DoS ou DDoS contra a vítima, seja por meio de **exploits** ou **flooding**. Os manipuladores são, obviamente, controlados pelo invasor.

O que agentes e manipuladores têm em comum? Normalmente, **políticas fracas de segurança cibernética**, tais como:

- Senhas fracas ou padrão
- Firewalls mal configurados
- Sistemas desatualizados sem patches de segurança.

Além disso, a **engenharia social**, na qual criminosos falsificam rotineiramente comunicações internas da empresa, induzindo a instalação de software malicioso, manipulando funcionários para que forneçam acesso privilegiado ao sistema da empresa ou simplesmente trocando links maliciosos por e-mail, é uma das formas mais eficazes de invadir e controlar dispositivos.

## Nuvem, IA e a revolução no mercado de DoS

### Risco nas nuvens

Ninguém quer se lembrar dos anos da pandemia da COVID-19: lockdowns, crise econômica, serviços de saúde pública sobrecarregados e mortes... De fato, foram anos angustiantes. Mas um efeito duradouro — talvez positivo para alguns — foi a aceleração e a popularização do **trabalho remoto**.

No entanto, trabalhar em casa significa, em quase todos os cenários possíveis, acessar o sistema da sua empresa remotamente. Isso, por sua vez, implica na disponibilidade de serviços em **nuvens**.

De maneira geral, podemos resumir as **nuvens** como máquinas muito poderosas localizadas em enormes data centers ao redor do mundo que hospedam e fornecem serviços comerciais. Em outras palavras, em vez de ser executado em sua máquina ou no servidor da sua empresa, o serviço é executado nas máquinas de provedores de nuvem, como AWS, Microsoft Azure e Google Cloud.

Frequentemente, uma empresa contrata **dois, três ou mais provedores de nuvem** para hospedar seus serviços. No entanto, cada nuvem possui **configurações, permissões e registros diferentes**. Essa fragmentação pode criar inconsistências de segurança. Mais importante ainda, a adoção em massa de serviços em nuvem **aumenta a superfície de ataque potencial**.

Assim, podemos ver que os métodos de ataque DoS evoluem de acordo com o estado da arte da tecnologia naquele momento da história.

### PCs domésticos

Nas décadas de 1990 e 2000, a popularização dos PCs domésticos levou à criação de worms autorreplicantes e outros malwares, como o **Phatbot**, que invadiam sistemas Windows e eram usados em botnets.

### A Internet das Coisas

Entre os anos de 2010 e 2015, a revolução dos dispositivos da Internet das Coisas (IoT) multiplicou significativamente o número de máquinas vulneráveis, gerando casos emblemáticos como o **Mirai**.

### Serviços em nuvem

Após 2020, a **adoção em massa de serviços em nuvem** trouxe novas possibilidades e novos riscos. Agora, ataques volumétricos podem ser direcionados contra serviços críticos em nuvem, explorando sua elasticidade e transformando o DDoS em um **ataque econômico**: a nuvem suporta o tráfego, mas cobra por cada solicitação.

### Aceleração de riscos por IA

Ao mesmo tempo, a **inteligência artificial** passou a desempenhar um papel central nesses ataques. Antes dependentes da coordenação manual por hackers ou grupos, os ataques agora são automatizados por **algoritmos de aprendizado de máquina**. Esses sistemas analisam as defesas em tempo real e ajustam o ataque em segundos, tornando-o mais resiliente. Além disso, a democratização por meio de modelos como **FraudGPT** e **WormGPT** colocou ferramentas de ataque nas mãos até mesmo de iniciantes. Os “script kiddies” agora fazem programação em pares com grandes modelos de linguagem (LLMs), ampliando sua capacidade de impacto, mesmo com seu baixo nível de treinamento técnico.

### IA revolucionando o mercado

Portanto, a combinação de **nuvem e IA** revolucionou o mercado de DDoS: a nuvem proporcionou escala e impacto econômico, enquanto a IA proporcionou adaptabilidade e acessibilidade.

Por último, mas não menos importante, estamos falando de um **mercado de DDoS**: assim como podemos assinar serviços mensais de streaming e armazenamento em nuvem, mercados criminosos para ataques DDoS sob demanda também estão disponíveis em canais do Telegram.

De fato, nunca foi tão fácil atacar seu concorrente na Black Friday ou até mesmo presentear seus inimigos favoritos com milhões de solicitações HTTP por segundo.

### Histórico de ataques DoS

| Data | Description | Tech Stack | Responsible(s) |
| --- | --- | --- | --- |
| 2003-2004 | Emergence of the Phatbot [1]  worm, which exploited vulnerabilities in Windows systems to control millions of machines, used for spam, credential theft, and massive DDoS attacks. | Exploiting vulnerabilities in Windows + self-replicating worms | No clear central authorship |
| 2016 | The Mirai [2]  botnet, made up of millions of insecure IoT devices (cameras, routers, DVRs), was used in an attack against **DynDNS**, which resulted in the shutdown of global services such as Netflix & Amazon. | Exploitation of default passwords on IoT devices, creation of a massive botnet, and distributed volumetric attack | In 2017, Paras Jha, Josiah White, and Dalton Norman pleaded guilty to crimes related to the Mirai botnet. [45] By assisting the government in other investigations, they were sentenced to probation and community service without |
| 2016 | Exploitation of the TR-069 protocol, used by modems for remote management. Malicious files sent caused a mass reboot of millions of devices in Europe | Exploitation of the TR-069 (CWMP) protocol, sending malicious SOAP payloads [2]. | Daniel Kaye (“SpiderMan”), British hacker hired to attack a Liberian telecom company. He ended up shutting down the entire internet in Liberia. |
| 2018 | GitHub suffered one of the largest DDoS attacks in history at the time, with peaks of 1.3 Tbps, exploiting open memcached servers on the internet. | Memcached amplification [3] (reflection and amplification via UDP) | Not attributed to a specific group; likely operators of rented botnets (DDoS-for-hire) |
| 2022 | During the Russia–Ukraine war, Telegram channels coordinated DDoS attacks against government websites, banks, and private companies in both countries | Distributed botnets + coordination via Telegram bots | Killnet (pro-Russia) and the IT Army of Ukraine (pro-Ukraine) |
| 2022 | During the Russia–Ukraine war, Telegram channels coordinated DDoS attacks against government websites, banks, and private companies in both countries | Distributed botnets + coordination via Telegram bots | Killnet (pro-Russia) and the IT Army of Ukraine (pro-Ukraine) |
| 2023 | Discovery and exploitation of the HTTP/2 Rapid Reset Attack [4], in which multiple connections are opened and quickly canceled, overloading modern web servers | HTTP/2 protocol, exploitation of the pipelining mechanism and stream reset | The attack was claimed by the pro-Russia hacker activist group NoName05617 |
| 2025 | The social network X (formerly Twitter) was the target of a massive DDoS attack, which sought to draw political attention and cause media chaos | Botnets distributed across cloud servers + coordination on Telegram, using modern L3/L4/L7 flooding [5] techniques | Dark Storm Team, a pro-Palestinian hacker activist group. |

**Observação:** _Reivindicações de responsabilidade por ataques realizados por grupos de hackers ativistas não são suficientes para provar sua autoria. É importante lembrar que existe um mercado para ataques DDoS por encomenda e que diferentes grupos — com ou sem motivações políticas por trás — estão competindo pela atenção da mídia, por apoiadores e por dinheiro._

## Por que é difícil combater ataques DoS

Combater ataques DoS e DDoS é um dos maiores desafios da segurança digital contemporânea. Os motivos variam de limitações técnicas a fatores econômicos e sociais. Entre as principais dificuldades estão:

### Escalabilidade do ataque

Os provedores de nuvem podem suportar milhões de conexões simultâneas sem que seus serviços sejam interrompidos. No entanto, cada solicitação adicional processada gera custos — e esses custos são repassados à empresa de destino. Assim, um ataque volumétrico pode não apenas tornar os serviços indisponíveis, mas também **causar enormes perdas econômicas**, transformando o DDoS em uma arma financeira.

### Rastreamento limitado

Uma técnica clássica usada em ataques é a **falsificação de IP**. Nessa técnica, o invasor falsifica o endereço IP de origem nos pacotes enviados, fazendo com que pareçam vir de outro lugar. Combinado com o uso de **handlers** (servidores intermediários) e redes distribuídas, isso dificulta a identificação do verdadeiro autor do ataque. O resultado é que, muitas vezes, a investigação acaba rastreando apenas as **máquinas-agentes** — aquelas sequestradas para compor a botnet — e não o invasor que orquestra o ataque DDoS.

### Semelhança entre tráfego legítimo e ilegítimo

Separar usuários reais dos bots é um dos aspectos mais complexos da defesa DDoS. Isso acontece porque os **atacantes** não enviam pacotes "estranhos" ou facilmente identificáveis, mas **simulam solicitações perfeitamente válidas**, usando os mesmos protocolos (HTTP/HTTPS, [DNS](https://nym.com/pt/blog/dns-leaks)), portas e formatos de dados como acesso legítimo. Muitas vezes, os pacotes têm cabeçalhos corretos, tokens válidos e até mesmo seguem padrões típicos de navegação do usuário humano.

Em **ataques da camada**, por exemplo, uma simples solicitação GET ou POST feita por um bot é idêntica à feita por uma pessoa. Além disso, alguns grupos aplicam técnicas de **aprendizagem automática** que **analisam o tráfego real** e geram padrões que o imitam — reproduzindo cadências de acesso, tempos de ponta, e até mesmo interações de API. Portanto, essencialmente, o **tráfego criminoso é muitas vezes indistinguível do tráfego legítimo**, vindo de várias fontes, com padrões semelhantes aos de usuários legítimos, com apenas uma clara distinção na escala entre os dois — i. ., o número de solicitações por segundo.

### Superfície de ataque expandida

No cenário atual, a dependência de múltiplos provedores de nuvem, a proliferação de dispositivos IoT sem correções de segurança, e a explosão de APIs de terceiros criam ainda mais vulnerabilidades. O caso das APIs é crítico: uma vez que a comunicação é máquina a máquina, distinguir o tráfego legítimo do tráfego malicioso é particularmente difícil. Um atacante pode simular solicitações corretas, com variáveis e tokens válidos e ainda usá-los em escala para esgotar recursos do sistema.

### Concorrência entre hackers

A autoria de ataques do DDoS raramente é clara. Os grupos podem chamar a si a responsabilidade dos ataques sem os terem executado, apenas para obterem notoriedade. Uma vez que os ataques são coordenados anonimamente, muitas vezes em canais como [Telegram](https://nym.com/pt/blog/what-is-telegram), "autor" não equivale a "verdade". Além disso, uma vez que os botnets incriminam os proprietários das máquinas de agentes, atribuindo corretamente o ataque ao responsável por hacker ou grupo torna-se ainda mais incerto.

## Conclusão

Ataques DoS e DDoS evoluíram ao lado da própria internet. Enquanto eles começaram como tráfego rudimentar sobrecarregam as ofensivas, hoje eles combinam escala global, automação e inteligência artificial, tornando-se mais sofisticados e resistentes.

A democratização do cibercrime, que hoje é abertamente comercializado nos canais do Telegram, com planos de serviços DDoS-as-a, pagamentos cripto, e até LLMs treinadas para ajudar na [criação de malware](https://nym.com/pt/blog/stop-malware), como FraudGPT e WormGPT, reduz a barreira de entrada para ataques DDoS.

Como o Relatório de Ameaça Radware mostra em [7], **Ataques via DDoS na web aumentaram 550% de 2023 para 2024**, enquanto a **ataques por DDoS na rede aumentaram 120%**. Também estamos enfrentando uma expansão da superfície de ataque com a expansão do mercado de nuvem, e as perspectivas futuras permanecem as mesmas de 30 anos atrás: **à medida que novos recursos surgem, novas vulnerabilidades aparecem**, que serão exploradas, depois corrigidas e exploradas novamente no eterno jogo de gato e rato que impulsiona a segurança digital.

No fim das contas, o DDoS não é apenas um problema técnico — é um espelho da própria internet: aberta, poderosa e frágil, lembrando-nos de que a resiliência deve evoluir tão rapidamente quanto as ameaças.

## Referências

1. [Phatbot](https://www.sciencedirect.com/topics/computer-science/phatbot) - Science Direct

2. [O que foi o botnet Mirai?](https://www.malwarebytes.com/pt-br/what-was-the-mirai-botnet) - Malwarebytes

3. [Como funciona o TR-069](https://made4it.com.br/en/how-works-tr-069/) - Made4it

4. [Top 7 vulnerabilidades SOAP](https://brightsec.com/blog/top-7-soap-api-vulnerabilities) - Brightsec

5. [Ataques DDoS via Memcached](https://www.cloudflare.com/learning/ddos/memcached-ddos-attack) - Cloudflare

6. [Ataques DDoS Rapid Reset](https://blog.cloudflare.com/technical-breakdown-http2-rapid-reset-ddos-attack) - Cloudfare

7. [O que é Layer 3, 4 e 7?](https://prophaze.com/learn/ddos/what-is-layer-3-4-and-7-ddos/?) - Prophaze

### DDoS: perguntas frequentes

#### Qual é o principal objetivo de um ataque de negação de serviço?

Um ataque DoS inunda um servidor ou rede com tráfego excessivo para sobrecarregar seus recursos. O objetivo é tornar um site, serviço ou aplicativo temporariamente indisponível para usuários reais, esgotando a largura de banda ou a capacidade do sistema.

#### Qual é a diferença entre ataques DDoS e ataques DoS comuns?

Um ataque DoS vem de uma única fonte, enquanto um DDoS (negação de serviço distribuída) usa centenas ou milhares de dispositivos infectados ao redor do mundo. Os ataques DDoS são mais difíceis de rastrear e combater porque aparecem como tráfego legítimo de muitos endpoints.

#### As VPNs conseguem proteger contra ataques de negação de serviço?

Uma VPN oculta seu endereço IP real, dificultando que invasores ataquem seu dispositivo diretamente. VPNs descentralizadas como a NymVPN adicionam uma proteção mais forte ao rotear os dados por meio de mixnets, de modo que os invasores não conseguem sequer identificar ou rastrear a origem da sua conexão.

#### O que você deve fazer se achar que está sofrendo um ataque DoS?

Desconecte-se imediatamente, reinicie seu roteador e entre em contato com seu provedor de internet ou provedor de hospedagem. Mudar de rede ou usar uma VPN pode ajudar a mascarar seu novo IP. Para organizações, a implantação de ferramentas anti-DDoS e roteamento descentralizado pode mitigar ataques futuros.
