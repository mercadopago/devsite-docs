---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlm
  - mlc
---

# Integre o Checkout Mercado Pago



## Como me integro?

![Integration](/images/web-payment-checkout/flow-v2.png)

1. Gere sua preferência

	1.1 Adicione o SDK baixado do Mercado Pago no seu projeto.

	1.2 Adicione as credenciais para habilitar o uso do SDK do Mercado Pago.

	1.3 Configure a preferência conforme seu produto ou serviço.

2. Adicione o checkout ao seu site

## Etapas para se integrar

Instalar o Checkout Mercado Pago requer duas etapas:

### 1. Gere sua preferência

Insira o seguinte código que consta de três partes:

1.1 Adicione o <a href="https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/previous-requirements#bookmark_pré-requisitos" target="_blank"> SDK do Mercado Pago</a> no seu projeto:

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
require 'mercadopago.rb'
```
```csharp
// SDK de Mercado Pago
 using MercadoPago;
```
]]]

<br/><br/>1.2 Adicione as <a href="[FAKER][CREDENTIALS][URL]" target="_blank"> credenciais</a> para habilitar o uso do SDK do Mercado Pago:<br/>

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
$mp = MercadoPago.new('PROD_ACCESS_TOKEN')
```
```csharp
// SDK de Mercado Pago
using MercadoPago;

// Configura credenciais
MercadoPago.SDK.AccessToken = "PROD_ACCESS_TOKEN";
```
]]]


<br/><br/>1.3 Configure a preferência conforme seu produto ou serviço:<br/>

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
require 'mercadopago.rb'

# Configura credenciais
$mp = MercadoPago.new('PROD_ACCESS_TOKEN')

# Cria um objeto de preferência
preference_data = {
  "items": [
    {
      "title": "Meu produto",  
      "unit_price": 100,
      "quantity": 1
    }
  ]
}
preference = $mp.create_preference(preference_data)

# Este valor substituirá a string "<%= @preference_id %>" no seu HTML
@preference_id = preference["response"]["id"]
```
```csharp
// SDK de Mercado Pago
using MercadoPago;

// Configura credenciais
MercadoPago.SDK.AccessToken = "PROD_ACCESS_TOKEN";

// Cria um objeto de preferência
Preference preference = new Preference();

// Cria um item na preferência
preference.Items.Add(
  new Item()
  {
    Title = "Meu produto",
    Quantity = 1,
    CurrencyId = CurrencyId.[FAKER][CURRENCY][ACRONYM],
    UnitPrice = (decimal)75.56
  }
);
preference.Save()"
```
```curl
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="**PROD_ACCESS_TOKEN**"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
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


### 2. Adicione o checkout ao seu site

Por último, adicione o seguinte código para mostrar o botão de pagamento do seu Checkout Mercado Pago onde você quiser que ele apareça.

> NOTE
>
> Nota
>
> Se o seu site funciona em mobile, por favor considere que é necessário configurar as `back_urls` se você quiser retornar ao seu site ao final do pagamento. Para mais informações, visite a seção [Integração avançada](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/payments/web-payment-checkout/test-integration/). 

[[[
```php
<form action="/processar_pagamento" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-preference-id="<?php echo $preference->id; ?>">
  </script>
</form>
```
```node
<form method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-preference-id='<%= global.id %>'>
  </script>
</form>
```
```java
<form action="/processar_pagamento" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-preference-id="${preference.id}">
  </script>
</form>
```
```ruby
<form action="/processar_pagamento" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-preference-id="<%= @preference_id %>">
  </script>
</form>
```
```csharp
<form action="/processar_pagamento" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-preference-id="@Html.DisplayFor(model => model.id)">
  </script>
</form>
```
]]]

> WARNING
>
> Importante
>
> Não esqueça de acessar de outro navegador ou de encerrar a sessão da sua conta do Mercado Pago antes de fazer os testes. Você não pode pagar com a mesma conta que criou o formulário de pagamento.<br/>

#### Excelente! Você concluiu sua integração.
_Clique no link dentro do seu site e [teste a integração do seu Checkout Mercado Pago.](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration/)_.<br/><br/>

> NOTE
>
> Nota
>
> Esta documentação é referente à nova versão do Checkout Mercado Pago. **Para ver a versão anterior**, confira a [seção de Checkout Mercado Pago antigua](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/v1/introduction/).

---

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Teste sua integração
>
> Confira se está tudo em ordem na sua integração com os usuários de teste.
>
> [Teste sua integração](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration/)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Integração avançada
>
> Otimize sua integração e melhore o gerenciamento das suas vendas.
>
> [Integração avançada](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration/)
