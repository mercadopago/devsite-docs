# Obtener medios de pago

Es posible consultar los métodos de pago disponibles y obtener una lista con los detalles de cada uno utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Obtener medios de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payment_methods/_payment_methods/get).

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