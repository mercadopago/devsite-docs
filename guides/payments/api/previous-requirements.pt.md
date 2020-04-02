# Pré-requisitos para começar

Saiba o que é necessário para integrar nossas APIs.

## Obtenha suas credenciais

As credenciais são as **chaves que te oferecemos para que possa configurar sua integração**. Você utilizará uma chave pública e outra chave privada.

* A chave pública, ou _Public Key_, é utilizada para acessar os recursos que necessita no seu frontend. Com ela você pode coletar os dados dos cartões de crédito e convertê-los em um token representativo que pode ser enviado de forma segura aos seus servidores para criar um pagamento.

* E a chave privada, ou _Access token_, te permite chamar o resto das APIs a partir dos seus servidores. Por exemplo, para processar um pagamento, realizar um reembolso ou armazenar cartões.

Para poder encontrá-las, veja a [seção de Credenciais](https://www.mercadopago.com/mlb/account/credentials).

> Têm dúvidas sobre credenciais? Acesse nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/faqs/credentials/).

## Sempre utilize nossas bibliotecas
É importante que sempre utilize nossas bibliotecas oficiais para sua integração. Isso permite cuidar dos dados sensíveis dos seus cliente, cumprir com os padrões de segurança requeridos e estar sempre atualizado.

<br>

> CLIENT_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inclua MercadoPago.js.

MercadoPago.js te permite criar um token de pagamento para enviar os dados dos cartões ao seu backend de forma segura. Pode-se utiliza-lo adicionando o seguinte código ao seu site:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

<br>

> SERVER_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instale o SDK do Mercado Pago

Instale o [SDKs oficial](https://www.mercadopago.com.br/developers/pt/plugins_sdks#bookmark_sdk_title) para simplificar sua integração com nossas APIs.

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

Ao finalizar sua integração, é necessário que tenha em conta todos os [requisitos para ir a produção](https://www.mercadopago.com.br/developers/pt/guides/payments/api/goto-production/).
Com esse processo, garante-se a segurança dos dados dos seus cliente, o cumprimento das normas e disposições legais de cada país e ofereça a melhor experiência de compra para suas vendas.

Quando sua integração estiver pronta e quiser começar a receber pagamentos, complete o formulário para ir a produção na [seção de Credenciais](https://www.mercadopago.com/mlb/account/credentials).

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Integrar API do Mercado Pago com cartão
>
> Construa e configure sua própria experiência de pagamentos.
>
> [Integrar API do Mercado Pago com cartão](https://www.mercadopago.com.br/developers/pt/guides/payments/api/receiving-payment-by-card/)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Referências de API
>
> Encontre toda a informação necessária para interagir com nossas APIs.
>
> [Referências de API](https://www.mercadopago.com.br/developers/pt/reference/)