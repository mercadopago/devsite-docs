## Crear reembolso total

Puede crear un reembolso total con el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API [Crear reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/post).  

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var client = new MercadoPago.Client.Payment.PaymentRefundClient();
client.Refund(payment_id);
```
]]]

## Crear reembolso parcial

Puede crear un reembolso parcial con el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API [Crear reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/post).

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var client = new MercadoPago.Client.Payment.PaymentRefundClient();
MercadoPago.Resource.Payment.PaymentRefund refund = await client.RefundAsync(payment_id, (decimal?)0.0);
```
]]]
