# Integrar Checkout Pro

A integração com o Checkout Pro permite realizar cobranças através do nosso formulário web a partir qualquer dispositivo de forma simples, rápida e segura.

Nesta documentação você encontra todos os passos necessários para integrar o Checkout Pro através dos **nossos SDKs**. Para isso, siga as etapas descritas abaixo.


> Também é possível realizar a integração através de chamadas via backend diretamente para a [API de Preferências](/developers/pt/reference/preferences/_checkout_preferences/post). Neste modelo, você obterá o link do Checkout Pro no atributo `init_point`, na resposta à requisição da API. A partir daí, basta utilizá-lo para redirecionar o comprador ao checkout.


## Instalar SDK do Mercado Pago

A primeira etapa para integrar o Checkout Pro é a instalação do SDK do Mercado Pago em seu projeto. Para isso, utilize um dos códigos disponíveis abaixo.


[[[
```php
===
Para instalar o SDK, você deve executar o seguinte código na linha de comandos do seu terminal usando o [Composer](https://getcomposer.org/download):
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
Para instalar o SDK, você deve executar o seguinte código na linha de comandos do seu terminal usando [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
Para instalar o SDK no seu projeto [Maven](http://maven.apache.org/install.html), você deve adicionar a seguinte dependência ao seu arquivo <code>pom.xml</code> e executar o código <code>maven install</code> na linha de comandos do seu terminal:
===
<dependency>
   <groupId>com.mercadopago</groupId>
   <artifactId>sdk-java</artifactId>
   <version>2.0.0</version>
</dependency>
```
```ruby
===
Para instalar o SDK, você deve executar o seguinte código na linha de comandos do seu terminal usando [gema](https://rubygems.org/gems/mercadopago-sdk):
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Para instalar o SDK, você deve executar o seguinte código na linha de comandos do seu terminal usando [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference):

------------

----[mla, mlm, mco, mlc, mlu]----
Para instalar o SDK, você deve executar o seguinte código na linha de comandos do seu terminal usando [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference):

------------
===
nuget install mercadopago-sdk
```
```python
===
Para instalar o SDK, você deve executar o seguinte código na linha de comandos do seu terminal usando [pip](https://pypi.org/project/mercadopago/):
===
pip3 install mercadopago
```
]]]



> SERVER_SIDE
>
> h2
>
> Criar preferência

Preferências são conjuntos de informações que permitem configurar um produto ou serviço que se deseja cobrar, como preço e quantidade, além de outras configurações relacionadas ao fluxo de pagamento definido.

Para criar uma preferência, utilize um dos SDKs disponíveis abaixo preenchendo os atributos com as respectivas informações.



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


Ao finalizar a criação da preferência, é preciso configurá-la de acordo com seu produto ou serviço. Para isso, utilize um dos códigos disponíveis abaixo preenchendo os atributos com as respectivas informações.


----[mla, mlb, mlu, mpe, mlm]----

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
]]]


> WARNING
>
> Importante
>
> O valor de `unit_price` deve ser um número inteiro.

------------


> CLIENT_SIDE
>
> h2
>
> Adicionar Checkout


Após ter criado a preferência em seu backend, será necessário instalar o SDK de frontend do Mercado Pago ao seu projeto para adicionar o botão do Checkout Pro.


A instalação é feita em **duas etapas**: incluindo o SDK do Mercado Pago ao projeto com suas credenciais configuradas e iniciando o checkout a partir da preferência gerada anteriormente.



1. Para incluir o SDK Mercado Pago.js, adicione o código abaixo no HTML do projeto.



```html
// SDK MercadoPago.js
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

2. Ao finalizar a inclusão do SDK Mercado Pago.js, configure as credenciais do SDK e inicialize seu checkout com o ID da preferência previamente criada e o identificador do elemento onde o botão de pagamento deverá ser exibido conforme exemplo abaixo.


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
> Importante
>
> Lembre-se de substituir o valor `BR` por seu país no campo `locale`.

No exemplo acima, um botão de pagamento será renderizado e ficará responsável por abrir o Checkout Pro. Caso queira personalizar a forma como o checkout será aberto, veja a seção [Esquema de abertura](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/opening-schema)


## Exemplo de implementação

Confira o [exemplo completo de integração](http://github.com/mercadopago/checkout-payment-sample) no GitHub para **PHP** ou **NodeJS** para fazer o _download_ de um projeto básico de implementação rápida do Checkout Pro.
