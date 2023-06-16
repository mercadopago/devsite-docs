# Integre com o Checkout Pro

A integração com o Checkout Pro do Mercado Pago te permite cobrar através do nosso formulário _web_ a partir qualquer dispositivo de forma simples, rápida e segura.

> NOTE
>
> Nota
>
> Use o nosso [vídeo tutorial](#bookmark_vídeo_tutorial) e o [exemplo de implementação básica](#bookmark_exemplo_de_implementação_básica) para mais informações sobre a integração com o Checkout Pro.

## Passo a passo

![Integration](/images/web-payment-checkout/flow-v2-2.png)

Instalar o Checkout Pro requer duas etapas principais:

1. Criar as preferências desejadas;
2. Adicionar o Checkout Pro em seu *site*.

> SERVER_SIDE
>
> h3
>
> &nbsp;1. Crie sua preferência

Adicione o [SDK do Mercado Pago](/developers/pt/docs/checkout-pro/requirements#bookmark_pré_requisitos) e as [credenciais](/developers/pt/docs/checkout-pro/additional-content/your-integrations/credentials) necessárias ao seu projeto para habilitar o uso de preferências:

[[[
```php
<?php
// SDK do Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Adicione as credenciais
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>
```
```node
// SDK do Mercado Pago
const mercadopago = require ('mercadopago');
// Adicione as credenciais
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});
```
```java
// SDK do Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Adicione as credenciais
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");
```
```ruby
# SDK do Mercado Pago
require 'mercadopago'
# Adicione as credenciais
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')
```
```csharp
// SDK do Mercado Pago
 using MercadoPago.Config;
 // Adicione as credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
```
```python
# SDK do Mercado Pago
import mercadopago
# Adicione as credenciais
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")
```
]]]

Em seguida, configure a preferência de acordo com o seu produto ou serviço:

----[mla, mlb, mlu, mpe, mlm]----

> Considere que é necessário configurar as `back_urls` se você quiser retornar ao seu _site_ ao final do pagamento. Para mais informações, visite a seção [Configurações adicionais](/developers/pt/docs/checkout-pro/checkout-customization/additional-configuration).

[[[
 ```php
<?php
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
// Cria um objeto de preferência
PreferenceClient client = new PreferenceClient();

// Cria um item na preferência
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);

PreferenceRequest request = PreferenceRequest.builder().items(items).build();

client.create(request);
```
```ruby
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
> Adapte a integração do Checkout Pro ao seu negócio
>
> Acesse a seção [Preferências](/developers/pt/docs/checkout-pro/checkout-customization/preferences) para saber como adicionar novas funcionalidades ao Checkout Pro de acordo com o seu modelo negócio. 

<span></span>

> CLIENT_SIDE
>
> h3
>
> &nbsp;2. Adicione o Checkout Pro ao seu site

Inclua o SDK `MercadoPago.js` V2 no seu projeto:

```html
// SDK MercadoPago.js V2
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

Depois, configure as credenciais do SDK para seu uso individual, e inicialize seu checkout com o ID da preferência previamente criada e o identificador do elemento onde o botão de pagamento deverá ser exibido:

[[[
```html
<div class="cho-container"></div>
<script>
  const mp = new MercadoPago('PUBLIC_KEY', {
    locale: 'pt-BR'
  });

  mp.checkout({
    preference: {
      id: 'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container',
      label: 'Pagar',
    }
  });
</script>
```
]]]

> NOTE
>
> Nota
>
> Lembre-se de substituir o valor **BR** por seu país no campo `locale`.

No exemplo acima, um botão de pagamento será renderizado e ficará responsável por abrir o Checkout Pro.

Você pode consultar outras maneiras de abrir o checkout na seção [Interface de usuário](/developers/pt/docs/checkout-pro/checkout-customization/user-interface).

> WARNING
>
> Importante
>
> Não esqueça de acessar o Checkout Pro com outro navegador ou encerrar a sessão da sua conta do Mercado Pago antes de testá-lo, já que você não poderá pagar com a mesma conta responsável por criar o formulário de pagamento.

## Vídeo tutorial 

Saiba como implementar a solução Checkout Pro em seu *site* com o nosso vídeo tutorial:

<div class="embed-container">
    <iframe width="1106" height="622" src="https://www.youtube.com/embed/anrwYq84RsU" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
    </iframe>
</div>

<br/>
<br/>

## Exemplo de implementação básica

Confira o [exemplo completo de integração](http://github.com/mercadopago/checkout-payment-sample) no GitHub para PHP ou NodeJS para fazer o *download* de um projeto básico de implementção rápida do Checkout Pro em seu *site*.

---

> PREV_STEP_CARD_PT
>
> Pré-requisitos
>
> Veja os pré-requisitos necessários para integrar com o Checkout Pro
>
> [Pré-requisitos](/developers/pt/docs/checkout-pro/requirements)

> NEXT_STEP_CARD_PT
>
> Teste a sua integração com o Checkout Pro
>
> Confira se a sua integração está funcionando corretamente com usuários de teste.
>
> [Teste de integração](/developers/pt/docs/checkout-pro/test-integration)
