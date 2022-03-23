# Cambiar el estado de la sucursal

Los estados de funcionamiento se definen de la siguiente manera:

* **Enabled**: la sucursal está abierta y lista para recibir órdenes.
* **Paused**: la sucursal está en pausa y no podrá recibir nuevas órdenes, pero seguirá apareciendo en la app de Mercado Pago.
* **Disabled**: la sucursal está cerrada, no podrá recibir nuevas órdenes y ya no se mostrará en la aplicación de Mercado Pago.

Para cambiarlos, debes realizar un PUT enviando el `store_id` y el `access-token` (generados por el proceso de autenticación OAuth) al endpoint [/proximity-integration/stores/{store_id}/status](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/mp_delivery/_proximity-integration_users_seller_id_stores/get). Consulta [Seguridad](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction) para obtener más información sobre OAuth.

> NEXT_STEP_CARD_ES
>
> Cambiar ID externo de la sucursal
>
> Aprende a cambiar el ID externo de su tienda.
>
> [Cambiar ID externo de tienda](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/change-store-external-id)