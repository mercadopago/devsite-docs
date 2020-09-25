---
indexable: false
---

# Subscription updates

To update, pause, cancel or reactivate a subscription already created, you need to use the preapproval_id that returns after the <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/subscriptions/integration/" target="_blank">creation</a>. 

## Search for a subscription

You can search your subscriptions whenever you need. 

The parameters to be added are optional and depending on the parameters sent, they are combined to search for a subscription. 

For example, you can search for all of a customer's paused subscriptions: 

[[[
```curl curl --location --request GET 'https://api.mercadopago.com/preapproval/search?status=paused&payer_email=[FAKER][INTERNET][FREE_EMAIL]' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
```
]]]


## Edit card and amount

If you want to edit a card or the amount of a subscription already created, you must resend the fields with the updated data. 

To __edit the card__, you must indicate the new token in the `card_token_id` attribute. And to __update the amount__, send the new amount through `auto_recurring.transaction_amount` and specify again the `auto_recurring.currency_id`.

With the `application_id` of the subscription you want to update, make the following call: 

[[[
```curl curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": [FAKER][NUMBER][BETWEEN][10,1000]
  },
  "card_token_id":"1aca87c7338585abdf1edf0000000000"
}'
```
]]]

>Note that the token lasts 7 days and can be used only once, so this value should not be saved.

## Cancelar o pausar

Para __cancelar una suscripción__, solo debes especificar el valor `cancelled` en `status`. Esta acción finaliza la suscripción y hace que no se pueda reactivar.

Y para __pausar una suscripción__, tienes que indicar `paused` en `status`. Puedes volver a activarla cuando quieras. 


[[[
```curl curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "status": "cancelled"
}'
```
]]]

## Reactivar una suscripción pausada

### Activar suscripción con tiempo de fin

Si quieres reactivar o extender el tiempo de una suscripción que tenía determinado un tiempo específico, tienes que agregar el tiempo que estuvo pausada o que quieras sumar para poder cobrar la totalidad de cuotas estimadas.  

Por ejemplo, en el caso de querer cobrar todas las cuotas de una duración anual con una frecuencia mensual que fue pausada a los 6 meses por un mes, debes agregarle un mes más el tiempo de vida.

Para hacerlo, actualiza el tiempo en el campo `auto_recurring.end_date` y envía el valor `authorized` en `status`.

Con el `application_id` de la suscripción que quieras actualizar, realiza la siguiente llamada: 


[[[
```curl curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "auto_recurring": {
    "end_date": "2023-07-20T11:59:52.581-04:00"
  },
  "status": "authorized"
}'
```
]]]

### Activar suscripción sin tiempo de fin

Para reactivar una suscripción, envía el valor `authorized` en `status`. Esto reactivará las cuotas según la recurrencia a partir de la fecha en la que se realizó el cambio de estado.

Con el `application_id` de la suscripción que quieras actualizar, realiza la siguiente llamada: 

[[[
```curl curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "status": "authorized"
}'
```
]]]

>Puedes obtener más información sobre los campos en la <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/" target="_blank">Referencia de API</a>.


------------
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Pruebas
>
> Revisa que tus suscripciones creadas estén bien configuradas con los usuarios de prueba. 
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/testing/)


> RIGHT_BUTTON_RECOMMENDED_ES
>
> Lógica de reintentos de cobros
>
> Por si tienes inconvenientes, te explicamos la lógica de reintentos de cobros.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/payment-retry/)