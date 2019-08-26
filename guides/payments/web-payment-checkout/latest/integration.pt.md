---
sites_supported:
  - mla
  - mlb
---

# Integre o Web Checkout

> INDEX
>
> Nesta página
>
>
>
> [Como me integro?](https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/integration#bookmark_como_me_integro?)
>
> [Etapas para se integrar](https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/integration#bookmark_etapas_para_se_integrar)


## Como me integro?

![Integration](/images/web-payment-checkout/flow-v2.png)

1. Gere sua preferência

	1.1 Adicione o SDK baixado do Mercado Pago no seu projeto.

	1.2 Adicione as credenciais para habilitar o uso do SDK do Mercado Pago.

	1.3 Configure a preferência conforme seu produto ou serviço.

2. Adicione o checkout ao seu site

## Etapas para se integrar

Instalar o Web Checkout requer duas etapas:

### 1. Gere sua preferência

Insira o seguinte código que consta de três partes:

1.1 Adicione o <a href="https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/previous-requirements#bookmark_pré-requisitos" target="_blank"> SDK do Mercado Pago</a> no seu projeto:

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

<br/><br/>1.2 Adicione as <a href="https://www.mercadopago.com/mla/account/credentials" target="_blank"> credenciais</a> para habilitar o uso do SDK do Mercado Pago:<br/>

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
// Este valor substituirá a string "$$init_point$$" no seu HTML
  global.init_point = response.body.init_point;
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

# Este valor substituirá a string "<%= @init_point %>" no seu HTML
@init_point = preference["response"]["init_point"]
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
    CurrencyId = CurrencyId.BRL,
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

Por último, adicione o seguinte código para mostrar o botão de pagamento do seu Web Checkout onde você quiser que ele apareça.

[[[
```php
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-public-key= "ENV_PUBLIC_KEY"
   data-preference-id="<?php echo $preference->id; ?>">
  </script>
</form>
```
```node
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-public-key= "ENV_PUBLIC_KEY"
   data-preference-id="$$id$$">
  </script>
</form>
```
```java
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-public-key= "ENV_PUBLIC_KEY"
   data-preference-id="${preference.id}">
  </script>
</form>
```
```ruby
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-public-key= "ENV_PUBLIC_KEY"
   data-preference-id="%= @init_point %>">
  </script>
</form>
```
```csharp
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
   data-public-key= "ENV_PUBLIC_KEY"
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
_Clique no link dentro do seu site e [teste a integração do seu Web Checkout.](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration/)_.<br/><br/>

> NOTE
>
> Nota
>
> Esta documentação é referente à nova versão do Web Checkout. **Para ver a versão anterior**, confira a [seção de Web Checkout antigua](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/v1/introduction/).

### Próximos passos

<div>
<a href="https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Teste sua integração<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Confira se está tudo em ordem na sua integração com os usuários de teste.</p>
</blockquote>
</a>
<a href="https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Integração avançada<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
<p>Otimize sua integração e melhore o gerenciamento das suas vendas.</p>
</blockquote>
</a>   
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
