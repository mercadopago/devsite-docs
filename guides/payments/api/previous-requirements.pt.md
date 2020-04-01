# Pré-requisitos para começar

Te contamos o que é preciso saber para poder integrar nossas APIs.

## Tenha a mão as suas credenciais
As credenciais são as **chaves que te proporcionamos para que possa configurar sua integração**. Você utilizará uma chave pública e outra chave privada.

A chave pública, ou Public Key, é utilizada para acessar os recursos que necessita no seu frontend. Com ela você pode coletar os dados dos cartões de crédito e convertê-los em um token representativo que pode ser enviado de forma segura aos seus servidores para criar um pagamento.

E a chave privada, ou Access token, te permite chamar o resto das APIs a partir dos seus servidores. Por exemplo, para processar um pagamento, realizar um reembolso ou armazenar cartões.

Para poder encontrá-las, veja a [seção de Credenciais](https://www.mercadopago.com/mlb/account/credentials).

> Têm dúvidas sobre credenciais? Acesse nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/faqs/credentials/).

## Sempre utilize nossas bibliotecas
É importante que sempre utilize nossas bibliotecas oficiais para sua integração. Isso permite cuidar dos dados sensíveis dos seus cliente, cumprir com os padrões de segurança requeridos e estar sempre atualizado.

> CLIENT_SIDE
>
> Inclua MercadoPago.js.

MercadoPago.js te permite criar um token de pagamento para enviar os dados dos cartões ao seu backend de forma segura. Pode-se utiliza-lo adicionando o seguinte código ao seu site:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

> SERVER_SIDE
>
> Instale o SDK do Mercado Pago

Instale o SDK oficial para simplificar sua integração com nossas APIs.

[[[
```php
===
<a href="https://getcomposer.org/download" target="_blank"> Instale Composer</a> para usar o SDK.

Execute o seguinte código na sua linha de comando:
===
php composer.phar require "mercadopago/dx-php:dev-master"
```
```node
===
Para instalar o SDK execute o seguinte código via linha de comandos do seu terminal usando <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a>:
===
npm install mercadopago
```
```java
===
Para instalar o SDK no seu projeto <a href="http://maven.apache.org/install.html" target="_blank"> Maven </a> adicione a seguinte dependência no seu arquivo pom.xml e em seguida execute 'maven install'.
===
<dependency>
            <groupId> com.mercadopago </groupId>
            <artifactId> dx-java </artifactId>
            <version> 1.0.33 </version>
</dependency>
```
```ruby
===
O SDK de Mercado Pago está disponível como <a href="https://rubygems.org/gems/mercadopago-sdk" target="_blank"> gema</a>, para instá-la execute o seguinte código na sua linha de comandos:
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Use <a href="https://docs.microsoft.com/pt-pt/nuget/install-nuget-client-tools" target="_blank"> NuGet</a> para instalar o SDK .NET de Mercado Pago.
------------
----[mla, mlm, mco, mlc, mlu]----
Use <a href="https://docs.microsoft.com/es-es/nuget/install-nuget-client-tools" target="_blank"> NuGet</a> para instalar el SDK .NET de Mercado Pago.
------------
Execute o seguinte comando no seu console do NuGet Package Manager:
===
PM> Install-Package mercadopago-sdk -Version 1.0.57
```
]]]

## Conheça nossas Referências de API

Se não pode utilizar nossos SDKs oficiais, tenha disponível toda a informação sobre consultas e respostas de dados para interagir diretamente com nossas APIs em [Referências de API](https://www.mercadopago.com.br/developers/pt/reference/payments/_payments/post/).

## Cumpra com os requisitos para ir a produção

Ao realizar sua integração, é necessário que tenha em conta todos os [requisitos para ir a produção](https://www.mercadopago.com.br/developers/pt/guides/payments/api/goto-production/).
Com esse processo, garante-se a segurança dos dados dos seus cliente, o cumprimento das normas e disposições legais de cada país e ofereça a melhor experiência de compra para suas vendas.

Quando sua integração estiver pronta e quiser começar a receber pagamentos, complete o formulário para ir a produção na [seção de Credenciais](https://www.mercadopago.com/mlb/account/credentials).

> LEFT_BUTTON_REQUIRED_ES
>
> Integrar API de Mercado Pago con tarjeta
>
> Construye y configura tu propia experiencia de pagos.
>
> [Integrar API de Mercado Pago con tarjeta](https://www.mercadopago.com.ar/developers/es/guides/payments/api/receiving-payment-by-card/)

---
### Próximos pasos

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/)