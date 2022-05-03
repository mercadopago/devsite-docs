#  Comece a processar seus pagamentos

Para começar a processar seus pagamentos, siga estas etapas:

## Obtenha a lista de seus dispositivos disponíveis

Antes de criar uma intenção de pagamento, você deve obter os dispositivos Point associados à sua conta. Você pode fazer desta maneira:

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/devices' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```

Você receberá uma resposta como esta:

```json
{
  "id":"7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id":"INGENICO_MOVE2500__ING-ARG-14886780",
  "amount":1500,
  "description":"this is an example",
  "payment":{
     "type":"credit_card",
     "installments":1
  },
  "additional_info":{
     "external_reference":"4561ads-das4das4-das4754-das456",
     "print_on_terminal":true
  }
}
```
## Criar uma intenção de pagamento

Você pode criar uma intenção de pagamento e atribuí-la ao seu dispositivo Point desta forma:

----[mla]----
```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--data-raw '{
   "amount": 1500,
   "additional_info": {
       "external_reference": "4561ads-das4das4-das4754-das456",
       "print_on_terminal": true,
       "ticket_number": "S0392JED"
   }
}'
```

Campo | Descrição
:--- | :--- |
'amount'             | Valor total da intenção de pagamento. **Importante**: este campo não admite vírgulas decimais, então se deseja gerar uma intenção de pagamento deve-se considerar as duas casas decimais do valor em seu total. Por exemplo: para gerar o valor da ordem de pagamento "15,00" você deve inserir "1500". |
'external_reference' | Campo de uso exclusivo do integrador para incluir referências de seu sistema. |
'print_on_terminal'  | Campo que determina se o dispositivo imprime o comprovante de pagamento. |
'ticket_number'      | Número do bilhete da intenção de pagamento. |

Em resposta, você receberá algo semelhante a isso:

```json
{
 "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
 "device_id": "INGENICO_MOVE2500__ING-ARG-14886780",
 "amount": 1500,
 "additional_info": {
     "external_reference": "4561ads-das4das4-das4754-das456",
     "print_on_terminal": true,
     "ticket_number": "S0392JED"
 }
}
```
------------

----[mlb]----
```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--data-raw '{
   "amount": 1500,
   "description": “this is an example”,
   "payment": {
     "installments": 1,
     "type": “credit_card”
    },
   "additional_info": {
       "external_reference": "4561ads-das4das4-das4754-das456",
       "print_on_terminal": true
   }
}'
```
Campo | Descrição
:--- | :---
amount                    | Valor total da intenção de pagamento. |
description               | Descrição da intenção de pagamento. |
payment.type              | Tipo de método de pagamento. |
payment.installments      | Valor das parcelas de pagamento. |
payment.installments_cost | Custo das parcelas de pagamento. |
external_reference        | Campo de uso exclusivo do integrador para incluir referências de seu sistema. |
print_on_terminal         | Campo que determina se o dispositivo imprime o comprovante de pagamento. |

Em resposta, você receberá algo semelhante a isso:

```json
{
  "id":"7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id":"INGENICO_MOVE2500__ING-ARG-14886780",
  "amount":1500,
  "description":"this is an example",
  "payment":{
     "type":"credit_card",
     "installments":1
  },
  "additional_info":{
     "external_reference":"4561ads-das4das4-das4754-das456",
     "print_on_terminal":true
  }
}
```
------------

## Cancelar uma intenção de pagamento

Você pode cancelar uma intenção de pagamento atribuída a um dispositivo Point da seguinte forma:

``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents/:paymentIntentId' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```

Você receberá esta resposta:

``` json
{
 "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca"
}
```

## Processe sua intenção de pagamento

Uma vez que a intenção de pagamento é criada, você pode obtê-la de seu dispositivo Point pressionando a tecla verde do dispositivo e continuando
com as etapas mostradas na tela para concluir o pagamento.

## Verifique o status da sua intenção de pagamento

Você pode verificar o status atual de sua intenção de pagamento usando o `id` que você recebeu na resposta ao criar a intenção de pagamento.

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/:paymentIntentID' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

Exemplo de resposta:

----[mlb]----
``` json
{
  "state":"FINISHED",
  "id":"f8f50814-a8c5-4524-95b6-672958523121",
  "device_id":"GERTEC_MP35P__8701016695109435",
  "description":"this is an example",
  "amount":1500,
  "payment":{
     "type":"credit_card",
     "installments":1
  },
  "additional_info":{
     "external_reference":"4561ads-das4das4-das4754-das456",
     "print_on_terminal":true
  }
}
```
------------

----[mla]----

``` json
{
   "state": "FINISHED",
   "id": "0aa0519d-d985-4e83-b62d-dda123456789",
   "device_id": "88731317_INGENICO_MOVE2500_ING-ARG-14123456",
   "amount": 600,
   "payment": {
       "id": "11123456789"
   },
   "additional_info": {
       "ticket_number": "123456789123456789"
   }
}
```
------------

> NOTE
>
> Nota
>
> Consulte todas as informações correspondentes ao pagamento na seção [API de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) de Referência da API.


> PREV_STEP_CARD_PT
>
> Comece a integrar a API de integrações
>
> Para integrar, você deve primeiro obter as credenciais de identificação.
>
> [Integrar a API de integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/integration-api/integration)


> NEXT_STEP_CARD_PT
>
> Configure suas notificações
>
> Explicamos como começar a receber notificações Webhooks.
>
> [Configure suas notificações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/integration-api/notifications)


