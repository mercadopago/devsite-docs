# Integration setup

To configure the integration with Mercado Pago Delivery, follow the steps below.

1. Create the application through the Dashboard. Check [Dashboard](/developers/en/guides/additional-content/your-integrations/dashboard) for instructions.
2. Configure the authorization process via [OAuth](/developers/en/guides/additional-content/security/oauth/introduction) with the restaurants to generate the `access_token` necessary to carry out operations and not stop receiving notifications about new orders through Webhooks.
3. Configure notifications by selecting the "Delivery" option. Check [Webhooks](/developers/en/guides/additional-content/your-integrations/notifications/webhooks) for instructions.
4. Use available APIs to consult and manage informations of stores. Check [Store management](/developers/en/docs/mp-delivery/store-management).
5. Use available APIs to manage orders. Check [Order management](/developers/en/docs/mp-delivery/order-management).

> As a best practice, it is always necessary to check the status of the requests that have been made in our APIs, for cases in which some type of intermittency occurs. This measure is necessary mainly in cases where requests are made that change the status of an order or store. As in the example of an action to accept an order, it is recommended to make subsequent retries and, if the request has not yet returned a positive status (200), this order must be canceled. <br/></br>
> <br/></br>
> The important thing is to always keep the statuses synchronized, whether of an order or a store, between Mercado Pago and POS, so it is always important to implement solutions in case of errors.