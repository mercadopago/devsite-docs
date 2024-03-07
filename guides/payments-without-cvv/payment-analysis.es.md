# Análisis de pagos

Si un pago automático es rechazado, recomendamos seguir una lógica de intentos basada en el estado del rechazo. Por ejemplo, si el pago fue rechazado debido a una tarjeta vencida, no tiene sentido intentar nuevamente con la misma tarjeta y se deberá solicitar al cliente que proporcione otra tarjeta para procesar cargos futuros.

En caso de rechazo por fondos insuficientes, se puede intentar nuevamente con la misma tarjeta siempre que se resuelva el problema del límite para la tarjeta utilizada.

En cada caso, es importante comunicar a su cliente el resultado del pago y proporcionar instrucciones para la próxima etapa. Informaremos un `HTTP Status 201 OK` de que el pago se creó correctamente y enviaremos un código de resultado para que pueda redirigir al cliente a la página con el mensaje correcto.

> NOTE
>
> Importante
>
> Siempre que se procese un pago y haya alguna novedad sobre el proceso, Mercado Pago enviará una notificación para que pueda actualizar sus sistemas. Consulte la documentación de [notificaciones Webhooks](/developers/es/docs/your-integrations/notifications/webhooks) para saber cómo configurar la recepción de estas notificaciones.