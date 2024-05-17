# Checkout Pro
 
Con [Checkout Pro](/developers/es/docs/checkout-pro/landing), el comprador será dirigido desde la tienda al sitio web de Mercado Pago donde deberá completar los datos solicitados y realizar el pago. De esta manera, la transacción se procesa y completa fuera del entorno de su tienda. No es necesario que el comprador tenga una cuenta de Mercado Pago y, al finalizar la transacción, el comprador puede ser devuelto a tu tienda.
 
Para integrar Checkout Pro, sigue los pasos a continuación.
 
1. Selecciona **Sí** para activar la experiencia de Mercado Pago en el checkout de tu tienda.
2. Elige las formas de pago que quieres ofrecer en el entorno de pago de Mercado Pago, las cuales pueden ser:
 ----[mlb]---- 
 * Tarjetas de débito y crédito;
 * Efectivo (saldo de cuenta de Mercado Pago o boleto bancário);
 * Transferencia bancaria (Pix y PEC). La opción de pago con Pix solo se mostrará si existe una Clave Pix registrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso.
 ------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
 * Tarjetas de débito y crédito;
 * Efectivo (saldo de cuenta de Mercado Pago o efectivo);
 * Transferencia bancaria.
  ------------
3. Selecciona las **cuotas máximas** que deseas ofrecer en tu tienda.
4. [Configura](https://www.mercadopago[FAKER][URL][DOMAIN]/costs-section#from-section=menu) la tarifa que se pagará en cada compra y además ofrecer cuotas sin intereses a tus clientes.
5. Selecciona si deseas o no que el cliente **regrese automáticamente** a tu tienda después de completar el pago.
6. Si lo deseas, activa el **modo binario** cuando no desees dejar los pagos en estado pendiente o en revisión. Con el modo binario, los pagos se aceptarán o rechazarán automáticamente.
7. Indica el plazo en el que se guardarán las preferencias de pago del cliente sin que el cliente tenga que volver a introducirlas.

¡Listo! Checkout Pro está listo para recibir pagos de tu tienda.

----[mlb]----
> Si deseas utilizar Checkout Transparente para recibir pagos en la tienda, consulta la sección [Configurar pagos con Checkout Transparente](/developers/es/docs/prestashop/payment-configuration/checkout-api/introduction).
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> Si deseas utilizar Checkout API para recibir pagos en la tienda, consulta la sección [Configurar pagos con Checkout API](/developers/es/docs/prestashop/payment-configuration/checkout-api/introduction).
------------