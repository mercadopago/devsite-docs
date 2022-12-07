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
> Al ejecutar la API, se creará el plan y tendrás acceso a `preapproval_plan_id`, **que en la respuesta de la API se mostrará como `id`.** Este **atributo es obligatorio** para crear la suscripción. 

[[[
```curl
curl -X POST \

      'https://api.mercadopago.com/preapproval_plan' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -d '{
  "reason": "Yoga classes",
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "repetitions": 12,
    "billing_day": 10,
    "billing_day_proportional": true,
    "free_trial": {
      "frequency": 1,
      "frequency_type": "months"
    },
    "transaction_amount": 10,
    "currency_id": "ARS"
  },
  "payment_methods_allowed": {
    "payment_types": [
      {}
    ],
    "payment_methods": [
      {}
    ]
  },
  "back_url": "https://www.yoursite.com"
}'
```
]]]

## Crear suscripción

Una vez que hayas creado un plan, puedes crear la suscripción. La suscripción es una autorización del pagador para cargos recurrentes con un medio de pago definido (tarjeta de crédito, por ejemplo). Al suscribirse a un producto/servicio, el cliente acepta que se le cobre periódicamente un cierto monto por el período de tiempo definido.

Para crear una suscripción, tenga a mano el `preapproval_plan_id`, accede al endpoint [/preapproval](/developers/es/reference/subscriptions/_preapproval/post) y completa los atributos como se indica en la tabla de parámetros o, si lo prefiere, use el curl a continuación.

[[[
```curl

curl -X POST \
      'https://api.mercadopago.com/preapproval' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -d '{
  "preapproval_plan_id": "2c938084726fca480172750000000000",
  "reason": "Yoga classes",
  "external_reference": "YG-1234",
  "payer_email": "test_user@testuser.com",
  "card_token_id": "e3ed6f098462036dd2cbabe314b9de2a",
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "start_date": "2020-06-02T13:07:14.260Z",
    "end_date": "2022-07-20T15:59:52.581Z",
    "transaction_amount": 10,
    "currency_id": "ARS"
  },
  "back_url": "https://www.mercadopago.com.ar",
  "status": "authorized"
}'
```
]]]

Cuando termines de llenar los atributos, ejecuta el request y ¡listo! Se habrá creado la suscripción con el plan asociado.