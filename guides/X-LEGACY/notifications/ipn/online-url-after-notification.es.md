# Después de recibir la notificación

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

Después de devolver la notificación, obtendrás la información completa del recurso notificado yendo al punto final de la API correspondiente:

| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_id/get) |

Con esta información podrás realizar las actualizaciones necesarias a tu plataforma, como actualizar un pago aprobado o un pedido cerrado.


> PREV_STEP_CARD_ES
>
> Configuración al crear pagos
>
> Configura la URL de notificación al crear un pago.
>
> [Configuración al crear pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/online-payment-creation-config)

> NEXT_STEP_CARD_ES
>
> Introducción a pagos presenciales
>
> IPN para pagos presenciales usando código QR.
>
> [Introducción a pagos presenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/inperson-introduction)