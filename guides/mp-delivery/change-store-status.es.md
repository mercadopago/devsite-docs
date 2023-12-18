# Cambiar el estado de la sucursal

Los estados de funcionamiento se definen de la siguiente manera:

* **Enabled**: la sucursal está abierta y lista para recibir órdenes.
* **Paused**: la sucursal está en pausa y no podrá recibir nuevas órdenes, pero seguirá apareciendo en la app de Mercado Pago.
* **Disabled**: la sucursal está cerrada, no podrá recibir nuevas órdenes y ya no se mostrará en la aplicación de Mercado Pago.

Para cambiarlos, debes realizar un PUT enviando el `store_id` y el `access_token` (generados por el proceso de autenticación OAuth) al endpoint [/proximity-integration/stores/{store_id}/status](/developers/es/reference/mp_delivery/_proximity-integration_stores_store_id_status/put). Consulta [Seguridad](/developers/es/guides/additional-content/security/oauth/introduction) para obtener más información sobre OAuth.