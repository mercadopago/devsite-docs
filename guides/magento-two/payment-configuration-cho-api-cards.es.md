# Configurar pagos con tarjeta

----[mlb]----
Con el [Checkout Transparente](/developers/es/guides/checkout-api/introduction), ofrece pagos con **tarjetas de crédito o débito** (disponibles en el país donde está instalada la tienda) directamente en tu tienda, sin la el comprador debe ser redirigido para realizar el pago.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
Con el [Checkout API](/developers/es/guides/checkout-api/introduction), ofrece pagos con **tarjetas de crédito o débito** (disponibles en el país donde está instalada la tienda) directamente en tu tienda, sin la el comprador debe ser redirigido para realizar el pago.

------------

Para integrar el método de pago, siga los pasos a continuación.

1. Vaya al menú **Stores > Configuration > Sales > Payment Methods**.
2. Para activar los pagos con tarjeta acceda a la sección **Mercado Pago > Custom Checkout - Credit and Debit Card**.
3. Selecciona **Sí** para activar la experiencia de Mercado Pago para pagos con tarjeta en la caja de tu tienda. Por defecto, el método de pago con tarjeta ya está activado.
4. Si es necesario, **cambie el título del método de pago** que aparecerá para el comprador.
5. En el campo **Statement Descriptor**, ingrese el texto que identificará el pago en el estado de cuenta de la tarjeta. Esta función no está disponible en todos los países.
6. Habilite **modo binario** para configurar el rechazo automático de pagos que no son aprobados instantáneamente por bancos u otros adquirentes. Cuando está habilitado, este modo de procesamiento solo dará como resultado un estado de pago `approved` o `rejected`. No habrá estados intermedios como `in_proccess` o `pending`.
7. Si lo deseas, puedes personalizar un **banner** con los métodos de pago disponibles cambiando la URL de la imagen en cuestión. Por defecto, el módulo de Mercado Pago configurará un banner con los métodos de pago disponibles según tu país.
8. En **Checkout Position**, indique la posición en la que el método de pago estará disponible para el comprador en el flujo de pago.
9. En el campo **Cards saved in Mercado Pago**, indica si deseas que el comprador tenga la opción de guardar los datos de su tarjeta para futuros pagos o usar su saldo en Mercado Pago para realizar pagos. Los clientes pagan más rápido y usted aumenta la conversión con esta función.
10. Haga clic en **Set up installment and interest** para [configurar en Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/costs-section#from-section=menu) la tarifa que se pagará en cada compra y además ofrecer cuotas sin intereses a sus clientes.
11. Luego haga clic en **Save Config**para guardar sus preferencias.

> PREV_STEP_CARD_ES
>
> Configurar pagos con ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------
>
> Aprenda a configurar ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------ para recibir pagos en tu tienda.
>
> [Checkout Transparente](/developers/es/docs/magento-two/payment-configuration/checkout-api)

----[mlb]----
> NEXT_STEP_CARD_ES
>
> Configurar pagos offline (ticket)
>
> Configure su tienda para recibir pagos offline (boleto bancário y cajero automático) utilizando el Checkout Transparente.
>
> [Ticket](/developers/es/docs/magento-two/payment-configuration/checkout-api/ticket)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> NEXT_STEP_CARD_ES
>
> Configurar pagos offline (ticket)
>
> Configure su tienda para recibir pagos offline (efectivo y cajero automático) utilizando el Checkout API.
>
> [Ticket](/developers/es/docs/magento-two/payment-configuration/checkout-api/ticket)
------------