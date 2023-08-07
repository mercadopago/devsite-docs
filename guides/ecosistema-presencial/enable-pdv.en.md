# Enable PDV mode on the Point device

> WARNING
>
> Important
>
> This step is only necessary to integrate Point devices.


To enable PDV mode on your Point device, you will first need to identify it. To do this, you must make a GET request to the endpoint [Get devices](/developpers/en/reference/instore-api/point/v1/devices/get):

> This request will return the devices associated with the Mercado Pago account as a response. If you see several devices in the list, you can identify the desired Point device by using the last characters of the `id` field. The last numbers of this value should match the serial number displayed on the back label of the Point device you are integrating.

Next, make a PATCH request to the endpoint [Change operation mode](/developpers/en/reference/instore-api/point/v1/devices/patch), replacing `device.id` with the value obtained in that field from the response to the previous GET request.

Finally, restart the Point device. When it reactivates, you will see a confirmation on the screen, and your Point device will be linked to PDV mode.

> WARNING
>
> Important
>
> Please note that only one device in PDV mode is allowed per point of sale, and it should only be handled by a store operator. The use of a device in [unattended self-service](/developers/en/docs/ecosistema-presencial/glossary) will be the full responsibility of the merchant. Consider this limitation when implementing the integration to ensure the proper and safe use of the devices.
