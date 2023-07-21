# Check publication status

When importing a catalog, it is important to ensure that the process is completed successfully. To do this, make a GET request to the endpoint [/proximity/integration/v1/catalog/{publication_id}](/developers/en/reference/mp_delivery/_proximity_integrationcatalog_publication_id/get) with the following values:

* `publication_id`: This information is obtained from the response of the catalog import endpoint.
* `access-token`: This information should be included in the header. It corresponds to the user who received the publication. The access-token can be generated through the OAuth authentication process. Refer to the [OAuth documentation](/developers/en/docs/mp-delivery/additional-content/security/oauth/introduction) for more information.

This endpoint can return the following states in the response:

| State | Description |
|---|---|
| processing | The catalog is being processed. |
| error | The publication process was canceled due to an unrecoverable error. |
| success | The catalog has been published. |

> WARNING
>
> Important
>
> Since the catalog upload process is asynchronous, you should use the endpoint [Check Publication Status](/developers/en/reference/mp_delivery/_proximity_integrationcatalog_publication_id/get) to verify if the catalog was imported successfully. If there is an error in the validation of this publication, we recommend implementing a retry mechanism.
