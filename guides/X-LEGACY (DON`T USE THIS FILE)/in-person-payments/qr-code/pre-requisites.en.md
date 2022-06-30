# Previous requirements to integrate

## Glossary

We know some concepts may be new for you. Before starting, here's a cheatsheet.

| Term | Description |
| --- | --- |
| Credentials | Your credentials are the keys we give you so you can set up your integrations. To find them, go to your [credentials]([FAKER][CREDENTIALS][URL]) and select the productive ones. |
| `ACCESS_TOKEN` | The private app key to generate payments. You'll find it on the [credentials]([FAKER][CREDENTIALS][URL]) section. You must use it to identify yourself in your integrations. Always use the Production Mode credentials. |
| `USER_ID` | Buyer's user ID in Mercado Pago, consists of the last digits on the `access_token`, after the last dash. So, for instance, if your `access_token` is **APP_USR-8499883828799661-062409-bf057c51fc05f87eba5608328f869879-446566691**, then your `USER_ID` is **446566691**. Also known as the `COLLECTOR_ID`. |
| `SPONSOR_ID` | Supplier's ID on the integrated system with Mercado Pago. Consist of the last digits of the `access_token`, after the last dash. So, for instance, if your `access_token` is **APP_USR-8499883828799661-062409-bf057c51fc05f87eba5608328f869879-776566693**, then your `USER_ID` is **776566693**. `sponsor_ID` must be different than `USER_ID`. |
| Store | A **physical shop** in which your clients can get products and services. You can have multiple stores on one account. |
| Point of sale (POS) | A **place to perform a transaction** on a store or physical shop. Each POS will be linked with a unique QR code. |
| Order | A purchase made by your client. Contains a list of products with an associated cost. |

## Previous requirements

Keep these aspects in mind before you start:

### 1. Access to an account

To start the integration, you must **have a Mercado Pago or Mercado Libre account**. 

You can [Sign in](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/pre-requisites) with an existing account or [Create a new account](https://www.mercadopago[FAKER][URL][DOMAIN]).

### 2. Create an application

To transact via Mercado Pago integration, a credential must be created. This credential will have an identification and the Access Token, only with this token will it be possible to transact using a Mercado Pago account.
Create an application to get credentials and set up webhook notifications.

It's easy and we explain how to do it:

1. Enter [Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Select “New application” or “Create your first application”.
3. Give it a name so you can identify it later on.
4. Accept our Terms and Conditions. Done!


> NOTE
>
> Note
>
> In case of POS integrated with several tenants, see topic 4 and 5. Pay attention to the security of your integration and implement OAuth.

### 3. Generate test users

To make tests it is necessary to have at least two users: a buyer and a seller.

Execute the following command to generate a test user:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID],"description" : "a description""}'
```

> NOTE
> 
> Note
> 
> **Productive credentials** should be used for the account you'll be operating with.

Response:

```json
{
"id": 123456,
"nickname": "TT123456",
"password": "qatest123456",
"site_status": "active",
"email": "test_user_123456@testuser.com"
}
```

> WARNING
> 
> IMPORTANT
> 
> * You can generate up to 10 test accounts at the same time. Because of that, we recommend saving email and password for each one. 
> * Test users expire after 60 days of no activity on Mercado Pago.
> * To make test payments we recommend to use low amounts. 
> * Both buyer and seller should test users. 
> * Use test cards, because it is not possible to withdraw money. 

Once the test users are created, you can start with the integration and create the Stores and Point of Sale.

### 4. How to collect Access Token (OAuth)

For you integrator, who will work with several stores that use Mercado Pago digital wallet, we advise you to do the OAuth process - authentication between accounts, this process consists of the customer allowing their data to be shared with a third party system in a secure way.

The access token cannot be shared in any way other than OAuth. [More information](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials)

### 5. Cómo identificar tu integración

To identify the orders that are transacted by your management system, include the sponsor ID, see in the [instore orders APIs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference) how you will send this information.
 
Step by step:
> * Create an account on the Mercado Pago portal (Integrator identification).
> * Collect Collector ID (Cust ID or User ID) of your account.
> * Include the Collector ID of your Integrator account inside the Sponsor ID of the seller.
> * Submit Sponsor ID on all QR transactions. [See api](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).

---
### Next steps


> LEFT_BUTTON_REQUIRED_EN
>
> Stores and POS
>
> To build the integration, you must set up your stores and POS first.
>
> [Stores and POS](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/stores-pos)
