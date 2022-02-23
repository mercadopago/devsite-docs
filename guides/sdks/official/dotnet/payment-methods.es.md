## Obtener medios de pago

Consulta todos los medios de pago disponibles y obtén un listado con el detalle de cada uno y sus propiedades.

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