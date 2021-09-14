# Pré-requisitos para começar

## Glossário

Tenha em mãos os principais termos técnicos do fluxo da integração com o Checkout Pro antes de conferir os pré-requisitos:

| Termo | Descrição |
| --- | --- |
| _Preferência (preference)_ | São as **informações do produto ou serviço que você quer oferecer.** Entre os atributos mais importantes de uma preferência estão a descrição, o valor e os itens. Ao gerá-la, você obtém uma URL para iniciar o fluxo de pagamento. |
| _Credenciais (credentials)_ | Suas credenciais são as **chaves únicas que te fornecemos para que você possa configurar as suas integrações.**<br/>Existem dois tipos de credenciais: **Public key** e **Access Token**. <br/><br/>Public key é a chave pública da aplicação para saber os meios de pagamento e criptografar os dados do cartão, por exemplo. Você deve usá-la somente para as suas integrações.<br/>Access token é a chave privada da aplicação para gerar pagamentos. Você deve usá-la somente para suas integrações.<br/><br/>Para encontrá-las, confira a [seção de Credenciais]([FAKER][CREDENTIALS][URL]) no seu Painel de desenvolvedor e selecione as produtivas.<br/><br/> |
| _Ponto de inicio (init_point)_ | É a **URL obtida na hora de gerar uma preferência** e que dá início ao fluxo de pagamento do Checkout Pro. |
| _Item (item)_ | Faz referência ao produto ou serviço que se quer oferecer. Pode ser um ou uma lista. |
| _Aplicação (application)_ | As aplicações são usadas para processar os pagamentos do vendedor. **Cada aplicação identifica uma integração específica**, pois cada uma possui [credenciais]([FAKER][CREDENTIALS][URL]) próprias. Uma conta do Mercado Pago pode ter diversas aplicações.<br/><br/>Você pode encontrar as informações de cada uma na seção `Credenciais` do painel da sua conta. Ao entrar na seção, uma aplicação será criada automaticamente ou você poderá [criar uma manualmente](https://applications.mercadopago.com) sempre que precisar. |

## Pré-requisitos

Siga os seguintes passos antes de começar a sua integração:

### 1. Acesse uma conta
Para poder começar a integração, é necessário **ter uma conta do Mercado Pago ou do Mercado Livre.**

Você pode [entrar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/previous-requirements) em uma conta já existente ou [criar uma nova conta](https://www.mercadopago[FAKER][URL][DOMAIN]) do zero.

### 2. Instale o SDK do Mercado Pago
**Instale o SDK oficial** do Mercado Pago para simplificar a integração com as nossas APIs.

[[[
```php
===
[Instale o Composer](https://getcomposer.org/download) para usar o SDK.
Em seguida, execute o seguinte código na linha de comandos do seu terminal:
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
Para instalar o SDK no seu projeto [Maven](http://maven.apache.org/install.html), adicione a seguinte dependência ao seu arquivo <code>pom.xml</code> e execute o código <code>maven install</code> na linha de comandos do seu terminal:
===
<dependency>
            <groupId> com.mercadopago </groupId>
            <artifactId> sdk-java </artifactId>
            <version> 1.9.0 </version>
</dependency>
```
```ruby
===
O SDK do Mercado Pago está disponível como [gema](https://rubygems.org/gems/mercadopago-sdk). Para instalá-la, você deve executar o seguinte código na linha de comandos do seu terminal:
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
Execute o seguinte código na linha de comandos do seu terminal:
===
nuget install mercadopago-sdk
```
```python
===
O SDK do Mercado Pago está disponível como [pip](https://pypi.org/project/mercadopago/). Para instalá-la, você deve executar o seguinte código na linha de comandos do seu terminal:
===
pip3 install mercadopago
```
]]]

### 3. Obtenha suas credenciais

Credenciais são **chaves únicas que te fornecemos para que você possa configurar as suas integrações**.

Para encontrá-las, veja a [seção de Credenciais]([FAKER][CREDENTIALS][URL]) no seu Painel de desenvolvedor.

> Ainda tem dúvidas sobre? Leia a nossa documentação de [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) para mais informações. 

---

### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Integre com o Checkout Pro
>
> Siga o passo a passo para começar a receber pagamentos no seu site.
>
> [Integre o Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/integration)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Teste a sua integração
>
> Confira se está tudo certo com a sua integração usando usuários de teste.
>
> [Teste a sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/test-integration)
