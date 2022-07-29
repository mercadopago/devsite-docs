# Configurar pagos con Pix

----[mlb]----
Con el [Checkout Transparente](/developers/es/guides/checkout-api/landing), ofrece pagos de **Pix** directamente en tu tienda. Pix es un método de pago instantáneo disponible las 24 horas del día.

------------ 

----[mla, mlm, mpe, mco, mlu, mlc]----
Con el [Checkout API](/developers/es/guides/checkout-api/landing), ofrece pagos de **Pix** directamente en tu tienda. Pix es un método de pago instantáneo disponible las 24 horas del día.

------------

> NOTE
>
> Importante
> 
> La opción de pago con Pix solo se mostrará si existe una chave Pix cadastrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso. <br>
> </br> <br/>
> Además, existe un límite al valor de Pix, establecido por el Banco Central de Brasil, que se puede mover en el período de la noche (entre las 20 y las 6 horas) de R$ 1 mil. Para el período diurno (entre las 6 am y las 8 pm), sin embargo, no hay límite de movimiento.

Para integrar el método de pago, siga los pasos a continuación.

1. Selecciona **Sí** para activar la experiencia de Mercado Pago para pagos con Pix en el checkout de tu tienda. Siempre puedes administrar la(s) clave(s) Pix que registraste en tu cuenta usando la app de Mercado Pago.
2. Indicar la fecha de caducidad que tendrán los clientes para realizar la transferencia vía Pix.
3. Si lo desea, defina un porcentaje de descuento para los clientes que pagan con Pix. El porcentaje definido se deducirá del importe total de la compra.

¡Listo! El pago de Pix a través del ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------ se ha configurado y está listo para recibir pagos en su tienda.

> PREV_STEP_CARD_ES
>
> Configurar pagos con ticket checkout
>
> Configure su tienda para recibir pagos en efectivo (saldo cuenta Mercado Pago o boleto bancário) utilizando ----[mlb]---- Checkout Transparente. ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API. ------------
>
> [Ticket checkout](/developers/es/docs/prestashop/payment-configuration/checkout-api/ticket-checkout)

> NEXT_STEP_CARD_ES
>
> Prueba de pagos
>
> Aprenda cómo hacer una compra de prueba y asegúrese de que la integración funcione.
>
> [Prueba de pagos](/developers/es/docs/prestashop/sales-processing/integration-test)