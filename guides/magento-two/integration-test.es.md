# Prueba de pagos

El módulo de Mercado Pago viene con el **ambiente Sandbox** activo por defecto. En este entorno, puede simular pagos en la tienda y ver si todo funciona correctamente antes de comenzar a recibir pagos reales de sus clientes. Para realizar la prueba, siga los pasos a continuación.
 
1. Vw al menú **Stores > Configuration > Sales > Payment Methods**.
2. En el campo **Merchant Country**, seleccione el país de operación de su tienda.
3. A continuación, acceda a la sección **Mercado Pago > Credentials** para habilitar los métodos de pago disponibles en el país de origen de la tienda.
4. En la página en cuestión, encontrarás los campos **Public key** y **Access token**, que deberás completar con las [credenciales](/developers/es/guides/additional-content/credentials/credentials) de **prueba** indicada en su [Dashboard](/developers/es/guides/additional-content/dashboard/introduction).
5. Después de configurar sus credenciales, haga clic en el botón **Save Config** en la esquina superior derecha. Es importante que guarde sus credenciales antes de continuar, ya que esto habilitará los métodos de pago disponibles en su país.
6. Una vez que haya realizado la configuración, vaya a la página de inicio de su tienda Magento, seleccione un producto y haga clic en **Add to Cart**.
7. Con el producto en el carrito, haga clic en **Proceed to Checkout**.
8. Complete su información personal, indique una dirección de entrega y seleccione un método de envío. El registro de información es obligatorio, pero es importante señalar que toda esta información es solo para la prueba.

Una vez que se complete el proceso de compra inicial, vea a continuación cómo probar la integración según el tipo de pago seleccionado para recibir pagos.

## Checkout Pro

1. Selecciona la opción **I want to pay with Mercado Pago at no additional cost**.
2. Haga clic en **pedido con pago obligatorio** para ser redirigido al entorno de pago de Mercado Pago.
3. En la pantalla de pago, elija pagar con una nueva tarjeta de crédito y use las [tarjetas de prueba](/developers/es/guides/additional-content/testing/test-cards) para realizar el pago. Es importante no iniciar sesión en la cuenta de Mercado Pago ni intentar pagar con tarjetas para uso personal.
3. Agregue la información de la tarjeta de prueba indicada (número de tarjeta, CVV y fecha de vencimiento).
4. Al finalizar la compra, podrás visualizar, dentro de Mercado Pago, el comprobante de que se realizó la compra y serás redirigido nuevamente a la tienda.

----[mlb]----
## Checkout Transparente 
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
## Checkout API 
------------

1. Selecciona la opción **Credit and Debit Card - Mercado Pago**.
2. Elija pagar con una nueva tarjeta de crédito y utilice las [tarjetas de prueba](/developers/es/guides/additional-content/testing/test-cards) para realizar el pago. Es importante no pagar con tarjetas para uso personal.
3. Agregue la información de la tarjeta de prueba indicada (número de tarjeta, CVV y fecha de vencimiento).
4. Al finalizar la compra, se podrá ver que la compra ha sido aprobada.

> WARNING
>
> Importante
>
> Ao finalizar a compra teste com Checkout Pro, no Painel Administrativo da Magento 2 não será possível visualizar a compra como aprovada, o pedido é gerado automaticamente, mas não consta como pago porque o processo ocorreu dentro do ambiente do Mercado Pago e não no ambiente Tienda.
> </br> <br/>
> Con la prueba de compra realizada con el Checkout Transparente, se podrá visualizar la aprobación del pedido. </br>
> </br> <br/>
> También es importante señalar que, en ambos checkouts, esta información sobre el pago aprobado no se incluirá en el historial de la cuenta de Mercado Pago porque solo contiene gastos reales (realizados en producción).

> NEXT_STEP_CARD_ES
>
> Configurar pagos con Checkout Pro 
>
> Aprenda a configurar Checkout Pro para recibir pagos de su tienda.
>
> [Configurar pagos con Checkout Pro](/developers/es/docs/magento-two/payment-configuration/checkout-pro)

> NEXT_STEP_CARD_ES
>
> Recibir pagos
>
> Aprenda cómo habilitar la tienda para procesar ventas reales.
>
> [Recibir pagos](/developers/es/docs/magento-two/sales-processing/go-to-production)