# Vigencia de preferencia

Vigencia es el período de validez definido para una determinada preferencia de pago. Al definir el período de vigencia de la preferencia, eliges una fecha para que comience a tener efecto y la fecha de vencimiento, de esta forma, al vencer el período elegido, la preferencia perderá su vigencia y no podrá ser utilizada.

1. Envía un POST con losparámetros `expires`, `expiration_date_from` y `expiration_date_to`  al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).
2. En "expires", insertar `true`.
3. En "expiration_date_from", ingresa la fecha y hora de inicio de la vigencia. El valor debe seguir el  formato ISO 8601: yyyy-MM-dd'T'HH:mm:sszas.
4. En "expiration_date_to", ingresa la fecha y hora de final de la vigencia. El valor debe seguir el  formato ISO 8601: yyyy-MM-dd'T'HH:mm:sszas
5. Ejecuta la solicitud.