# Integrar Checkout Pro

A integração com o Checkout Pro permite realizar cobranças através do nosso formulário web a partir de qualquer dispositivo de forma simples, rápida e segura.

Nesta documentação você encontra todos os passos necessários para integrar o Checkout Pro através dos **nossos SDKs**. Para isso, siga as etapas descritas abaixo.

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
import { MercadoPagoConfig } from 'mercadopago';
// Adicione as credenciais
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
});
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
const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.create({ body: {
items: [
 {
  id: '<ID>',
  title: '<title>',
  quantity: 1,
  unit_price: 100
 }
],
} }).then(console.log).catch(console.log);
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
const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.create({ body: {
items: [
 {
  id: '<ID>',
  title: '<title>',
  quantity: 1,
  unit_price: 100
 }
],
} }).then(console.log).catch(console.log);
```
```node
const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.create({ body: {
items: [
 {
  id: '<ID>',
  title: '<title>',
  quantity: 1,
  unit_price: 100
 }
],
} }).then(console.log).catch(console.log);
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
> Adicionar Checkout

Após ter criado a preferência em seu backend, será necessário instalar o SDK de frontend do Mercado Pago ao seu projeto para adicionar o botão de pagamento.

A instalação é feita, basicamente, em **duas etapas**: incluindo o SDK do Mercado Pago ao projeto com suas credenciais configuradas e iniciando o checkout a partir da preferência gerada anteriormente.

1. Para incluir o SDK Mercado Pago.js, adicione o código abaixo no HTML do projeto ou instale a biblioteca para ReactJs.

[[[
```html
// SDK MercadoPago.js
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```bash
npm install @mercadopago/sdk-react
```
]]]

Em seguida, inicialize a integração definindo sua [chave pública](/developers/pt/docs/checkout-pro/additional-content/your-integrations/credentials) usando o seguinte código JavaScript.

[[[
```Javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
```react-jsx
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');
```
]]]

Para integrações JavaScript/HTML, via CDN, você vai precisar ainda criar um container identificador para definir o local que o botão será inserido na tela. A criação do container é feita inserindo um elemento no código HTML da página no qual o componente será renderizado.

```html
 <div id="wallet_container"></div>
```

> NOTE
>
> Atenção
>
> O valor exibido na propriedade ID a seguir é apenas um exemplo e pode ser alterado, mas deve sempre corresponder ao ID indicado na etapa de renderização.

2. Ao finalizar a etapa anterior, **inicialize seu checkout utilizando o ID da preferência previamente criada com o identificador do elemento onde o botão deverá ser exibido**, caso esteja utilizando a integração `Javascript/HTML`, ou instanciando o componente, no caso da biblioteca `React`, conforme os exemplos abaixo.

[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
   },
});
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />
```
]]]

Em seguida, você poderá observar o botão de pagamento renderizado em sua página.

<center>

![wallet-render](cow/cow-render-wallet-pt.png)

</center>

No exemplo acima, um botão de pagamento será renderizado e ficará responsável por abrir o Checkout Pro. Caso queira que a experiência com Checkout Pro seja feita em uma **aba externa**, veja a seção [Esquema de abertura](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/opening-schema)

> WARNING
>
> Importante
>
> É de extrema importância que se atente, durante a criação da preferência, para a configuração das `back_urls` porque elas serão responsáveis por guiar o fluxo de retorno ao seu website quando o checkout for finalizado. É possível definir três URLs de retorno diferentes, para cenários de pagamento pendentes, sucesso ou erro. Para mais informações, veja a seção de [URLs de retorno.](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/redirection)

Os pagamentos criados possuem os seguintes status: `Pendente`, `Rejeitado` e `Aprovado`. Para acompanhar as atualizações é necessário configurar seu sistema para receber as notificações de pagamentos e outras atualizações de status. Veja [Notificações](/developers/pt/docs/checkout-pro/additional-content/your-integrations/notifications) para mais detalhes.

## Exemplo de implementação

Confira o [exemplo completo de integração](http://github.com/mercadopago/checkout-payment-sample) no GitHub para **PHP** ou **NodeJS** para fazer o _download_ de um projeto básico de implementação rápida do Checkout Pro.