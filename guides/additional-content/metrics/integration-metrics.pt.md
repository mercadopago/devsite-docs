# Métricas de integração

Os membros certificados do programa de parceiros do Mercado Pago, o [&lt;dev>program](https://www.mercadopago.com.br/developers/pt/developer-program), podem identificar suas integrações para ter acesso aos [benefícios do programa](https://www.mercadopago.com.br/developers/pt/developer-program#dev-program-benefits) **sejam essas integrações antigas ou novas**. Por isso, não esqueça de incluir suas credenciais em todas as integrações que realizar.

> NOTE
>
> Importante
>
> Caso esteja realizando a integração para uma plataforma ou PDV (Ponto de Venda), lembre-se de configurar OAuth para que seja possível identificar corretamente os pagamentos dos seus vendedores. Veja [OAuth](/developers/pt/docs/security/oauth/introduction) para mais informações.

## Plugins disponíveis

Abaixo você encontra uma lista com os plugins que permitem adicionar o `integrator_id` no momento da integração.

- [Woocommerce](/developers/pt/docs/woocommerce/introduction)
- [Prestashop](/developers/pt/docs/prestashop/landing)
- [Adobe Commerce](/developers/pt/docs/adobe-commerce/landing)
- [VTEX](/developers/pt/docs/vtex/introduction)

Para mais detalhes sobre como e por que utilizar o `integrator_id` nas suas integrações, acesse nossa [FAQ](https://www.mercadopago.com/developers/pt/support/23937).

## Integração 

Para identificar suas integrações e trabalhar com métricas, utilize um dos SDKs abaixo informando o `integrator_id` e/ou `platform_id` e execute a requisição.

> Além dos SDKs, é possível identificar suas integrações através da API de pagamentos. Para isso, envie o parâmetro `x-integrator_id` e/ou `x-platform-id` com suas respectivas informações ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição.

| Header | Tipo de código | Identificador |
| --- | --- | --- |
| `x-integrator-id` | Integrador | Para programadores ou agências que realizam a integração. |
| `x-platform-id` | Plataforma | Para as plataformas ou módulos que oferecem Mercado Pago em suas soluções. |

[[[
```php
===
Adicione os códigos de identificação e substitua os valores que quiser: <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
```
```node
===
Adicione os códigos de identificação e substitua com o valor necessário: <code>INTEGRATOR\_ID</code>.
===
const  requestOptions = {
'integratorId': 'INTEGRATOR_ID',
};
```
```java
===
Adicione os códigos de identificação e substitua com o valor necessário: <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
```
```ruby
===
Adicione os códigos de identificação e substitua com o valor necessário: <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
===
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Adicione os códigos de identificação e substitua com o valor necessário: <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
===
MercadoPagoConfig.PlatformId    = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId  = "INTEGRATOR_ID";
```
```python
===
Adicione os códigos de identificação e substitua com o valor necessário: <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
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

