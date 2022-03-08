# Cancelar pedido

Para cancelar un pedido que fue aceptado en el TPV, realice un PUT enviando el `shipment_id` y `access-token` (generado por el proceso de autenticación OAuth) al endpoint  [/proximity-integration/shipments/{shipment_id}/cancel] (https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/mp_delivery/_proximity-integration_shipments_shipment_id_cancel/put). 

Consulte [Seguridad](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction) para obtener más información sobre OAuth.

> PREV_STEP_CARD_ES
>
> Imprimir recibo de pedido
>
> Aprende a imprimir comprobantes de pedidos con Mercado Pago Delivery.
>
> [Imprimir recibo de pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/print-order)