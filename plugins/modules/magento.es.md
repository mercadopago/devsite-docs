# Magento - Mercado Pago Module (v1.8.x to 1.9.x)

* [Requisitos](#Requisitos)
* [Funcionalidad](#Funcionalidad)
* [Instalación](#Instalación)
* [Actualización](#Actualización)
* Checkout Personalizado
  * [Configuración de la Tarjeta de crédito y Tickets](#Configuración-de-la-tarjeta-de-crédito-y-tickets)
* Checkout Básico
  * [Configurar el Checkout Redirect, Iframe y LightBox](#Configurar-el-Checkout-Redirect,-Iframe-y-LightBox)
  * [Configurar el Mercado Envios](#Configurar-Mercado-Envios)
  * [Configurar Suscripciones](#Configurar-Suscripciones)
* [Configuración de estado de las notificaciones de Pago](#Configuración-de-estado-de-las-notificaciones-de-Pago)
* [FAQ](#FAQ)
* [Soporte técnico](#Soporte-técnico)

<a name="Requisitos"></a>
## Requisitos: ##

**Versión del Magento**
* Community Edition 1.8.x - 1.9.x
* Enterprise Edition 1.11.x - 1.14.x

**Ambiente**
* LAMP (Linux, Apache, MySQL, and PHP)
* LNMP stack

**Sistema**
* Linux x 86
* x86-64

**Web Server**
* Apache 2.x
* Nginx 1.7.x

**Servidor de Hospedaje**
* Puede ejecutar crontab con PHP 5
* Puede sobrescribir el archivo .htaccess

**Versión del PHP**
* PHP 5.6
* PHP 5.5
* PHP 5.4

**Versión del MySQL**
* MySQL 5.6 (Oracle or Percona)

**Dependencias de Extensiones**
* PDO_MySQL
* simplexml
* mcrypt
* hash
* GD
* DOM
* iconv
* curl
* SOAP (for Webservices API)

**Configuración adicionales**
* safe_mode off
* memory_limit maior que 256MB (512MB é o recomendado)

**SSL**
* Es un requisito que tenga un certificado SSL.
* Durante las pruebas en modo de Sandbox usted podrá ejecutar las pruebas en HTTP.


<a name="Funcionalidad"></a>
## Funcionalidad: ##

El módulo del Mercado Pago para Magento esta integrado con las siguientes funcionalidad y soluciones de pago:

* [Checkout básico (Redirect, Iframe ou Modal)](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * Pagos con dos tarjetas
    * [Mercado Envios](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * [Devolución de Pagos](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/refund-cancel#refund)
    * [Suscripciones](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/subscriptions/)


* Checkout Personalizado
    * [Pagos con Tarjetas](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * [Pagos con un click (Clientes y Tarjetas)](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Pagos con otros medios](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/charge-with-other-methods/)
    * Pagos con dos tarjetas
    * [Devolución de Pagos](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/refund-cancel#refund)


* Otras Funcionalidades
    * Atualización del pedido a través de Cron
    * Pagina de éxito personalizable
    * Calculadora de Cuotas


<a name="Instalación"></a>
## Instalación: ##

Este proceso explicará la instalación del módulo Mercado Pago vía Package y Marketplace:

**Instalación via Marketplace**

1. Acceda el **[Magento Marketplace](https://marketplace.magento.com/)**, busque por **Mercado Pago**, seleccione el módulo para la versión **M1**, agregue el módulo en el carrito y finalize el proceso de compra (no tendrá ningún costo):
![Install](/images/plugins/modules/magentomarketplace_1.gif)

2. Al finalizar el proceso de "compra", haga un clic en **Install** y copie la url que estará disponible en la pantalla:
![Install](/images/plugins/modules/magentomarketplace_2.gif)
> La url copiada debe ser igual a esta: 
> https://connect20.magentocommerce.com/e848b7a0bc8735cd525582c/mercadopago+MercadoPago-2.9.0

3. Para realizar la instalación vamos a utilizar la herramienta **Magento Connect Manager**, acceda al administrador de Magento y vaya al menu  **System > Magento Connect > Magento Connect Manager**

4. Copie la url obtenida en **Magento Marketplace** en la opción **Install New Extensions** y haga un click en **Install**.

![Install](/images/plugins/modules/magentomarketplace_3.gif)

5. ¡Listo! El módulo del Mercado Pago fue instalado con éxito.

**Instalación via Package**

1. Acceda el **[Github do Módulo Magento do Mercado Pago](https://github.com/mercadopago/cart-magento)**, descargar el archivo que tiene la extensión **.tgz** (Ejemplo: MercadoPago-2.10.0.tgz):
![Install](/images/plugins/modules/magentodownload_github.gif)

2. Para realizar la instalación vamos a utilizar la herramienta **Magento Connect Manager**, acceda al administrador de Magento y vaya al menu  **System > Magento Connect > Magento Connect Manager**

3. Cargar el módulo en la opción **Direct package file upload** y haga un click en **Upload**.

![Install](/images/plugins/modules/magentoinstall_tgz.gif)

4. ¡Listo! El módulo del Mercado Pago fue instalado con éxito.



<a name="Actualización"></a>
## Actualización: ##

Si ya tiene el módulo de Mercado Pago y desea instalar una versión más actual del módulo, le aconsejamos eliminar todos los archivos relacionados con el módulo anterior.

La lista de archivos y la carpeta que se va a quitar:

* app/code/community/MercadoPago
* app/design/adminhtml/default/default/layout/mercadopago.xml
* app/design/frontend/base/default/layout/mercadopago.xml
* app/design/adminhtml/default/default/template/mercadopago
* app/design/frontend/base/default/template/mercadopago
* js/mercadopago
* skin/adminhtml/default/default/mercadopago
* skin/frontend/base/default/mercadopago
* lib/MercadoPago
* app/etc/modules/MercadoPago_Core.xml
* app/etc/modules/MercadoPago_MercadoEnvios.xml
* app/etc/modules/MercadoPago_OneStepCheckout.xml
* app/locale/en_US/MercadoPago_Core.csv
* app/locale/es_AR/MercadoPago_Core.csv
* app/locale/es_CL/MercadoPago_Core.csv
* app/locale/es_CO/MercadoPago_Core.csv
* app/locale/es_ES/MercadoPago_Core.csv
* app/locale/es_MX/MercadoPago_Core.csv
* app/locale/es_VE/MercadoPago_Core.csv
* app/locale/pt_BR/MercadoPago_Core.csv

Una vez realizado este proceso, ejecute el proceso de **Instalación**.

> Siempre haga una copia de seguridad (backup) antes de realizar cualquier cambio.


<a name="Configuración-de-la-tarjeta-de-crédito-y-tickets"></a>
## Configuración de la Tarjeta de crédito y Tickets: ##

Este proceso explicará cómo configurar el módulo para aceptar pagos con Checkout Personalizado con tarjeta de crédito y tickets:

1. Vaya al menú **Systems > Configuration**, en la página de configuración vaya a la opción **Payment Methods**:

![Configuration](/images/plugins/modules/magento/config-01.gif)

2. Para configurar las credenciales acceda a la opción **Mercado Pago - Custom Checkout**, aparecerá el campo **Public Key** y el campo **Access Token**. Puede obtener las credenciales en la url:

* Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
* Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
* Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
* Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)


![Configuration](/images/plugins/modules/magento/config-02.gif)

> Existen dos tipos de credenciales:
> * Modo Sandbox: Las credenciales de este modo se utilizan para realizar pruebas.
> * Modo Produção: Las credenciales de este modo se utilizan para recibir los pagos en Producción. Para utilizar las credenciales del modo de producción debe completar el formulario de "Quiero ir a producción"

3. Con las credenciales completadas, debe habilitar los métodos de pago. Haga un clic en el botón **Configure** y marque la opción **Enable** como **Yes**. Siga este proceso para **Checkout Custom - Credit Card** y para **Checkout Custom - Ticket** haga un clic en **Save Config** para guardar la configuración.

![Configuration](/images/plugins/modules/magento/config-03.gif)

4. ¡Listo! El Checkout Custom con Tarjeta de crédito y Ticket ha sido configurado y habilitado con éxito!
 
![Configuration](/images/plugins/modules/magento/save.png)


<a name="Configurar-el-Checkout-Redirect,-Iframe-y-LightBox"></a>
## Configurar el Checkout Redirect, Iframe y LightBox: ##

Este proceso explicará cómo configurar el módulo para aceptar pagos con el Checkout Básico en Redirect, Iframe o Lightbox:

1. Vaya al menú **Systems > Configuration**, en la página de configuración vaya a la opción **Payment Methods**:

![Configuration](/images/plugins/modules/magento/config-01.gif)

2. Para configurar las credenciales acceda a la opción **Mercado Pago - Classic Checkout**, haga un clic en **Configure**. Aparecerá el campo **Client id** y el campo **Client Secret**. Puede obtener las credenciales en la url:

* Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

![Configuration](/images/plugins/modules/magento/config-04.gif)

3. Con las credenciales llenadas, ahora es necesario habilitar el método de pago. Vaya a la opción **Enable** y marque como **Yes**. Aproveche y configure el Tipo de Checkout (**Type Checkout**) y si el usuario debe volver automáticamente a su tienda al finalizar el pago (**Auto Redirect**).

![Configuration](/images/plugins/modules/magento/config-05.gif)

4. ¡Listo! El Checkout Básico ha sido configurado y habilitado con éxito!

![Configuration](/images/plugins/modules/magento/save.png)


<a name="Configurar-Mercado-Envios"></a>
## Configurar el Mercado Envios: ##

Este proceso explicará cómo configurar el módulo para aceptar Mercado Envios:

1. Es necesario habilitar el Mercado Envios en su cuenta Mercado Pago.

	Puede hacer esto accediendo, de acuerdo con su país, el link:

	* Argentina: http://shipping.mercadopago.com.ar/optin/doOptin
	* Brasil: http://shipping.mercadopago.com.br/optin/doOptin
	* Mexico: http://shipping.mercadopago.com.mx/optin/doOptin

> 	IMPORTANTE: Su cuenta de Mercado Pago tiene que ser del tipo **Vendedor**.

2. Vaya al menú **Systems > Configuration**, en la página de configuración vaya a la opción **Shipping Methods**:

![Configuration](/images/plugins/modules/magento/config-me-01.gif)

3. Para habilitar el Mercado Envios **MercadoEnvios**, haga un clic en el botón  **Configure**. Vaya a la opción **Enable** y marque como **Yes**.

![Configuration](/images/plugins/modules/magento/config-me-02.gif)

4. Vaya a la opción **Product attributes mapping** y seleccione de acuerdo con los atributos que tiene configurado en su tienda. Aproveche y configure los métodos de envío disponibles, en la opción **Available shipping methods**. Haga un click en **Save Config** para guardar las configuraciones realizadas:

![Configuration](/images/plugins/modules/magento/config-me-03.gif)

5. ¡Listo! El Mercado Envios ha sido configurado y habilitado con éxito!

![Configuration](/images/plugins/modules/magento/me_save.png)


<a name="Configurar-Suscripciones"></a>
## Configurar Suscripciones: ##

Este proceso explicará cómo configurar el módulo para aceptar pagos con suscripciones:

1. Vaya al menú **Systems > Configuration**, en la página de configuración vaya a la opción **Payment Methods**:

![Configuration](/images/plugins/modules/magento/config-01.gif)

2. Para configurar las credenciales acceda a la opción **Mercado Pago - Recurring Payments**, haga un clic en **Configure**. Aparecerá el campo **Client id** y el campo **Client Secret**. Puede obtener las credenciales en la url:

* Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
* Brazil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)

![Configuration](/images/plugins/modules/magento/config-re-01.gif)

3. Con las credenciales llenadas, ahora es necesario habilitar el método de pago. Vaya a la opción **Enable** y marque como **Yes**.

![Configuration](/images/plugins/modules/magento/config-re-02.gif)

4. ¡Listo! El pago con suscripciones ha sido configurado y habilitado con éxito!

![Configuration](/images/plugins/modules/magento/save.png)


<a name="Configuración-de-estado-de-las-notificaciones-de-Pago"></a>
## Configuración de estado de las notificaciones de Pago: ##

Este proceso explicará cómo configurar el estado de pedido para las notificaciones de pago:

1. Vaya al menú **Systems > Configuration**, en la página de configuración vaya a la opción **Payment Methods**:

![Configuration](/images/plugins/modules/magento/config-01.gif)

2. Para configurar los status acceda a la opción **Mercado Pago - Global Configuration**, vaya a la opción **Order Status Options**. Para cada estado de pago usted puede elegir un estado de pedido, cuando su tienda recibe un notificación de pago el módulo actualizará automáticamente el pedido con el estado configurado. Para guardar la configuración haga un clic en el botón **Save Config**.

![Configuration](/images/plugins/modules/magento/config-06.gif)

> El módulo está preparado para recibir las notificaciones de pago de forma automática, es decir, sin la necesidad de configurar su cuenta de Mercado Pago o el módulo.

3. ¡Listo! El estado de notificación se ha configurado correctamente.

![Configuration](/images/plugins/modules/magento/save.png)


<a name="FAQ"></a>
## FAQ: ##

En construcción...


<a name="Soporte-técnico"></a>
## Soporte técnico: ##

Caso tenga alguna duda, problema o error tenemos un canal de contacto.
Envié un email a modulos@mercadopago.com con la seguinte información:

* Email de su cuenta de Mercado Pago.
* Detalles sobre su duda, problema o error.
* Archivos que puedan ayudar en el entendimiento (Print-Screen, Video, Archivos de logs, etc).
* Versión del Magento.
* Versión del módulo, si está utilizando.
> Puede obtener la versión del módulo en la configuración del módulo. Para acceder a la configuración del módulo vaya a **System > Configuration**, haga clic en la opción **Payment Methods**, vaya a la opción **Mercado Pago - Global Configuration** en la sesión **Developer Options** usted encontrará la opción **Version Module**, conforme la imagen:
>
> ![Developer](/images/plugins/modules/magento/developer_option.png)

No te preocupes... Vamos a ayudarle lo más rápidamente posible.

