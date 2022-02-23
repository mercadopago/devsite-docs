## Criar cancelamento

Cancelar uma compra de um pagamento específico.

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
          
var client = new MercadoPago.Client.Payment.PaymentClient();
client.Cancel(payment_id);
```
]]]