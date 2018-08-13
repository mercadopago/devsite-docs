# Documentação da API Split de Pagos

## Introdução
O objetivo deste documento é fornecer informações sobre os endpoints que permitirão oferecer a funcionalidade de divisão de pagamentos (Split de pagos) para clientes Mercado Pago.

Os tipos de clientes aos quais se destina são:
- Marketplaces com carrinho de compras onde há um pagador e vários coletores.
- Aplicações para marketplaces onde existe um pagador e um coletor, por exemplo tipo Uber com um driver.

Em ambos os casos, o marketplace retém uma parte do valor da venda como comissão.

O modo de agregador significa que cada comerciante no marketplace tem sua própria conta de Mercado de Pago.

## Mapa de Estados
Um Marketplace pode ser informado sobre as alterações no status de um Split se ele se inscrever no tópico "Split de pagos" em [Webhooks](https://www.mercadopago.com/mla/account/webhooks).

![Status map](/images/split-de-pagos-status-map.png)

## Idempotencia
Às vezes, problemas de conexão, quedas de serviço, etc. que poderiam interromper a comunicação ao enviar ou receber dados para criar um Split podem ocorrer.

Para garantir a criação do mesmo, você pode repetir o envio dos mesmos dados, mas é possível que o Split já tenha sido criado e, devido à interrupção, a resposta correta não tenha sido recebida, fazendo com que, ao realizar a nova tentativa, se crie um novo Split.

Para evitar duplicação, você pode enviar uma chave X-Idempotency-Key exclusiva no cabeçalho que identifica a criação de um único Split, não importa quantas vezes os mesmos dados sejam enviados.

Dessa forma, quando a nova tentativa é concluída, a mesma chave pode ser enviada para indicar que é o mesmo processo. Se o Split já foi criado, as informações são retornadas sem criar um novo.

```curl
curl -X POST \
     -H 'X-Idempotency-Key: faDF8323asd298' \
     -H 'accept: application/json' \
     -H 'content-type: application/json' \
     'https://api.mercadopago.com/v1/split_payments?access_token=ACCESS_TOKEN' \
     -d '{...}'
```

## Como obter permissões e dados do Merchant
O Marketplace que deseja integrar, deve solicitar permissões de seus Merchants para operar e fazer pagamentos em seu nome. Para fazer isso, você deve seguir os passos de [MercadoPago Connect](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/mercadopago-connect/).

Seguindo essas etapas, o marketplace pode obter o "access_token" com o qual você pode obter o "email" na [API de "Users"](https://developers.mercadolibre.com/en_us/usuarios-y-aplicaciones) do Mercado Livre e o "user_id" que deve ser usado como "collector_id" em cada "disbursement" que você deseja criar no Split. É importante salvar o user_id e o e-mail do merchant para identificar o proprietário da conta Mercado Pago, caso seja necessário.

## Criando um Split
Os Splits são entidades que têm 1 pagamentos de entrada e vários de saída. O payer pode fazer o pagamento com diversos métodos de pagamento (cartão de crédito, boletos, etc.). Cada método tem seus campos obrigatórios, por exemplo, para pagar com cartões de crédito deve gerar um card token como indicado na [documentação](https://www.mercadopago.com.ar/developers/es/guias/pagamentos/api/recebimento de pagamento-por-card/) Mercado Pago.

Deve-se ter em mente que todos os merchants especificados em cada "disbursement" devem ser associados com o marketplace pelo [MercadoPago Connect](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/MercadoPago-connect/) (cada Merchant deve dar permissão explícita para o marketplace). Caso contrário, você não pode criar o Split.

O parâmetro "access_token" da URL deve ser o access token obtido pelo marketplace, como indicado pela [documentação](https://developers.mercadolibre.com/es_ar/autenticacion-y-autorizacion) pública.

### Request
```curl
curl -X POST \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/split_payments?access_token=M_ACCESS_TOKEN'
    -d '
        {
            "marketplace": "MktSplitterMLB-TEST",
            "payments": [
                {
                "payment_method_id": "visa",
                "payment_type_id": "credit_card",
                "token": "f461ab1341a7e308c906aa767bce1a00",
                "date_of_expiration": "2018-06-22T21:52:49.000-04:00",
                "transaction_amount": 500.12,
                "installments": 1,
                "processing_mode": "aggregator",
                "description": "Service charge",
                "capture": true,
                "external_reference": "externalRef123",
                "statement_descriptor": "WWW.MktSplitterMLBTEST.COM.BR"
                }
            ],
            "disbursements": [
                {
                "amount": 200.12,
                "external_reference": "",
                "collector_id": 328310637,
                "application_fee": 20.0,
                "money_release_days": 3,
                "additional_info": {
                    "items": [
                    {
                        "id": "item-ID-1234",
                        "title": "Title of what you are paying for",
                        "picture_url": "https://www.mercadopago.com/logomp3.gif",
                        "description": "Item description",
                        "category_id": "art",
                        "quantity": 1,
                        "unit_price": 100
                    }
                    ],
                    "shipments": {
                    "receiver_address": {
                        "zip_code": "5700",
                        "street_name": "Street",
                        "street_number": 123,
                        "floor": 4,
                        "apartment": "C"
                    }
                    }
                }
                },
                {
                "amount": 300,
                "external_reference": "",
                "collector_id": 328310458,
                "application_fee": 30.0,
                "money_release_days": 3,
                "additional_info": {
                    "items": [
                    {
                        "id": "item-ID-1234",
                        "title": "Title of what you are paying for",
                        "picture_url": "https://www.mercadopago.com/logomp3.gif",
                        "description": "Item description",
                        "category_id": "art",
                        "quantity": 1,
                        "unit_price": 100
                    }
                    ],
                    "shipments": {
                    "receiver_address": {
                        "zip_code": "5700",
                        "street_name": "Street",
                        "street_number": 123,
                        "floor": 4,
                        "apartment": "C"
                    }
                    }
                }
                }
            ],
            "payer": {
                "id": 41234,
                "email": "test_user_p@testuser.com",
                "first_name": "Amanda",
                "last_name": "Martins",
                "address": {
                "zip_code": "X5000",
                "street_name": "Calle",
                "street_numer": "120"
                },
                "identification": {
                "type": "CPF",
                "number": "33672209"
                }
            },
            "external_reference": "externalSplitter",
            "description": "",
            "binary_mode": false,
            "metadata": {},
            "additional_info": {
                "items": [
                {
                    "id": "item-ID-1234",
                    "title": "Title of what you are paying for",
                    "picture_url": "https://www.mercadopago.com/logomp3.gif",
                    "description": "Item description",
                    "category_id": "art",
                    "quantity": 1,
                    "unit_price": 100
                }
                ],
                "shipments": {
                "receiver_address": {
                    "zip_code": "5700",
                    "street_name": "Street",
                    "street_number": 123,
                    "floor": 4,
                    "apartment": "C"
                }
                }
            }
            }'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
  "marketplace": "MktSplitterMLB-TEST",
  "payments": [
    {
      "id": 3870106238,
      "payment_type_id": "credit_card",
      "payment_method_id": "visa",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 500.12,
      "installments": 1,
      "processing_mode": "aggregator",
      "description": "Service charge",
      "capture": true,
      "external_reference": "externalRef123",
      "statement_descriptor": "WWW.MktSplitterMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "",
      "collector_id": 328310637,
      "application_fee": 20,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    },
    {
      "id": 3870106343,
      "amount": 300,
      "external_reference": "",
      "collector_id": 328310458,
      "application_fee": 30,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    }
  ],
  "payer": {
    "id": 65476879,
    "email": "test_user_p@testuser.com",
    "first_name": "Amanda",
    "last_name": "Martins",
    "address": {
      "zip_code": "X5000",
      "street_name": "Calle",
      "street_numer": "120"
    },
    "identification": {
      "type": "DNI",
      "number": "33672209"
    }
  },
  "external_reference": "externalSplitter",
  "description": "",
  "binary_mode": false,
  "date_created": "2018-06-27T09:34:20.518-04:00",
  "date_last_updated": "2018-06-27T09:34:20.518-04:00",
  "metadata": {},
  "additional_info": {
    "items": [
      {
        "id": "item-ID-1234",
        "title": "Title of what you are paying for",
        "picture_url": "https://www.mercadopago.com/logomp3.gif",
        "description": "Item description",
        "category_id": "art",
        "quantity": 1,
        "unit_price": 100
      }
    ],
    "shipments": {
      "receiver_address": {
        "zip_code": "5700",
        "street_name": "Street",
        "street_number": 123,
        "floor": 4,
        "apartment": "C"
      }
    }
  },
  "application_id": 4422991580014613
}
```

## Obter um Split de pagamento
Retorna o Split em seu estado atual salvo no banco de dados. Tenha em mente que processos assíncronos que podem alterar o estado de um Split são executados.

Um Marketplace só pode obter seus próprios Splits criados. Os merchants podem visualizar seus pagamentos ou "disbursements" por meio do [SEARCH](https://api.mercadopago.com/v1/payments/search) de pagamentos.~~~~

### Request
```curl
curl -X GET \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/split_payments/:SPLITTER_ID?access_token=M_ACCESS_TOKEN'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
  "marketplace": "MktSplitterMLB-TEST",
  "payments": [
    {
      "id": 3870106238,
      "payment_type_id": "credit_card",
      "payment_method_id": "visa",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 500.12,
      "installments": 1,
      "processing_mode": "aggregator",
      "description": "Service charge",
      "capture": true,
      "external_reference": "externalRef123",
      "statement_descriptor": "WWW.MktSplitterMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "",
      "collector_id": 328310637,
      "application_fee": 20,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    },
    {
      "id": 3870106343,
      "amount": 300,
      "external_reference": "",
      "collector_id": 328310458,
      "application_fee": 30,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com",
    "first_name": "Amanda",
    "last_name": "Martins",
    "address": {
      "zip_code": "X5000",
      "street_name": "Calle",
      "street_numer": "120"
    },
    "identification": {
      "type": "DNI",
      "number": "33672209"
    }
  },
  "external_reference": "externalSplitter",
  "description": "",
  "binary_mode": false,
  "date_created": "2018-06-27T09:34:20.518-04:00",
  "date_last_updated": "2018-06-27T09:34:20.518-04:00",
  "metadata": {},
  "additional_info": {
    "items": [
      {
        "id": "item-ID-1234",
        "title": "Title of what you are paying for",
        "picture_url": "https://www.mercadopago.com/logomp3.gif",
        "description": "Item description",
        "category_id": "art",
        "quantity": 1,
        "unit_price": 100
      }
    ],
    "shipments": {
      "receiver_address": {
        "zip_code": "5700",
        "street_name": "Street",
        "street_number": 123,
        "floor": 4,
        "apartment": "C"
      }
    }
  },
  "application_id": 4422991580014613
}
```

## Reembolso total do Split
O Split pode ser reembolsado de forma total ou algum pagamento de saída individual pode ser reembolsado. Se todo o Split for reembolsado, ele estará no estado "refunded". No caso de um reembolso parcial, o Splitt permanecerá no estado "partially_refunded".

Tenha em mente que esse processo não é imediato. Quando o reembolso é solicitado, um processo assíncrono é acionado para reembolsar todos os pagamentos gerados. A mudança de status do Split será relatada por meio de Webhooks.

### Request

```curl
curl -X POST \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/split_payments/:SPLITTER_ID/refunds?access_token=M_ACCESS_TOKEN'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
  "marketplace": "MktSplitterMLB-TEST",
  "payments": [
    {
      "id": 3870106238,
      "payment_type_id": "credit_card",
      "payment_method_id": "visa",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 500.12,
      "installments": 1,
      "processing_mode": "aggregator",
      "description": "Service charge",
      "capture": true,
      "external_reference": "externalRef123",
      "statement_descriptor": "WWW.MktSplitterMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "",
      "collector_id": 328310637,
      "application_fee": 20,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    },
    {
      "id": 3870106343,
      "amount": 300,
      "external_reference": "",
      "collector_id": 328310458,
      "application_fee": 30,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com",
    "first_name": "Amanda",
    "last_name": "Martins",
    "address": {
      "zip_code": "X5000",
      "street_name": "Calle",
      "street_numer": "120"
    },
    "identification": {
      "type": "DNI",
      "number": "33672209"
    }
  },
  "external_reference": "externalSplitter",
  "description": "",
  "binary_mode": false,
  "notification_url": "",
  "callback_url": "",
  "date_created": "2018-06-27T09:34:20.518-04:00",
  "date_last_updated": "2018-06-27T09:34:20.518-04:00",
  "metadata": {},
  "additional_info": {
    "items": [
      {
        "id": "item-ID-1234",
        "title": "Title of what you are paying for",
        "picture_url": "https://www.mercadopago.com/logomp3.gif",
        "description": "Item description",
        "category_id": "art",
        "quantity": 1,
        "unit_price": 100
      }
    ],
    "shipments": {
      "receiver_address": {
        "zip_code": "5700",
        "street_name": "Street",
        "street_number": 123,
        "floor": 4,
        "apartment": "C"
      }
    }
  },
  "application_id": 4422991580014613
}
```
## Reembolso parcial de um Split
O reembolso parcial do Split pode ser feito especificando o ID de pagamento de saída na URL.

### Request
```curl
curl -X POST \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/split_payments/:SPLITTER_ID/disbursements/:DISBURSEMENT_ID/refunds?access_token=M_ACCESS_TOKEN'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
  "marketplace": "MktSplitterMLB-TEST",
  "payments": [
    {
      "id": 3870106238,
      "payment_type_id": "credit_card",
      "payment_method_id": "visa",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 500.12,
      "installments": 1,
      "processing_mode": "aggregator",
      "description": "Service charge",
      "capture": true,
      "external_reference": "externalRef123",
      "statement_descriptor": "WWW.MktSplitterMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "",
      "collector_id": 328310637,
      "application_fee": 20,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    },
    {
      "id": 3870106343,
      "amount": 300,
      "external_reference": "",
      "collector_id": 328310458,
      "application_fee": 30,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com",
    "first_name": "Amanda",
    "last_name": "Martins",
    "address": {
      "zip_code": "X5000",
      "street_name": "Calle",
      "street_numer": "120"
    },
    "identification": {
      "type": "DNI",
      "number": "33672209"
    }
  },
  "external_reference": "externalSplitter",
  "description": "",
  "binary_mode": false,
  "notification_url": "",
  "callback_url": "",
  "date_created": "2018-06-27T09:34:20.518-04:00",
  "date_last_updated": "2018-06-27T09:34:20.518-04:00",
  "metadata": {},
  "additional_info": {
    "items": [
      {
        "id": "item-ID-1234",
        "title": "Title of what you are paying for",
        "picture_url": "https://www.mercadopago.com/logomp3.gif",
        "description": "Item description",
        "category_id": "art",
        "quantity": 1,
        "unit_price": 100
      }
    ],
    "shipments": {
      "receiver_address": {
        "zip_code": "5700",
        "street_name": "Street",
        "street_number": 123,
        "floor": 4,
        "apartment": "C"
      }
    }
  },
  "application_id": 4422991580014613
}
```

## Cancelar um Split
Você pode cancelar um Split que esteja no estado "pending". Esses casos podem ser dados para pagamentos de entrada com ticket ou qualquer pagamento por cartão de crédito que tenha entrado no fluxo de revisão manual (status_detail = pending_manual_review).

### Request

```curl
curl -X PUT \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/split_payments/:SPLITTER_ID?access_token=M_ACCESS_TOKEN'
    -d '{
          "status": "cancelled"
        }'
```

### Response
```json
{
  "id": 20457853,
  "status": "approved",
  "marketplace": "MktSplitterMLB-TEST",
  "payments": [
    {
      "id": 3870083738,
      "payment_type_id": "ticket",
      "payment_method_id": "bolbradesco",
      "transaction_amount": 200.12,
      "installments": 1,
      "processing_mode": "aggregator",
      "description": "Service charge",
      "capture": true,
      "external_reference": "externalRef123",
      "statement_descriptor": "WWW.MktSplitterMLBTEST.COM.BR",
      "date_of_expiration": "2018-06-22T21:52:49.000-04:00"
    }
  ],
  "disbursements": [
    {
      "amount": 200.12,
      "external_reference": "",
      "collector_id": 328310637,
      "application_fee": 20,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    }
  ],
  "payer": {
    "email": "test_user_95954322@testuser.com",
    "first_name": "Test Name",
    "last_name": "Test Last Name",
    "address": {
      "zip_code": "X5000",
      "street_name": "Calle",
      "street_numer": "120"
    },
    "identification": {
      "type": "CPF",
      "number": "92415337145"
    }
  },
  "external_reference": "externalRef123",
  "description": "",
  "binary_mode": false,
  "date_created": "2018-06-27T09:07:36.556-04:00",
  "date_last_updated": "2018-06-27T09:34:20.518-04:00",
  "metadata": {},
  "additional_info": {
    "items": [
      {
        "id": "item-ID-1234",
        "title": "Title of what you are paying for",
        "picture_url": "https://www.mercadopago.com/logomp3.gif",
        "description": "Item description",
        "category_id": "art",
        "quantity": 1,
        "unit_price": 100
      }
    ],
    "shipments": {
      "receiver_address": {
        "zip_code": "5700",
        "street_name": "Street",
        "street_number": 123,
        "floor": 4,
        "apartment": "C"
      }
    }
  },
  "application_id": 4422991580014613
}
```

## Capturar um Split
A API Split de pagos permite pagamentos do tipo "reserva/autorização". Para esses casos, você deve criar um Split com o campo "capture" em FALSE, que reservará o valor até que seja capturado com o próximo endpoint.

### Request

```curl
curl -X PUT \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/split_payments/:SPLITTER_ID?access_token=M_ACCESS_TOKEN'
    -d '{
          "capture": true
        }'
```

### Response
```json
{
  "id": 20458724,
  "status": "pending",
  "marketplace": "MktSplitterMLB-TEST",
  "payments": [
    {
      "id": 3870106238,
      "payment_type_id": "credit_card",
      "payment_method_id": "visa",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 500.12,
      "installments": 1,
      "processing_mode": "aggregator",
      "description": "Service charge",
      "capture": true,
      "external_reference": "externalRef123",
      "statement_descriptor": "WWW.MktSplitterMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "",
      "collector_id": 328310637,
      "application_fee": 20,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    },
    {
      "id": 3870106343,
      "amount": 300,
      "external_reference": "",
      "collector_id": 328310458,
      "application_fee": 30,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com",
    "first_name": "Amanda",
    "last_name": "Martins",
    "address": {
      "zip_code": "X5000",
      "street_name": "Calle",
      "street_numer": "120"
    },
    "identification": {
      "type": "DNI",
      "number": "33672209"
    }
  },
  "external_reference": "externalSplitter",
  "description": "",
  "binary_mode": false,
  "date_created": "2018-06-27T09:34:20.518-04:00",
  "date_last_updated": "2018-06-27T09:34:20.518-04:00",
  "metadata": {
    
  },
  "additional_info": {
    "items": [
      {
        "id": "item-ID-1234",
        "title": "Title of what you are paying for",
        "picture_url": "https://www.mercadopago.com/logomp3.gif",
        "description": "Item description",
        "category_id": "art",
        "quantity": 1,
        "unit_price": 100
      }
    ],
    "shipments": {
      "receiver_address": {
        "zip_code": "5700",
        "street_name": "Street",
        "street_number": 123,
        "floor": 4,
        "apartment": "C"
      }
    }
  },
  "application_id": 4422991580014613
}
```

## Alterar a data de liberação de todos os pagamentos de saída
Podemos alterar a data de liberação de todos os pagamentos de saída, inserindo a nova data no campo "money_release_date". Essa data deve estar dentro do intervalo de releases definidos pelo marketplace.

### Request

```curl
curl -X POST \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/split_payments/:SPLITTER_ID/disburses?access_token=M_ACCESS_TOKEN'
    -d '{
          "money_release_date": "2018-07-10T10:23:18.000-04:00"
        }'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
  "marketplace": "MktSplitterMLB-TEST",
  "payments": [
    {
      "id": 3870106238,
      "payment_type_id": "credit_card",
      "payment_method_id": "visa",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 500.12,
      "installments": 1,
      "processing_mode": "aggregator",
      "description": "Service charge",
      "capture": true,
      "external_reference": "externalRef123",
      "statement_descriptor": "WWW.MktSplitterMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "",
      "collector_id": 328310637,
      "application_fee": 20,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    },
    {
      "id": 3870106343,
      "amount": 300,
      "external_reference": "",
      "collector_id": 328310458,
      "application_fee": 30,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com",
    "first_name": "Amanda",
    "last_name": "Martins",
    "address": {
      "zip_code": "X5000",
      "street_name": "Calle",
      "street_numer": "120"
    },
    "identification": {
      "type": "DNI",
      "number": "33672209"
    }
  },
  "external_reference": "externalSplitter",
  "description": "",
  "binary_mode": false,
  "date_created": "2018-06-27T09:34:20.518-04:00",
  "date_last_updated": "2018-06-27T09:34:20.518-04:00",
  "metadata": {},
  "additional_info": {
    "items": [
      {
        "id": "item-ID-1234",
        "title": "Title of what you are paying for",
        "picture_url": "https://www.mercadopago.com/logomp3.gif",
        "description": "Item description",
        "category_id": "art",
        "quantity": 1,
        "unit_price": 100
      }
    ],
    "shipments": {
      "receiver_address": {
        "zip_code": "5700",
        "street_name": "Street",
        "street_number": 123,
        "floor": 4,
        "apartment": "C"
      }
    }
  },
  "application_id": 4422991580014613
}
```

## Alterar a data de liberação de um determinado pagamento de saída
Podemos alterar a data de liberação de um pagamento de saída, passando o campo "disbursement_id", o código de pagamento e a nova data no campo "money_release_date". Essa data deve estar dentro do intervalo de releases definidos pelo marketplace.

### Request

```curl
curl -X POST \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/split_payments/:SPLITTER_ID/disbursements/:DISBURSEMENT_ID/disburses?access_token=M_ACCESS_TOKEN'
    -d '{
          "money_release_date": "2018-07-10T10:23:18.000-04:00"
        }'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
  "marketplace": "MktSplitterMLB-TEST",
  "payments": [
    {
      "id": 3870106238,
      "payment_type_id": "credit_card",
      "payment_method_id": "visa",
      "token": "f461ab1341a7e308c906aa767bce1a00",
      "transaction_amount": 500.12,
      "installments": 1,
      "processing_mode": "aggregator",
      "description": "Service charge",
      "capture": true,
      "external_reference": "externalRef123",
      "statement_descriptor": "WWW.MktSplitterMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "",
      "collector_id": 328310637,
      "application_fee": 20,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    },
    {
      "id": 3870106343,
      "amount": 300,
      "external_reference": "",
      "collector_id": 328310458,
      "application_fee": 30,
      "money_release_days": 3,
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      }
    }
  ],
  "payer": {
    "email": "test_user_p@testuser.com",
    "first_name": "Amanda",
    "last_name": "Martins",
    "address": {
      "zip_code": "X5000",
      "street_name": "Calle",
      "street_numer": "120"
    },
    "identification": {
      "type": "DNI",
      "number": "33672209"
    }
  },
  "external_reference": "externalSplitter",
  "description": "",
  "binary_mode": false,
  "date_created": "2018-06-27T09:34:20.518-04:00",
  "date_last_updated": "2018-06-27T09:34:20.518-04:00",
  "metadata": {},
  "additional_info": {
    "items": [
      {
        "id": "item-ID-1234",
        "title": "Title of what you are paying for",
        "picture_url": "https://www.mercadopago.com/logomp3.gif",
        "description": "Item description",
        "category_id": "art",
        "quantity": 1,
        "unit_price": 100
      }
    ],
    "shipments": {
      "receiver_address": {
        "zip_code": "5700",
        "street_name": "Street",
        "street_number": 123,
        "floor": 4,
        "apartment": "C"
      }
    }
  },
  "application_id": 4422991580014613
}
```
#### Definición de campos
Nome                              |Descrição                                                                                                                         |Tipo   |
----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-------|
id                                |ID do Splitter.                                                                                                                   |Long   |
status                            |Estado do Splitter ("pending", "approved", "rejected", "cancelled", "refunded", "partially_refunded").                            |String |
marketplace                       |Nome do Marketplace.                                                                                                              |String |
payments                          |Lista de pagamentos de entrada realizados pelo Payer.                                                                             |Array  |
payments.id                       |ID do pagamento do Payer.                                                                                                         |Long   |
payments.payment_type_id          |Meio de pagamento.                                                                                                                |String |
payments.payment_method_id        |Método de pagamento ("ticket", "credit_card").                                                                                    |String |
payments.token                    |ID do token do cartão de crédito.                                                                                                 |String |
payments.date_of_expiration       |Data de vencimento para o caso de método de pagamento “ticket” (a data deve ser menor que 29 dias).                               |String |
payments.transaction_amount       |Total da compra.                                                                                                                  |Float  |
payments.installments             |Parcelas.                                                                                                                         |Int    |
payments.processing_mode          |Modo de procesar os pagamentos (pode ser aggregator ou gateway). Atualmente só se suporta aggregator.                             |String |
payments.description              |Descrição do pagamento.                                                                                                           |String |
payments.capture                  |Flag que indica se se trata de um pagamento de autorização e captura.                                                             |Boolean|
payments.external_reference       |Referência do cliente.                                                                                                            |String |
payments.statement_descriptor     |Descrição da transação que aparecerá na fatura do cartão para o caso de “gateway”.                                                |String |
disbursements                     |Lista de pagamentos de saída. Deve ser um pagamento para cada Merchant associado na transação.                                    |Array  |
disbursements.id                  |ID do pagamento do Merchant.                                                                                                      |Long   |
disbursements.amount              |Valor do pagamento para o Merchant.                                                                                               |Float  |
disbursements.external_reference  |Referência do cliente.                                                                                                            |String |
disbursements.collector_id        |ID da conta de MP do Merchant.                                                                                                    |Long   |
disbursements.application_fee     |Total de comissão do Marketplace.                                                                                                 |Float  |
disbursements.money_release_days  |Quantidade de dias (à partir da data de aprovação do pagamento) em que se vai liberar o pagamento do Merchant.                    |String |
disbursements.additional_info     |Informação adicional dos itens, envios, etc. da transação.                                                                        |Object |
additional_info.items             |Lista de itens comprados.                                                                                                         |Array  |
items.id                          |ID do item.                                                                                                                       |String |
items.title                       |Título do item                                                                                                                    |String |
items.picture_url                 |URL da imagem do item.                                                                                                            |String |
items.description                 |Descrição do item.                                                                                                                |String |
items.category_id                 |Categoria à qual pertence o item segundo a [API de Categorias](https://api.mercadopago.com/item_categories) do Mercado Livre.     |String |
items.quantity                    |Quantidade de produtos comprados do item.                                                                                         |Int    |
items.unit_price                  |Preço da unidade.                                                                                                                 |Float  |
additional_info.shipments         |Data de envio dos itens.                                                                                                          |Object |
shipments.receiver_address        |Dados do endereço de entrega dos itens.                                                                                           |Object |
receiver_address.zip_code         |Código postal.                                                                                                                    |String |
receiver_address.street_name      |Nome da rua do endereço de envio.                                                                                                 |String |
receiver_address.street_number    |Número da rua do endereço de envio.                                                                                               |Int    |
receiver_address.floor            |Número do andar do apartamento.                                                                                                   |Int    |
receiver_address.apartment        |Apartamento.                                                                                                                      |String |
payer                             |Dados do pagador.                                                                                                                 |Object |
payer.id                          |ID da conta do MP do payer (requerido apenas para o payment_method_id = account_money).                                           |Long   |
payer.email                       |Email do Payer.                                                                                                                   |String |
payer.first_name                  |Nome do Payer.                                                                                                                    |String |
payer.last_name                   |Sobrenome do Payer.                                                                                                               |String |
payer.address                     |Dados do endereço do Payer.                                                                                                       |Object |
address.zip_code                  |Código postal.                                                                                                                    |String |
address.street_name               |Nome da rua.                                                                                                                      |String |
address.street_number             |Número da rua.                                                                                                                    |String |
payer.identification              |Dados de identificação do Payer.                                                                                                  |Object |
identification.type               |Tipo de identificação do Payer.                                                                                                   |String |
identification.number             |Número de identificação do Payer.                                                                                                 |String |
external_reference                |Referência do cliente.                                                                                                            |String |
description                       |Descrição do pagamento.                                                                                                           |String |
binary_mode                       |Flag que indica o modo de processamento do Split. Por enquanto, somente se suporta false.                                         |Boolean|
date_created                      |Data de criação do Split.                                                                                                         |String |
date_last_updated                 |Data da última modificação do Split.                                                                                              |String |
metadata                          |                                                                                                                                  |object |
application_id                    |ID do Marketplace.                                                                                                                |Long   |

## Procurar por um Split
Você pode procurar por Splits por vários filtros, além de poder definir um "limit" e "offset" para manipular a paginação.

Um marketplace só pode procurar seus próprios Splits.

Os merchants podem ver seus pagamentos na API de pesquisa pública do Payments com o código de pagamento de saída.

### Request

```curl
curl -X GET \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/split_payments/search?access_token=M_ACCESS_TOKEN&limit=10&offset=0'
```

### Response
```json
{
  "paging": {
    "total": 1,
    "limit": 1,
    "offset": 0
  },
  "results": [
    {
      "id": 20458724,
      "status": "approved",
      "marketplace": "MktSplitterMLB-TEST",
      "payments": [
        {
          "id": 3870106238,
          "payment_type_id": "credit_card",
          "payment_method_id": "visa",
          "token": "f461ab1341a7e308c906aa767bce1a00",
          "transaction_amount": 500.12,
          "installments": 1,
          "processing_mode": "aggregator",
          "description": "Service charge",
          "capture": true,
          "external_reference": "externalRef123",
          "statement_descriptor": "WWW.MktSplitterMLBTEST.COM.BR"
        }
      ],
      "disbursements": [
        {
          "id": 3870106325,
          "amount": 200.12,
          "external_reference": "",
          "collector_id": 328310637,
          "application_fee": 20,
          "money_release_days": 3,
          "additional_info": {
            "items": [
              {
                "id": "item-ID-1234",
                "title": "Title of what you are paying for",
                "picture_url": "https://www.mercadopago.com/logomp3.gif",
                "description": "Item description",
                "category_id": "art",
                "quantity": 1,
                "unit_price": 100
              }
            ],
            "shipments": {
              "receiver_address": {
                "zip_code": "5700",
                "street_name": "Street",
                "street_number": 123,
                "floor": 4,
                "apartment": "C"
              }
            }
          }
        },
        {
          "id": 3870106343,
          "amount": 300,
          "external_reference": "",
          "collector_id": 328310458,
          "application_fee": 30,
          "money_release_days": 3,
          "additional_info": {
            "items": [
              {
                "id": "item-ID-1234",
                "title": "Title of what you are paying for",
                "picture_url": "https://www.mercadopago.com/logomp3.gif",
                "description": "Item description",
                "category_id": "art",
                "quantity": 1,
                "unit_price": 100
              }
            ],
            "shipments": {
              "receiver_address": {
                "zip_code": "5700",
                "street_name": "Street",
                "street_number": 123,
                "floor": 4,
                "apartment": "C"
              }
            }
          }
        }
      ],
      "payer": {
        "email": "test_user_p@testuser.com",
        "first_name": "Amanda",
        "last_name": "Martins",
    "address": {
      "zip_code": "X5000",
      "street_name": "Calle",
      "street_numer": "120"
    },
        "identification": {
          "type": "DNI",
          "number": "33672209"
        }
      },
      "external_reference": "externalSplitter",
      "description": "",
      "binary_mode": false,
      "date_created": "2018-06-27T09:34:20.518-04:00",
      "date_last_updated": "2018-06-27T09:34:20.518-04:00",
      "metadata": {},
      "additional_info": {
        "items": [
          {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for",
            "picture_url": "https://www.mercadopago.com/logomp3.gif",
            "description": "Item description",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 100
          }
        ],
        "shipments": {
          "receiver_address": {
            "zip_code": "5700",
            "street_name": "Street",
            "street_number": 123,
            "floor": 4,
            "apartment": "C"
          }
        }
      },
      "application_id": 4422991580014613
    }
  ]
}
```

#### Definição dos campos
Nome         |Descrição                                                    |Tipo  |
-------------|-------------------------------------------------------------|------|
paging       |Dados da paginação.                                          |Object|
paging.total |Total de resultados.                                         |Int   |
paging.limit |Tamanho da página.                                           |Int   |
paging.offset|Número da página.                                            |Int   |
results      |Lista de Splitts que concordam com os filtros de busca.      |Array |

### Filtros de busca 
Atributo                   |Descrição                                                                                                                                      |Exemplo de busca   |
---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
date_created               |Data de criação do splitter. Devolve todos os splitters criados no intervalo especificado.                                                     |/v1/split_payments/search?access_token=M_ACCESS_TOKEN&range=date&begin_date=2018-02-01&end_date=2018-12-02
status                     |Estado do splitter.                                                                                                                            |/v1/split_payments/search?access_token=M_ACCESS_TOKEN&status=pending
payment.id                 |ID do pagamento de entrada.                                                                                                                    |/v1/split_payments/search?access_token=M_ACCESS_TOKEN&payment.id=123456
payment.payment_method_id  |Método de pagamento.                                                                                                                           |/v1/split_payments/search?access_token=M_ACCESS_TOKEN&payment.payment_method_id=visa
payment.external_reference |ID gerado para este pagamento de entrada em particular.                                                                                        |/v1/split_payments/search?access_token=M_ACCESS_TOKEN&payment.external_reference=EXT_REF
payment.transaction_amount |Total do pagamento de entrada. Ainda não disponível já que se deve definir como serão as buscas com operadores.                                |/v1/split_payments/search?access_token=M_ACCESS_TOKEN&payment.transaction_amount=30
payer.id                   |User ID do pagador (em caso de que seja com account_money). Devolve todos os splitters no qual o payer realizou uma compra no marketplace.     |/v1/split_payments/search?access_token=M_ACCESS_TOKEN&payer.id=111111
payer.email                |Email do Payer.                                                                                                                                |/v1/split_payments/search?access_token=M_ACCESS_TOKEN&payer.email=test@testing.com
disbursement.collector_id  |User ID do Merchant. Devolve todos os splitters nos quais o Merchant realizo alguma venda através do Marketplace.                              |/v1/split_payments/search?access_token=M_ACCESS_TOKEN&collector_id=222222
external_reference         |ID gerado pelo marketplace, ID de orden ou outro identificador que o marketplace conhece para identificar uma venda.                           |/v1/split_payments/search?access_token=M_ACCESS_TOKEN&external_reference=EXT_REF

## Filtros de atributos
Os filtros de atributos servem para simplificar a resposta da pesquisa. No campo "attributes" são especificados os nomes dos campos que queremos mostrar no resultado final.

### Request

```curl
curl -X GET \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/split_payments/search?access_token=M_ACCESS_TOKEN&attributes=id,status,collector_id'
```

### Response
```json
{
  "paging": {
    "total": 1,
    "limit": 100,
    "offset": 0
  },
  "results": [
    {
      "id": 19490622,
      "status": "approved",
      "disbursements": [
        {
          "collector_id": 322478574
        },
        {
          "collector_id": 322478574
        }
      ]
    }
  ]
}
```

### Respostas de erro
As respostas de erro se apresentam da seguinte maneira:

```json
{
  "error": "bad_request",
  "message": "Invalid min merchant release range.",
  "status": 400,
  "cause": [
    {
      "code": 40006,
      "description": "Invalid min merchant release range.",
      "data": null
    }
  ]
}
```

### Definição dos campos
Nome             |Descrição                                         |Tipo  |
-----------------|--------------------------------------------------|------|
error            |ID do erro HTTP.                                  |String|
message          |Mensagem geral do erro.                           |String|
status           |Código HTTP do erro.                              |Int   |
cause            |Lista de causas do erro.                          |Array |
cause.code       |Código específico da aplicação.                   |Long  |
cause.description|Descrição específica do erro da aplicação.        |String|
cause.data       |Dados extra do erro.                              |String|

### Códigos de erro

Código|Descrição                                                       |
------|----------------------------------------------------------------|
40004 |application_id not valid for this get.
40005 |application_id is required.
40006 |Invalid min merchant release range.
40007 |Invalid max merchant release range.
40008 |Invalid min_release_day.
40009 |Invalid max_release_day.
40010 |Difference max and min release day must be between 0 and 91.
40011 |marketplace is required.
40012 |external_reference is required.
40013 |payer.email is required.
40014 |Invalid number of payments.
40015 |Missing payer_id in payments with account_money.
40016 |Invalid payment_type_id not valid.
40017 |transaction_amount is required.
40018 |Invalid transaction amount.
40019 |payment_method is required.
40020 |payment_type_id is required.
40021 |Invalid payment.amount format.
40022 |Invalid processing_mode.
40023 |payer.type is required.
40024 |payer.first_name is required.
40025 |payer.last_name is required.
40026 |payer.identification.type is required.
40027 |ayer.identification.number is required.
40028 |payment.date_of_expiration is required.
40029 |payment.token is required.
40030 |installments is required.
40031 |disbursements.amount is required.
40032 |disbursements.collector_id is required.
40033 |Invalid application_fee.
40034 |disbursements.amount is invalid.
40035 |money_release_date invalid.
40036 |arketplace does not have permissions on the payer.
40037 |collector_id not found in the merchant list.
40038 |Unknown payment_type_id.
40039 |Invalid request.
40040 |Invalid splitter status.
40041 |Invalid begin date.
40042 |Invalid end date.
40043 |Invalid payer email.
40044 |Invalid payer id.
40045 |Invalid collector id.
40046 |Invalid external reference.
40047 |Some parameters are invalid for search.
40048 |Invalid splitter id.
40049 |invalid marketplace.
40050 |Invalid disbursement id.
40051 |money_release_date is required.
40052 |processing_mode is required.
40053 |invalid content in request.
40054 |Marketplace does not have permissions on the collector.
40055 |external_reference is required.
40056 |Money_release_days invalid.
40057 |collector_id and external_reference duplicated for a disburse
40058 |invalid idempotency key.
40401 |disbusement.id not found.
400601|Payments api error.
50000 |Internal server error
