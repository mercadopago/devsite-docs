# Integrar suscripciones   

## Tipos de integraciones

Hay dos formas de integrar suscripciones: 

* __Con un plan asociado__: Usa esta forma cuando necesites usar la misma suscripción en distintas ocasiones y las quieras organizar en grupos identificables. Por ejemplo para una suscripción mensual y anual de un gimnasio. 

* __Sin un plan asociado__: Usa esta forma cuando sepas que las diferentes suscripciones no van a compartir ninguna característica porque van ser muy específicas o especializadas para cada pagador. Por ejemplo para una suscripción de un solo mes con un descuento particular.


![Basic-subscriptions](/images/subscriptions/Integrations-ES.png)


> NOTE
> 
> Conceptos claves
> 
> ¿Tienes dudas sobre qué es un plan u otro concepto? Ten a mano los [conceptos claves](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/introduction) para revisarlos cuando los necesites.


## Suscripciones con un plan asociado

Si quieres usar una suscripción con un plan asociado, primero debes crear un plan. 

### Crear plan

Al generar el plan vas a obtener el `preapproval_plan_id` que vas a usar para realizar la suscripción. 

Para crear el plan, realiza la siguiente llamada a nuestra API con los datos que necesites:

```curl 
curl --location --request POST 'https://api.mercadopago.com/preapproval_plan' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
	"back_url":"https://www.mercadopago[FAKER][URL][DOMAIN]",
	"reason":"Plan Pase Mensual Gold",
	"auto_recurring":{
		"frequency":"1",
		"frequency_type":"months",
        "transaction_amount":1100,
		"currency_id":"[FAKER][CURRENCY][ACRONYM]",
		"repetitions":12,
		"free_trial":{
			"frequency_type":"months",
			"frequency":"1"
		}
	}
}'
```

#### Atributos

| Atributo | Descripción |
| --- | --- |
| `reason` (requerido) | Es la descripción que verá el suscriptor al realizar la suscripción y el detalle que se verá en el resumen de la tarjeta. |
| `auto_recurring.frequency` (requerido) | Indica la cantidad de tiempo o ciclo en base al tipo de frecuencia. |
| `auto_recurring.frequency_type` (requerido) | Indica el tipo de frecuencia. Puede ser por mes (months) o días (days). En conjunto con la frecuencia, definen el ciclo de cuotas que va a tener una suscripción. <br><br>Por ejemplo, si cada quince días se necesita generar una cuota para ser cobrada quedaría de la siguiente forma: `auto_recurring.frequency`: 15 y `auto_recurring.frequency_type`: days |
| `auto_recurring.transaction_amount` | Si indicamos el monto, es fijo. Si no completamos este campo, se entiende como monto variable. Se admite un máximo de dos decimales separados por punto. |
| `auto_recurring.currency_id` (requerido) | Identifica la moneda que corresponde al país. |
| `auto_recurring.repetitions` | Indica si la suscripción va a tener un límite. Si no se especifica no tiene límite. Este límite se relaciona con `auto_recurring.frequency` y `auto_recurring.frequency_type`. |
| `auto_recurring.free_trial.frequency` | Define un período de prueba inicial y retrasa el primer cobro. Indica la cantidad de tiempo que no se va a cobrar por el servicio en base al tipo de frecuencia. Tiene que ser consistente con `auto_recurring.frequency`. |
| `auto_recurring.free_trial.frequency_type` | Indica la cantidad de cuotas que no se van a cobrar por el servicio. Tiene que ser consistente con `auto_recurring.frequency_type`. |

#### Respuesta
`HTTP Status 200 OK`
```json
{
    "id": "2c938084726e18d60172720000000000",
    "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "reason": "Plan Pase Mensual Gold",
    "status": "active",
    "date_created": "2020-06-01T20:14:35.008-04:00",
    "last_modified": "2020-06-01T20:14:35.008-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_plan_id=2c938084726e18d60172720000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_plan_id=2c938084726e18d60172720000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
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

![Basic-subscriptions](/images/subscriptions/status-plan-es.png)


### Crear suscripción

Una vez generado tu plan y obtenido tu `preapproval_plan_id`, crea la suscripción por API de la siguiente manera:

```curl 
curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
   "preapproval_plan_id":"2c938084726e18d60172720000000000",
   "card_token_id":"9fca87c7338585abd000111222333444",
   "payer_email":"test_user_XXXX@testuser.com"
   
}'
```

#### Atributos

| Atributo |	Descripción |
| --- | --- |
| `preapproval_plan_id` (requerido) | Hace referencia al Template o Plan previamente generado. |
| `card_token_id`(requerido) | La información de la tarjeta será convertida en un token para enviar los datos de modo seguro. |
| `payer_email` (requerido) | E-mail del pagador. |

> WARNING
> 
> Importante
> 
> ¿Tienes dudas sobre cómo crear el token de pago? Encuentra toda la información en la sección de [Capturar datos de la tarjeta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card#bookmark_captura_los_datos_de_la_tarjeta).

#### Respuesta 
`HTTP Status 200 OK`
```json
{
    "id": "2c938084726e18d60172750000000000",
    "preapproval_plan_id": "2c938084726e18d60170001112223334",
    "payer_id": 100200300,
    "payer_email": "test_user_XXXX@testuser.com",
    "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 10101,
    "application_id": 1234567812345678,
    "status": "authorized",
    "reason": "Plan Pase Mensual Gold",
    "external_reference": "125124513",
    "date_created": "2020-06-02T08:37:42.734-04:00",
    "last_modified": "2020-06-02T08:37:42.735-04:00",
    "init_point":  "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726e18d60172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726e18d60172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-07-02T08:37:42.734-04:00",
        "end_date": "2021-07-02T11:59:52.581-04:00"
}
```
>Puedes obtener más información sobre los campos en la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval/post).

¡Y listo! Ya creaste una suscripción con un plan asociado.

## Suscripciones sin plan asociado

Si quieres usar una suscripción sin plan asociado, primero debes configurar el estado del pago.

### Crear suscripción con pago autorizado

Para crear una suscripción con estado `authorized`, se deben enviar los datos de la tarjeta a asociar de la siguiente manera:

```curl 
curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": 1100,
    "frequency": 1,
    "frequency_type": "months",
    "end_date": "2022-07-20T11:59:52.581-04:00"
  },
  "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]/",
  "collector_id": 100200300,
  "external_reference": "1245AT234562",
  "payer_email": "test_user_XXXX@testuser.com",
  "reason": "Suscripción Pase Mensual Gold - Particular",
  "card_token_id":"9fca87c7338585abdf1edf0000000000",
  "status": "authorized"
}'
```

#### Respuesta 
`HTTP Status 200 OK`
```json
{
    "id": "2c938084726fca480172750000000000",
    "payer_id": 400500600,
    "payer_email": "test_user_XXXX@testuser.com",
    "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "status": "authorized",
    "reason": "Suscripción Pase Mensual Gold - Particular",
    "external_reference": "23546246234",
    "date_created": "2020-06-02T09:07:14.260-04:00",
    "last_modified": "2020-06-02T09:07:14.263-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-06-02T09:07:14.260-04:00",
        "end_date": "2022-07-20T11:59:52.581-04:00"
    },
    "payment_method_id": "visa",
    "version": 0
}
```

> NOTE
> 
> Pago de validación
> 
> Para comprobar que la tarjeta sea válida, realizamos un pago de validación con un monto mínimo. Si el pago es exitoso, procedemos a realizar la devolución de ese pago. El monto puede diferir según cada país. 


### Crear suscripción con pago pendiente

Puedes crear una suscripción con estado `pending` y sin medio de pago asociado. 

Para poder adherirse, la carga de los datos de la tarjeta se debe realizar con nuestro formulario. Solamente se deberá compartir el link retornado en la propiedad `init_point` al pagador:

```curl 
curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": 1100,
    "frequency": 1,
    "frequency_type": "months",
    "end_date": "2022-07-20T11:59:52.581-04:00"
  },
  "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]/",
  "collector_id": 100200300,
  "external_reference": "1245AT234562",
  "payer_email": "test_user_XXXX@testuser.com",
  "reason": "Suscripción Pase Mensual Gold - Particular",
  "status": "pending"
}'
```

> NOTE
> 
> Aumenta la seguridad de tu sitio web
>
> Con el código de seguridad, podrás proteger aún más tu sitio y obtener más pagos aprobados. Este te ayudará a prevenir el fraude y los pagos rechazados sin justificación.<br><br>
> ¡Es fácil! [Agrega el código](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections#bookmark_recomendaciones_para_mejorar_tu_aprobación) en simples pasos.


#### Respuesta
`HTTP Status 200 OK`
```json
{
    "id": "2c938084726fca480172750000000000",
    "payer_id": 400500600,
    "payer_email": "test_user_XXXX@testuser.com",
    "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "status": "pending",
    "reason": "Suscripción Pase Mensual Gold - Particular",
    "external_reference": "23546246234",
    "date_created": "2020-06-02T09:07:14.260-04:00",
    "last_modified": "2020-06-02T09:07:14.263-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-06-02T09:07:14.260-04:00",
        "end_date": "2022-07-20T11:59:52.581-04:00"
    },
    "version": 0
}
```

> Puedes obtener más información sobre los campos en la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval/post).


Atributos

| Atributo | Descripción |
| --- | --- |
| `reason` | Es la descripción que verá el suscriptor al realizar la suscripción y el detalle que se verá en el resumen de la tarjeta. |
| `status` | Estado de la suscripción. Puede ser `pending` o `authorized`. |
| `auto_recurring.frequency` | Indica la cantidad de tiempo o ciclo en base al tipo de frecuencia. |
| `auto_recurring.frequency_type` | Indica el tipo de frecuencia. Puede ser por mes (months) o días (days). En conjunto con la frecuencia, definen el ciclo de cuotas que va a tener una suscripción.<br><br> Por ejemplo, si cada quince días se necesita generar una cuota para ser cobrada quedaría de la siguiente forma: `auto_recurring.frequency`: 15 y `auto_recurring.frequency_type`: days |
| `auto_recurring.transaction_amount` | Monto que se aplica a la suscripción. |
| `auto_recurring.currency_id` | Identifica la moneda que corresponde al país. |
| `auto_recurring.start_date` | Indica la fecha de inicio de la suscripción. En el caso de no especificarla, comienza en el momento. |
| `auto_recurring.end_date` | Indica si la suscripción va a tener un límite. Si no se especifica no tiene límite. |
| `auto_recurring.free_trial.frequency` | Define un período de prueba inicial durante el cual podrás retrasar el primer cobro, indica la cantidad de tiempo que no se va a cobrar por el servicio en base al tipo de frecuencia. Tiene que ser consistente con `auto_recurring.frequency`. |
| `auto_recurring.free_trial.frequency_type` | Indica la cantidad de cuotas que no se van a cobrar por el servicio. Tiene que ser consistente con `auto_recurring.frequency_type`. |
| `collector_id` | Identificador del vendedor. |
| `payer_email` | E-mail del pagador. |
| `card_token_id`| Si la suscripción ya fue autorizada, la información de la tarjeta será convertida en un token para enviar los datos de modo seguro. |


### Search de preapprovals

Este llamado permite obtener todas las suscripciones (preapprovals) asociadas a un plan de suscripción.

```curl 
curl --location --request GET 'https://api.mercadopago.com/preapproval/search?sort=date_created:desc&limit=10&status=authorized,paused,cancelled&offset=0&payerId=100100100' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
```
------------
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Pruebas
>
> Revisa que tus suscripciones estén bien configuradas con los usuarios de prueba.
>
> [Pruebas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/testing)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Actualiza, modifica o cancela tus suscripciones.
>
> [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/advanced-integration)
