# Notificaciones

Las notificaciones son mensajes enviados por el servidor de Mercado Pago desde eventos que se realizan en su aplicación. Puedes configurar tu integración para enviar notificaciones cuando ocurran los siguientes eventos:

* Creación y actualización de pagos;
* Creación de pedidos;
* Actualización de la orden;
* Vinculación a un plan de suscripción;
* Enlace de suscripción;
* Vinculación y desvinculación de cuentas mp-connect;
* Vinculación de facturas (factura);
* Creación de contracargos;
* Finalización y cancelación de intento pago;
* Error al processar intento de pago.
* [Alertas de fraude](/developers/es/docs/additional-content/chargebacks/how-to-prevent#bookmark_alerta_de_fraude)

Hay **dos tipos** de notificaciones disponibles para la configuración, que una vez configuradas, te permiten programar el backend de tu tienda para, por ejemplo, actualizar el estado de los pedidos cuando se crea un pago, enviar un correo electrónico de confirmación del pedido desde la tienda cuando un pedido se actualiza en Mercado Pago, actualizar el registro de un cliente cuando se vincula un plan de suscripción, o cualquier otra acción derivada de los eventos enumerados anteriormente.

| Tipo | Descripción |
| --- | --- |
| **Webhooks** | Utiliza HTTP REST, notifica instantáneamente las actualizaciones y mejora la seguridad en tu integración mediante la **clave secreta**, un método de validación para garantizar que las notificaciones recibidas fueron enviadas por Mercado Pago. </br> [Haz clic aquí](/developers/es/guides/additional-content/your-integrations/webhooks) para aprender cómo configurar y simular el envío de notificaciones Webhooks. |
| **IPN** | La notificación puede tardar unos minutos en enviarse. Para aprender a configurar las notificaciones IPN [haz clic aquí](/developers/es/guides/additional-content/your-integrations/ipn). |