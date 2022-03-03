## Create full refund

You can create a full refund using the SDK below. For details on the request parameters, check the [Create refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/post) API. 

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var client = new MercadoPago.Client.Payment.PaymentRefundClient();
client.Refund(payment_id);
```
]]]

## Create partial refund

You can create a partial refund using the SDK below. For details on the request parameters, check the [Create refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/post) API. 

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var client = new MercadoPago.Client.Payment.PaymentRefundClient();
MercadoPago.Resource.Payment.PaymentRefund refund = await client.RefundAsync(payment_id, (decimal?)0.0);
```
]]]


