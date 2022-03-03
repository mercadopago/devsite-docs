## Criar cancelamento

É possível realizar o cancelamento de uma compra específica a partir do ID do pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API de [Cancelamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_payment_id/put).

[[[
```dotnet
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
          
var client = new MercadoPago.Client.Payment.PaymentClient();
client.Cancel(payment_id);
```
]]]