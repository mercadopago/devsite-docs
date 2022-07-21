# Integrate Spreedly

Accept payments in a simple and secure way through Spreedly.

The available Spreedly methods with Mercado Pago are:

- Purchase
- Authorize
- Capture
- Refund
- Void
- Verify

To integrate Spreedly you need to obtain and setup your Mercado Pago [credentials]([FAKER][CREDENTIALS][URL]) Public key and Access token.

> Find all the information about your credentials in our [FAQs](https://www.mercadopago.com.ar/developers/en/guides/faqs/credentials/). 

In addition, you have to set up the country code:

- AR - Argentina
- BR - Brazil
- CL - Chile
- CO - Colombia
- MX - Mexico
- PE - Peru
- UY - Uruguay

Lastly, to process payments with Mercado Pago you need to send payer's identification information (Mexico is excluded). You need to send as specific information of the gateway the fields:

- cardholder_identification_type.
- cardholder_identification_number.


## Starting with Spreedly

To start transacting you will need to:

1. Create [a free account](https://spreedly.com/trial-qualification) and obtain the [credentials](https://docs.spreedly.com/basics/credentials).

2. [Add Mercado Pago](https://docs.spreedly.com/basics/gateway/) as payment gateway.

3. Obtain [information about the payment methods](https://docs.spreedly.com/basics/payment-method) of your users.

4. [Create an order](https://docs.spreedly.com/basics/purchase) with Spreedly through Mercado Pago with your users payment information.

## Add Mercado Pago as gateway

Before starting to create transactions through Spreedly, you will have to add Mercado Pago as payment gateway. In this step, you have to set up Mercado Pago's keys and another specific properties.

The API involved in this process is:
```
https://core.spreedly.com/v1/gateways.json
```

You can set Mercado Pago as gateway following this example:

```curl
$ curl https://core.spreedly.com/v1/gateways.json \
-u 'C7cRfNJGODKh4Iu5Ox3PToKjniY:4UIuWybmdythfNGPqAqyQnYha6s451ri0fYAo4p3drZUi7q2Jf4b7HKg8etDtoKJ' \
  -H 'Content-Type: application/json' \
  -d '{
        "gateway_type": "mercado_pago",
        "country": "AR",
        "access_token": "ENV_ACCESS_TOKEN"
      }'
```

The response you will get will be similar to this one:

```
{
  "gateway": {
    "token": "6DqX57I6fHgIuUkVN2HGszjDSu1",
    "gateway_type": "test",
    "description": null,
    "payment_methods": [
      "credit_card",
      "sprel",
      "third_party_token",
      "bank_account",
      "apple_pay",
      "android_pay"
    ],
    "state": "retained",
    "created_at": "2017-07-27T17:54:39Z",
    "updated_at": "2017-07-27T17:54:39Z",
    "name": "Spreedly Test",
    "characteristics": [
      "purchase",
      "authorize",
      "capture",
      "credit",
      "general_credit",
      "void",
      "verify",
      "reference_purchase",
      "purchase_via_preauthorization",
      "offsite_purchase",
      "offsite_authorize",
      "3dsecure_purchase",
      "3dsecure_authorize",
      "store",
      "remove",
      "disburse",
      "reference_authorization"
    ],
    "credentials": [

    ],
    "gateway_specific_fields": [

    ],
    "redacted": false
  }
}
```

## Creating a payment method

In order to process a transaction you have to obtain your users card information ("Spreedly payment method"). As this is sensitive information it must not be sent to your server and to do this you should [implement Spreedly's checkout](https://docs.spreedly.com/basics/payment-method/).

The API involved in this process is:

```
https://core.spreedly.com/v1/payment_methods.json
```

You can create a payment method following this example:

```curl
$ curl https://core.spreedly.com/v1/payment_methods.json \
-u 'C7cRfNJGODKh4Iu5Ox3PToKjniY:4UIuWybmdythfNGPqAqyQnYha6s451ri0fYAo4p3drZUi7q2Jf4b7HKg8etDtoKJ' \
  -H 'Content-Type: application/json' \
  -d '{
	  "payment_method": {
	    "credit_card": {
	      "first_name": "TEST",
	      "last_name": "TEST",
	      "number": "CARD NUMBER",
	      "verification_value": CVV,
	      "month": "CARD EXPIRATION MONTH",
	      "year": "CARD EXPIRATION YEAR"
	    },
	    "email": "[FAKER][INTERNET][FREE_EMAIL]"
	  }
	}
'
```
The response you will get will be similar to this one:

```
{
    "transaction": {
        "token": "7jhO6alDqP3YEyt1ihve6vLWT8e",
        "created_at": "2018-01-08T21:03:39Z",
        "updated_at": "2018-01-08T21:03:39Z",
        "succeeded": true,
        "transaction_type": "AddPaymentMethod",
        "retained": false,
        "state": "succeeded",
        "message_key": "messages.transaction_succeeded",
        "message": "Succeeded!",
        "payment_method": {
            "token": "3uAIR1sSCVJG90obnCN1Ip1BY3b",
            "created_at": "2018-01-08T21:03:39Z",
            "updated_at": "2018-01-08T21:03:39Z",
            "email": "[FAKER][INTERNET][FREE_EMAIL]",
            "data": null,
            "storage_state": "cached",
            "test": false,
            "last_four_digits": "CARD LAST FOUR DIGITS",
            "first_six_digits": "CARD FIRST SIX DIGITS",
            "card_type": "PAYMENT_METHO_ID",
            "first_name": "TEST",
            "last_name": "TEST",
            "month": CARD EXPIRATION MONTH,
            "year": CARD EXPIRATION YEAR,
            "address1": null,
            "address2": null,
            "city": null,
            "state": null,
            "zip": null,
            "country": null,
            "phone_number": null,
            "company": null,
            "full_name": "TEST TEST",
            "eligible_for_card_updater": true,
            "shipping_address1": null,
            "shipping_address2": null,
            "shipping_city": null,
            "shipping_state": null,
            "shipping_zip": null,
            "shipping_country": null,
            "shipping_phone_number": null,
            "payment_method_type": "credit_card",
            "errors": [],
            "fingerprint": "0efdb1b335007d2bf8b4bf8adff9274b934b",
            "verification_value": "XXX",
            "number": "XXXX-XXXX-XXXX-CARD LAST FOUR DIGITS"
        }
    }
}
```

## Create a payment

Once you have configured Mercado Pago as paymeny gateway and you have got the information about the payment method of your user in Spreedly, you can start creating payments and transactions.

In order to create the payment you have to get the token that represents the payment method of your user ("Spreedly payment method") and the token which represents Mercado Pago as payment gateway. With this information you can create the _POST_ method to Spreedly API:

```
https://core.spreedly.com/v1/gateways/<gateway_token>/purchase.<format>
```

You can create a payment following this example:

```curl
$ curl https://core.spreedly.com/v1/gateways/6DqX57I6fHgIuUkVN2HGszjDSu1/purchase.json \
  -u 'C7cRfNJGODKh4Iu5Ox3PToKjniY:4UIuWybmdythfNGPqAqyQnYha6s451ri0fYAo4p3drZUi7q2Jf4b7HKg8etDtoKJ' \
  -H 'Content-Type: application/json' \
  -d '{
        "transaction": {
          "payment_method_token": "3uAIR1sSCVJG90obnCN1Ip1BY3b",
          "amount": 100,
          "currency_code": "[FAKER][CURRENCY][ACRONYM]",
          "retain_on_success": true
        }
      }'
```


> The amount field is always an integer in hundreds. For example if you want to charge $84,58, you have to send the value 8458.


The response you will get will be similar to this one:

```
{
  "transaction": {
    "on_test_gateway": true,
    "created_at": "2017-11-21T15:26:33Z",
    "updated_at": "2017-11-21T15:26:33Z",
    "succeeded": true,
    "state": "succeeded",
    "token": "5ks9ApXkKvk4BRNyZVicextsoBD",
    "transaction_type": "Purchase",
    "order_id": null,
    "ip": null,
    "description": null,
    "email": null,
    "merchant_name_descriptor": null,
    "merchant_location_descriptor": null,
    "gateway_specific_fields": null,
    "gateway_specific_response_fields": {
    },
    "gateway_transaction_id": "49",
    "gateway_latency_ms": 2,
    "amount": 100,
    "currency_code": "[FAKER][CURRENCY][ACRONYM]",
    "retain_on_success": true,
    "payment_method_added": false,
    "message_key": "messages.transaction_succeeded",
    "message": "Succeeded!",
    "gateway_token": "6DqX57I6fHgIuUkVN2HGszjDSu1",
    "gateway_type": "test",
    "response": {
      "success": true,
      "message": "Successful purchase",
      "avs_code": null,
      "avs_message": null,
      "cvv_code": null,
      "cvv_message": null,
      "pending": false,
      "result_unknown": false,
      "error_code": "",
      "error_detail": null,
      "cancelled": false,
      "fraud_review": null,
      "created_at": "2017-11-21T15:26:33Z",
      "updated_at": "2017-11-21T15:26:33Z"
    },
    "shipping_address": {
      "name": "TEST TEST",
      "address1": null,
      "address2": null,
      "city": null,
      "state": null,
      "zip": null,
      "country": null,
      "phone_number": null
    },
    "api_urls": [
      {
        "referencing_transaction": [

        ]
      }
    ],
    "payment_method": {
      "token": "3uAIR1sSCVJG90obnCN1Ip1BY3b",
      "created_at": "2017-10-13T11:42:31Z",
      "updated_at": "2017-11-21T15:26:33Z",
      "email": null,
      "data": null,
      "storage_state": "retained",
      "test": true,
      "last_four_digits": "CARD LAST FOUR DIGITS",
      "first_six_digits": "CARD FIRST SIX DIGITS",
      "card_type": "PAYMENT_METHOD_ID",
      "first_name": "TEST",
      "last_name": "TEST",
      "month": CARD EXPIRATION MONTH,
      "year": CARD EXPIRATION YEAR,
      "address1": null,
      "address2": null,
      "city": null,
      "state": null,
      "zip": null,
      "country": null,
      "phone_number": null,
      "company": null,
      "full_name": "TEST TEST",
      "eligible_for_card_updater": null,
      "shipping_address1": null,
      "shipping_address2": null,
      "shipping_city": null,
      "shipping_state": null,
      "shipping_zip": null,
      "shipping_country": null,
      "shipping_phone_number": null,
      "payment_method_type": "credit_card",
      "errors": [

      ],
      "fingerprint": null,
      "verification_value": "",
      "number": "XXXX-XXXX-XXXX-1111"
    }
  }
}
```

The field "succeeded" shows the transaction was successful. Once you get your transaction approved, you may show your congrats screen to your customer.

Also yo can execute another transactions through Mercado Pago, using the payment method obtained:

- Authorize
- Capture
- Refund
- Void
- Verify

## Mercado Pago propietary fields

To process with Mercado Pago and get higher levels of payment approvals we recommend you to send as much information as possible when you create a payment. This information is sent inside the array: `"gateway_specific_fields"` `"mercado_pago"`.

### Payer Identification

To process with Mercado Pago you need to send your payer identification in each payment. This information is mandatory for all countries supported by Mercado Pago except from Mexico. For further details,[please read this article]("/reference/identification_types/_identification_types/get/").

### Installments

You can specify the amount of installments for a transaction sending the field `installments`. If this field is not sent, Spreedly will send it with amount 1.

### Statement Descriptor

This field is a string you can send to identify the charge in your customer's credit card summary. You can set this value in the field `statement_descriptor`. This feature is only available in Brazil.

### Additional information

In order get the best approval rates as possible you can send additional information of the payment in the field `additional_info` JSON formatted. For further details,[please read this article]("/reference/payments/_payments_id/get/").

### Mercado Pago Device Fingerprint

Mercado Pago has it's own fraud prevention tools, that is why we recommend to send information about the customer's device. This will help to avoid fraudulent transactions and will improve your payment approval rates.

To implement the generation of the device on your website, you must add the following code to your checkout:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

Finally, you have to send the information obtained in the javascript global variable `MP_DEVICE_SESSION_ID` in the field `device_id`.

### Full payment example

Here's an example of a payment sending all the available information:

``` curl
$ curl https://core.spreedly.com/v1/gateways/6DqX57I6fHgIuUkVN2HGszjDSu1/purchase.json \
  -u 'C7cRfNJGODKh4Iu5Ox3PToKjniY:4UIuWybmdythfNGPqAqyQnYha6s451ri0fYAo4p3drZUi7q2Jf4b7HKg8etDtoKJ' \
  -H 'Content-Type: application/json' \
  -d '
{
  "transaction": {
          "payment_method_token": "3uAIR1sSCVJG90obnCN1Ip1BY3b",
          "amount": 500,
          "currency_code": "[FAKER][CURRENCY][ACRONYM]",
          "gateway_specific_fields":{
          	"mercado_pago":{
          		"cardholder_identification_type":"DNI",
          		"cardholder_identification_number":"22333444",
          		"installments": "1",
          		"device_id": "392d1af8-bc36-893c-ccf4-80b6abbc07b7",
          		"additional_info":{
                	"items": [{
		                    "id": "item-ID-1234",
		                    "title": "Title of what you are paying for",
		                    "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
		                    "description": "Item description",
		                    "category_id": "other",
		                    "quantity": 1,
		                    "unit_price": 5
                	}],
                	"payer": {
						"first_name": "TEST",
						"last_name": "TEST",
						"phone": {
							"area_code": "00",
							"number": "0000-0000"
						},
						"address": {
							"street_name": "STREET NAME",
							"street_number": STREET NUMBER,
							"zip_code": "ZIP CODE"
						}
					}
            	}
          	}
          },
          "retain_on_success": true,
          "order_id" : "0001",
          "description" : "SPREEDLY TEST",
          "email" : "[FAKER][INTERNET][FREE_EMAIL]",  
          "shipping_address" : {
            "name" : "ADDRESS NAME",
            "address1" : "STREET NAME STREET NUMBER",
            "address2" : "",
            "city" : "CITY",
            "state" : "STATE",
            "zip" : "ZIP CODE",
            "country" : "COUNTRY",
            "phone" : "0000000000"
    	}
	}
}

```