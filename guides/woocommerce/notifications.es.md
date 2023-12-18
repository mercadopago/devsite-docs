# Cómo activar las notificaciones IPN en tu integración

Las notificaciones son mensajes enviados por el servidor de Mercado Pago desde eventos que se realizan en su aplicación. **IPN** (Instant Payment Notification) es un mecanismo que permite que tu aplicación reciba notificaciones de Mercado Pago, informando el estado de un determinado pago, contracargo y merchant_order, a través de una llamada HTTP POST para informar sobre sus transacciones.

Si quieres conocer más sobre notificaciones IPN, accede a [esta documentación](/developers/es/docs/woocommerce/additional-content/your-integrations/notifications/ipn).

Para recibir notificaciones IPN, sigue los pasos a continuación:

1. Ingresa a [Tus notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/ipn).
2. Completa los campos solicitados:
    * **URL del sitio web en producción:** coloca la URL de la tienda.
    * **Eventos:** selecciona los eventos sobre los que quieres recibir notificaciones.

3. Ve a tu cuenta de [Wordpress](https://wordpress.com/).
4. Accede al Panel de tu cuenta y haz clic en **Plugins > Plugins instalados**.
5. Ingresa a la opción **2. Personaliza tu negocio > Opciones avanzadas de integración (opcional)**. 
6. Completa los campo **URL para IPN** con la URL del sitio web en producción.
7. Completa el campo **integrator_id** con tu número de miembro del **&lt;dev&gt;program** de Mercado Pago. Si aún no eres un miembro, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/developer-program) para obtener más información. 
8. Haz clic en **Guardar y continuar**.