# Prestashop - Mercado Pago Modulo (v1.6.x to 1.7.x)

* [Requisitos](#Requirements)
* [Funcionalidades](#Features)
* [Instalação](#Installation)
* [Configurar pagamento transparente e redirect](#Configure-Credit-Card-and-Ticket-Standard)
* [Configurar Mercado Envios](#Configure-Mercado-Envios)
* [Suporte](#Support)

<a name="Requirements"></a>
## Requisitos: ##

**Prestashop Versão**
* Prestashop 1.6.x - 1.7.x

**Ambiente**
* LAMP (Linux, Apache, MySQL, e PHP)
* LNMP stack

**Sistema Operacional**
* Linux x 86
* x86-64

**Web Server**
* Apache 2.x
* Nginx 1.7.x

**Versão PHP**
* PHP 5.6
* PHP 5.5
* PHP 5.4

**Versão MySQL**
* MySQL 5.6 (Oracle ou Percona)

**Dependências**
* PDO_MySQL
* simplexml
* mcrypt
* hash
* GD
* DOM
* iconv
* curl
* SOAP (for Webservices API)

**Configurações adicionais**
* safe_mode off
* memory_limit maior que 256MB (512MB é o recomendado)

**SSL**
* Isso é obrigatório para ir para produção e utilizar nosso checkout transparente.
* Durante os testes você pode utilizar as credenciais de SandBox sem a necessidade de https.


<a name="Features"></a>
## Funcionalidades: ##

O módulo do Mercado Pago para Prestashop esta integrado com as funcionalidades a seguir:

* [Checkout Básico(Redirect)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * Split pagamentos (2 cartões)
    * [Mercado Envios](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * [Devolução de pagamentos](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/refund-cancel#refund)

* Pagamento transparente
    * [Pagamento com cartão de crédito](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * [One Click Pay](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Outros meios de pagamentos](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)
    * [Devolução de pagamentos](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/refund-cancel#refund)

* Outras funcionalidades
    * Página de sucesso customizável
    * Calculadora de parcelas
    * Calculadora de mercado envios

<a name="Installation"></a>
## Instalação: ##

Esse processo mostra como realizar a instalação via Marketplace:

**Instalação via Marketplace**

1. Ir em **[Prestashop Marketplace](https://addons.prestashop.com/en/payment-card-wallet/23962-mercado-pago.html/)** e clique no botão registrar para Download:
2. Depois do seu registro você pode fazer o download.
![Download](../../images/plugins/modules/prestashop/download.gif)

3. Agora acesse seu admin e se direcione a Modulos e Serviços.
![Instalação](../../images/plugins/modules/prestashop/installation.gif)

4. Muito bem! O módulo do Mercado Pago foi instalado com sucesso.
![Configuração](../../images/plugins/modules/prestashop/installation_success.png)

<a name="Configure-Credit-Card-and-Ticket-Standard"></a>
## Configurar cartão de crédito, boleto e redirect: ##

Esse processo deve de auxiliar a configuração do módulo para pagamentos com checkout transparente e redirecionado:

1. Após a instalação do módulo, se direcione para  **Mercado Pago > Configurar**, agora você precisa obeter suas credenciais.

2. Para obter suas credenciais você deve ir **Mercado Pago - Custom Checkout**, você deverá visualizar os campos **Public Key** e **Access Token**. Acesse acesse o link do seu país:

* Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
* Brasil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
* Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
* Colômbia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
* Uruguai: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
* Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)

> Existem dois tipos de credenciais:
> * Modo Sandbox: Essa credencial é utilizada para testes.
> * Modo Produção: Essa credencial é utilizada para compras em produção, para isso user a opção de "Eu quero ir para produção".

3. Agora você pode preencher o **client id** e **client secret**, clique no botão **Login**:
![Login](../../images/plugins/modules/prestashop/credentials_1.gif)

4. Habilite o módulo customizado, preencha o **access token**, **public key** e selecione as opçãos de pagamentos:
![Pagamento transparente](../../images/plugins/modules/prestashop/credentials_2.gif)

5. Para o Checkout Standard,você precisa apenas habilitar a opção **Configurações - Mercado Pago Standard**:
![Enable Standard](../../images/plugins/modules/prestashop/standard.gif)
 
6. Muito bem! Você habilitou pagamentos transparentes e redirect!
 
<a name="Configure-Mercado-Envios"></a>
## Configurar Mercado Envios: ##

Os passos a seguir vai mostrar como habilitar o Mercado Envios.
> 	IMPORTANTE: O Mercado Envios funciona com o Mercado Pago Redirect e os outros meios de pagamentos serão desabilitados.

1. Primeiro, você precisa habilitar o Mercado Envios na sua conta.

	Você pode acessar o link a seguir de acordo com o seu país:

	* Argentina: http://shipping.mercadopago.com.ar/optin/doOptin
	* Brasil: http://shipping.mercadopago.com.br/optin/doOptin
	* Mexico: http://shipping.mercadopago.com.mx/optin/doOptin

> 	IMPORTANTE: Sua conta do Mercado Pago precisa ser do tipo **Vendedor** e os produtos precisam ter as dimensões corretas.

2. Para habilitar no módulo, você precisa apenas ativar ele na opção **Mercado Envios** e clicar em **Salvar**:
![Habilitar Mercado Envios](../../images/plugins/modules/prestashop/mercadoenvios_settings.gif)

3. Muito bem! Agora você pode oferecer o Mercado Envios como meio de transportes para seus clientes!

> 	Youtube:
https://youtu.be/rtXNkdaqUJ8 

> 	Facebook:
https://www.facebook.com/groups/modulos.mercadopago/

<a name="FAQ"></a>
## FAQ: ##

Em construção...


<a name="Support"></a>
## Suporte: ##

> IMPORTANTE: Mantenha a o seu módulo atualizado, e sempre utilize a instalação via Admin ao invés de copiar e colar as pastas.

Se você tiver alguma dúvida ou problemas de instalação. Envie um email para modulos@mercadopago.com com as seguintes informações:

* Email da sua conta do Mercado Pago.
* Detalhes do seu erros, envie em anexo o arquivo de log que fica dentro da pasta prestashop/modulos/mercadopago/logs/mercadopago.log.
* Evidências pode ajudar( Tela do erro, passo a passo, vídeo, etc.).
* Versão do Prestashop.
* Versão do módulo que esta utilizando.

E não se preocupe que vamos responder o mais rápido possível.
