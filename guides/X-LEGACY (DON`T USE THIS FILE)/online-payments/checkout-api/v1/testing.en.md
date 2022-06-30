# Test your integration

We will explain how to use our test cards and users to check that your payments are correctly created and your messages are effective.

## How to test your integration

**Test users allow you to test your integration** by generating payment flows in an exact copy of your integration.

| Types of users | Description |
| --- | --- |
| Seller | It is the test account you use **to configure the application and credentials for collection**. |
| Buyer | It is the test account you use **to test the purchase process**. |

<br>

> SERVER_SIDE
>
> h2
>
> How to create users

First, you should have, at least, two test users: a buyer and a seller.

Execute the following curl to generate a test user:


```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID],"description" : "a description""}'
```


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "site_id": "[FAKER][GLOBALIZE][UPPER_SITE_ID]",
    "description": "a description",
    "email": "test_user_123456@testuser.com",
    "date_created": "2021-11-04T12:02:35Z",
    "date_last_updated": "2021-11-04T12:02:35Z"
}
```

>WARNING
>
>Importante
>
> * Both buyer and seller must be test users.
> * You can generate up to 10 simultaneous test user accounts. Therefore, we recommend you save each _email_ and _password_.
> * Test users expire after 60 days without activity in Mercado Pago.
> * To make test payments we recommend using low amounts.
> * Amounts should be within the ----[mla]---- [minimum and maximum values](https://www.mercadopago.com.ar/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlm]---- [minimum and maximum values](https://www.mercadopago.com.mx/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlu]---- [minimum and maximum values](https://www.mercadopago.com.uy/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mco]---- [minimum and maximum values](https://www.mercadopago.com.uy/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mpe]---- [minimum and maximum values](https://www.mercadopago.com.pe/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlc]---- [minimum and maximum values](https://www.mercadopago.cl/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlb]---- [minimum and maximum values](https://www.mercadopago.com.br/ajuda/minimo-maximo-posso-pagar_324) ------------ for each payment method.

## Test the payment flow

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Configure the integration with seller user data

Configure your seller user's [test public key]([FAKER][CREDENTIALS][URL]) at your application frontend, and the [test private key]([FAKER][CREDENTIALS][URL]) at the backend.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Make a payment with your buyer user

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit card tests

Start your integration with your test seller user credentials:

1. Fill out [test card data](#bookmark_test_cards).
1. Enter your test buyer user e-mail.
1. Confirm purchase. Done!

## Test Cards

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
| :---  | :---: | :---: | :---: |
| Visa | 4075 5957 1648 3764 | 123 | 11/25 |

------------
----[mlu]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard |  5808 8877 7464 1586| 123 | 11/25 |
| Visa | 4104 2962 6235 5432 | 123 | 11/25 |

------------
----[mpe]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------

To **test different payment results,** complete the information you want in the name of the cardholder:

- APRO: Payment approved.
- CONT: Payment pending.
- OTHE: Rejected by general error.
- CALL: Rejected with validation to authorize.
- FUND: Rejected for insufficient amount.
- SECU: Rejected by invalid security code.
- EXPI: Rejected due to problem with expiration date.
- FORM: Rejected by error in the form.

> WARNING
>
> Important
>
> Consider that you can't test the entire flow for cash payment methods.

## Start receiving payments

To start charging, you need to meet the [requirements to go to production](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/goto-production), and must [activate your credentials]([FAKER][CREDENTIALS][URL]).

Before activating them, verify that the credentials in your integration are those of the account that receives the money from the sales.<br/>

---
### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Error Response Handling
>
> Help your customers make error-free payments.
>
> [Error Response Handling](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/handling-responses)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> API References
>
> Find all the information required to interact with our APIs.
>
> [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference)
