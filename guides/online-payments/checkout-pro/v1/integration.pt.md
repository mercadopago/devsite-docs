# Integre o Checkout Pro

Integrar Checkout Pro do Mercado Pago te permite cobrar através do nosso formulário web de qualquer dispositivo de forma simples, rápida e segura.

Use os [exemplos para download](#bookmark_exemplos_para_download) para conhecer a integração completa ou para adaptá-los de acordo com o que precisa.

## Como me integro?

![Integration](/images/web-payment-checkout/flow-v2.png)

1. Gere sua preferência

	1.1 Adicione o SDK baixado do Mercado Pago no seu projeto.

	1.2 Adicione as credenciais para habilitar o uso do SDK do Mercado Pago.

	1.3 Configure a preferência conforme seu produto ou serviço.

2. Adicione o checkout ao seu site

## Etapas para se integrar

Instalar o Checkout Pro requer duas etapas:

### 1. Gere sua preferência

Insira o seguinte código que consta de três partes:

1.1 Adicione o [SDK do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/previous-requirements#bookmark_pré-requisitos) no seu projeto:

[[[
```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPago;
```
```ruby
# SDK de Mercado Pago
require 'mercadopago'
```
```csharp
// SDK de Mercado Pago
 using MercadoPago.Config;
```
```python
# SDK de Mercado Pago
import mercadopago
```
]]]

<br/><br/>1.2 Adicione as [credenciais]([FAKER][CREDENTIALS][URL]) para habilitar o uso do SDK do Mercado Pago:<br/>

[[[
```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';

// Configura credenciais
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Configura credenciais
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPago;

// Configura credenciais
MercadoPago.SDK.setAccessToken("PROD_ACCESS_TOKEN");
```
```ruby
# SDK de Mercado Pago
require 'mercadopago.rb'

# Configura credenciais
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')
```
```csharp
// SDK de Mercado Pago
using MercadoPago.Config;

// Configura credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
```
```python
# SDK de Mercado Pago  
import mercadopago

# Configura credenciais
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")
```
]]]


<br/><br/>1.3 Configure a preferência conforme seu produto ou serviço:<br/>

----[mla, mlb, mlu, mpe, mlm]----

> Por favor considere que é necessário configurar as `back_urls` se você quiser retornar ao seu site ao final do pagamento. Para mais informações, visite a seção [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/advanced-integration#bookmark_url_de_retorno). 

[[[
 ```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';

// Configura credenciais
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');

// Cria um objeto de preferência
$preference = new MercadoPago\Preference();

// Cria um item na preferência
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);
$preference->save();
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Configura credenciais
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

// Cria um objeto de preferência
let preference = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor substituirá a string "<%= global.id %>" no seu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPago;

// Configura credenciais
MercadoPago.SDK.setAccessToken("PROD_ACCESS_TOKEN");

// Cria um objeto de preferência
Preference preference = new Preference();

// Cria um item na preferência
Item item = new Item();
item.setTitle("Meu produto")
    .setQuantity(1)
    .setUnitPrice((float) 75.56);
preference.appendItem(item);
preference.save();
```
```ruby
# SDK de Mercado Pago
require 'mercadopago'

# Configura credenciais
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

# Cria um objeto de preferência
preference_data = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor substituirá a string "<%= @preference_id %>" no seu HTML
@preference_id = preference['id']
```
```csharp
// SDK de Mercado Pago
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;

// Configura credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Cria o objeto de request da preferência
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};

// Cria a preferência usando o client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# SDK de Mercado Pago
import mercadopago

# Configura credenciais
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Cria um item na preferência
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}'
```
]]]

------------

----[mlc, mco]----

[[[
 ```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';

// Configura credenciais
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');

// Cria um objeto de preferência
$preference = new MercadoPago\Preference();

// Cria um item na preferência
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->save();
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Configura credenciais
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

// Cria um objeto de preferência
let preference = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor substituirá a string "<%= global.id %>" no seu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPago;

// Configura credenciais
MercadoPago.SDK.setAccessToken("PROD_ACCESS_TOKEN");

// Cria um objeto de preferência
Preference preference = new Preference();

// Cria um item na preferência
Item item = new Item();
item.setTitle("Meu produto")
    .setQuantity(1)
    .setUnitPrice((float) 75);
preference.appendItem(item);
preference.save();
```
```ruby
# SDK de Mercado Pago
require 'mercadopago'

# Configura credenciais
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

# Cria um objeto de preferência
preference_data = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 75,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor substituirá a string "<%= @preference_id %>" no seu HTML
@preference_id = preference['id']
```
```csharp
// SDK de Mercado Pago
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;

// Configura credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Cria o objeto de request da preferência
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
};

// Cria a preferência usando o client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# SDK de Mercado Pago
import mercadopago

# Configura credenciais
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Cria um objeto de preferência
preference_data = {
    "items": [
        {
            "title": "My Item",
            "quantity": 1,
            "unit_price": 75
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75
        }
    ]
}'
```
]]]

> WARNING
>
> Importante
>
> O valor de `unit_price` deve ser um número inteiro.

------------
<span></span>

> NOTE
>
> Aceite pagamentos apenas de usuários cadastrados
>
> Se quiser aceitar pagamentos apenas de usuários cadastrados, com cartão e saldo no Mercado Pago, entre [nesta seção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations/#bookmark_aceitar_pagamentos_somente_de_usuários_cadastrados) para mais informações.

### 2. Adicione o checkout ao seu site

Por último, adicione o seguinte código para mostrar o botão de pagamento do seu Checkout Pro onde você quiser que ele apareça.

[[[
```php
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id="<?php echo $preference->id; ?>">
</script>
```
```node
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id='<%= global.id %>'>
</script>
```
```java
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id="${preference.id}">
</script>
```
```ruby
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id="<%= @preference_id %>">
</script>
```
```csharp
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id="@Html.DisplayFor(model => model.id)">
</script>
```
```python
<script
  src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-payment-checkout.js"
  data-preference-id="{{ preference_id }}">
</script>
```
]]]

> WARNING
>
> Importante
>
> Esta documentação utiliza a antiga versão da biblioteca. Para ver a versão nova, vá para a [seção de Integre o Checkout Pro com MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/integration).

> WARNING
>
> Importante
>
> Não esqueça de acessar de outro navegador ou de encerrar a sessão da sua conta do Mercado Pago antes de fazer os testes. Você não pode pagar com a mesma conta que criou o formulário de pagamento.<br/>

#### Excelente! Você concluiu sua integração.
_Clique no link dentro do seu site e [teste a integração do seu Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/test-integration)_.<br/><br/>

## Exemplos para download

> GIT
>
> Checkout Pro
>
> Disponibilizamos [exemplos completos de integração](http://github.com/mercadopago/checkout-payment-sample) no GitHub para PHP ou NodeJS para que você possa fazer o download imediatamente.

---

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Teste sua integração
>
> Confira se está tudo em ordem na sua integração com os usuários de teste.
>
> [Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/test-integration)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Aceite a carteira Mercado Pago
>
> Permite pagamentos somente de usuários cadastrados no Mercado Pago, com cartão e saldo disponível.
>
> [Usuários cadastrados](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations/#bookmark_aceitar_pagamentos_somente_de_usuários_cadastrados)
