## Criar reembolso total

É possível criar um reembolso total utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar reembolso](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_id_refunds/post).  

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var client = new MercadoPago.Client.Payment.PaymentRefundClient();
client.Refund(payment_id);
```
]]]

## Criar reembolso parcial

É possível criar um reembolso parcial utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar reembolso](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_id_refunds/post).  

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var client = new MercadoPago.Client.Payment.PaymentRefundClient();
MercadoPago.Resource.Payment.PaymentRefund refund = await client.RefundAsync(payment_id, (decimal?)0.0);
```
]]]
