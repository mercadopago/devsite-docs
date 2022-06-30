# Test the integration

Before going into production, it is very important to test the payments flow, checking whether the configurations you made at the preference level are effectively reflected.
A good customer experience at the checkout helps to ensure the conversion.

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

## Test the payment flow

You have a pair of [test credentials]([FAKER][CREDENTIALS][URL]) which will allow you to test the whole integration based on an exact replica of the Production Mode, being able to simulate transactions using the test cards:

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

## Receive a payment

You can simulate the creation of a payment using your `access_token` and `card_token`.

If at the time of creation, you get an error associated with the payment method selected or the accounts in operation, you will receive an `HTTP Status 400 Bad Request` and the code detailing the error so that you can correct and retry the payment.

Try all possible payment scenarios for payment approved, pending or declined. To do so, in the `card_holder_name` field of the form, enter any of the following prefixes:

- APRO: Payment approved.
- CONT: Payment pending.
- OTHE: Rejected by general error.
- CALL: Rejected with validation to authorize.
- FUND: Rejected for insufficient amount.
- SECU: Rejected by invalid security code.
- EXPI: Rejected due to problem with expiration date.
- FORM: Rejected by error in the form.

In each case, you must communicate the payment result and the next steps to your customer. For that, you will receive an `HTTP Status 201 OK` informing that the payment has been created correctly and we will send a result code so that you can redirect the customer to the page with the correct message.

## Check if you have received the Webhook notification

Mercado Pago will send you a notification of the occurrence of an event. Make sure that you successfully received it and duly impacted your management system.

### Cancel a payment

Make a refund for an approved payment or the cancellation of a pending payment and check if you receive the notification with the corresponding information.


## Test the creation of a customer

Check if you have created the `customer` with the associated card and the card data is duly retrieved when you reload the checkout.
