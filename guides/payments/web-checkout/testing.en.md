---
sites_supported:
  - mpe
---

# Test the Integration

Before going into production, it is very important to test the payments flow, checking whether the configurations you made at the preference level are effectively reflected in the checkout.
You should check if:

+ The information about the product or service to be paid is correct.
+ If you recognize the customer’s account to send the email.
+ It offers the payment methods you wish.
+ Your customer is correctly redirected after the payment is completed.
+ The payment experience is adequate and the payment result is reported.

##How to run tests?

### Create a test user

To simulate the whole payment process, you must create 2 test users: **seller** and **buyer**.

You must make the following API request to create each of the users.

Use the site_id to indicate the country where you want to run the test.

| Country  | Site_id |
| ---- 	| ----- |
| Argentina   | **MLA** |
| Brazil  |  **MLB** |
| Mexico  |  **MLM** |
| Chile |  **MLC** |
| Uruguay |  **MLU** |
| Peru  |  **MPE** |
| Colombia  |  **MCO** |

##### _Request_
[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $body = array(
    "json_data" => array(
      "site_id" => "[FAKER][GLOBALIZE][SITE_ID]"
    )
  );

  $result = MercadoPago\SDK::post('/users/test_user', $body);

  var_dump($result);
?>
```
```curl
curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=ENV_ACCESS_TOKEN" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```
]]]
##### _Response_
```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```


## Test cards

| Country 	 | Visa 				       | Mastercard        | American Express |
| ---- 		   | ---- 				       | ----------        | ---------------- |
| Argentina  | 4509 9535 6623 3704 |5031 7557 3453 0604|3711 803032 57522 |
| Brazil  	 | 4235 6477 2802 5682 |5031 4332 1540 6351|3753 651535 56885 |
| Chile   	 | 4168 8188 4444 7115 |5416 7526 0258 2580|3757 781744 61804 |
| Colombia   | 4013 5406 8274 6260 |5254 1336 7440 3564|3743 781877 55283 |
| Mexico  	 | 4075 5957 1648 3764 |5474 9254 3267 0366| unavailable      |
| Peru    	 | 4009 1753 3280 6176 | unavailable       | unavailable      |
| Uruguay  	 | 4157 2362 1173 6486 |5161 4413 1585 2061| unavailable      |

You can also [use test credit cards from local payment methods in each country](https://www.mercadopago.com.ar/developers/en/guides/localization/local-cards).

### Perform the corresponding tests

The complete process for testing the checkout is as follows:

1. Log in to Mercado Pago with the **seller** and get the [credentials]([FAKER][CREDENTIALS][URL]) to configure them in the creation of the payment preference.
2. Log out from MercadoPago.
3. Send the **buyer's** mail in the payment preference.
4. Complete the form, entering the digits of a test card. On the expiration date you must enter any date after the current date, as well as a 4-digit security code for Amex cards or a 3-digit security code for any other card.
5. To test the different payment results (approved, declined or pending), enter one of the following prefixes in the cardholder name field:
  * **APRO**: Payment approved.  
  * **CONT**: Pending payment.  
  * **CALL**: Payment declined, call to authorize.  
  * **FUND**: Payment declined due to insufficient funds.  
  * **SECU**: Payment declined by security code.  
  * **EXPI**: Payment declined by expiration date.  
  * **FORM**: Payment declined due to error in form.  
  * **OTHE**: General decline.  
6. In case of payment declined, you can retry it and simulate any other result as indicated in the previous item.
7. Check whether the notification has arrived correctly
8. Make a refund of an approved payment and check if you received the notification with the payment status updated.

### Terms of use

+ Test users expire after being inactive in MercadoPago for 60 days.
+ You may have up to 10 simultaneous accounts.
+ Use small amounts for test payments:
  * You may pay by real credit card, then cancel payments and get the refund.
  * You may make coupon payments but you should not complete them.
+ Simulations can only be made between test users.
+ You cannot withdraw test payments from bank accounts.
