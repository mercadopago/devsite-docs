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