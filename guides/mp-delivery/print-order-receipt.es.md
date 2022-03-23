# Imprimir recibo de orden

Después de aceptar la orden, podrás imprimir tu recibo en **formato PDF**.

Para imprimirlo, realiza un GET enviando el `shipment_id` y `access-token` (generado por el proceso de autenticación OAuth) al endpoint  [/proximity-integration/shipments/{shipment_id}/print_label_pdf](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/mp_delivery/_proximity-integration_shipments_shipment_id_print_label_pdf/get). Consulta [Seguridad](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction) para obtener más información sobre OAuth.

El recibo siempre se puede imprimir, excepto cuando la orden tiene [estado cancelado o enviado](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/get-order-data).

> NEXT_STEP_CARD_ES
>
> Cancelar orden
>
> Conoce cómo cancelar órdenes en Mercado Pago Delivery.
>
> [Cancelar pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/cancel-order)