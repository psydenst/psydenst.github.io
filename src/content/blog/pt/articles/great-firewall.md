---
title: "O que é o Grande Firewall da China?"
description: "Como funciona o maior aparato de censura do mundo — e como contorná-lo"
date: 2025-08-01
section: articles
lang: pt
tags: [privacy, technology-and-society]
cover: "/blog/great-firewall/cover.webp"
source: "https://nym.com/pt/blog/what-is-great-firewall-of-china"
sourceName: "Nym"
readingTime: 7
draft: false
---
A Grande Muralha da China, uma das grandes maravilhas do mundo antigo, foi erguida para proteger o reino contra exércitos invasores. Hoje, existe outra barreira, não menos tangível, mesmo que invisível. O **Grande Firewall** da China é o **maior e mais sofisticado sistema de censura do mundo**. Ao controlar tanto o tráfego de conteúdo no nível do serviço quanto a infraestrutura, ela separa a internet chinesa do resto do mundo, limitando o livre acesso à informação e a liberdade de expressão do povo chinês.

Na verdade, a internet na China deve ser entendida mais como uma **intranet nacional**, fortemente regulamentada e isolada do resto do mundo, do que como uma internet global. E isso, é claro, não é por acaso: tem motivação ideológica e política.

> “As forças antichinesas no Ocidente têm tentado constantemente, e sem sucesso, explorar a internet para ‘derrubar a China’...” A nossa capacidade de manter a nossa posição e ganhar esta batalha na Internet tem uma influência directa na segurança ideológica e política do nosso país."

– Xi Jinping, discurso na Propaganda Nacional e Conferência de Ideologia, Agosto de 2013

Assim, a manutenção, expansão e modificação do Grande Firewall da China é uma **política de estado activa**, variando de acordo com os interesses do estado.

## Como funciona o Grande Firewall

Para entender como um [sistema de vigilância e censura](https://nym.com/pt/blog/internet-censorship-global-threat) desta escala funciona, vamos recapitular brevemente a arquitetura e infraestrutura global da internet.

**[Provedores de Serviços de Internet](https://nym.com/pt/blog/internet-service-providers) (ISPs)** são responsáveis por conectar as redes locais de pessoas físicas e jurídicas à internet. Os provedores de internet (ISPs) funcionam basicamente como portas de acesso a outras partes da rede global, gerenciando o hardware necessário para estabelecer e manter essas conexões.

Ao contrário da maioria dos países do mundo, **os provedores de internet na China** não são empresas privadas, mas **entidades diretamente ligadas ao governo**, em particular a **China Unicom** e a **China Telecom**. Ambos constituem a **espinha dorsal da internet chinesa**, ou seja, a principal infraestrutura que gerencia tudo, desde o tráfego nacional de dados — por meio de cabos de rede, servidores e roteadores — até o tráfego internacional, por meio de gateways e cabos submarinos intercontinentais.

Usando técnicas como **filtragem de IP, bloqueio de domínios DNS e inspeção profunda de pacotes (DPI)**, essas empresas são capazes de detectar e bloquear conteúdos considerados sensíveis ou indesejáveis pelo governo chinês, tanto dentro da China quanto em conexões internacionais. Isso significa que, quando os chineses tentam acessar sites estrangeiros ou se comunicar com pessoas fora da China, seus dados devem passar por esses pontos de controle, onde são monitorados, analisados e, se necessário, bloqueados ou limitados pelo Grande Firewall.

Portanto, a censura ocorre em várias camadas: provedores de internet, data centers e centrais nacionais de tráfego. Isso varia desde filtragem de conteúdo, limitação de banda, bloqueio de serviços e até mesmo suspensão total do acesso à internet. Tudo isso é implementado de maneira uniforme por empresas estatais sob **controle governamental centralizado**.

Por fim, vale ressaltar que a maior regulamentação ocorre nos pontos de intercâmbio internacionais do backbone da internet chinesa (Pequim, Guangzhou, Xangai, Urumqi, Xi’an). No entanto, o Grande Firewall opera em âmbito nacional.

### Principais técnicas de censura na China

| Recursos | Description of technique |
| --- | --- |
| DNS blocking | A technique that prevents domain name resolution, blocking access to specific websites through manipulated DNS servers |
| IP blocking | Prevents direct access to certain IP addresses considered undesirable or dangerous by the Chinese government |
| SNI TLS inspection | A technique that analyzes the Server Name Indication (SNI) of TLS certificates to detect and block access to specific domains even on encrypted connections |
| Deep Packet Inspection (DPI) | Detailed inspection of data packet content to detect prohibited or sensitive content and block traffic in real time |
| Blocking of suspicious protocols | Blocking or restricting protocols that can circumvent censorship, such as VPNs, Tor networks, and other forms of encrypted or anonymized communication |
| Active Probing | Proactive technique in which the government sends probes to identify and block VPN servers and proxies that are active on the network |
| Throttling (controlled slowdown) | Technique of purposely reducing available bandwidth, making certain connections so slow that they are practically unusable, without explicitly blocking them |

## Casos notáveis de censura do Grande Firewall da China

### Incidente de Shaoguan (2009)

Após conflitos interétnicos em Shaoguan, na província de Guangdong, o governo chinês **bloqueou completamente o acesso à internet na região autônoma de Xinjiang**, **afetando diretamente 20 milhões de pessoas**, em sua maioria da etnia uigur — uma minoria étnica islâmica da China. O bloqueio da internet foi usado como um meio de controlar informações, impedir a comunicação externa e conter protestos e reclamações. [1]

### Proibição das criptomoedas (2017–2021)

Em 2017, no auge do boom global das criptomoedas, as autoridades chinesas bloquearam o acesso às principais corretoras de criptomoedas. Em 2021, a regulamentação tornou-se mais rigorosa, levando, por fim, à ilegalização das transações com criptomoedas na China. [2]

### Aumento da censura em 2023 durante a eleição de Xi Jinping

De acordo com um relatório apresentado no [Simpósio de Segurança USENIX 2023](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingshi), houve um aumento significativo na censura do tráfego criptografado nos meses que antecederam a reeleição de Xi Jinping. Técnicas rigorosas, incluindo **análise estatística avançada e heurísticas específicas**, foram amplamente utilizadas para **detectar e bloquear conexões criptografadas**.

No entanto, logo após a eleição, houve uma redução notável nessa censura intensificada, indicando que o controle do Grande Firewall responde diretamente aos contextos políticos específicos do governo chinês. [3]

### Censura do Ursinho Pooh (2017–presente)

A partir de meados de 2017, imagens e referências ao Ursinho Pooh, da Disney, foram sistematicamente removidas das redes sociais e plataformas de streaming chinesas depois que memes criados por internautas começaram a comparar o urso ao presidente Xi Jinping. [4]

## Censura circunvenção e resistência

Incorporar a privacidade à tecnologia, por meio da implementação de técnicas que confundem os censores, é a maneira mais rápida de contornar e resistir a uma infraestrutura de megacensura como o Grande Firewall da China.

### AmneziaWG

Um exemplo prático é o [protocolo AmneziaWG](https://nym.com/pt/blog/introducing-amneziawg-for-nymvpn), um fork do WireGuard adotado no **[NymVPN](https://nym.com)**, que modifica o comportamento tradicional do [WireGuard](https://nym.com/pt/blog/what-is-wireguard-vpn) para **resistir à inspeção profunda de pacotes (DPI)**. Entre suas estratégias estão o envio de pacotes falsos antes do handshake e a variação de cabeçalhos entre os pacotes — táticas que dificultam a detecção automática por padrões rígidos de DPI, sem comprometer a eficiência da conexão.

### Tor

O [Projeto Tor](https://nym.com/pt/blog/what-is-tor) oferece alternativas robustas para contornar a censura na China. Isso inclui:

- **WebTunnel** disfarça o tráfego como um acesso HTTPS normal
- **Snowflake** usa proxies efêmeros para criar conexões difíceis de rastrear
- As **pontes obfs4** privadas evitam a detecção por não serem listadas publicamente
- **Meek-azure** camufla o tráfego como se ele viesse de grandes serviços em nuvem, embora com limitações de largura de banda.

Essas ferramentas, [conforme observa o Tor](https://support.torproject.org/censorship/connecting-from-china), constituem um arsenal essencial na luta contra a censura digital e demonstram como a engenharia reversa e a descentralização continuam sendo estratégias fundamentais para garantir a liberdade e o acesso à informação.

## Projeto de resistência à censura da NymVPN

Em 2025, a Nym está fortalecendo as técnicas anticensura da NymVPN. Além do **AmneziaWG**, já implementado como protocolo padrão para o **modo rápido**, a equipe de resistência à censura está atualmente trabalhando em:

- **Fortalecimento das APIs e da infraestrutura** (incluindo resoluções de domínio mais seguras e recuperação de configuração mais resiliente) para maior estabilidade em redes restritivas
- **Integração de transportes de evasão**, como VMess/V2Ray, obfs4 e túneis TLS (estilo XRay/ShadowTLS), bem como o uso de QUIC, WebRTC e TLS “padronizados” com ofuscação para se misturar ao tráfego comum
- **[Fortalecimento pós-quântico](https://nym.com/pt/blog/nym-post-quantum-roadmap)**, atualizando o formato de pacotes da mixnet e adicionando handshake pós-quântico a um obfs4 aprimorado.

Para obter mais informações sobre a resistência à censura na comunidade Nym, confira o [roteiro oficial da Nym](https://nym.com/pt/blog/NymVPN-Roadmap-for-censorship-resistance-2025).

## Conclusão

[A vigilância na Internet](/pt/blog/articles/surveilled-internet/), como mercado e forma de gestão da população, abrange todo o espectro político. Muito mais do que uma posição partidária, o cerne do chamado **capitalismo de vigilância** — ou seria melhor, na China, chamá-lo de **comunismo de vigilância?** — é a compreensão de comportamentos, gostos e preferências com a intenção final de “conduzir o comportamento” — ou seja, produzir novas tendências de acordo com os interesses do agente de vigilância.

Esse **controle populacional** e vigilância de indivíduos — com base no conhecimento de onde um indivíduo está, o que faz, com quem se comunica e o que acessa online — só é possível **devido a uma infraestrutura centralizada** que não prioriza a privacidade do usuário.

**Grande Firewall da China** e seu sucesso na construção do maior sistema de censura do mundo são um legado direto de uma internet que nasceu como uma arma americana durante a Guerra Fria, expôs a informação sobre os utilizadores e as redes que a constituem e foi rapidamente privatizada tendo em mente o poder comercial da Internet.

A vigilância tornou-se assim um mercado global e interligado, no qual países e empresas de todo o mundo colaboram para controlar as populações. Foi o que aconteceu com o Grande Fogo da China, que, nos seus primeiros anos, teve a [colaboração das grandes empresas de tecnologia americanas](https://www.hrw.org/report/2006/08/10/race-bottom/corporate-complicity-chinese-internet-censorship) para arrancar do terreno. e hoje em dia [exporta censura e tecnologia de vigilância](https://www.voanews.com/a/china-seen-backing-digital-authoritarianism-in-latin-america-/6398072.html?utm_source=chatgpt.com) para vários países.

A questão, no entanto, de como se opor a esse setor não é simples. Como podemos resistir à vigilância quando estamos cercados por um negócio tão lucrativo, tanto politicamente quanto financeiramente?

Mais uma vez, defendemos a [incorporação de técnicas de anonimização](https://nym.com/pt/blog/what-is-a-mixnet) diretamente na tecnologia, juntamente com a implementação de uma arquitetura que não dependa da confiança como parâmetro.

Mas, além disso, podemos nos perguntar: e se conseguirmos tornar a internet livre algo tão interessante quanto — ou até mais interessante do que — a internet monitorada?

De fato, esse é todo o [atrativo da Web3](https://nym.com/pt/blog/what-is-web3).

<figure class="video"><div class="video-frame"><iframe src="https://player.vimeo.com/video/1094374610?dnt=1" title="Nilo Gerando Mixnet" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe></div><figcaption>Nilo Gerando Mixnet</figcaption></figure>

## Referências

[1] [The Guardian](https://www.theguardian.com/world/2009/jul/28/china-restores-limited-internet-access?utm_source=chatgpt.com)

[2] [Cointelegraph](https://cointelegraph.com/news/skirting-the-great-wall-the-chequered-saga-of-crypto-in-china-2013-2017)

[3] [Usenix](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingshi)

[4] [BBC](https://www.bbc.com/news/blogs-china-blog-40627855)

### Grande Firewall da China: perguntas frequentes

#### Como o Grande Firewall da China bloqueia sites?

O Great Firewall combina filtragem de DNS, bloqueio de IP e inspeção profunda de pacotes para restringir o acesso a sites estrangeiros. Ele identifica e bloqueia padrões de tráfego de VPN, tornando a maioria das VPNs tradicionais detectáveis e ineficazes dentro da China.

#### É legal usar uma VPN na China?

O uso da VPN é fortemente restrito. Apenas as VPNs aprovadas pelo governo são tecnicamente legais, mas elas carecem de proteções de privacidade e costumam ser monitoradas pelo governo. Ferramentas como o NymVPN usam roteamento descentralizado e tecnologia avançada de resistência à censura, tornando a detecção e o bloqueio mais difíceis.

#### VPNs descentralizadas conseguem contornar o Grande Firewall?

Sim. VPNs descentralizadas como a NymVPN não dependem de servidores centralizados ou endereços IP fixos, por isso são mais difíceis de detectar ou bloquear por sistemas de censura. Essa arquitetura permite o acesso a conteúdo censurado sem expor os dados do usuário.

#### Por que o Grande Firewall é importante para a liberdade global na internet?

O modelo de censura da China influenciou sistemas semelhantes em outros países. Entender como isso funciona ajuda desenvolvedores e defensores da privacidade a fortalecer a resistência global à vigilância e ao controle de informações.
