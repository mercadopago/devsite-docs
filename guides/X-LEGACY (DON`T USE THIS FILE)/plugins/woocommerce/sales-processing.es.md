# Procesamiento de ventas 

Completados todos los pasos, tus clientes podrán realizar compras en tu tienda. Al realizar una transacción, es común que algunos mensajes regresen con información específica sobre la compra. 

Esta información está disponible en la sección **Notas del pedido** en el panel de WooCommerce. 

![Notas del pedido](/images/woocomerce/es_order_Notes_03.png)

En esta sección, tendrás acceso a detalles del posible status y motivos de cada devolución.

## Status de pago

Cada venta genera un status de pago que muestra la situación de la venta, incluida la confirmación, el pendiente o recusa del pago y otras informaciones importantes sobre la transacción. 

Hay dos estados en una venta de WooCommerce: **status del pago** y **status del pedido**. En la siguiente tabla, podrás encontrar los detalles sobre cómo se correlaciona esta información.

| Mercado Pago status (pago) | WooCommerce status(pedido) |
|---|---|
| Pending | Pending |
| Approved | Processing |
| Inprocess | On hold |
| Inmediation | On hold|
| Rejected | Failed |
| Cancelled | Cancelled |
| Refunded | Refunded |
| Chargedback| Refunded|

Para obtener más información, accede a la sección [Actividades](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) de tu cuenta de Mercado Pago y al [manual de pedidos de WooCommerce](https://docs.woocommerce.com/document/gestion-de-pedidos/).

Además, puedes acceder a los detalles de cada intento de pago que ocurrió en su tienda. Para hacer esto, ve al panel de WordPress y luego haz clic en **WooCommerce > Pedidos > Detalles del pedido**.

## Motivos de los rechazos

En cuanto a la **aprobación de pagos** en su tienda, hay tres razones principales que pueden afectar directamente estos resultados. 

A continuación, detallamos los factores que influyen en lo rechazo de un pago:

| Motivo | Situación | Cómo evitarlo |
|---|---|---|
| Comprador | Errores en la cumplimentación de la dirección, CPF o datos de la tarjeta. | Checkout con información clara en el paso a paso de la compra. |
| Rechazos bancarios | Tarjetas con fecha de vencimiento, falta de límite, saldo insuficiente o inhabilitadas para compras online.| Ofrecer alternativas a otros medios y/o condiciones de pago.|
| Prevención del fraude | El sistema antifraude de Mercado Pago protege tu negocio contra ataques maliciosos que pueden generar pérdidas.| Este tipo de rechazo es beneficioso para tu tienda. |

> NEXT_STEP_CARD_ES
>
> Preguntas frecuentes
>
> Consulta las principales dudas sobre la integración.
>
> [Preguntas frecuentes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/woocommerce/faq)