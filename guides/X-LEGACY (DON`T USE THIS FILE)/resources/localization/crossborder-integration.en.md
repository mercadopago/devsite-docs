---
  sites_supported:
      - mlm
---



# Cross Border

The Cross Border solution of Mercado Pago allows you to charge locally but withdraw the funds in a bank account in another country different from where you are selling.

In order to use the Cross Border solution, the Mercado Pago account must be created by our team, since some special configurations need to be made.
Therefore, you must contact the Mercado Pago commercial team by writing to: `crm_regionales@mercadopago.com`

At the moment, the currencies in which the funds are allowed to be received are:

- USD

The payer will make the payment in the local currency, in this way, he will be able to take advantage of the financing offered by Mercado Pago.


## Account Creation

The Mercado Pago account must be created by Mercado Pago in order to use the Cross Border solution. For the creation of the account it is necessary that you send us the following information:

- Company Name.
- Display Name.
- Contact First Name.
- Contact Last Name.
- Email.
- Country.
- State.
- City.
- Address.
- Zip.
- Phone.
- Business License (W9 or equivalent).
- Logo (298x118px, max weight 6KB and .png or .jpg)


Also, we need this data to configure the bank transfer:

- swiftCode o routingCode.
- bankAccountNumber.
- accountName.
- bankName.



## General Considerations

Whatever integration you carry out (Basic Checkout, Checkout Tokenizer or Custom Checkout) you must add the following lines of code to the creation of the payment or payment preference to be able to charge with your Cross Border account:

```
"counter_currency": {
	"currency_id": "USD"
}
```

Please note that if you do not send this portion of code, you will receive an error message like:

```json
{
    "message": "missing counter_currency",
    "error": "invalid_counter_currency",
    "status": 400,
    "cause": []
}
```

In turn, if your Mercado Pago account was not created to operate Cross Border, you will receive an error message like:

```json
{
    "message": "not allowed",
    "error": "cbt_not_allowed",
    "status": 400,
    "cause": []
}
```

Finally, in the payment you will see the value in USD and the rate at which the amount was converted to USD. In movements of the account, a movement in USD is generated.This is an example:

```json
"counter_currency": {
	"currency_id": "USD",
    "rate": 18.22539135,
    "amount": 4.99,
    "amount_refunded": 0
}
```



## API Exchange Rate

For the integration of Cross Border, the use of the Exchange Rate API will be essential, since as mentioned above, the amount of the transaction must be made in local currency.

The Exchange Rate API is:

```
https://api.mercadopago.com/v1/exchange_rates?from=USD&to=[FAKER][CURRENCY][ACRONYM]&public_key=<PUBLIC_KEY>
```

The answer you will get is similar to the following:

```
{
  "creation_date": "2018-04-13T05:15:19.752-04:00",
  "currency_base": "USD",
  "currency_quote": "[FAKER][CURRENCY][ACRONYM]",
  "id": "95f77580-602a-4086-9cec-c3b5afad2c5f",
  "inv_rate": 0.05458033,
  "rate": 18.3216177
}
```

> The rate field is expressed in the currency corresponding to the 'to' of the API call. In this example, it is in [FAKER][CURRENCY][ACRONYM].


## Basic Checkout Integration

The Basic Checkout is the standard solution of Mercado Pago. The solution consists in the generation of a payment preference, which returns an `init_point` that upon opening it redirects the user to a checkout where all the experience is handled by Mercado Pago.

> ADVANTAGES
>
> * Integration speed.
> * Scalability in many countries.
> * Includes all means of payment available.
>
> DISADVANTAGES
>
> * Does not allow modifying the checkout design.
> * Does not allow to modify the payment experience.
> * The user is redirected outside the application to make the payment.


To carry out the integration, you must follow the documentation that you can find by entering the following [link] ("https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/introduction")


This is an example of the creation of the payment preference:

``` curl
$ curl https://api.mercadopago.com/checkout/preferences \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -d '
{
	"items": [
		{
			"id": "item-ID-1234",
			"title": "Title of what you are paying for. It will be displayed in the payment process.",
			"currency_id": "[FAKER][CURRENCY][ACRONYM]",
			"picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
			"description": "Item description",
			"category_id": "others",
			"quantity": 1,
			"unit_price": 100
		}
	],
	"payer": {
		"name": "user-name",
		"surname": "test_user_88271050@testuser.com",
		"email": "user@email.com",
		"phone": {
			"area_code": "11",
			"number": "4444-4444"
		},
		"identification": {
			"type": "DNI",
			"number": "12345678"
		},
		"address": {
			"street_name": "Street",
			"street_number": 123,
			"zip_code": "5700"
		}
	},
	"back_urls": {
		"success": "https://www.success.com",
		"failure": "http://www.failure.com",
		"pending": "http://www.pending.com"
	},
	"auto_return": "approved",
	"payment_methods": {
		"excluded_payment_methods": [
			{
				"id": "master"
			}
		],
		"excluded_payment_types": [
			{
				"id": "ticket"
			}
		]
	},
	"shipments": {
		"receiver_address": {
			"zip_code": "5700",
			"street_number": 123,
			"street_name": "Street",
			"floor": 4,
			"apartment": "C"
		}
	},
	"notification_url": "https://www.your-site.com/ipn",
	"external_reference": "Reference_1234",
	"counter_currency": {
		"currency_id": "USD"
	}
}

```

This is an example of the response to the creation of the payment preference:

```json
{
    "collector_id": 307467332,
    "operation_type": "regular_payment",
    "items": [
        {
            "id": "item-ID-1234",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
            "title": "Title of what you are paying for. It will be displayed in the payment process.",
            "description": "Item description",
            "category_id": "others",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "quantity": 1,
            "unit_price": 100
        }
    ],
    "payer": {
        "name": "user-name",
        "surname": "user-surname",
        "email": "test_user_33759716@testuser.com",
        "date_created": "",
        "phone": {
            "area_code": "11",
            "number": "4444-4444"
        },
        "identification": {
            "type": "DNI",
            "number": "12345678"
        },
        "address": {
            "street_name": "Street",
            "street_number": 123,
            "zip_code": "5700"
        }
    },
    "back_urls": {
        "success": "https://www.success.com",
        "pending": "http://www.pending.com",
        "failure": "http://www.failure.com"
    },
    "auto_return": "approved",
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": "master"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": null,
        "default_payment_method_id": null,
        "default_installments": null
    },
    "client_id": "963",
    "marketplace": "NONE",
    "marketplace_fee": 0,
    "shipments": {
        "receiver_address": {
            "zip_code": "5700",
            "street_number": 123,
            "street_name": "Street",
            "floor": "4",
            "apartment": "C"
        }
    },
    "notification_url": "https://www.your-site.com/ipn",
    "counter_currency": {
        "currency_id": "USD"
    },
    "external_reference": "Reference_1234",
    "additional_info": "",
    "expires": false,
    "expiration_date_from": null,
    "expiration_date_to": null,
    "date_created": "2018-04-17T09:12:45.145-04:00",
    "id": "307467332-2c69be5f-4317-405b-85d2-29152f33e852",
    "init_point": "https://www.mercadopago.com/mlm/checkout/start?pref_id=307467332-2c69be5f-4317-405b-85d2-29152f33e852",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/checkout/pay?pref_id=307467332-2c69be5f-4317-405b-85d2-29152f33e852"
}
```

This is an example of the payment response:

``` json
{
  "acquirer_reconciliation": [
  ],
  "statement_descriptor": "MERCADOPAGO",
  "captured": true,
  "date_last_updated": "2018-04-17T09:16:40.000-04:00",
  "merchant_account_id": null,
  "payer_id": 300444925,
  "issuer_id": "160",
  "description": "Title of what you are paying for. It will be displayed in the payment process.",
  "transaction_amount": 100,
  "card": {
    "id": null,
    "first_six_digits": "494133",
    "expiration_month": 2,
    "cardholder": {
      "identification": {
        "number": null,
        "type": null
      },
      "name": "APRO"
    },
    "date_last_updated": "2018-04-17T09:16:38.000-04:00",
    "date_created": "2018-04-17T09:16:38.000-04:00",
    "expiration_year": 2021,
    "last_four_digits": "9283"
  },
  "transaction_details": {
    "total_paid_amount": 100,
    "acquirer_reference": null,
    "payment_method_reference_id": "1234567",
    "net_received_amount": 90.96,
    "financial_institution": null,
    "payable_deferral_period": null,
    "installment_amount": 100,
    "external_resource_url": null,
    "overpaid_amount": 0
  },
  "client_id": "6122032597128314",
  "coupon_amount": 0,
  "metadata": {
  },
  "money_release_schema": null,
  "collector_id": 307467332,
  "status": "approved",
  "financing_type": null,
  "processing_mode": "aggregator",
  "status_detail": "accredited",
  "transaction_id": "6608447860_776736357f767f777777",
  "installments": 1,
  "internal_metadata": {
    "processed_by": "checkout-off-v1"
  },
  "refunds": [
  ],
  "payment_type_id": "debit_card",
  "counter_currency": {
    "amount": 4.99,
    "currency_id": "USD",
    "rate": 18.22539135,
    "amount_refunded": 0
  },
  "profile_id": "bancomer",
  "payer_tags": [
  ],
  "reserve_id": null,
  "coupon_id": null,
  "shipping_amount": 0,
  "fee_details": [
    {
      "amount": 9.04,
      "fee_payer": "collector",
      "type": "mercadopago_fee"
    }
  ],
  "acquirer": null,
  "date_created": "2018-04-17T09:16:38.000-04:00",
  "id": 3637024689,
  "collector": {
    "id": 307467332,
    "first_name": "TEST CBT OFF Pruebas",
    "phone": {
      "extension": null,
      "area_code": "11",
      "number": "32808879"
    },
    "email": "test.cbt.off.merchantcbt@test.com",
    "identification": {
      "number": "25060337",
      "type": "RFC"
    },
    "last_name": "TEST MPFRONT"
  },
  "date_of_expiration": null,
  "money_release_days": null,
  "order": {
    "id": "710534062",
    "type": "mercadopago"
  },
  "external_reference": "Reference_1234",
  "available_actions": [
    "refund"
  ],
  "application_id": 6122032597128314,
  "marketplace": "NONE",
  "merchant_number": null,
  "call_for_authorize_id": null,
  "risk_execution_id": 14940341296,
  "api_version": "2",
  "currency_id": "[FAKER][CURRENCY][ACRONYM]",
  "sponsor_id": null,
  "deduction_schema": null,
  "payment_method_id": "debvisa",
  "additional_info": {
  },
  "site_id": "MLM",
  "binary_mode": false,
  "operation_type": "regular_payment",
  "differential_pricing_id": null,
  "money_release_date": "2018-04-29T09:16:40.000-04:00",
  "payer": {
    "id": "300444925",
    "first_name": "Test",
    "phone": {
      "extension": null,
      "area_code": "01",
      "number": "1111-1111"
    },
    "email": "test_user_33759716@testuser.com",
    "identification": {
      "number": "800825569",
      "type": "RFC"
    },
    "last_name": "Test",
    "entity_type": null,
    "type": "registered"
  },
  "notification_url": "https://www.your-site.com/ipn",
  "transaction_amount_refunded": 0,
  "collector_tags": [
  ],
  "authorization_code": "1234567",
  "date_approved": "2018-04-17T09:16:40.000-04:00",
  "live_mode": true
}
```



## CHECKOUT TOKENIZER INTEGRATION

The Tokenizer is the Mercado Pago solution that quickly allows you to obtain a card token from your customer's card. This solution consists in the generation of a payment order using Javascript that opens a checkout for the payer to load the data of the card. Then, you will receive the card token in your backend so that you can make a POST of the payment.

> ADVANTAGES
>
> * Integration speed.
> * Scalability in many countries.
> * The user stays within the site.
>
> DISADVANTAGES
>
> * Does not allow modifying the checkout design.
> * Does not allow to modify the payment experience.
> * Does not include all means of payment.


To carry out the integration, you must follow the documentation you can find by entering the following [link] (https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/tokenize-checkout/introduction)


This would be an example of the creation of the checkout:

``` html
<html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <form action="https://www.your-site.com/process-payment" method="POST">
      <script
	      src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
	      data-public-key="<PUBLIC_KEY>"
	      data-transaction-amount="100"
	      data-button-label="Confirmar">
      </script>
    </form>
</html>

```

This is an example of the creation of the payment:

``` json
$ curl https://api.mercadopago.com/v1/payments \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -d '
  {
	"transaction_amount": 100,
	"token": "ff8080814c11e237014c1ff593b57b4d",
	"description": "Title of what you are paying for",
	"installments": 1,
	"payment_method_id": "visa",
	"payer": {
		"email": "test_user_33759716@testuser.com"
	},
	"external_reference": "Reference_1234",
	"metadata": {
		"key1": "value1",
		"key2": "value2"
	},
	"notification_url": "https://www.your-site.com/webhooks",
	"additional_info": {
		"items": [
			{
				"id": "item-ID-1234",
				"title": "Title of what you are paying for",
				"picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
				"description": "Item description",
				"category_id": "others",
				"quantity": 1,
				"unit_price": 100
			}
		],
		"payer": {
			"first_name": "user-name",
			"last_name": "user-surname",
			"phone": {
				"area_code": "11",
				"number": "4444-4444"
			},
			"address": {
				"street_name": "Street",
				"street_number": 123,
				"zip_code": "5700"
			}
		},
		"shipments": {
			"receiver_address": {
				"zip_code": "5700",
				"street_name": "Street",
				"street_number": 123,
				"floor": 4,
				"apartment": "C"
			}
		}
	},
	"counter_currency": {
		"currency_id": "USD"
	}
}
```


This is an example of the payment response:

``` json
{
    "id": 3637181430,
    "date_created": "2018-04-17T09:26:39.000-04:00",
    "date_approved": "2018-04-17T09:26:40.000-04:00",
    "date_last_updated": "2018-04-17T09:26:40.000-04:00",
    "date_of_expiration": null,
    "money_release_date": "2018-04-29T09:26:40.000-04:00",
    "operation_type": "regular_payment",
    "issuer_id": "160",
    "payment_method_id": "visa",
    "payment_type_id": "credit_card",
    "status": "approved",
    "status_detail": "accredited",
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "description": "Title of what you are paying for",
    "live_mode": true,
    "sponsor_id": null,
    "authorization_code": "1234567",
    "money_release_schema": null,
    "counter_currency": {
        "currency_id": "USD",
        "rate": 18.22539135,
        "amount": 4.99,
        "amount_refunded": 0
    },
    "collector_id": 307467332,
    "payer": {
        "type": "guest",
        "id": null,
        "email": "test_user_33759716@testuser.com",
        "identification": {
            "type": "RFC",
            "number": "800825569"
        },
        "phone": {
            "area_code": "01",
            "number": "1111-1111",
            "extension": ""
        },
        "first_name": "Test",
        "last_name": "Test",
        "entity_type": null
    },
    "metadata": {
        "key2": "value2",
        "key1": "value1"
    },
    "additional_info": {
        "items": [
            {
                "id": "item-ID-1234",
                "title": "Title of what you are paying for",
                "description": "Item description",
                "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
                "category_id": "others",
                "quantity": "1",
                "unit_price": "100"
            }
        ],
        "payer": {
            "phone": {
                "area_code": "11",
                "number": "4444-4444"
            },
            "address": {
                "zip_code": "5700",
                "street_name": "Street",
                "street_number": "123"
            },
            "first_name": "user-name",
            "last_name": "user-surname"
        },
        "shipments": {
            "receiver_address": {
                "zip_code": "5700",
                "street_name": "Street",
                "street_number": "123",
                "floor": "4",
                "apartment": "C"
            }
        }
    },
    "order": {},
    "external_reference": "Reference_1234",
    "transaction_amount": 100,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "transaction_details": {
        "net_received_amount": 90.96,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 100,
        "financial_institution": null,
        "payment_method_reference_id": "1234567",
        "payable_deferral_period": null,
        "acquirer_reference": null
    },
    "fee_details": [
        {
            "type": "mercadopago_fee",
            "amount": 9.04,
            "fee_payer": "collector"
        }
    ],
    "captured": true,
    "binary_mode": false,
    "call_for_authorize_id": null,
    "statement_descriptor": "MERCADOPAGO",
    "installments": 1,
    "card": {
        "id": null,
        "first_six_digits": "494133",
        "last_four_digits": "9283",
        "expiration_month": 12,
        "expiration_year": 2020,
        "date_created": "2018-04-17T09:26:39.000-04:00",
        "date_last_updated": "2018-04-17T09:26:39.000-04:00",
        "cardholder": {
            "name": "APRO",
            "identification": {
                "number": null,
                "type": null
            }
        }
    },
    "notification_url": "https://www.your-site.com/webhooks",
    "refunds": [],
    "processing_mode": "aggregator",
    "merchant_account_id": null,
    "acquirer": null,
    "merchant_number": null,
    "acquirer_reconciliation": []
}
```



## Custom Checkout Integration (API)

The Custom Checkout is the most customizable solution of Mercado Pago. This solution consists of the use of the Javascript SDK and the Mercado Pago APIs to carry out the tokenization of the payer's card and then the corresponding posting of the payment. All the experience is handled by the integrator.

> ADVANTAGES
>
> * Allows you to create a unique design for the checkout.
> * Allows you to modify the payment experience.
> * The user stays within the site.
>
> DISADVANTAGES
>
> * Integration speed.
> * Handling error messages and payment statements.
> * You must integrate each means of payment separately.


In order to carry out the integration you will have to follow the documentation that you can find entering in the following [link](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/introduction)

You must generate a card form as indicated in the documentation that allows you to obtain a card-token from the payer card and then take it to your server and thus make the payment POST:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>

...
<form action="" method="post" id="pay" name="pay" >
    <fieldset>
        <ul>
            <li>
                <label for="email">Email</label>
                <input id="email" name="email" value="test_user_19653727@testuser.com" type="email" placeholder="your email"/>
            </li>
            <li>
                <label for="cardNumber">Credit card number:</label>
                <input type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" />
            </li>
            <li>
                <label for="securityCode">Security code:</label>
                <input type="text" id="securityCode" data-checkout="securityCode" placeholder="123" />
            </li>
            <li>
                <label for="cardExpirationMonth">Expiration month:</label>
                <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="12" />
            </li>
            <li>
                <label for="cardExpirationYear">Expiration year:</label>
                <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2015" />
            </li>
            <li>
                <label for="cardholderName">Card holder name:</label>
                <input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" />
            </li>
         </ul>
        <input type="submit" value="Pay!" />
    </fieldset>
</form>
...

```


This is an example of the creation of the payment:

``` json
$ curl https://api.mercadopago.com/v1/payments \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -d '
  {
	"transaction_amount": 100,
	"token": "ff8080814c11e237014c1ff593b57b4d",
	"description": "Title of what you are paying for",
	"installments": 1,
	"payment_method_id": "visa",
	"payer": {
		"email": "test_user_33759716@testuser.com"
	},
	"external_reference": "Reference_1234",
	"metadata": {
		"key1": "value1",
		"key2": "value2"
	},
	"notification_url": "https://www.your-site.com/webhooks",
	"additional_info": {
		"items": [
			{
				"id": "item-ID-1234",
				"title": "Title of what you are paying for",
				"picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
				"description": "Item description",
				"category_id": "others",
				"quantity": 1,
				"unit_price": 100
			}
		],
		"payer": {
			"first_name": "user-name",
			"last_name": "user-surname",
			"phone": {
				"area_code": "11",
				"number": "4444-4444"
			},
			"address": {
				"street_name": "Street",
				"street_number": 123,
				"zip_code": "5700"
			}
		},
		"shipments": {
			"receiver_address": {
				"zip_code": "5700",
				"street_name": "Street",
				"street_number": 123,
				"floor": 4,
				"apartment": "C"
			}
		}
	},
	"counter_currency": {
		"currency_id": "USD"
	}
}

```


This is an example of the payment response:

``` json
{
    "id": 3637181430,
    "date_created": "2018-04-17T09:26:39.000-04:00",
    "date_approved": "2018-04-17T09:26:40.000-04:00",
    "date_last_updated": "2018-04-17T09:26:40.000-04:00",
    "date_of_expiration": null,
    "money_release_date": "2018-04-29T09:26:40.000-04:00",
    "operation_type": "regular_payment",
    "issuer_id": "160",
    "payment_method_id": "visa",
    "payment_type_id": "credit_card",
    "status": "approved",
    "status_detail": "accredited",
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "description": "Title of what you are paying for",
    "live_mode": true,
    "sponsor_id": null,
    "authorization_code": "1234567",
    "money_release_schema": null,
    "counter_currency": {
        "currency_id": "USD",
        "rate": 18.22539135,
        "amount": 4.99,
        "amount_refunded": 0
    },
    "collector_id": 307467332,
    "payer": {
        "type": "guest",
        "id": null,
        "email": "test_user_33759716@testuser.com",
        "identification": {
            "type": "RFC",
            "number": "800825569"
        },
        "phone": {
            "area_code": "01",
            "number": "1111-1111",
            "extension": ""
        },
        "first_name": "Test",
        "last_name": "Test",
        "entity_type": null
    },
    "metadata": {
        "key2": "value2",
        "key1": "value1"
    },
    "additional_info": {
        "items": [
            {
                "id": "item-ID-1234",
                "title": "Title of what you are paying for",
                "description": "Item description",
                "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
                "category_id": "others",
                "quantity": "1",
                "unit_price": "100"
            }
        ],
        "payer": {
            "phone": {
                "area_code": "11",
                "number": "4444-4444"
            },
            "address": {
                "zip_code": "5700",
                "street_name": "Street",
                "street_number": "123"
            },
            "first_name": "user-name",
            "last_name": "user-surname"
        },
        "shipments": {
            "receiver_address": {
                "zip_code": "5700",
                "street_name": "Street",
                "street_number": "123",
                "floor": "4",
                "apartment": "C"
            }
        }
    },
    "order": {},
    "external_reference": "Reference_1234",
    "transaction_amount": 100,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "transaction_details": {
        "net_received_amount": 90.96,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 100,
        "financial_institution": null,
        "payment_method_reference_id": "1234567",
        "payable_deferral_period": null,
        "acquirer_reference": null
    },
    "fee_details": [
        {
            "type": "mercadopago_fee",
            "amount": 9.04,
            "fee_payer": "collector"
        }
    ],
    "captured": true,
    "binary_mode": false,
    "call_for_authorize_id": null,
    "statement_descriptor": "MERCADOPAGO",
    "installments": 1,
    "card": {
        "id": null,
        "first_six_digits": "494133",
        "last_four_digits": "9283",
        "expiration_month": 12,
        "expiration_year": 2020,
        "date_created": "2018-04-17T09:26:39.000-04:00",
        "date_last_updated": "2018-04-17T09:26:39.000-04:00",
        "cardholder": {
            "name": "APRO",
            "identification": {
                "number": null,
                "type": null
            }
        }
    },
    "notification_url": "https://www.your-site.com/webhooks",
    "refunds": [],
    "processing_mode": "aggregator",
    "merchant_account_id": null,
    "acquirer": null,
    "merchant_number": null,
    "acquirer_reconciliation": []
}
```



## Payments Refund
The refund of a payment is made in the local currency of the operation (for example, [FAKER][CURRENCY][ACRONYM]) under the same conversion of the original payment.

For this, it will be necessary for you to search for the payment by means of the `payment_id` and obtain the` currency_conversion`.

You can get more information about the returns API in the following [link](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds).
