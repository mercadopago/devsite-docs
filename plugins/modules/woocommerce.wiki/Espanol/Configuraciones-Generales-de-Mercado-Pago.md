Esta página explica cómo hacer la configuración generale de Mercado Pago para este módulo. En primer lugar, asegúrese de que el plugin WooCommerce MercadoPago está habilitado, haciendo clic en el item *Plugins* en la barra lateral de WordPress, como se muestra a continuación:

[[/images/wiki3/plugins_menu.png|]]

Ahora, en la barra lateral de WordPress, haga clic en la opción *Configuración > Mercado Pago*. Usted debe obtener la siguiente página:

[[/images/wiki3/mercadopago_config.png|Configuración de Mercadopago]]

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