# Suscripciones con plan asociado

Las suscripciones con plan asociado se utilizan cuando es necesario utilizar la misma suscripción en diferentes ocasiones para organizarlas en grupos identificables. Por ejemplo, para una suscripción mensual y anual a un gimnasio.

La integración de **suscripciones con plan asociado** se realiza en dos pasos. En el primero es necesario **crear un plan** que irá asociado a la suscripción y en el segundo, la **creación de la suscripción**. 

## Crear plan

El plan de suscripción te permite definir, entre otros atributos, el título, el valor y la frecuencia de las suscripciones creadas por el vendedor. Para crear un plan y asociarlo con una suscripción, mira el endpoint [/preapproval_plan](/developers/es/reference/subscriptions/_preapproval_plan/post), completa los atributos necesarios y ejecuta el request o, si prefieres, usa el _curl_ a continuación.

> NOTE
>
> Nota
>
> Al ejecutar la API, se creará el plan y tendrás acceso a `preapproval_plan_id`, **que en la respuesta de la API se mostrará como `id`**. Este **atributo es obligatorio** para crear la suscripción. 

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

> WARNING
>
> Importante
>
> Una _Suscripción con plan asociado_ siempre deberá ser creada con su `card_token_id` y en status `Authorized`.

¡Listo! Ya creaste el plan de su suscripción con plan asociado. Para finalizar la integración, dirígete al siguiente paso, que es **crear una suscripción**.

