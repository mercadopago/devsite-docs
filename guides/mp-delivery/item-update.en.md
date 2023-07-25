# Item Update

To change the status of an item, make a PUT request to the endpoint [/proximity/integration/v1/catalog/stores/{external_store_id}/items/{external_item_id}](/developers/en/reference/mp_delivery/_proximity_integrationcatalog_stores_external_store_id_items_external_item_id/put), providing the `external_id` (SKU) of the item and the `external_id` of the store.

> The `external_id` of a store can be configured through the endpoint [/proximity-integration/stores/{StoreID}/external_id](/developers/en/reference/mp_delivery/_proximity-integration_stores_StoreID_external_id/put).

Additionally, you will need to include the `access_token` of the user who received the publication in the header. The `access_token` can be generated through the OAuth authentication process. Refer to the [OAuth documentation](/developers/en/docs/mp-delivery/additional-content/security/oauth/introduction) for more information.

An item can return the following states in the response:

| State   | Description    |
|---------|----------------|
| active  | Activate the item. |
| paused  | Pause the item. | 
