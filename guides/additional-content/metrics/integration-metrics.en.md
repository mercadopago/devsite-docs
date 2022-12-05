# Integration metrics

Certified members of the Mercado Pago's partner program, the [&lt;dev>program](https://www.mercadopago.com/developers/en/developer-program), can identify their integrations to gain access to [program benefits](https://www.mercadopago.com.br/developers/pt/developer-program#dev-program-benefits) **whether these integrations are old or new**. Therefore, do not forget to include your credentials in all the integrations you carry out.

> NOTE
>
> Importante
>
> If you are integrating with a platform or POS (Point of Sale), remember to configure OAuth so that you can correctly identify payments from your sellers. See [OAuth](/developers/en/docs/security/oauth/introduction) for more information.

## Available plugins

 Below you will find a list of plugins that allow adding the `integrator_id` at the moment of the integration.

 - [Woocommerce](/developers/en/docs/woocommerce/introduction)
- [Prestashop](/developers/en/docs/prestashop/landing)
- [Magento](/developers/en/docs/magento-two/landing)
- [VTEX](/developers/en/docs/vtex/introduction)

For more details on how and why to use `integrator_id` in your integrations, access our [FAQ](https://www.mercadopago.com/developers/en/support/23937).

## Integration

To identify your integrations and work with metrics, use one of the SDKs below informing the `integrator_id` and/or `platform_id` and execute the request.

> In addition to the SDKs, it is possible to identify your integrations through the payments API. To do this, send the `x-integrator_id` and/or `x-platform-id` parameter with their respective information to the endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) and execute the request.

| Header | Code type | Identifier |
| --- | --- | --- |
| `x-integrator-id` | Integrator | For programmers or agencies that perform the integration. |
| `x-platform-id` | Platform | For platforms or modules that offer Mercado Pago in their solutions. |

[[[
```php
===
Add the identification codes and replace the values you want: <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
```
```node
===
Add the identification codes and replace the values you want: <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
Mercadopago.configure({
platform_id: 'PLATFORM_ID',
integrator_id: 'INTEGRATOR_ID',
});
```
```java
===
Add the identification codes and replace the values you want: <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
```
```ruby
===
Add the identification codes and replace the values you want: <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Add the identification codes and replace the values you want: <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
MercadoPagoConfig.PlatformId = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId = "INTEGRATOR_ID";
```
```python
===
Add the identification codes and replace the values you want: <code>INTEGRATOR\_ID</code> and <code>PLATFORM_ID</code>.
===
import market
from Mercadopago.config import RequestOptions
request_options = RequestOptions(
integrator_id="INTEGRATOR_ID",
platform_id="PLATFORM_ID"
)
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN", request_options=request_options)
```
]]]