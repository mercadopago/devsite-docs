# Configure suas notificações

Se desejar, você pode receber notificações Webhooks. Estas são enviadas de nossa API de Integrações para o seu sistema de recebimento por meio de uma chamada `HTTP POST` em relação às mudanças de status apresentadas por uma intenção de pagamento.

Para integrar notificações Webhook, siga as instruções [nesta documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks/webhooks).

> WARNING
>
> Importante
>
> O campo `notification_url` mencionado na documentação de notificações não é suportado pela API de Integrações.

## Exemplos de status de notificação

Depois de implementar as notificações e fazer os ajustes necessários, elas terão o seguinte formato:

#### Status Finished:

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

#### Status Canceled:

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

#### Status Error:

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


> PREV_STEP_CARD_PT
>
> Processar pagamentos
>
> Crie uma intenção de pagamento e atribua-a a um dispositivo Point.
>
> [Processar pagamentos](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/create-payment-intent)


> NEXT_STEP_CARD_PT
>
> Teste sua integração com segurança
>
> Use o Simulador Point para testar sua integração.
>
> [Simulador Point](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/point-simulator)

