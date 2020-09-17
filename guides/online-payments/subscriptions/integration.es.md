
# Integrar suscripciones   

## Tipos de integraciones

Hay dos formas de integrar suscripciones: 

* __Con un plan asociado__: Usa esta forma cuando necesites pocas configuraciones en las suscripciones y las pueda organizar en grupos identificables. Por ejemplo para una suscripción mensual y anual de un gimnasio. 

* __Sin un plan asociado__: Usa esta forma cuando sepas que las diferentes suscripciones no van a compartir ninguna característica porque van ser muy específicas o especializadas para cada pagador. Por ejemplo para una suscripción de un solo mes con un descuento particular.

> NOTE
> 
> Conceptos claves
> 
> ¿Tienes dudas sobre qué es un plan u otro concepto? Ten a mano los <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/subscription-plans" target="_blank">conceptos claves</a> para revisarlos cuando los necesites.


## Suscripciones con un plan asociado

Si quieres usar una suscripción con un plan asociado, primero debes crear un plan. 

### Crear plan

Al generar el plan vas a obtener el _preapproval_plan_id_ que vas a usar para realizar la suscripción. 

Para crear el plan, realiza la siguiente llamada a nuestra API con los datos que necesites:

[[[
```curl --location --request POST 'https://api.mercadopago.com/preapproval_plan?access_token=<APP_ACCESS_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
	"back_url":"https://www.mercadopago[FAKER][URL][DOMAIN]",
	"reason":"[FAKER][COMMERCE][PRODUCT_NAME]",
	"auto_recurring":{
		"frequency":"1",
		"frequency_type":"months",
        "transaction_amount":[FAKER][NUMBER][BETWEEN][10,1000],
		"currency_id":"[FAKER][CURRENCY][ACRONYM]",
		"repetitions":12,
		"free_trial":{
			"frequency_type":"months",
			"frequency":"1"
		}
	}
}'
```
]]]

Atributos

Atributo |	Descripción
------------ 	|	--------
`back_url` | Al realizarse una suscripción exitosa creada a través del panel de Mercado Pago se redirige a esta url. No funciona para integraciones vía API.|
`reason (requerido)` | Es la descripción que verá el suscriptor al realizar la suscripción y el detalle que se verá en el resumen de la tarjeta. |
`auto_recurring.frequency (requerido)` | Indica la cantidad de tiempo o ciclo, en base al tipo de frecuencia. |
`auto_recurring.frequency_type (requerido)` | Indica el tipo de frecuencia. Puede ser por mes (months) o días (days). En conjunto con la frecuencia, definen el ciclo de cuotas que va a tener una suscripción. Por ejemplo, si cada quince días se necesita generar una cuota para ser cobrada quedaría de la siguiente forma: auto_recurring.frequency:15 auto_recurring.frequency_type: days |
`auto_recurring.transaction_amount (requerido)` | Si indicamos el monto, es fijo. Si no completamos este campo, se entiende como monto variable. Se admite un máximo de dos decimales separados por punto. |
`auto_recurring.currency_id (requerido)` | Identifica la moneda que corresponde al país. |
`auto_recurring.repetitions` | Indica si la suscripción va a tener un límite. Si no se especifica no tiene límite. Este límite se relaciona con auto_recurring.frequency y auto_recurring.frequency_type. |
`auto_recurring.free_trial.frequency` | Indica la cantidad de tiempo que no se va a cobrar por el servicio. Tiene que ser consistente con auto_recurring.frequency |
`auto_recurring.free_trial.frequency_type` | Indica la cantidad de cuotas que no se van a cobrar por el servicio. Tiene que ser consistente con auto_recurring.frequency_type |

#### Respuesta
`HTTP Status 200 OK`
```json

{
    "id": "2c938084726e18d60172720000000000",
    "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "reason": "[FAKER][COMMERCE][PRODUCT_NAME]",
    "status": "active",
    "date_created": "2020-06-01T20:14:35.008-04:00",
    "last_modified": "2020-06-01T20:14:35.008-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_plan_id=2c938084726e18d60172720000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_plan_id=2c938084726e18d60172720000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": [FAKER][NUMBER][BETWEEN][10,1000],
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "repetitions": 12,
        "free_trial": {
            "frequency": 1,
            "frequency_type": "months"
        }
    }
}

```
¡Listo! Ya podemos crear la suscripción y asociarla a tu plan.


### Crear suscripción

Una vez generado tu plan y obtenido tu _preapproval_plan_id_, crea tu suscripción por API de la siguiente manera

[[[
```curl --location --request POST 'https://api.mercadopago.com/preapproval?access_token=<APP_ACCESS_TOKEN> \
--header 'Content-Type: application/json' \
--data-raw '{
   "preapproval_plan_id":"2c938084726e18d60172720000000000",
   "card_token_id":"9fca87c7338585abd000111222333444",
   "payer_email":"[FAKER][INTERNET][FREE_EMAIL]"
   
}'
```
]]]

Atributos

Atributos |	Descripción
------------ 	|	--------
`preapproval_plan_id (requerido)` | Hace referencia al Template o Plan previamente generado.|
`card_token_id (requerido)` | La información de la tarjeta será convertida en un token para enviar los datos de modo seguro. |
`payer_email (requerido)` | E-mail del pagador. |

> WARNING
> 
> Importante
> 
>  Para crear un token de pago es importante que siempre utilices nuestras __<a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/sdks/official/js/" target="_blank">librerías oficiales</a>__ para tu integración.

#### Respuesta 
`HTTP Status 200 OK`
```json
{
    "id": "2c938084726e18d60172750000000000",
    "preapproval_plan_id": "2c938084726e18d60170001112223334",
    "payer_id": 100200300,
    "payer_email": "[FAKER][INTERNET][FREE_EMAIL]",
    "back_url": "http://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 10101,
    "application_id": 1234567812345678,
    "status": "authorized",
    "reason": "[FAKER][COMMERCE][PRODUCT_NAME]",
    "external_reference": "125124513",
    "date_created": "2020-06-02T08:37:42.734-04:00",
    "last_modified": "2020-06-02T08:37:42.735-04:00",
    "init_point":  "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726e18d60172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726e18d60172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": [FAKER][NUMBER][BETWEEN][10,1000],
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-07-02T08:37:42.734-04:00",
        "end_date": "2021-07-02T11:59:52.581-04:00"
}
```
> Puedes obtener más información sobre los campos en la <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/" target="_blank">Referencia de API</a>.

¡Y listo! Ya creaste una suscripción con un plan asociado.


## Suscripciones sin plan asociado

Si quieres usar una suscripción sin plan asociado, primero debes configurar el estado del pago.

### Crear suscripción con pago autorizado

Para crear una suscripción con estado authorized, se deben enviar los datos de la tarjeta asociada de la siguiente manera:

[[[
```curl --location --request POST 'https://api.mercadopago.com/preapproval?access_token=<APP_ACCESS_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": [FAKER][NUMBER][BETWEEN][10,1000],
    "frequency": 1,
    "frequency_type": "months",
    "end_date": "2022-07-20T11:59:52.581-04:00",
   
  },
  "back_url": "http://www.mercadopago[FAKER][URL][DOMAIN]/",
  "collector_id": 100200300,
  "external_reference": "1245AT234562",
  "payer_email": "[FAKER][INTERNET][FREE_EMAIL]",
  "reason": "[FAKER][COMMERCE][PRODUCT_NAME]",
  "card_token_id":"9fca87c7338585abdf1edf0000000000",
  "status": "authorized"
}'
```
]]]

#### Respuesta 
`HTTP Status 200 OK`
```json

{
    "id": "2c938084726fca480172750000000000",
    "payer_id": 400500600,
    "payer_email": "[FAKER][INTERNET][FREE_EMAIL]",
    "back_url": "http://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "status": "authorized",
    "reason": "[FAKER][COMMERCE][PRODUCT_NAME]",
    "external_reference": "23546246234",
    "date_created": "2020-06-02T09:07:14.260-04:00",
    "last_modified": "2020-06-02T09:07:14.263-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": [FAKER][NUMBER][BETWEEN][10,1000],
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-06-02T09:07:14.260-04:00",
        "end_date": "2022-07-20T11:59:52.581-04:00"
    },
    "payment_method_id": "visa",
    "version": 0
}
```

### Crear suscripción con pago pendiente

Puedes crear una suscripción con estado _pending_ y sin medio de pago asociado. 

Para poder adherirse, la carga de los datos de la tarjeta se debe realizar con nuestro formulario. Solamente se deberá compartir el link retornado en la propiedad _init_point_ al pagador:

[[[
```curl --location --request POST 'https://api.mercadopago.com/preapproval?access_token=<APP_ACCESS_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": [FAKER][NUMBER][BETWEEN][10,1000],
    "frequency": 1,
    "frequency_type": "months",
    "end_date": "2022-07-20T11:59:52.581-04:00",
   
  },
  "back_url": "http://www.mercadopago[FAKER][URL][DOMAIN]/",
  "collector_id": 100200300,
  "external_reference": "1245AT234562",
  "reason": "[FAKER][COMMERCE][PRODUCT_NAME]",
  "status": "pending"
}'
```
]]]


#### Respuesta
`HTTP Status 200 OK`
```json

{
    "id": "2c938084726fca480172750000000000",
    "payer_id": 400500600,
    "payer_email": "[FAKER][INTERNET][FREE_EMAIL]",
    "back_url": "http://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "status": "pending",
    "reason": "[FAKER][COMMERCE][PRODUCT_NAME]",
    "external_reference": "23546246234",
    "date_created": "2020-06-02T09:07:14.260-04:00",
    "last_modified": "2020-06-02T09:07:14.263-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": [FAKER][NUMBER][BETWEEN][10,1000],
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-06-02T09:07:14.260-04:00",
        "end_date": "2022-07-20T11:59:52.581-04:00"
    },
    "payment_method_id": "visa",
    "version": 0
}
```

> Puedes obtener más información sobre los campos en la <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/" target="_blank">Referencia de API</a>.


------------
### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Integración avanzada
>
> Actualiza, modifica o cancela tus suscripciones.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/advanced-integration/)


> RIGHT_BUTTON_RECOMMENDED_ES
>
> Reintentos de cobros
>
> Por si tienes inconvenientes, te explicamos la lógica de reintentos de cobros.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/payment-retry/)