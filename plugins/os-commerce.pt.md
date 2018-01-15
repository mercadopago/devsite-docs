# osCommerce - Mercado Pago Module (v2.2 - 2.3)

* [Funcionalidades](#features)
* [Versões disponíveis](#available_versions)
* [Requisitos](#requirements)
* [Instalação](#installation)
* [Configuração](#setup)
* [Suporte](#Support)

<a name="features"></a>
## Funcionalidades: ##

O módulo do Mercado Pago para o OsCommerce esta integrado com as seguintes funcionalidades e soluções de pagamento:

* [Checkout básico (Redirecionado, Iframe ou Lightbox)](https://www.mercadopago.com.br/developers/pt/solutions/payments/basic-checkout/receive-payments/)
    * Pagamento com dois cartões


<a name="available_versions"></a>
## Versões disponíveis: ##

Versão do Plugin | Status | Versões compativéis
-------------- | ------ | -------------------
v2.2 | Deprecated (Old version) | osCommerce 2.2
v2.3 | Stable (Current version) | osCommerce 2.3

<a name="requirements"></a>
## Requisitos: ##

**PHP**

* PHP v4+ (PHP v5+ recommended)
* Required extensions: MySQL, cURL

**Database**

* MySQL v3+ (MySQL v5+ recommended)


<a name="installation"></a>
## Instalação: ##

1. Faça o download do modulo do Mercado Pago:
    * osCommerce 2.2
    * osCommerce 2.3

2. Copie a pasta do modulo na Raiz da sua loja OsCommerce.


<a name="setup"></a>
## Configuração: ##

1. Na pagina de administração da sua loja, va até a opção **Modules > Payment**.

2. Clique em  **Install Module**.

3. Em **Mercado Pago** clique no botão **Install Module**.

4. Escolha o país:

	![Country Selecion](/images/plugins/modules/oscommerce/CountrySelection.png)

5. Selecione os métodos de pagamento que você **não quer aceitar** na sua loja:

	![Payment Methods Selection](/images/plugins/modules/oscommerce/PaymentMethodsSelection.png)

6. Seleciona a categoria da loja:

	![Category Selection](/images/plugins/modules/oscommerce/CategorySelection.png)

7. Na próxima tela, você verá que o **MercadoPago** está listando nos métodos de pagamento. Agora, clique em **Edit** localizado na barra direita.

	![Payment Method List](/images/plugins/modules/oscommerce/PaymentMethodList.png)

8. Agora, é muito importante você configurar o seu **CLIENT_ID** e **CLIENT_SECRET**.

	Obtenha o seu CLIENT_ID e CLIENT_SECRET de acordo com seu país:

  * Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
  * Brasil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
  * Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
  * Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
  * Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
  * Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
  * Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
  * Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)


	Depois de efetuar a instalação e configuração básica, outras opções estão disponíveis para serem configuradas:

	- **Sandbox:** Por padrão o Sandbox vem configurado.

	- **Kind of Checkout:** Agora você pode escolher qual tipo de checkout se adaptou melhor com o seu design de front-end, recomendamos o checkout iframe.

	- **Instant Payment Notification (IPN) URL:** Você pode verificar sua URL de IPN, onde você receberá notificações de atualizações de pagamento.

9. **NÃO ATUALIZE** os campos *Country*, *Exclude Methods*, *Cod Status (fields…)*. Caso queira alterar esses campos, desinstale o módulo e instale novamente o módulo.

	![Do Not Touch](/images/plugins/modules/oscommerce/DoNotTouch.png)

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
* Venezuela:
	* **VEF** (Venezuelan Bolivar)

<a name="Suporte"></a>
## Suporte: ##

Caso tenha alguma dúvida, problema ou erro temos um canal de atendimento. 
Envie um email para modulos@mercadopago.com com as seguintes informações:

* Email da sua conta Mercado Pago.
* Detalhes sobre a sua duvida, problema ou erro.
* Arquivos que possa ajudar no entendimento (Print-Screen, Video, Arquivos de Log, etc).
* Versão do OsCommerce.
* Versão do Modulo, caso esteja utilizando.

Não se preocupe... Iremos ajuda-lo o mais rápido possível.