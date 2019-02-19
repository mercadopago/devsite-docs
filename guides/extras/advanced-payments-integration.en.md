# Advanced Payments API Documentation

## Introduction
The purpose of this document is to provide information about the API calls that allow to the Mercado Pago clients to create more flexible and advanced payments.

The types of client to which it is intended are:
- Marketplaces with shopping cart where there is one Payer and multiple Collectors.
- Applications for Marketplaces where there is a Payer and a Collector, for example Uber type with a driver.

In both cases, the marketplace retains a part of the sale amount as commission.

Aggregator mode means that each Merchant on the Marketplace has its own Pay Market account.

## Status map
A Marketplace can be informed of the changes of status of an Advanced Payment if it subscribes to the topic of "Split of Payments" in [Webhooks](https://www.mercadopago.com/mla/account/webhooks).

![Status map](/images/split-de-pagos-status-map.png)

Note: the dashed lines mark the internals changes of status.

## Idempotency
Sometimes, connection problems, service drops, etc. that could interrupt communication when sending or receiving data to create a Advanced Payment may occur.

To ensure the creation of the same, you can retry sending the same data, but it is possible that the Advanced Payment has already been created and due to the interruption the correct answer was not received, causing that, when performing the retry, a new Advanced Payment.

To avoid duplication, you can send a unique key in the X-Idempotency-Key header that identifies the creation of a single Advanced Payment no matter how many times the same data is sent.

In this way, when the retry is done, the same key can be sent to indicate that it is the same process. If the Advanced Payment was already created, the information is returned without creating a new one.

```curl
curl -X POST \
     -H 'X-Idempotency-Key: faDF8323asd298' \
     -H 'accept: application/json' \
     -H 'content-type: application/json' \
     'https://api.mercadopago.com/v1/advanced_payments?access_token=ACCESS_TOKEN' \
     -d '{...}'
```

## Obtaining Merchant permissions and data
The Marketplace that wishes to integrate, must request permits from its Merchants in order to operate and make payments on its behalf. To do this, you must follow the steps of [Mercado Pago Connect](https://www.mercadopago.com.ar/developers/en/guides/marketplace/api/create-marketplace).

By following these steps, the Marketplace may obtain the "access_token" with which you can obtain the "email" in the [API of "Users"](https://developers.mercadolibre.com/en_us/usuarios-y-aplicaciones) of Mercado Livre and the "user_id" that should be used as "collector_id" in each "disbursement" that you want to create in the Advanced Payment. It is important to save the user_id and the merchant's email in order to identify the owner of the Mercado Pago account in case it is necessary.

## Creating a Advanced Payment
These special payments are entities that have 1 entry payment and several exit payments. The PAYER can make the entrance payment with several payment methods (credit card, tickets, etc.). Each payment method has its required fields, for example, to pay with credit cards you have to [generate a card token](https://www.mercadopago.com.ar/developers/en/guides/payments/api/receiving-payment-by-card).

Keep in mind that all merchants specified in each "disbursement" must be associated to the Marketplace through [Mercado Pago Connect](https://www.mercadopago.com.ar/developers/en/guides/marketplace/api/create-marketplace) (each Merchant must explicitly give permission to the Marketplace). Otherwise, the payment can not be created.

The "access_token" parameter of the URL must be the Access Token of the Marketplace that is obtained as indicated by the [documentation] (https://developers.mercadolibre.com/es_ar/autenticacion-y-autorizacion) public.

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

## Get an Advanced Payment
Returns the Advanced Payment in its current state saved in the database. Keep in mind that asynchronous processes that can change the state of a Advanced Payment are executed.

A Marketplace can only obtain its own created Advanced Payments. Merchants can view their payments or disbursements through the [SEARCH](https://api.mercadopago.com/v1/payments/search) of Payments.

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

## Full Advanced Payment Reimbursement
The Advanced Payment can be full reimbursed or a single exit payment from the Advanced Payment can be reimbursed. If the entire Advanced Payment is reimbursed, it will be in the "refunded" state. In case of a partial refund, the Advanced Payment will remain in the "partially_refunded" state.

Keep in mind that this process is not immediate. When the reimbursement is made with this endpoint, an asynchronous process is triggered to reimburse all the generated payments. The Advanced Payment status changes will be reported through Webhooks.

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
## Partial refund of a Advanced Payment
The partial refund of the Advanced Payment can be done by specifying the exit payment ID in the URL.

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

## Cancel a Advanced Payment
You can cancel a Advanced Payment that has been in the "pending" state. These cases can be given for entry payments with ticket or any payment by credit card that has entered the manual review flow.

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

## Capture a Advanced Payment
The Advanced Payment API allows payments of the type "reservation/authorization". For these cases you must create a Advanced Payment with the "capture" field in FALSE, which will reserve the amount until it is captured with the next endpoint.

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

## Change release date of all outgoing payments
We can change the release date of all outgoing payments by entering the new date in the "money_release_date" field. This date must be within the range of releases defined by the Marketplace.

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

## Change release date to a particular exit payment
We can change the release date of an exit payment by going to the "disbursement_id" field, the payment ID and the new date in the "money_release_date" field. This date must be within the range of releases defined by the Marketplace.

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
#### Definition of fields
Name                              |Description                                                                                                                              |Type   |
----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------|
id                                |Advanced Payment ID.                                                                                                                     |Long   |
status                            |Advanced Payment status ("pending", "approved", "rejected", "cancelled", "refunded", "partially_refunded").                              |String |
payments                          |List of entrance payments made by the Payer.                                                                                             |Array  |
payments.id                       |Payer payment ID.                                                                                                                        |Long   |
payments.payment_type_id          |Payment method.                                                                                                                          |String |
payments.payment_method_id        |Payment method ("ticket", "credit_card").                                                                                                |String |
payments.token                    |ID of the card token.                                                                                                                    |String |
payments.date_of_expiration       |Expiration date for the case of payment method "ticket" (it must be less than 29 days).                                                  |String |
payments.transaction_amount       |Amount of the purchase.                                                                                                                  |Float  |
payments.installments             |Installments.                                                                                                                            |Int    |
payments.processing_mode          |Mode of processing payments (can be aggregator or gateway). Currently only aggregator is supported.                                      |String |
payments.description              |Payment description.                                                                                                                     |String |
payments.capture                  |Flag that indicates if it is an authorization and capture payment.                                                                       |Boolean|
payments.external_reference       |Customer reference.                                                                                                                      |String |
payments.statement_descriptor     |Description of the transaction that will appear in the account summary for the case of "gateway".                                        |String |
disbursements                     |List of exit payments. It must be a payment for each Merchant associated in the transaction.                                             |Array  |
disbursements.id                  |Payment ID of the Merchant.                                                                                                              |Long   |
disbursements.amount              |Amount of payment for the Merchant.                                                                                                      |Float  |
disbursements.external_reference  |Customer reference                                                                                                                       |String |
disbursements.collector_id        |ID of the Merchant's MP account.                                                                                                         |Long   |
disbursements.application_fee     |Market commission amount.                                                                                                                |Float  |
disbursements.money_release_days  |Amount of days (from the date of approval of the payment) in which the Merchant payment will be released.                                |String |
disbursements.additional_info     |Additional information on items, shipments, etc. of the transaction.                                                                     |Object |
additional_info.items             |List of items purchased.                                                                                                                 |Array  |
items.id                          |Item ID                                                                                                                                  |String |
items.title                       |Title of the item                                                                                                                        |String |
items.picture_url                 |URL of the item image                                                                                                                    |String |
items.description                 |Description of the item                                                                                                                  |String |
items.category_id                 |Category to which the item belongs according to the [API of Categories](https://api.mercadopago.com/item_categories) of Mercado Libre.   |String |
items.quantity                    |Quantity of products purchased from the item.                                                                                            |Int    |
items.unit_price                  |Price of the unit.                                                                                                                       |Float  |
additional_info.shipments         |Data of the shipment of the items.                                                                                                       |Object |
shipments.receiver_address        |Data of the address of receipt of the items.                                                                                             |Object |
receiver_address.zip_code         |Postal Code.                                                                                                                             |String |
receiver_address.street_name      |Street name of the shipping address.                                                                                                     |String |
receiver_address.street_number    |Street number of the shipping address.                                                                                                   |Int    |
receiver_address.floor            |Apartment floor number.                                                                                                                  |Int    |
receiver_address.apartment        |Department                                                                                                                               |String |
payer                             |Payer data.                                                                                                                              |Object |
payer.id                          |ID of the MP account of the payer (Required only for the payment_method_id = account_money).                                             |Long   |
payer.email                       |Email from Payer.                                                                                                                        |String |
payer.first_name                  |Name of the Payer                                                                                                                        |String |
payer.last_name                   |Payer's last name                                                                                                                        |String |
payer.address                     |Payer address data.                                                                                                                      |Object |
address.zip_code                  |Postal Code.                                                                                                                             |String |
address.street_name               |Name of the street.                                                                                                                      |String |
address.street_number             |Street number.                                                                                                                           |String |
payer.identification              |Payer identification data.                                                                                                               |Object |
identification.type               |Type of Payer identification.                                                                                                            |String |
identification.number             |Payer identification number.                                                                                                             |String |
external_reference                |Customer reference                                                                                                                       |String |
description                       |Description of payment                                                                                                                   |String |
binary_mode                       |Flag indicating the Advanced Payment processing mode. For now, only false is supported.                                                  |Boolean|
date_created                      |Date of creation of the Advanced Payment                                                                                                 |String |
date_last_updated                 |Date of last modification of Advanced Payment                                                                                            |String |
metadata                          |                                                                                                                                         |Object |
application_id                    |Marketplace ID                                                                                                                           |Long   |

## Search for Advanced Payment
You can search for Advanced Payment by several filters in addition to being able to define a "limit" and "offset" to handle paging.

A Marketplace can only search for its own Advanced Payment.

Merchants can see their payments in the Payments public search API with the outgoing payment ID.

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
Name         |Description                                                  |Type  |
-------------|-------------------------------------------------------------|------|
paging       |Data of the page                                             |Object|
paging.total |Total results                                                |Int   |
paging.limit |Page size                                                    |Int   |
paging.offset|Page number                                                  |Int   |
results      |List of Advanced Payment that match the search filters       |Array |

### Filtros de búsqueda
Atribute                   |Description                                                                                                                                    |Search example     |
---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
date_created               |Date of creation of the Advanced Payment. Returns all Advanced Payments created in the specified range                                         |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&range=date&begin_date=2018-02-01&end_date=2018-12-02
status                     |State of the Advanced Payment.                                                                                                                 |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&status=pending
payment.id                 |ID of the entrance payment.                                                                                                                    |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payment.id=123456
payment.payment_method_id  |Payment method.                                                                                                                                |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payment.payment_method_id=visa
payment.external_reference |ID generated for this particular entry payment.                                                                                                |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payment.external_reference=EXT_REF
payment.transaction_amount |Amount of the entrance payment. Not yet available since it is necessary to define how the searches with operators will be.                     |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payment.transaction_amount=30
payer.id                   |User ID of the payer (if it is with account_money). Returns all the splitters in which the payer made a purchase to the marketplace.           |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payer.id=111111
payer.email                |Email from Payer.                                                                                                                              |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&payer.email=test@testing.com
disbursement.collector_id  |Merchant User ID. Returns all the Advanced Payment in which the Merchant made a sale through the Marketplace.                                  |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&collector_id=222222
external_reference         |ID generated by the marketplace, order ID or other identifier that the marketplace knows to identify a sale.                                   |/v1/advanced_payments/search?access_token=M_ACCESS_TOKEN&external_reference=EXT_REF

## Attribute filters
Attribute filters serve to simplify the search response. In the field "attributes" the names of the fields that we want to show in the final result are specified.

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

### Error Answers
The error responses are presented as follows:

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

### Definition of fields
Name             |Description                                       |Type  |
-----------------|--------------------------------------------------|------|
error            |HTTP error ID.                                    |String|
message          |General error message.                            |String|
status           |HTTP code of the error.                           |Int   |
cause            |List of causes of the error.                      |Array |
cause.code       |Specific code of the application.                 |Long  |
cause.description|Specific description of the application error.    |String|
cause.data       |Extra data of the error.                          |String|

### Error codes

Codes |Description                                                     |
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
40049 |invalid date last updated.
40051 |money_release_date is required.
40052 |processing_mode is required.
40053 |invalid content in request.
40054 |Marketplace does not have permissions on the collector.
40055 |external_reference is required.
40056 |Money_release_days invalid.
40057 |collector_id and external_reference duplicated for a disburse.
40058 |invalid idempotency key.
40401 |disbusement.id not found.
400601|Payments api error.
50000 |Internal server error.
