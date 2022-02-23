## Obter meios de pagamento

Consulte todas as formas de pagamento disponíveis e obtenha uma lista com os detalhes de cada uma delas e suas propriedades.

[[[
```dotnet
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
]]]