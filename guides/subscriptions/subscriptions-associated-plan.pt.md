# Assinaturas com plano associado

Assinaturas com plano associado são utilizadas quando é necessário utilizar a mesma assinatura em ocasiões diferentes e organizá-las em grupos identificáveis. Por exemplo, para uma assinatura mensal e anual de uma academia.

> NOTE
>
> Importante
>
> Uma assinatura com plano associado sempre deverá ser criada com seu `card_token_id` e com status `Authorized`

## Criar plano

A integração de **assinaturas com plano associado** é feita em duas etapas. Na primeira, é preciso **criar um plano** que será associado à assinatura e na segunda, a **criação da assinatura**. 

O plano de assinatura permite definir, entre outros atributos, o título, valor e frequência das assinaturas criadas pelo vendedor. Para criar um plano e associá-lo à uma assinatura, veja o endpoint [/preapproval_plan](/developers/pt/reference/subscriptions/_preapproval_plan/post), preencha os atributos necessários e execute a requisição ou, se preferir, utilize o _curl_ abaixo.

> NOTE
>
> Importante
>
> Ao executar a API, o plano estará criado e você terá acesso ao `preapproval_plan_id`, **que na resposta à API, será exibido apenas como `id`.** Este **atributo é mandatório** para a criação da assinatura. 

[[[
```curl
curl -X POST \

      'https://api.mercadopago.com/preapproval_plan' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -d '{
  "reason": "Yoga classes",
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "repetitions": 12,
    "billing_day": 10,
    "billing_day_proportional": true,
    "free_trial": {
      "frequency": 1,
      "frequency_type": "months"
    },
    "transaction_amount": 10,
    "currency_id": "ARS"
  },
  "payment_methods_allowed": {
    "payment_types": [
      {}
    ],
    "payment_methods": [
      {}
    ]
  },
  "back_url": "https://www.yoursite.com"
}'
```
]]]


## Criar assinatura

Tendo um plano criado, você poderá criar a assinatura de fato. Assinatura é uma autorização do pagador para cobranças recorrentes com um meio de pagamento definido (cartão de crédito, por exemplo). Ao realizar a assinatura de um produto/serviço, o cliente concorda com a cobrança periódica de determinado valor pelo período de tempo definido.

Para criar uma assinatura, tenha o `preapproval_plan_id` em mãos, acesse o endpoint [/preapproval](/developers/pt/reference/subscriptions/_preapproval/post), e preencha os atributos conforme indicado na tabela de parâmetros ou, se preferir, utilize o _curl_ disponível abaixo.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/preapproval?access_token=APP_USR-????????' \
--header 'Content-Type: application/json' \
--header 'X-scope: stage' \
--data-raw '{
	"preapproval_plan_id":"{{O_PREAPPROVAL_PLAN_ID_QUE_FOI_CRIADO}}",
    "payer_email": "test_user_+1020927396@testuser.com",
    "card_token_id":"{{O_CARD_TOKEN_ID_QUE_FOI_CRIADO}}",
	"status":"authorized"
}'
```
]]]

Ao finalizar o preenchimento dos atributos, execute a requisição e pronto! A assinatura com plano associado terá sido criada.