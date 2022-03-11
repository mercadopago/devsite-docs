# Aceptar pedido

Cuando el estado de entrega sea **Ready_to_ship**, puedes aceptar el pedido.

Para aceptar el pedido que fue confirmado en el PDV/POS, realiza un PUT enviando el `shipment_id` y el `access-token` (generado por el proceso de autenticación OAuth) al endpoint [/proximity-integration/shipments/{shipment_id}/accept](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/mp_delivery/_proximity-integration_shipments_shipment_id_accept/put). Consulta [Seguridad](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction) para obtener más información sobre OAuth.

Al aceptar el pedido, se cambiará el estado y en la respuesta se indicará el estado del nuevo pedido.

> NOTE
>
> Importante
>
> Es importante saber que solo en los estados **ready_to_ship** y **ready_to_print** es posible aceptar un pedido. Después de aceptar el pedido, el subestado será "impreso". Si el pedido no es aceptado 5 minutos después de su creación, se cancelará automáticamente.

> NEXT_STEP_CARD_ES
>
> Imprimir recibo de pedido
>
> Aprende a imprimir comprobantes de pedidos con Mercado Pago Delivery.
>
> [Imprimir recibo de pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/print-order-receipt)
