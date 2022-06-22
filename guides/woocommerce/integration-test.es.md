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

## Realiza una compra de prueba

Con la tienda en modo de prueba, puedes realizar todo el flujo de compra hasta completarlo en el momento del pago y corroborar que funcione correctamente. Para hacerlo, sigue los pasos que te mostramos a continuación:

1. Primero, asegúrate de no estar logueado con tu cuenta de Mercado Pago, así podrás simular la compra como un cliente no asociado a Mercado Pago.
2. Accede a la página de inicio de la tienda en WordPress.
3. Selecciona un producto y haz clic en **Anãdir al carrito > Ver carrito**.
4. Elige cualquier opción de envío y haz clic en **Finalizar compra**.
5. Completa la información solicitada y selecciona la opción de pago con la solución de Mercado Pago que hayas configurado.
    * Si eliges la opción de pagar a través del sitio de Mercado Pago, serás redirigido al sitio de Mercado Pago en donde se te requerirá que ingreses a tu cuenta para continuar.
    * Si seleccionas pagar con tarjeta de crédito o débito, utiliza nuestras [tarjetas de prueba](/developers/es/docs/woocomerce/additional-content/test-cards) para llenar los campos necesarios y continuar con la compra.
    * Si seleccionas la opción de pago con Efectivo, elige un medio de pago y continúa con la compra.
6. Cuando hayas completado todos los campos requeridos, haz clic en **Realizar el pedido**.

Si la prueba se ejecuta sin errores, significa que su tienda está lista para vender.

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