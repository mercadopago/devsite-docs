## Create cancellation

Cancel a sale for a specific payment.

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
          
var client = new MercadoPago.Client.Payment.PaymentClient();
client.Cancel(payment_id);
```
]]]