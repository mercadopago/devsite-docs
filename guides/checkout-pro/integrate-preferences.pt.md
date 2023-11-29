# Integrar Checkout Pro

A integração com o Checkout Pro permite realizar cobranças através do nosso formulário web a partir de qualquer dispositivo de forma simples, rápida e segura.

Nesta documentação você encontra todos os passos necessários para integrar o Checkout Pro através dos **nossos SDKs**. Para isso, siga as etapas descritas abaixo.

---
live_demo_code_action:
 - title: Experimente nosso Checkout Pro
 - description: Construa a experiência visual do Checkout Pro em tempo real. Quando estiver tudo pronto, baixe ou copie o código gerado para adicionar no seu site ou compartilhar com um desenvolvedor.
 - link: /developers/pt/live-demo/checkout-pro
 - image:https://http2.mlstatic.com/storage/dx-devsite/docs-assets/custom-upload/2023/9/6/1696615115358-Group34359.png
 - linkName: Demo
 - buttonDescription: Construir seu Checkout Pro
---

> SERVER_SIDE
>
> h2
>
> Instalar SDK do Mercado Pago

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
   <version>2.1.7</version>
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
----[mla, mpe, mlm, mco, mlc, mlu]----
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
// SDK do MercadoPago
use MercadoPago\MercadoPagoConfig;
//Adicione as credenciais
MercadoPagoConfig::setAccessToken("PROD_ACCESS_TOKEN");
?>
```
```node
// SDK do Mercado Pago
import { MercadoPagoConfig } from 'mercadopago';
// Adicione as credenciais
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Agrega credenciales
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
$client = new PreferenceClient();
$preference = $client->create([
  "items"=> array(
    array(
      "title" => "Meu produto",
      "quantity" => 1,
      "currency_id" => "BRL",
      "unit_price" => 100
    )
  )
]);
?>
```
```node
const preference = new Preference(client);

preference.create({
  'items': [
     {
	 'title': 'Meu produto',
	 'quantity': 1,
	 'currency_id': 'BRL',
	 'unit_price': 100
     }
  ]
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
 PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
PreferenceClient client = new PreferenceClient();
Preference preference = client.create(request);
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
$client = new PreferenceClient();
$preference = $client->create([
  "items"=> array(
    array(
      "title" => "Meu produto",
      "quantity" => 1,
      "currency_id" => "BRL",
      "unit_price" => 100
    )
  )
]);
?>
```
```node
const preference = new Preference(client);

preference.create({
  'items': [
     {
	 'title': 'Meu produto',
	 'quantity': 1,
	 'currency_id': 'BRL',
	 'unit_price': 100
     }
  ]
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
 PreferenceItemRequest itemRequest =
       PreferenceItemRequest.builder()
           .id("1234")
           .title("Games")
           .description("PS5")
           .pictureUrl("http://picture.com/PS5")
           .categoryId("games")
           .quantity(2)
           .currencyId("BRL")
           .unitPrice(new BigDecimal("4000"))
           .build();
   List<PreferenceItemRequest> items = new ArrayList<>();
   items.add(itemRequest);
PreferenceRequest preferenceRequest = PreferenceRequest.builder()
.items(items).build();
PreferenceClient client = new PreferenceClient();
Preference preference = client.create(request);
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
> Escolher o tipo de integração

Com a SDK instalada e configurada corretamente no seu projeto, você está pronto para prosseguir com a integração. Para isso, escolha o tipo de integração que melhor se adapte às suas necessidades, seja **Web** ou **Mobile**, e siga os passos detalhados na seção correspondente ao tipo de solução escolhida.

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Card
 - card_title: Checkout Pro para Web
 - card_description: Ofereça diferentes meios de pagamento aos clientes em um site de maneira simples, rápida e segura.
 - card_link:  /developers/pt/docs/checkout-pro/integrate-checkout-pro/web
 - card_linkDescription: Integrar
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Loading
 - card_title: Checkout Pro para Mobile
 - card_description: Ofereça diferentes meios de pagamento aos clientes na sua aplicação móvel, utilizando a linguagem que melhor se adapte ao seu projeto.
 - card_link: /developers/pt/docs/checkout-pro/integrate-checkout-pro/mobile
 - card_linkDescription: Integrar
 - card_pillText: DISPONÍVEL
---