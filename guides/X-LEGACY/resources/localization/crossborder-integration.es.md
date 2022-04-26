---
  sites_supported:
      - mlm
---



# Cross Border

La solución Cross Border de Mercado Pago te permite cobrar de manera local pero retirar los fondos en una cuenta bancaria en otro país diferente a donde estas vendiendo.

Para poder utilizar la solución de Cross Border la cuenta de Mercado Pago debe ser creada por nuestro equipo, ya que se necesitan hacer algunas configuraciones especiales.
Por lo tanto, debes contactarte con el equipo comercial de Mercado Pago escribiendo a: `crm_regionales@mercadopago.com`

Por el momento, las monedas en las que se permite recibir los fondos son:

- USD

Tene en cuenta que el pagador va a realizar el pago en la moneda local, de esta manera, el mismo podrá aprovechar la financiación ofrecida por Mercado Pago.



## Creación de la cuenta
Como se mencionó anteriormente la cuenta de Mercado Pago deberá ser creada por Mercado Pago para poder utilizar la solución de CrossBorder. Para la creación de la cuenta es necesario que nos envien la siguiente información:

- Nombre de la compañia.
- Nombre a mostrar.
- Nombre del contacto.
- Apellido del contacto.
- Email.
- País.
- Estado.
- Ciudad.
- Dirección.
- Código Postal.
- Teléfono.
- Licencia de Negocio (W9 o equivalente).
- Logo (298x118px, peso máximo 6KB y .png o .jpg).

A su vez, necesitamos los datos para configurar la trasferencia bancaria:

- Código swift o código routing.
- Número de la cuenta bancaria.
- Propietario de la cuenta bancaria.
- Nombre del banco.


## Consideraciones generales

Sea cual sea la integración que lleves a cabo (Checkout básico, Checkout Tokenizador o Checkout Personalizado) deberás sumar las siguientes líneas de código a la creación de la preferencia de pago o del pago para poder cobrar con tu cuenta Cross Border:

```
"counter_currency": {
	"currency_id": "USD"
}
```

Tene en cuenta que si no envías esta porción de código, recibirás un mensaje de error como el siguiente:

```json
{
    "message": "missing counter_currency",
    "error": "invalid_counter_currency",
    "status": 400,
    "cause": []
}
```

A su vez, si tu cuenta de Mercado Pago no fue creada para operar con Cross Border, recibirás un mensaje de error como el siguiente:

```json
{
    "message": "not allowed",
    "error": "cbt_not_allowed",
    "status": 400,
    "cause": []
}
```

Finalmente, en el pago vas a ver el valor en USD y el rate con que fue convertido el amount a USD. En los movimientos de la cuenta, se genera un moviemiento en USD.

```json
"counter_currency": {
	"currency_id": "USD",
    "rate": 18.22539135,
    "amount": 4.99,
    "amount_refunded": 0
}
```



## API Exchange Rate

Para la integración de Cross Border será fundamental la utilización de la API de Exchange Rate, ya que como se mencionó anteriormente, el monto de la operación debe ser realizado en moneda local.

La API de Exchange Rate es:

```
https://api.mercadopago.com/v1/exchange_rates?from=USD&to=[FAKER][CURRENCY][ACRONYM]&public_key=<PUBLIC_KEY>
```

La respuesta que vas a obtener es similar a la siguiente:

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

> El campo rate esta expresado en la moneda correspondiente al 'to' de la call de la API. En este ejemplo, es en MXN.



## Integración con Checkout Básico

El Checkout Básico es la solución estandar de Mercado Pago. Dicha solución consiste en la generación de una preferencia de pago, la cual retorna un `init_point` que al abrirlo redirecciona al usuario a un checkout donde toda la experiencia es manejada por Mercado Pago.

> VENTAJAS
>
> * Velocidad de integración.
> * Escalabilidad en muchos paises.
> * Incluye todos los medios de pagos disponibles.
>
> DESVENTAJAS
>
> * No permite modificar el diseño del checkout.
> * No permite modificar la experiencia de pago.
> * El usuario es redigido fuera de la aplicación para realizar el pago.


Para llevar a cabo la integración deberás seguir la documentación que podrás encontrar ingresando en el siguiente [link](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction)


Este sería un ejemplo de la creación de la preferencia de pago:

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

Este sería un ejemplo de la  respuesta de la creación de la preferencia de pago:

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

Este es un ejemplo de la respuesta del pago:

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



## Integración con el Tokenizador
El Tokenizador es la solución de Mercado Pago que rápidamente te permite obtener un card token de la tarjeta de tu cliente. Dicha solución consiste en la generación de una orden de pago utilizando Javascript que abre un checkout para que el pagador cargue los datos de la tarjeta. Luego, recibirás en tu backend el card token para que hagas un POST del pago.

> VENTAJAS
>
> * Velocidad de integración.
> * Escalabilidad en muchos paises.
> * El usuario se mantiene dentro del sitio.
>
> DESVENTAJAS
>
> * No permite modificar el diseño del checkout.
> * No permite modificar la experiencia de pago.
> * No incluye todos los medios de pago.


Para llevar a cabo la integración deberás seguir la documentación que podrás encontrar ingresando en el siguiente [link](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/tokenize-checkout/introduction)


Este sería un ejemplo de la creación del checkout:

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

Este sería un ejemplo de la creación del pago:

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


Este es un ejemplo de la respuesta del pago:

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



## Integración con Checkout Personalizado (API)

El Checkout Personalizado es la solución más customizable de Mercado Pago. Dicha solución consiste en la utilización del SDK Javascript y las API's de Mercado Pago para llevar a cabo la tokenización de la tarjeta del pagador y luego el correspondiente posteo del pago. Toda la experiencia es manejada por el integrador.

> VENTAJAS
>
> * Permite crear un diseño único para el checkout.
> * Permite modificar la experiencia de pago.
> * El usuario se mantiene dentro del sitio.
>
> DESVENTAJAS
>
> * Velocidad de integración.
> * Manejo de los mensajes de error y estados de pago.
> * Debes integrar cada medio de pagos por separado.


Para llevar a cabo la integración deberás seguir la documentación que podrás encontrar ingresando en el siguiente  [link](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/introduction)

Deberás generar un formulario de tarjeta como se indica en la documentación que te permita obtener un card-token de la tarjeta del pagador para luego llevar a tu servidor y así hacer el POST del pago:

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


Este sería un ejemplo de la creación del pago:

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


Este es un ejemplo de la respuesta del pago:

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



## Devoluciones de pagos
La devolución de los pagos se hacen por valor de la moneda local de la operación (por ejemplo, [FAKER][CURRENCY][ACRONYM]) bajo la misma conversión del pago original.

Para esto, será necesario que hagas la busqueda del pago mediante el `payment_id` y obtener el `currency_conversion`.

Podes obtener más información de la API de devoluciones en el siguiente [link](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds).
