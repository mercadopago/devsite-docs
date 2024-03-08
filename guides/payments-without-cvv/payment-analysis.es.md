# Análisis de pagos

Si un pago automático es rechazado, recomendamos seguir una lógica de intentos basada en el estado del rechazo. Por ejemplo, si el pago fue rechazado debido a una tarjeta vencida, no tiene sentido intentar nuevamente con la misma tarjeta y se deberá solicitar al cliente que proporcione otra para procesar cargos futuros.

En caso de rechazo por fondos insuficientes, se puede intentar nuevamente con la misma tarjeta siempre que se resuelva el problema del límite para la tarjeta utilizada.

Siempre es importante comunicar a tu cliente el resultado del pago y proporcionar instrucciones para la próxima etapa. Informaremos un `HTTP Status 201 OK` cuando el pago se cree correctamente y un código de resultado para que puedas redirigir al cliente a la página con el mensaje correcto.

> NOTE
>
> Importante
>
> Siempre que se procese un pago y haya alguna novedad sobre el proceso, Mercado Pago enviará una notificación para que puedas actualizar tus sistemas. Consulta la documentación de [notificaciones Webhooks](/developers/es/docs/your-integrations/notifications/webhooks) para saber cómo configurar la recepción de estas notificaciones.