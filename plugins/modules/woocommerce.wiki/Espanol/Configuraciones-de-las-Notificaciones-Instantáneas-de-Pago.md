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