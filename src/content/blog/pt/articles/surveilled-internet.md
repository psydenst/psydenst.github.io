---
title: "Por que herdamos uma internet vigiada?"
description: "Os primórdios da Internet, a Guerra Fria e suas raízes militares e comerciais"
date: 2025-06-13
section: articles
lang: pt
tags: [privacy, technology-and-society]
cover: "/blog/surveilled-internet/cover.webp"
source: "https://nym.com/pt/blog/internet-de_vigilância"
sourceName: "Nym"
readingTime: 8
draft: false
---
## Por que ninguém fala sobre metadados

Há um marketing crescente e generalizado em torno da segurança de dados. De startups a grandes empresas de tecnologia, é comum ver a promoção de tecnologias voltadas para aumentar a privacidade do usuário, como a criptografia de ponta a ponta usada em produtos como o WhatsApp e o Google Drive.

No entanto, o cerne da vigilância reside em algo menos comentado: **a análise de metadados**.

Então, o que exatamente são metadados?
[Metadados](https://nym.com/pt/blog/what-is-metadata) são **detalhes técnicos e descritivos sobre comunicações digitais**. Isso inclui endereços IP de origem e destino, tempo de transmissão, tamanhos de pacotes e indicadores de estado da conexão (sinalizadores).

À primeira vista, esses detalhes parecem inofensivos, mas, em grande escala, permitem a criação de perfis detalhados sobre indivíduos e grupos — revelando padrões confidenciais como localização, hábitos diários, relacionamentos interpessoais e preferências pessoais ou profissionais. Na verdade:

> “Os metadados nos dizem absolutamente tudo sobre a vida de uma pessoa.” “Se tivermos metadados suficientes, não precisamos do conteúdo.”
> — Stewart Baker, ex-conselheiro jurídico geral dos EUA Agência de Segurança Nacional

<figure class="video"><div class="video-frame"><iframe src="https://player.vimeo.com/video/1103924698?dnt=1" title="O que são metadados?" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe></div><figcaption>O que são metadados?</figcaption></figure>

Além disso, é importante mencionar que **[a criptografia de ponta a ponta](https://nym.com/pt/blog/end-to-end-encryption) não garante o anonimato dos metadados**.

Na verdade, seus metadados ficam estruturalmente expostos na arquitetura atual da Internet. Mas quem decidiu por essa arquitetura?

## A Guerra Fria e os primórdios da internet

A internet surgiu inicialmente como um experimento colaborativo entre alguns EUA. universidades e os EUA Departamento de Defesa.

Em 1971, a ARPANET (antecessora da internet) tinha quinze pontos de conexão. A principal exigência para uma rede como essa era simples: resiliência contra um possível ataque soviético aos sistemas de comunicação dos Estados Unidos, que na época dependiam fortemente das redes telefônicas.

Assim, a ARPANET foi financiada pelos EUA. governo e administrado pela **Agência de Projetos de Pesquisa Avançada (ARPA)**.

Ao contrário do uso comercial e recreativo extensivo que a internet teria décadas mais tarde, **a ARPANET tinha objetivos militares claros**: segurança operacional, robustez e alta resistência a ataques. Essas prioridades estratégicas moldaram profundamente as tecnologias e as decisões arquitetônicas da rede.

## O ingrediente secreto: comutação de pacotes

Uma das principais inovações tecnológicas no desenvolvimento da ARPANET foi a **comutação de pacotes**, criada simultaneamente por Paul Baran nos EUA. e Donald Davies no Reino Unido.

Esse conceito **dividia as mensagens em pacotes menores que podiam trafegar independentemente** por várias rotas para chegar ao destino final. Se uma rota fosse bloqueada ou destruída, outros pacotes ainda poderiam chegar usando caminhos alternativos.
Ao eliminar a dependência de uma única linha centralizada, **a comutação de pacotes reduziu a chance de perda de pacotes e falhas de comunicação**  –  cumprindo o objetivo militar de construir um sistema de comunicação resiliente contra a ameaça soviética.

No entanto, **foi essa mesma tecnologia que expôs nossos metadados**. Para que um pacote de comunicação percorra a rede e chegue ao seu destino final, os metadados são expostos sem criptografia no cabeçalho dos pacotes de comunicação. Em outras palavras, a origem da exposição estrutural de nossos metadados está relacionada à forma como a comutação de pacotes funciona — além, é claro, de como a infraestrutura de rede é operada. Mas falaremos sobre isso mais tarde.

## Integrações tecnológicas: telefones, rádio e satélites

Inicialmente, o ARPANET usou o existente nos EUA **infraestrutura de rede de telefonia**. Embora prático e econômico, isso logo revelou limites geográficos e operacionais.

Para ampliar o alcance e a capacidade, a ARPANET começou a explorar tecnologias emergentes: comunicações por **rádio** e **satélite**. Na década de 1970, o projeto Alohanet tentou conectar as ilhas do Havaí por meio de rádio. A interferência do Signal levou Robert Metcalfe a desenvolver um sistema de espera antes da retransmissão de pacotes — uma abordagem que mais tarde evoluiu para o **padrão Ethernet**, substituindo o rádio por cabos físicos para redes locais.

Ao mesmo tempo, a tecnologia de satélite impulsionou significativamente as comunicações globais. Os satélites permitiram a transmissão confiável de dados a longa distância, alinhando-se aos objetivos estratégicos e militares dos EUA.
Em meados da década de 70, a ARPA operava três redes experimentais distintas:

- **ARPANET** (telefones fixos)
- **PRNET** (rádio)
- **SATNET** (satélites)

A necessidade urgente de integrar essas redes levou à criação do **protocolo TCP/IP** por Vint Cerf, Jon Postel e Danny Cohen.

## TCP/IP

O protocolo TCP/IP tem duas partes principais:

1. **TCP (Protocolo de Controle de Transmissão):** Gerencia conexões ponto a ponto, garantindo a entrega segura e ordenada de pacotes
2. **IP (Protocolo de Internet):** Gerencia a entrega de pacotes em diversas redes

Essa estrutura introduziu uma hierarquia clara:

- Um **nível de rede** (que identifica a rede à qual o usuário está conectado)
- Um **host level** (que identifica o dispositivo específico dentro dessa rede)

Além disso, a criação de **gateways** (dispositivos que conectam diferentes redes e direcionam o tráfego entre elas) foi essencial para conectar redes locais nessa estrutura hierárquica.

Essa configuração técnica expôs quantidades significativas de informações dos usuários — estruturalmente incorporadas à arquitetura da internet. Cada endereço IP pode revelar detalhes importantes, como localização geográfica aproximada, instituição ou provedor de internet e o tipo de dispositivo utilizado.

Para funcionar com eficiência, o protocolo TCP/IP exigia uma grande quantidade de metadados, incluindo **carimbos de data/hora** e **sinalizadores** que indicavam os estados da conexão.

Os criadores da Internet basicamente impuseram a exposição desses dados como um pré-requisito para acessar a rede — tudo isso apoiado por forte pressão dos EUA. financiamento governamental para expandir o TCP/IP globalmente.

#### Então, por que herdamos uma internet vigiada?

Porque, estrategicamente, para as instituições civis e militares que construíram a internet, era útil saber **quando, onde e como** alguém se conectava. Entre outras razões comerciais, é claro.

## A adoção em massa da Internet

A ascensão da internet à popularidade não foi impulsionada por um único agente ou por um plano centralizado. Isso resultou da convergência de muitas **forças institucionais, políticas, comerciais e sociais**.

Nas décadas de 1980 e 1990, a rede evoluiu de um experimento militar-acadêmico com base nos EUA para uma **infraestrutura global** moldada por interesses e visões concorrentes.

Inicialmente, o acesso à ARPANET era restrito a alguns usuários nos EUA universidades financiadas pela ARPA. Isso gerou pressão para democratizar o acesso, especialmente por meio da National Science Foundation (NSF), que começou a construir sua própria rede em 1984.

Quando a NSF integrou sua rede à ARPANET, quase todos os EUA as universidades obtiveram acesso à internet, abrindo as portas para uma **internet civil**. Isso marcou uma mudança fundamental: a internet começou a se expandir de forma **descentralizada**, com os usuários criando redes locais (LANs) que seriam conectadas a infraestruturas mais amplas.

Para dar suporte a esse crescimento, foi criado o **Sistema de Nomes de Domínio (DNS)**. Gerenciamento descentralizado de endereços de host por DNS, atribuindo servidores para gerenciar diferentes domínios, como **.edu, .gov, .mil, .com, .org e .net.** Isso ajudou a internet a crescer e reforçou sua estrutura hierárquica e internacional.

No entanto, surgiu um grande problema: os EUA A lei proibia o uso comercial da infraestrutura pública.

Durante a gestão da NSF, o uso da internet era restrito à educação e à pesquisa. Mas o aumento da demanda e a pressão do setor privado levaram à **privatização** da infraestrutura da internet.

A partir de 1991, surgiram os primeiros **Provedores de Serviços de Internet (ISPs)**, marcando a comercialização da web.
Empresas privadas passaram a gerenciar a rede física — cabos, switches e servidores — fornecendo conexões TCP/IP aos usuários finais (e também coletando todos os metadados dos usuários).

Assim, a partir dos anos 90, a internet civil deixou de ser uma plataforma educacional/scientific e tornou-se um **espaço de consumo, entretenimento, socialização e autoexpressão**, em consonância com o uso contemporâneo da web.

## Repensando os fundamentos técnicos da internet

Compreender as origens históricas da internet ajuda a explicar por que ela expõe tantos metadados ,  e por que não foi projetada levando em conta a privacidade individual.

Na verdade, esse legado histórico limita significativamente a capacidade atual de proteger a privacidade online.
No entanto, em vez de apontar para um culpado histórico, nossa verdadeira pergunta deveria ser: **Por que essa infraestrutura não foi alterada até hoje?**

Até hoje, metadados continuam vazando no nível da rede, expondo informações confidenciais dos usuários a **governos, empresas privadas e cibercriminosos**.

Redes de anonimato de Camada 0, como a [Noise Generating mixnet da NymVPN](https://nym.com/pt/blog/what-is-a-mixnet), que aprimora o projeto de rede agora vulnerável do [Tor](https://nym.com/pt/blog/what-is-tor), são novas tecnologias cruciais no mercado, capazes de codificar metadados para proteger as informações dos usuários e os padrões de tráfego no nível da rede.

Se a privacidade não foi um princípio fundador da internet, cabe à geração de hoje torná-la um.

Seja promovendo uma mudança estrutural na arquitetura da rede, seja por meio de ações diretas e individuais, incorporando a privacidade ao próprio uso da tecnologia.

### Vigilância na Internet: Perguntas frequentes

#### Como a história militar e comercial moldou a atual infraestrutura de vigilância profunda de metadados?

A governança da Internet passou das redes acadêmicas gerenciadas pela NSF para provedores de internet privatizados que registram o tráfego para fins de comercialização e aplicação da lei — incorporando a coleta em massa de metadados ao núcleo da infraestrutura.

#### Quais projetos técnicos dos sistemas da era da Guerra Fria ainda servem de base para os recursos modernos de vigilância?

Técnicas como o registro de TCP/IP, DPI e o monitoramento centralizado do backbone surgiram da pesquisa militar, e seu legado persiste nos sistemas de supervisão de rede atuais.

#### Por que os metadados são considerados mais invasivos do que os registros de conteúdo na legislação de vigilância?

Metadados — como registros de data e hora, endereços IP e registros de roteamento — podem revelar associações e padrões ao longo do tempo, muitas vezes sem a necessidade de descriptografia das comunicações.

#### Como a arquitetura mixnet poderia reverter a visibilidade de metadados de longa data no roteamento da internet?

As mixnets quebram a rastreabilidade persistente agrupando mensagens, injetando tráfego de disfarce e reordenando pacotes — tornando praticamente inviável rastrear a origem do tráfego.

#### Qual é o papel dos provedores de internet (ISPs) e das empresas de telecomunicações na economia da vigilância atual?

Eles são os principais coletores de dados — registrando metadados do tráfego dos assinantes, limitando o acesso ou vendendo perfis de uso — e atuam como pontos de estrangulamento tanto para a infraestrutura de vigilância estatal quanto corporativa.
