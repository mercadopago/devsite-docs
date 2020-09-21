
# Actualización de suscripciones

Para actualizar, pausar, cancelar o reactivar una suscripción ya creada, es necesario usar el _preapproval_id_ que retorna luego de la <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/subscriptions/integration/" target="_blank">creación</a>. 

## Búsqueda de una suscripción

Puedes realizar búsquedas de tus suscripciones siempre que lo necesites. 

Los parámetros a sumar son opcionales y según los parámetros que se envían, se combinan para buscar una suscripción. 

Por ejemplo, puedes buscar todas las suscripciones pausadas de un cliente: 

[[[
```curl --location --request GET 'https://api.mercadopago.com/preapproval/search?status=paused&payer_email=[FAKER][INTERNET][FREE_EMAIL] \
--header 'Authorization: Bearer APP_ACCESS_TOKEN' \
```
]]]


## Modificar tarjeta y monto

Si quieres modificar una tarjeta o el monto de una suscripción ya creada, tienes que volver a enviar los campos con los datos actualizados.

Para __modificar la tarjeta__, debes indicar el nuevo token en el atributo _card_token_id_. Y para __actualizar el monto__, envía el nuevo monto a través del _auto_recurring.transaction_amount_ y específica nuevamente el _auto_recurring.currency_id_.

Con el _application_id_ de la suscripción que quieras actualizar, realiza la siguiente llamada: 

[[[
```curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer APP_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": [FAKER][NUMBER][BETWEEN][10,1000]
  },
  "collector_id": 100200300,
  "card_token_id":"1aca87c7338585abdf1edf0000000000"
}'
```
]]]

>Ten en cuenta que el token dura 7 días y se puede usar una sola vez, por lo tanto no debe guardarse este valor.

## Cancelar o pausar

Para __cancelar una suscripción__, solo debes especificar el valor _cancelled_ en _status_. Esta acción finaliza la suscripción y hace que no se pueda reactivar.

Y para __pausar una suscripción__, tienes que indicar _paused_ en _status_.

[[[
```curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer APP_ACCESS_TOKEN' \
--data-raw '{
  "status": "cancelled"
}'
```
]]]

## Reactivar una suscripción pausada

### Activar suscripción con tiempo de fin

Si quieres reactivar o extender el tiempo de una suscripción que tenía determinado un tiempo específico, tienes que agregar el tiempo que estuvo pausada o que quieras sumar para poder cobrar la totalidad de cuotas estimadas. 

Por ejemplo, en el caso de querer cobrar todas las cuotas de una duración anual con una frecuencia mensual que fue pausada a los 6 meses por un mes, debes agregarle un mes más el tiempo de vida.

Para hacerlo, actualiza el tiempo en el campo _auto_recurring.end_date_ y envía el valor _authorized_ en _status_.

Con el _application_id_ de la suscripción que quieras actualizar, realiza la siguiente llamada: 


[[[
```curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer APP_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "collector_id": 100200300,
  "auto_recurring": {
    "end_date": "2023-07-20T11:59:52.581-04:00"
  },
  "status": "authorized"
}'
```
]]]

### Activar suscripción sin tiempo de fin

Para reactivar una suscripción, envía el valor _authorized_ en _status_. Esto reactivará las cuotas según la recurrencia a partir de la fecha en la que se realizó el cambio de estado.

Con el _application_id_ de la suscripción que quieras actualizar, realiza la siguiente llamada: 

[[[
```curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer APP_ACCESS_TOKEN' \
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
> Lógica de reintentos de cobros
>
> Por si tienes inconvenientes, te explicamos la lógica de reintentos de cobros.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/payment-retry/)


> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integra suscripciones
>
> Elige tu forma de integrar y comienza a recibir pagos recurrentes. 
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/integration/)