# Generate report

## How to generate your Marketplace sales report?

Currently, the Marketplace sales report from Mercado Pago can only be generated via API.
This process involves three steps:
   1. **Configuration creation**: you can define the emails to which the report will be sent or the frequency at which you want it to be generated, among other options.
   2. **Report scheduling**: you will enable the scheduled sending of the report according to the parameters configured in the previous step.
   3. **Report generation**: you will make the call to generate the report according to the configurations previously made.

## Configuration creation

The process of creating the configuration may vary depending on whether this is the first time you generate this report or if you have previously generated it and want to consult and modify those previous configurations. 
To create the Marketplace sales report configuration for the first time, follow the steps below. If you have already generated it before and want to consult and modify the previous configurations, you can skip to the next step.

### Creating the configuration for the first time

If this is the first time you set up and generate the Marketplace sales report, you must send a POST with the following cURL:

```bash
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/config' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data-raw '{
            "file_name_prefix": "release-report-MKP-test-v1",
            "display_timezone": "GMT-03",
            "notification_email_list": [
                "juanpablo.rozada@mercadolibre.com"
            ],
            "frequency": {
                "hour": 15,
                "type": "weekly",
                "value": "tuesday"
            },
            "columns": [
                {
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                },
                {
                    "key": "MP_FEE_AMOUNT"
                },
                {
                    "key": "PAYMENT_METHOD"
                },
                {
                    "key": "STORE_NAME"I I I 
                },
                {
                    "key": "RECORD_TYPE"
                },
                {
                    "key": "DESCRIPTION"
                }
            ]
    }'

```

| Parameter                 | Required or Optional      | Description                                                                                                                                         |
|---------------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `file_name_prefix`        | Required                 | Prefix that will be used in the downloaded report's name.                                                                                           |
| `display_timezone`        | Optional                 | Timezone to be used in the report's timings. If left blank, GMT-04 will be used as the default.                                                    |
| `notification_email_list` | Optional                 | Desired frequency of report generation. Should be specified as:                                                                                     |
|                           |                          | - `hour`: the time of day when the report will be generated.                                                                                         |
|                           |                          | - `type`: the frequency of generation (monthly for monthly, weekly for weekly, daily for daily).                                                     |
|                           |                          | - `value`: the day of the week when the report should be generated.                                                                                   |
|                           |                          | **Note**: This parameter only configures the frequency. To effectively schedule the report's delivery, refer to the "Report Scheduling" step.       |
| `columns`                 | Required                 | Data to be included in the report. For detailed information about each one, refer to the "Report Usage" section.                                     |

### Querying and Modifying Previous Configurations

If you have previously generated a Marketplace sales report, you can query the defined configurations and modify them if desired.

To query the previously defined configurations, send a GET request with the following cURL:

```bash
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/config' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}'
```

To modify the settings established in previous Marketplace sales reports, send a PUT request using the following cURL:

```bash
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/config' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data-raw '{
            "file_name_prefix": "release-report-MKP-test-v1",
            "display_timezone": "GMT-03",
            "notification_email_list": [
                "exemplo@exemplo.com"
            ],
            "frequency": {
                "hour": 15,
                "type": "weekly",
                "value": "tuesday"
            },
            "columns": [
                {
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                },
                {
                    "key": "MP_FEE_AMOUNT"
                },
                {
                    "key": "PAYMENT_METHOD"
                },
                {
                    "key": "STORE_NAME"
                },
                {
                    "key": "RECORD_TYPE"
                },
                {
                    "key": "DESCRIPTION"
                }
            ]
    }'
```

## Report scheduling 

If you chose the frequency for receiving your Marketplace sales report when configuring it, you will also need to enable scheduled delivery. You can do this using the following cURL:

```bash
curl --location --request POST 'https://api.mercadopago.com/v1/account/marketplace_sales_report/schedule' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}'
```

> This cURL only enables scheduled delivery. To configure the frequency at which you want this delivery to occur, you must do so during the creation of the settings.

You can also undo the scheduling of the report delivery. To do this, make a call using the following cURL:

```bash
curl --location --request DELETE 'https://api.mercadopago.com/v1/account/marketplace_sales_report/schedule' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}'
```

## Report generation

Once you have created the settings and scheduled the delivery of the Marketplace sales report, you can generate and obtain it automatically via email or manually through a text file. The diagrams below illustrate each process.

![Automatic](/images/manage-account/reports/marketplace-sales/image3.png)
![Manual](/images/manage-account/reports/marketplace-sales/image4.png)

### Automatic download generation

To generate the report and automatically download it via email, you must use the following cURL:

```bash
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data '{
    "marketplaces": ["MP-MKT-3362814541380534"],
    "site": "MLB",
    "begin_date": "2023-06-01T00:00:00Z",
    "end_date": "2023-06-10T00:00:00Z"
}'
```

The report generation is an asynchronous process. For this reason, you will receive the email that will allow you to download the report after a few minutes.

![Automatic](/images/manage-account/reports/marketplace-sales/image1.png)

### Manual download generation

To generate the report and manually download it, you must do so using the following cURL:

```bash
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/{{REPORT_FILE_NAME}}' \
--header 'Authorization: Bearer {{APP_USER_TOKEN}}'
```

The report will be returned by the API in text format as a result.

Here is a Postman collection that you can use as an example: file

## Querying the configured reports

When you want to query the reports you have configured, you can do so with the following cURL:

```bash
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report'/list?access_token={{USER_APP_TOKEN}}'
```

The call will return a response similar to the following:

```bash
[
    {
        "id": 34326722,
        "account_id": 1214966328,
        "begin_date": "2023-04-11T19:00:00Z",
        "created_from": "schedule",
        "currency_id": "BRL",
        "date_created": "2023-04-18T15:00:03.000-04:00",
        "download_date": null,
        "end_date": "2023-04-18T18:59:59Z",
        "file_name": "reserve-release-report-4-USER_ID-2023-04-18-160003.csv",
        "internal_management": "{\"notify\": true, \"is_visible\": true, \"use_exact_time\": false}",
        "is_visible": true,
        "metadata": "{\"user_tags\": [\"test_user\", \"normal\"], \"generation_model\": \"reserve\"}",
        "origin": "date_range",
        "status": "enabled",
        "subtype": "release",
        "user_id": 1291581847
    },
    {
        "id": 34203258,
        "account_id": 1214966328,
        "begin_date": "2023-02-28T03:00:00Z",
        "created_from": "manual",
        "currency_id": "BRL",
        "date_created": "2023-04-13T08:04:50.000-04:00",
        "download_date": null,
        "end_date": "2023-03-12T02:59:59Z",
        "file_name": "reserve-release-report-4-USER_ID-2023-04-13-090450.csv",
        "internal_management": "{\"notify\": true, \"is_visible\": true, \"use_exact_time\": false}",
        "is_visible": true,
        "metadata": "{\"user_tags\": [\"test_user\", \"normal\"], \"generation_model\": \"reserve\", \"last_movement_id\": 164882712542}",
        "origin": "date_range",
        "status": "enabled",
        "subtype": "release",
        "user_id": 1291581847
    }
]
```

To distinguish each report, you can rely on the `id` and `file_name` parameters, which will indicate the identification number of each report and the configured name for the file download, respectively.