# Consultar meios de pagamento

Para obter uma lista detalhada com todos os meios de pagamento disponíveis para integração, envie um **GET** com seu _Access token_ ao endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get) e execute a requisição ou, se preferir, faça a requisição utilizando os SDKs abaixo.

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

> Para detalhes dos meios de pagamento aceitos em cada país, verifique a lista completa com a [disponibilidade de meios de pagamento.](/developers/pt/docs/sales-processing/payment-methods)