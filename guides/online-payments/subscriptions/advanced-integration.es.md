# Actualización de suscripciones

Para actualizar, pausar, cancelar o reactivar una suscripción ya creada, es necesario usar el `preapproval_id` que retorna luego de la [creación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/introduction).

## Búsqueda de una suscripción

Puedes realizar búsquedas de tus suscripciones siempre que lo necesites. 

Los parámetros a sumar son opcionales y según los parámetros que se envían, se combinan para buscar una suscripción. 

Por ejemplo, puedes buscar todas las suscripciones pausadas de un cliente: 

```curl
curl --location --request GET 'https://api.mercadopago.com/preapproval/search?status=paused&payer_email=john@yourdomain.com' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
```

## Modificar tarjeta y monto

Si quieres modificar una tarjeta o el monto de una suscripción ya creada, tienes que volver a enviar los campos con los datos actualizados.

Para __modificar la tarjeta__, debes indicar el nuevo token en el atributo `card_token_id`. Y para __actualizar el monto__, envía el nuevo monto a través del `auto_recurring.transaction_amount` y específica nuevamente el `auto_recurring.currency_id`.

Con el `application_id` de la suscripción que quieras actualizar, realiza la siguiente llamada: 

```curl
curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": 100
  },
  "card_token_id":"1aca87c7338585abdf1edf0000000000"
}'
```

>Ten en cuenta que el token dura 7 días y se puede usar una sola vez, por lo tanto no debe guardarse este valor.

## Cancelar o pausar

Para __cancelar una suscripción__, solo debes especificar el valor `cancelled` en `status`. Esta acción finaliza la suscripción y hace que no se pueda reactivar.

Y para __pausar una suscripción__, tienes que indicar `paused` en `status`. Puedes volver a activarla cuando quieras. 

```curl
curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "status": "cancelled"
}'
```

![Basic-subscriptions](/images/subscriptions/status-preapproval-es.png)

## Reactivar una suscripción pausada

### Activar suscripción con tiempo de fin

Si quieres reactivar o extender el tiempo de una suscripción que tenía determinado un tiempo específico, tienes que agregar el tiempo que estuvo pausada o que quieras sumar para poder cobrar la totalidad de cuotas estimadas.  

Por ejemplo, en el caso de querer cobrar todas las cuotas de una duración anual con una frecuencia mensual que fue pausada a los 6 meses por un mes, debes agregarle un mes más el tiempo de vida.

Para hacerlo, actualiza el tiempo en el campo `auto_recurring.end_date` y envía el valor `authorized` en `status`.

Con el `application_id` de la suscripción que quieras actualizar, realiza la siguiente llamada: 

```curl
curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
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

### Activar suscripción sin tiempo de fin

Para reactivar una suscripción, envía el valor `authorized` en `status`. Esto reactivará las cuotas según la recurrencia a partir de la fecha en la que se realizó el cambio de estado.

Con el `application_id` de la suscripción que quieras actualizar, realiza la siguiente llamada: 

```curl
curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "status": "authorized"
}'
```

## Fecha de facturación

Para suscripciones con frecuencia de pago mensual, puedes elegir un día fijo del mes para que se efectúen los cobros. En caso de que no configures un día específico, los cobros serán hechos en el mismo día del mes en que el suscriptor dió de alta a la suscripción.

Cuando estableces una fecha de facturación, puedes elegir si se va a cobrar o no un __monto proporcional (prorrateo)__ a los pagadores que se adhieren a esa suscripción en fechas distintas a la que elegiste.

> NOTE
> 
> Nota
> 
> A modo de ejemplo, los códigos de abajo muestran el día 10 como fecha de facturación. Se puede seleccionar cualquier día entre el __1 y el 28__, utilizando el parámetro `billing_day`.

### Plan con fecha de facturación para el día 10 con pago proporcional

```json
{
"back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]",
	"reason": "Plan Gym Gold",
	"auto_recurring": {
		"frequency": "1",
		"frequency_type": "months",
    "transaction_amount": 1100,
		"currency_id": "[FAKER][CURRENCY][ACRONYM]",
		"repetitions": 12,
    "billing_day": 10,
    "billing_day_proportional": true,
		"free_trial": {
			"frequency_type": "months",
			"frequency": "1"
		}
	}
}
```

Para no cobrar el pago proporcional, haz la siguiente llamada: 

### Plan con fecha de facturación para el día 10 sin pago proporcional

```json
{
	"back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]",
	"reason": "Plan Gym Gold",
	"auto_recurring": {
	  "frequency": "1",
		"frequency_type": "months",
    "transaction_amount": 1100,
		"currency_id": "[FAKER][CURRENCY][ACRONYM]",
		"repetitions": 12,
    "billing_day": 10,
    "billing_day_proportional": false,
		"free_trial": {
		  "frequency_type": "months",
		  "frequency": "1"
		}
	}
}
```

> Puedes obtener más información sobre los campos en la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval/post).


------------
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Pruebas
>
> Revisa que tus suscripciones creadas estén bien configuradas con los usuarios de prueba. 
>
> [Pruebas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/testing)


> RIGHT_BUTTON
>
> Lógica de reintentos de cobros
>
> Por si tienes inconvenientes, te explicamos la lógica de reintentos de cobros.
>
> [Lógica de reintentos de cobros](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/payment-retry)
