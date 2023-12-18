# Vigencia de preferencia

Vigencia es el período de validez definido para una determinada preferencia de pago. Al definir el plazo de la preferencia, eliges una fecha para que surta efecto y la fecha de vencimiento definiendo un límite máximo de pago.


1. Envía un **POST** con los parámetros `expires`, `expiration_date_from` y `expiration_date_to` al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post).
2. En `expires`, inserta `true`.
3. En `expiration_date_from`, ingresa la fecha y hora de inicio efectivo. El valor debe seguir el formato ISO 8601: aaaa-MM-dd'T'HH:mm:sszas.
4. En `expiration_date_to`, ingresa la fecha y hora de vencimiento. El valor debe seguir el formato ISO 8601: aaaa-MM-dd'T'HH:mm:sszas
5. Ejecuta el request y asegúrese de que la fecha coincida con el ejemplo que se muestra a continuación.

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```