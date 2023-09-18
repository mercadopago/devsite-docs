# Modificaciones

Si, después de revisar las configuraciones de estructuras, notificaciones o eventos, deseas realizar cambios, utiliza los _endpoints_ especificados a continuación.

> WARNING
>
> Importante
>
> Ten en cuenta que **no es posible** modificar uno reporte generados manualmente (statements).

## PUT Structures
```curl
curl --location --request PUT 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/structures/{{structure_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{

    "display_timezone": "GMT-05",
    "name": "Structure 2 marketplace",
    "file_format": {
        "prefix": "mkp-",
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
    ]
}'
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

## PUT Event
```curl
curl --location --request PUT 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/events/{{event_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "frequency",
    "data": {
        "period": "daily",
        "value": 0,
        "hour": 0
    },
    "description": "test event",
    "structure_id": {{structure_id}},
    "notifiers": [{{notifier_id}}],
    "status": "ACTIVE",
    "version": 0
}'
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

## PUT Notifier

### Curl email
```curl
curl --location --request PUT 'https://api.mercadopago.com/v1/reports/notifiers/{{notifier_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "email",
    "data": {
        "recipients": ["test@mercadolibre.com"]
    },
    "description": "test notifier email"
}'
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
    "version": 1,
    "status": "ACTIVE",
    "is_pii_data": true
}
```

### Curl SFTP
```curl
curl --location --request PUT 'https://api.mercadopago.com/v1/reports/notifiers/{{notifier_id}}?type=ftp' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "ftp",
    "data": {
        "ip": "test.files.com",
        "port": 22,
        "password": "test",
        "protocol": "SFTP",
        "username": "test@mercadolibre.com",
        "remote_dir": "/"
    },
    "description": "test notifier sftp"
}'
```

#### Respuesta
```json
{
    "id": {{notifier_id}},
    "type": "ftp",
    "data": {
         "ip": "test.files.com",
        "port": 22,
        "password": "test",
        "protocol": "SFTP",
        "username": "test@mercadolibre.com",
        "remote_dir": "/"
    },
    "description": "test notifier sftp 1",
    "version": 1,
    "status": "ACTIVE",
    "is_pii_data": false
}
```