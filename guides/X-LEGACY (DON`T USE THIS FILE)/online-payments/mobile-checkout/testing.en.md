# Test the integration

Before going into production, it is very important to test the payments flow, checking whether the configurations you made at the preference level are effectively reflected in the checkout.

You should check if:

+ The information about the product or service to be paid is correct.
+ If you recognize the customer’s account to send the email.
+ It offers the payment methods you wish.
+ The payment experience is adequate and the payment result is reported.

## How to test my integration

**Test users allow you to test your integration** by generating payment flows in an exact copy of your integration.

| User types | Description |
| --- | --- |
| Seller | It is the test account you use to **configure the application and credentials for collection**. |
| Buyer | It is the test account you use to **test the purchase process**.<br/> |

## How to create users
To perform the tests **it is necessary that you have at least two users:** a buyer and a seller.

Execute the following curl to generate a test user:

### Request

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID],"description" : "a description""}'
```

### Response

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
>Important
>
> * You can generate up to 10 test user accounts simultaneously. Therefore, we recommend you _save each email and password._
> * Test users expire after 60 days without activity in Mercado Pago.
> * To make test payments we recommend using low amounts.
> * Both buyer and seller must be test users.
> * Use test cards, since it is not possible to withdraw money.


### To test the integration, follow the steps below:

1. Configure the [Public Key]([FAKER][CREDENTIALS][URL]) in your application.
2. Create the preference on your server with the [Access Token]([FAKER][CREDENTIALS][URL]).
3. Complete the form, entering the digits of a test card. On the expiration date you must enter any date after the current date and a 3-or 4-digit security code, depending on the card.
4. To **test different payment results,** complete the information you want in the name of the cardholder:

- APRO: Payment approved.
- CONT: Payment pending.
- OTHE: Rejected by general error.
- CALL: Rejected with validation to authorize.
- FUND: Rejected for insufficient amount.
- SECU: Rejected by invalid security code.
- EXPI: Rejected due to problem with expiration date.
- FORM: Rejected by error in the form.

## Test Cards

Use these test cards to test the different payment results.

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

You can also [use test credit cards from local payment methods in each country](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/local-cards).