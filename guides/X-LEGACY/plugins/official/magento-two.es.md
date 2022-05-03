# Magento 2

> WARNING
>
> Atención
>
> ¡Protege tu integración!
>
> En octubre de 2022, se deprecarán las versiones del plugin Magento 2 anteriores a la 3.5.0. Mantén tu tienda siempre actualizada con la última versión para evitar la suspensión de las transacciones y la exposición de datos confidenciales.
>
> Esta documentación es solo para uso por parte del equipo interno, ya que fue deprecada o es un producto exclusivo. Para más detalles, hablar con el equipo comercial o de integraciones.

## Requisitos para integrar

| Requisito | Descripción |
| --- | --- |
| Versión del Magento | 2.x |
| Ambiente | LAMP (Linux, Apache, MySQL, and PHP)<br/>LNMP stack |
| Sistema Operativo | Linux x86-64 |
| Memoria | Minimum 2GB of RAM |
| Web Server | Apache 2.x<br/>Nginx 1.7.x |
| Versión del PHP | 5.6.x<br/>7.0.2<br/>7.0.6–7.0.x<br/> |
| Versión del MySQL | MySQL 5.6<br/>MariaDB y Percona son compatibles con Magento porque suportam las APIs del MySQL 5.6. |
| Dependencias de Extensiones | bc-math (Magento Commerce only)<br/>curl<br/>gd, ImageMagick 6.3.7 (or later) or both<br/>intl<br/>bstring<br/>mcrypt<br/>hash<br/>openssl<br/>PDO/MySQL<br/>SimpleXML<br/>soap<br/>xml<br/>xsl<br/>zip<br/> |
| PHP 7 only | json<br/>iconv |
| SSL | Es un requisito que tenga un certificado SSL.<br/>Durante las pruebas en modo de Sandbox usted podrá ejecutar las pruebas en HTTP. |


## Instalación

Este proceso explicará la instalación del módulo Mercado Pago vía Composer:

**Instalación vía Composer**

1) Ejecutar el comando para descargar el plugin con Composer: 

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


## Configuración de la tarjeta de crédito----[mlb]----, Pix------------ y tickets (Custom Checkout)

Aprende el proceso paso a paso para configurar el módulo para aceptar pagos a través de Tarjeta de Crédito----[mlb]----, Pix------------ y Ticket en Custom Checkout (Transparente). 

1) Vaya al menú **Stores > Configuration > Sales > Payment Methods**:

2) Para configurar las credenciales acceda a la opción **Mercado Pago** > **Credenciales**, aparecerá el campo **Public key** y el campo **Access token**. Obtén tus credenciales en la sección [Credenciales]([FAKER][CREDENTIALS][URL]).

> Existen dos tipos de credenciales:
> * Modo Sandbox: Las credenciales de este modo se utilizan para realizar pruebas.
> * Modo Producción: Las credenciales de este modo se utilizan para recibir los pagos en Producción. Para utilizar las credenciales del modo de producción debe activar tus credenciales.
> * Lee [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) para obtener más información.

3) Con las credenciales completadas, el siguiente paso es habilitar los medios de pago.
En primer lugar, ve al medio que quieres habilitar.

Para habilitar pagos con tarjeta > **Checkout - Credit and Debit Card**.<br>
Para habilitar pagos con ticket > **Custom Checkout - Offline Payment Methods (Ticket)**.<br>
----[mlb]----Para habilitar pagos con Pix  > **Custom Checkout - Pix**.------------

----[mlb]----
> WARNING
>
> Importante
>
> Antes de configurar Pix como medio de pago, ten en cuenta:<br><br>
> - [Verifica la última versión](https://marketplace.magento.com/mercadopago-core.html#product.info.details.release_notes) y actualiza tu plugin de Mercado Pago.<br>
> - Registra tu clave en Mercado Pago. Si no lo haces, tus clientes no podrán finalizar la compra. [Aprende a hacerlo](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).
------------

Al acceder, haz clic en el botón **Configure** para ver las opciones de configuración. Selecciona las opciones que prefieras y marca el campo **Enabled** como **Yes**. A continuación, haz clic en **Save Config**.

![Mercado Pago Custom Checkout Configuration](images/magento2/mercadopago_custom_checkout_configuration.png)

4) ¡Listo! El medio de pago se habilitará correctamente en el checkout.


## Configuración del Checkout Pro

Este proceso explicará cómo configurar el módulo para aceptar pagos con el Checkout Pro en Redirect, Iframe o Lightbox:

1) Vaya al menú **Stores > Configuration > Sales > Payment Methods**.

2) Para configurar las credenciales acceda a la opción **Mercado Pago - Classic Checkout**, haga un clic en **Configure**. Aparecerá el campo **Client id** y el campo **Client secret**. Obtén tus credenciales en la sección [Credenciales]([FAKER][CREDENTIALS][URL]).

3) Con las credenciales llenadas, ahora es necesario habilitar el medio de pago. Vaya a la opción **Enable** y marque como **Yes**. Aproveche y configure el Tipo de Checkout (**Type Checkout**) y si el usuario debe volver automáticamente a su tienda al finalizar el pago (**Auto Redirect**).

![Checkout Pro Redirect Configuration](images/magento2/mercadopago_global_configuration.png)

4) ¡Listo! Checkout Pro ha sido configurado y habilitado con éxito.


## Configuración de estado de las notificaciones de Pago

Este proceso explicará cómo configurar el estado de pedido para las notificaciones de pago:

1) Vaya al menú **Stores > Configuration > Sales > Payment Methods**.

2) Para configurar los status acceda a la opción **Mercado Pago - Global Configuration**, vaya a la opción **Order Status Options**. Para cada estado de pago usted puede elegir un estado de pedido, cuando su tienda recibe un notificación de pago el módulo actualizará automáticamente el pedido con el estado configurado. Para guardar la configuración haga un clic en el botón **Save Config**.

> El módulo está preparado para recibir las notificaciones de pago de forma automática, es decir, sin la necesidad de configurar su cuenta de Mercado Pago o el módulo.

3) ¡Listo! El estado de notificación se ha configurado correctamente.
