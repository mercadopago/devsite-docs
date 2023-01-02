# Configura tus notificaciones

Si quieres, puedes recibir notificaciones de Webhooks. Estas se envían desde nuestra API de Integraciones a tu sistema receptor mediante una llamada `HTTP POST` en relación a los cambios de estado que presente una intención de pago.

Para integrar las notificaciones Webhook, sigue las instrucciones de [esta documentación](/developers/es/guides/additional-content/notifications/webhooks/webhooks).

> WARNING
>
> Importante
>
> El campo `notification_url` mencionado en la documentación de notificaciones no es soportado por la API de integraciones.

## Ejemplos de estados de notificaciones

Una vez que hayas implementado las notificaciones y realizado los ajustes necesarios, estas tendrán el siguiente formato:

#### Estado Finished:

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

#### Estado Canceled:

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

#### Estado Error:

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

Puedes recibir notificaciones sobre eventos generados por cada uno de tus dispositivos point, de esta manera lograrás
tener control y seguimiento de tus dispositivos. Estas notificaciones pueden ser ocasionadas por:

- Reinicios de la terminal.
- Deslogueos.
- Cambio en el modo de operación de PDV a STANDALONE o viceversa.

Las notificaciones llegarán a tu correo electrónico registrado en MercadoPago, en caso de que no lo encuentres asegúrate
de revisar tu carpeta de SPAM.


> WARNING
>
> Importante
>
> Recibirás notificaciones de todos los dispositivos asociados a tus credenciales de acceso (access token).
Ejemplo de notificación.

![Email notification](/images/point-api/email-notification-es.png)

## Activar notificaciones

Para activar las notificaciones es necesario habilitar el canal de correo electrónico del integrador, puedes utilizar el
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

## Consultar canales habilitados

Una vez configurado el canal de notificación puedes consultar su estado ejecutando el siguiente comando:

```curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/integrator' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

------------

Ejemplo de respuesta:

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