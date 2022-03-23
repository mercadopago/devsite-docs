# Aceptar pedido

Cuando el estado de entrega sea **Ready_to_ship**, puedes aceptar la orden.

Para aceptar  la orden que fue confirmada en el PDV/POS, realiza un PUT enviando el `shipment_id` y el `access-token` (generado por el proceso de autenticación OAuth) al endpoint [/proximity-integration/shipments/{shipment_id}/accept](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/mp_delivery/_proximity-integration_shipments_shipment_id_accept/put). Consulta [Seguridad](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction) para obtener más información sobre OAuth.

Al aceptar la orden, se cambiará el estado y en la respuesta se indicará el estado de la nueva orden.

> NOTE
>
> Importante
>
> Es importante saber que solo es posible aceptar una orden en los estados **ready_to_ship** y **ready_to_print**. Después de aceptar la orden, el subestado será **printed**. Si la orden no es aceptada 5 minutos después de su creación, se cancelará automáticamente.

> NEXT_STEP_CARD_ES
>
> Imprimir recibo de orden
>
> Aprende a imprimir comprobantes de órdenes con Mercado Pago Delivery.
>
> [Imprimir recibo de pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/print-order-receipt)
