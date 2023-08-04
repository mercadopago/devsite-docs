# Imprimir recibo de orden

Después de aceptar la orden, podrás imprimir tu recibo en **formato PDF**.

Para imprimirlo, realiza un GET enviando el `shipment_id` y `access_token` (generado por el proceso de autenticación OAuth) al endpoint  [/proximity-integration/shipments/{shipment_id}/print_label_pdf](/developers/es/reference/mp_delivery/_proximity-integration_shipments_shipment_id_print_label_pdf/get). Consulta [Seguridad](/developers/es/guides/additional-content/security/oauth/introduction) para obtener más información sobre OAuth.

El recibo siempre se puede imprimir, excepto cuando la orden tiene [estado cancelado o enviado](/developers/es/docs/mp-delivery/order-management/get-order-data).