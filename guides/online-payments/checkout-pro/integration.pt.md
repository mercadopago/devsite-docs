# Integre o Checkout Pro

Integrar Checkout Pro do Mercado Pago te permite cobrar através do nosso formulário web de qualquer dispositivo de forma simples, rápida e segura.

Use os [exemplos para download](#bookmark_exemplos_para_download) para conhecer a integração completa ou para adaptá-los de acordo com o que precisa.

## Como me integro?

![Integration](/images/web-payment-checkout/flow-v2-2.png)

1. Crie sua preferência

	1.1 Adicione o SDK do Mercado Pago no seu backend e adicione as credenciais para permitir seu uso.

	1.2 Configure a preferência conforme seu produto ou serviço.<br><br>

2. Adicione o Checkout Pro ao seu site

	2.1 Inclua o SDK MercadoPago.js V2 em seu frontend.

	2.2 Configure as credenciais para habilitar o uso do SDK e inicialize o checkout com a preferência criada.

## Etapas para se integrar

Instalar o Checkout Pro requer duas etapas:

> SERVER_SIDE
>
> h3
>
> &nbsp;1. Crie sua preferência

No seu backend, escreva o seguinte código que consiste em duas partes:

1.1 Adicione o [SDK do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/previous-requirements#bookmark_pré-requisitos) ao seu projeto e configure as [credenciais]([FAKER][CREDENTIALS][URL]) para habilitar seu uso:

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
import com.mercadopago.MercadoPago;
// Adicione as credenciais
MercadoPago.SDK.setAccessToken("PROD_ACCESS_TOKEN");
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

1.2 Configure a preferência conforme seu produto ou serviço:

----[mla, mlb, mlu, mpe, mlm]----

> Por favor considere que é necessário configurar as `back_urls` se você quiser retornar ao seu site ao final do pagamento. Para mais informações, visite a seção [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/advanced-integration#bookmark_url_de_retorno).

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
> Aceite pagamentos apenas de usuários cadastrados
>
> Se quiser aceitar pagamentos apenas de usuários cadastrados, com cartão e saldo no Mercado Pago, entre [nesta seção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations/#bookmark_aceitar_pagamentos_somente_de_usuários_cadastrados) para mais informações.

<span></span>

> CLIENT_SIDE
>
> h3
>
> &nbsp;2. Adicione o Checkout Pro ao seu site

Agora no seu frontend, siga estas etapas para adicionar o checkout ao seu site:

2.1. Inclua o SDK MercadoPago.js V2 no seu projeto:

```html
// SDK MercadoPago.js V2
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

2.2. Configure as credenciais do SDK para seu uso e inicialize seu checkout com o ID da preferência criada anteriormente e o identificador do elemento onde o botão de pagamento deve ser exibido.

[[[
```html
<script>
// Adicione as credenciais do SDK
  const mp = new MercadoPago('PUBLIC_KEY', {
        locale: 'pt-BR'
  });

  // Inicialize o checkout
  mp.checkout({
      preference: {
          id: 'YOUR_PREFERENCE_ID'
      },
      render: {
            container: '.cho-container', // Indique o nome da class onde será exibido o botão de pagamento
            label: 'Pagar', // Muda o texto do botão de pagamento (opcional)
      }
});
</script>
```
]]]

Neste caso, será mostrado um botão de pagamento que abrirá o Checkout Pro.

Você pode consultar outras maneiras de abrir o checkout na [seção de Personalizações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/customizations).

> Esta documentação utiliza a nova versão da biblioteca. Para ver a versão anterior, vá para a [seção de Integre o Checkout Pro antiga](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/v1/integration).

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
