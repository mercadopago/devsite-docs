# Modo binario

El modo binario es una función que permite la aprobación o el rechazo automático de un pago. Esto significa que al activarse, los pagos realizados serán automáticamente aprobados o rechazados sin necesidad de acción por parte del vendedor.

En caso de estar deshabilitado, el pago puede quedar pendiente (si se requiere alguna acción por parte del comprador) o en proceso (si se requiere una revisión manual).

Para habilitar el modo binario, envía el parámetro `binary_mode`  al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post) con el valor `true` y ejecuta la solicitud.

> PREV_STEP_CARD_ES
>
> Medios de pago
>
> Aprenda a personalizar la integración de Checkout Pro y determinar qué métodos de pago se aceptarán.
>
> [Medios de pago](/developers/es/docs/checkout-pro/checkout-customization/preferences/payment-methods)

> NEXT_STEP_CARD_ES
>
> Descripción de la factura
>
> Vea cómo definir el nombre del establecimiento que se mostrará en la factura del comprador.
>
> [Descripción de la factura](/developers/es/docs/checkout-pro/checkout-customization/preferences/invoice-description)