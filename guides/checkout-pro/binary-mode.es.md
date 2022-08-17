# Modo binario

El modo binario es una función que permite la aprobación o el rechazo automático de un pago. Esto significa que al activarse, los pagos realizados serán automáticamente aprobados o rechazados sin necesidad de acción por parte del vendedor.

En caso de estar deshabilitado, el pago puede quedar pendiente (si se requiere alguna acción por parte del comprador) o en proceso (si se requiere una revisión manual).

Para habilitar el modo binario, envía el parámetro `binary_mode`  al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post) con el valor `true` y ejecuta la solicitud.
