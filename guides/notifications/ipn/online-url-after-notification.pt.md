# Ações necessárias após receber a notificação

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

Depois de dar um retorno à notificação, você obterá as informações completas do recurso notificado acessando o terminal correspondente da API:

| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_id/get) |
| point_integration_ipn | - | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/mp-point/introduction) |

Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado o um pedido fechado.
