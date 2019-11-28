# Prestashop 1.6


### Mercado Pago Module (Prestashop 1.6.x)

* [Funcionalidades](#bookmark_Funcionalidades)
* [Requisitos](#bookmark_Requisitos)
* [Versión](#bookmark_Versión)
* [Installación](#bookmark_Instalación)
* [Configuración](#bookmark_Configuración)
* [Notificaciones](#bookmark_Notificaciones)
* [Actualizaciones](#bookmark_Actualizaciones)

## Funcionalidades

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

> NOTE
>
> IMPORTANTE
>
> El checkout personalizado está disponible sólo en Prestashop 1.6.

## Requisitos

|                            | Detalle                                                                                        |
|----------------------------|------------------------------------------------------------------------------------------------|
| Versiones Soportadas       | Prestashop 1.6.x                                                                       |
| Ambiente                   | LAMP (Linux, Apache, MySQL, and PHP) ó LNMP stack                                              |
| Sitema                     | Linux x86, Windows x86-64                                                                      |
| Servidor Web               | Apache 2.x,  Nginx 1.7.x                                                                       |
| Version PHP                | PHP 5.6, 5.5 y 5.4                                                                             |
| Base de datos              | MySQL 5.6 (Oracle o Percona)                                                                  |
| Dependencia de extensiones | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl, SOAP (for Webservices API)           |
| Configuración adicionales  | safe_mode off * memory_limite mayor que 256MB (512MB recomendado)                              |
| SSL                        | Es un requisito que tenga un certificado SSL, Durante las pruebas en modo de Sandbox podrás usar HTTP.|

>Es un requisito que cuentes con un certificado SSL y que el formulario de pago que sea servido bajo HTTPS. Durante las pruebas en modo sandbox usted puede operar vía HTTP, pero para la homologación usted necesitará adquirir el certificado si no lo tiene.

## Versión

| Versión plugin                                               | Estatus                   | Versiones disponibles |
|-------------------------------------------------------------|--------------------------|---------------------|
| [v1.6.x](https://github.com/mercadopago/cart-prestashop-6/) | Stable (Current Version) | Prestashop v1.6.x   |

## Instalación

1) Descargue el archivo **mercadopago.zip** en nuestro Github de acuerdo con la versión de Prestashop con la que trabaja.

> NOTE
>
> DESCARGAR
>
> Módulo Mercado Pago para Prestashop [1.6](https://github.com/mercadopago/cart-prestashop-6/blob/master/mercadopago.zip).

2) Acceda al panel administrativo del Prestashop en **MEJORAS** -> **Módulos** -> **Módulos y Servicios**, haga clic en el botón **"Enviar un Módulo"** y seleccione el archivo **mercadopago.zip** descargado anteriormente.

3) Muy bien! El módulo de Mercado Pago fue instalado con éxito.

![Configuración](/images/prestashop_select_mp_file.gif)


## Configuración

1) Después de la instalación del módulo, diríjase a **MEJORAS** -> **Módulos** -> **Módulos y Servicios** y haga clic en ** Configurar ** en el Plugin del Mercado Pago.

2) En la pantalla **BASIC SETTINGS** se le solicitarán los datos **Client ID** y **Client Secret**. Estos datos son las credenciales de su cuenta de Mercado Pago y se pueden obtener a través del siguiente enlace: [Obtener sus credenciales]([FAKER][CREDENTIALS][URL]).

![Configuración](/images/prestashop_credentials_configuration.gif)

> Hay dos tipos de credenciales:
* **Modo Sandbox**: Estas credenciales se utilizan para las pruebas.
> * **Modo de producción**: Estas credenciales se utilizan para compras en producción.

3) Ahora en la pantalla ** PAYMENT SETTINGS ** mantenga Checkout Standard como activo para utilizar el Checkout Redireccionado de Mercado Pago.

![Checkout Standard](/images/prestashop_checkout_standard.png)

4) En PAYMENT METHOD usted puede habilitar las formas de pago con las que trabajará:

![Payment Method](/images/prestashop_payment_method.png)

5) Muy bien! Usted ha habilitado los pagos vía Checkout Standard (redireccionado)!

### Configuración de Mercado Envíos

> IMPORTANTE: Mercado Envíos funciona con el Checkout Standard (redireccionado). Al utilizarlo los demás medios de pago serán deshabilitados.

1) Primero, usted necesita [habilitar Mercado Envíos en su cuenta](http://shipping.mercadopago.com.ar/optin/doOptin).

> NOTE
>
> IMPORTANTE
>
> Su cuenta de Mercado Pago necesita ser del tipo **Vendedor**.
> El producto enviado debe tener sus dimensiones (ancho, altura, longitud y peso) adecuadamente configurados y dentro de las reglas y límites soportados por el país especificado.

2) Para habilitar en el módulo, sólo tiene que activarlo accediendo al panel administrativo de Prestashopp en **MEJORAS -> Módulos -> Módulos y Servicios** y haciendo clic en **Configurar** en el módulo del Mercado Pagado:

3) En **MERCADO Envíos** es posible configurar un texto para ser exhibido en la entrega a través del campo **Custom text para usar con entrega**. Para realizar la activación marque el campo ** Enable Mercado Envíos** como **YES**.

![Habilitar Mercado Envíos](/images/prestashop_mercado_envios.png)

4) Muy bien! Ahora usted puede ofrecer Mercado Envíos como medio de transporte para sus clientes!


## Notificaciones

Su tienda se sincronizará automáticamente con MercadoPago. La URL de notificación se enviará en cada pago.


### Actualización

Siga los mismos pasos que hizo para [instalar el módulo](#bookmark_instalación).
