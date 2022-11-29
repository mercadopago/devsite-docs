# Suscripciones con plan asociado

Las suscripciones con plan asociado se utilizan cuando es necesario utilizar la misma suscripción en diferentes ocasiones para organizarlas en grupos identificables. Por ejemplo, para una suscripción mensual y anual a un gimnasio.

> NOTE
>
> Importante
>
> Una Suscripción con Plan siempre deberá ser creada con su `card_token_id` y en status `Authorized`.

## Crear plan

La integración de **suscripciones con plan asociado** se realiza en dos pasos. En el primero es necesario **crear un plan** que irá asociado a la suscripción y en el segundo, la **creación de la suscripción**. 

El plan de suscripción te permite definir, entre otros atributos, el título, el valor y la frecuencia de las suscripciones creadas por el vendedor. Para crear un plan y asociarlo con una suscripción, mira el endpoint [/preapproval_plan](/developers/es/reference/subscriptions/_preapproval_plan/post), completa los atributos necesarios y ejecuta el request o, si lo prefiere, use el curl a continuación.

> NOTE
>
> Importante
>
> Al ejecutar la API, se creará el plan y tendrás acceso a `preapproval_plan_id`, **que en la respuesta de la API se mostrará como ìd`.** Este **atributo es obligatorio** para crear la suscripción. 

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/preapproval_plan?access_token=APP_USR-????' \
--header 'Content-Type: application/json' \
--data-raw '{
	"back_url":"https://www.google.com",
	"reason":"Test Subscription",
	"auto_recurring":{
		"frequency":"6",
		"frequency_type":"months",
		"repetitions":10,
		"transaction_amount":2300,
		"currency_id":"BRL",
		"free_trial":{
			"frequency_type":"months",
			"frequency":"6"
		}
	}
}'
```
]]]

## Crear suscripción

Una vez que hayas creado un plan, puedes crear la suscripción. La suscripción es una autorización del pagador para cargos recurrentes con un medio de pago definido (tarjeta de crédito, por ejemplo). Al suscribirse a un producto/servicio, el cliente acepta que se le cobre periódicamente un cierto monto por el período de tiempo definido.

Para crear una suscripción, tenga a mano el `preapproval_plan_id`, accede al endpoint [/preapproval](/developers/es/reference/subscriptions/_preapproval/post) y completa los atributos como se indica en la tabla de parámetros o, si lo prefiere, use el curl a continuación.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/preapproval?access_token=APP_USR-????????' \
--header 'Content-Type: application/json' \
--header 'X-scope: stage' \
--data-raw '{
	"preapproval_plan_id":"{{El_PREAPPROVAL_PLAN_ID_QUE_CREASTE}}",
    "payer_email": "test_user+1020927396@testuser.com",
    "card_token_id":"{{EL_CARD_TOKEN_ID_QUE_CREASTE}}",
	"status":"authorized"
}'
```
]]]

Cuando termines de llenar los atributos, ejecuta el request y ¡listo! Se habrá creado la suscripción con el plan asociado.