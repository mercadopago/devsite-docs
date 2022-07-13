# Configurar pagos con Pix

----[mlb]----
Con [Checkout Transparente](/developers/es/guides/checkout-api/introduction), ofrece pagos de **Pix** directamente en tu tienda. Pix es un método de pago instantáneo disponible las 24 horas del día.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
Con [Checkout API](/developers/es/guides/checkout-api/introduction), ofrece pagos de **Pix** directamente en tu tienda. Pix es un método de pago instantáneo disponible las 24 horas del día.

------------

> WARNING
>
> Importante
>
> La opción de pago por Pix solo se mostrará si existe una [Clave de Pix registrada](/developers/es/guides/checkout-api/receiving-payment-by-pix) en Mercado Pago. </br>
> </br> <br/>
> Además, existe un límite al valor de Pix, establecido por el Banco Central de Brasil, que se puede mover en el período de la noche (entre las 20 y las 6 horas) de R$1 mil. Para el período diurno (entre las 6 am y las 8 pm), sin embargo, no hay límite de movimiento.

Para integrar el método de pago, siga los pasos a continuación.

1. Ve al menú **Stores > Configuration > Sales > Payment Methods**.
2. Para activar los pagos con tarjeta acceda a la sección **Mercado Pago > Custom Checkout - Pix**.
3. Selecciona **Sí** para activar la experiencia de Mercado Pago para pagos con Pix en la caja de tu tienda. Siempre puedes administrar la(s) clave(s) Pix que registraste en tu cuenta usando la app de Mercado Pago.
4. Si es necesario, **cambie el título del método de pago** que aparecerá para el comprador.
5. Si lo deseas, puedes personalizar un **banner** con los métodos de pago disponibles cambiando la URL de la imagen en cuestión. Por defecto, el módulo de Mercado Pago configurará un banner con los métodos de pago disponibles según tu país.
6. En **Checkout Position**, indique la posición en la que el método de pago estará disponible para el comprador en el flujo de pago.
7. En el campo **Redirect Payer**, indica si el comprador será redirigido automáticamente a la página de pago del banco, sin tener que pasar por una página intermedia en tu tienda.
8. Luego haga clic en ** **Save Config** para guardar sus preferencias.

----[mlb]----
> PREV_STEP_CARD_ES
>
> Configurar pagos offline (ticket)
>
> Configure su tienda para recibir pagos fuera de línea (efectivo y cajero automático) utilizando el Checkout Transparente.
>
> [Ticket](/developers/es/docs/magento-two/payment-configuration/checkout-api/ticket)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> PREV_STEP_CARD_ES
>
> Configurar pagos offline (ticket)
>
> Configure su tienda para recibir pagos fuera de línea (efectivo y cajero automático) utilizando el Checkout API.
>
> [Ticket](/developers/es/docs/magento-two/payment-configuration/checkout-api/ticket)
------------

> NEXT_STEP_CARD_ES
>
> Configurar pagos con Checkout Pro 
>
> Aprenda a configurar Checkout Pro para recibir pagos de su tienda.
>
> [Configurar pagamentos com Checkout Pro](/developers/es/docs/magento-two/payment-configuration/checkout-pro)