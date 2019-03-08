# Test the Integration

Before going into production, it is very important to test the complete payment flow, checking whether the creation of payments is carried out correctly and the messages efficiently communicate to the users.

A good customer experience at the checkout helps to ensure the conversion.

You have a pair of [sandbox keys](https://www.mercadopago.com.ar/account/credentials?type=custom) which will allow you to test the whole integration based on an exact replica of the Production Mode, being able to simulate transactions using the test cards:


| Country 	 | Visa 				       | Mastercard        | American Express |
| ---- 		   | ---- 				       | ----------        | ---------------- |
| Argentina  | 4509 9535 6623 3704 |5031 7557 3453 0604|3711 803032 57522 |
| Brazil  	 | 4235 6477 2802 5682 |5031 4332 1540 6351|3753 651535 56885 |
| Chile   	 | 4168 8188 4444 7115 |5416 7526 0258 2580|3757 781744 61804 |
| Colombia   | 4013 5406 8274 6260 |5254 1336 7440 3564|3743 781877 55283 |
| Mexico  	 | 4075 5957 1648 3764 |5474 9254 3267 0366|3766 7520 5781 151|
| Peru    	 | 4009 1753 3280 6176 | unavailable       | unavailable      |
| Uruguay  	 | 4157 2362 1173 6486 |5161 4413 1585 2061| unavailable      |

You can also [use test credit cards from local payment methods in each country](https://www.mercadopago.com.ar/developers/en/guides/localization/local-cards).

## Receive a payment

You can simulate the creation of a payment using your `access_token` and `card_token`.

If at the time of creation, you get an error associated with the payment method selected or the accounts in operation, you will receive an HTTP Status 400 Bad Request and the code detailing the error so that you can correct and retry the payment.

Try all possible payment scenarios for payment approved, pending or declined. To do this, in the card_holder_name field of the form, enter any of the following prefixes:

* **APRO**: Payment approved.  
* **CONT**: Pending payment.  
* **CALL**: Payment declined, call to authorize.  
* **FUND**: Payment declined due to insufficient funds.  
* **SECU**: Payment declined by security code.  
* **EXPI**: Payment declined by expiration date.  
* **FORM**: Payment declined due to error in form.  
* **OTHE**: General decline.  

In each case, you must communicate the payment result and the next steps to your customer. For that, you will receive an HTTP Status 201 OK informing that the payment has been created correctly and we will send a result code so that you can redirect the customer to the page with the correct message.

## Check if you have received the Webhook notification

Mercado Pago will send you a notification of the occurrence of an event. Make sure that you successfully received it and duly impacted your management system.

### Cancel a payment

Make a refund for an approved payment or the cancellation of a pending payment and check if you receive the notification with the corresponding information.


## Test the creation of a customer

Check if you have created the `customer` with the associated card and the card data is duly retrieved when you reload the checkout.
