# Import Catalog

To bulk import a catalog to multiple stores of the same user, make a POST request with the user's `access-token` in the header to the following endpoint [/proximity/integration/v1/catalog](/developers/en/reference/mp_delivery/_proximity_integrationcatalog/post). The `access-token` can be generated through the OAuth authentication process. Refer to the [OAuth documentation](/developers/en/docs/mp-delivery/additional-content/security/oauth/introduction) for more information.

When inserting the IDs of the stores that will receive the catalog, include the `external_ids`. The external ID of a store can be configured through the endpoint [/proximity-integration/stores/{StoreID}/external_id](/developers/en/reference/mp_delivery/_proximity-integration_stores_StoreID_external_id/put).

| Response | Description |
|---|---|
| 202 - Success | All requests were sent successfully. |
| 206 - Partial Error | Some requests were not sent correctly and contain an error. |


In the [Catalog API Reference documentation](/developers/en/reference/mp_delivery/_proximity_integrationcatalog/post), you can find a complete description of the fields that can be sent in the request body.

> WARNING
>
> Important
>
> As the catalog upload process is asynchronous, you should use the endpoint [Check publication status](/developers/en/reference/mp_delivery/_proximity_integrationcatalog_publication_id/get) to verify if the catalog was imported successfully. If there is an error in the validation of this publication, it is recommended to implement a retry mechanism.