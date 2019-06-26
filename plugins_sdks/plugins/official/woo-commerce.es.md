# WooCommerce


## Mercado Pago Module (WooCommerce 3.x)

* [Funcionalidades](#bookmark_Funcionalidades)
* [Requisitos](#bookmark_Requisitos)
* [Versiones](#bookmark_Versiones)
* [Instalación](#bookmark_Instalación)
* [Configuración](#bookmark_Configuración)
* [Notificaciones](#bookmark_Notificaciones)
* [Actualización](#bookmark_Actualización) 



## Funcionalidades

El módulo de Mercado Pago para WooCommerce está integrado con las siguientes características y soluciones de pago:

| Funcionalidad                                             | Checkout Básico   | Checkout Transparente   |
|---------------------------------------------------------- |-------------------|-------------------------|
| Pago con Tarjeta de Crédito                               | ✔                 | ✔                       |
| Otros medios de pago, como boletos                        | ✔                 | ✔                       |
| Pago con dos medio                                        | ✔                 | ✔                       |
| Reembolsos/Cancelaciones de Pagos                         |                   |                         |
| Pago con Un Clic (Clientes y Tarjetas)                    |                   | ✔                       |
| Interfaces Preconstruídas de Mercado Pago                 | ✔                 |                         |
| Calculadora de cuotas                                     | ✔                 | ✔                       |
| IPN y webhooks                                            | ✔                 | ✔                       |
| Descuentos por método de pago o cupón de Mercado pagos    | ✔                 |                         |
| Guardado de Tarjetas                                      | ✔                 | ✔                       |
| Mercado Envíos                                            | ✔                 |                         |
| Suscripciones                                             | ✔                 |                         |
| Verificaciones de credenciales y estado de la plataforma. | ✔                 | ✔                       |
| Página de éxito personalizable.                           |                   | ✔                       |
| Conversión de moneda.                                     |                   | ✔                       |
| Log y herramientas de debug                               | ✔                 | ✔                       |


## Requisitos del Sistema

|                             	| Detalle                                                                  	|
|-----------------------------	|--------------------------------------------------------------------------	|
| Versiones soportadas        	| WordPress 3.1.x - 4.9.x, WooCommerce 2.6.x - 3.4.x                       	|
| Ambiente                    	| LAMP (Linux, Apache, MySQL e PHP)                                        	|
| Sistema                     	| Linux x86, x86-64                                                        	|
| Servidor Web                	| Apache 2.x                                                               	|
| Version PHP                 	| 5.6 o superior con soporte a curl                                        	|
| Base de datos               	| MySql 5.6 o superior, MariaDB 10.0 o superior                            	|
| Dependencias de extensiones 	| WooComerce                                                               	|
| Configuración adicional     	| safe_mode off, memory_limit mayor que 256 MB                             	|
| SSL                         	| Certificado SSL es pre requisito para usar tarjetas de crédito o boletos 	|

>Es un requisito tener un certificado SSL y el formulario de pago que servido en una página HTTPS. Durante las pruebas en modo sandbox usted puede operar vía HTTP, pero para la homologación usted necesitará adquirir el certificado si no lo tiene.


## Versiones

| Plugin Version                                                                          | Estatus                    | Versión del módulo    |
|-----------------------------------------------------------------------------------------|----------------------------|-----------------------|
| [v3.x](https://github.com/mercadopago/cart-woocommerce/archive/master.zip)              | Estable (Current Version)  | WooCommerce 3.x       |

# Instalación

> NOTE
>
> Nota
>
> Si ya tiene el módulo instalado, siga las [Instrucciones de Actualización](#actualización) primero.

Usted tiene dos opciones para instalar este módulo: desde su tienda de WordPress, o descargando y copiando manualmente el directorio del módulo.

### Instalar desde WordPress

1. En la administración de su tienda, vaya a la opción *Plugins* en la barra lateral;

2. Haga clic en el botón * Añadir Nuevo* y escriba "WooCommerce MercadoPago" en el campo de texto *Buscar Plugins*. Pressiona Enter;

3. Deberás encontrar el módulo listo para ser instalado. Haga clic en instalar. ¡Está hecho!

![Installing Mercado Pago with Wordpress](/images/woocommerce_install_plugin.gif)

### Descarga manual

1. Obtenga las fuentes del módulo desde un repositorio (<a href="https://github.com/mercadopago/cart-woocommerce/archive/master.zip">Github</a> o <a href="https://br.wordpress.org/plugins/woocommerce-mercadopago/">WordPress Plugin Directory</a>);

2. Descomprimir la carpeta y cambie su nombre a "woocommerce-mercadopago";

3. Copie el directorio "woocommerce-mercadopago" en el directorio *[WordPressRootDirectory]/wp-content/plugins/*. ¡Está hecho!

> CONSEJO: Para confirmar que su módulo está realmente instalado, puede hacer clic en el item *Plugins* en el menú lateral de administración de la tienda y verificar el módulo que acaba de instalar. Simplemente haga clic en *activar* para activarlo y deberás recibir la mensaje "Plugin activado." como un aviso en tu WordPress.

![Installing Mercado Pago manually in Wordpress](/images/woocommerce_activate_plugin.gif)

# Configuración

En primer lugar, asegúrese de que el plugin WooCommerce MercadoPago está habilitado, haciendo clic en el item *Plugins* en la barra lateral de WordPress, como se muestra a continuación:

![Enabling Mercado Pago in Woocommerce plugins](/images/woocommerce-plugins_menu.png)

Ahora, en la barra lateral de WordPress, haga clic en la opción *Configuración > Mercado Pago*. Usted debe obtener la siguiente página:

![Mercado Pago configuration page in Woocommerce](/images/woocommerce-mercadopago_config.png)

Esta ventana muestra la configuración principal del plugin WooCommerce MercadoPago, donde puede verificar y configurar lo siguiente:

### Estado del Plugin y Opciones de Pago

Es la parte superior de la ventana. Muestra los estados de la plataforma y la consistencia del sistema para usar este plugin. Además, hay botones que sirven como atajos para los gateways de pago que se ofrecen. Es una buena idea tener todo los campos con un icono de verificación verde.

### Checkout Básico & Suscripciones

  * Aquí debe colocar sus claves *Client Id* y *Client Secret*, las credenciales que le identifican de forma exclusiva en Mercado Pago. El *Client Id* y *Client Secret* se usan para los métodos de pago de Checkout Básico y Suscripciones;
  * Además, solo abajo, puede activar el modo de conversión de moneda para las ventas con Checkout Básico y suscripciones. La conversión de moneda es una función que le permite hacer uso de una moneda no admitida en WooCommerce mientras mantenendo Mercado Pago como medio de pago. El plugin convertirá la moneda no soportada para la moneda utilizada en su país. Preste atención porque este servicio convierte on-the-fly los montos en tiempo real y puede traer algún retraso adicional a su servidor.

### Checkout Customizado & Tickets

  * Aquí debe colocar sus claves *Public Key* y *Access Token*, las credenciales que le identifican de forma exclusiva en Mercado Pago. El *Public Key* y *Access Token* se usan para los métodos de pago de Checkout Customizado y Tickets;
  * Además, solo abajo, puede activar el modo de conversión de moneda para las ventas con Checkout Customizado y Tickets. La conversión de moneda es una función que le permite hacer uso de una moneda no admitida en WooCommerce mientras mantenendo Mercado Pago como medio de pago. El plugin convertirá la moneda no soportada para la moneda utilizada en su país. Preste atención porque este servicio convierte on-the-fly los montos en tiempo real y puede traer algún retraso adicional a su servidor.

### Asignación de Estados de Pagos x Pedidos

Puede asignar un estado de pago a un estado de pedido. Sólo haga cambios acá en caso de que usted esté completamente consciente de lo que está haciendo.

### Configuración de la Tienda

Estos campos son campos generales de su tienda.
  * *Descripción de la Factura*: La descripción que se mostrará en la factura de su cliente;
  * *Categoría de la Tienda*: Configura la categoría de la tienda;
  * *Identificador de Tienda*: Un prefijo para identificar su tienda, cuando tiene varias tiendas para una sola cuenta de Mercado Pago.

### Opciones de Prueba y Debug

Ofrece herramientas de registro para que pueda analizar problemas que puedan estar ocurriendo. Manténgalo desactivado si trabaja en producción con un sistema estable.

# Configurando la Tarjeta de Crédito
En esta página se explica cómo configurar el módulo para aceptar pagos con Tarjeta de Crédito de Checkout Customizado. En la administración de su tienda, vaya a ficha *WooCommerce > Configuración > Checkout*. En *Opciones de Checkout*, haga clic en *Mercado Pago - Checkout Personalizado*. Usted debe obtener la siguiente página:

![Setting up credit card in Woocommerce](/images/woocommerce-custom_checkout_config.png)

Si ha configurado correctamente sus credenciales en configuraciones Generales de Mercado Pago, puede ahora personalizar su checkout por Tarjeta de Crédito:

### Interface de Checkout

Cómo se muestra el pago.
  * *Título*: Este es el título de la opción de pago que se mostrará a sus clientes;
  * *Descripción*: Esta es la descripción de la opción de pago que se mostrará a sus clientes.

### Opciones de Pago

Cómo se comporta la opción de pago.
  * *Cupones*: habilitar cupones de campañas para descuentos;
  * *Modo Binario*: Al cargar una Tarjeta de Crédito, solo se aceptará el estado [aprobado] o [rechazado];
  * *Descuento por Gateway*: Ofrece un descuento porcentual para sus clientes si utilizan Tarjetas de Crédito como medio de pago.

# Configurando los Tickets
En esta página se explica cómo configurar el módulo para aceptar pagos con Tickets de Checkout Customizado. En la administración de su tienda, vaya a ficha *WooCommerce > Configuración > Checkout*. En *Opciones de Checkout*, haga clic en *Mercado Pago - Ticket*. Usted debe obtener la siguiente página:

![Setting tickets in Woocommerce](/images/woocommerce-ticket_checkout_config.png)

Si ha configurado correctamente sus credenciales en configuraciones Generales de Mercado Pago, puede ahora personalizar su checkout por Ticket:

### Interface de Checkout
Cómo se muestra el pago.
  * *Título*: Este es el título de la opción de pago que se mostrará a sus clientes;
  * *Descripción*: Esta es la descripción de la opción de pago que se mostrará a sus clientes.

### Opciones de Pago
Cómo se comporta la opción de pago.
  * *Cupones*: habilitar cupones de campañas para descuentos;
  * *Reducir el Inventario*: Reduce el inventario cuando se crea el pedido en lugar de cuando se realiza el pago;
  * *Descuento por Gateway*: dar un descuento porcentual para sus clientes si utilizan Tickets como medio de pago.

# Configurando el Checkout por Redirect, Iframe o LightBox
En esta página se explica cómo configurar el módulo para aceptar pagos con el Checkout Básico en Redireccionamiento, Iframe o Lightbox. En la administración de su tienda, vaya a la ficha *WooCommerce > Configuración > Checkout*. En *Opciones de Checkout*, haga clic en *Mercado Pago - Checkout Básico*. Usted debe obtener la siguiente página:

![Setting tickets in Woocommerce](/images/woocommerce-basic_checkout_config.png)

Si ha configurado correctamente sus credenciales en configuraciones Generales de Mercado Pago, puede ahora personalizar su checkout por Checkout Básico:

### Interface de Checkout
Cómo se muestra el pago.
  * *Título*: Este es el título de la opción de pago que se mostrará a sus clientes;
  * *Descripción*: Esta es la descripción de la opción de pago que se mostrará a sus clientes.
  * *Medio de Integración*: Cómo sus clientes interactúan con Mercado Pago para pagar sus pedidos;
  * *Ancho del iFrame*: El ancho, en píxeles, del iFrame (utilizado sólo con el Medio de Integración de iFrame);
  * *Altura del iFrame*: La altura, en píxeles, del iFrame (utilizado sólo con el Medio de Integración de iFrame).

### Navegación del Checkout
Cómo se comportarán las navegaciones de pago.
  * *Retorno Automático*: Si habilitado, la plataforma volverá a su tienda cuando se apruebe el pago;
  * *URL de Éxito*: Personaliza una URL que se redirigirá cuando se apruebe un pago. Deje en blanco para redirigir a la tienda;
  * *URL de Error*: Personaliza una URL para ser redirigida cuando un pago ha fallado. Deje en blanco para redirigir a la tienda;
  * *URL para Pendiente*: Personaliza una URL para ser redirigida cuando hay un pago pendiente. Deje en blanco para redirigir a la tienda.

### Opciones de Pago
Cómo se comporta la opción de pago.
  * *Cuota Maxima*: Lo máximo de cuotas permitidas para sus clientes;
  * *Excluir Medios de Pago*: Seleccione los medios de pago que desea no trabajar con Mercado Pago;
  * *Descuento por Gateway*: Ofrece un descuento porcentual para sus clientes si utilizan Checkout Básico como medio de pago;
  * *Modo de Dos Tarjetas*: Permite que sus clientes paguen con dos tarjetas diferentes.

# Configurando Mercado Envíos
En esta página se explica cómo configurar el módulo para aceptar Mercado Envíos.

### Habilite Mercado Envíos
Para utilizar Mercado Envíos, [debe habilitarlo en su cuenta de Mercado Pago.](http://shipping.mercadopago.com.ar/optin/doOptin).

### Cree la zona y los medios de envío
Para usar Mercado Envíos, necesita que lo configure como un medio de envío en WooCommerce. Sólo tienes que seguir los siguientes pasos:

1. En la administración de su tienda, vaya a la ficha *WooCommerce > Configuración > Envío*. En *Zona de Envío*, haga clic en *Agregar zona de envío*. Introduzca el nombre de la zona, seleccione las regiones dentro de esta zona y haga clic en *Guardar cambios*.<br>![Creating the Shipping Zone of the Mercado envios in Woocommerce](/images/woocommerce-me_0.png)
2. Haga clic en *ver* de la zona creada.<br>![Created zone settings in Woocommerce](/images/woocommerce-me_1.png)
3. Haga clic en *Agregar medio de envío* y seleccione *Mercado Envíos - Normal* o *Mercado Envíos - Express*. Este proceso tiene que ser repetido dos veces, hasta que normal y expreso sean configurados.<br>![Adding Mercado Envios as Shipping Method in Woocommerce](/images/woocommerce-me_2.png)
4. Ahora usted puede también fijar la opción *Envío Gratis* y/o mostrar el *Tiempo de Entrega* estimado en el cálculo del envío.<br>![Setting free shipping and delivery time](/images/woocommerce-me_3.png)
5. Mercado Envíos está listo para su uso, pero no olvide habilitar *Checkout Básico* para el correcto funcionamiento de *Mercado Envíos* e informar las dimensiones de sus productos.<br>![Mercado Envios ready for use](/images/woocommerce-me_4.png)

> IMPORTANTE 1: Su cuenta de Mercado Pago debe ser una *Cuenta de Vendedor*;

> IMPORTANTE 2: Por el momento, Mercado Envíos está disponible sólo para Argentina, Brasil y México, y solo se puede usar en Checkout Básico;

> IMPORTANTE 3: El producto que se envía debe tener sus dimensiones (anchura, altura, longitud y peso) debidamente configurados y dentro de los límites soportados del país en cuestión.

# Configurando las Suscripciones
En esta página se explica cómo configurar el módulo para aceptar Suscripciones con pagos recurrentes. En la administración de su tienda, vaya a la ficha *WooCommerce > Configuración > Checkout*. En *Opciones de Checkout*, haga clic en *Mercado Pago - Suscripción*. Usted debe obtener la siguiente página:

![Setting Subscription in Woocommerce](/images/woocommerce-subscription_checkout_config.png)

Si ha configurado correctamente sus credenciales en configuraciones Generales de Mercado Pago, puede ahora personalizar su checkout por Suscripciones:

### Interface de Checkout
Cómo se muestra el pago.
  * *Título*: Este es el título de la opción de pago que se mostrará a sus clientes;
  * *Descripción*: Esta es la descripción de la opción de pago que se mostrará a sus clientes.
  * *Medio de Integración*: Cómo sus clientes interactúan con Mercado Pago para pagar sus pedidos.
  * *Ancho del iFrame*: El ancho, en píxeles, del iFrame (utilizado sólo con el Medio de Integración de iFrame).
  * *Altura del iFrame*: La altura, en píxeles, del iFrame (utilizado sólo con el Medio de Integración de iFrame).

### Navegación del Checkout
Cómo se comportarán las navegaciones de pago.
  * *URL de Notificación Instantánea de Pago (IPN)*: En esta parte, puede verificar su URL de IPN, donde recibirá notificaciones sobre las actualizaciones de pago. Para esta solución, debe configurar una URL de IPN en su cuenta de Mercado Pago. Tome nota de su URL, haga clic en el link de su país y coloque la URL en el campo solicitado. Entonces guárdelo;
  * *URL de Éxito*: Personaliza una URL que se redirigirá cuando se apruebe un pago. Deje en blanco para redirigir a la tienda;
  * *URL de Error*: Personaliza una URL para ser redirigida cuando un pago ha fallado. Deje en blanco para redirigir a la tienda;
  * *URL para Pendiente*: Personaliza una URL para ser redirigida cuando hay un pago pendiente. Deje en blanco para redirigir a la tienda.

### Opciones de Pago
Cómo se comporta la opción de pago.
  * *Descuento por Gateway*: Ofrece un descuento porcentual para sus clientes si utilizan Suscripciones como medio de pago.

### Creación de un Producto Asignable
Una suscripción necesita un tipo especial de producto, que será vendido periódicamente. Puede configurar un producto para que se pueda asignar siguiendo los siguientes pasos:
1. Vaya a *Productos* en el menú lateral y haga clic en el botón *Agregar Producto*. La página abierta debe contener los detalles del producto y los campos en la ventana *Datos del Producto*;<br>![Setting subscription products pages](/images/woocommerce-subscription_checkout_product.png)
2. Completa la información de su producto (nombre, precio, imágenes, etc) y entonces marque el checkbox *Producto Recurrente*;
3. Llene los campos de información para la suscripción: *Frecuencia* (frecuencia que los cobros se harán a su cliente), *Tipo de Frecuencia* (el tipo de frecuencia puede estar en [Días] o [Meses]) y *Fecha de Finalización* (fecha en que debe finalizar la suscripción).

> IMPORTANTE: Una suscripción debe ser única en el carrito del cliente. Los clientes sólo pueden asignar un producto por vez, y no puede mezclarse con otros productos que no sean asignables.

# Notificaciones
La Notificaciones Instantáneas de Pago (IPN) es un mecanismo que permite a su tienda recibir mensajes del servidor de Mercado Pago sobre el estado de un pago determinado. En este plugin, no necesita preocuparse por la configuración de IPN ya que ya está implementada y configurada para usted.

### Configuración de IPN para Suscripciones
Suscripción es el único gateway que debe configurar la IPN para recibir correctamente notificaciones en su servidor. Para configurarlo, haga lo siguiente:

1. En la administración de su tienda, acceda a *WooCommerce > Configuración > Checkout* y entonces, en las opciones de gateway listada, seleccione *Mercado Pago - Suscripciones*;

2. Tome nota de la URL informada en el campo *URL de Notificación Instantánea de Pago (IPN)* y acceda al ambiente de IPN/Webhook para su país: [Argentina](https://www.mercadopago.com.ar/ipn-notifications), [Brasil](https://www.mercadopago.com.br/ipn-notifications), o [México](https://www.mercadopago.com.mx/ipn-notifications);

3. Inserte la URL en el campo y haga clic en el botón *Guardar*. Recibirá un mensaje que le notificará si Mercado Pago accedió correctamente a su servidor y recibió una respuesta válida. Si todo está OK, deberá recibir un mensaje de confirmación.

> CONSEJO 1: Al configurar o probar sus IPN/Webhooks y comunicaciones de servidor, asegúrese de que su servidor pueda acceder al servidor de Mercado Pago.

> CONSEJO 2: Preste atención a que Mercado Pago utiliza el protocolo TSL versión 1.2, por lo que su servidor necesita soportar/aceptar conexiones con esta versión de protocolo.

> CONSEJO 3: Asegúrese de que cualquier otro plugin de WordPress no intenta bloquear Mercado Pago.

# Actualización
Si ya ha instalado una versión anterior de WooCommerce Mercado Pago, siga las instrucciones. De la misma manera de la instalación, de nuevo tienes dos opciones: desde tu tienda de WordPress, o descargando y copiando manualmente el directorio del módulo.

### Actualización desde WordPress
1. En la administración de su tienda, vaya a la opción *Plugins* en la barra lateral;
2. Haga clic en el botón *actualizar ahora* en la ventana del panel de control del plugin;
3. En pocos segundos se debe haber instalado con el mensaje *Updated!*.

### Actualización con Descarga Manual
1. Obtenga el código fuente del módulo desde nuestro repositorio [Github](https://github.com/mercadopago/cart-woocommerce/archive/master.zip) o desde [WordPress Plugin Directory](https://l.wordpress.org/plugins/WooCommerce-MercadoPago/);
2. Descomprima la carpeta y cambie su nombre para "woocommerce-mercadopago";
3. Vaya al directorio *[WordPressRootDirectory]/wp-content/plugins/* y elimine el directorio existente "woocommerce-mercadopago";
4. Copie el directorio "woocommerce-mercadopago" en el directorio *[WordPressRootDirectory]/wp-content/plugins/*.

### Actualización de 2.x a 3.x
Antes de actualizar, por favor, considere lo siguiente:
* Esta es una gran actualización (2.x a 3.x) y además estamos migrando el slugname del proyecto en WordPress Plugin Directory, entonces crear un backup de su sitio y de sus datos puede ser una buena idea;
* En la actualidad, la actualización consiste en los siguientes pasos:
    1. Desactivar el plugin Woo Mercado Pago Module;
    2. Desinstalar el plugin Woo Mercado Pago Module;
    3. Instalar el plugin WooCommerce MercadoPago;
    4. Activar el plugin WooCommerce MercadoPago;
    5. Configurar el plugin WooCommerce MercadoPago.
* Usted puede obtener la versión 3.x en el link: https://wordpress.org/plugins/woocommerce-mercadopago/;
* Lo cuanto antes estaremos proporcionando una migración nativa como una funcionalidad para la versión 2.x.

Para confirmar que su módulo está realmente actualizado, usted puede verlo en el item *Plugins* en el menú de administración de la tienda, verificando el módulo que acaba de actualizar. La versión debe coincidir con el plugin recién actualizado.

> CONSEJO: Recuerde siempre de hacer una copia de seguridad (backup) de su sistema y datos antes de realizar cualquier cambio.
