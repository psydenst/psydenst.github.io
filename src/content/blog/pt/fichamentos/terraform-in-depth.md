---
title: "Terraform in Depth"
description: "Fichamento de Terraform in Depth, de Robert Hafner (Manning, 2025), dos fundamentos às primeiras notas sobre funções."
date: 2026-11-07
section: fichamentos
lang: pt
tags: [devops, iac]
cover: /blog/terraform-in-depth/book-cover.webp
coverFit: contain
draft: false
---

[Fichamento] Terraform in Depth
Robert Hafner  
Manning Publications, NY, US, 2025

Este fichamento acompanha, na ordem, as divisões das notas de leitura. A paginação do livro só é citada quando as próprias notas a informam; as páginas da impressão das notas não são páginas do livro. Lacunas permanecem indicadas para continuar na leitura. Os pequenos exemplos de HCL abaixo retomam os das notas, com correções de transcrição; não constituem uma configuração completa para deployment.

## Tf Overview

O ponto de partida é o caráter declarativo do Terraform: descrevemos o que queremos, em vez de escrever diretamente a sequência de operações para obtê-lo. A promessa de uma linguagem comum a diferentes providers não elimina, porém, as condições de realização dessa descrição. As notas destacam a dependência circular entre recursos: se cada um depende do outro para existir, o Terraform não consegue criá-los sem algum contorno manual.

Parece importante conservar essa tensão. Declarar o resultado não significa que qualquer conjunto de declarações seja executável. As dependências também fazem parte do problema. As notas incluem o diagrama a seguir nesse ponto: módulos de um deployment alcançam o Core pela CLI, depois providers, APIs públicas e recursos do vendor, enquanto o state permanece no backend.

![Visão geral do Terraform: módulos de um deployment alcançam o Core na CLI, depois providers, APIs públicas e recursos do vendor. O state fica no backend.](/blog/terraform-in-depth/overview.webp)

## tf CLI

A CLI aparece como o ponto de acesso à criação, atualização e destruição de infraestrutura, bem como às intervenções manuais mencionadas nas notas. O core do Terraform é apresentado como incorporado à CLI e acessível por ela. Distinguimos, assim, a descrição escrita em HCL da ferramenta que a interpreta e conduz a execução; não são a mesma coisa.

## Providers

O provider faz a interface entre Terraform e os sistemas de um vendor. A comunicação com o Terraform ocorre por gRPC.

![O Terraform Core comunica-se com o provider por gRPC; o provider fala com o vendor por uma API.](/blog/terraform-in-depth/core-provider-vendor.webp)

As notas indicam uma relação tendencialmente um a um entre provider e plataforma, mas preservamos o “tendencialmente”: não se trata aqui de uma identidade necessária.

Cada provider possui nomenclatura, estilo e documentação próprios. A linguagem comum, portanto, não dispensa a leitura da documentação particular. Ela unifica a forma de declarar, sem tornar iguais os objetos declarados.

## Vendors

O vendor possui sua própria API, seus recursos e sua maneira de operar, que o provider precisa abstrair. As referências ao [provider de pizza](https://mng.bz/dXPz) e ao [provider de sorvete do McDonald's](https://mng.bz/BXDq) ajudam a separar a ideia de provider da ideia mais restrita de um grande serviço de nuvem. A interface é o ponto decisivo, não uma única categoria de fornecedor.

## Backends

O backend define onde um workspace guarda seus arquivos de state. Sem configuração de backend, as notas registram o armazenamento local. A distinção que começa a se formar é entre gerir recursos por um provider e conservar o registro dessa gestão por um backend. Confundir esses papéis obscureceria o fluxo apresentado a seguir.

## Workspaces

As notas descrevem o workspace como um deployment de uma base de código Terraform com um backend e um conjunto de variáveis de entrada específicos. Tomamos essa formulação como o recorte adotado na leitura: uma mesma base de código não basta, sozinha, para determinar cada implantação. A relação precisa entre workspace, seleção de backend e entradas deverá ser retomada no livro, sem transformar essa definição breve em uma teoria completa de isolamento.

## Deployment flow

As notas representam esse ciclo como um loop: uma mudança desejada passa por init, plan e review; o review pode voltar à mudança desejada ou seguir para o apply, que então retorna a uma nova mudança desejada.

![Fluxo de deployment: uma mudança desejada passa por init, plan e review; o review pode voltar à mudança desejada ou seguir para o apply, que então retorna a uma nova mudança desejada.](/blog/terraform-in-depth/deployment-flow.webp)

## Init

A inicialização baixa os módulos e providers definidos na configuração. Os módulos podem ser públicos ou privados. O movimento aqui é preparar aquilo de que a execução depende, não ainda realizar a infraestrutura desejada. Convém distinguir a disponibilidade desses componentes da aplicação de mudanças.

## Plan

O comando `terraform plan` calcula um plano que poderá ser usado no apply. As notas separam três movimentos: **refresh**, leitura do estado real da infraestrutura e dos data sources; **compare**, confronto entre o que foi lido e o que o código pede; e **plan**, construção de um DAG de ações.

DAG significa grafo direcionado acíclico: as relações de dependência orientam a ordem possível das ações, sem ciclos. Retorna aqui a dificuldade registrada no início. O planejamento não é uma simples lista indiferente à ordem, mas uma organização das mudanças segundo suas dependências.

As notas mencionam `terraform graph` e incluem este exemplo de grafo do plan, da raiz até um recurso `aws_instance.web` e data sources relacionados, e daí ao provider da AWS.

![Exemplo de terraform graph, da raiz até um recurso aws_instance.web e data sources relacionados, e daí ao provider da AWS.](/blog/terraform-in-depth/plan-graph.webp)

## Apply

O apply executa o plano. Cada recurso criado possui um identificador único, e ao final são apresentados os totais de criações, atualizações e destruições, além dos erros encontrados. Parece necessário distinguir a previsão das ações, no plan, de sua efetivação, no apply: o plano ainda não é a infraestrutura modificada.

## Terraform vs OpenTofu

As notas situam em 2023 a mudança de licença do Terraform e a associam à versão 1.6; em seguida, apresentam o OpenTofu como fork open-source. Também o descrevem como um superset da linguagem Terraform, com funcionalidades adicionais. Registramos essas formulações como parte das notas, não como garantia geral de compatibilidade entre quaisquer versões. O marco exato de versão e o alcance dessa comparação ficam para conferência na continuação da leitura.

## Block Structure

Os blocos são apresentados como a base do HCL, podendo conter argumentos e subblocos. O primeiro exemplo aproxima uma consulta `data "aws_subnets" "main"`, com um subbloco `filter`, de um `resource "aws_instance" "hello_world"` que usa o resultado. A relação entre declarações já aparece, portanto, na forma de referências.

A enumeração anuncia doze tipos, mas a transcrição disponível nomeia onze: `terraform`, `provider`, `resource`, `data`, `variable`, `module`, `locals`, `moved`, `removed`, `check` e `output`. Não completamos a contagem por suposição. O bloco `terraform` concentra configurações; `provider` configura a interface específica; `resource` declara infraestrutura; `data` consulta; `variable` recebe entradas; `module` reúne código reutilizável; `locals` mantém valores internos; `output` expõe valores.

`moved` é anotado como ferramenta de refatoração para renomear recursos. A descrição de `removed` contrapõe a retirada do gerenciamento à destruição do objeto; lemos assim o trecho ambíguo sobre “remover da infraestrutura”, sem equiparar as duas operações. O item **Check** não tem explicação: continuar na leitura.

## Labels

### No labels

O bloco `terraform` não recebe labels. No exemplo, `required_providers` está em seu interior; `aws` é a chave que nomeia o provider a ser usado na configuração.

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

A ausência de label não significa ausência de estrutura interna. O tipo de bloco já determina sua função.

### Single label

O exemplo `provider "aws"` tem um label e configura a região `us-east-1`. As notas também apresentam `module`, `variable` e `output` com um nome escolhido pelo autor da configuração. Importa distinguir o nome que identifica uma declaração dos argumentos que a configuram; os corpos vazios impressos são esquemas, não módulos completos.

### Subtype and label

`resource "aws_instance" "hello_world"` e `data "aws_vpc" "default"` combinam subtipo e nome. Essa combinação permite referências específicas. Para o recurso, o endereço é `aws_instance.hello_world`; para a consulta, `data.aws_vpc.default`. Corrigimos aqui a transcrição que antepunha `resource.` ao endereço do recurso. Tipo de bloco, tipo do objeto e nome local não devem ser confundidos.

## Arguments and subblocks / Syntax

A seção passa da forma externa ao conteúdo dos blocos. Argumentos atribuem valores; subblocos organizam configurações internas. O trecho sobre **terraform settings** reúne `required_providers`, configurações de `cloud` e de `backend`, advertindo que `cloud` e `backend` são alternativas, não dois destinos a habilitar simultaneamente.

O exemplo impresso do backend tem campos sem valores e não informa seu tipo. Mantemos essa insuficiência descrita, em vez de publicar uma configuração inventada. O exemplo anterior de `required_providers` mostra de modo legível a declaração de `source` e `version`.

Em **Terraform Providers**, as notas admitem múltiplas instâncias e chamam atenção para provider, versão e credenciais. O exemplo `provider "aws"` configura `region = "us-east-1"`; outros argumentos dependem da documentação específica. **Required provider**, por sua vez, trata da declaração de origem e versão dentro de `terraform`, não dos mesmos ajustes de uso. O segundo exemplo traz um identificador Azure impreciso na transcrição; não o reproduzimos como configuração verificada.

## Resources

A passagem central torna explícito o vínculo entre declaração e objeto gerido. Citamos:

> Each resource block that a developer creates represents an actual piece of infrastructure that they want to launch and manage using Terraform
>
> — Hafner, 2025, p. 49

O recurso tem um tipo fornecido pelo provider e argumentos próprios. As notas insistem na multiplicidade de recursos entre providers, mas seus números variam; o argumento não depende de fixar uma quantidade. No exemplo de instância, `ami`, `subnet_id` e `instance_type` recebem referências a dados e variáveis. O bloco não é só um nome: articula o objeto desejado às informações necessárias para gerenciá-lo.

## Data Sources

O data source busca dados externos sem modificar o objeto consultado. Sua sintaxe se aproxima da de um recurso, mas sua função é distinta. O exemplo procura a VPC padrão e usa seu identificador para filtrar subnets:

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

O interesse dessa passagem está na dependência entre consultas: uma informação existente pode alimentar outra declaração, sem que consultar equivalha a criar.

## Meta arguments

As notas passam dos argumentos particulares de um recurso aos meta-arguments: `count`, `for_each`, `depends_on`, `provider` e `lifecycle`. Os três primeiros aparecem como multiplicação de instâncias, uso de chaves de mapa ou conjunto e dependência explícita, respectivamente. Corrigimos `counts` para `count`.

O exemplo de `count` usa `var.instance_count` para um recurso e o valor `5` para um módulo. A repetição, portanto, é uma dimensão da declaração, não a cópia manual de cinco blocos. `provider` está acompanhado de interrogações e `lifecycle` fica sem desenvolvimento: seus detalhes continuam em aberto nas notas.

## Modules

A leitura chega à unidade de reutilização. Citamos a definição registrada nas notas, atribuída a Hafner, sem página informada:

> A module is, at its core, a collection of data sources, resources, and any assets (configuration files, templates) that are bundled together into reusable components. They are reusable libraries that can be packaged up and distributed for reuse.

O módulo reúne elementos que antes apareciam separadamente. As notas o aproximam de um pacote em Python ou de um módulo em JavaScript e o apresentam como forma padrão de compartilhar código Terraform entre projetos. Parece que a abstração relevante não é esconder nomes, mas dar a um conjunto de recursos e dados uma unidade reutilizável.

## Input, output and local

### Variables

As variáveis são entradas do módulo. Os exemplos declaram valores como `ami` e `subnet_id` com `type = string` e os consomem por `var.ami` e `var.subnet_id`. A referência a `var.instance_type` não vem acompanhada de declaração nesse trecho; não completamos o exemplo como se estivesse íntegro.

As notas enumeram `string`, `number`, `bool`, `list`, `set`, `map`, `object`, `tuple` e `any`. Registramos o vocabulário sem desenvolver uma teoria de tipos ausente do material. `sensitive = true` aparece associado a evitar a exibição do valor; não tomamos essa indicação breve como demonstração de todas as propriedades de proteção de um segredo.

### Outputs

O output é apresentado como valor de retorno do módulo. O exemplo expõe `aws_instance.hello_world`. Enquanto a variável recebe um valor de fora, o output torna um valor interno disponível para outros módulos ou workspaces. Essa direção da passagem importa mais, neste ponto, que uma lista de atributos.

### Locals

Os locals existem no escopo do módulo para processamento interno de dados e lógica. A distinção parece ser entre receber, expor e elaborar internamente. O bloco correto é `locals`, embora a impressão traga `local`; `local.nome`, em contraste, é a forma de referência a um valor definido ali.

## Chapter 4. Expressions and iterations

Há apenas o título, sem corpo de notas. Continuar na leitura do livro: não inferimos uma exposição sobre expressões e iterações a partir do título.

## Permissions (IAM and RBAC)

A seção contém somente um marcador provisório, sem argumento desenvolvido. Permissões: continuar na leitura. Não atribuímos ao livro uma explicação de IAM ou RBAC que não foi registrada.

## Functions

As funções são aproximadas das funções de programação pela estrutura de nome e parâmetros. O exemplo emprega `startswith`, `split` e `upper` para trabalhar com o ambiente. Em HCL legível, preservando a intenção do trecho:

```hcl
locals {
  is_dev    = startswith(var.environment, "dev-")
  env_name  = split("-", var.environment)[1]
  env_label = upper(local.env_name)
}
```

Além de corrigir `local` para `locals`, a ordem dos argumentos de `split` foi ajustada. O exemplo pressupõe uma entrada com o separador esperado; não constitui uma discussão de todos os formatos possíveis.

As notas contrapõem transformação de dados a operações de infraestrutura, mas a frase sobre sockets e disco é breve demais para fixar seu alcance. Dúvida a retomar na leitura, não autorização para completar funcionalidades de memória. A seção **Standard Library** anuncia nove tipos de funções e termina em “A”, sem enumerá-los. Biblioteca padrão: incompleta, continuar no livro.
