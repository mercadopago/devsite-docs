# Test your Integration

We will explain how to use our test cards and users to check that your payments are correctly created and your messages are effective.

## How to test your integration

**Test users allow you to test your integration** by generating payment flows in an exact copy of your integration.

Types of users | Description
------------ | -------------
Seller | It is the test account you use **to configure the application and credentials for collection**. |
Buyer | It is the test account you use **to test the purchase process**. |

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
"https://api.mercadopago.com/users/test_user?access_token=PROD_ACCESS_TOKEN" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response

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
>Importante
>
> * Both buyer and seller must be test users.
> * You can generate up to 10 concurrent test user accounts. Therefore, we recommend you save each _email_ and _password_.
> * Test users expire after 60 days without activity in Mercado Pago.
> * To make test payments we recommend using low amounts.
> * Amounts should observe the ----[mla]---- [minimum and maximum values](https://www.mercadopago/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlm]---- [minimum and maximum values](https://www.mercadopago.com.mx/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlu]---- [minimum and maximum values](https://www.mercadopago.com.uy/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mco]---- [minimum and maximum values](https://www.mercadopago.com.uy/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mpe]---- [minimum and maximum values](https://www.mercadopago.com.pe/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlc]---- [minimum and maximum values](https://www.mercadopago.cl/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlb]---- [minimum and maximum values](https://www.mercadopago.com.br/ajuda/minimo-maximo-posso-pagar_324) ------------ for each payment method.

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

Card | Number | CVV | Expiration Date
------------ | ------------- | ------------- | -------------
Mastercard | 5031 7557 3453 0604 | 123 | 11/25
Visa | 4170 0688 1010 8020 | 123 | 11/25
American Express | 3711 8030 3257 522 | 1234 | 11/25

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
> Take into account that you cannot test the entire flow for cash payment methods.

## Start receiving payments

To start charging, you need to meet the [production environment requirements](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/goto-production/), and fill out the form <a href="[FAKER][CREDENTIALS][URL]" target="_blank"> Go to production</a>.

Upon completing the form, verify that the credentials in your integration are those of the account that receives the money from the sales.<br/>

---
### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Error Response Handling
>
> Help your customers make error-free payments.
>
> [Error Response Handling](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/handling-responses/)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> API References
>
> Find all the information required to interact with our APIs.
>
> [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/)
