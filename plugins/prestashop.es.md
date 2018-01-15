# Prestashop - Mercado Pago Modulo (v1.6.x to 1.7.x)

* [Requisitos](#Requirements)
* [Funcionalidades](#Features)
* [Instalación](#Installation)
* [Configurar el pago transparente y redirect](#Configure-Credit-Card-and-Ticket-Standard)
* [Configurar Mercado de Envios](#Configure-Mercado-Envios)
* [Soporte](#Support)

<a name="Requirements"></a>
## Requisitos: ##

**Prestashop Version**
* Prestashop 1.6.x - 1.7.x

**Ambiente**
* LAMP (Linux, Apache, MySQL, e PHP)
* LNMP stack

**Sistema operativo**
* Linux x 86
* x86-64

**Web Server**
* Apache 2.x
* Nginx 1.7.x

**Version PHP**
* PHP 5.6
* PHP 5.5
* PHP 5.4

**Version MySQL**
* MySQL 5.6 (Oracle ou Percona)

**Dependencias**
* PDO_MySQL
* simplexml
* mcrypt
* hash
* GD
* DOM
* iconv
* curl
* SOAP (for Webservices API)

**Configuración adicional**
* safe_mode off
* memory_limit maior que 256MB (512MB é o recomendado)

**SSL**
* Esto es obligatorio para ir a la producción y utilizar nuestro checkout transparente.
* Durante las pruebas puede utilizar las credenciales de SandBox sin necesidad de https.


<a name="Features"></a>
## Funcionalidades: ##

El módulo del Mercado Pago para Prestashop esta integrado con las siguientes funcionalidades:

* [Checkout Básico(Redirect)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * Split pagamentos (2 cartões)
    * [Mercado Envios](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * [Devolución de pagos](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/refund-cancel#refund)

* Pago transparente
    * [Pago con tarjeta de crédito](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
    * [One Click Pay](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Otros medios de pago](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)
    * [Devolución de pagos](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/refund-cancel#refund)

* Otras características
    * Página de éxito adaptable
    * Calculadora de cuotas
    * Calculadora de mercado envíos

<a name="Installation"></a>
## Instalação: ##

Este proceso muestra cómo realizar la instalación vía Marketplace:

**Instalação via Marketplace**

1. Ir em **[Prestashop Marketplace](https://addons.prestashop.com/en/payment-card-wallet/23962-mercado-pago.html/)** y haga clic en el botón de registro para descargar:
2. Después de su registro usted puede descargar.
![Download](../../images/prestashop-download.gif)

3. Ahora acceda a su administrador y se dirige a Modulos y Servicios.
![Instalación](../../images/prestashop-installation.gif)

4. ¡Muy bien! El módulo de Mercado Pago fue instalado con éxito.
![Configuración](../../images/prestashop-installation_success.png)

<a name="Configure-Credit-Card-and-Ticket-Standard"></a>
## Configurar tarjeta de crédito, ticket y redirect: ##

Este proceso debe ayudar a configurar el módulo para pagos con checkout transparente y redirect:

1. Después de la instalación del módulo, se dirige hacia  **Mercado Pago > Configurar**, ahora usted necesita obeter sus credenciales.

2. Para obtener sus credenciales usted debe ir **Mercado Pago - Custom Checkout**, debe ver los campos **Public Key** e **Access Token**. Acceda al enlace de su país:

* Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
* Brasil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
* Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
* Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
* Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)

> Hay dos tipos de credenciales:
> * Modo Sandbox: Esta credencial se utiliza para pruebas.
> * Modo Producción: Esta credencial se utiliza para compras en producción, para ello user la opción de "Quiero ir a la producción".

3. Ahora usted puede llenar el **client id** y **client secret**, haga clic en el botón **Login**:
![Login](../../images/prestashop-credentials_1.gif)

4. Habilite el módulo personalizado, rellene el **access token**, **public key** y seleccione las opciones de pago:
![Pagos transparente](../../images/prestashop-credentials_2.gif)

5. Para el Checkout Standard, sólo tiene que habilitar la opción **Configuración - Mercado Pago Standard**:
![Habilitar Standard](../../images/prestashop-standard.gif)

6. ¡Muy bien! Usted ha habilitado los pagos transparentes y redirect!

<a name="Configure-Mercado-Envios"></a>
## Configurar Mercado Envíos: ##

Los pasos siguientes mostrará cómo habilitar el Mercado de envíos.
> IMPORTANTE: El Mercado de los Envios funciona con el Mercado Pago Redirect y los otros medios de pago serán deshabilitados.

1. Primeiro, você precisa habilitar o Mercado Envios na sua conta.

	En primer lugar, usted necesita habilitar el Mercado de envíos en su cuenta.

	* Argentina: http://shipping.mercadopago.com.ar/optin/doOptin
	* Brasil: http://shipping.mercadopago.com.br/optin/doOptin
	* Mexico: http://shipping.mercadopago.com.mx/optin/doOptin

> IMPORTANTE: Su cuenta del Mercado Pago necesita ser del tipo **Vendedor** y los productos necesitan tener las dimensiones correctas.

2. Para habilitar en el módulo, sólo tiene que activarlo en la opción **Mercado de envíos** y hacer clic en **Guardar**:
![Habilitar Mercado Envios](../../images/prestashop-mercadoenvios_settings.gif)

3. Muy bien! Ahora usted puede ofrecer el Mercado Envíos como medio de transporte para sus clientes!

> 	Youtube:
https://youtu.be/rtXNkdaqUJ8

<a name="Support"></a>
## Soporte: ##

> IMPORTANTE: Mantenga su módulo actualizado, y siempre utilice la instalación vía Admin en lugar de copiar y pegar las carpetas.

Si tiene alguna duda o problemas de instalación. Envíe un correo electrónico a modulos@mercadopago.com con la siguiente información:

* Email de su cuenta de Mercado Pago.
* Detalles de sus errores, envíe adjunto el archivo de registro que queda dentro de la carpeta prestashop / modulos / mercadopago / logs / mercadopago.log.
* Evidencias puede ayudar (pantalla de error, paso a paso, vídeo, etc.).
* Versión de Prestashop.
* Versión del módulo que utiliza.
