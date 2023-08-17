# Criar e gerenciar intents em dispositivos Point

A seguir, você pode ver como criar um intent em dispositivos Point, como consultar seu status e como cancelá-lo, além de como configurar suas notificações.

## Criar intent em dispositivos Point

Para criar um intent em seu dispositivo Point, você tem duas opções:
* Você pode fazer uma chamada POST ao endpoint ----[mla]----[Criar intent para um dispositivo associado a uma caixa](/developers/pt/reference/instore_api_mla/_instore-api_integrationsintents_point_pos_external_id/post)------------ ----[mlb]----[Criar intent para um dispositivo associado a uma caixa](/developers/pt/reference/instore_api_mlb/_instore-api_integrationsintents_point_pos_external_id/post)------------, substituindo `external.id` pelo valor escolhido ao criar a caixa.
* Ou então, você pode fazer uma chamada POST ao endpoint ----[mla]----[Criar intent para um dispositivo PDV](/developers/pt/reference/instore_api_mla/_instore-api_integrationsintents_point_device_id/post)------------ ----[mlb]----[Criar intent para um dispositivo PDV](/developers/pt/reference/instore_api_mlb/_instore-api_integrationsintents_point_device_id/post)------------, substituindo `device.id` pelo valor obtido ao consultar a lista de dispositivos.

Você pode escolher a opção que melhor se adapta às suas necessidades. O resultado será o mesmo, e você terá criado um intent para o dispositivo Point escolhido.

----[mlb]----
> Tenha em mente que, para o campo `amount`, o valor mínimo permitido para dispositivos Point Pro 2 é 1,00, e o máximo é 70.000,00.

------------

----[mla]----
> Tenha em mente que, para o campo `amount`, o valor mínimo permitido para dispositivos POS e SMART é 5,00, e o máximo é 4.000.000,00.

------------

## Consultar o estado de um intent em dispositivos Point

Para conhecer o estado atual de um intent, faça uma chamada GET ao endpoint ----[mla]----[Obter informações de um intent](/developers/pt/reference/instore_api_mla/_instore-api_integrationsintents_intent_id_point/get)------------ ----[mlb]----[Obter informações de um intent](/developers/pt/reference/instore_api_mlb/_instore-api_integrationsintents_intent_id_point/get)------------, substituindo `intent_id` pelo valor obtido nesse campo ao criá-lo.

A seguir, mostramos um exemplo de resposta à consulta de um estado:

``` json
{
    "description": "description",
    "external_reference": "external_reference",
    "status": "CLOSED",
    "operations": [
        {
            "type": "PURCHASE",
            ....
            "results": [
                {
                    "id": 123456,
                    "source": "PAYMENT"
                }
            ]
            ...
        }
    ],
    "enabler_configuration": {
        "ticket_number": "Ticket001",
         "device_payment_mode": "CARD",
         "print_on_terminal": [
             "SELLER_TICKET"
         ]
     }
}
```

Dentro do campo `status`, você poderá ver o estado do intent. Os únicos estados finais são `CANCELED`, `CLOSED`, `EXPIRED`, `ERROR` e `CONFIRMATION_REQUIRED`.
Para obter mais informações sobre os estados possíveis de um intent, consulte o [Glossário](/developers/pt/docs/ecosistema-presencial/glossary).

Tenha em mente que, para o estado final `CLOSED`, você verá na resposta o nó adicional `results`. Este nó contém a informação do pagamento relacionada aos resultados da operação; ou seja, o listado de transações associadas a ela.

Este objeto se compõe da seguinte maneira:

| Valor | Descrição |
|---|---|
| `id` | É a identificação do pagamento. Com ela, você pode se dirigir à [Payments API](/developers/pt/reference/payments/_payments_id/get) e consultar o estado final do pagamento. |
| `source` | Entidade à qual pertence o `id`. Ele retornará o valor `PAYMENT` quando o fluxo do pagamento tiver sido criado corretamente. Acesse a [Payments API](/developers/pt/reference/payments/_payments_id/get) para verificar o estado final do pagamento com o `id` recebido. |

## Cancelar um intent em dispositivos Point

Se o pagamento ainda não foi realizado e o intent não foi carregado no dispositivo, você pode cancelar uma intenção de pagamento e fazer com que essa tentativa não esteja mais disponível para processamento. 
Realiza uma chamada DELETE ao endpoint ----[mla]----[Cancelar um intent](/developers/pt/reference/instore_api_mla/_instore-api_integrationsintents_intent_id_point/delete)------------ ----[mlb]----[Cancelar um intent](/developers/pt/reference/instore_api_mlb/_instore-api_integrationsintents_intent_id_point/delete)------------, reemplazando `external.id` e `intent_id` por los valores obtenidos al criar una caja e o intento de pagamento, respectivamente.

> WARNING
>
> Importante
>
> Tenha em conta que só é permitida a cancelação de um intent por este método se seu estado for `OPENED`. Caso este não seja o estado atual do intent que você está querendo cancelar e, em vez disso, seja `ON_TERMINAL`, você deverá fazê-lo a partir do dispositivo Point. Para mais informações sobre os possíveis estados de um intent, consulte o [Glossário](/developers/pt/docs/ecosistema-presencial/glossary).


## Configurar notificações

Recomendamos **configurar suas notificações de Webhook**. Isso facilitará o recebimento de informações em tempo real sempre que uma intenção atingir um estado final.

Para configurar suas notificações, siga as instruções fornecidas na [documentação de notificações de Webhooks](/developers/pt/docs/ecosistema-presencial/additional-content/your-integrations/notifications/webhooks).

> WARNING
>
> Importante
>
> Para configurar as notificações do Ecosistema Presencial, deve-se utilizar o evento **integrações presenciais**, cuja mensagem conterá o campo `type` com o valor `topic_instore_integration_wh`. Através deste evento você receberá notificações dos estados finais dos intents, sejam eles processados ​​por Point ou QR em modo integrado. 

Aqui está um exemplo de uma notificação que você pode receber para um dispositivo Point quando uma intenção atinge um `status` final. Observe que as informações relatadas no nó `data` dependerão das informações com as quais a intenção é criada.

----[mla]----
``` json
{
    "id": "1234567-12345-12345678-1234567890",
    "action": "topic_instore_integration_wh.application.authorized",
    "api_version": "v1",
    "data": {
        "enabler_configuration": {
            "ticket_number": "Ticket001",
            "device_payment_mode": "CARD",
            "print_on_terminal": [
                "SELLER_TICKET"
            ]
        },
        "external_reference": "123132342341",
        "description": "abc",
        "id": "1234567-12345-12345678-1234567890",
        "operations": [
            {
                "amount": "10.14",
                "type": "PURCHASE"
            }
        ],
        "status": "CANCELED",
        "url": "https://api.mercadopago.com/instore-api/integrations/v1/intents/1234567-12345-12345678-1234567890/point"
    },
    "date_created": "2023-07-27 20:24:21.776642198-0400",
    "live_mode": true,
    "type": "topic_instore_integration_wh",
    "user_id": 12345667
}

```
------------
----[mlb]----
``` json
{
    "id": "1234567-12345-12345678-1234567890",
    "action": "topic_instore_integration_wh.application.authorized",
    "api_version": "v1",
    "data": {
        "enabler_configuration": {
            "device_payment_mode": "CARD",
            "print_on_terminal": [
                "SELLER_TICKET"
            ]
        },
        "external_reference": "123132342341",
        "description": "abc",
        "id": "1234567-12345-12345678-1234567890",
        "operations": [
            {
                "amount": "10.14",
                "type": "PURCHASE"
            }
        ],
        "status": "CANCELED",
        "url": "https://api.mercadopago.com/instore-api/integrations/v1/intents/1234567-12345-12345678-1234567890/point"
    },
    "date_created": "2023-07-27 20:24:21.776642198-0400",
    "live_mode": true,
    "type": "topic_instore_integration_wh",
    "user_id": 12345667
}

```
------------

## Devolver um pagamento

Se, uma vez que o pagamento foi realizado, você precisar fazer uma devolução daquele dinheiro recebido, recomendamos [criar um reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post) fazendo uma chamada API POST.

Se você quiser fazer um reembolso manual, siga os passos abaixo: 
1. No seu dispositivo Point, pressione o botão **Menu**.
2. Vá para a opção "Últimos pagamentos" e selecione o pagamento que deseja devolver.
3. Pressione a opção "Devolver cobrança" e confirme essa devolução.
