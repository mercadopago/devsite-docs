---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global
---


# Payments with integrated QR codes

Mercado Pago allows you to receive payments from your customers using a single QR code that identifies the point of sale.

When your customer scans the QR code, a request is made to your server, verifying the amount to be charged. Your server responds with the [payment preference](/reference/reference/preferences/_preferences/post/) and your customer’s mobile phone shows the checkout with the payment details. Finally, the customer makes the payment and you immediately receive a Webhook notification on your server to impact the result.

## Integration details

After the sales order is placed in your management system:
![instore diagram](/images/wallet-instore.png)

1. The user scans the QR code from the Mercado Pago app, to which the URL is linked with the information of the location where the sale took place. The QR code univocally represents a position in a store.

2. With the information from the location where the user scanned the QR code, the MP Server queries the company’s Server for the last sales order pending payment for that position in that store.

  2.1. The Server creates the payment preference (Object that contains all the information of the amount to be paid - see annex).
  2.2. Mercado Pago returns the payment preference created.

3. The Server returns the preference to the MP Server, and with this information, it is possible to display the checkout on the user’s mobile phone with the amount to be paid.

4. The user fills in the required information at the checkout (usually, only the security code is required) and confirms the payment.

5. Immediately after processing the payment, the MP Server sends to the company’s Server a Webhook notification informing that there is a new transaction, specifying the identifier of the payment.

6.With the payment identifier, the company’s Server can check whether the payment status is `approved` or `rejected`. If the payment was approved, the order can be released and the payment settled. If the payment was rejected, the MP App will retry the operation.

7. The customer is informed that the payment was processed correctly.

### QR code details

The QR code generated must uniquely identify the point of sale from which the payment will be made. For example, you can generate a URL like the following:

 ``https://www.miempresa.com/pay-mp?locationId=01&positionId=01 ``

Where `locationId` represents the store y `positionId` the cashier where the sale took place. This QR code belongs to store 01, cashier 01.
Define the necessary parameters according to your business model.

### Get the payment preference

You must generate the payment preference including the purchase amount, so that your customer is able to view the details of the amount to be paid on the mobile app of Mercado Pago on their phone.

As soon as the customer scans the QR code, you will receive a request from Mercado Pago with the parameters required to allow you to identify the point of sale.

This request is made by sending one of the following values in the header `User-Agent`:

*  `MercadoPago-Android/${version}`
*  `MercadoPago-iOS/${version}`

 > ${version} is the version of the app installed on the mobile device.

Based on the point of sale from where the request was made, the [payment preference](/reference/reference/preferences/_preferences/post/) must be created indicating the amount and details of the product or service.

To create this object, a Mercado Pago service is requested.

We recommend using the field `external_reference` (free content, up to 256 characters) in order to link the preference created with the purchase order and its possible payment.

The expected response in case there is a sale pending payment and the preference has been generated will be an HTTP 200 (*OK*) status, and the response body will contain a JSON in the following format:

```
{
	"preference_id": "XXXX"
}

```

If there is no order pending payment for the point of sale, an HTTP 400 (*Bad Request*) status is returned and the JSON will contain the following format:

```
{
	"error": {
		"type": "XXX",
		"message": "YYYY"
	}
}
```

Where `message` is an optional field and `type` can take one of the following values:

* in_process: There is an order in process, the amount to be charged can not yet be determined.
* unavailable: There is no order in process or pending payment.
* invalid: The additional parameters (store id, cashier, etc.) refer to an unknown location.
* timeout: The integrator’s server was unable to communicate with any of the other systems (supplier, POS, Mercado Pago API) and aborted the operation.

> In all cases, it is important that the response includes the header `Content-Type: application/json`.

### Notifications

Check out the [Webhooks](/guides/notifications/webhooks.es.md) section to integrate the payment notifications in your management system and impact its result immediately, printing the corresponding invoice.

## Test cases

Create two test users. With one of them you pretend to be the seller and set up the credentials in the payment preference. With the other you pretend to be the customer, logging into the mobile app of Mercado Pago and using the [test cards](/guides/payments/api/testing.es.md) to make payments.

```
# Get access_token

AT=`curl -s -X POST -H 'content-type: application/x-www-form-urlencoded' 'https://api.mercadopago.com/oauth/token' -d 'grant_type=client_credentials' -d 'client_id=CLIENT_ID' -d 'client_secret=CLIENT_SECRET' | grep -o '"access_token":"[^"]*"' | sed -n 's/.*"access_token":"\(.*\)"/\1/p'`

```

```
# Create test user

curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=$AT" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'

```

Before going into production, check out the following scenarios.


| Case 	| Scenario 				                                                 | Response from the app                                 |
| ---- 	| ------------------------------------------------------- 				 | ----------------------------------------------        |
| 1  	  | The user scans a valid QR code before placing the order.         |First, you must enter the code. You will be able to make the payment as soon as you place the order.|
| 2     | The user scans a valid QR code during an order.                  |Loading QR Code. You will be able to make the payment as soon as you place the order.|
| 3   	| The user scans a QR code with invalid parameters. (it refers to a non-existent point of sale)|Something went wrong. Please try again.|
| 4  	  | The user scans a valid QR code after placing the order.          |Proceed with regular payment flow.                     |
| 5  	  | The user scans a valid QR code multiple times with an order placed.|Proceed with regular payment flow.                   |
| 6    	| The user scans a valid QR code with an order placed.             |Proceed with regular payment flow.                     |
| 7   	| The user scans a valid QR code with an order placed and makes the payment. The user scans the QR code again after the order was placed (having impacted the *webhook* notification)|Proceed with regular payment flow. When the code is scanned again, the following message is displayed: First, you must place an order. You can make the payment after placing the order.|
| 8  	  | The user scans a valid QR code with an order placed and aborts the flow. The payment is made with another payment method and the code is scanned again.|First, you must enter the code. You can make the payment after placing the order.                   |
| 9 	  |The user scans a valid QR code with an order placed and makes the payment with a mock card for call4auth. (Card holder name = CALL) Then, the user enters another payment method and the flow is completed.|Message informing that the payment was declined, requesting the user to contact the card service. Then, proceed with regular payment flow.|
| 10	  | If allowed, insert two orders with pending payments.             |Proceed with the regular payment flow (corresponding to the user who scanned the code).|

> If you have any questions about your integration, send an email to instore@mercadopago.com
