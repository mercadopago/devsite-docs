# Notificações

## Webhooks

O Webhooks (também conhecido como retorno de chamada web) é um método simples que facilita com que um app ou sistema forneça informações em tempo real sempre que um evento acontece, ou seja, é um modo de receber dados entre dois sistemas de forma passiva através de um HTTP POST.

Uma vez configurado, o Webhook será enviado sempre que ocorrer um ou mais eventos cadastrados, evitando que haja um trabalho de pesquisa a cada minuto em busca de uma resposta e, por consequência, que ocorra uma sobrecarga do sistema e a perda de dados sempre que houver alguma situação. 

Após receber uma notificação na sua plataforma, o Mercado Pago aguardará uma resposta para validar se você a recebeu corretamente.

> NOTE
>
> Importante
>
> As notificações Webhooks poderão ser configuradas para uma ou mais aplicações criadas em seu Painel do desenvolvedor.

## Pré-requisitos

Antes de configurar as notificações Webhooks para Wallet Connect considere os requisitos listados abaixo.

| Requisito  | Descrição  |
| --- | --- |
| Certificado SSL  | Protocolo que permite estabelecer comunicações seguras na Internet para atividades como navegação, e-mail, e outras transferências de dados.  |
| Resposta à requisição  | O endpoint deve retornar um código de resposta 2XX para confirmar o recebimento da requisição. Todos os códigos de resposta fora do 2XX acionarão novas tentativas exponenciais do Mercado Pago.  |
| Timeout  | Para evitar problemas de timeout, a aplicação deve retornar uma resposta antes de acionar uma lógica complexa.  |
| Solicitação de permissão  | Para que seja possível colocar as solicitações na lista de permissões pelo DNS, as requisições virão através do endpoint api.mercadopago.com. O integrador deve desabilitar o CSRF (**Cross-site request forgery**) para api.mercadopago.com, o que permitirá solicitações do Mercado Pago.  |

## Tipos de eventos

Existem três tipos diferentes de eventos que permitem o recebimento de notificações. Esses eventos referem-se à atualização e/ou cancelamento de uma vinculação.

### Confirmação da vinculação pelo usuário

A partir deste evento, o integrador é notificado quando um usuário confirma a vinculação. 

Para isso, envie um **GET** ao endpoint [/v2/wallet_connect/agreements/{agreement_id}](/developers/pt/reference/wallet_connect/_wallet_connect_agreements_agreement_id/get) para obter o `agreement_code` e `external_flow_id`. Isso permitirá seguir com a criação do _token_ de pagamento para a criação dos pagamentos.

Veja abaixo um exemplo de código com as informações enviadas no momento da requisição.

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \
-H 'Content-Type: application/json' \
-d '{
    "id": "22abcd1235ed497f945f755fcaba3c6c",
    "type": "wallet_connect",
    "entity": "agreement",
    "action": "status.updated",
    "date": "2021-09-30T23:24:44Z",
    "model_version": 1,
    "version": 0,
    "data": {
        "id": "22abcd1235ed497f945f755fcaba3c6c",
        "status": "confirmed_by_user"
    }
}'



```
]]]

### Cancelamento de vinculação entre integrador e Mercado Pago

Neste evento, o usuário tem a possibilidade de se descadastrar de uma vinculação, o que faz com que a vinculação existente seja cancelada. Quando isso acontece, o `payer_token` é invalidado e nenhuma outra cobrança é feita ao usuário. 

> NOTE
>
> Importante
>
> Caso sejam feitas novas tentativas de cobrança, as mesmas serão rejeitadas. 

Veja abaixo um exemplo de código com as informações enviadas no momento da requisição.

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \
-H 'Content-Type: application/json' \
 -d '{
  "id": "22abcd1235ed497f945f755fcaba3c6c",
  "type": "wallet_connect",
  "entity": "agreement",
  "action": "status.updated",
  "date": "2021-09-30T23:24:44Z",
  "model_version": 1,
  "version": 0,
  "data": {
    "id": "22abcd1235ed497f945f755fcaba3c6c",
    "status": "cancelled"
  }
}'

```
]]]

### Atualização do meio de pagamento de uma vinculação

Neste caso, o usuário pode adicionar ou atualizar uma forma de pagamento secundária (por padrão, dinheiro em conta Mercado Pago é a primeira forma de pagamento). 

Com base nos status de pagamento, é possível detectar pagamentos rejeitados e notificar o usuário para que ele possa realizar a atualização ou adicionar uma forma de pagamento secundária.

Veja abaixo um exemplo de código com as informações enviadas no momento da requisição.

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \
-H 'Content-Type: application/json' \
-d '{
    "id": "22abcd1235ed497f945f755fcaba3c6c",
    "type": "wallet_connect",
    "entity": "agreement",
    "action": "payment_method.updated",
    "date": "2021-09-30T23:24:44Z",
    "model_version": 1,
    "version": 0,
    "data": {
        "id": "22abcd1235ed497f945f755fcaba3c6c"
    }
}'


```
]]]

Na tabela abaixo mostramos com mais detalhes os possíveis valores que são enviados no corpo da requisição do cancelamento e atualização do meio de pagamento de uma vinculação.

| Campo  | Valor  | Tipo  | Descrição  |
| --- | --- | --- | --- |
| id  | UUID/Number  | String  | ID exclusivo do evento. Este ID evita mensagens duplicadas do lado do integrador.  |
| type  | wallet_connect  | String  | Representa eventos sobre a vinculação entre o integrador e o usuário do Mercado Pago. Este valor sempre será `wallet_connect`  |
| entity  | agreement  | String  | Entidade relacionada ao evento. O valor será sempre `agreement`.  |
| action  | payment_method.updated  | String  | - Indica que a forma de pagamento secundária associada à vinculação foi atualizada. <br> - Pode ser utilizado pelo vendedor como forma de saber se uma nova cobrança deve ser realizada.  |
| action  | status.updated  | String  | - Indica que a vinculação foi cancelado ou confirmado pelo usuário. <br> - Pode ser usado pelo integrador para saber se o usuário confirmou a vinculação ou se esta foi cancelada e novas cobranças **não deverão** ser realizadas. |
| date  | {{action_date}}  | Date  | Uma data aproximada (em formato Zulu) associada ao evento.  |
| data  | {  id: {{agreement_id}},  status: {{agreement_status}}  }  | id: String  status: String  | Este campo pode trazer detalhes extras sobre o evento baseado no tipo e na ação.  |
| model_version  | 1  | Integer  | Versão do modelo de corpo do Webhooks. Será sempre `1`.  |
| version  | 0  | Integer  | Versão para identificar duplicatas dentro do mesmo ID.  |


## Configuração 

A configuração das Webhooks é feita através do Painel do desenvolvedor. Abaixo explicaremos como indicar as URLs que serão notificadas e como configurar os eventos dos quais se receberá a notificação.

![webhooks](notifications/webhooks_pt.png)


1. Se ainda não tiver uma aplicação criada, acesse seu [Painel do desenvolvedor](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e clique em **Entrar** para fazer seu login caso ainda não esteja logado.
2. Com a aplicação criada, acesse a aba Notificações Webhooks em seu Painel do desenvolvedor e configure as [URLs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/webhooks) de **produção** e **teste** da qual serão recebidas as notificações. 
3. Você também poderá experimentar e testar se a URL indicada está recebendo as notificações corretamente, podendo verificar a solicitação, a resposta dada pelo servidor e a descrição do evento.
4. Caso seja necessário identificar múltiplas contas, no final do URL indicada você poderá indicar o parâmetro `?customer=(sellername) endpoint` para identificar os vendedores.
5. Em seguida, selecione o evento **Wallet Connect** do qual você receberá notificações em formato `json` através de um `HTTP POST` para a URL especificada anteriormente. Um evento é qualquer tipo de atualização no objeto relatado, incluindo alterações de status ou atributo. Veja na tabela abaixo os eventos que poderão ser configurados.

| Tipo de notificação  | Ação  | Descrição  |
| --- | --- | --- |
| Confirmação de vinculação | status.updated | O usuário realizou a confirmação de uma vinculação. |
| Cancelamento de vinculação | status.updated  | Vinculação entre o integrador e o usuário do Mercado Pago foi cancelado pelo usuário.  |
| Atualização do meio de pagamento | payment_method.updated  | O usuário atualizou o meio de pagamento de uma vinculação.  |