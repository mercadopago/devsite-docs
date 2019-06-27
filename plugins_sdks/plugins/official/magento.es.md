# Magento

* [Requisitos](#Requisitos)
* [Instalación](#Instalación)
* [Actualización](#Actualización)
* Checkout Personalizado
* Checkout Básico
* [Configuración de estado de las notificaciones de Pago](#Configuración-de-estado-de-las-notificaciones-de-Pago)

El módulo de Mercado Pago para Magento ofrece las siguientes funcionalidades:

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


<a name="Requisitos"></a>
## Requisitos:

|                            | Detalle                                                                                        |
|----------------------------|------------------------------------------------------------------------------------------------|
| Versiones Soportadas       | Community Edition 1.8.x - 1.9.x, Enterprise Edition 1.11.x - 1.14.x                            |
| Ambiente                   | LAMP (Linux, Apache, MySQL, and PHP) ó LNMP stack                                              |
| Sitema                     | Linux x86, Windows x86-64                                                                      |
| Servidor Web               | Apache 2.x,  Nginx 1.7.x                                                                       |
| Version PHP                | PHP 5.6, 5.5 y 5.4                                                                             |
| Base de datos              | MySQL 5.6 (Oracle or Percona)                                                                  |
| Dependencia de extensiones | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API)           |
| Configuración adicionales  | safe_mode off * memory_limit maior que 256MB (512MB é o recomendado)                           |
| SSL                        | Es un requisito que tenga un certificado SSL, Durante las pruebas en modo de Sandbox podras usar HTTP.|

<a name="Instalación"></a>
## Instalación: ##

Este proceso explicará la instalación del módulo Mercado Pago vía Package y Marketplace:

### Instalación via Marketplace

1. Acceda a **[Magento Marketplace](https://marketplace.magento.com/)**, busque por **Mercado Pago**, seleccione el módulo para la versión **Magento 1**, agregue el módulo en el carrito y finalize el proceso de compra (**no tendrá ningún costo**):
    ![Instalar Mercado Pago marketplace en Magento](/images/magento-marketplace_1.gif)

2. Al finalizar el proceso de "compra", haga un clic en **Install** y copie la url que estará disponible en la pantalla:
    ![Instalar y copiar las access keys Mercado Pago Magento](/images/magento-marketplace_2.gif)


3. Para realizar la instalación vamos a utilizar la herramienta **Magento Connect Manager**, acceda al administrador de Magento y vaya al menu  **System > Magento Connect > Magento Connect Manager**
4. Pegue la url obtenida en **Magento Marketplace** en la opción **Install New Extensions** y haga un click en **Install**.
    ![Pegar access key para instalar Mercado Pago Magento](/images/magento-marketplace_3.gif)

5. ¡Listo! El módulo de Mercado Pago fue instalado con éxito.

### Instalación via Package

1. Acceda al **[Github del Módulo para Magento de Mercado Pago](https://github.com/mercadopago/cart-magento)**, descargar el archivo que tiene la extensión **.tgz** (Ejemplo: MercadoPago-2.10.0.tgz):
    ![Instalando Mercado Pago Magento via package](/images/magento-download_github.gif)

2. Para realizar la instalación vamos a utilizar la herramienta **Magento Connect Manager**, acceda al administrador de Magento y vaya al menu  **System > Magento Connect > Magento Connect Manager**
3. Cargar el módulo en la opción **Direct package file upload** y haga un click en **Upload**.
    ![Cargar el archivo de Mercado Pago en Magento](/images/magento-install_tgz.gif)

4. ¡Listo! El módulo de Mercado Pago fue instalado con éxito.

<a name="Actualización"></a>
## Actualización:

Si ya tiene el módulo de Mercado Pago y desea instalar una versión más actual del módulo, le aconsejamos eliminar todos los archivos relacionados con el módulo anterior.

La lista de archivos y carpetas a eliminar:

```
- app/code/community/MercadoPago
- app/design/adminhtml/default/default/layout/mercadopago.xml
- app/design/frontend/base/default/layout/mercadopago.xml
- app/design/adminhtml/default/default/template/mercadopago
- app/design/frontend/base/default/template/mercadopago
- js/mercadopago
- skin/adminhtml/default/default/mercadopago
- skin/frontend/base/default/mercadopago
- lib/MercadoPago
- app/etc/modules/MercadoPago_Core.xml
- app/etc/modules/MercadoPago_MercadoEnvios.xml
- app/etc/modules/MercadoPago_OneStepCheckout.xml
- app/locale/en_US/MercadoPago_Core.csv
- app/locale/es_AR/MercadoPago_Core.csv
- app/locale/es_CL/MercadoPago_Core.csv
- app/locale/es_CO/MercadoPago_Core.csv
- app/locale/es_ES/MercadoPago_Core.csv
- app/locale/es_MX/MercadoPago_Core.csv
- app/locale/es_VE/MercadoPago_Core.csv
- app/locale/pt_BR/MercadoPago_Core.csv
```

Una vez realizado este proceso, ejecute el proceso de **Instalación**.

> Siempre haga una copia de seguridad antes de realizar cualquier cambio.

<a name="Configuración-de-la-tarjeta-de-crédito-y-tickets"></a>
## Configuración para procesar Tarjeta de crédito y Tickets: ##

Este proceso explicará cómo configurar el módulo para aceptar pagos con Checkout Personalizado con tarjeta de crédito y tickets:

1. Vaya al menú **Systems > Configuration**, en la página de configuración vaya a la opción **Payment Methods**:
    ![Configurando tarjeta de crédito y otros medios de pago Mercado Pago Magento](/images/magento-config-01.gif)

2. Para configurar las credenciales acceda a la opción **Mercado Pago - Custom Checkout**, aparecerá el campo **Public Key** y el campo **Access Token**. [Obtén tus credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic)
    ![Configurar las credenciales Mercado Pago Magento](/images/magento-config-02.gif)

> Existen dos tipos de credenciales:
> * Modo Sandbox: Las credenciales de este modo se utilizan para realizar pruebas.
> * Modo Produción: Las credenciales de este modo se utilizan para recibir los pagos en un entorno de producción. Para utilizar las credenciales del modo de producción debe completar el formulario de "Quiero ir a producción"

3. Con las credenciales completadas, debe habilitar los métodos de pago. Haga un clic en el botón **Configure** y marque la opción **Enable** como **Yes**. Siga este proceso para **Checkout Custom - Credit Card** y para **Checkout Custom - Ticket** haga un clic en **Save Config** para guardar la configuración.
    ![Habilitar medios de pago Mercado Pago Magento](/images/magento-config-03.gif)

4. ¡Listo! El Checkout Custom con Tarjeta de crédito y Ticket ha sido configurado y habilitado con éxito!
    ![Configuración de checkout exitosa Mercado Pago Magento](/images/magento-save.png)


<a name="Configurar-el-Checkout-Redirect,-Iframe-y-LightBox"></a>
## Configurar el Checkout Redirect, Iframe y LightBox:

Este proceso explicará cómo configurar el módulo para aceptar pagos con el Checkout Básico en Redirect, Iframe o Lightbox:

1. Vaya al menú **Systems > Configuration**, en la página de configuración vaya a la opción **Payment Methods**:
    ![Configurando Checkout Redirect, Iframe and LightBox Mercado Pago Magento](/images/magento-config-01.gif)


2. Para configurar las credenciales acceda a la opción **Mercado Pago - Classic Checkout**, haga un clic en **Configure**. Aparecerá el campo **Client id** y el campo **Client Secret**. [Obtén tus credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic)
    ![Configurando credenciales - Checkout redirect Mercado Pago Magento](/images/magento-config-04.gif)

3. Con las credenciales llenadas, ahora es necesario habilitar el método de pago. Vaya a la opción **Enable** y marque como **Yes**. Aproveche y configure el Tipo de Checkout (**Type Checkout**) y si el usuario debe volver automáticamente a su tienda al finalizar el pago (**Auto Redirect**).
    ![Activar medio de pago en Magento - Checkout redirect Mercado Pago Magento](/images/magento-config-05.gif)

4. ¡Listo! El Checkout Básico ha sido configurado y habilitado con éxito!
    ![Checkout redirect configurado existosamente Mercado Pago Magento](/images/magento-save.png)


<a name="Configurar-Mercado-Envios"></a>
## Configurar Mercado Envíos: ##

Este proceso explicará cómo configurar el módulo para aceptar Mercado Envíos:

1. Es necesario [habilitar Mercado Envíos](http://shipping.mercadopago.com.ar/optin/doOptin) en su cuenta Mercado Pago.

> 	IMPORTANTE: Su cuenta de Mercado Pago tiene que ser del tipo **Vendedor**.

2. Vaya al menú **Systems > Configuration**, en la página de configuración vaya a la opción **Shipping Methods**:
    ![Configurando Mercado Envíos en Mercado Pago Magento](/images/magento-config-me-01.gif)

3. Para habilitar Mercado Envíos **MercadoEnvios**, haga un clic en el botón  **Configure**. Vaya a la opción **Enable** y marque como **Yes**.
    ![Habilitando Mercado envíos en Mercado Pago Magento](/images/magento-config-me-02.gif)


4. Vaya a la opción **Product attributes mapping** y seleccione de acuerdo con los atributos que tiene configurado en su tienda. Aproveche y configure los métodos de envío disponibles, en la opción **Available shipping methods**. Haga un click en **Save Config** para guardar las configuraciones realizadas:
    ![Configurando productos en marketplace Mercado Pago Magento](/images/magento-config-me-03.gif)

5. ¡Listo! Mercado Envíos ha sido configurado y habilitado con éxito!
    ![Mercado Envíos configurado exitosamente Mercado Pago Magento](/images/magento-me_save.png)


<a name="Configurar-Suscripciones"></a>
## Configurar Suscripciones: ##

Este proceso explicará cómo configurar el módulo para aceptar pagos con suscripciones:

1. Vaya al menú **Systems > Configuration**, en la página de configuración vaya a la opción **Payment Methods**:
    ![Configurando pagos recurrentes Mercado Pago Magento](/images/magento-config-01.gif)

2. Para configurar las credenciales acceda a la opción **Mercado Pago - Recurring Payments**, haga un clic en **Configure**. Aparecerá el campo **Client id** y el campo **Client Secret**. [Obten tus credenciales en la url](https://www.mercadopago.com/mla/account/credentials?type=basic)
    ![Configuring Credentials - Recurring Payments](/images/magento-config-re-01.gif)

3. Con las credenciales llenadas, ahora es necesario habilitar el método de pago. Vaya a la opción **Enable** y marque como **Yes**.
    ![Enabling payment method in Magento - Recurring Payments](/images/magento-config-re-02.gif)

4. ¡Listo! El pago con suscripciones ha sido configurado y habilitado con éxito!
    ![Recurring Payments configured successfully](/images/magento-save.png)


<a name="Configuración-de-estado-de-las-notificaciones-de-Pago"></a>
## Configuración de estado de las notificaciones de Pago: ##

Este proceso explicará cómo configurar el estado de pedido para las notificaciones de pago:

1. Vaya al menú **Systems > Configuration**, en la página de configuración vaya a la opción **Payment Methods**:
![Accessing the payment method to configure the status of Payment Notifications](/images/magento-config-01.gif)
    ![](/images/magento-config-01.gif)

2. Para configurar los status acceda a la opción **Mercado Pago - Global Configuration**, vaya a la opción **Order Status Options**. Para cada estado de pago usted puede elegir un estado de pedido, cuando su tienda recibe una notificación de pago el módulo actualizará automáticamente el pedido con el estado configurado. Para guardar la configuración haga un clic en el botón **Save Config**.
    ![Configure payment notification status](/images/magento-config-06.gif)

> El módulo está preparado para recibir las notificaciones de pago de forma automática, es decir, sin la necesidad de configurar su cuenta de Mercado Pago o el módulo.

3. ¡Listo! El estado de notificación se ha configurado correctamente.
    ![Status of Payment Notifications configured successfully](/images/magento-save.png)
