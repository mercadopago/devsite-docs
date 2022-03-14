# Cambiar el estado de la tienda

Los estados de salud se definen de la siguiente manera:

* **Habilitado**: la tienda está abierta y lista para recibir pedidos.
* **Pausada**: la tienda está en pausa y no podrá recibir nuevos pedidos, pero seguirá apareciendo en la app de Mercado Pago.
* **Desactivado**: la tienda está cerrada, no podrá recibir nuevos pedidos y ya no se mostrará en la aplicación de Mercado Pago.

Para cambiarlos, debe realizar un PUT enviando el `store_id` y el `access-token` (generados por el proceso de autenticación OAuth) al endpoint [/proximity-integration/stores/{store_id}/status](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/mp_delivery/_proximity-integration_users_seller_id_stores/get). Consulte [Seguridad](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction) para obtener más información sobre OAuth.

> NEXT_STEP_CARD_ES
>
> Cambiar ID externo de la tienda
>
> Aprende a cambiar el ID externo de su tienda.
>
> [Cambiar ID externo de tienda](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/change-store-external-id)