# Configurar pagos por transferencia bancaria

----[mlb]----
Con el [Checkout Transparente](/developers/es/guides/checkout-api/landing), ofrezca pagos por **transferencia bancaria** directamente en su tienda.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
Con el [Checkout API](/developers/es/guides/checkout-api/landing), ofrece pagos por **transferencia bancaria** directamente en tu tienda.

------------

> WARNING
>
> Importante
>
> La transferencia entre cuentas bancarias debe realizarse dentro del plazo estipulado por el Banco Central de su país.

Para integrar el método de pago, siga los pasos a continuación.

1. Ve al menú **Stores > Configuration > Sales > Payment Methods**.
2. Para activar el pago con tarjeta acceda al apartado **Mercado Pago > Custom Checkout - Bank Transfer**.
3. Selecciona **Sí** para activar la experiencia de Mercado Pago para pagos por transferencia bancaria en la caja de tu tienda.
4. Si es necesario, **cambie el título del método de pago** que aparecerá para el comprador.
5. Si lo deseas, puedes personalizar un **banner** con los métodos de pago disponibles cambiando la URL de la imagen en cuestión. Por defecto, el módulo de Mercado Pago configurará un banner con los métodos de pago disponibles según tu país.
6. En **Checkout Position**, indique la posición en la que el método de pago estará disponible para el comprador en el flujo de pago.
7. En el campo **Redirect Payer**, indica si el comprador será redirigido automáticamente a la página de pago del banco, sin tener que pasar por una página intermedia en tu tienda.
8. Luego haga clic en **Save Config**  para guardar sus preferencias.

----[mlb]----
> PREV_STEP_CARD_ES
>
> Configurar pagos offline (ticket)
>
> Configure su tienda para recibir pagos fuera de línea (boleto bancário y cajero automático) utilizando el Checkout Transparente. 
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