# Pré-requisitos para começar

Saiba o que é necessário para integrar nossas APIs.

## Obtenha suas credenciais

As credenciais são as **chaves que te oferecemos para que possa configurar sua integração**. Você utilizará uma chave pública e outra chave privada.

* A chave pública, ou Public Key, é utilizada para acessar os recursos que necessita no seu frontend. Com ela você pode coletar os dados dos cartões de crédito e convertê-los em um token representativo que pode ser enviado de forma segura aos seus servidores para criar um pagamento.

* A chave privada, ou Access token, te permite chamar o resto das APIs a partir dos seus servidores. Por exemplo, para processar um pagamento, realizar um reembolso ou armazenar cartões.

Para poder encontrá-las, veja a [seção de Credenciais]([FAKER][CREDENTIALS][URL]).

> Tem dúvidas sobre credenciais? Leia [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) para mais informações. 

## Sempre utilize nossas bibliotecas
Recomendamos que utilize as bibliotecas oficais para sua integração. Isso permite cuidar dos dados sensíveis dos seus cliente, cumprir com os padrões de segurança requeridos e estar sempre atualizado.

<br>

> CLIENT_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inclua MercadoPago.js

----[mlb]----
> INFO
>
> Nova versão MercadoPago.js
>
> Utilize a biblioteca MercadoPago.js V2 para atualizar para a versão mais recente, autogerar a lógica de negócio no seu formulário de pagamentos com cartão e melhorar a compatibilidade com os distintos navegadores.<br><br>[Integrar Checkout Transparente com MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements)
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> INFO
>
> Nova versão MercadoPago.js
>
> Utilize a biblioteca MercadoPago.js V2 para atualizar para a versão mais recente, autogerar a lógica de negócio no seu formulário de pagamentos com cartão e melhorar a compatibilidade com os distintos navegadores.<br><br>[Integrar Checkout API com MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/previous-requirements)
------------

MercadoPago.js te permite gerenciar os dados do cartão para cumprir com os requerimentos de segurança necessários e evitar o envio de dados sensíveis para seus servidores. Para isso, nossa biblioteca gera um token que representa esta informação e te permite operar de forma segura. Pode-se utiliza-lo adicionando o seguinte código ao seu site:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

<br>

> SERVER_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instale o SDK do Mercado Pago

Instale o [SDKs oficial](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/sdks) para simplificar sua integração com nossas APIs.

[[[
```php
===
[Instale Composer](https://getcomposer.org/download) para usar o SDK.

Execute o seguinte código na sua linha de comando:
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
Para instalar o SDK execute o seguinte código via linha de comandos do seu terminal usando [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
Para instalar o SDK no seu projeto [Maven](http://maven.apache.org/install.html) adicione a seguinte dependência no seu arquivo pom.xml e em seguida execute 'maven install'.
===
<dependency>
            <groupId> com.mercadopago </groupId>
            <artifactId> sdk-java </artifactId>
            <version> 1.8.0 </version>
</dependency>
```
```ruby
===
O SDK de Mercado Pago está disponível como [gema](https://rubygems.org/gems/mercadopago-sdk), para instá-la execute o seguinte código na sua linha de comandos:
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Use [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference) para instalar o SDK .NET de Mercado Pago.
------------
----[mla, mlm, mco, mlc, mlu]----
Use [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference) para instalar el SDK .NET de Mercado Pago.
------------
Execute o seguinte comando no seu terminal:
===
nuget install mercadopago-sdk
```
```python
===
O SDK de Mercado Pago está disponível como [pip](https://pypi.org/project/mercadopago/), para instalá-la execute o seguinte código na sua linha de comandos:
===
pip3 install mercadopago
```
]]]

## Conheça nossas Referências de API

Se não pode utilizar nossos SDKs oficiais, tenha disponível toda a informação sobre consultas e respostas de dados para interagir diretamente com nossas APIs em [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments/post).

## Cumpra com os requisitos para entrar em produção

Ao finalizar sua integração, é necessário que tenha em conta todos os [requisitos para entrar em produção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/goto-production).
Com esse processo, garante-se a segurança dos dados dos seus cliente, o cumprimento das normas e disposições legais de cada país e ofereça a melhor experiência de compra para suas vendas.

Quando sua integração estiver pronta e quiser começar a receber pagamentos, complete o formulário para ir a produção na [seção de Credenciais]([FAKER][CREDENTIALS][URL]).

---
### Próximos passos
----[mlb]----
> LEFT_BUTTON_REQUIRED_PT
>
> Integrar Checkout Transparente com cartão
>
> Construa e configure sua própria experiência de pagamentos.
>
> [Integrar Checkout Transparente do Mercado Pago para cartão](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/receiving-payment-by-card)
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> LEFT_BUTTON_REQUIRED_PT
>
> Integrar Checkout API com cartão
>
> Construa e configure sua própria experiência de pagamentos.
>
> [Integrar Checkout API do Mercado Pago para cartão](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/receiving-payment-by-card)
------------

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Referências de API
>
> Encontre toda a informação necessária para interagir com nossas APIs.
>
> [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference)
