# Métricas de integración

Los miembros certificados del [&lt;dev>programa](https://www.mercadopago.com/developers/en/developer-program) pueden identificar sus integraciones de Checkout Pro para acceder a los [beneficios del programa](https://www.mercadopago.com/developers/pt/developer-program#dev-program-benefits).

Para trabajar con métricas, utiliza _headers_ en su preferencia de pago, agregando el código de identificación según el escenario deseado (no es obligatorio completar los tres campos que se mencionan a continuación).

| _Header_ | Tipo de código | Identificadores |
| --- | --- | --- |
| `x-integrator-id` | Integrador | Para desarrolladores o agencias que realizaron la integración. |
| `x-platform-id` | Plataforma | Para las plataformas o módulos que ofrecen Mercado Pago en sus soluciones. |
| `x-corporation-id` | Corporaciones | Para cuentas asociadas a una cuenta vendedor o grupo económico. |

Para identificar sus integraciones, utiliza una de las SDKs a continuación, informando el `integrator_id`, `x-platform-id` y/o `x-corporation-id` con la información adecuada al realizar el request.

> Además de las SDKs, es posible identificar tus integraciones a través de la API de preferencias. Para esto, envía el parámetro `integrator_id`, `x-platform-id` y/o `x-corporation-id` con su respectiva información al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta el request.


[[[
```php
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
MercadoPago\SDK::setCorporationId("CORPORATION_ID");
```
```node
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
mercadopago.configure({
    platform_id: 'PLATFORM_ID',
    integrator_id: 'INTEGRATOR_ID',
    corporation_id: 'CORPORATION_ID'
});
```
```java
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
MercadoPago.SDK.setCorporationId("CORPORATION_ID");
```
```ruby
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
request_options.corporation_id = 'CORPORATION_ID'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPagoConfig.PlatformId    = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId  = "INTEGRATOR_ID";
MercadoPagoConfig.CorporationId = "CORPORATION_ID";
```
```python
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
import mercadopago
from mercadopago.config import RequestOptions

request_options = RequestOptions(
    corporation_id="CORPORATION_ID",
    integrator_id="INTEGRATOR_ID",
    platform_id="PLATFORM_ID"
)
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN", request_options=request_options)
```
]]]
