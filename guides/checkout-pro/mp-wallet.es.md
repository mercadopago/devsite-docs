# Billetera Mercado Pago

Billetera de Mercado Pago es un método de pago que te permite aceptar pagos únicamente de usuarios registrados. Al ofrecer esta opción, los usuarios podrán pagar con tarjeta, saldo disponible y Mercado de Crédito.

> WARNING
>
> Importante
>
> Al agregar esta opción, no será posible recibir pagos de usuarios no registrados en Mercado Pago, así como tampoco podrás recibir pagos vía efectivo o transferencia.

Para configurar pagos con la billetera de Mercado Pago, envía un POST con el parámetro `purpose` y el valor `wallet_purchase` al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta la solicitud.

> PREV_STEP_CARD_ES
>
> Estilo de colores
>
> Aprenda a personalizar el estilo de color de los elementos de su interfaz. 
>
> [Estilo de colores](/developers/es/docs/checkout-pro/checkout-customization/user-interface/color-style)

> NEXT_STEP_CARD_ES
>
> Crear usuario de prueba 
>
> Aprenda a crear usuarios de prueba que le permitirán evaluar cómo funciona su pago. 
>
> [Crear usuario de prueba](/developers/es/docs/checkout-pro/integration-test/create-test-user)