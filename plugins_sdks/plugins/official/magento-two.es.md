# Magento 2

## Requisitos para integrar

Requisito                   | Descripción
----------------------------| -------------------------------------------------------------------------
Versión del Magento         | 2.x
Ambiente                    | LAMP (Linux, Apache, MySQL, and PHP)<br/>LNMP stack
Sistema Operativo           | Linux x86-64
Memoria                     | Minimum 2GB of RAM
Web Server                  | Apache 2.x<br/>Nginx 1.7.x
Versión del PHP             | 5.6.x<br/>7.0.2<br/>7.0.6–7.0.x<br/>
Versión del MySQL           | MySQL 5.6<br/>MariaDB y Percona son compatibles con Magento porque suportam las APIs del MySQL 5.6.
Dependencias de Extensiones | bc-math (Magento Commerce only)<br/>curl<br/>gd, ImageMagick 6.3.7 (or later) or both<br/>intl<br/>bstring<br/>mcrypt<br/>hash<br/>openssl<br/>PDO/MySQL<br/>SimpleXML<br/>soap<br/>xml<br/>xsl<br/>zip<br/>
PHP 7 only                  | json<br/>iconv
SSL                         | Es un requisito que tenga un certificado SSL.<br/>Durante las pruebas en modo de Sandbox usted podrá ejecutar las pruebas en HTTP.


## Instalación

Este proceso explicará la instalación del módulo Mercado Pago vía Composer:

**Instalación vía Composer**

1) En el momento tenemos dos versiones de módulos, donde cada una de ellas tendrá un tipo de checkout:

* Si desea procesar pagos con **Checkout Redireccionado**, deberá instalar la versión 2.x del módulo del Mercado Pago. Para instalar ejecute el comando:

> composer require mercadopago/magento2-plugin:2.*

* Si desea procesar pagos con **Checkout Transparente (Custom)** con Tarjeta de Crédito o Ticket, utilice la versión 3.x del módulo. Esta versión esta mejor optimizada para este tipo de checkout. Para instalar ejecute el comando:

> composer require mercadopago/magento2-plugin:3.*

2) Ejecutar el comando para actualizar Magento:

> bin/magento setup:upgrade

3) Ejecute el comando para limpiar el cache de Magento:

> bin/magento cache:clean

4) Cuando la tienda está en modo **productivo**, es necesario generar los archivos static nuevamente:

> bin/magento setup:static-content:deploy

5) Si tiene problemas de permiso de carpeta al acceder a la tienda, debe renovar los permisos:

> chmod 777 -R var/ pub/ generated/

6) ¡Listo! El módulo del Mercado Pago fue instalado con éxito.


## Configuración de la tarjeta de crédito y tickets (Custom Checkout)

Este proceso explicará cómo configurar el módulo para aceptar pagos con Checkout Personalizado con tarjeta de crédito y tickets:

1) Vaya al menú **Stores > Configuration > Sales > Payment Methods**:

2) Para configurar las credenciales acceda a la opción **Mercado Pago** > **Credentials**, aparecerá el campo **Public Key** y el campo **Access Token**. Puede obtener las credenciales en la url:

* Argentina: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mla/account/credentials]([FAKER][CREDENTIALS][URL])
* Brazil: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlb/account/credentials]([FAKER][CREDENTIALS][URL])
* Chile: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlc/account/credentials]([FAKER][CREDENTIALS][URL])
* Colombia: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mco/account/credentials]([FAKER][CREDENTIALS][URL])
* Mexico: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlm/account/credentials]([FAKER][CREDENTIALS][URL])
* Uruguay: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlu/account/credentials]([FAKER][CREDENTIALS][URL])
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)
* Peru: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mpe/account/credentials]([FAKER][CREDENTIALS][URL])


> Existen dos tipos de credenciales:
> * Modo Sandbox: Las credenciales de este modo se utilizan para realizar pruebas.
> * Modo Produção: Las credenciales de este modo se utilizan para recibir los pagos en Producción. Para utilizar las credenciales del modo de producción debe completar el formulario de "Quiero ir a producción"

3) Con las credenciales completadas, debe habilitar los métodos de pago. Acceda a la opción **Checkout Custom - Credit And Debit Card**, haga un clic en el botón **Configure** y marque la opción **Enable** como **Yes**. Siga este proceso para ** Checkout Custom - Credit And Debit Card** y para **Checkout Custom - Offline Payment Methods (Ticket)** haga un clic en **Save Config** para guardar la configuración.

![Mercado Pago Custom Checkout Configuration](images/magento2/mercadopago_custom_checkout_configuration.png)

4) ¡Listo! El Checkout Custom con Tarjeta de crédito y Ticket ha sido configurado y habilitado con éxito!


## Configuración de Basic Checkout

Este proceso explicará cómo configurar el módulo para aceptar pagos con el Checkout Básico en Redirect, Iframe o Lightbox:

1) Vaya al menú **Stores > Configuration > Sales > Payment Methods**.

2) Para configurar las credenciales acceda a la opción **Mercado Pago - Classic Checkout**, haga un clic en **Configure**. Aparecerá el campo **Client id** y el campo **Client Secret**. Puede obtener las credenciales en la url:

* Argentina: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mla/account/credentials?type=basic]([FAKER][CREDENTIALS][URL])
* Brazil: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlb/account/credentials?type=basic)
* Chile: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlc/account/credentials?type=basic)
* Colombia: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mco/account/credentials?type=basic)
* Mexico: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlm/account/credentials?type=basic)
* Uruguay: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlu/account/credentials?type=basic)
* Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
* Peru: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mpe/account/credentials?type=basic]([FAKER][CREDENTIALS][URL])

3) Con las credenciales llenadas, ahora es necesario habilitar el método de pago. Vaya a la opción **Enable** y marque como **Yes**. Aproveche y configure el Tipo de Checkout (**Type Checkout**) y si el usuario debe volver automáticamente a su tienda al finalizar el pago (**Auto Redirect**).

![Mercado Pago Checkout Redirect Configuration](images/magento2/mercadopago_global_configuration.png)

4) ¡Listo! El Checkout Básico ha sido configurado y habilitado con éxito!


## Configuración de estado de las notificaciones de Pago

Este proceso explicará cómo configurar el estado de pedido para las notificaciones de pago:

1) Vaya al menú **Stores > Configuration > Sales > Payment Methods**.

2) Para configurar los status acceda a la opción **Mercado Pago - Global Configuration**, vaya a la opción **Order Status Options**. Para cada estado de pago usted puede elegir un estado de pedido, cuando su tienda recibe un notificación de pago el módulo actualizará automáticamente el pedido con el estado configurado. Para guardar la configuración haga un clic en el botón **Save Config**.

> El módulo está preparado para recibir las notificaciones de pago de forma automática, es decir, sin la necesidad de configurar su cuenta de Mercado Pago o el módulo.

3) ¡Listo! El estado de notificación se ha configurado correctamente.
