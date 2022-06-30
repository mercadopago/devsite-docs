# Configure payment notifications

Para configurar el estado de pedido para las notificaciones de pago, sigue estos pasos:

1. Ve al menú **Stores > Configuration > Sales > Payment Methods**.
2. Para configurar los estados de pago, accede a la opción **Mercado Pago > Advanced** y ve a la opción "Order Status Options". 
Para cada estado de pago, puedes elegir un estado de pedido. Entonces, cuando tu tienda reciba una notificación de pago, el módulo actualizará automáticamente el pedido con el estado configurado. 
3. Para guardar la configuración, haz clic en el botón **Save Config**.

> NOTE
>
> Importante
>
> El módulo está preparado para recibir las notificaciones de pago de forma automática, es decir, sin la necesidad de configurar tu cuenta de Mercado Pago o el módulo.</br>
> </br><br/>
> [Haz clic aquí](/developers/es/guides/additional-content/notifications/webhooks/webhooks) para obtener más información sobre las notificaciones de Webhooks.

¡Listo! El estado de notificación se ha configurado correctamente.

## E-mail de notificación

Habiendo seleccionado **Checkout API** para recibir pagos de tu tienda, es importante configurar el envío de correos electrónicos que notificarán al usuario de sus transacciones. Ve a continuación cómo personalizar el envío de **e-mail transaccional** en el panel de administración de Magento 2.

1. Ve al menú **Marketing > Communications > Email Templates > Add New Template** y crea la nueva plantilla de e-mail.
2. En **Stores > Settings > Configuration > Sales > Sales Emails**, agrega la plantilla creada en los ajustes de eventos en la plataforma (ejemplo: "pago aprobado").
3. Una vez realizadas las configuraciones necesarias, instala y configura un **servidor SMTP** de tu elección para habilitar el envío de correos electrónicos.
4. Envía un **e-mail de prueba** para asegurarte de que la plataforma está enviando correos electrónicos correctamente.

¡Listo! El envío de correos electrónicos se ha configurado correctamente.

> PREV_STEP_CARD_ES
>
> Configura tus credenciales
>
> Aprende a ingresar las credenciales para habilitar los métodos de pago disponibles en el país de origen de la tienda.
>
> [Configure suas credenciais](/developers/es/docs/magento-two/integration-configuration/credentials)

> NEXT_STEP_CARD_ES
>
> Configurar información de la tienda
>
> Aprende a configurar la información comercial de tu tienda.
>
> [Configurar información de la tienda](/developers/es/docs/magento-two/integration-store)