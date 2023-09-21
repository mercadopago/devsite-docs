# Consultas y validaciones

Después de crear el reporte, puedes validar la estructura y las notificaciones haciendo una llamada **GET** a nuestra API, siguiendo las instrucciones a continuación. Esto se aplica a ambos tipos de reportes.

> Para realizar solicitudes GET a Structures, Notifier, Event y Statement, es necesario incluir el `TOKEN` en el _header_ de la solicitud. Además, al efectuar solicitudes GET por ID a Structures, Notifier, Event y Statement, es obligatorio enviar los siguientes parámetros correspondientes: `structure_id`, `notifier_id`, `event_id` y `statement_id`.

## GET Structures
```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/structures' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Respuesta
```json
[
    {
        "id": {{structure_id}},
        "version": 0,
        "date_created": "2023-07-19T19:34:33Z",
        "date_last_updated": "2023-07-19T19:34:33Z",
        "display_timezone": "GMT-03",
        "name": "Structure marketplace",
        "file_format": {
            "prefix": "marketplace",
            "column_separator": ";",
            "decimal_separator": "."
        },
        "columns": [
            {
                "key": "COLLECTOR",
                "alias": ""
            },
            {
                "key": "COLLECTOR_NICKNAME",
                "alias": ""
            },
            {
                "key": "PAYMENT",
                "alias": ""
            },
            {
                "key": "STATUS_DESCRIPTION",
                "alias": ""
            },
            {
                "key": "STATUS_DETAIL",
                "alias": ""
            },
            {
                "key": "PURCHASE_ORDER",
                "alias": ""
            },
            {
                "key": "PAYMENT_METHOD_TYPE",
                "alias": ""
            },
            {
                "key": "TRANSACTION_AMOUNT",
                "alias": ""
            },
            {
                "key": "DATE_CREATED",
                "alias": ""
            },
            {
                "key": "DATE_APPROVED",
                "alias": ""
            },
            {
                "key": "MARKETPLACE_FEE_AMOUNT",
                "alias": ""
            },
            {
                "key": "MERCADOPAGO_FEE_AMOUNT",
                "alias": ""
            },
            {
                "key": "TOTAL_PAID_AMOUNT",
                "alias": ""
            },
            {
                "key": "NET_RECEIVED_AMOUNT",
                "alias": ""
            }
        ],
        "file_config": null,
        "report_translation": null,
        "include_withdraw": null,
        "refund_detailed": null,
        "show_fee_prevision": null,
        "coupon_detailed": null,
        "show_chargeback_cancel": null
    },
  {
	//more structures
  }
]
```

## GET Structures por ID
```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/structures/:structure_id' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Respuesta
```json
{
    "id": {{structure_id}},
    "version": 1,
    "date_created": "2023-07-19T19:34:33Z",
    "date_last_updated": "2023-09-13T17:54:38Z",
    "display_timezone": "GMT-03",
    "name": "Structure marketplace",
    "file_format": {
        "prefix": "marketplace-op",
        "column_separator": ";",
        "decimal_separator": "."
    },
    "columns": [
        {
            "key": "COLLECTOR",
            "alias": ""
        },
        {
            "key": "COLLECTOR_NICKNAME",
            "alias": ""
        },
        {
            "key": "PAYMENT",
            "alias": ""
        },
        {
            "key": "STATUS_DESCRIPTION",
            "alias": ""
        },
        {
            "key": "STATUS_DETAIL",
            "alias": ""
        },
        {
            "key": "PURCHASE_ORDER",
            "alias": ""
        },
        {
            "key": "PAYMENT_METHOD_TYPE",
            "alias": ""
        },
        {
            "key": "TRANSACTION_AMOUNT",
            "alias": ""
        },
        {
            "key": "DATE_CREATED",
            "alias": ""
        },
        {
            "key": "DATE_APPROVED",
            "alias": ""
        },
        {
            "key": "MARKETPLACE_FEE_AMOUNT",
            "alias": ""
        },
        {
            "key": "MERCADOPAGO_FEE_AMOUNT",
            "alias": ""
        },
        {
            "key": "TOTAL_PAID_AMOUNT",
            "alias": ""
        },
        {
            "key": "NET_RECEIVED_AMOUNT",
            "alias": ""
        }
    ],
    "file_config": null,
    "report_translation": null,
    "include_withdraw": null,
    "refund_detailed": null,
    "show_fee_prevision": null,
    "coupon_detailed": null,
    "show_chargeback_cancel": null
}
```

## GET Notifier
```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/notifiers' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Respuesta
```json
[
    {
        "id": {{notifier_id}},
        "type": "email",
        "data": {
            "recipients": [
                "test@mercadolibre.com"
            ]
        },
        "description": null,
        "version": 0,
        "status": "ACTIVE",
        "is_pii_data": true
    },
    {
       ... // more responses
    }
]
```

## GET Notifier por ID
```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/notifiers/:notifier:id' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Respuesta
```json
{
    "id": {{notifier_id}},
    "type": "email",
    "data": {
        "recipients": [
            "test@mercadolibre.com"
        ]
    },
    "description": null,
    "version": 0,
    "status": "ACTIVE",
    "is_pii_data": true
}
```

## GET Event
```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/events' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Respuesta
```json
[
    {
        "id": {{event_id}},
        "type": "frequency",
        "data": {
            "period": "daily",
            "value": 1,
            "hour": 20,
            "skip_non_working_days": false
        },
        "description": "Mail diario a las 20:00",
        "structure_id": {{structure_id}},
        "notifiers": [
            {{notifier_id}}
        ],
        "status": "ACTIVE",
        "version": 1
    },
    {
      ... // more responses
    }
]
```

## GET Event por ID
```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/events/:event_id' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Respuesta
```json
{
    "id": {{event_id}},
    "type": "frequency",
    "data": {
        "period": "daily",
        "value": 0,
        "hour": 11,
        "skip_non_working_days": false
    },
    "description": "Evento para envío los viernes ",
    "structure_id": {{structure_id}},
    "notifiers": [
        {{notifier_id}}
    ],
    "status": "ACTIVE",
    "version": 1,
    "user_id": {{user_id}}
}
```

## GET Statement
```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/statements/{{statement_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Respuesta
```json
{
    "id": {{statement_id}},
    "date_start": "2023-07-18T00:00:00Z",
    "date_end": "2023-07-20T19:00:00Z",
    "date_created": "2023-07-21T17:25:25.764122Z",
    "created_by": "automatic",
    "description": "statement de pruebas",
    "report": {
        "id": "marketplace_sellers_sales",
        "name": "Marketplace OP",
        "topic": "financial_statements",
        "version": "1"
    },
    "files": [
        {
            "type": "json",
            "url": "https://api.mercadopago.com/v1/reporting/reports/marketplace_sellers_sales/statements/{{statement_id}}/download?format=json"
        },
        {
            "type": "csv",
            "url": "https://api.mercadopago.com/v1/reporting/reports/marketplace_sellers_sales/statements/{{statement_id}}/download?format=csv"
        }
    ],
    "event": null,
    "origin": {
        "type": "date_range",
        "data": {
            "date_end": "2023-07-20T19:00:00Z",
            "date_start": "2023-07-18T00:00:00Z"
        }
    },
    "report_extra_data": {},
    "structure": {
        "id": {{structure_id}},
        "version": 0
    },
    "notifiers": [
        {
            "id": {{notifier_id_1}},
            "version": 0,
            "type": "email",
            "data": {}
        },
        {
            "id": {{notifier_id_n}},
            "version": 0,
            "type": "ftp",
            "data": {}
        }
    ],
    "status": "available",
    "reason_code": {
        "code": ""
    }
}
```

## GET Statement por ID
```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/statements/:statement_id' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Respuesta
```json
{
    "id": {{statement_id}},
    "date_start": "2023-07-18T00:00:00Z",
    "date_end": "2023-07-20T19:00:00Z",
    "date_created": "2023-07-21T17:25:25.764122Z",
    "created_by": "automatic",
    "description": "statement de pruebas",
    "report": {
        "id": "marketplace_sellers_sales",
        "name": "Marketplace OP",
        "topic": "financial_statements",
        "version": "1"
    },
    "files": [
        {
            "type": "json",
            "url": "https://api.mercadopago.com/v1/reporting/reports/marketplace_sellers_sales/statements/{{statement_id}}/download?format=json"
        },
        {
            "type": "csv",
            "url": "https://api.mercadopago.com/v1/reporting/reports/marketplace_sellers_sales/statements/{{statement_id}}/download?format=csv"
        }
    ],
    "event": null,
    "origin": {
        "type": "date_range",
        "data": {
            "date_end": "2023-07-20T19:00:00Z",
            "date_start": "2023-07-18T00:00:00Z"
        }
    },
    "report_extra_data": {},
    "structure": {
        "id": {{structure_id}},
        "version": 0
    },
    "notifiers": [
        {
            "id": {{notifier_id_1}},
            "version": 0,
            "type": "email",
            "data": {}
        },
        {
            "id": {{notifier_id_n}},
            "version": 0,
            "type": "ftp",
            "data": {}
        }
    ],
    "status": "available",
    "reason_code": {
        "code": ""
    }
}
```