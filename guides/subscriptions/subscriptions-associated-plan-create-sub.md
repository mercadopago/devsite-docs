## Crear suscripción

> WARNING
>
> Importante
>
> Antes de comenzar a crear la suscripción, deberás contar con un plan creado. Si aún no lo has hecho, ve a [Crear plan](/developers/es/docs/subscriptions/integration-configuration/subscriptions-associated-plan/create-plan).

Una vez que hayas creado un plan, puedes crear la suscripción. La suscripción es una autorización del pagador para cargos recurrentes con un medio de pago definido (tarjeta de crédito, por ejemplo). Al suscribirse a un producto/servicio, el cliente acepta que se le cobre periódicamente un cierto monto por el período de tiempo definido.

Para crear una suscripción, tenga a mano el `preapproval_plan_id`, accede al endpoint [/preapproval](/developers/es/reference/subscriptions/_preapproval/post) y completa los atributos como se indica en la tabla de parámetros o, si prefieres, usa el curl a continuación.

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