# Testear la integración

Para corroborar que la tienda esté configurada correctamente, te recomendamos testear tu tienda antes de lanzarla a producción. 
Para activar el modo de pruebas de tu tienda, sigue estos pasos:

1. Ve a tu cuenta de [Wordpress](https://wordpress.com/).
2. Accede al Panel de tu cuenta y haz clic en **Plugins > Plugins instalados**.
3. En el buscador de plugins, busca “Mercado Pago payments for WooCommerce”.
4. Haz clic en **Configurar Plugin**.
5. Haz clic en **4. Testea tu tienda antes de vender** para desplegar las opciones.
6. En **Elige cómo quieres operar tu tienda**, selecciona** Modo Test**.
7. Haz clic en **Guardar cambios** para finalizar.

## Checkout Pro
1. Selecciona la opción **Quiero pagar con Mercado Pago sin costo adicional**.
1. Haz clic en **pedido con pago obligatorio** para ser redirigido al entorno de pago de Mercado Pago.
1. En la pantalla de pago, elija pagar con una nueva tarjeta de crédito y use las [tarjetas de prueba](https://mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/woocommerce/additional-content/test-cards) para realizar el pago. Es importante no iniciar sesión en la cuenta de Mercado Pago ni intentar pagar con tarjetas para uso personal.
1. Agrega la información de la tarjeta de prueba indicada (número de tarjeta, CVV y fecha de vencimiento).
1. Al finalizar la compra, podrás visualizar, dentro de Mercado Pago, el comprobante de que se realizó la compra y serás redirigido nuevamente a la tienda.

----[mlb]----
## Checkout Transparente
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
## Checkout API
------------
1. Seleccione la opción **Quiero pagar con tarjeta de crédito**.
1. Elija pagar con una nueva tarjeta de crédito y utilice las [tarjetas de prueba](https://mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/woocommerce/additional-content/test-cards) para realizar el pago. Es importante no pagar con tarjetas para uso personal.
1. Agregue la información de la tarjeta de prueba indicada (número de tarjeta, CVV y fecha de vencimiento).
1. Haz clic en **pedir con pago requerido**.
1. Al finalizar la compra, se podrá ver que la compra ha sido aprobada.

> PREV_STEP_CARD_ES
>
> Configura los medios de pago
>
> Conoce cómo configurar los distintos medios de pago en la tienda.
>
> [Configura los medios de pago](/developers/es/docs/woocommerce/payments-methods-configuration)

> NEXT_STEP_CARD_ES
>
> Salir a producción
>
> Activa la tienda y sal a producción.
>
> [Salir a producción](/developers/es/docs/woocommerce/go-to-production)