# Generate report via API

You can generate your report manually as many times as you want or schedule it according to the desired frequency through our API.

## Set up your reports

### Configurable attributes

Know the fields you can configure to adjust your preferences before you start:

> WARNING
>
> Important
>
> Setting up `frequency` feature does not mean that the report will be generated automatically. The settings will apply only when the automatic scheduling is activated. For more details, please go to the [Schedule your automatic reports](#bookmark_schedule_report_automatically) section.

| Configurable fields | Type | Example | Description |
| --- | --- |
| *`coupon_detailed` (optional)* | Boolean | true | <br/>Includes a column to show the detail of the discount coupons.<br/><br/> |
| `columns` | JSON Array | ```[ { "key": "DATE" }, { "key": "SOURCE_ID" } ]``` | <br/>Field with the details of columns to be included in your report. Find all possible values in the [Glossary section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/account-money/glossary).<br/><br/>|
| `file_name_prefix` | String | "conciliation-settlement-report" | <br/>Prefix that composes the report name once generated and ready for download.<br/><br/> |
| `frequency` | JSON | ```{ "hour": 0, "type": "monthly", "value": 1 }``` | <br/>Indicates the daily, weekly or monthly frequency of scheduled reports.<br/><br/> - `frequency` applies type *monthly* to the day of the month or *weekly* to the day of the week.<br/> - `hour` time of day to generate the report. <br/> - `type` indicates the type of frequency *daily*, *weekly* and *monthly*.<br/><br/> |
| `display_timezone` (optional) | String | "GMT-04" | <br/>This field determines the date and time displayed in the reports. If you do not set a time zone in this field, the system will consider GMT-04 as default. If you choose a time zone which adopts daylight saving time, you will need to adjust it manually when the time changes.<br/><br/> |
| `include_withdraw` | Boolean | true | <br/>This parameter allows to ignore (false) or include (true) money withdraw in the report.<br/><br/> |
| `report_translation` (optional) | String | "es" | <br/>Allows you to change the default language of the column headers in reports that are generated in Excel format (.xlsx). If you have an integration based on this format and configure this feature, we recommend that you verify if it works correctly.<br/><br/> If your integration does not work properly, update it based on the new headers.<br/><br/> |
| *`refund_detailed` (optional)* |  Boolean | true | <br/> Displays the reference code (`external_reference`) of the refund instead of the reference code (`external_reference`) of the payment.<br/><br/> |
| `scheduled` (read_only) | Boolean | true | <br/> Informative field that indicates if there are already scheduled reports in the user account. <br/> `True` The automatic generation is activated <br/> `False` The automatic generation is disabled<br/><br/> |
| *`separator` (optional)* | String | ";" | <br/> Separator that you can use in the .csv file when you don't want the separator to be a comma. <br/><br/> |
| `notification_email_list` (optional) |  Array | ```["example@email.com", "john@example.com"]``` | <br/>Allows you to add a group of e-mail recipients to be notified when a report is ready and available for download. Make sure to include the email linked to your Mercado Pago account so you can be notified as well. <br/><br/> |
| *`sftp_info` (optional)* | JSON | ```{ "server": "sftp.myserver.com", "password": "mypassword", "remote_dir": "/myfolder", "port": 22, "username": "myusername" }``` | <br/> Indicates the uploaded data to SFTP when you need it. <br/><br/> |
| *`shipping_detail` (optional)* | Boolean | true | <br/> Includes the detail of the shipments. <br/> <br/>|
| *`show_chargeback_cancel` (optional)* | Boolean | true | <br/> Includes the detail of cancellations of chargebacks. <br/> <br/>|
| *`show_fee_prevision` (optional)* | Boolean | true | <br/> Includes the details of the fees. <br/> <br/>|

You can configure your reports as needed. Below, we highlight the available API calls so you can manage the configuration of your report and, based on these settings, generate the reports.

### Create a new configuration

Customize your reports by assigning different creation properties by running the following _curl_:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/config' \
    -d '{
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$data = '{
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }';
$response = Requests::post('https://api.mercadopago.com/v1/account/settlement_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                    \\"file_name_prefix\\": \\"settlement-report-USER_ID\\",
                    \\"show_fee_prevision\\": false,
                    \\"show_chargeback_cancel\\": true,
                    \\"coupon_detailed\\": true,
                    \\"shipping_detail\\": true,
                    \\"refund_detailed\\": true,
                    \\"display_timezone\\": \\"GMT-04\\",
                    \\"notification_email_list\\": [
                         \\"example@email.com\\",
                         \\"john@example.com\\",
                    ],
                    \\"frequency\\": {
                        \\"hour\\": 0,
                        \\"type\\": \\"monthly\\",
                        \\"value\\": 1
                    },
                    \\"columns\\": [
                        { \\"key\\": \\"TRANSACTION_DATE\\" },
                        { \\"key\\": \\"SOURCE_ID\\" },
                        { \\"key\\": \\"EXTERNAL_REFERENCE\\" },
                    ]
                }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

data = '{  
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }'

response = requests.post('https://api.mercadopago.com/v1/account/settlement_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/config',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

In the absence of errors, an HTTP status code `201 (Created)` will be issued. The API will respond with a JSON structure, where the properties will represent the configuration you created.

#### Response

```json
{
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "scheduled": false,
    "coupon_detailed": true,
    "include_withdraw": true,
    "shipping_detail": true,
    "refund_detailed": true,
    "display_timezone": "GMT-04",
    "notification_email_list": [
        "example@email.com",
        "john@example.com"
    ],
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    },
    "columns": [
        {
            "key": "TRANSACTION_DATE"
        },
        {
            "key": "SOURCE_ID"
        },
        {
            "key": "EXTERNAL_REFERENCE"
        }
    ]
}
```

### Check settings

Check the current configuration of your reports by executing the following _curl_:

[[[
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/config' \
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$response = Requests::get('https://api.mercadopago.com/v1/account/settlement_report/config', $headers);
```
```java
 URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests
headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

response = requests.get('https://api.mercadopago.com/v1/account/settlement_report/config', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/config',
    headers: headers
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);
```
]]]

In the absence of errors, an `HTTP 200 (Ok)` status code will be issued. The API will respond with a JSON structure whose properties will represent the characteristics of your reports.

#### Response

```json
{
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "scheduled": false,
    "coupon_detailed": true,
    "include_withdraw": true,
    "shipping_detail": true,
    "refund_detailed": true,
    "display_timezone": "GMT-04",
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    },
     "columns": [
        {
            "key": "TRANSACTION_DATE"
        },
        {
            "key": "SOURCE_ID"
        },
        {
            "key": "EXTERNAL_REFERENCE"
        }
    ]
}
```

### Update settings

Update the default settings of your reports when necessary by executing the following _curl_.

> NOTE
>
> Note
>
> If, when updating the configuration, you want to change the `frequency` attribute and have already activated the automatic creation of your reports, follow these steps: <br/><br/> 1. Cancel the scheduled creation of your reports by following the steps described in the section **Disable automatic generation** in [Schedule report automatically.](#bookmark_schedule_report_automatically) <br/> 2. Update the configuration. <br/> 3. Re-enable the automatic creation of your reports by following the steps in the section **Enable automatic generation** in [Schedule report automatically.](#bookmark_schedule_report_automatically)

[[[
```curl
curl -X PUT \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/config' \
    -d '{
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }'
```
```PHP
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$data = '{
        "file_name_prefix": "settlement-report-USER_ID",
        "show_fee_prevision": false,
        "show_chargeback_cancel": true,
        "coupon_detailed": true,
        "include_withdraw": true,
        "shipping_detail": true,
        "refund_detailed": true,
        "display_timezone": "GMT-04",
        "notification_email_list": [
            "example@email.com",
            "john@example.com"
        ],
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        },
         "columns": [
            {
                "key": "TRANSACTION_DATE"
            },
            {
                "key": "SOURCE_ID"
            },
            {
                "key": "EXTERNAL_REFERENCE"
            }
        ]
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/settlement_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"settlement-report-USER_ID\\",
                \\"show_fee_prevision\\": false,
                \\"show_chargeback_cancel\\": true,
                \\"coupon_detailed\\": true,
                \\"include_withdraw\\": true,
                \\"shipping_detail\\": true,
                \\"refund_detailed\\": true,
                \\"display_timezone\\": \\"GMT-04\\",
                \\"notification_email_list\\": [
                    \\"example@email.com\\",
                    \\"john@example.com\\",
                ],
                \\"frequency\\": {
                    \\"hour\\": 0,
                    \\"type\\": \\"monthly\\",
                    \\"value\\": 1
                },
                \\"columns\\": [
                    { \\"key\\": \\"TRANSACTION_DATE\\" },
                    { \\"key\\": \\"SOURCE_ID\\" },
                    { \\"key\\": \\"EXTERNAL_REFERENCE\\" },
                ]
            }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN',
}

data = '{
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "coupon_detailed": true,
            "include_withdraw": true,
            "shipping_detail": true,
            "refund_detailed": true,
            "display_timezone": "GMT-04",
            "notification_email_list": [
                "example@email.com",
                "john@example.com"
            ],
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            },
            "columns": [
                {
                    "key": "TRANSACTION_DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }'

response = requests.put('https://api.mercadopago.com/v1/account/settlement_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
        "file_name_prefix": "settlement-report-USER_ID",
        "show_fee_prevision": false,
        "show_chargeback_cancel": true,
        "coupon_detailed": true,
        "include_withdraw": true,
        "shipping_detail": true,
        "refund_detailed": true,
        "display_timezone": "GMT-04",
        "notification_email_list": [
            "example@email.com",
            "john@example.com"
        ],
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        },
        "columns": [
            {
                "key": "TRANSACTION_DATE"
            },
            {
                "key": "SOURCE_ID"
            },
            {
                "key": "EXTERNAL_REFERENCE"
            }
        ]
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/config',
    method: 'PUT',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

In the absence of errors, an `HTTP 200 (Ok)` status code will be issued. The API will respond with a JSON structure whose properties will represent the configuration you have updated.

#### Response

```json
{
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "scheduled": false,
    "coupon_detailed": true,
    "include_withdraw": true,
    "shipping_detail": true,
    "refund_detailed": true,
    "display_timezone": "GMT-04",
    "notification_email_list": [
        "example@email.com",
        "john@example.com"
    ],
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    },
    "columns": [
        {
            "key": "TRANSACTION_DATE"
        },
        {
            "key": "SOURCE_ID"
        },
        {
            "key": "EXTERNAL_REFERENCE"
        }
    ]
}
```

> NOTE
>
> Note
>
> Have the [Glossary of the Account balance report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/account-money/glossary) on hand to review it when needed or want to review a technical term.

## Manually create report

You have various resources at your disposal that will allow you to interact with your reports manually.

### Create report

Make a POST request to the API to manually generate a new report within a specific date range:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report' \
    -d '{
            "begin_date": "2019-05-01T00:00:00Z",
            "end_date": "2019-06-01T00:00:00Z"
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$data ='{
            "begin_date": "2019-05-01T00:00:00Z",
            "end_date": "2019-06-01T00:00:00Z"
    }';

$response = Requests::post("https://api.mercadopago.com/v1/account/settlement_report", $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");
connection.setDoOutput(true);

String body = "{\\"begin_date\\":\\"2019-05-01T00:00:00Z\\",\\"end_date\\": \\"2019-06-01T00:00:00Z\\"}";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

data = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }'

response = requests.post('https://api.mercadopago.com/v1/account/settlement_report', headers=headers, data=data)
```
```node
var request = require('request');

var headers = { 
    'accept': 'application/json', 
    'content-type': 'application/json', 
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report',
    method: 'POST',
    headers: headers,
    body: dataString
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);
```
]]]

In the absence of errors, an HTTP status code of `202 (Accepted)` will be issued. After that, your report will be generated asynchronously. You will receive, as a response, a JSON structure with relevant information regarding your creation request.

----[mlm, mla, mco, mpe, mlu, mlc]----
An HTTP status response of `203 (Non-Authoritative Information)` indicates that the request occurred as expected; however, it was not possible to create your report, and you will need to request it again with the dates indicated in the system.

------------

### Query report

Consult the API as follows to explore the list of reports you have generated:

[[[
```curl
curl -G \
    -H 'accept: application/json' \
    -d 'access_token=ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/list'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json'
);
$data = array(
    'access_token' => 'ENV_ACCESS_TOKEN'
);
$response = Requests::get('https://api.mercadopago.com/v1/account/settlement_report/list', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/list");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setRequestMethod("GET");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = { 
    'accept': 'application/json',
    'Authorization: Bearer ENV_ACCESS_TOKEN'
}

response = requests.get('https://api.mercadopago.com/v1/account/settlement_report/list', headers=headers)
```
```node
var request = require('request');
var headers = { 'accept': 'application/json'};
var dataString = 'access_token=ENV_ACCESS_TOKEN';
var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/list',
    method: 'GET',
    headers: headers,
    body: dataString
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);
```
]]]

In the absence of errors, an `HTTP 200 (Ok)` status code will be issued. The API will respond with a JSON Array in which you will find the list of all the reports it generated.

#### Response

```json
[
    {
        "id": 12345678,
        "user_id": USER-ID,
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T23:59:59Z",
        "file_name": "settlement-report-USER_ID-2016-01-20-131015.csv",
        "created_from": "manual",
        "date_created": "2016-01-20T10:07:53.000-04:00"
    },
    {
        ...
    }
]
```

### Download report

Using the `file_name` attribute, you can download any of your reports from the following URL:

[[[
```curl
curl -X GET \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/:file_name'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json'
);
$data = array(
    'access_token' => 'ENV_ACCESS_TOKEN'
);
$response = Requests::post('https://api.mercadopago.com/v1/account/settlement_report/:file_name', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/:file_name");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setRequestMethod("GET");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = { 
    'Authorization: Bearer ENV_ACCESS_TOKEN'
}

response = requests.get('https://api.mercadopago.com/v1/account/settlement_report/:file_name', headers=headers)
```
```node
var request = require('request');


var headers = { 
    'Authorization: Bearer ENV_ACCESS_TOKEN',
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/:file_name'
    method: 'GET',
    headers: headers,
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

In the absence of errors, an HTTP status code `200 (Ok)` will be issued. In the API response, you will have the requested report file available for download.

#### Response

```csv
EXTERNAL_REFERENCE;SOURCE_ID;USER_ID;PAYMENT_METHOD_TYPE;PAYMENT_METHOD;SITE;TRANSACTION_TYPE;TRANSACTION_AMOUNT;TRANSACTION_CURRENCY;TRANSACTION_DATE;FEE_AMOUNT;SETTLEMENT_NET_AMOUNT;SETTLEMENT_CURRENCY;SETTLEMENT_DATE;REAL_AMOUNT;COUPON_AMOUNT;METADATA;MKP_FEE_AMOUNT;FINANCING_FEE_AMOUNT;SHIPPING_FEE_AMOUNT;TAXES_AMOUNT;INSTALLMENTS;ORDER_ID;SHIPPING_ID;SHIPMENT_MODE;PACK_ID
2112818453;5067634447;123456789;account_money;account_money;MLB;SETTLEMENT;79.00;BRL;2019-08-11T22:20:19.000-04:00;-8.85;70.15;BRL;2019-08-11T22:20:19.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112818453;28067695419;me1;2E+15
2112815686;5067535844;123456789;account_money;account_money;MLB;SETTLEMENT;819.00;BRL;2019-08-11T22:15:32.000-04:00;-91.73;727.27;BRL;2019-08-11T22:15:32.000-04:00;727.27;0.00;[{}];-91.73;0.00;0.00;0.00;1;2112815686;28067772278;me1;2E+15
2112811587;5067365727;123456789;account_money;account_money;MLB;SETTLEMENT;769.00;BRL;2019-08-11T22:11:13.000-04:00;-86.13;682.87;BRL;2019-08-11T22:11:13.000-04:00;682.87;0.00;[{}];-86.13;0.00;0.00;0.00;1;2112811587;28067612908;me1;2E+15
2112784039;5067781790;123456789;credit_card;master;MLB;SETTLEMENT;199.00;BRL;2019-08-11T21:38:18.000-04:00;-22.29;176.71;BRL;2019-08-11T21:38:24.000-04:00;176.71;0.00;[{}];-22.29;0.00;0.00;0.00;1;2112784039;;;
2112755183;5067186172;123456789;credit_card;master;MLB;SETTLEMENT;79.00;BRL;2019-08-11T21:10:20.000-04:00;-8.85;70.15;BRL;2019-08-11T21:10:27.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112755183;;;
2112747018;5067323570;123456789;credit_card;visa;MLB;SETTLEMENT;3109.00;BRL;2019-08-11T21:00:11.000-04:00;-348.21;2760.79;BRL;2019-08-11T21:00:18.000-04:00;2760.79;0.00;[{}];-348.21;0.00;0.00;0.00;12;2112747018;;;
2112742918;5067175589;123456789;account_money;account_money;MLB;SETTLEMENT;154.00;BRL;2019-08-11T20:57:05.000-04:00;-17.25;136.75;BRL;2019-08-11T20:57:05.000-04:00;136.75;0.00;[{}];-17.25;0.00;0.00;0.00;1;2112742918;28067593333;me1;2E+15
2112736997;5067585992;123456789;digital_currency;consumer_credits;MLB;SETTLEMENT;94.00;BRL;2019-08-11T20:51:12.000-04:00;-10.53;83.47;BRL;2019-08-11T20:51:18.000-04:00;83.47;0.00;[{}];-10.53;0.00;0.00;0.00;1;2112736997;;;
2112736008;5067314803;123456789;digital_currency;consumer_credits;MLB;SETTLEMENT;79.00;BRL;2019-08-11T20:48:08.000-04:00;-8.85;70.15;BRL;2019-08-11T20:48:15.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112736008;;;
2112729919;5067463621;123456789;credit_card;master;MLB;SETTLEMENT;79.00;BRL;2019-08-11T20:41:46.000-04:00;-8.85;70.15;BRL;2019-08-11T20:41:55.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112729919;;;
```

## Schedule report automatically

Create your reports on a scheduled basis by configuring two instances: activation and deactivation.

### Activate automatic generation

Schedule the automatic generation of the report using the frequency assigned during the configuration of your reports. When using this service, the `scheduled` property of your configuration will be automatically updated to `true`:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/schedule'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$response = Requests::post('https://api.mercadopago.com/v1/account/settlement_report/schedule', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/schedule");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

response = requests.post('https://api.mercadopago.com/v1/account/settlement_report/schedule', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/schedule',
    method: 'POST',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

In the absence of errors, an HTTP status code `200 (OK)` will be issued. The API will respond with a JSON structure in which you will find information associated with the scheduled report.

#### Response

```json
{
    "id": 2541818,
    "user_id": "USER-ID",
    "begin_date": "2019-07-01T06:00:00Z",
    "end_date": "2019-08-01T05:59:59Z",
    "created_from": "schedule",
    "status": "pending",
    "report_type": "settlement",
    "generation_date": "2019-08-01T06:00:00.000Z",
    "last_modified": "2019-07-24T13:45:33.479-04:00",
    "retries": 0
}
```

### Disable automatic generation

You can disable the automatic generation of your reports at any time when needed. When using this service, the `scheduled` property in your configuration will be automatically updated to `false`.

[[[
```curl
curl -X DELETE \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/settlement_report/schedule'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$response = Requests::delete('https://api.mercadopago.com/v1/account/settlement_report/schedule', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/settlement_report/schedule");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("DELETE");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

response = requests.delete('https://api.mercadopago.com/v1/account/settlement_report/schedule', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/settlement_report/schedule',
    method: 'DELETE',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

In the absence of errors, an HTTP status code `200 (OK)` will be issued. The API will respond with a JSON structure in which you will find information associated with the report you deactivated.

#### Response

```json
{
    "id": 2787882,
    "begin_date": "2019-08-15T06:00:00Z",
    "created_from": "schedule",
    "end_date": "2019-08-16T05:59:59Z",
    "generation_date": "2019-08-16T02:00:00.000-04:00",
    "last_modified": "2019-08-15T15:41:53.681-04:00",
    "report_type": "settlement",
    "retries": 0,
    "status": "deleted",
    "user_id": USER_ID
}
```