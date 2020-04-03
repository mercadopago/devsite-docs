---
sites_supported:
  - mlb
  - mla
  - mco
  - mlu
  - mlm
  - mlc
---

# Pré-requisitos para começar


## Glossário

Sabemos que alguns termos são novos. Antes de começar, os deixamos à mão.

Termo | Descrição
------------ | -------------
_Preferência (preference)_ | São as **informações do produto ou serviço que você quer oferecer.** Entre os atributos mais importantes de uma preferência são definidos: a descrição, o valor e os itens. Ao gerá-lo, você obtém uma URL para iniciar o fluxo de pagamento.
_Credenciais (credentials)_ | Suas credenciais são as **chaves que te informamos para que você possa configurar suas integrações.**<br/>Existem dois tipos:<br/><br/>**Public key**. Chave pública da aplicação para saber, por exemplo, os meios de pagamento e criptografar os dados do cartão. Você deve usá-las somente para as suas integrações.<br/>**Access token**. Chave privada da aplicação para gerar pagamentos. Você deve usá-la somente para suas integrações.<br/><br/>Para poder encontrá-las, confira suas <a href="[FAKER][CREDENTIALS][URL]" target="_blank"> credenciais </a> e selecione as produtivas.<br/><br/>
_Ponto de inicio (init_point)_ | É a **URL obtida na hora de gerar a preferência**  e que dá início ao fluxo de pagamento do Checkout Mercado Pago.
_Ítem (ítem)_ | Faz referência ao produto ou serviço que se quer oferecer. Pode ser um ou uma lista.
_Aplicação (application)_ | As aplicações são usadas para processar os pagamentos do vendedor. **Cada aplicação identifica uma integração específica**, pois cada uma possui suas próprias<a href="[FAKER][CREDENTIALS][URL]" target="_blank"> credenciais </a>. Uma conta do Mercado Pago pode ter diversas aplicações.<br/><br/>Você pode encontrar as informações de cada uma em credenciais. Ao entrar, um será criado automaticamente ou você poderá <a href="https://applications.mercadopago.com/" target="_blank"> criar uma aplicação</a> sempre que precisar.

## Pré-requisitos

Para continuar, confira os pré-requisitos:

### 1. Acesso à conta do Mercado Pago ou do Mercado Livre
Para poder começar a integração, é necessário **contar com uma conta do Mercado Pago ou do Mercado Livre.**
----[mla]----
Caso você ainda não tenha uma, pode <a href="https://www.mercadopago.com.ar/" target="_blank"> criar uma conta do Mercado Pago</a> quando quiser.
------------
----[mlm]----
Caso você ainda não tenha uma, pode <a href="https://www.mercadopago.com.mx/" target="_blank"> criar uma conta do Mercado Pago</a> quando quiser.
------------
----[mlu]----
Caso você ainda não tenha uma, pode <a href="https://www.mercadopago.com.uy/" target="_blank"> criar uma conta do Mercado Pago</a> quando quiser.
------------
----[mco]----
Caso você ainda não tenha uma, pode <a href="https://www.mercadopago.com.co/" target="_blank"> criar uma conta do Mercado Pago</a> quando quiser.
------------
----[mlc]----
Caso você ainda não tenha uma, pode <a href="https://www.mercadopago.cl/" target="_blank"> criar uma conta do Mercado Pago</a> quando quiser.
------------
----[mlb]----
Caso você ainda não tenha uma, pode <a href="https://www.mercadopago.com.br/" target="_blank"> criar uma conta do Mercado Pago</a> quando quiser.
------------

### 2.  Instalação do SDK do Mercado Pago
**Instale o SDK oficial** para simplificar sua integração com as nossas APIs.

[[[
```php
===
<a href="https://getcomposer.org/download" target="_blank"> Instale o Composer </a> para usar o SDK.
Em seguida, execute o seguinte código na linha de comandos:
===
php composer.phar require "mercadopago/dx-php:dev-master"
```
```node
===
Para instalar o SDK, você deve executar o seguinte código na linha de comandos do seu terminal usando <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a>:
===
npm install mercadopago
```
```java
===
Para instalar o SDK no seu projeto<a href="http://maven.apache.org/install.html" target="_blank"> Maven </a> adicione a seguinte dependência no seu arquivo pom.xml e execute o 'maven install'.
===
<dependency>
            <groupId> com.mercadopago </groupId>
            <artifactId> dx-java </artifactId>
            <version> 1.0.33 </version>
</dependency>
```
```ruby
===
O SDK do Mercado Pago está disponível como <a href="https://rubygems.org/gems/mercadopago-sdk" target="_blank"> gema</a>, para instalá-la, você deve executar o seguinte código na linha de comandos:
===
gem install mercadopago-sdk
```
```csharp
===
----[mla, mco, mlu, mlc, mlm]----
Use o  <a href="https://docs.microsoft.com/es-es/nuget/install-nuget-client-tools" target="_blank"> NuGet</a> para instalar o SDK .NET do Mercado Pago.
------------
----[mlb]----
Use o  <a href="https://docs.microsoft.com/pt-pt/nuget/install-nuget-client-tools" target="_blank"> NuGet</a> para instalar o SDK .NET do Mercado Pago.
------------
Para isso, execute o seguinte comando no console do NuGet Package Manager:
===
PM> Install-Package mercadopago-sdk -Version 1.0.57
```
]]]

> NOTE
>
> Nota
>
> Esta documentação é referente à nova versão do Checkout Mercado Pago. **Para ver a versão anterior**, confira a [sessão de Checkout Mercado Pago antiga](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/v1/introduction/).

---

### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Integre o Checkout Mercado Pago
>
> Siga o passo a passo para começar a receber pagamentos no seu site.
>
> [Integre o Checkout Mercado Pago](http://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/integration/)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Teste a sua integração
>
> Confira se está tudo em ordem na sua integração com os usuários de teste.
>
> [Teste a sua integração](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration/)
