# Después de recibir la notificación

[TXTSNIPPET][/guides/snippets/test-integration/notification-response]

Después de devolver la notificación, obtendrás la información completa del recurso notificado yendo al endpoint de la API correspondiente.
 

| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant_orders/[ID]` | [ver documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_id/get) |

Además, específicamente en las alertas de fraude, no deberás entregar el paquete y realizar la cancelación, para eso debes utilizar la [API de cancelaciones](/developers/es/reference/chargebacks/_payments_payment_id/put). 

En la notificación recibirás un `JSON` con la siguiente información que contiene el payment id para realizar la cancelación. 

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
> También puedes obtener más información de la orden utilizando la api [Obtener orden](/developers/es/reference/merchant_orders/_merchant_orders_id/get)

<br>

Con esta información podrás realizar las actualizaciones necesarias a tu plataforma, como actualizar un pago aprobado o un pedido cerrado.


