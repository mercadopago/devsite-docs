# Generate report

To generate the report, first, you need to [create the configurations](#bookmark_create_configuration), where you can set the emails to which the report will be sent or the frequency at which you want it to be generated, among other options. Then, you must [create the report](#bookmark_create_report), which can be done **automatically** (event) or **manually** (statement).

> NOTE
>
> Important
>
> To generate reports, you will need the Access Token from your production credentials. This is a private application key that should always be used in the backend to generate payments. If you do not have this information yet, follow the steps described below.

## Generate Access Token

Credentials are unique passwords used to identify an integration in your account. They play a fundamental role in securely capturing payments on online stores and other applications. You can find them in **Application Details > Credentials** within the [Developer dashboard](https://www.mercadopago.com.uy/developers/panel/app) or in your Mercado Pago account by accessing [Your Business > Settings > Management and administration > Credentials](https://www.mercadopago.com.uy/settings/account/credentials).

There are two different types of credentials:
* **Test credentials**: Use test credentials to test your integrations. They can be combined with test credit cards to simulate transactions and verify the correct operation of the integrations. It is recommended to use these credentials before moving on to production credentials.
* **Production credentials**: Use production credentials to receive payments.

Both types of credentials consist of two key pairs that you should use according to the chosen product. Refer to the specific documentation for each product for details on which keys to use.

| Type            | Description                                                                                                          |
|-----------------|----------------------------------------------------------------------------------------------------------------------|
| Public key      | The public key of the application is generally used in the frontend. It allows, for example, accessing information about payment methods and encrypting card data. |
| Access token    | Access token is the private key of the application that should always be used in the backend to generate payments. It is essential to keep this information secure on your servers. |

To generate the sales report, you should use your **Production Access Token**.

![Generate Access Token](/images/manage-account/reports/marketplace-sales/image1.png)

## Create configuration

Before generating the report, you must create the corresponding configurations, which will allow you to customize the emails to which the report will be sent, the generation frequency, and its structure.

Creating configurations consists of 2 steps: first, defining the **report structure**, and then configuring the **notification methods**.

### Structure report

Creating the report structure allows you to define the characteristics it will have at the time of generation. Through the structures, you can specify the time zone in which you want the report to be generated, add a prefix to identify the generated file, and incorporate the desired number of columns, along with column separators and decimals.

To set this structure, make the following API call, considering the specifications in the table below:

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/structures' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "display_timezone": "GMT-03",
    "name": "My Marketplace Structure",
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
    ]
}'
```

#### Response
```json
{
    "id": {{structure_id}},
    "version": 0,
    "date_created": null,
    "date_last_updated": null,
    "name": null,
    "file_format": null,
    "columns": null,
    "file_config": null,
    "report_translation": null,
    "include_withdraw": null,
    "refund_detailed": null,
    "show_fee_prevision": null,
    "coupon_detailed": null,
    "show_chargeback_cancel": null
}
```

| Field                    | Description                                                                                                           |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------|
| `display_timezone` (optional)  | This field determines the date and time displayed in the reports. If you do not configure this field with a time zone, the system will use the default value GMT-04. If you choose a time zone that uses daylight saving time, you will need to manually adjust it when there is a time change. |
| `columns` (required)       | Field with details of the columns to be included in your report. Find all possible values in the [Glossary](/developers/en/docs/checkout-pro/additional-content/reports/marketplace-sales-report/report-fields) section. |
| `name` (required)          | Field to assign a name to the **structure**. |
| `file_format.prefix` (required) | Prefix that composes the name of the report once generated. |
| `file_column_separator` (required) | Character you can use in the .csv file when you do not want the separator to be a semicolon. |

### Notification methods

After establishing the report structure, determine how you want to receive notifications, either by email or SFTP. Configure a notifier as shown below, and pay attention to the characteristics of each field described in the table below.

#### Email
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/notifiers' \
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

#### Response
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

#### SFTP
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/notifiers?type=ftp' \
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

#### Response
```json
{
    "id": {{notifier_id}},
    "type": "ftp",
    "data": {
        "protocol": "SFTP",
        "ip": "test.files.com",
        "username": "test@mercadolibre.com",
        "password": "test",
        "remote_dir": "/",
        "port": 22
    },
    "description": null,
    "version": 0,
    "status": "ACTIVE",
    "is_pii_data": false
}
```

| Field              | Description                                                                                                        |
|-------------------|--------------------------------------------------------------------------------------------------------------------|
| `type` (required) | Defines the type of notification to be configured. Possible values: **email**; **ftp**.                            |
| `data` (required) | Contains information about the recipient of the **notifier**. Depending on the value indicated in `type`, it can contain the following objects: <br><br>- **email:** Contains the `recipients` field, where you can specify the emails to which the report will be sent. You can specify more than one if desired. <br><br>- **ftp:** Contains the following fields: <br> - `ip`: FTP server URL <br>   - `port`: FTP server port <br>   - `password`: FTP server access password <br>   - `protocol`: `SFTP` <br>   - `username`: Username to access the FTP server <br>   - `remote_dir`: Remote target directory on the FTP server.   |

## Create report

After creating the initial configurations, you have two options to generate the report:

* **Schedule an event**: This automates report creation by specifying its frequency.
* **Manually generate an event**: You can create an on-demand report by defining the desired time interval.

### Schedule a report (Events)

When scheduling an event, it's possible to generate reports automatically and set their frequency. To perform this scheduling, create an event following the example below. Make sure to have the previously established configurations and the information from the table below on hand to ensure successful report scheduling.

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/events' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "frequency",
    "data": {
        "period": "daily",
        "value": 0,
        "hour": 0
    },
    "description": "event test",
    "structure_id": {{structure_id}},
    "notifiers": [      
       {{notifier_id}}
    ],
    "status": "ACTIVE",
    "version": 0
}'
```

#### Response
```json
{
    "id": {{event_id}},
    "type": "frequency",
    "data": {
        "period": "daily",
        "value": 0,
        "hour": 20,
        "skip_non_working_days": false
    },
    "description": "event test",
    "structure_id": {{structure_id}},
    "notifiers": [],
    "status": "ACTIVE",
    "version": 0,
    "user_id": {{user_id}}
}
```

You can find descriptions of the fields in the curls in the table below.

| Field           | Description                                                                                                                                                                                                                                |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type` (required) | This field defines the event type. The only possible value is `frequency`.                                                                                                                                                                   |
| `data` (required) | This field contains the frequency at which the report will be generated. It can be daily (`period=daily`), weekly (`period=weekly`), or monthly (`period=monthly`). Within `value`, you can specify which day of the week you want the report to be generated (if `period=weekly`), assigning a number from 1 to 7, or which day of the month (if `period=monthly`), assigning a number from 1 to 31. Additionally, in the `hour` field, you can schedule the time of day when the report will be generated. |
| `description` (required) | Field to assign a name to the event. Maximum value: 50 characters.                                                                                                                                                                          |
| `structure_id` (required) | Field to assign the structure with which the report will be generated. You must fill it with the value obtained for this same field in the response to the structure creation.                                                             |
| `notifier_id` (required)  | Field to assign the method by which you want to receive notifications. You must fill it with the identification obtained in the response to the creation of notifications.                                                                     |

### Manually generate report (Statements)

Manual creation allows you to generate an on-demand report, specifying the desired time interval.

To do this, create a statement as shown below. Also, make sure to have the configurations you previously created and the information from the table below on hand to ensure successful report creation.

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/statements' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data-raw '{
    "user_description": "",
    "created_by": "automatic",
    "origin": {
        "type": "date_range",
        "data": {
            "date_start": "2023-04-01T03:00:00Z",
            "date_end": "2023-04-02T02:27:44Z"
        }
    },
    "structure_id": {{structure_id}},
    "notifiers_id": [{{notifier_id}}]
}'
```

#### Response
```json
{
    "status_code": 201,
    "request_id": {{statement_id}},
    "message": ""
}
```

You can find descriptions of the fields in the curls in the table below.

| Field                        | Description                                                                                                                                                                                                                          |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `user_description` (required) | Desired description. Maximum length: 50 characters.                                                                                                                                                                                 |
| `created_by` (required)       | Request creator. Currently, it can only receive the value _automatic_.                                                                                                                                                                |
| `Origin` (required)          | This field contains information about the period you want to include in the report.<br>- `type`: The only possible value is `date_range`, as you will need to indicate the period to be queried.<br>- `date_start`: Indicates the start of the period you want to query in the format: **yyyy-MM-dd HH:mm:ss.SSS**.<br>- `date_end`: Indicates the end of the period you want to query in the format: **yyyy-MM-dd HH:mm:ss.SSS**. |
| `structure_id` (required)    | Field to assign the structure with which the report will be generated. You must fill it with the value obtained for this same field in the response to the structure creation.                                                        |
| `notifiers_id` (required)    | Field to assign the method by which you want to receive notifications. You must fill it with the identification obtained in the response to the creation of notifications.                                                            |