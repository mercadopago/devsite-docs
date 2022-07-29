# Integrate con Spreedly
Recibe pagos de manera simple y segura de Mercado Pago a través de Spreedly.

Los metodos disponibles de Spreedly con Mercado Pago son:

- Purchase
- Authorize
- Capture
- Refund
- Void
- Verify

Para la integración con Spreedly es necesario obtener y configurar las [credenciales]([FAKER][CREDENTIALS][URL]) Public key y Access token de Mercado Pago.

> Encuentra toda la información sobre tus credenciales en nuestras [preguntas frecuentes](/developers/es/guides/faqs/credentials/). 

A su vez, también es necesario ingresar el código de país:

- AR - Argentina
- BR - Brazil
- CL - Chile
- CO - Colombia
- MX - Mexico
- PE - Peru
- UY - Uruguay

Finalmente, para operar con Mercado pago es necesario que nos envies los datos de identificación del dueño de la tarjeta (a excepción de México). Debes enviar como datos específicos del gateway:

- cardholder_identification_type.
- cardholder_identification_number.


## Empezando con Spreedly
Para empezar a ejecutar transacciones y obtener pagos de tus usuarios vas a necesitar:

1. Crear una [cuenta gratutita](https://spreedly.com/trial-qualification) y obtener las [credenciales](https://docs.spreedly.com/basics/credentials).

2. [Agregar Mercado Pago](https://docs.spreedly.com/basics/gateway/) como gateway de pago.

3. Empezar a [obtener información del medio de pago](https://docs.spreedly.com/basics/payment-method) de tus usuarios.

4. [Generar una compra](https://docs.spreedly.com/basics/purchase) con Spreedly a través de Mercado Pago con la información de pago de tus usuarios.

## Agregar Mercado Pago como gateway
Antes de empezar a generar transacciones a través de Spreedly, tenes que agregar a Mercado Pago como gateway. En este paso, es donde asignas las credenciales de Mercado Pago y otras propiedades específicas.

La API involucrada en este proceso es:

```
https://core.spreedly.com/v1/gateways.json
```

Un ejemplo de la vinculación de Mercado Pago como gateway sería:

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

La respuesta que vas a obtener es similar a la siguiente:

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

## Generar un medio de pago

Para que Spreedly puede transaccionar a través de Mercado Pago es necesario obtener la información de la tarjeta de tu usuario ("Spreedly payment method"). Debido a que se trata de información sensible la misma no debe ir a tu servidor. Para esto es necesario implementar el [checkout de Spreedly](https://docs.spreedly.com/basics/payment-method/).

La API involucrada en este proceso es:

```
https://core.spreedly.com/v1/payment_methods.json
```

Un ejemplo de la generación de un metodo de pago sería:

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
La respuesta que vas a obtener es similar a la siguiente:

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

## Generar un pago

Una vez que ya hayas configurado Mercado Pago como gateway y tengas información del medio de pago de tu usuario en Spreedly, podes empezar a generar pagos y otro tipo de transacciones.

Para generar el pago es necesario que tengas el token que representa al medio de pago de tu usuario ("Spreedly payment method") y el token que representa a Mercado Pago como gateway. Con esto podrás generar el POSTing al endpoint API de Spreedly:

```
https://core.spreedly.com/v1/gateways/<gateway_token>/purchase.<format>
```

Un ejemplo de la generación de un pago sería:

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


> El campo amount siempre es un entero en centena. Por lo tanto, si queres cobrar $84,58, tienes que enviar el valor 8458.


La respuesta que vas a obtener es similar a la siguiente:

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

El campo "succeeded" indica que la transacción fue exitosa. Una vez que obtengas que la transacción fue aprobada, podras mostrarle la pantalla de felicitaciones a tu cliente.

También puedes ejecutar otro tipo de transacciones a través de Mercado Pago utilizando el medio de pago obtenido:

- Authorize
- Capture
- Refund
- Void
- Verify

## Campos propios de Mercado Pago

Para procesar con Mercado Pago y para obtener mayores niveles de aprobación en tus pagos recomendamos que en la integración con Spreedly envies la mayor cantidad de información posible al generar un pago. Esta información se envía dentro del array: `"gateway_specific_fields"` `"mercado_pago"`.

### Payer Identification

Para procesar con Mercado Pago es necesario enviar la identificación del pagador en cada pago. Esta información es OBLIGATORIA para todos los sitios de Mercado Pago a excepción de México. Para mayor detalles, ingresa en el siguiente [link]("/reference/identification_types/_identification_types/get/")

### Cuotas

Podes especificar el número de cuotas para una transacción enviando el campo `installments`. Si este campo no es enviado, Spreedly va a enviarlo con valor igual a 1.

### Statement Descriptor

Este es un string que podes enviar para que tu cliente pueda identificar el cargo en el resumen de la tarjeta. Podes especificar el valor enviandolo en el campo `statement_descriptor`. Esto se encuentra sólo disponible para Brasil.

### Información Adicional

Para obtener una mejora en la aprobación de los pagos podes enviar información adicional del pago en formato JSON en el campo `additional_info`. Para mayor información ingresa en el siguiente [link]("/reference/payments/_payments_id/get/").

### Mercado Pago Device Fingerprint

Mercado Pago tiene sus propias herramientas de prevención de fraude. Siempre que sea posible recomendamos enviar información sobre el device del comprador, esto ayudará a evitar transacciones fraudulentas y mejorará la aprobación de tus pagos.

Para implementar en tu sitio la generación del device debes agregar el siguiente código a tu _checkout_:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

Finalmente, deberás enviar el valor que se encuentra en la variable global de javascript `MP_DEVICE_SESSION_ID` en el campo `device_id`.

### Ejemplo de un pago completo
A continuación pueden ver un ejemplo de un pago enviando toda la información disponible:

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