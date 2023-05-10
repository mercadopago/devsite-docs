# Configuración de URLs y eventos

A continuación explicaremos cómo indicar las URLs que serán notificadas y cómo configurar los eventos para los que se recibirán notificaciones.

![ipn](/images/notifications/ipn__es.png)

1. Accede a la pantalla [Notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/ipn).
2. A continuación, configura la **URL de producción** donde se recibirán las notificaciones.
3. También podrás experimentar y probar si la URL indicada está recibiendo notificaciones correctamente, pudiendo verificar la solicitud, la respuesta dada por el servidor y la descripción del evento.
4. Si necesitas identificar varias cuentas, al final de la URL indicada puedes especificar el parámetro `?cliente=(nombredelvendedor) endpoint` para identificar a los vendedores.
5. Selecciona los **eventos** de los que recibirás notificaciones en formato `json` usando `HTTP POST` a la URL especificada anteriormente. Te notificamos de los eventos relacionados con tus pedidos (`merchant_orders`), devoluciones de cargo recibidas (`chargebacks`), pagos recibidos (`payment`), intentos de pago (`point_integration_ipn`) o alertas de fraude (`delivery_cancellation`)
