# Métricas de integración

Los miembros certificados del programa de socios del Mercado Pago, el [&lt;dev>program](https://www.mercadopago.com/developers/en/developer-program), pueden identificar sus integraciones para acceder a los [beneficios del programa](https://www.mercadopago.com/developers/pt/developer-program#dev-program-benefits) **ya sean estas integraciones antiguas o nuevas**. Por eso, no olvides incluir tus credenciales en todas las integraciones que realices.

> NOTE
>
> Importante
>
> Si estás integrando como una plataforma o PDV (Punto de Venta), recuerda configurar OAuth para que puedas identificar correctamente los pagos de tus vendedores. Consulte [OAuth](/developers/es/docs/security/oauth/introduction) para obtener más información.

## Plugin disponibles

A continuación encontrará una lista de plugins que permiten agregar el `integrator_id` en el momento de la integración.

- [Woocommerce](/developers/es/docs/woocommerce/introduction)
- [Prestashop](/developers/es/docs/prestashop/landing)
- [Magento](/developers/es/docs/magento-two/landing)
- [VTEX](/developers/es/docs/vtex/introduction)

Para más detalles sobre cómo y por qué usar `integrator_id` en tus integraciones, accede a nuestra [FAQ](https://www.mercadopago.com/developers/es/support/23937).

## Integración

Para identificarse en sus integraciones y trabajar con métricas, puede usar uno de los SDKs disponibles para enviar el `integrator_id` y/o `platform_id` al ejecutar el request de pago.

> Además de los SDK, es posible identificar sus integraciones a través de la API de pagos. Por lo tanto, puedes enviar los parámetros `x-integrator_id` y/o `x-platform-id` al endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) al ejecutar el request.


| _Header_ | Tipo de código | Identificadores |
| --- | --- | --- |
| `x-integrator-id` | Integrador | Para desarrolladores o agencias que realizaron la integración. |
| `x-platform-id` | Plataforma | Para las plataformas o módulos que ofrecen Mercado Pago en sus soluciones. |


[[[
```php
===
Agrega los códigos de identificación y reemplaza por el valor necesario: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
```
```node
===
Agrega los códigos de identificación y reemplaza por el valor necesario: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
mercadopago.configure({
    platform_id: 'PLATFORM_ID',
    integrator_id: 'INTEGRATOR_ID',
});
```
```java
===
Agrega los códigos de identificación y reemplaza por el valor necesario: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
```
```ruby
===
Agrega los códigos de identificación y reemplaza por el valor necesario: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPagoConfig.PlatformId    = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId  = "INTEGRATOR_ID";
```
```python
===
Agrega los códigos de identificación y reemplaza lpor el valor necesario: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
import mercadopago
from mercadopago.config import RequestOptions
request_options = RequestOptions(
    integrator_id="INTEGRATOR_ID",
    platform_id="PLATFORM_ID"
)
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN", request_options=request_options)
```
]]]