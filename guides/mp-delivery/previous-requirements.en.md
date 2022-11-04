# Integration prerequisites

To be able to integrate Mercado Pago Delivery with your POS, you must meet the requirements below.

| Requirements | Description |
|---|---|
|Mercado Pago Account| It is necessary for the integrator to have a Mercado Pago account to create an application. With an application you can configure your Webhook, to receive notifications of new orders, and generate your credentials. If you don't have one, [check here](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create it.|
|Credentials| The [credentials](/developers/en/guides/additional-content/credentials/credentials) are unique passwords with which we identify an integration in your account, and which are used to capture payments in virtual stores and other applications securely.|
|Access Token| Through the OAuth authorization protocol, each restaurant will be able to authorize the application that was created in the integrator's account to receive notifications of new orders. In addition, each restaurant will have an access token that will be used to carry out operations using the Mercado Pago Delivery APIs. Check [OAuth](/developers/en/guides/additional-content/security/oauth/introduction) to understand the authorization flow that must be done with the restaurants.|