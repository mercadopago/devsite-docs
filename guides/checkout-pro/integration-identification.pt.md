# Métricas de integração

Os membros certificados do [&lt;dev>program](https://www.mercadopago.com.br/developers/pt/developer-program) podem identificar suas integrações do Checkout Pro para ter acesso aos [benefícios do programa](https://www.mercadopago.com.br/developers/pt/developer-program#dev-program-benefits). 

Para trabalhar com métricas, utilize _headers_ na sua preferência de pagamento, agregando o código de identificação de acordo com o cenário desejado (não é obrigatório completar os três campos mencionados abaixo): 

| Header | Tipo de código | Identificador |
| --- | --- | --- |
| `x-integrator-id` | Integrador | Para programadores ou agências que realizam a integração. |
| `x-platform-id` | Plataforma | Para as plataformas ou módulos que oferecem Mercado Pago em suas soluções. |
| `x-corporation-id` | Corporações | Para contas associadas a uma conta vendedor ou a um grupo econômico. |


<<<<<<< HEAD
Para identificar suas integrações, envie o parâmetro `integrator_id` ao endpoint [/checkout/preferences.](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição ou, se preferir, utilize um dos códigos disponíveis abaixo.
=======
Para identificar suas integrações, envie o parâmetro `integrator_id` com as informações necessárias ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição ou, se preferir, utilize um dos códigos disponíveis abaixo.
>>>>>>> 943f5022c96ac0d2308d508877d15314fb19a4f4

[[[
```php
===
Adicione os códigos de identificação e substitua os valores que quiser: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
MercadoPago\SDK::setCorporationId("CORPORATION_ID");
```
```node
===
Adicione os códigos de identificação e substitua os valores que quiser: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
===
mercadopago.configure({
    platform_id: 'PLATFORM_ID',
    integrator_id: 'INTEGRATOR_ID',
    corporation_id: 'CORPORATION_ID'
});
```
```java
===
Adicione os códigos de identificação e substitua os valores que quiser: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
MercadoPago.SDK.setCorporationId("CORPORATION_ID");
```
```ruby
===
Adicione os códigos de identificação e substitua os valores que quiser: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
===
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
request_options.corporation_id = 'CORPORATION_ID'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Adicione os códigos de identificação e substitua os valores que quiser: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
===
MercadoPagoConfig.PlatformId    = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId  = "INTEGRATOR_ID";
MercadoPagoConfig.CorporationId = "CORPORATION_ID";
```
```python
===
Adicione os códigos de identificação e substitua os valores que quiser: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
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
```curl
===
Adicione os códigos de identificação e substitua os valores que quiser: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> e <code>PLATFORM_ID</code>.
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
