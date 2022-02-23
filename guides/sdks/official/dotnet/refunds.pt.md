## Criar reembolso total

Criar um reembolso total para um pagamento específico. 

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var client = new MercadoPago.Client.Payment.PaymentRefundClient();
client.Refund(payment_id);
```
]]]

## Criar reembolso parcial

Criar um reembolso parcial para um pagamento específico. 

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var client = new MercadoPago.Client.Payment.PaymentRefundClient();
MercadoPago.Resource.Payment.PaymentRefund refund = await client.RefundAsync(payment_id, (decimal?)0.0);
```
]]]
