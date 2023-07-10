# Após receber a notificação

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

Depois de dar um retorno à notificação, você obterá as informações completas do recurso notificado acessando o terminal correspondente da API:

| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_id/get) |

Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado o um pedido fechado.

> PREV_STEP_CARD_PT
>
> Configurações ao criar pagamentos
>
> Defina a URL de notificação ao criar um pagamento.
>
> [Configurações ao criar pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/online-payment-creation-config)

> NEXT_STEP_CARD_PT
>
> Introdução aos pagamentos presenciais
>
> IPN para pagamentos presenciais com QR code.
>
> [Introdução aos pagamentos presenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/inperson-introduction)