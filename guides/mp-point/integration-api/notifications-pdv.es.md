# Configurar notificaciones

Si quieres, puedes recibir notificaciones de Webhooks. Estas se envían desde nuestra API de Integraciones a tu sistema receptor mediante una llamada `HTTP POST`, y te alertan sobre todos los cambios relacionados a los estados de las intenciones de pago.

Para integrarlas, sigue las instrucciones de la [documentación sobre notificaciones Webhook](/developers/es/docs/mp-point/additional-content/your-integrations/notifications/webhooks). Deberás activar los eventos de **Integraciones Point** para recibir estas actualizaciones.


> WARNING
>
> Importante
>
> El campo `notification_url` mencionado en la documentación de notificaciones no es soportado por la API de integraciones.

## Ejemplos de estados de notificaciones

Una vez que hayas implementado las notificaciones y realizado los ajustes necesarios, estas tendrán el siguiente formato:

#### Estado Finished
Es el estado final de una intención de pago cuando finaliza la transacción.

----[mla]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "payment": {
   "id": 123456789,
   "state": "approved",
   "type": "credit_card"
 },
 "state": "FINISHED",
 "additional_info": {
   "external_reference": "information",
   "ticket_number": "39SHDKKDJ"
 }
}
```
------------

----[mlb]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "payment": {
   "id": 123456789,
   "state": "approved",
   "type": "credit_card"
 },
 "state": "FINISHED",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

----[mlm]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "payment": {
   "id": 123456789,
   "state": "approved",
   "type": "credit_card"
 },
 "state": "FINISHED",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

#### Estado Confirmation_required
Sucede cuando la intención de pago finalizó sin recibir un estado del pago. Una vez obtenido, este estado no cambiará. Cuando es recibido, debes confirmar en tu dispositivo cuál es el estado del pago, utilizando el `payment_id` recibido en la respuesta, antes de entregar tu producto o servicio.


----[mla]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "payment": {
   "id": 123456789,
   "state": "",
   "type": ""
 },
 "state": "CONFIRMATION_REQUIRED",
 "additional_info": {
   "external_reference": "information",
   "ticket_number": "39SHDKKDJ"
 }
}
```
------------

----[mlb]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"payment": {
  "id": 123456789,
  "state": "",
  "type": ""
},
"state": "CONFIRMATION_REQUIRED",
"additional_info": {
  "external_reference": "information"
}
}
```
------------

----[mlm]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "payment": {
   "id": 123456789,
   "state": "",
   "type": ""
 },
 "state": "CONFIRMATION_REQUIRED",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------


#### Estado Canceled
Es el estado final de una intención de pago cuando se cancela.

----[mla]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "state": "CANCELED",
 "additional_info": {
   "external_reference": "information",
   "ticket_number": "39SHDKKDJ"
 }
}
```
------------

----[mlb]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "state": "CANCELED",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

----[mlm]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "state": "CANCELED",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

#### Estado Error
Estado final de una intención de pago cuando ocurre un error en la transacción.

----[mla]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "state": "ERROR",
 "additional_info": {
   "external_reference": "information",
   "ticket_number": "39SHDKKDJ"
 }
}
```
------------

----[mlb]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "state": "ERROR",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

----[mlm]----
```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "state": "ERROR",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

## Notificaciones de mis dispositivos point

Al recibir notificaciones sobre eventos generados por cada uno de tus dispositivos point, lograrás tener control y hacer un seguimiento de los mismos. Estas notificaciones pueden ser ocasionadas por:

- Reinicios de la terminal.
- Deslogueos.
- Cambio en el modo de operación de PDV a STANDALONE o viceversa.

Las notificaciones llegarán a tu correo electrónico registrado en Mercado Pago. En caso de que no las encuentres, asegúrate de revisar tu carpeta de SPAM.


> WARNING
>
> Importante
>
> Recibirás notificaciones de todos los dispositivos asociados a tus credenciales de acceso (`access token`).

Puedes ver un ejemplo de cómo lucen estas notificaciones a continuación:

![Email notification](/images/point-api/email-notification-es.png)

## Activar notificaciones

Para activar las notificaciones es necesario habilitar el canal de correo electrónico del integrador. Para hacerlo, puedes utilizar el
siguiente comando:

```curl
curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/integrator' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
	"event_channel_devices": [
		"email"
	]
}'
```

> WARNING
>
> Importante
>
> Las notificaciones estarán disponibles 30 minutos después de haber realizado el proceso de activación.


## Consultar canales habilitados

Una vez configurado el canal por el que se recibirán las notificaciones, puedes consultar su estado ejecutando el siguiente comando:

```curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/integrator' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

------------

Recibirás una respuesta similar a la siguiente:

```json
{
  "id": 1234567890,
  "created_at": "0001-01-01T00:00:00Z",
  "updated_at": "0002-02-02T00:00:00Z",
  "notification_url_enabled": true,
  "event_channel_devices": [
    "email"
  ]
}
```

------------