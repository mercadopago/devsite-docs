# Status de pago

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

> NEXT_STEP_CARD_ES
>
> Motivos de los rechazos 
>
> Consulta las principales dudas sobre la integración.
>
> [Motivos de los rechazos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/woocommerce/reasons-refusals)