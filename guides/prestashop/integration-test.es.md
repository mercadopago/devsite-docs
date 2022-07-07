# Prueba de pagos
 
El plugin del Mercado Pago tiene el **entorno de pruebas Sandbox** activo por defecto. En este entorno, podrás simular pagos en la tienda y ver si todo funciona correctamente antes de comenzar a recibir pagos reales de tus clientes. Para realizar la prueba, sigue los pasos a continuación.
 
1. En el Panel Administrativo de tu tienda PrestaShop, accede al menú Módulos y Servicios, localiza el plugin Mercado Pago y haz clic en **configure**.
2. En la pantalla de administración de complementos, confirma que las [credenciales de prueba](/developers/es/guides/additional-content/credentials/credentials) se hayan completado correctamente de acuerdo con la información disponible en tu [Dashboard](/developers/es/guides/additional-content/dashboard/introduction).
3. Luego, desplázate hacia abajo hasta la sección **Prueba tu tienda** y haz clic en **Quiero testear mis ventas**.
4. En la página de inicio de tu tienda PrestaShop, selecciona un producto y haz clic para añadir al carrito.
5. Con el producto seleccionado, completa el pedido.
6. Completa con los datos personales, indica una dirección de envío y selecciona un método de envío. Recordando que toda esta información es solo para probar.

Una vez que se complete el proceso de compra inicial, observa a continuación cómo probar la integración según el tipo de pago seleccionado para recibir pagos.

## Checkout Pro

1. Selecciona la opción **Quiero pagar con Mercado Pago sin costo adicional**.
2. Haz clic en **pedido con pago obligatorio** para ser redirigido al entorno de pago de Mercado Pago.
3. En la pantalla de pago, elija pagar con una nueva tarjeta de crédito y use las [tarjetas de prueba](/developers/es/guides/additional-content/testing/test-cards) para realizar el pago. Es importante no iniciar sesión en la cuenta de Mercado Pago ni intentar pagar con tarjetas para uso personal.
3. Agregue la información de la tarjeta de prueba indicada (número de tarjeta, CVV y fecha de vencimiento).
4. Al finalizar la compra, podrás visualizar, dentro de Mercado Pago, el comprobante de que se realizó la compra y serás redirigido nuevamente a la tienda.

----[mlb]---- 
## Checkout Transparente 
------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
## Checkout API 
------------

1. Seleccione la opción **Quiero pagar con tarjeta de crédito**.
2. Elija pagar con una nueva tarjeta de crédito y utilice las [tarjetas de prueba](/developers/es/guides/additional-content/testing/test-cards) para realizar el pago. Es importante no pagar con tarjetas para uso personal.
3. Agregue la información de la tarjeta de prueba indicada (número de tarjeta, CVV y fecha de vencimiento).
4. Haz clic en **pedir con pago requerido**.
5. Al finalizar la compra, se podrá ver que la compra ha sido aprobada.

----[mlb]----
> WARNING
>
> Atención
>
> Al finalizar la compra de prueba con Checkout Pro, en el Admin Panel de PrestaShop no será posible visualizar la compra como aprobada debido a que el proceso se realiza dentro del ambiente de Mercado Pago y no en el ambiente de la tienda. Con pruebas realizadas con Checkout Transparente podrá ver la aprobación del pedido.<br>
> </br> <br/>
> Además, en ambos checkouts esta información sobre el pago aprobado no se incluirá en el historial de la cuenta de Mercado Pago porque solo contiene gastos reales (hechos en producción).
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> WARNING
>
> Atención
>
> Al finalizar la compra de prueba con Checkout Pro, en el Admin Panel de PrestaShop no será posible visualizar la compra como aprobada debido a que el proceso se realiza dentro del ambiente de Mercado Pago y no en el ambiente de la tienda. Con pruebas realizadas con Checkout API podrá ver la aprobación del pedido.<br>
> </br> <br/>
> Además, en ambos checkouts esta información sobre el pago aprobado no se incluirá en el historial de la cuenta de Mercado Pago porque solo contiene gastos reales (hechos en producción).
------------

> PREV_STEP_CARD_ES
>
> Configuración de pago
>
> Aprende a configurar los checkouts de Mercado Pago para recibir pagos de tu tienda.
>
> [Configuración de pago](/developers/es/docs/prestashop/payment-configuration)

> NEXT_STEP_CARD_ES
>
> Recibir pagos
>
> Aprende cómo habilitar la tienda para procesar ventas reales.
>
> [Recibir pagos](/developers/es/docs/prestashop/sales-processing/go-to-production)