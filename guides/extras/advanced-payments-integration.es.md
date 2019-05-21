# Documentación API Advanced Payments

## Introducción
El propósito de este documento es proporcionar información sobre las llamadas a la API que permite la creación de pagos más flexibles y avanzados a los clientes de Mercado Pago.

Los tipos de cliente a los que está destinado son: 
- Marketplaces con carrito de compras donde hay un Payer y múltiples Collectors. 
- Aplicaciones para Marketplaces donde existe un Payer y un Collector, por ejemplo tipo Uber con un conductor.

En ambos casos, el marketplace retiene una parte del monto de la venta en concepto de comisión.

El modo agregador implica que cada Merchant del Marketplace tiene su propia cuenta de Mercado Pago.

## Mapa de Estados
Un Marketplace puede informarse de los cambios de estados de un Advanced Payment si se suscribe al tópico de “Split de Pagos” en [Webhooks](https://www.mercadopago.com/mla/account/webhooks), para pagos de carrito del off.

![Status map](/images/advanced-payments/advanced-payments-status-map.png)

Nota: Las líneas punteadas marcan un cambio de estado interno.

## Idempotencia
En ocasiones se pueden presentar problemas de conexión, caídas de servicios, etc. que podrían interrumpir la comunicación al enviar o recibir los datos para crear un Advanced Payment.

Para asegurar la creación del mismo, se puede reintentar el envío de los mismos datos, pero es posible que el Advanced Payment ya se haya creado y debido a la interrupción no se recibió la respuesta correcta, ocasionando que, al realizar el reintento, se genere un nuevo Advanced Payment.

Para evitar el duplicado, se puede enviar de una clave única en el header X-Idempotency-Key que identifique la creación de un único Advanced Payment no importa cuantas veces se envíen los mismos datos.

De esta manera, cuando se haga el reintento, se puede enviar la misma clave para indicar que es el mismo proceso. Si el Advanced Payment ya fué creado, se devuelve la información del mismo sin crear uno nuevo.

```curl
curl -X POST \
     -H 'X-Idempotency-Key: faDF8323asd298' \
     -H 'accept: application/json' \
     -H 'content-type: application/json' \
     'https://api.mercadopago.com/v1/advanced_payments?access_token=ACCESS_TOKEN' \
     -d '{...}'
```

## Obtención de permisos y datos del Merchant
El Marketplace que desee integrarse, debe solicitar permisos a sus Merchants para poder operar y realizar pagos en su nombre. Para ello, debe seguir los pasos de [Mercado Pago Connect](https://www.mercadopago.com.ar/developers/es/guides/marketplace/api/create-marketplace).

Al seguir estos pasos, el Marketplace podrá obtener el “access_token” con el que puede obtener el “email” en la [API de “Users”](https://developers.mercadolibre.com/en_us/usuarios-y-aplicaciones) de Mercado Libre y el “user_id” que lo debe utilizar como “collector_id” en cada “disbursement” que desee crear en el Advanced Payment. Es importante guardar el user_id y el email del merchant para poder identificar el propietario de la cuenta de Mercado Pago en caso que haga falta.

## Creación de un Advanced Payment
Estos pagos especiales, son entidades que tienen 1 pago de entrada y varios de salida. El PAYER puede hacer el pago de entrada con varios métodos de pago (tarjeta de crédito, boletos, etc.). Cada método de pago tiene sus campos requeridos, por ejemplo, para pagar con tarjetas de crédito hay que [generar un token de tarjeta](https://www.mercadopago.com.ar/developers/es/guides/payments/api/receiving-payment-by-card).

Hay que tener en cuenta que todos los Merchants especificados en cada “disbursement”, debe estar asociado al Marketplace mediante [Mercado Pago Connect](https://www.mercadopago.com.ar/developers/es/guides/marketplace/api/create-marketplace) (cada Merchant debe dar permiso explícitamente al Marketplace). De lo contrario, no se podrá crear el pago.

El parámetro “access_token” de la URL debe ser el Access Token del Marketplace que se obtiene como indica la [documentación](https://developers.mercadolibre.com/es_ar/autenticacion-y-autorizacion) pública.

### Request
```curl
curl -X POST \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/advanced_payments?access_token=M_ACCESS_TOKEN'
    -d '
        {
            "application_id": "4422991580014613",
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
                "statement_descriptor": "WWW.MktAdvancedPaymentMLBTEST.COM.BR"
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
            "external_reference": "externalRootRef",
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
      "statement_descriptor": "WWW.MktAdvancedPaymentMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "externalDisb1Ref",
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
      "external_reference": "externalDisb2Ref",
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
  "external_reference": "externalRootRef",
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

## Obtener un Advanced Payment de pagos
Devuelve el Advanced Payment en su estado actual guardado en la base de datos. Hay que tener en cuenta que se ejecutan procesos asincrónicos que pueden cambiar el estado de un Advanced Payment.

Un Marketplace solo puede obtener sus propios Advanced Payments creados. Los Merchants pueden ver sus pagos o “disbursements” mediante el [SEARCH](https://api.mercadopago.com/v1/payments/search) de Payments.

### Request
```curl
curl -X GET \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/advanced_payments/:ID?access_token=M_ACCESS_TOKEN'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
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
      "statement_descriptor": "WWW.MktAdvancedPaymentMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "externalDisb1Ref",
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
      "external_reference": "externalDisb2Ref",
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
  "external_reference": "externalRootRef",
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

## Reembolso de un Advanced Payment completo
Se puede hacer el reembolso del Advanced Payment completo o de algún pago de salida individual. Si se reembolsa el Advanced Payment completo, este quedará con el estado “refunded”. En caso de realizar un reembolso parcial, el Advanced Payment quedará en estado “partially_refunded”.

Tener en cuenta que este proceso no es inmediato. Cuando se realiza el reembolso con este endpoint, se dispara un proceso asincrónico para reembolsar todos los pagos generados. El cambio de estado del Advanced Payment se informará mediante Webhooks.

### Request

```curl
curl -X POST \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/advanced_payments/:ID/refunds?access_token=M_ACCESS_TOKEN'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
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
      "statement_descriptor": "WWW.MktAdvancedPaymentMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "externalDisb1Ref",
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
      "external_reference": "externalDisb2Ref",
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
  "external_reference": "externalRootRef",
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
## Reembolso parcial de un Advanced Payment
El reembolso parcial del Advanced Payment se puede hacer especificando el ID del pago de salida en la URL.

### Request
```curl
curl -X POST \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/advanced_payments/:ID/disbursements/:DISBURSEMENT_ID/refunds?access_token=M_ACCESS_TOKEN'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
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
      "statement_descriptor": "WWW.MktAdvancedPaymentMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "externalDisb1Ref",
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
      "external_reference": "externalDisb2Ref",
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
  "external_reference": "externalRootRef",
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

## Cancelar un Advanced Payment
Se podrá cancelar un Advanced Payment que haya quedado en estado “pending”. Estos casos se pueden dar para los pagos de entrada con Ticket o algún pago con tarjeta de crédito que haya entrado en el flujo de revisión manual.

### Request

```curl
curl -X PUT \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/advanced_payments/:ID?access_token=M_ACCESS_TOKEN'
    -d '{
          "status": "cancelled"
        }'
```

### Response
```json
{
  "id": 20457853,
  "status": "approved",
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
      "statement_descriptor": "WWW.MktAdvancedPaymentMLBTEST.COM.BR",
      "date_of_expiration": "2018-06-22T21:52:49.000-04:00"
    }
  ],
  "disbursements": [
    {
      "amount": 200.12,
      "external_reference": "externalDisb1Ref",
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

## Capturar un Advanced Payment
La API de Advanced Payment permite realizar pagos del tipo “reserva/autorización”. Para estos casos se debe crear un Advanced Payment con el campo “capture” en FALSE, el cual reservará el monto hasta que se capture con el siguiente endpoint.

### Request

```curl
curl -X PUT \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/advanced_payments/:ID?access_token=M_ACCESS_TOKEN'
    -d '{
          "capture": true
        }'
```

### Response
```json
{
  "id": 20458724,
  "status": "pending",
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
      "statement_descriptor": "WWW.MktAdvancedPaymentMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "externalDisb1Ref",
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
      "external_reference": "externalDisb2Ref",
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
  "external_reference": "externalRootRef",
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

## Cambiar fecha de liberación de todos los pagos de salida
Podemos cambiar la fecha de liberación de todos los pagos de salida pasando la nueva fecha en el campo “money_release_date”. Esta fecha debe estar dentro del rango de liberaciones definido por el Marketplace.

### Request

```curl
curl -X POST \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/advanced_payments/:ID/disburses?access_token=M_ACCESS_TOKEN'
    -d '{
          "money_release_date": "2018-07-10T10:23:18.000-04:00"
        }'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
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
      "statement_descriptor": "WWW.MktAdvancedPaymentMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "externalDisb1Ref",
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
      "external_reference": "externalDisb2Ref",
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
  "external_reference": "externalRootRef",
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

## Cambiar fecha de liberación un pago de salida particular
Podemos cambiar la fecha de liberación de un pago de salida pasando en el campo “disbursement_id”, el ID del pago y la nueva fecha en el campo “money_release_date”. Esta fecha debe estar dentro del rango de liberaciones definido por el Marketplace.
### Request

```curl
curl -X POST \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/advanced_payments/:ID/disbursements/:DISBURSEMENT_ID/disburses?access_token=M_ACCESS_TOKEN'
    -d '{
          "money_release_date": "2018-07-10T10:23:18.000-04:00"
        }'
```

### Response
```json
{
  "id": 20458724,
  "status": "approved",
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
      "statement_descriptor": "WWW.MktAdvancedPaymentMLBTEST.COM.BR"
    }
  ],
  "disbursements": [
    {
      "id": 3870106325,
      "amount": 200.12,
      "external_reference": "externalDisb1Ref",
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
      "external_reference": "externalDisb2Ref",
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
  "external_reference": "externalRootRef",
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
Nombre                            |Descripción                                                                                                                       |tipo
----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-------
id                                |ID del Advanced Payment.                                                                                                          |Long   |
status                            |Estado del Advanced Payment ("pending", "approved", "rejected", "cancelled", "refunded", "partially_refunded                      |String |
payments                          |Lista de pagos de entrada realizados por el Payer.                                                                                |Array  |
payments.id                       |ID del pago del Payer.                                                                                                            |Long   |
payments.payment_type_id          |Medio de pago.                                                                                                                    |String |
payments.payment_method_id        |Método de pago ("ticket", "credit_card").                                                                                         |String |
payments.token                    |ID del Token de la tarjeta.                                                                                                       |String |
payments.date_of_expiration       |Fecha de expiración para el caso de método de pago “ticket” (la misma tiene que ser menor a los 29 días).                         |String |
payments.transaction_amount       |Monto de la compra.                                                                                                               |Float  |
payments.installments             |Cuotas                                                                                                                            |Int    |
payments.processing_mode          |Modo de procesar los pagos (puede ser aggregator o gateway). Actualmente sólo se soporta aggregator.                              |String |
payments.description              |Descripción del pago.                                                                                                             |String |
payments.capture                  |Flag que indica si se trata de un pago de autorización y captura.                                                                 |Boolean|
payments.external_reference       |Referencia del cliente.                                                                                                           |String |
payments.statement_descriptor     |Descripción de la transacción que aparecerá en el resumen de cuenta para el caso de “gateway”.                                    |String |
disbursements                     |Lista de pagos de salida. Debe ser un pago para cada Merchant asociado en la transacción.                                         |Array  |
disbursements.id                  |ID del pago del Merchant.                                                                                                         |Long   |
disbursements.amount              |Monto del pago para el Merchant.                                                                                                  |Float  |
disbursements.external_reference  |Referencia del cliente.                                                                                                           |String |
disbursements.collector_id        |ID de la cuenta de MP del Merchant.                                                                                               |Long   |
disbursements.application_fee     |Monto de comisión del Marketplace.                                                                                                |Float  |
disbursements.money_release_days  |Cantidad de días (a partir de la fecha de aprobación del pago) en que se va a liberar el pago del Merchant.                       |String |
disbursements.additional_info     |Información adicional de los ítems, envíos, etc. de la transacción.                                                               |Object |
additional_info.items             |Lista de ítems comprados.                                                                                                         |Array  |
items.id                          |ID del ítem.                                                                                                                      |String |
items.title                       |Título del ítem                                                                                                                   |String |
items.picture_url                 |URL de la imagen del ítem                                                                                                         |String |
items.description                 |Descripción del ítem                                                                                                              |String |
items.category_id                 |Categoría a la que pertenece el ítem según la [API de Categorías](https://api.mercadopago.com/item_categories) de Mercado Libre.  |String |
items.quantity                    |Cantidad de productos comprados del ítem.                                                                                         |Int    |
items.unit_price                  |Precio de la unidad.                                                                                                              |Float  |
additional_info.shipments         |Datos del envío de los ítems.                                                                                                     |Object |
shipments.receiver_address        |Datos de la dirección de recepción de los ítems.                                                                                  |Object |
receiver_address.zip_code         |Código postal.                                                                                                                    |String |
receiver_address.street_name      |Nombre de la calle de la dirección de envío.                                                                                      |String |
receiver_address.street_number    |Número de la calle de la dirección de envío.                                                                                      |Int    |
receiver_address.floor            |Número del piso del departamento.                                                                                                 |Int    |
receiver_address.apartment        |Departamento                                                                                                                      |String |
payer                             |Datos del Payer.                                                                                                                  |Object |
payer.id                          |ID de la cuenta de MP del payer (Requerido solo para el payment_method_id = account_money).                                       |Long   |
payer.email                       |Email del Payer.                                                                                                                  |String |
payer.first_name                  |Nombre del Payer                                                                                                                  |String |
payer.last_name                   |Apellido del Payer                                                                                                                |String |
payer.address                     |Datos de la dirección del Payer.                                                                                                  |Object |
address.zip_code                  |Código postal.                                                                                                                    |String |
address.street_name               |Nombre de la calle.                                                                                                               |String |
address.street_number             |Número de la calle.                                                                                                               |String |
payer.identification              |Datos de identificación del Payer.                                                                                                |Object |
identification.type               |Tipo de identificación del Payer.                                                                                                 |String |
identification.number             |Número de identificación del Payer.                                                                                               |String |
external_reference                |Referencia del cliente.                                                                                                           |String |
description                       |Descripción del pago                                                                                                              |String |
binary_mode                       |Flag que indica el modo de procesamiento del Advanced Payment. Por ahora, solo se soporta false.                                  |Boolean|
date_created                      |Fecha de creación del Advanced Payment                                                                                            |String |
date_last_updated                 |Fecha de última modificación del Advanced Payment                                                                                 |String |
metadata                          |                                                                                                                                  |object |
application_id                    |ID del Marketplace                                                                                                                |Long   |

## Búsqueda de Advanced Payments
Se pueden realizar búsquedas de Advanced Payments por varios filtros además de poder definir un “limit” y “offset” para manejar la paginación.

Un Marketplace solo podrá realizar búsquedas de sus propios Advanced Payments.

Los Merchants pueden ver sus pagos en la API pública de búsqueda de Payments con el ID del pago de salida.
### Request

```curl
curl -X GET \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&limit=10&offset=0'
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
          "statement_descriptor": "WWW.MktAdvancedPaymentMLBTEST.COM.BR"
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
      "external_reference": "externalRootRef",
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

#### Definición de campos
Nombre       |Descripción                                                          |Tipo  |
-------------|---------------------------------------------------------------------|------|
paging       |Datos de la paginación                                               |Object|
paging.total |Total de resultados                                                  |Int   |
paging.limit |Tamaño de página                                                     |Int   |
paging.offset|Número de página                                                     |Int   |
results      |Lista de Advanced Payments que concuerdan con los filtros de búsqueda|Array |

### Filtros de búsqueda
Atributo                   |Descripción                                                                                                                                            |Ejemplo de búsqueda|
---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
date_created               |Fecha de creación del Advanced Payment. Devuelve todos los Advanced Payments creados en el rango especificad                                           |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&range=date&begin_date=2018-02-01&end_date=2018-12-02
status                     |Estado del Advanced Payment.                                                                                                                           |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&status=pending
payment.id                 |ID del pago de entrada.                                                                                                                                |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payment.id=123456
payment.payment_method_id  |Método de pago.                                                                                                                                        |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payment.payment_method_id=visa
payment.external_reference |ID generado para este pago de entrada en particular.                                                                                                   |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payment.external_reference=EXT_REF
payment.transaction_amount |Monto del pago de entrada. Aún no disponible ya que se debe definir cómo serán las búsquedas con operadores.                                           |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payment.transaction_amount=30
payer.id                   |User ID del pagador (en caso de que sea con account_money). Devuelve todos los Advanced Payments en el cual el payer realizó una compra al marketplace.|/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payer.id=111111
payer.email                |Email del Payer.                                                                                                                                       |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payer.email=test@testing.com
disbursement.collector_id  |User ID del Merchant. Devuelve todos los Advanced Payments en el cual el Merchant realizó alguna venta a través del Marketplace.                       |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&collector_id=222222
external_reference         |ID generado por el marketplace, ID de orden u otro identificador que el marketplace conoce para identificar una venta.                                 |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&external_reference=EXT_REF

## Filtros de atributos
Los filtros de atributos sirven para simplificar la respuesta de búsqueda. En el campo “attributes” se especifican los nombres de los campos que queremos que se muestren en el resultado final.

### Request

```curl
curl -X GET \
     -H “Accept”:”application/json” \
     -H “Content-Type”:”application/json” \
     'https://api.mercadopago.com/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&attributes=id,status,collector_id'
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

### Respuestas de Error
Las respuestas de error se presentan de la siguiente manera:

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

### Definición de campos
Nombre           |Descripción                                       |Tipo  |
-----------------|--------------------------------------------------|------|
error            |ID del error HTTP.                                |String|
message          |Mensaje general del error.                        |String|
status           |Código HTTP del error.                            |Int   |
cause            |Lista de causas del error.                        |Array |
cause.code       |Código específico de la aplicación.               |Long  |
cause.description|Descripción específica del error de la aplicación.|String|
cause.data       |Datos extras del error.                           |String|

### Códigos de error

Código|Descripción|
------|----------------------------------------------------------------|
40005 |application_id is required.
40006 |Invalid min merchant release range.
40007 |Invalid max merchant release range.
40008 |Invalid min_release_day.
40009 |Invalid max_release_day.
40010 |Difference max and min release day must be between 0 and 91.
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
40038 |Invalid query params duplicated.
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
40049 |Invalid date last updated.
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
