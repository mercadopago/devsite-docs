# Consultar medios de pago

Para obtener una lista detallada de todos los medios de pago disponibles para integración, envía un **GET** con tu _Access token_ al endpoint [/v1/payment_methods](/developers/es/reference/payment_methods/_payment_methods/get) y ejecuta la solicitud o, si lo prefieres, haz la solicitud utilizando los siguientes SDKs. 

[[[
```php
<?php
 
  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 
  $payment_methods = MercadoPago::get("/v1/payment_methods");
 
?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");
 
PaymentMethodClient client = new PaymentMethodClient();
client.list();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
 
payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]
```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;
 
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
 
var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();
```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
 
payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

> Para obtener detalles sobre los medios de pago aceptados en cada país, consulte la lista completa con [disponibilidad de medios de pago.](/developers/es/docs/sales-processing/payment-methods)