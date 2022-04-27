# Cambiar el estado de la sucursal

Los estados de funcionamiento se definen de la siguiente manera:

* **Enabled**: la sucursal está abierta y lista para recibir órdenes.
* **Paused**: la sucursal está en pausa y no podrá recibir nuevas órdenes, pero seguirá apareciendo en la app de Mercado Pago.
* **Disabled**: la sucursal está cerrada, no podrá recibir nuevas órdenes y ya no se mostrará en la aplicación de Mercado Pago.

Para cambiarlos, debes realizar un PUT enviando el `store_id` y el `access-token` (generados por el proceso de autenticación OAuth) al endpoint [/proximity-integration/stores/{store_id}/status](/developers/es/reference/mp_delivery/_proximity-integration_users_seller_id_stores/get). Consulta [Seguridad](/developers/es/guides/additional-content/security/oauth/introduction) para obtener más información sobre OAuth.

> PREV_STEP_CARD_ES
>
> Obtener datos de la sucursal
>
> Más información sobre cómo obtener datos de la sucursal.
>
> [Obtener datos de la sucursal](/developers/es/guides/mp-delivery/store-data)

> NEXT_STEP_CARD_ES
>
> Cambiar ID externo de la sucursal
>
> Aprende a cambiar el ID externo de tu sucursal.
>
> [Cambiar ID externo de sucursal](/developers/es/guides/mp-delivery/change-store-external-id)