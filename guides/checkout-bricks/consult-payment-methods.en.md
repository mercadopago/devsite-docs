# Consult payment methods

To get a detailed list of all payment methods available for integration, send a **GET** with your **Access token** to the endpoint [/v1/payment_methods](/developers/en/reference/payment_methods/_payment_methods/get) and run the request or, if you prefer, make the request using the SDKs below.

[[[
```php
<?php

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var Mercadopago = require('mercadopago');
Mercadopago.configurations.setAccessToken(config.access_token);

var response = await Mercadopago.payment_methods.listAll();
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
import market
sdk = Mercadopago.SDK("ACCESS_TOKEN")

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