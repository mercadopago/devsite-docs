# Configure suas notificações

Se desejar, você pode receber notificações Webhooks. Estas são enviadas de nossa API de Integrações para o seu sistema de recebimento por meio de uma chamada `HTTP POST` em relação às mudanças de status apresentadas por uma intenção de pagamento.

Siga as instruções [na documentação de notificações Webhook](/developers/pt/docs/mp-point/additional-content/your-integrations/notifications/webhooks) para integrá-las.

> WARNING
>
> Importante
>
> O campo `notification_url` mencionado na documentação de notificações não é suportado pela API de Integrações.

## Exemplos de status de notificação

Depois de implementar as notificações e fazer os ajustes necessários, elas terão o seguinte formato:

#### Status Finished
Status final de uma intenção de pagamento quando a transação termina.

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

#### Status Confirmation_required
Ocorre quando a intenção de pagamento concluiu sem receber um status de pagamento. Uma vez obtido, esse status não mudará. Ao recebê-lo, você deve confirmar em seu dispositivo qual é o status do pagamento, usando o `payment_id` recebido na resposta, antes de entregar seu produto ou serviço.

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

#### Status Canceled
Status final de uma intenção de pagamento quando ela é cancelada.

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

#### Status Error
Status final de uma intenção de pagamento quando ocorre um erro de transação.


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

## Notificações dos meus dispositivos point

Você pode receber notificações sobre eventos gerados por cada um de seus dispositivos point, desta forma você conseguirá
ter controle e monitoramento de seus dispositivos. Essas notificações podem ser causadas por:

- Terminal reinicia.
- Logouts.
- Mudança no modo de operação de PDV para STANDALONE ou vice-versa.

As notificações chegarão ao seu e-mail cadastrado no MercadoPago. Caso não encontre verifique sua pasta de SPAM.


> WARNING
>
> Importante
>
> Você receberá notificações de todos os dispositivos associados às suas credenciais de acesso (`Acess Token`).

Você pode ver um exemplo dessas notificações abaixo:

![Email notification](/images/point-api/email-notification-pt.png)


## Ativar notificações

Para ativar as notificações é necessário habilitar o canal de e-mail do integrador. Para faze-lo, você pode usar o
seguinte comando:

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
> As notificações estarão disponíveis 30 minutos após o processo de ativação.


## Verifique os canais ativados

Uma vez configurado o canal de notificação, você pode verificar seu status executando o seguinte comando:

```curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/integrator' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

------------

A resposta será semelhante a isso:

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