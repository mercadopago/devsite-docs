# Testear la integración

Las  compras de prueba ayudan a garantizar que los pagos se procesan correctamente antes de permitir las ventas reales. Para realizar pruebas en tu tienda, deberás utilizar el **entorno Sandbox** de Salesforce Commerce Cloud. 

> WARNING
> 
> Importante
>
> Realiza los pedidos de prueba utilizando un correo elecrónico ficticio terminado en **@testuser.com**.

A continuación, encuentra cómo testear los diferentes tipos de pago.

## Compras con Checkout Pro

Para realizar una prueba, sigue estos pasos:

1. Agrega un producto al carrito de tu tienda.
1. Haz clic en el botón "comprar".
1. Continúa la compra como un usuario invitado y completa la información de envío. Luego, haz clic en "Siguente: pago".
1. En la página de pago, selecciona la opción **Mercado Pago**.
1. Completa la transacción en la página de Mecado Pago utilizando uno de los métodos de pago disponibles. Si eliges pagar con tarjeta de crédito, recuerda utilizar las [tarjetas de prueba](/developers/es/docs/salesforce-commerce-cloud/additional-content/your-integrations/test/cards) para realizar el pago. **Nunca utilices tarjetas de uso personal**.
1. Haz clic en el botón **Pagar**.

Si la prueba fue exitosa, te mostrará la pantalla de éxito de compra de Mercado Pago.


## Compras con tarjeta de crédito

Para realizar una prueba, sigue estos pasos:

1. Agrega un producto al carrito de tu tienda.
1. Haz clic en el botón "comprar".
1. Continúa la compra como un usuario invitado y completa la información de envío. Luego, haz clic en "Siguente: pago".
1. En la página de pago, selecciona la opción **Tarjeta de crédito**.
1. Elige pagar con una nueva tarjeta de crédito y utiliza las [tarjetas de prueba](/developers/es/docs/salesforce-commerce-cloud/additional-content/your-integrations/test/cards) para realizar el pago. **Es importante no pagar con tarjetas para uso personal**.
1. Agrega la información de la tarjeta de prueba indicada (número de tarjeta, CVV y fecha de vencimiento).
1. Haz clic en el botón **Pagar**.

Al finalizar la compra, verifica en tu tienda que la compra figure como "Aprobada".

