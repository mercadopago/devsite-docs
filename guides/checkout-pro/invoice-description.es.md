# Descripción de la factura

Descripción de la factura es una configuración que te permite definir el nombre del establecimiento que se mostrará en la factura del comprador. Esto permite la identificación del negocio y evita disputas innecesarias.

1. Envía un POST con el parámetro `statement_descriptor` al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).
2. En `statement_descriptor`, ingresa el nombre del establecimiento.
3. Ejecuta la solicitud.

> PREV_STEP_CARD_ES
>
> Modo binario
>
> Vea más información sobre el modo binario y cómo habilitarlo.
>
> [Modo binario](/developers/es/docs/checkout-pro/checkout-customization/preferences/binary-mode)

> NEXT_STEP_CARD_ES
>
> Valor del envío
>
> Obtenga más información sobre el valor cobrado por el envío de los productos vendidos.
>
> [Valor del envío](/developers/es/docs/checkout-pro/checkout-customization/preferences/shipping-cost)