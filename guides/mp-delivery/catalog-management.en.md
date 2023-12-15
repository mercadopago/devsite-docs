# Catalog management

Catalog management is carried out through API REST, which allows you to perform the following functionalities:

* Perform bulk catalog upload for multiple stores.
* Verify the successful completion of the catalog upload process.
* Update the status of an item using its SKU.

The catalog upload process is asynchronous.

When defining the JSON content for the catalog upload, consider the formatting rules present in the [API Reference](/developers/es/reference/mp_delivery/_proximity_integrationcatalog/post) to avoid generating validation errors.

> We recommend **always monitoring the catalog upload process through the endpoint**, as even if you receive a positive response when using the catalog upload, this is the safest way to verify that the process has completed successfully.
