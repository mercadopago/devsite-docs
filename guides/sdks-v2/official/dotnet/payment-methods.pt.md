## Obter meios de pagamento

É possível consultar as formas de pagamento disponíveis e obter uma lista com os detalhes de cada uma delas utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payment_methods/_payment_methods/get).

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