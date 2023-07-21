# Actualizar ítem 

Para cambiar el status de un ítem, realiza un PUT al endpoint [/proximity/integration/v1/catalog/stores/{external_store_id}/items/{external_item_id}](/developers/es/reference/mp_delivery/_proximity_integrationcatalog_stores_external_store_id_items_external_item_id/put) informando el `external_id` (SKU) del ítem y `external_id` de la tienda. 

> El `external_id` de una tienda se puede configurar a través del endpoint [/proximity-integration/stores/{StoreID}/external_id](/developers/es/reference/mp_delivery/_proximity-integration_stores_StoreID_external_id/put).
 
Además, también será necesario informar en el header el `access-token` del usuario que recibió la publicación. El `access-token` puede ser generado por el proceso de autenticación de OAuth. Consulta la [documentación de OAuth](/developers/es/docs/mp-delivery/additional-content/security/oauth/introduction) para obtener más información.

Un ítem puede devolver los siguientes estados en la respuesta:

| Estado | Descripción |
|---|---|
| active | Activa el ítem. |
| paused | Pausa el ítem. |

