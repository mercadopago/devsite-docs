# CHECKOUT PRO

# Introdução

Checkout Pro is a solution that allows yours customers to make purchases through the Mercado Pago web form. When paying using Checkout Pro, the buyer is directed to a Mercado Pago page where he will complete the transaction safely and quickly and be able to pay with the main payment methods currently available.

Checkout Pro accepts payments from users registered in Mercado Pago, or guest users, however, some facilities are only available to users who have a Mercado Pago account, such as: saving card details for future purchases, paying with two cards and use the account balance to complete the payment.

In this integration guide, you will find all the necessary steps to integrate, configure and test Mercado Pago Checkout Pro on your website.

>>>> NEXT STEPS CARD

>>

>>>> Prerequisites

>>

>>>> Check the requirements needed to integrate Checkout Pro on your website.

# Prerequisites

To integrate Checkout Pro, it is important that all the prerequisites below are met.

| Prerequisites | Description |
|--- |--- |
| Mercado Pago seller account |To integrate Checkout Pro, you need a seller account on Mercado Pago. If not, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create.|
| SDK Mercado Pago | SDKs are Mercado Pago's official libraries that facilitate the development process in the most used languages ​​on the market. Check [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/sdks) for more information. |
| Credentials | Credentials are unique keys that we provide for you to configure your integrations. You will need a pair of test credentials to test the integration and a pair of production credentials to receive actual payments. Check [Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials) for more information. |
| SSL Certificate | Certificate that allows safe browsing and protection of user data during information transfers. |

>>>> NEXT STEPS CARD

>>

>>>> Integration setup

>>

>>>> Learn about the steps needed to integrate Checkout Pro on your website.



# Integration setup

## Create preferences

Preferences are sets of information about a product and/or service that allow you to define the name, payment method and other attributes necessary to obtain the URL to start the payment flow at checkout.

> WARNING
>
> Important
>
> Remember that you need to install the Mercado Pago SDK before creating a preference, so make sure that the installation of the Mercado Pago SDKs has already been completed. Check [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/sdks) for instructions.

To create a preference via API, use the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) filling in the necessary attributes to execute the request or, if you prefer, check [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/sdks) to create preferences using our libraries.

When creating the preference you will have access to a field called `id` which will return an identification number of this preference. **This information is mandatory to add Checkout Pro to your website**.

## Add checkout

Once you have created the preference in your backend, you will need to install the Mercado Pago frontend SDK to your project to add the Checkout Pro button.

Installation is done in two steps: adding the Mercado Pago SDK to the project with your configured credentials and starting the checkout from the previously generated preference ID.

1. To include the Mercado Pago.js SDK V2, add the code below to the project's HTML.

<!DOCTYPE html>
<html>
<head>
	<title>Pay Modal Version</title>
</head>

<body>
	<div class="cho-container"></div>
	//Add the MercadoPago SDK.js/v2
		<script src="https://sdk.mercadopago.com/js/v2"></script>
		
2. When you finish adding the Mercado Pago.js SDK V2, configure the SDK credentials and initialize your checkout with the ID of the previously created preference and the identifier of the element where the payment button should be displayed, as shown in the example below.

<script>
			// Add your Mercado Pago account credentials along with the SDK
			const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
			    locale: 'pt-BR'
			});
			const checkout = mp.checkout({
			   preference: {
			       id: 'YOUR_PREFERENCE_ID' // Enter the preference ID
			   },
			   render: {
			       container: '.cho-container', // CSS class to render the payment button
			       label: 'Pagar', // Change payment button text (optional)
			    }
			});
	</script>	 	 
	
</body>
</html>

In the example above, a payment button will be rendered and will be responsible for opening Checkout Pro. If you want to customize the way the checkout opens, see the Opening scheme section

> WARNING
>
> Important
>
> To test the checkout, you must access it through another browser or log out of your Mercado Pago account. This is because being logged into the same account responsible for creating the payment form makes it impossible to test the payment flow and guarantee its operation.



# Checkout customization

## Preferences

### Term of preference

Term is the validity period defined for a given payment preference. When defining the validity of the preference, you choose a date for it to start to be valid and the expiration date, in this way, when the chosen period expires, the preference will lose its validity and cannot be used.

1. Send a POST with the parameters `expires`, `expiration_date_from` and `expiration_date_to` to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).
2. Ind "expires", enter `true`.
3. In "expiration_date_from", enter the start date and time. The value must follow the ISO 8601 format: yyyy-MM-dd'T'HH:mm:sszas.
4. In "expiration_date_to", enter the expiration date and time. The value must follow the ISO 8601 format: yyyy-MM-dd'T'HH:mm:sszas
5. Execute the request.


### Payment options

With the preferences created, it is possible to customize the Checkout Pro integration and determine the payment methods that will be accepted.

Through a GET on the endpoint [/v1/payment_methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payment_methods/_payment_methods/get), you can access the list of each of the available options and with it, define whether you want, for example, to exclude a payment method or define a maximum number of installments for a purchase.

To define the payment methods that will be offered, send the `payment_methods` attribute informing the payment method that will be offered to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) and execute the request or, if you prefer, check [SDKs](https://www.mercadopago.com.br/developers/en/guides/sdks) and perform the integration using our libraries.

### Binary mode

Binary mode is a function that allows automatic approval or rejection of a payment. This means that when activated, payments made will be automatically approved or declined without the need for action on the part of the seller.

If disabled, payment may be pending (if any action is required from the buyer) or in process (if manual review is required).

To enable binary mode, send the `binary_mode` parameter to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) with the value `true` and execute the request.

### Invoice description

Invoice description is a setting that allows you to define the name of the establishment that will be displayed on the buyer's invoice. This allows for business identification and avoids unnecessary disputes.

1. Send a POST with the `statement_descriptor` parameter to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).
2. In `statement_descriptor`, enter the name of the establishment.
3. Execute the request.

### Shipping cost

Shipping value, or freight, is the value charged for shipping the products sold. If this amount is already set, it is possible to display it separately from the total purchase amount at the time of payment.

1. Send a POST with the `cost` and `mode` attributes of the `shipments` parameter to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).
2. In `cost`, enter the freight amount.
3. In `mode`, enter `not_specified`.
4. Execute the request in your terminal.

### Boleto expiration

Expiration date is the maximum period defined for making a payment. With Checkout Pro it is possible to change the default expiration date for **payments with boleto** by sending the `date_of_expiration` parameter in the request to create the preference.

In this field, the date set must be between 1 day and 30 days from the date of issue of the payment.

1. Send a POST with the `date_of_expiration` parameter informing the item's expiry date and time to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post). The value must follow the ISO 8601 format (yyyy-MM-dd'T'HH:mm:ssz)
2. Execute the request.

> WARNING
>
> Important
>
> The clearing period is between 1 and 2 working days according to the chosen payment method. For this reason, we recommend setting the expiration date at least 3 days apart to ensure payment is made. In addition, if payment is made after the expiration date, the amount will be refunded to the payer's Mercado Pago account.

## User Interface

### Opening scheme

The opening scheme allows you to define how the checkout will open to the user. By default, checkout pro opens in a **Modal** way, that is, in a window within the website itself, without redirecting to an external page to complete the payment.

However, it is possible to customize the opening and define the **Redirect** model, in which Checkout Pro opens in a new window redirecting the buyer to the payment screen.

To define the **redirect** opening template, insert the HTML code below directly into your project informing the `init_point` of the previously generated preference.

[[[
```html
<!doctype html>
<html>
  <head>
    <title>Pay</title>
  </head>
  <body>
    <a href="YOUR_INIT_POINT"> // Enter the preference ID
    <button>
      Pay with Mercado Pago
    </button>
    
</a>
</body>
</html>
```
]]]

### Payment Button

After integrating Checkout Pro it is possible to define and customize the interface displayed to the user including the input mode to the checkout screen.

By default, Checkout Pro opens with a payment button directing the user to complete the purchase, however, it is also possible to customize a button that allows opening the checkout from any desired element on the website, without necessarily showing the payment button. for the buyer.

In addition, Checkout Pro can also be opened automatically, without any action on the part of the buyer.

## Opening with custom button

Opening with a custom button is done through the `open` method, which allows opening the Checkout from any element of the website, without necessarily showing the payment button to the buyer.

To configure opening with a custom button, insert the HTML below directly into your project.

[[[
```html
<!DOCTYPE html>
<html>
<head>
	<script src="https://sdk.mercadopago.com/js/v2"></script>
</head>
<body>
	<script>
    // Adicione as credenciais do SDK
		const mp = new MercadoPago('PUBLIC_KEY', {
		    locale: 'pt-BR'
		});
		const checkout = mp.checkout({
		  preference: {
		      id: 'YOUR_PREFERENCE_ID' // Indique o ID da preferência
		  }
		});
	</script>	 	 
	<div class="cho-container">
      <li>
      <label for="radio">Botão open-radio: </label>
      <input type="radio" id="checkout-open-radio" onclick="checkout.open()">
       </li>


	</div>
</body>
</html>
```
]]]

## Abertura automática 

A abertura automática é feita através do parâmetro `autoOpen` nas opções de inicialização do checkout. Este parâmetro permitirá a interação dos compradores com um botão ou qualquer outro elemento para abrir o checkout.

Para configurar a abertura automática, insira o código abaixo diretamente no seu projeto.

[[[
```html
<!DOCTYPE html>
<html>
<head>
	<script src="https://sdk.mercadopago.com/js/v2"></script>
</head>
<body>
	<script>
    // Adicione as credenciais do SDK
		const mp = new MercadoPago('PUBLIC_KEY', {
		    locale: 'pt-BR'
		});
		const checkout = mp.checkout({
		  preference: {
		      id: 'YOUR_PREFERENCE_ID' // Indique o ID da preferência
		  },
		  autoOpen: true, // Habilita a abertura automática do Checkout Pro
		});	
	</script>	 	 
	<div class="cho-container"></div>
</body>
</html>
```
]]]

### Redirecionamento 

Ao final do processo de pagamento, é possível redirecionar o comprador para outro ambiente do site através do atributo `back_urls`. Este atributo permite definir as URLs para onde o comprador deverá ser redirecionado ao concluir o pagamento.

Para definir as `back_urls`, envie um POST com o atributo `back_urls` informando as URLs para onde o comprador deverá ser direcionado quando finalizar o pagamento ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post) ou, se preferir, veja [SDKs](https://www.mercadopago.com.br/developers/pt/guides/sdks) para integrar utilizando nossas bibliotecas.

### Estilo de cores

O Checkout Pro permite personalizar o estilo de cores dos elementos de sua interface, customizando a forma como será exibido para o usuário.

Dentre as personalizações de cores é possível customizar a cor do cabeçalho e dos elementos do checkout como botões, campos de dados, bordas, elementos de transição e texto.

> NOTE
>
> Importante
>
> A customização de cores e elementos é válida somente para o esquema de abertura modal. Além disso, os atributos de cores devem estar obrigatoriamente em formato hexadecimal.

Para habilitar a edição do estilo de cores no checkout e em seus elementos, adicione o objeto `theme` e o atributo `elementsColor` com a cor que deseja aplicar nas opções de inicialização do Checkout Pro conforme exemplo abaixo.

[[[
```html
<script>
  mp.checkout({
    preference: {...},
    render: {...},
    theme: {
        elementsColor: ''.
    }
  });
</script>
```
]]]

## Conversão de anúncios

A análise da conversão de anúncios possibilita avaliar a relevância e retorno dos anúncios criados. Por isso, o Checkout Pro oferece integração com as plataformas Facebook Ads e Google Ads permitindo associar os pagamentos às campanhas de negócio.

> NOTE
>
> Importante
>
> Só serão associados os pagamentos aprovados instantaneamente com cartões de crédito e débito, dinheiro no Mercado Pago ou Mercado Créditos.

### Facebook Ads

A integração do Checkout Pro com o Facebook Ads é feita através da API de Preferências adicionando o `pixel_id`  dos seus anúncios ou através dos nossos SDKs.

Para integrar o Checkout Pro com o Facebook Ads via API, siga as etapas abaixo ou, se preferir, veja [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/sdks) para realizar a integração utilizando nossas bibliotecas.

1. Envie um POST com o parâmetro "tracks" com os atributos "type" e "values" ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post).
2. Em "type" insira 'facebook_ad'.
3. Em "value" insira o Pixel ID, que pode ser encontrado no painel de gerenciamento de anúncios do Facebook.
4. Execute a requisição.

Ao concluir a configuração, um evento `Purchase` será associado ao pixel especificado quando um pagamento encaminhado pelo seu anúncio for aprovado.

### Google Ads

A integração do Checkout Pro com o Google Ads é feita através da API de Preferências enviando as informações de identificação da conta do Google Ads no parâmetro `tracks` no body da requisição ou através dos nossos SDKs.

Para integrar o Checkout Pro com o Google Ads via API, siga as etapas abaixo ou, se preferir, veja [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/sdks) para realizar a integração utilizando nossas bibliotecas.

1. Envie o parâmetro `tracks` com os atributos `type`, `conversion_id` e `conversion_label` ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post). 
2. Em `type`, insira `google_ad`.
3.  Em `CONVERSION_ID` e  `CONVERSION_LABEL`, insira o seu ID de conversão e o Rótulo de conversão disponíveis na conta do Google Analytics.
4. Execute a requisição.

Ao concluir a configuração, uma conversão será associada à tag especificada quando um pagamento encaminhado pelo seu anúncio for aprovado.

## Carteira Mercado Pago

A Carteira Mercado Pago é uma forma de pagamento que permite aceitar pagamentos apenas de usuários cadastrados. Ao oferecer esta opção, os usuários poderão pagar com cartão, saldo disponível e Mercado Crédito. 

> WARNING
>
> Importante
>
> Ao adicionar esta opção, não será possível receber pagamentos de usuários não cadastrados no Mercado Pago, assim como não poderá receber pagamentos via dinheiro ou transferência.

Para configurar pagamentos com Carteira Mercado Pago, envie um POST com o parâmetro `purpose` e o valor `wallet_purchase` ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição.


# Teste de integração

## Criar usuário de teste

A etapa de testes permite analisar se a integração foi feita de maneira correta e se os pagamentos estão sendo processados sem erros.

Para realizar o teste de integração, serão necessários usuários de teste que permitirão avaliar o funcionamento do checkout através de fluxos de pagamento em um ambiente idêntico ao da integração.

Abaixo listamos os dois tipos de usuários necessários para realizar o fluxo de pagamento do Checkout Pro.

* **Vendedor: **É a conta que você usa para configurar a aplicação e as credenciais para a cobrança.
* **Comprador:** É a conta que você usa para testar o processo de compra.

Para criar um usuário de teste, envie sua **credencial de produção** _Access token_ ao endpoint [/users/test_user](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/test_user/_users_test_user/post) e execute a requisição.

> NOTE
>
> Importante
>
> É possível gerar até 10 contas de usuários de teste ao mesmo tempo. Por isso, recomendamos salvar o e-mail e senha de cada um. Os usuários de teste perdem a validade após 60 dias sem atividade no Mercado Pago. Tanto o comprador como o vendedor devem ser usuários de teste.

## Processar pagamentos

Existem duas formas de fazer o pagamento: como **usuário convidado**, preenchendo apenas um endereço de e-mail, e como **usuário cadastrado**, acessando uma conta do Mercado Pago com usuário e senha. 

Neste último cenário, cartões previamente salvos e saldo disponível na conta serão habilitados como meios de pagamento.

## Usuário convidado

1. Siga o fluxo de compra e, ao abrir o checkout, insira os dados de **usuário comprador**.
2. Selecione **Cartão** como meio de pagamento e insira os dados de um dos cartões disponíveis em nossa página de [cartões nacionais de teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/local-cards).
3. Informe o e-mail desejado e conclua a compra.

## Usuário cadastrado

1. Siga o fluxo de compra e, ao abrir o checkout, insira os dados de **usuário comprador**.
2. Acesse a conta do Mercado Pago usando o  **usuário de teste comprador**.
3. Selecione **Cartão** como meio de pagamento.
4. Selecione um dos cartões previamente salvos na conta ou insira os dados de um dos [cartões nacionais de teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/local-cards).

Ao finalizar os testes e concluir os pagamentos, o checkout estará instalado e pronto para processar vendas reais. 


# Processamento de vendas

## [Reembolsos e Cancelamentos](https://www.mercadopago.com.br/developers/pt/guides/manage-account/account/cancellations-and-refunds)

# Identificação de integrações

Os membros certificados do [&lt;dev>program](https://www.mercadopago.com.br/developers/pt/developer-program) podem identificar suas integrações do Checkout Pro para ter acesso aos [benefícios do programa](https://www.mercadopago.com.br/developers/pt/developer-program#dev-program-benefits). Para isso, é preciso identificar suas integrações no header da requisição inserindo o seu [ID de Integrador.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/devpanel#bookmark_id_de_integrador) 

Para identificar suas integrações, envie o parâmetro `integrator_id` ao endpoint [/checkout/preferences.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição ou, se preferir, veja SDKs para realizar a integração utilizando nossas bibliotecas.

---


# HOW-TOS


## [Como integrar Checkout Pro em marketplace](https://www.mercadopago.com.br/developers/pt/guides/online-payments/marketplace/integrate-marketplace)

## Como aceitar pagamentos com dois meios de pagamento

Aceitar pagamentos com dois cartões é a funcionalidade que permite aos compradores realizar pagamentos utilizando mais de um cartão de crédito diretamente no checkout.

No momento do pagamento, o usuário deverá informar os dados de cada um dos cartões e a divisão do valor será automática.

1. Acesse sua conta do Mercado Pago.
2. Clique em **Seu negócio > Configurações**. 
3. Em **Preferências de pagamento**, habilite a opção **Receber com dois meios de pagamento diferentes**.
4. Clique em **Confirmar**.

Pronto! Concluindo essas etapas, a opção de pagar utilizando dois meios de pagamento terá sido habilitada.



# Glossário

|Termo|Definição|
|--- |--- |
| Aplicação | As aplicações são usadas para processar os pagamentos do vendedor. Cada aplicação identifica uma integração específica, pois cada uma possui credenciais próprias. Uma conta do Mercado Pago pode ter diversas aplicações. Veja Dashboard para mais informações. |
| Credenciais | As credenciais são senhas únicas com as quais identificamos uma integração na sua conta e servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura. Veja Credenciais para mais informações. |
| Item |Faz referência ao produto ou serviço que se quer oferecer. Pode ser apenas um ou uma lista. |
| Ponto de início (init_point) | É a URL obtida ao gerar uma preferência e que dá início ao fluxo de pagamento do Checkout Pro. |
| Preferência | Preferências são conjuntos de informações sobre um produto e/ou serviço que permitem definir nome, meio de pagamento e outros atributos para obter a URL necessária para iniciar o fluxo de pagamento no checkout. Para mais informações, veja Preferências. |