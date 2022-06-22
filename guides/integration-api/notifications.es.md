# Configura tus notificaciones

Si quieres, puedes recibir notificaciones de Webhooks. Estas se envían desde nuestra API de Integraciones a tu sistema receptor mediante una llamada `HTTP POST` en relación a los cambios de estado que presente una intención de pago.

Para integrar las notificaciones Webhook, sigue las instrucciones de [esta documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks/webhooks).

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



> PREV_STEP_CARD_ES
>
> Procesar pagos
>
> Crea una intención de pago y asígnala a un dispositivo Point.
>
> [Procesar pagos](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/create-payment-intent)


> NEXT_STEP_CARD_ES
>
> Prueba tu integración de forma segura
>
> Utiliza el Simulador Point para probar tu integración.
>
> [Simulador Point](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/point-simulator)

