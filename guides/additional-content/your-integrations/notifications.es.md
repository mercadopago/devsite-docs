# Notificaciones

Las notificaciones son mensajes enviados por el servidor de Mercado Pago a partir de eventos realizados en tu aplicación. Para que estas notificaciones sean enviadas, debes activar distintos tópicos de notificación, sea por medio de [Tus integraciones](/developers/panel/app) o al crear un pago, que te informarán sobre los diferentes eventos ocurridos.

La activación de estos tópicos dependerá de la solución de Mercado Pago que hayas integrado y de las necesidades de negocio. Conoce cuáles son, tomando como referencia la tabla a continuación:

| Eventos | Nombre en Tus integraciones | Tópico | Productos asociados |
|---|---|---|---|
| Creación y actualización de pagos | Pagos | `payment` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Suscripciones<br>----[mla, mlm, mlb]----MP Point------------<br>Wallet Connect |
| Pago recurrente de una suscripción (creación y actualización) | Planes y suscripciones | `subscription_authorized_payment` | Suscripciones |
| Vinculación de una suscripción (creación y actualización) | Planes y suscripciones | `subscription_preapproval` | Suscripciones |
| Vinculación de un plan de suscripción (creación y actualización) | Planes y suscripciones | `subscription_preapproval_plan` | Suscripciones |
| Vinculación y desvinculación de cuentas mp-connect. | Vinculación de aplicaciones | `mp-connect` | Todos los productos que hayan implementado OAuth |
----[mla, mlm, mlb]----| Finalización, cancelación o errores al procesar intenciones de pago de dispositivos Mercado Pago Point. | Integraciones Point | `point_integration_wh` / `point_integration_ipn` | Mercado Pago Point |------------
----[mla]----| Creación, actualización o cancelación de pedidos. | Delivery (proximity marketplace) | `delivery` | MP Delivery |------------
| Transacciones de Wallet Connect | Wallet Connect | `wallet_connect` | Wallet Connect |
| Alertas de fraude luego del procesamiento de un pedido | Alertas de fraude | `stop_delivery_op_wh` / `delivery_cancellation` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout PRO |
| Creación de reclamos y reembolsos | Reclamos | `topic_claims_integration_wh` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Suscripciones<br>----[mla, mlm, mlb]----MP Point------------<br>Código QR<br>Wallet Connect |
| Recuperación y actualización información de tarjetas dentro de Mercado Pago. | Card Updater | `topic_card_id_wh` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |
| Creación, actualización o cierre de órdenes comerciales |  Órdenes comerciales | `topic_merchant_order_wh` / `merchant_order` | Checkout Pro<br>Código QR  |
| Apertura de contracargos, cambios de status y modificaciones referentes a las liberaciones de dinero.   |   Contracargos | `topic_chargebacks_wh` / `chargebacks`  | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------ <br>Checkout Bricks |



Una vez configuradas, las notificaciones permiten programar el backend de las tiendas para, por ejemplo, actualizar el estado de pedidos cuando un pago es creado, enviar un e-mail de confirmación cuando un pedido es actualizado en Mercado Pago, actualizar el registro de un cliente cuando realice una vinculación de un plan de suscripción, entre otras acciones recurrentes de los eventos detallados en la tabla anterior.

Existen dos tipos de notificaciones para su configuración, como se muestra en la tabla a continuación.


| Tipo | Descripción |
| --- | --- |
| **Webhooks** | **Recomendadas**. Utilizan HTTP REST para notificar instantáneamente las actualizaciones y ofrecen mayor seguridad en la integración mediante la clave secreta, un método de validación para garantizar que las notificaciones recibidas fueron enviadas por Mercado Pago.<br> Para aprender a configurar y simular el envío de estas notificaciones, accede a la [documentación de Webhooks](/developers/es/guides/additional-content/your-integrations/webhooks). |
| **IPN** | Permite que la aplicación reciba notificaciones de Mercado Pago sobre el estado de un pago, contracargo o *merchant order* por medio de una llamada HTTP POST. La notificación puede tardar unos minutos en enviarse, y no permite realizar la validación de origen mediante el *header* `x-Signature`.<br> **Importante:** Las notificaciones IPN serán descontinuadas pronto. Por esto, recomendamos la utilización de las [notificaciones Webhooks](/developers/es/guides/additional-content/your-integrations/webhooks). |