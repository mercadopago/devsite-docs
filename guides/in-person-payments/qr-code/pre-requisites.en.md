# Previous requirements to integrate

## Glossary

We know some concepts may be new for you. Before starting, here's a cheatsheet.

| Term | Description |
| --- | --- |
| Credentials | Your credentials are the keys we give you so you can set up your integrations. To find them, go to your [credentials]([FAKER][CREDENTIALS][URL]) and select the productive ones. |
| `ACCESS_TOKEN` | The private app key to generate payments. You'll find it on [credentials]([FAKER][CREDENTIALS][URL]) section. You must use it to identify yourself in your integrations. Always use the Production Mode credentials. |
| `USER_ID` | Buyer's user ID in Mercado Pago, consist on the last digits on the `access_token`, after the last dash. Also known as the `COLLECTOR_ID`. |
| `SPONSOR_ID` | Supplier's ID on the integrated system with Mercado Pago. Consist on the last digits of the `access_token`, after the last dash mark. `sponsor_ID` must be different than `USER_ID`. |
| Store | A **physical shop** in which your clients can get products and services. You can have multiple stores on one account. |
| Point of sale (POS) | A **place to perform a transaction** on a store or physical shop. Each POS will be linked with a unique QR code. |
| Order | A purchase made by your client. Contains a list of product with an associated cost. |

> Do you have any questions? Check our [FAQs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/faqs/credentials).

## Previous requirements

Keep these aspects in mind before you start:

### 1. Access to an account

To start the integration, you must **have a Mercado Pago or Mercado Libre account**. 

You can [Sign in](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/pre-requisites) with an existing account or [Create a new account](https://www.mercadopago[FAKER][URL][DOMAIN]).

### 2. Create an application

You will need to create an application for each solution in order to have everything organized and to keep a record that facilitates its management. Create an application to get credentials and set up webhook notifications.

It's easy and we explain how to do it:

1. Enter [Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Select “New application” or “Create your first application”.
3. Give it a name so you can identify it later on.
4. Accept our Terms and Conditions. Done!


> NOTE
>
> Note
>
> If you were to operate in behalf of others, you can work with their credentials safer and easier through [Marketplace](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/marketplace/checkout-api/introduction).

### 3. Generate test users

To make tests is necessary to have at least two users: a buyer and a seller.

Execute the following command to generate a test user:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user"
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
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
> * You can generate up to 10 test accounts at the same time. Because of that, we recommend to save email and password for each one. 
> * Test users expire after 60 days of no activity on Mercado Pago.
> * To make test payments we recommend to use low amounts. 
> * Both buyer and seller should test users. 
> * Use test cards, because is not possible to withdraw money. 

Once the test users are created, you can start with the integration and create the Stores and Point of Sale.

---
### Next steps


> LEFT_BUTTON_REQUIRED_EN
>
> Stores and POS
>
> To build the integration, you must set up your stores and POS first.
>
> [Stores and POS](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/stores-pos)
