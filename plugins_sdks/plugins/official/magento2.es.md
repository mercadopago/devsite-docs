# Magento

* [Requisitos](#Requisitos)
* [Instalación](#Instalación)
* [Actualización](#Actualización)
* [Checkout Personalizado](#CustomCheckout)
* [Checkout Básico](#BasicCheckout)
* [Configuración de estado de las notificaciones de Pago](#Configuración-de-estado-de-las-notificaciones-de-Pago)

El módulo de Mercado Pago para Magento ofrece las siguientes funcionalidades:

|                                	| Checkout Básico 	| Checkout Personalizado 	|
|--------------------------------	|-----------------	|------------------------	|
| Pagos con tarjeta              	| ✔               	| ✔                      	|
| Pagos con otros medios         	|                 	| ✔                      	|
| Pagos con dos tarjetas         	| ✔               	| ✔                      	|
| Tarjetas guardadas             	|                 	| ✔                      	|
| Mercado Envíos                  	| ✔               	|                        	|
| Devolución de Pagos            	| ✔               	| ✔                      	|
| CRON (Actualización de Pedido) 	| ✔                	| ✔                      	|
| Pagina de éxito personalizable 	| ✔                	| ✔                      	|
| Calculadora de Cuotas          	| ✔               	| ✔                      	|


<a name="Requisitos"></a>
## Requisitos:

|                            | Detalle                                                                                        |
|----------------------------|------------------------------------------------------------------------------------------------|
| Versions Supported         | 2.x                                                                                            |
| Environment                | LAMP (Linux, Apache, MySQL, and PHP) or LNMP stack                                             |
| Operating System           | Linux x86                                                                                      |
| Memory requirement         | Minimum 2GB of RAM                                                                             |
| Web Server                 | Apache 2.x,  Nginx 1.7.x                                                                       |
| PHP Versions               | 5.6.x, 7.0.2, 7.0.6–7.0.                                                                       |
| DataBase                   | MySQL 5.6, MariaDB and Percona are compatible with Magento because we support MySQL 5.6 APIs.  |
| Extension Dependencies     | curl                                                                                           |
| SSL                        | Es un requisito que tenga un certificado SSL, Durante las pruebas en modo de Sandbox podras usar HTTP.|

<a name="Instalación"></a>
## Instalación: ##

Este proceso explicará la instalación del módulo Mercado Pago vía Composer:

**Instalación vía Composer**

1. Agregue el repositorio a su archivo composer.json de instalación de Magento:

> "repositories": [ { "type": "vcs", "url": "https://github.com/mercadopago/cart-magento2" } ]

2. Ejecute el comando del **composer** para descargar el plugin:

> composer require mercadopago/magento2-plugin

3. Ejecutar el comando para actualizar Magento:

> bin/magento setup:upgrade

4. ¡Listo! El módulo del Mercado Pago fue instalado con éxito.


<a name="CustomCheckout"></a>
## Configuración para procesar Tarjeta de crédito y Tickets: ##

Este proceso explicará cómo configurar el módulo para aceptar pagos con Checkout Personalizado con tarjeta de crédito y tickets:

1. Vaya al menú **Stores > Configuration > Sales > Payment Methods**:

2. Para configurar las credenciales acceda a la opción **Mercado Pago - Custom Checkout**, aparecerá el campo **Public Key** y el campo **Access Token**. Puede obtener las credenciales en la url:

* Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
* Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
* Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
* Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)


> Existen dos tipos de credenciales:
> * Modo Sandbox: Las credenciales de este modo se utilizan para realizar pruebas.
> * Modo Produção: Las credenciales de este modo se utilizan para recibir los pagos en Producción. Para utilizar las credenciales del modo de producción debe completar el formulario de "Quiero ir a producción"

3. Con las credenciales completadas, debe habilitar los métodos de pago. Haga un clic en el botón **Configure** y marque la opción **Enable** como **Yes**. Siga este proceso para **Checkout Custom - Credit Card** y para **Checkout Custom - Ticket** haga un clic en **Save Config** para guardar la configuración.

![MercadoPago Custom Checkout Configuration](https://raw.githubusercontent.com/mercadopago/cart-magento2/master/README.img/mercadopago_custom_checkout_configuration.png)

4. ¡Listo! El Checkout Custom con Tarjeta de crédito y Ticket ha sido configurado y habilitado con éxito!


<a name="BasicCheckout"></a>
## Configurar el Checkout Redirect, Iframe y LightBox:

Este proceso explicará cómo configurar el módulo para aceptar pagos con el Checkout Básico en Redirect, Iframe o Lightbox:

1. Vaya al menú **Stores > Configuration > Sales > Payment Methods**.

2. Para configurar las credenciales acceda a la opción **Mercado Pago - Classic Checkout**, haga un clic en **Configure**. Aparecerá el campo **Client id** y el campo **Client Secret**. Puede obtener las credenciales en la url:

* Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

![Configuration](https://github.com/mercadopago/cart-magento2/blob/master/README.img/mercadopago_global_configuration.png?raw=true)

3. Con las credenciales llenadas, ahora es necesario habilitar el método de pago. Vaya a la opción **Enable** y marque como **Yes**. Aproveche y configure el Tipo de Checkout (**Type Checkout**) y si el usuario debe volver automáticamente a su tienda al finalizar el pago (**Auto Redirect**).

4. ¡Listo! El Checkout Básico ha sido configurado y habilitado con éxito!



<a name="ME"></a>
## Configurar Mercado Envíos: ##

Este proceso explicará cómo configurar el módulo para aceptar Mercado Envios:

1. Es necesario habilitar el Mercado Envios en su cuenta Mercado Pago.

	Puede hacer esto accediendo, de acuerdo con su país, el link:

	* Argentina: http://shipping.mercadopago.com.ar/optin/doOptin
	* Brasil: http://shipping.mercadopago.com.br/optin/doOptin
	* Mexico: http://shipping.mercadopago.com.mx/optin/doOptin

> 	IMPORTANTE: Su cuenta de Mercado Pago tiene que ser del tipo **Vendedor**.

2. Configure el método de pago **Mercado Pago Standard Checkout (redirect, iframe or lightbox)**, es un requisito previo para el funcionamiento del Mercado de envíos.

3. Vaya al menú **Sales > Configuration > Sales > Shipping Methods > MercadoEnvios**.

4. Setup the plugin:


![MercadoEnvios Configuration](https://github.com/mercadopago/cart-magento2/raw/master/README.img/mercadoenvios.png?raw=true)

* **Enabled**: Habilitar/Deshabilitar Mercado Envíos.
* **Title**: Defina el título del método de envío que se mostrará en el momento del Checkout.
* **Product attributes mapping**: Configure los atributos de dimensión y peso. También es posible configurar las unidades de medida.
* **Available shipping methods**: Elija qué métodos de envío estarán disponibles para el comprador.
* **Free Method**: Seleccione los métodos de envío que estará con envío gratuito.
* **Free Shipping with Minimum Order Amount**: Habilitar/Deshabilitar la funcionalidad de valor mínimo de Pedido para mostrar el método de envío gratuito.
* **Minimum Order Amount for Free Shipping**: Defina el valor mínimo de Pedido para envío gratuito.
* **Show method if not applicable**: Si habilitado, el método de envío se muestra cuando no está disponible (mostrando un mensaje de alerta).
* **Displayed Error Message**: Personalice el mensaje de error cuando el método de envío no está disponible.
* **Log**: Habilitar/Deshabilitar logs.
* **Debug Mode**: Si está habilitado, mostrará la respuesta de la API en el lugar de un mensaje amigable.
* **Sort order**: Defina el orden en que el método de envío se muestra en el flujo de envío en el proceso de compra.
* **Shipping label download option**: Defina el formato para descargar la etiqueta de envío.

5. ¡Listo! El Mercado Envios ha sido configurado y habilitado con éxito!


<a name="Configuración-de-estado-de-las-notificaciones-de-Pago"></a>
## Configuración de estado de las notificaciones de Pago: ##

Este proceso explicará cómo configurar el estado de pedido para las notificaciones de pago:

1. Vaya al menú **Stores > Configuration > Sales > Payment Methods**.

2. Para configurar los status acceda a la opción **Mercado Pago - Global Configuration**, vaya a la opción **Order Status Options**. Para cada estado de pago usted puede elegir un estado de pedido, cuando su tienda recibe un notificación de pago el módulo actualizará automáticamente el pedido con el estado configurado. Para guardar la configuración haga un clic en el botón **Save Config**.

> El módulo está preparado para recibir las notificaciones de pago de forma automática, es decir, sin la necesidad de configurar su cuenta de Mercado Pago o el módulo.

3. ¡Listo! El estado de notificación se ha configurado correctamente.
