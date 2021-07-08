# Test the Integration

Before going into production, it is very important to test the payments flow, checking whether the configurations you made at the preference level are effectively reflected in the checkout.

You should check if:

+ The information about the product or service to be paid is correct.
+ If you recognize the customer’s account to send the email.
+ It offers the payment methods you wish.
+ Your client is correctly redirected after the payment is completed.
+ The payment is divided correctly between your marketplace account and the seller’s account.

## How to run tests?

### Create test users

To simulate the entire payment process, you must create 3 test users: **marketplace**, **seller** and **buyer**.

> NOTE
>
> Note
>
> In order to test the Checkout Pro all the users involved in the test must be test_users, if not you´ll get the "Invalid users involved" error.  


You must make the following API request to create each of the users.

### Request

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```


### Response

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

### Test cards

| Country | Visa | Mastercard | American Express |
| --- | --- | --- | --- |
| Argentina | 4509 9535 6623 3704 |5031 7557 3453 0604 | 3711 803032 57522 |
| Brazil | 4235 6477 2802 5682 | 5031 4332 1540 6351 | 3753 651535 56885 |
| Chile | 4168 8188 4444 7115 | 5416 7526 0258 2580 | 3757 781744 61804 |
| Colombia | 4013 5406 8274 6260 | 5254 1336 7440 3564 | 3743 781877 55283 |
| Mexico | 4075 5957 1648 3764 | unavailable | unavailable |
| Peru | 4009 1753 3280 6176 | unavailable | unavailable |
| Uruguay | 4157 2362 1173 6486 | 5161 4413 1585 2061 | unavailable |

You can also [use test credit cards from local payment methods in each country](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/local-cards).

### Perform the corresponding tests

The complete process for testing the checkout is as follows:

1. Log in to Mercado Pago with the marketplace account and generate an APP_ID with all your settings and the URL to send to the seller to connect the seller’s account.
2. Log in to Mercado Pago with the seller and connect the account to the marketplace, entering the configured URL.
3. Check whether you have the seller's credentials registered in the marketplace.
4. Make a test payment. You can send the buyer’s email in the payment preference, or test the flow as a guest. The buyer’s email will be requested at the end of the purchase.
5. Complete the form, entering the digits of a test card. On the expiration date you must enter any date after the current date and the 3-digit security code.
6. In the cardholder field, you must enter the prefix corresponding to what you want to test:

    * **APRO**: Payment approved.  
    * **CONT**: Pending payment.  
    * **CALL**: Payment declined, call to authorize.  
    * **FUND**: Payment declined due to insufficient funds.  
    * **SECU**: Payment declined by the card security code.  
    * **EXPI**: Payment declined by expiration date.  
    * **FORM**: Payment declined due to error in form.  
    * **OTHE**: General decline.

7. In case of retry, make sure they are carried out correctly.
8. Check whether the notification has arrived correctly.
9. Check whether the payment division between the **marketplace** and the **seller’s** accounts has been done- correctly as specified in the `marketplace\_fee` attribute of the payment preference.
10. Make a refund of an approved payment.
