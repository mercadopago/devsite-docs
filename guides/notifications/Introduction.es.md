# Notificaciones

Las notificaciones son respuestas dadas por el servidor de transacciones (eventos) realizadas en su plataforma, siendo estos eventos cualquier tipo de actualización en el objeto reportado, incluyendo cambios de estado o atributos. Con las notificaciones tendrás información en tiempo real sobre los cambios producidos en los diferentes recursos de las API de Mercado Pago.
 
Vea a continuación los tipos de notificaciones disponibles para la integración con Mercado Pago.

> WARNING
>
> Importante
>
> No es posible recibir notificaciones en el entorno de prueba/sandbox.

## Webhook

El [Webhook](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks) (también conocido como devolución de llamada web o `HTTP POST`) es un método simple que hace Es fácil para una aplicación o sistema proporcionar información en tiempo real cada vez que ocurre un evento, es decir, es una forma de recibir datos pasivamente entre dos sistemas. Esto permite crear programas simples e independientes exclusivamente con la intención de trabajar en cadena mientras se ejecutan otros comandos, y se puede configurar para una o más aplicaciones creadas en tu [Dashboard](https://www.mercadopago[FAKER][URL][DOMINIO]/developers/es/guides/resources/devpanel).

Una vez instalado, el Webhook se enviará cada vez que ocurran uno o más eventos firmados, evitando un trabajo de búsqueda cada minuto en busca de una respuesta y, en consecuencia, evitando la sobrecarga del sistema y la pérdida de datos siempre que ocurra cualquier situación.

## IPN

La [IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/Notifications/ipn) (_Instant Payment Notification_) es un mecanismo que le permite a su tienda recibir notificaciones de un servidor. Mercado Pago informando el estado de un determinado pago, a través de una llamada `HTTP POST` para informar sobre sus transacciones. A diferencia de Webhook, las notificaciones de IPN se pueden configurar para una sola aplicación a la vez.