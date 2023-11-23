#  Processar pagamentos

Para começar a processar seus pagamentos com o ponto de venda (PDV), siga estas etapas:

## Obter lista de dispositivos disponíveis

Antes de criar uma intenção de pagamento, você deve [obter os dispositivos Point](/developers/pt/reference/integrations_api/_point_integration-api_devices/get) associados à sua conta. Você pode fazeê-lo através da seguinte chamada:

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/devices?offset=0&limit=50' \ 
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' 
```

Você receberá uma resposta como esta:


```json
{
    "devices": [
        {
            "id": "INGENICO_MOVE2500__ING-ARG-1123345670",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0101POS",
            "operating_mode": "PDV"
        },
        {
            "id": "INGENICO_MOVE2500__ING-ARG-0987654P",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0101POS",
            "operating_mode": "STANDALONE"
        },
        {
            "id": "INGENICO_MOVE2500__ING-5467853",
            "operating_mode": "PDV",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0101POS",
        },
        {
            "id": "INGENICO_MOVE2500__ING-ARG-1233456",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0101POS",
            "operating_mode": "STANDALONE"
        }
    ],
    "paging": {
        "total": 4,
        "limit": 50,
        "offset": 0
    }
}

```

## Criar intenção de pagamento

Uma intenção de pagamento é uma chamada que contém os detalhes da transação a ser realizada, e que deve ser criada para inciar um pagamento. Esta é uma tentativa que, se bem-sucedida, retornará um `id` do pagamento e seu `status`.

----[mla]----
Você pode [criar uma intenção de pagamento](/developers/pt/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents/post) e atribuí-la ao seu dispositivo Point desta forma:

```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
   "amount": 1500,
   "additional_info": {
       "external_reference": "4561ads-das4das4-das4754-das456",
       "print_on_terminal": true,
       "ticket_number": "S0392JED"
   }
}'
```

| Campo | Descrição |
|:---:|---|
| `amount` | Valor total da intenção de pagamento.  <br>**Valor mínimo permitido**: 500 (dispositivos POS y SMART). <br>**Valor máximo permitido**: 400000000 (ambos dispositivos). <br>**Importante**: este campo não admite vírgulas decimais, então se deseja gerar uma intenção de pagamento deve-se considerar as duas casas decimais do valor em seu total. Por exemplo: para gerar o valor da ordem de pagamento "15,00" você deve inserir "1500". |
| `external_reference` | Campo de uso exclusivo do integrador para incluir referências de seu sistema. |
| `print_on_terminal` | Campo que determina se o dispositivo imprime o comprovante de pagamento. |
| `ticket_number` | Número do bilhete da intenção de pagamento. |

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
Você pode [criar uma intenção de pagamento](/developers/pt/reference/integrations_api_paymentintent_mlb/_point_integration-api_devices_deviceid_payment-intents/post) e atribuí-la ao seu dispositivo Point desta forma:

```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
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

| Campo | Descrição |
|:---:|---|
| `amount` | Valor total da intenção de pagamento.  <br>**Valor mínimo permitido**: 100 (dispositivos POS y SMART). <br>**Valor máximo permitido**: 7000000 (ambos dispositivos). <br>**Importante**: este campo não admite vírgulas decimais, então se deseja gerar uma intenção de pagamento deve-se considerar as duas casas decimais do valor em seu total. Por exemplo: para gerar o valor da ordem de pagamento "15,00" você deve inserir "1500". |
| `description` | Descrição da intenção de pagamento. |
| `payment.type` | Tipo de método de pagamento. |
| `payment.installments` | Valor das parcelas de pagamento. |
| `payment.installments_cost` | Custo das parcelas de pagamento. Este campo determina quem assume o custo e os valores aceitos são seller e buyer |
| `external_reference` | Campo de uso exclusivo do integrador para incluir referências de seu sistema. |
| `print_on_terminal` | Campo que determina se o dispositivo imprime o comprovante de pagamento. |

Em resposta, você receberá algo semelhante a isso:

```json
{
  "id":"7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id":"INGENICO_MOVE2500__ING-ARG-14886780",
  "amount":1500,
  "description":"this is an example",
  "payment":{
     "type":"credit_card",
     "installments":1,
     "installments_cost":"seller"
  },
  "additional_info":{
     "external_reference":"4561ads-das4das4-das4754-das456",
     "print_on_terminal":true
  }
}
```
------------
----[mlm]----
Você pode [criar uma intenção de pagamento](/developers/pt/reference/point_apis_mlm/_point_integration-api_devices_deviceid_payment-intents/post) e atribuí-la ao seu dispositivo Point desta forma:
```curl

curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "amount": 1500,
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true
    }
}'
```

| Campo | Descrição |
|:---:|---|
| `amount` | Valor total da intenção de pagamento.  <br>**Valor mínimo permitido**: 500 (dispositivos SMART). <br>**Valor máximo permitido**: 35000000. <br>**Importante**: este campo não admite vírgulas decimais, então se deseja gerar uma intenção de pagamento deve-se considerar as duas casas decimais do valor em seu total. Por exemplo: para gerar o valor da ordem de pagamento "15,00" você deve inserir "1500". |
| `external_reference` | Campo de uso exclusivo do integrador para incluir referências de seu sistema. |
| `print_on_terminal` | Campo que determina se o dispositivo imprime o comprovante de pagamento. |

Em resposta, você receberá algo semelhante a isso:

[[[
```json

{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id": "PAX_A910__SMARTPOS123456789075",
  "amount": 1500,
  "additional_info": {
      "external_reference": "4561ads-das4das4-das4754-das456",
      "print_on_terminal": true
  }
}
```
]]]

------------

Tenha em mente que as intenções de pagamento são a base para o processamento de pagamentos com dispositivos Point. Por esse motivo, é importante que você registre e salve os dados obtidos durante sua criação, especialmente o `id`.

> NOTE
>
> Recomendação
>
> Você pode usar o [Simulador Point](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/point-simulator) para testar sua integração e a criação de intenções de pagamento com segurança.

## Processar intenção de pagamento

Uma vez que a intenção de pagamento é criada, você pode obtê-la de seu dispositivo Point pressionando a tecla para iniciar o pagamento (no caso de Point Plus e Point Pro 2 o **botão verde** e, no caso de Point Smart, o **botão digital “Charge now”**) e continuar com as etapas mostradas em tela para concluir o pagamento.

> WARNING
>
> Importante
>
> Recomendamos avaliar a [qualidade de sua integração](/developers/pt/docs/mp-point/how-tos/integration-quality) para verificar se você está cumprindo os padrões de qualidade e segurança do Mercado Pago que podem melhorar sua taxa de aprovação de pagamentos.

## Verificar status da intenção de pagamento

Se você deseja saber o status de uma intenção de pagamento específica, você pode ----[mla, mlb]----[verificar o status atual da sua intenção de pagamento](/developers/pt/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get)------------ ----[mlm]----[verificar o status atual da sua intenção de pagamento](/developers/pt/reference/point_apis_mlm/_point_integration-api_payment-intents_paymentintentid/get)------------ usando o `id` que você recebeu na resposta ao criá-la.

Lembre-se que o `id` e status da intenção de pagamento são diferentes do `id` e status do pagamento. Neste caso, trata-se de consultar os detalhes de uma tentativa. Você pode consultar todas as informações correspondentes ao pagamento na seção [API de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) de Referência da API.

> WARNING
>
> Importante
>
> O principal mecanismo recomendado para saber o resultado de uma intenção de pagamento é a assinatura de [notificações de integrações](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/notifications). Aconselhamos usar o endpoint aqui presente apenas como um mecanismo alternativo.

----[mlm]----

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' 
```
------------

----[mla, mlb]----

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```
------------

A resposta será semelhante a isso:

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
----[mlm]----

[[[
```json

{
    "state": "FINISHED",
    "id": "0aa0519d-d985-4e83-b62d-dda123456789",
    "device_id": "PAX_A910__SMARTPOS1234567890123",
    "amount": 600,
    "payment": {
        "id": "11123456789"
    },
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456"
    }
}
```
]]]

------------

> WARNING
>
> Importante
>
> O `confirmation_required` é um status final e não mudará depois de recebido. No caso de você obtê-lo como uma resposta da intenção de pagamento, deverá confirmar em seu dispositivo qual é o status de pagamento que corresponde ao `payment_id` recebido na resposta. Não entregue seu produto ou serviço até que você o verifique.

Você pode verificar os possíveis estados de uma intenção de pagamento acessando nosso [Glossário](/developers/pt/docs/mp-point/integration-api/glossary).


## Cancelar uma intenção de pagamento

Se desejar, você pode cancelar uma intenção de pagamento atribuída a um dispositivo Point. Para isso, você tem duas opções:

* Se o estado da intenção for `opened` e ainda não tiver sido enviada para o terminal, você pode [cancelá-la via API](/developers/pt/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents_paymentintentid/delete) fazendo a seguinte chamada:

``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents/{paymentintentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
```

Você receberá esta resposta:

``` json
{
 "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca"
}
```

* Se, por outro lado, o estado da intenção de pagamento for `on_terminal`, você deverá cancelá-la diretamente no dispositivo Point.