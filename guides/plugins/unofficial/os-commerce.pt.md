---
  indexable: false
---
# osCommerce - Mercado Pago Module (v2.2 - 2.3)

> WARNING
>
> Oferecemos suporte somente para plugins oficiais
>
> Esta documentação não conta com o suporte oficial do Mercado Pago. Se você quiser fazer alterações, pode [modificar o código aberto no GitHub](https://github.com/mercadopago/devsite-docs/blob/development/guides/plugins/unofficial/os-commerce.pt.md).

## Funcionalidades

O módulo do Mercado Pago para o OsCommerce esta integrado com as seguintes funcionalidades e soluções de pagamento:

* [Checkout básico (Redirecionado, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/pt/solutions/payments/basic-checkout/receive-payments/)
    * Pagamento com dois cartões


## Versões disponíveis

Versão do Plugin | Status | Versões compativéis
-------------- | ------ | -------------------
v2.2 | Deprecated (Old version) | osCommerce 2.2
v2.3 | Stable (Current version) | osCommerce 2.3

## Requisitos

**PHP**

* PHP v4+ (PHP v5+ recommended)
* Required extensions: MySQL, cURL

**Database**

* MySQL v3+ (MySQL v5+ recommended)

## Instalação

1. Faça o download do modulo do Mercado Pago:
    * osCommerce 2.2
    * osCommerce 2.3

2. Copie a pasta do modulo na Raiz da sua loja OsCommerce.

## Configuração

1. Na pagina de administração da sua loja, va até a opção **Modules > Payment**.

2. Clique em  **Install Module**.

3. Em **Mercado Pago** clique no botão **Install Module**.

4. Escolha o país:

	![Country Selecion in Os Commerce](/images/oscommerce-CountrySelection.png)

5. Selecione os métodos de pagamento que você **não quer aceitar** na sua loja:

	![Payment Methods - Os Commerce](/images/oscommerce-PaymentMethodsSelection.png)

6. Seleciona a categoria da loja:

	![Store category selection](/images/oscommerce-CategorySelection.png)

7. Na próxima tela, você verá que o **MercadoPago** está listando nos métodos de pagamento. Agora, clique em **Edit** localizado na barra direita.

	![Payment Method List](/images/oscommerce-PaymentMethodList.png)

8. Agora, é muito importante você configurar o seu **CLIENT_ID** e **CLIENT_SECRET**.

	Obtenha o seu CLIENT_ID e CLIENT_SECRET na [seção Credenciais]([FAKER][CREDENTIALS][URL_BASIC]).

	Depois de efetuar a instalação e configuração básica, outras opções estão disponíveis para serem configuradas:

	- **Sandbox:** Por padrão o Sandbox vem configurado.

	- **Kind of Checkout:** Agora você pode escolher qual tipo de checkout se adaptou melhor com o seu design de front-end, recomendamos o checkout iframe.

	- **Instant Payment Notification (IPN) URL:** Você pode verificar sua URL de IPN, onde você receberá notificações de atualizações de pagamento.

9. **NÃO ATUALIZE** os campos *Country*, *Exclude Methods*, *Cod Status (fields…)*. Caso queira alterar esses campos, desinstale o módulo e instale novamente o módulo.

	![Do not upgrade](/images/oscommerce-DoNotTouch.png)

10. Os campos **Sucess Url** e **Pending url** são gerados automaticamente, caso esteja realizando testes em um ambiente sandbox, não ira funcionar corretamente. Você pode alterar essas URLs para uma de sua escolha.

11. Para finalizar, **salve** as configurações.

***IMPORTANT:*** Esse módulo ira funcionar exclusivamente com as moedas:

* Argentina:
	* **ARS** (Argentine Peso)
* Brazil:
	* **BRL** (Brazilian Real)
* Chile:
	* **CLP** (Chilean Peso)
* Colombia:
	* **COP** (Colombian Peso)
* Mexico:
	* **MXN** (Mexican Peso)
* Peru:
	* **PEN** (Peruvian Sol)

## Suporte

Caso tenha alguma dúvida, problema ou erro temos um canal de atendimento.
Escreva para o nosso [formulário de apoio](/support) com as seguintes informações:

* Email da sua conta Mercado Pago.
* Detalhes sobre a sua duvida, problema ou erro.
* Arquivos que possa ajudar no entendimento (Print-Screen, Video, Arquivos de Log, etc).
* Versão do OsCommerce.
* Versão do Modulo, caso esteja utilizando.
