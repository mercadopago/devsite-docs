# Aceptar pedido

Cuando el estado de entrega sea **Ready_to_ship**, puedes aceptar la orden.

Para aceptar  la orden que fue confirmada en el PDV/POS, realiza un PUT enviando el `shipment_id` y el `access-token` (generado por el proceso de autenticación OAuth) al endpoint [/proximity-integration/shipments/{shipment_id}/accept](/developers/es/reference/mp_delivery/_proximity-integration_shipments_shipment_id_accept/put). Consulta [Seguridad](/developers/es/guides/additional-content/security/oauth/introduction) para obtener más información sobre OAuth.

Al aceptar la orden, se cambiará el estado y en la respuesta se indicará el estado de la nueva orden.

> NOTE
>
> Importante
>
> Es importante saber que solo es posible aceptar una orden en los estados **ready_to_ship** y **ready_to_print**. Después de aceptar la orden, el subestado será **printed**. Si la orden no es aceptada 5 minutos después de su creación, se cancelará automáticamente.

> PREV_STEP_CARD_ES
>
> Obtener datos de la orden
>
> Conoce cómo obtener datos de órdenes con Mercado Pago Delivery.
>
> [Obtener datos de la orden](/developers/es/docs/mp-delivery/order-management/get-order-data)

> NEXT_STEP_CARD_ES
>
> Imprimir recibo de orden
>
> Aprende a imprimir comprobantes de órdenes con Mercado Pago Delivery.
>
> [Imprimir recibo de orden](/developers/es/docs/mp-delivery/order-management/print-order-receipt)
