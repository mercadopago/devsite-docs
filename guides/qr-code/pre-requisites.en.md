# Previous requirements to integrate

Keep these aspects in mind before you start:

* Access to an account
* Create an application
* Generate test users
* Obtain your Access token
* Identify your integration

## 1. Access to an account

To start integrating, you must **have a Mercado Pago or Mercado Libre account**.

You can sign in with an existing account or [Create a new account](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).

## 2. Create an application

Creating a credential is necessary to make transactions using the Mercado Pago integration. This credential contains an ID and an Access Token required to make transactions using a Mercado Pago account.

You must create an application to obtain credentials and set up webhook notifications.

It's quite easy to do:

1. Enter [Your integrations](https://www.mercadopago.com/developers/panel/applications).
2. Select the **+** symbol in **Your applications** section to create a new application.
3. Name the application to identify it later.
4. Accept our Terms and Conditions. Done!

> NOTE
>
> Note
>
>If your POS integrator has several tenants, see topic 4 and 5. Check your integration security and implement [OAuth](/developers/es/docs/qr-code/additional-content/security/oauth/introduction).

## 3. Generate test users

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

## 4. Obtain your Access Token (OAuth)

If you are an integrator that works with several retailers enabling them to operate with Mercado Pago, we recommend to perform the **OAuth - authentication between accounts** process. The process enables customers securely share personal data with a third-party system.

The Access Token is not shareable in any way other than through OAuth.

## 5. Identify your integration (Sponsor ID)

To identify the orders placed by your POS (Point Of Sale), include the Sponsor ID, and check the [in-store orders APIs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get) on how to send this information.

Step by step:

> * Create an account on the Mercado Pago portal (Integrator ID).
> * Obtain the user identification (Cust ID or User ID) of your account.
> * Include the User ID of your integrator account in the seller's Sponsor ID.
> * Submit the Sponsor ID on all QR transactions. [See API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).