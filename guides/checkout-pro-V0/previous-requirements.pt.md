# Pré-requisitos para começar

## Glossário

Tenha em mãos os principais termos técnicos do fluxo da integração com o Checkout Pro antes de conferir os pré-requisitos:

| Termo | Descrição |
| --- | --- |
| Preferência (`preference`) | São as **informações do produto ou serviço que você quer oferecer.** Entre os atributos mais importantes de uma preferência estão a descrição, o valor e os itens. Ao gerá-la, você obtém uma URL para iniciar o fluxo de pagamento. |
| Credenciais (`credentials`) | Suas credenciais são as **chaves únicas que fornecemos para que você possa configurar as suas integrações.** Existem dois tipos de credenciais: Public key e Access Token. <br/><br/>**Public key é a chave pública da aplicação** para saber os meios de pagamento e criptografar os dados do cartão, por exemplo. Você deve usá-la somente para as suas integrações.<br/><br/>**Access token é a chave privada da aplicação** para gerar pagamentos. Você deve usá-la somente para suas integrações.<br/><br/>Para encontrá-las, confira a [seção de Credenciais](/developers/pt/docs/checkout-pro/additional-content/credentials) no seu [Dashboard](/developers/pt/docs/checkout-pro/additional-content/your-integrations/introduction) e selecione as produtivas. |
| Ponto de inicio (`init_point`) | É a **URL obtida na hora de gerar uma preferência** e que dá início ao fluxo de pagamento do Checkout Pro. |
| Item (`item`) | Faz referência ao **produto ou serviço que se quer oferecer**. Pode ser um ou uma lista. |
| Aplicação (`application`) | As aplicações são usadas para processar os pagamentos do vendedor. **Cada aplicação identifica uma integração específica**, pois cada uma possui credenciais próprias. Uma conta do Mercado Pago pode ter diversas aplicações.<br/><br/>Você pode encontrar as informações de cada uma na seção de [Credenciais](/developers/pt/docs/checkout-pro/additional-content/credentials) no seu [Dashboard](/developers/pt/docs/checkout-pro/additional-content/your-integrations/introduction). Ao entrar na seção, uma aplicação será criada automaticamente ou você poderá [criar uma manualmente](https://applications.mercadopago.com) sempre que precisar. |

## Pré-requisitos

Siga os seguintes passos antes de começar a sua integração:

### 1. Acesse uma conta

Para começar a integração, é necessário ter uma conta do Mercado Pago ou do Mercado Livre.

----[mlb]----
Você pode [entrar](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEAzWNQU7EMBAE_9Jnk0hIe8BHPmJNnHFisDPWeIIXrfbvKAKOre6qfqDIlo9g343hwfdWcswGh1bIkmgNeYVHbXDo2fgvluWakFJlY-3wj0u08frOSfRSJSqd4UCn7SEVGfC_X3DIPfDdWA8qYfDylflq_4lN4LGbte7neYwxVdZIqzTaZIpSp0Vn-jhXmms-dnqJchiF19vbDU-HRN2CKcVPeNOTnz_j_vCy4wAAAA/user) em uma conta já existente ou criar uma nova conta do zero.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
Você pode [entrar](https://www.mercadolibre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEAzWNQU7EMBAE_9Jnk0hIe8BHPmJNnHFisDPWeIIXrfbvKAKOre6qfqDIlo9g343hwfdWcswGh1bIkmgNeYVHbXDo2fgvluWakFJlY-3wj0u08frOSfRSJSqd4UCn7SEVGfC_X3DIPfDdWA8qYfDylflq_4lN4LGbte7neYwxVdZIqzTaZIpSp0Vn-jhXmms-dnqJchiF19vbDU-HRN2CKcVPeNOTnz_j_vCy4wAAAA/user) em uma conta já existente ou criar uma nova conta do zero.

------------

### 2. Instale o SDK do Mercado Pago

Instale o SDK oficial do Mercado Pago para simplificar a integração com as nossas APIs.

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

### 3. Obtenha suas credenciais

As credenciais são chaves únicas que fornecemos para que você possa configurar as suas integrações.

Para encontrá-las, veja a [seção de Credenciais](/developers/pt/docs/checkout-pro/additional-content/credentials) no seu [Dashboard](/developers/pt/docs/checkout-pro/additional-content/your-integrations/introduction) de desenvolvedor.

> NOTE
>
> Nota
> 
> Ainda tem dúvidas? Leia a nossa documentação de [Credenciais](/developers/pt/docs/checkout-pro/additional-content/credentials) para mais informações. 

---


> NEXT_STEP_CARD_PT
>
> Integrar Checkout Pro
>
> Siga o passo a passo para começar a receber pagamentos em seu site através do Checkout Pro
>
> [Integrar Checkout Pro](/developers/pt/docs/checkout-pro/integrate-checkout-pro)