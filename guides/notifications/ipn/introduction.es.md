# Introducción

**IPN** (Instant Payment Notification) es un mecanismo que permite que tu aplicación reciba notificaciones de Mercado Pago, informando el estado de un determinado pago, contracargo y `merchant_order`, a través de una llamada HTTP POST para informar sobre sus transacciones.

En las notificaciones de IPN, solo se puede configurar una URL de notificación por cuenta de Mercado Pago (según la aplicación, más de una aplicación puede usar esta URL). Además, también existe la posibilidad de utilizar este tipo de notificación desde el campo `notification_url` del objeto, de esta forma la URL puede ser diferente para cada objeto o aplicación.

En esta documentación te explicaremos la configuración necesaria para recibir notificaciones de IPN (a través del Dashboard o al momento de crear pagos), y te mostraremos las acciones necesarias que debes realizar para que Mercado Pago valide que los mensajes fueron recibidos correctamente.

> NEXT_STEP_CARD_ES
>
> Pagos Online
>
> Configura URLs y eventos para pagos online.
>
> [Configuración de URLs y eventos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/online-url-configuration)