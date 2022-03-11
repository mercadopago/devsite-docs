# Imprimir recibo de orden

Después de aceptar la orden, podrás imprimir tu recibo en **formato PDF**.

Para imprimirlo, realice un GET enviando el `shipment_id` y `access-token` (generado por el proceso de autenticación OAuth) al endpoint  [/proximity-integration/shipments/{shipment_id}/print_label_pdf](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/mp_delivery/_proximity-integration_shipments_shipment_id_print_label_pdf/get). Consulte [Seguridad](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction) para obtener más información sobre OAuth.

El recibo siempre se puede imprimir, excepto cuando el pedido tiene [estado cancelado o enviado](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/get-order-data).

[[[
```response PDF

![recibo](/images/mp-delivery/recibo.png)

```
]]]

> NEXT_STEP_CARD_ES
>
> Cancelar pedido
>
> Conoce cómo cancelar pedidos en Mercado Pago Delivery.
>
> [Cancelar pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/cancel-order)
