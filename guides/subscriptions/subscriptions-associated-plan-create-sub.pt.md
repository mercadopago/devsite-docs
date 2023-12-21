# Criar assinatura

> WARNING
>
> Importante
>
> Antes de começar a criar a assinatura, você precisará ter um plano criado. Se ainda não o fez, vá para [Criar plano](/developers/pt/docs/subscriptions/integration-configuration/subscriptions-associated-plan/create-plan).

Assinatura é uma autorização do pagador para cobranças recorrentes com um meio de pagamento definido (cartão de crédito, por exemplo). Ao realizar a assinatura de um produto/serviço, o cliente concorda com a cobrança periódica de determinado valor pelo período de tempo definido.

Para criar uma assinatura, primeiro você precisará ter o valor `preapproval_plan_id`.

Em seguida, você pode prosseguir com a integração de duas maneiras: você pode acessar o endpoint [/preapproval](/developers/pt/reference/subscriptions/_preapproval/post) e preencher os atributos conforme indicado na tabela de parâmetros, ou você também pode usar o _curl_ que fornecemos abaixo.

[[[
```curl

curl -X POST \
      'https://api.mercadopago.com/preapproval' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -d '{
  "preapproval_plan_id": "2c938084726fca480172750000000000",
  "reason": "Yoga classes",
  "external_reference": "YG-1234",
  "payer_email": "test_user@testuser.com",
  "card_token_id": "e3ed6f098462036dd2cbabe314b9de2a",
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "start_date": "2020-06-02T13:07:14.260Z",
    "end_date": "2022-07-20T15:59:52.581Z",
    "transaction_amount": 10,
    "currency_id": "ARS"
  },
  "back_url": "https://www.mercadopago.com.ar",
  "status": "authorized"
}'
```
]]]

Ao finalizar o preenchimento dos atributos, execute a requisição e pronto! A assinatura com plano associado terá sido criada.