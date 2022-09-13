# Após receber a notificação

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

Depois de dar um retorno à notificação, você obterá as informações completas do recurso notificado acessando o terminal correspondente da API:

| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_id/get) |

Além disso, especificamente em alertas de fraude, o pedido não deve ser entregue e o cancelamento precisa ser realizado através da [API de cancelamentos](/developers/pt/reference/chargebacks/_payments_payment_id/put). 

Na notificação, você receberá um `JSON` com as seguintes informações contendo o id de pagamento para efetuar o cancelamento.

[[[
```Json

  "description": ".....",
  "merchant_order": 4945357007,
  "payment_id": 23064274473

```
]]]

> NOTE
>
> Importante
>
> É possível obter mais detalhes sobre o pedido utilizando a API [Obter pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/get)

<br>
    
Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado o um pedido fechado.

