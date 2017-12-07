![Mercado Pago](https://raw.githubusercontent.com/mercadopago/cart-woocommerce/master/assets/images/mplogo.png)

# Módulo de integración de Mercado Pago para WooCommerce
* [Requisitos del Sistema](#requisitos-del-sistema)
* [Funcionalidad](#funcionalidad)
* [Instalación](#instalación)
* [Configuraciones Generales de Mercado Pago](#configuraciones-generales-de-mercado-pago)
* Checkout Personalizado
  * [Configurando la Tarjeta de Crédito](#configurando-la-tarjeta-de-crédito)
  * [Configurando los Tickets](#configurando-los-tickets)
* Checkout Básico
  * [Configurando el Checkout por Redirect, Iframe o LightBox](#configurando-el-checkout-por-redirect-iframe-o-lightBox)
  * [Configurando el Mercado Envios](#configurando-el-mercado-envios)
  * [Configurando las Suscripciones](#configurando-las-suscripciones)
* [Configuraciones de las Notificaciones Instantáneas de Pago](#configuraciones-de-las-notificaciones-instantáneas-de-pago)
* [Actualización](#actualización)
* [FAQ](#faq)
* [Soporte Técnico](#soporte-técnico)
* [Cómo Contribuir](#cómo-contribuir)

# Requisitos del Sistema
### Versión de la Plataforma
* <a href="https://wordpress.org/download/">WordPress</a> 3.1.x - 4.7.x
* <a href="https://wordpress.org/plugins/woocommerce/">WooCommerce</a> 2.6.x - 3.1.x

### Ambiente
* LAMP (Linux, Apache, MySQL, y PHP)

### Sistema Operacional
* Linux x86
* x86-64

### Servidor Web
* <a href="https://httpd.apache.org/">Apache 2.x</a>

### Alojamiento
* Puede sobreescribir el archivo .htaccess

### Versiones de PHP
* <a href="http://php.net/">PHP</a> 5.6 o mayor, con soporte para cURL

### MySQL Versiones
* <a href="http://www.mysql.com/">MySQL</a> version 5.6 or greater OR <a href="https://mariadb.org/">MariaDB</a> versión 10.0 o superior

### Dependencias de Extensión
* WooCommerce

### Ajustes Adicionales
* safe_mode off
* memory_limit mayor que 256MB (512MB es el recomendado)

### SSL
* Para tarjetas de crédito y boletos, es un requisito que usted tenga un certificado SSL.

# Funcionalidad
El módulo de Mercado Pago para WooCommerce está integrado con las siguientes características y soluciones de pago:

### [Checkout Básico (Redirección, Iframe o Lightbox)](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)
* Interfaces Preconstruidas de Mercado Pago<br>![Checkout Básico](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/basic_checkout_payment.png)
* [Reembolsos/Cancelaciones de Pagos](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/refund-cancel#refund)
* Pagos Divididos (Dos Tarjetas)
* [Suscripciones](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/subscriptions/)
* [Mercado Envios](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)

### Checkout Personalizado
* [Pago con Tarjeta de Crédito](https://www.mercadopago.com.br/developers/en/solutions/payments/basic-checkout/receive-payments/)<br>![Checkout Personalizado](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/custom_checkout_form.png)
* [Pago con Un Clic (Tarjeta del Cliente)](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/one-click-charges/javascript/)<br>![Pago con Un Clic](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/oneclick_form.png)
* [Reembolsos/Cancelaciones de Pagos](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/refund-cancel#refund)
* [Otros Medios de Pago, Como los Tickets](https://www.mercadopago.com.br/developers/en/solutions/payments/custom-checkout/charge-with-other-methods/)<br>![Tickets](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/ticket.png)

### Otras Funcionalidades
* Verificaciones de credenciales y estado de la plataforma
* Página de éxito personalizable
* Calculadora de cuotas
* Conversión de moneda
* Notificación instantánea de pago y webhooks
* Descuentos por método de pago o cupón de Mercado Pago
* Herramientas de registro y depuración

# Instalación
Si ya tiene el módulo instalado, siga las [Instrucciones de Actualización](#actualización) primero.

Usted tiene dos opciones para instalar este módulo: desde su tienda de WordPress, o descargando y copiando manualmente el directorio del módulo.

### Instalar desde WordPress

1. En la administración de su tienda, vaya a la opción *Plugins* en la barra lateral;

2. Haga clic en el botón * Añadir Nuevo* y escriba "WooCommerce MercadoPago" en el campo de texto *Buscar Plugins*. Pressiona Enter;

3. Deberás encontrar el módulo listo para ser instalado. Haga clic en instalar. ¡Está hecho!

### Descarga manual

1. Obtenga las fuentes del módulo desde un repositorio (<a href="https://github.com/mercadopago/cart-woocommerce/archive/master.zip">Github</a> o <a href="https://br.wordpress.org/plugins/woocommerce-mercadopago/">WordPress Plugin Directory</a>);

2. Descomprimir la carpeta y cambie su nombre para "woocommerce-mercadopago";

3. Copie el directorio "woocommerce-mercadopago" en el directorio *[WordPressRootDirectory]/wp-content/plugins/*. ¡Está hecho!

> CONSEJO: Para confirmar que su módulo está realmente instalado, puede hacer clic en el item *Plugins* en el menú lateral de administración de la tienda y verificar el módulo que acaba de instalar. Simplemente haga clic en *activar* para activarlo y deberás recibir la mensaje "Plugin activado." como un aviso en tu WordPress.

# Configuraciones Generales de Mercado Pago
Esta página explica cómo hacer la configuración generale de Mercado Pago para este módulo. En primer lugar, asegúrese de que el plugin WooCommerce MercadoPago está habilitado, haciendo clic en el item *Plugins* en la barra lateral de WordPress, como se muestra a continuación:

![Plugin Menu](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/plugins_menu.png)

Ahora, en la barra lateral de WordPress, haga clic en la opción *Configuración > Mercado Pago*. Usted debe obtener la siguiente página:

![Mercado Pago Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/mercadopago_config.png)

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

![Custom Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/custom_checkout_config.png)

Si ha configurado correctamente sus credenciales en [Configuraciones Generales de Mercado Pago](#configuraciones-generales-de-mercado-pago), puede ahora personalizar su checkout por Tarjeta de Crédito:

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

![Ticket Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/ticket_checkout_config.png)

Si ha configurado correctamente sus credenciales en [Configuraciones Generales de Mercado Pago](#configuraciones-generales-de-mercado-pago), puede ahora personalizar su checkout por Ticket:

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

![Basic Checkout](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/basic_checkout_config.png)

Si ha configurado correctamente sus credenciales en [Configuraciones Generales de Mercado Pago](#configuraciones-generales-de-mercado-pago), puede ahora personalizar su checkout por Checkout Básico:

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

# Configurando el Mercado Envios
En esta página se explica cómo configurar el módulo para aceptar Mercado Envios.

### Habilite su Mercado Envios
Para utilizar Mercado Envios, debe habilitarlo en su cuenta de Mercado Pago. Puede hacerlo, de acuerdo con su país, en los siguientes links:
  * *Argentina*: http://shipping.mercadopago.com.ar/optin/doOptin
  * *Brasil*: http://shipping.mercadopago.com.br/optin/doOptin
  * *México*: http://shipping.mercadopago.com.mx/optin/doOptin

### Cree la Zona de Envío y los Medios de Envío
Para usar Mercado Envios, necesita que lo configure como un medio de envío en WooCommerce. Sólo tienes que seguir los siguientes pasos:

1. En la administración de su tienda, vaya a la ficha *WooCommerce > Configuración > Envío*. En *Zona de Envío*, haga clic en *Agregar zona de envío*. Introduzca el nombre de la zona, seleccione las regiones dentro de esta zona y haga clic en *Guardar cambios*.<br>![Mercado Envios 0](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/me_0.png)
2. Haga clic en *ver* de la zona creada.<br>![Mercado Envios 1](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/me_1.png)
3. Haga clic en *Agregar medio de envío* y seleccione *Mercado Envios - Normal* o *Mercado Envios - Express*. Este proceso tiene que ser repetido dos veces, hasta que normal y expreso sean configurados.<br>![Mercado Envios 2](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/me_2.png)
4. Ahora usted puede también fijar la opción *Envío Gratis* y/o mostrar el *Tiempo de Entrega* estimado en el cálculo del envío.<br>![Mercado Envios 3](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/me_3.png)
5. Mercado Envios está listo para su uso, pero no olvide habilitar *Checkout Básico* para el correcto funcionamiento de *Mercado Envios* e informar las dimensiones de sus productos.<br>![Mercado Envios 4](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/me_4.png)

> IMPORTANTE 1: Su cuenta de Mercado Pago debe ser una *Cuenta de Vendedor*;

> IMPORTANTE 2: Por el momento, Mercado Envios está disponible sólo para Argentina, Brasil y México, y solo se puede usar en Checkout Básico;

> IMPORTANTE 3: El producto que se envía debe tener sus dimensiones (anchura, altura, longitud y peso) debidamente configurados y dentro de los límites soportados del país en cuestión.

# Configurando las Suscripciones
En esta página se explica cómo configurar el módulo para aceptar Suscripciones con pagos recurrentes. En la administración de su tienda, vaya a la ficha *WooCommerce > Configuración > Checkout*. En *Opciones de Checkout*, haga clic en *Mercado Pago - Suscripción*. Usted debe obtener la siguiente página:

![Subscription Checkout Config](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/subscription_checkout_config.png)

Si ha configurado correctamente sus credenciales en [Configuraciones Generales de Mercado Pago](#configuraciones-generales-de-mercado-pago), puede ahora personalizar su checkout por Suscripciones:

### Interface de Checkout
Cómo se muestra el pago.
  * *Título*: Este es el título de la opción de pago que se mostrará a sus clientes;
  * *Descripción*: Esta es la descripción de la opción de pago que se mostrará a sus clientes.
  * *Medio de Integración*: Cómo sus clientes interactúan con Mercado Pago para pagar sus pedidos;
  * *Ancho del iFrame*: El ancho, en píxeles, del iFrame (utilizado sólo con el Medio de Integración de iFrame);
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

# Creación de un Producto Asignable
Una suscripción necesita un tipo especial de producto, que será vendido periódicamente. Puede configurar un producto para que se pueda asignar siguiendo los siguientes pasos:
1. Vaya a *Productos* en el menú lateral y haga clic en el botón *Agregar Producto*. La página abierta debe contener los detalles del producto y los campos en la ventana *Datos del Producto*;<br>![Subscription Checkout Product](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/subscription_checkout_product.png)
2. Completa la información de su producto (nombre, precio, imágenes, etc) y entonces marque el checkbox *Producto Recurrente*;
3. Llene los campos de información para la suscripción: *Frecuencia* (frecuencia que los cobros se harán a su cliente), *Tipo de Frecuencia* (el tipo de frecuencia puede estar en [Días] o [Meses]) y *Fecha de Finalización* (fecha en que debe finalizar la suscripción).

> IMPORTANTE: Una suscripción debe ser única en el carrito del cliente. Los clientes sólo pueden asignar un producto por vez, y no puede mezclarse con otros productos que no sean asignables.

# Configuraciones de las Notificaciones Instantáneas de Pago
La Notificaciones Instantáneas de Pago (IPN) es un mecanismo que permite a su tienda recibir mensajes del servidor de Mercado Pago sobre el estado de un pago determinado. En este plugin, no necesita preocuparse por la configuración de IPN ya que ya está implementada y configurada para usted.

### Configuración de IPN para Suscripciones
Suscripción es el único gateway que debe configurar la IPN para recibir correctamente notificaciones en su servidor. Para configurarlo, haga lo siguiente:

1. En la administración de su tienda, acceda a *WooCommerce > Configuración > Checkout* y entonces, en las opciones de gateway listada, seleccione *Mercado Pago - Suscripciones*;

2. Tome nota de la URL informada en el campo *URL de Notificación Instantánea de Pago (IPN)* y acceda al ambiente de IPN/Webhook para su país: [Argentina](https://www.mercadopago.com.ar/ipn-notifications), [Brasil](https://www.mercadopago.com.br/ipn-notifications), o [México](https://www.mercadopago.com.mx/ipn-notifications);

3. Inserte la URL en el campo y haga clic en el botón *Guardar*. Recibirá un mensaje que le notificará si Mercado Pago accedió correctamente a su servidor y recibió una respuesta válida. Si todo está OK, deberá recibir un mensaje de confirmación.

> CONSEJO 1: Al configurar o probar sus IPN/Webhooks y comunicaciones de servidor, asegúrese de que su servidor pueda acceder al servidor de Mercado Pago.

> CONSEJO 2: Asegúrese de que su firewall tiene los [Intervalos de IP de Mercado Pago](https://www.mercadopago.com.ar/developers/en/api-docs/basics/design-considerations#ip-range) dentro de su white-list.

> CONSEJO 3: Preste atención a que Mercado Pago utiliza el protocolo TSL versión 1.0, por lo que su servidor necesita soportar/aceptar conexiones con esta versión de protocolo.

> CONSEJO 4: Asegúrese de que cualquier otro plugin de WordPress no intenta bloquear Mercado Pago.

# Actualización
Si ya ha instalado una versión anterior de WooCommerce MercadoPago, siga las instrucciones. De la misma manera de la instalación, de nuevo tienes dos opciones: desde tu tienda de WordPress, o descargando y copiando manualmente el directorio del módulo.

### Actualización desde WordPress
1. En la administración de su tienda, vaya a la opción *Plugins* en la barra lateral;
2. Haga clic en el botón *actualizar ahora* en la ventana del panel de control del plugin;
3. En pocos segundos se debe haber instalado con el mensaje *Updated!*.

### Actualización con Descarga Manual
1. Obtenga las fuentes del módulo desde un repositorio (<a href="https://github.com/mercadopago/cart-woocommerce/archive/master.zip">Github</a> o <a href="https://br.wordpress.org/plugins/woocommerce-mercadopago/">WordPress Plugin Directory</a>);
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

# FAQ
En construcción...

# Soporte Técnico
Si tiene alguna pregunta, problema o error, tenemos un canal de soporte. Envíe un correo electrónico a modulos@mercadopago.com con la siguiente información:

* Correo electrónico de su cuenta Mercado Pago;
* Detalles sobre su pregunta, problema o error;
* Archivos que pueden ayudar en la comprensión (Print-Screen, Video, Archivos de Registro, etc.);
* Versión de WooCommerce;
* Versión del módulo, si está utilizando.

> CONSEJO: Puede obtener la versión del módulo en la lista de plugins de su página de administración de WordPress:
>
> ![Developer](https://raw.githubusercontent.com/wiki/mercadopago/cart-woocommerce/images/wiki3/plugins_menu.png)

No se preocupe ... Le ayudaremos lo antes posible.

# Cómo Contribuir
Estos son algunos consejos para ayudar con el desarrollo y mantenimiento de este proyecto.

## Clonación para el desarrollo:

Vaya a `wp-content/plugins` en su instalación de desarrollo de WordPress y clona este repositorio usando el siguiente comando:

```bash
git clone git@github.com:mercadopago/cart-woocommerce.git woocommerce-mercadopago
```

## Actualización de la Wiki

### Clonación

```bash
git clone git@github.com:mercadopago/cart-woocommerce.wiki.git
```

### Árbol de directorios y archivos

```
├── English
├── _Footer.md
├── Home.md
├── images
├── Portugues
└── Espanol

```

Los directorios `English`,` Portugues` y `Espanol` contienen documentación específica para cada idioma.

Es posible generar nuevos archivos en cada directorio con la siguiente manera:

```
touch English/Nueva-Pagina-Wiki.md
```

This will generate a wiki page with the name of `Nueva Pagina Wiki`.

Para las imágenes debemos usar el directorio `images` y usar la siguiente sintaxis para vincular cada imagen en el contenido:

```
[[/images/image-name.png|Alt text]]
```