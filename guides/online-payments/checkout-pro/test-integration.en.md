# Test your integration

The **test users allow you to test your Checkout Pro** by generating payment flows as in an exact copy of your integration.

| Test users type | Description |
| --- | --- |
| Seller | It is the account you use to **configure the application and credentials for collection**. |
| Buyer | It is the account you use to **test the purchase process.**<br/><br/>There are two ways to make the payment: as a **guest user**, using an email address of your choice, and as a **registered user**, using a Mercado Pago account with username and password. In this last scenario, money available in the account and presaved cards will be enabled as payment methods. |

## Create users

To perform the tests **it is necessary that you have at least two users:** a seller and a buyer.

Execute the following curl to generate a test user:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```

The answer will have a structure similar to the following example:

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

>WARNING
>
>Important
>
> * You can generate up to 10 test user accounts simultaneously. Therefore, we recommend you _save each email and password._
> * Test users expire after 60 days without activity in Mercado Pago.
> * Both buyer and seller must be test users.

## Test the payment flow

### 1. Configure the checkout with the information of your selling user

Generate a preference with the [credentials]([FAKER][CREDENTIALS][URL]) of the test user that you want to use as a seller.

### 2. Make a payment with your buyer user

#### Purchase as guest user

When opening the checkout created with the data of your seller user:

1. Select `Card` as the payment method.
2. Enter the details of a [test card](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration#bookmark_tarjetas_de_prueba).
3. Fill in the desired email.

#### Buy as registered user

When opening the checkout created with the data of your seller user:

1. Log in to a Mercado Pago account with your buyer test user.
2. Select `Card` as the payment method.
3. Choose a presaved card or enter the details of a new [test card](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/test-integration#bookmark_tarjetas_de_prueba).

>WARNING
>
>Important
>
> * Use low amounts to make the payment tests.
> * Always use test cards, since it is not possible to withdraw money.


### Test Cards

----[mla]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------
----[mlb]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 4332 1540 6351 | 123 | 11/25 |
| Visa | 4235 6477 2802 5682 | 123 | 11/25 |
| American Express | 3753 651535 56885 | 1234 | 11/25 |

------------
----[mlc]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5416 7526 0258 2580 | 123 | 11/25 |
| Visa | 4168 8188 4444 7115 | 123 | 11/25 |
| American Express | 3757 781744 61804 | 1234 | 11/25 |

------------
----[mco]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5254 1336 7440 3564 | 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |

------------
----[mlm]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Visa | 4075 5957 1648 3764 | 123 | 11/25 |

------------
----[mlu]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |

------------
----[mpe]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------

To **test different payment results,** fill in the desired status in the name of the cardholder:

| Payment status | Description |
| --- | --- |
| `APRO` | Payment approved |
| `CONT` | Payment pending |
| `OTHE` | Rejected by general error |
| `CALL` | Rejected with validation to authorize |
| `FUND` | Rejected for insufficient amount | 
| `SECU` | Rejected by invalid security code | 
| `EXPI` | Rejected due to problem with expiration date | 
| `FORM` | Rejected by error in the form | 

## Receive payments

To start charging, you must [activate your credentials]([FAKER][CREDENTIALS][URL]).

Before activating them, verify if the credentials used in your integration are the same as those of the account responsible for receiving the money from sales.

---

### Next step

> LEFT_BUTTON_REQUIRED_EN
>
> Preferences configuration
>
> Configure the attributes of your preferences and adapt the Checkout Pro to your business model.
>
> [Preferences configuration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations)
