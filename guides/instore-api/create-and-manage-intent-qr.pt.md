# Criar e gerenciar intents para QR

A seguir, você pode ver como criar um intent para QR, como verificar seu status e como cancelá-lo, bem como como configurar suas notificações.

## Criar intent para QR

Para criar um intent usando QR, faça uma chamada POST para o endpoint ----[mla]----[Criar intent QR](/developers/pt/reference/instore_api_mla/_instore-api_integrationsintents_qr_pos_external_id/post)------------ ----[mlb]----[Criar intent QR](/developers/pt/reference/instore_api_mlb/_instore-api_integrationsintents_qr_pos_external_id/post)------------ substituindo `external.id` pelo valor com que a caixa foi criada.

Aqui está um exemplo de payload para criar um intent para QR:


``` json
{
        "description": "description",
        "external_reference": "external_reference",
        "sponsor": {
         "id": "1234567",
        },
        "operations": [
            {
                "type": "PURCHASE",
                "amount": "14.53",
                "items": [
                    {
                        "sku_number": "sku_number",
                        "external_categories": [
                            {
                                "id": "category_id"
                            }
                        ],
                        "title": "title",
                        "unit_price": "14.53",
                        "quantity": 1,
                        "unit_measure": "UNIT",
                        "total_amount": "14.53"
                    }
                ]
            }
        ],
        "enabler_configuration": {
            "qr_payment_mode": [
                "STATIC",
                "DYNAMIC"
            ]
        }
}
```

Tenha em mente que, se você enviar as informações necessárias para o campo `item` nesse tipo de operação, o campo `amount` não será necessário. Isso será calculado com base no `total_amount` de cada item. Da mesma forma, se você enviar o campo `amount`, não é necessário enviar informações correspondentes aos itens.


## Consultar o estado de um intent para QR

Para conhecer o estado atual de um intent, faça uma chamada GET ao endpoint ----[mla]----[Obter informações de um intent](/developers/pt/reference/instore_api_mla/_instore-api_integrationsintents_intent_id_qr/get)------------ ----[mlb]----[Obter informações de um intent](/developers/pt/reference/instore_api_mlb/_instore-api_integrationsintents_intent_id_qr/get)------------, substituindo `intent_id` pelo valor obtido nesse campo no momento da criação.

A seguir, apresentamos um exemplo de resposta para a consulta de um estado:

``` json
{
    "id": "12345-3245-123423-234235", 
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
            ],
            ...
        }
    ],
    "enabler_configuration": {
        "qr_payment_mode": [
            "STATIC",
            "DYNAMIC"
        ]
    }
}

```

Dentro do campo `status`, você poderá ver o estado do intent. Os únicos estados finais são `CANCELED`, `CLOSED` e `EXPIRED`. Para obter mais informações sobre os estados possíveis de um intent, consulte o [Glossário](/developers/pt/docs/instore-api/glossary).

Tenha em mente que, para o estado final `CLOSED`, você verá um nó adicional na resposta chamado `results`. Esse nó contém informações de pagamento relacionadas aos resultados da operação, ou seja, a lista de transações associadas a ela.

Este objeto é composto da seguinte forma:

| Valor | Descrição |
|---|---|
| `id` | É a identificação do pagamento. Com ela, você pode acessar a [Payments API](/developers/pt/reference/payments/_payments_id/get) e verificar o estado final do pagamento. |
| `source` | Entidade à qual o `id` pertence. Irá retornar o valor `PAYMENT` quando o fluxo de pagamento for criado corretamente. Acesse a [Payments API](/developers/pt/reference/payments/_payments_id/get) para verificar o estado final do pagamento com o `id` recebido. |



## Cancelar um intent para QR

Se o pagamento ainda não foi realizado, você pode cancelar um intent e torná-lo indisponível para processamento.

Faça uma chamada DELETE para o endpoint ----[mla]----[Cancelar um intent](/developers/pt/reference/instore_api_mla/_instore-api_integrationsintents_intent_id_qr/delete)------------ ----[mlb]----[Cancelar um intent](/developers/pt/reference/instore_api_mlb/_instore-api_integrationsintents_intent_id_qr/delete)------------, substituindo `external.id` e `intent_id` pelos valores obtidos ao criar uma caixa e a tentativa de pagamento, respectivamente.

## Configurar notificações

Além disso, recomendamos **configurar suas notificações de webhook**. Isso permitirá que você receba informações em tempo real sempre que um intent atingir um estado final.

Para configurar suas notificações, siga as instruções fornecidas na [documentação de webhooks de notificações](/developers/pt/docs//instore-api/additional-content/your-integrations/notifications/webhooks).

> WARNING
>
> Importante
>
> Para configurar as notificações do InStore API, você deve usar o evento **Integrações Presenciais**, cuja mensagem conterá o campo `type` com o valor `topic_instore_integration_wh`. Através deste evento, você receberá notificações de estados finais dos intents, sejam eles processados por Point ou QR em modo integrado.

A seguir, mostramos um exemplo de notificação que você pode receber para QR quando um intent atinge um estado (`status`) final.

----[mla]----

``` json
{
    "action": "topic_instore_integration_wh.application.authorized",
    "api_version": "v1",
    "data": {
        "enabler_configuration": {
            "qr_payment_mode": [
                "STATIC" ,"DYNAMIC" 
            ]
        },
        "qr": {
           "data":"qr-data"
        },
        "external_reference": "123132342341",
        "description": "abc",
        "id": "1234567-12345-12345678-1234567890",
        "operations": [
            {
                "amount": "10.14",
                "type": "PURCHASE",
                "items": [
                   {
                    "sku_number": "sku_number",
                    "external_categories": [
                        {
                            "id": "category_id"
                        }
                    ],
                    "title": "title",
                    "unit_price": "10.14",
                    "quantity": 1,
                    "unit_measure": "UNIT",
                    "total_amount": "10.14"
                }
              ]
            }        ],
        "status": "CANCELED",
        "url": "https://api.mercadopago.com/instore-api/integrations/v1/intents/1234567-12345-12345678-1234567890/qr"
    },
    "date_created": "2023-07-27 20:24:21.776642198-0400",
    "id": "1234567-12345-12345678-1234567890",
    "live_mode": true,
    "type": "topic_instore_integration_wh",
    "user_id": 123456678
}

```

------------
----[mlb]----

``` json
{
    "action": "topic_instore_integration_wh.application.authorized",
    "api_version": "v1",
    "data": {
        "enabler_configuration": {
            "qr_payment_mode": [
                "STATIC" ,"DYNAMIC" 
            ]
        },
        "qr": {
           "data":"qr-data"
        },

        "external_reference": "123132342341",
        "description": "abc",
        "id": "1234567-12345-12345678-1234567890",
        "operations": [
            {
                "amount": "10.14",
                "type": "PURCHASE",
                "items": [
                   {
                    "sku_number": "sku_number",
                    "external_categories": [
                        {
                            "id": "category_id"
                        }
                    ],
                    "title": "title",
                    "unit_price": "10.14",
                    "quantity": 1,
                    "unit_measure": "UNIT",
                    "total_amount": "10.14"
                }
              ]
            }        ],
        "status": "CANCELED",
        "url": "https://api.mercadopago.com/instore-api/integrations/v1/intents/1234567-12345-12345678-1234567890/qr"
    },
    "date_created": "2023-07-27 20:24:21.776642198-0400",
    "id": "1234567-12345-12345678-1234567890",
    "live_mode": true,
    "type": "topic_instore_integration_wh",
    "user_id": 12345667
}

```
------------

## Devolver um pagamento

Se, uma vez que o pagamento foi realizado, você precisar fazer uma devolução daquele dinheiro recebido, recomendamos [criar um reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post) fazendo uma chamada API POST.

Se você quiser fazer um reembolso manual, siga os passos abaixo: 
1. No aplicativo do Mercado Pago no seu celular, acesse a seção **Atividade**, localizada no canto inferior esquerdo.
2. Em seguida, selecione o pagamento que deseja devolver.
3. Clique na opção "Devolver cobrança" e confirme a devolução.