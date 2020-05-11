---
  indexable: false
---
# WP-eCommerce

# Requisitos del Sistema
### Versiones de la plataforma
* <a href="https://wordpress.org/download/">WordPress</a> 4.1 o mayor
* <a href="https://wordpress.org/plugins/wp-e-commerce/">WP eCommerce</a> 3.11 o mayor

### Ambiente
* LAMP (Linux, Apache, MySQL, and PHP)

### Sistema operativo
* Linux x86
* x86-64

### Web Server
* <a href="https://httpd.apache.org/">Apache 2.x</a>

### Hosting
* Puede sobreescribir el archivo .htaccess

### Versiones PHP
* <a href="http://php.net/">PHP</a> 5.6 o mayor, con soporte CURL.

### Versión MySQL
* <a href="http://www.mysql.com/">MySQL</a> versión 5.6 o mayor ó <a href="https://mariadb.org/">MariaDB</a> versión 10.0 o mayor

### Dependencia de extensión
* WP eCommerce

### Configuraciones adicionales
* safe_mode off
* memory_limit mayor que 256MB (512MB es el recomendado)

### SSL
* Para tarjetas de crédito y tickets, es un requerimiento que se cuente con certificado SSL.

# Funcionalidad
El módulo de Mercado Pago para WP eCommerce está integrado con las siguientes funcionalidades y soluciones de pago:

### [Checkout básico (Redirect, Iframe or Lightbox)](https://www.mercadopago.com.ar/developers/en/solutions/payments/basic-checkout/receive-payments/)
* Interfaces "pre-armadas" de Mercado Pago <ar>![Basic Checkout](/images/wp-ecommerce-basic_checkout_payment.png)

### Checkout personalizado
* [Pagos con tarjeta de crédito](https://www.mercadopago.com.ar/developers/en/solutions/payments/basic-checkout/receive-payments/)<ar>![Custom Checkout](/images/wp-ecommerce-order_custom.png)
* [Pago conn un click (Customer Cards)](https://www.mercadopago.com.ar/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)<ar>![One Click Payment](/images/wp-ecommerce-order_cust_card.png)
* [Otros medios de pago, como por ejemplo Tickets](https://www.mercadopago.com.ar/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)<ar>![Tickets](/images/wp-ecommerce-order_ticket.png)

### Otras funcionalidades
* Credenciales y chequeos de estado de la plataforma.
* Páginas de success customizable
* Calculadora de cuotas
* Conversión de moneda
* Notificaciones de pago instantaneas y webhooks
* Herramientas de log y debug

# Instalación
Si el módulo ya se encuentra instalado, por favor seguir las [Instruciones de Actualización](#actualización) primero.

Se tienen dos opciones para instalar el módulo: Desde el Wordpress Store, o descargando y copiando manualmente el directorio del módulo.

### Instalar desde Wordpress

1. En el administrador de su tienda, ir a la opción *Plugins* en la lista;

2. Click en el botón *Add New* y escribir "WPeComm Mercado Pago Module" en el campo de *Search Plugins*.

3. Deberías encontrar el modulo listo para ser instalado. Click en instalar y listo!

### Descarga manual

1. Obtener la fuente del modulo desde el repositorio de (<a href="https://github.com/mercadopago/cart-wp-commerce/archive/master.zip">Github</a> ó desde el <a href="https://br.wordpress.org/plugins/wpecomm-mercado-pago-module/">"WordPress Plugin Directory"</a>);

2. Abrir la carpeta y buscar el directorio "wpecomm-mercado-pago-module" ;

3. Copiar el directorio "wpecomm-mercado-pago-module" en *[WordPressRootDirectory]/wp-content/plugins/* directory. Listo!

> Pista: Para confirmar si el módulo está realmente instalado, puedes hacer click en *Plugins* en el menú de administración de la tienda, y chequear que se ha instalado el mismo. Hacer click en *enable*/*habilitar* para activarlo y deberías recibir el mensaje de respuesta "Plugin enabled."/"Plugin habilitado ." en Wordpress.

# Configurando la Tarjeta de Crédito
Esta página explica como configurar el módulo para aceptar pagos con tarjeta de crédito en el Checkout personalizado. En el administrador de tu tienda, ir a *Configuración > Tienda > Pagos*. Hacer click en *Mercado Pago - Checkout personalizado*. Deberías obtener la siguiente página:

![Custom Checkout Config](/images/wp-ecommerce-custom_config_screenshot.png)

### Credenciales de Mercado Pago
  * Aquí se deberían ingresar la *Public Key* y *Access Token* correspondientes. Las credenciales son las que identifican al usuario en Mercado Pago.

### Opciones de checkout
Cómo se muestra el checkout.
  * *Statement Descriptor*: La descripción se mostrará en el invoice de su cliente;
  * *Modo binario*: Cuando se cobra con tarjeta de crédito, sólo estado [aprobado] o [rechazado] será tomado;
  * *Categoría de tienda*: Define la categoría de la tienda;
  * Identificador de tienda*: Un prefijo para identificar la tienda, cuando se tiene multiples tiendas para una sola cuenta de Mercado Pago;
  * *URL Pagos aprobados*: Customizar una URL para redireccionar cuando un pago es aprobado. Dejar en blanco para redireccionar a la tienda;
  * *URL Pagos pendientes*: Customizar una URL para redireccionar cuando un pago es rechazado. Dejar en blanco para redireccionar a la tienda;

### Opciones de pago
Como se comporta la opción de pago.
  * *Conversión de moneda*: Habilitar la conversión de la moneda para las ventas con checkout básico. La conversión de la moneda es una funcionalidad que permite setear una moneda no soportada en WP eCommerce mientras se mantiene a Mercado Pago como un método de pago. Se convertirá la moneda no soportada por la moneda establecida en el país local. Este servicio convierte valores en el momento y puede traer demoras en el servidor.

### Testeo y debug
Se ofrecen herramientas de logging para que se puedan analizar los problemas que puedan estar ocurriendo. Mantener deshabilitado si se está trabajando en producción con un sistema estable.
  * *Habilitar Sandbox*: Habilitar esta opción para activar el modo Sandbox;
  * *Modo Debug*: Habilitar esta opción para ver mensajes de log en tu consola.

# Configurando los Tickets
Esta página explicará como configurar el módulo para poder aceptar pagos con Tickets en el Checkout personalizado. En el administrador de su tienda, ir a *Settings > Store > Payments*. Hacer click en *Mercado Pago - Ticket*. Se debería obtener la siguiente página:

![Ticket Checkout Config](/images/wp-ecommerce-ticket_config_screenshot.png)

### Credenciales de Mercado Pago
  * Aquí se debería ingresar el *Access Token*, la credenciales que identifica a los usuarios en MaercadoPago.

### Opciones de checkout
Como se muestra el Checkout.
  * *Store Category*: Define la categoría de la tienda;
  * *Store Identificator*: Un prefijo para identificar tu tienda, cuando se tienen multiples tiendas para una sola cuenta de MercadoPago. ;
  * *URL Approved Payment*: Customizar la URL a ser redireccionado una vez que el pago es aprobado. Dejar en blanco para redireccionar a la tienda.;
  * *URL Pending Payment*: Customizar la URL a ser redireccionado cuando el pago es rechazado. Dejar en blanco para redireccionar a la tienda.

### Opciones de pago
Como se comportan las opciones de pago.
  * *Currency conversion*: Habilitar el modo de conversión de moneda para ventas conCheckout Básico. La conversión de moneda es una funcionalidad que te permite definir un tipo de moneda no soportada en WP eCommerce manteniendo a MercadoPago como método de pago. Se convertirá el tipo de moneda "no soportada" por la moneda que se utiliza en tu país. Un dato a tener en cuenta es que el servicio de conversión se hace en el momento, por lo que podría traer demoras adicionales a su servidor.

### Testeo y debug
Se ofrecen herramientas de logging que permiten analizar el problema que pueda llegar a estar ocurriendo. mantener deshabilitado si se está trabajando en producción con un sistema estable.
  * *Debug mode*: Habilitar para ver los mensajes de log en tu consola.

# Configurando el Checkout por Redirect, Iframe o LightBox
Esta página explicará como configurar el módulo para poder aceptar pagos con el Checkout básico en Redirect, Iframe or Lightbox. En el administrador de su tienda, ir a *Settings > Store > Payments*. Hacer click en *Mercado Pago - Basic Checkout*. Se debería obtener la siguiente página:

![Basic Checkout](/images/wp-ecommerce-basic_config_screenshot.png)

### Credenciales de Mercado Pago
  * Aquí se deberían ingresar el *Client ID* y *Client ID*, las credenciales que identifican a los usuarios en MaercadoPago.

### Opciones de checkout
Como se muestra el Checkout.
  * *Description*: Esta es la descripción de la opción de pago que se le mostrará al cliente.
  * *Store Category*: Define la categoría de la tienda;
  * *Store Identificator*: Un prefijo para identificar tu tienda, cuando se tienen multiples tiendas para una sola cuenta de MercadoPago. ;
  * *Integration Method*: como tus clientes van a interactuar con MercadoPago para pagar sus ordenes;
  * *iFrame Width*: El ancho, en pixeles del iFrame (usar solo con iFrame);
  * *iFrame Height*: La altura, en pixels del iFrame (usar solo con iFrame);
  * *Auto Return*: Si está definido, la plataforma volverá a tu tienda cuando el pago es aprovado;
  * *URL Approved Payment*: Customizar la URL a ser redireccionado una vez que el pago es aprobado. Dejar en blanco para redireccionar a la tienda.;
  * *URL Pending Payment*: Customizar la URL a ser redireccionado cuando el pago es rechazado. Dejar en blanco para redireccionar a la tienda.

### Opciones de pago
Como se comportan las opciones de pago.
  * *Max Installments*: La máxima cantidad de cuotas permitidas para tu cliente;
  * *Currency conversion*: Habilitar el modo de conversión de moneda para ventas conCheckout Básico. La conversión de moneda es una funcionalidad que te permite definir un tipo de moneda no soportada en WP eCommerce manteniendo a MercadoPago como método de pago. Se convertirá el tipo de moneda "no soportada" por la moneda que se utiliza en tu país. Un dato a tener en cuenta es que el servicio de conversión se hace en el momento, por lo que podría traer demoras adicionales a su servidor.
  * *Exclude Payment Methods*: Seleccionar los medios de pago que no quieres que funcionen con MercadoPago.

### Testeo y debug
Se ofrecen herramientas de logging que permiten analizar el problema que pueda llegar a estar ocurriendo. mantener deshabilitado si se está trabajando en producción con un sistema estable.
  * *Enable Sandbox*: Seleccionar esto para activar el modo de testeo de Sandbox;
  * *Debug mode*: Habilitar para ver los mensajes de log en tu consola.

# Configuraciones de las Notificaciones Instantáneas de Pago
Instant Payment Notifications (IPN) - Notificaciones instantáneas de pago- es un mecanismo que le permite a tu tienda recibir mensajes del servidor de MercadoPago sobre el status de un pago determinado. En este plugin, no necesitas preocuparte sobre IPN, debido a que ya se encuentra implementado y configurado por ti.

> HINT 1: Cuando configuras o testeas tus IPN/Webhooks y las comunicaciones del servidor está seguro que tu servidor pueda acceder al servidor de MercadoPago.

> HINT 2: Asegúrate que tu firewall tenga acceso al [IPs de MercadoPago](https://www.mercadopago.com.ar/developers/en/api-docs/basics/design-considerations#ip-range) dentro del white-list.

> HINT 3: Prestar atención a que Mercado Pago usa TSL protocol **version 1.0**, así que tu servidor necesita soportar/aceptar conexiones con esta versión del protocolo.

> HINT 4: Asegúrate que ningún otro plugin instalado esté bloqueando el de MercadoPago.

# Actualización
Si ya has instalado una versión previa del módulo de MercadoPago WPeComm, por favor sigue las siguientes instrucciones. En la misma manera que se realiza la instalación, se tienen dos opciones: desde tu tienda de WordPress, o al descargar y manualmente copiar el directorio del módulo.

### Actualizaciones desde WordPress
1. En el administrador de tu cuenta, ir a la opción de *Plugins* en sobre la izquierda;
2. Hacer click en el botón *update now* en la ventana del dashboard;
3. En unos pocos segundos debería estar instalado, y mostrando un mensaje de *Updated!* .

### Actualización con descarga manual
1. Obtén la fuente del módulo desde el repositorio (<a href="https://github.com/mercadopago/cart-wp-commerce/archive/master.zip">Github</a> ó <a href="https://br.wordpress.org/plugins/wpecomm-mercado-pago-module/">WordPress Plugin Directory</a>);
2. Descomprime la carpeta y busca el directorio "wpecomm-mercado-pago-module";
3. Ir al directorio *[WordPressRootDirectory]/wp-content/plugins/* y borrar el directorio existente "wpecomm-mercado-pago-module";
4. Copiar el directorio "wpecomm-mercado-pago-module" a *[WordPressRootDirectory]/wp-content/plugins/* .

Para confirmar que tu modulo está realmente actualizado, puedes ver en el item *Plugins* en el menú del administrador de tu cuenta, y chequear que has actualizado el módulo. la versión debería coincidir con la que has actualizado.

> HINT: Siempre recordar hacer un backup de tu data y sistema antes de hacer cualquier cambio.


# Soporte Técnico
Si tienes alguna pregunta, problema o error tenemos un canal de soporte. Contáctanos a nuestro canal de [soporte](/support) con la siguiente información:

* Email de tu cuenta de Mercado Pago;
* Detalles sobre tu consulta, problema o error;
* Archivos que ayuden al entendimiento del problema (Print-Screen, Video, Log Files, etc.);
* Version de WPeCommerce;
* Versión del modulo, si estás usando.

> HINT: Puedes obtener la versión del modulo en la lista de plugin de tu página de administración de WordPress:
>
> ![Developer](/images/wp-ecommerce-plugin_adm.png)

# Cómo Contribuir
Aquí hay algunos tips para ayudar con el desarrollo y mantenimiento del proyecto.

## Clonar para desarrollo:

Ir a `wp-content/plugins` bajo tu desarrollo de la instalación de Wordpress y clonar el repositorio utilizando el siguiente comando:

```bash
git clone git@github.com:mercadopago/cart-wp-commerce.git wpecomm-mercado-pago-module
```

## Actualizar la Wiki

### Clonando

```bash
git clone git@github.com:mercadopago/cart-wp-commerce.wiki.git
```

### Árbol de directorio y archivos

```
├── English
├── _Footer.md
├── Home.md
├── images
├── Portugues
└── Espanol

```

Los directorios `English`, `Portugues`, y `Español` contienen docummentación específica para cada lenguaje.

Es posible generar nuevos archivos en cada directorio de la siguiente forma:

```
Click en English/New-Wiki-Page.md
```

Esto generará una página de Wiki con el mismo nombre de `New Wiki Page`.

Para imágenes deberíamos utilizar las `imágenes` del directorio y utilizar la siguiente sintaxis para linkear cada imagen en el contenido:

```
[[/images/image-name.png|Alt text]]
```
