---
title: "Terraform State: do código ao apply"
description: "CLI, backend e nuvem: como o state liga endereços lógicos a recursos reais ao longo de init, plan e apply."
date: 2026-11-07
section: articles
lang: pt
tags: [devops, iac]
cover: /blog/terraform-state/from-code-to-apply.webp
draft: false
---

O código Terraform, o arquivo de state e a infraestrutura não são três versões de uma mesma coisa. São elementos de domínios distintos. Entender suas fronteiras permite acompanhar o que realmente atravessa o caminho entre uma declaração em `.tf` e uma operação sobre um recurso na nuvem.

![Diagrama feito à mão do Terraform State: CLI local, backend remoto e nuvem Azure, mostrando init, plan e apply entre esses domínios.](/blog/terraform-state/from-code-to-apply.webp)

O cenário deste artigo é um CLI local, um backend remoto em Azure Blob Storage e recursos no Azure. O percurso a seguir organiza conceitualmente as etapas descritas nas notas: não pretende ser um rastreamento exato de cada chamada interna, nem uma sequência universal para todas as opções de execução. A questão central é mais simples: quem lê o código, quem conserva o registro e quem efetivamente possui os recursos?

## Três domínios, três responsabilidades

O **CLI local** interpreta os arquivos `.tf`. É nesse domínio que a configuração desejada ganha significado para o Terraform. A declaração escrita não é enviada ao Azure como um programa que o Azure deva interpretar.

O **backend remoto**, neste cenário o Blob Storage, guarda o arquivo `terraform.tfstate`. Seu papel no modelo é conservar o state, não executar a configuração nem hospedar os recursos geridos. O arquivo é JSON e contém o registro dos recursos conhecidos, um `serial` e uma `lineage`. O serial distingue revisões do state; a lineage identifica a linha de continuidade à qual essas revisões pertencem. Não basta, portanto, pensar no arquivo como uma lista sem história.

O terceiro domínio é a **nuvem**, o Azure, que possui seu próprio sistema de identificação de recursos, acessível por meio do Azure Resource Manager, ou ARM. Para gerenciar uma máquina virtual, o Azure não precisa conhecer o nome que ela recebeu no código Terraform. Conhece o recurso e sua identidade no próprio domínio.

Essa separação evita uma confusão recorrente: guardar state no Azure não faz do backend o controlador da infraestrutura. O armazenamento do registro e o gerenciamento dos recursos continuam sendo responsabilidades distintas.

## Init: preparar o acesso não é ler os recursos

No `init`, o CLI baixa os plugins de provider necessários à comunicação com os serviços. Quanto ao backend remoto, registra localmente a referência de onde o state está armazenado. Essa referência não deve ser confundida com uma cópia local de todo o registro dos recursos.

No recorte apresentado nas notas, nenhum dado de recurso é transferido nessa etapa. Há preparação de componentes e localização do backend; ainda não há refresh da infraestrutura. O ponteiro informa onde encontrar o registro, mas não substitui seu conteúdo.

## Plan: relacionar o desejado ao observado

O `plan` começa pela interpretação do código e pela construção de um DAG, um grafo direcionado acíclico de dependências. As declarações deixam de ser apenas blocos lado a lado: suas referências estabelecem relações que condicionam a ordem das ações.

No encadeamento conceitual das notas, o CLI baixa o state remoto e adquire um lock para evitar concorrência. O lock protege o trabalho sobre o registro compartilhado; não é uma mudança no recurso de nuvem. O Terraform então consulta os recursos reais, por operações de leitura como GET, para realizar o **refresh**. O registro conhecido é confrontado com aquilo que a nuvem informa agora.

Em seguida, a configuração desejada é avaliada e comparada ao estado atualizado pela leitura. Esse diff não é simplesmente uma comparação entre dois arquivos: ele relaciona o que foi observado no recurso com o que a configuração pede. As dependências organizam as ações propostas no plano.

Ao final, o lock é liberado. A infraestrutura não foi alterada por essa fase. Observar uma diferença e planejar sua correção são operações distintas de executar a correção. É justamente essa distância que torna o plano legível como proposta, e não como relato de uma mudança já realizada.

## Apply: executar e registrar

O `apply` carrega o plano e adquire o lock novamente. O fato de o planejamento ter usado um lock não significa que a execução permaneça protegida por ele: são momentos separados no percurso descrito.

Para cada recurso a tratar, a operação é realizada por requisições REST via ARM. O ARM funciona aqui como gateway do plano de controle, encaminhando a solicitação à API específica do serviço, como Compute. O Blob Storage não participa dessa passagem como executor: sua função continua sendo guardar o state.

A execução aguarda a conclusão da operação, consultando seu andamento por polling. No modelo das notas, o resultado é incorporado ao state com um novo serial, e o processo segue para os próximos recursos conforme as dependências do plano. Essa descrição por recurso explica o vínculo entre operação e registro; não exige que toda execução seja estritamente serial.

O lock é liberado ao final. O resultado relevante é duplo: a infraestrutura foi modificada, e o registro passou a refletir os resultados conhecidos dessas operações. Uma coisa não deve ser tomada pela outra.

## State: a ponte entre nomes que não se reconhecem

O endereço lógico do Terraform e o identificador real do provider pertencem a namespaces distintos. As notas contrapõem `aws_instance.web` a um identificador Azure como `/subscriptions/.../virtualMachines/myvm`.

O contraste mistura deliberadamente um endereço lógico AWS e um ID Azure. Não se trata de afirmar que esse recurso AWS corresponde a essa máquina Azure, nem de apresentar um mapeamento válido entre eles. Os exemplos tornam visível a diferença entre **a forma como o código nomeia um recurso** e **a forma como uma plataforma identifica seu objeto**. Em uma associação real, os dois lados precisam corresponder ao mesmo recurso e ao provider adequado.

É no state que essa associação é registrada. Ele funciona como tabela de tradução entre “o que o código chama” e “o que a nuvem realmente possui”. O Azure não deduz o endereço Terraform a partir do ID; o nome no código, isoladamente, também não é o identificador da nuvem.

Essa é a razão para tratar state como uma peça central da relação, e não como simples sobra de uma execução. O código declara o desejado; a nuvem mantém os objetos; o state conserva a ponte de identidade que permite ao Terraform voltar a eles, compará-los e gerenciá-los.
