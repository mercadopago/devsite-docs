# Realizar una prueba

Las pruebas de compras ayudan a garantizar que los pagos se procesan correctamente antes de permitir las ventas reales. Sigue los pasos a continuación para realizar una compra de prueba:

1. Ve a la página de inicio de la tienda y **selecciona un producto para comprar**.
2. Haz clic en **Comprar** y continúa con tu carrito.
3. Ingresa un código postal válido según el país en donde opere la tienda, para simular el envío. Haz clic en **Continuar**.
4. Completa los campos obligatorios y selecciona **Mercado Pago como método de pago**.
5. En la pantalla de pago, elije **pagar con una nueva tarjeta de crédito** y usa las [tarjetas de prueba](/developers/es/docs/shopify/test-cards) para realizar el pago. **Importante**: no inicies sesión en tu cuenta de Mercado Pago ni intentes realizar el pago con tarjetas de uso personal.
6. Agrega la información de la tarjeta de prueba indicada y haz clic en **Pagar**.
7. Al finalizar la compra, verás constancia de que la compra se ha realizado dentro de Mercado Pago y serás redirigido nuevamente a la tienda.

> WARNING
>
> Importante
>
> Al finalizar la compra de prueba con Checkout Pro, esta no aparecerá como aprobada en el Panel Administrativo de Shopify porque el proceso se realizó dentro del ambiente de Mercado Pago y no en el entorno de la tienda. Es decir, el pedido se generará automáticamente, pero no aparecerá como pagado. Además, esta información de pago aprobado no aparecerá en el historial de la cuenta de Mercado Pago porque solo contiene gastos reales, realizados en producción.