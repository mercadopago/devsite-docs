# Integration metrics

Certified members of the [&lt;dev>program](https://www.mercadopago.com/developers/en/developer-program) can identify their Checkout Pro integrations to gain access to [program benefits](https ://www.mercadopago.com.br/developers/pt/developer-program#dev-program-benefits).

To work with metrics, use _headers_ in your payment preference, adding the identification code according to the desired scenario (it is not mandatory to complete the three fields mentioned below):

| Header | Code type | Identifier |
| --- | --- | --- |
| `x-integrator-id` | Integrator | For programmers or agencies that perform the integration. |
| `x-platform-id` | Platform | For platforms or modules that offer Mercado Pago in their solutions. |
| `x-corporation-id` | Corporations | For accounts associated with a seller account or an economic group. |


To identify your integrations, send the `integrator_id` parameter to the endpoint [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post) and execute the request or, if you prefer, use one of the codes available below.

[[[
```php
===
Add the identification codes and replace the values you want: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
MercadoPago\SDK::setCorporationId("CORPORATION_ID");
```
```node
===
Add the identification codes and replace the values you want: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
Mercadopago.configure({
platform_id: 'PLATFORM_ID',
integrator_id: 'INTEGRATOR_ID',
corporation_id: 'CORPORATION_ID'
});
```
```java
===
Add the identification codes and replace the values you want: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
MercadoPago.SDK.setCorporationId("CORPORATION_ID");
```
```ruby
===
Add the identification codes and replace the values you want: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
request_options.corporation_id = 'CORPORATION_ID'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Add the identification codes and replace the values you want: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
MercadoPagoConfig.PlatformId = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId = "INTEGRATOR_ID";
MercadoPagoConfig.CorporationId = "CORPORATION_ID";
```
```python
===
Add the identification codes and replace the values you want: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
import market
from Mercadopago.config import RequestOptions

request_options = RequestOptions(
corporation_id="CORPORATION_ID",
integrator_id="INTEGRATOR_ID",
platform_id="PLATFORM_ID"
)
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN", request_options=request_options)
```
```curl
===
Add the identification codes and replace the values you want: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
curl -X POST \
'https://api.mercadopago.com/checkout/preferences' \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-H 'x-corporation-id: CORPORATION_ID \
-H 'x-integrator-id: INTEGRATOR_ID \
-H 'x-platform-id: PLATFORM_ID \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
-d '{
"items": [
...
       
],
...
}'
```
]]]
