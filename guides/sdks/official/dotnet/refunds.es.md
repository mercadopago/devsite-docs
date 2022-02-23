## Crear reembolso total

Crear reembolsos totales para un pago específico. 

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var client = new MercadoPago.Client.Payment.PaymentRefundClient();
client.Refund(payment_id);
```
]]]

## Crear reembolso parcial

Crear reembolsos parciales para un pago específico.

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
 
var client = new MercadoPago.Client.Payment.PaymentRefundClient();
MercadoPago.Resource.Payment.PaymentRefund refund = await client.RefundAsync(payment_id, (decimal?)0.0);
```
]]]
