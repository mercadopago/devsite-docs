# Prestashop

* [Requisitos](#Requirements)
* [Funcionalidades](#Features)
* [Instalación](#Installation)
* [Configurar el pago transparente y redirect](#Configure-Credit-Card-and-Ticket-Standard)
* [Configurar Mercado Envíos](#Configure-Mercado-Envíos)
* [Soporte](#Support)

El módulo de Mercado Pago para Prestashop esta integrado con las siguientes funcionalidades:


|                                	| Checkout Básico 	| Checkout Personalizado 	|
|--------------------------------	|-----------------	|------------------------	|
| Pagos con tarjeta              	| ✔               	| ✔                      	|
| Pagos con otros medios         	|                 	| ✔                      	|
| Pagos con dos tarjetas         	| ✔               	| ✔                      	|
| Tarjetas guardadas             	|                 	| ✔                      	|
| Suscripciones                  	| ✔               	|                        	|
| Mercado Envíos                  	| ✔               	|                        	|
| Devolución de Pagos            	| ✔               	| ✔                      	|
| CRON (Actualización de Pedido) 	|                 	| ✔                      	|
| Pagina de éxito personalizable 	|                 	| ✔                      	|
| Calculadora de Cuotas          	| ✔               	| ✔                      	|
| Calculadora de Mercado Envíos     | ✔               	| ✔                      	|


<a name="Requirements"></a>
## Requisitos: ##

|                            | Detalle                                                                                        |
|----------------------------|------------------------------------------------------------------------------------------------|
| Versiones Soportadas       | Prestashop 1.6.x - 1.7.x                                                                       |
| Ambiente                   | LAMP (Linux, Apache, MySQL, and PHP) ó LNMP stack                                              |
| Sitema                     | Linux x86, Windows x86-64                                                                      |
| Servidor Web               | Apache 2.x,  Nginx 1.7.x                                                                       |
| Version PHP                | PHP 5.6, 5.5 y 5.4                                                                             |
| Base de datos              | MySQL 5.6 (Oracle o Percona)                                                                  |
| Dependencia de extensiones | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API)           |
| Configuración adicionales  | safe_mode off * memory_limite mayor que 256MB (512MB recomendado)                              |
| SSL                        | Es un requisito que tenga un certificado SSL, Durante las pruebas en modo de Sandbox podras usar HTTP.|


<a name="Installation"></a>
## Instalación: ##

Este proceso muestra cómo realizar la instalación vía Marketplace:

**Instalación vía Marketplace**

1. Ir a **[Prestashop Marketplace](https://addons.prestashop.com/en/payment-card-wallet/23962-mercado-pago.html/)** y haga clic en el botón de registro para descargar:
2. Después de su registro usted puede descargar.
![Download](/images/prestashop-download.gif)

3. Ahora acceda a su administrador y se dirige a Modulos y Servicios.
![Instalación](/images/prestashop-installation.gif)

4. ¡Muy bien! El módulo de Mercado Pago fue instalado con éxito.
![Configuración](/images/prestashop-installation_success.png)

<a name="Configure-Credit-Card-and-Ticket-Standard"></a>
## Configurar tarjeta de crédito, ticket y redirect: ##

Este proceso debe ayudar a configurar el módulo para pagos con checkout transparente y redirect:

1. Después de la instalación del módulo, se dirige hacia  **Mercado Pago > Configurar**, ahora usted necesita obeter sus credenciales.

2. Para obtener sus credenciales usted debe ir **Mercado Pago - Custom Checkout**, debe ver los campos **Public Key** e **Access Token**. [Obtén tus credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic)

> Hay dos tipos de credenciales:
> * Modo Sandbox: Esta credencial se utiliza para pruebas.
> * Modo Producción: Esta credencial se utiliza para compras en producción, para ello user la opción de "Quiero ir a la producción".

3. Ahora usted puede llenar el **client id** y **client secret**, haga clic en el botón **Login**:
![Login](/images/prestashop-credentials_1.gif)

4. Habilite el módulo personalizado, rellene el **access token**, **public key** y seleccione las opciones de pago:
![Pagos transparente](/images/prestashop-credentials_2.gif)

5. Para el Checkout Standard, sólo tiene que habilitar la opción **Configuración - Mercado Pago Standard**:
![Habilitar Standard](/images/prestashop-standard.gif)

6. ¡Muy bien! Usted ha habilitado los pagos transparentes y redirect!

<a name="Configure-Mercado-Envíos"></a>
## Configurar Mercado Envíos: ##

Los pasos siguientes mostrará cómo habilitar Mercado Envíos.
> IMPORTANTE: Mercado Envíos funciona con Mercado Pago Redirect y los otros medios de pago serán deshabilitados.

1. En primer lugar, usted necesita [habilitar Mercado Envíos en su cuenta](http://shipping.mercadopago.com.ar/optin/doOptin).

> IMPORTANTE: Su cuenta de Mercado Pago necesita ser del tipo **Vendedor** y los productos necesitan tener las dimensiones correctas.

2. Para habilitar en el módulo, sólo tiene que activarlo en la opción **Mercado Envíos** y hacer clic en **Guardar**:
![Habilitar Mercado Envíos](/images/prestashop-mercadoenvios_settings.gif)

3. Muy bien! Ahora usted puede ofrecer Mercado Envíos como medio de transporte para sus clientes!

<a name="Support"></a>
## Soporte: ##

> IMPORTANTE: Mantenga su módulo actualizado, y siempre utilice la instalación vía Admin en lugar de copiar y pegar las carpetas.
