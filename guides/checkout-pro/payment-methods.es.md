# Medios de pago

Con las preferencias creadas, es posible personalizar la integración de Checkout Pro y determinar los medios de pago que se aceptarán.

A través de un GET al endpoint [/v1/payment_methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payment_methods/_payment_methods/get), puedes acceder al listado de cada una de las opciones disponibles y con él definir si quieres, por ejemplo, excluir un medio de pago o definir un número máximo de cuotas para una compra.

Para definir los medios de pago que se ofrecerán, envía el atributo `payment_methods` informando el medio de pago que se ofrecerá al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta la solicitud o, si lo prefieres, puedes ver [SDKs](/developers/es/docs/sdks-library/landing) y realiza la integración utilizando nuestras bibliotecas.

> PREV_STEP_CARD_ES
>
> Vigencia de preferencia 
>
> Aprenda a establecer el período de validez para una determinada preferencia de pago.
>
> [Vigencia de preferencia](/developers/es/docs/checkout-pro/checkout-customization/preferences/term-of-preference)

> NEXT_STEP_CARD_ES
>
> Modo binario
>
> Vea más información sobre el modo binario y cómo habilitarlo.
>
> [Modo binario](/developers/es/docs/checkout-pro/checkout-customization/preferences/binary-mode)