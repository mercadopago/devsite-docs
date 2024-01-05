# Prerequisites

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

1. Enter [Your integrations](https://www.mercadopago.com/developers/panel/app) and click on **Create application**.
2. Name the application so you can identify it later.
3. Select the option **In-person Payments** and then **QRCode**
4. Optionally, you can select the integration mode, either **attended** or **dynamic**.
5. Accept our Terms and Conditions, and then click on **Create application** again. Done!

> NOTE
>
> Note
>
>If your Point of Sale (POS) integrator has several tenants, see topic 4 and 5 within this same section. Check your integration security and implement [OAuth.](/developers/es/docs/qr-code/additional-content/security/oauth/introduction)

## 3. Generate test users

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

Once the test users are created, you can begin with your integration by creating a store and POS (Point of Sale).

## 4. Obtain your Access Token (OAuth)

If you are an integrator that works with several retailers enabling them to operate with Mercado Pago, we recommend to perform the **OAuth - authentication between accounts** process. The process enables customers securely share personal data with a third-party system.

The Access Token is not shareable in any way other than through OAuth. You can learn more information about it reading our [documentation](/developers/es/docs/qr-code/additional-content/security/oauth/introduction).

## 5. Identify your integration (Sponsor ID)

When a Mercado Pago account is created, it is assigned wiyh a User ID, if they are users, or a Cust ID, if they are a seller. Both are unique IDs that are automatically generated, and will allow the integrations to be associated with each account by including them in the API requests.

When you make integrations for third parties, the `sponsor_id` parameter will allow you to identify the orders that are placed by your point of sale.  You will have to send the Sponsor ID in the [in-store orders API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put) requests. Follow the instructions below to learn how to collect and send this information.

1. If you haven't done so yet, create an account on the Mercado Pago portal.
2. Obtain the user identification (Cust ID or User ID) of your account by accessing the [details of the application](/developers/en/docs/qr-code/additional-content/your-integrations/application-details) that you have created earlier.
3. Include the User ID of your integrator account in the seller's Sponsor ID.
4. Submit the Sponsor ID on all QR transactions, as shown in our [API Reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).