# Generate report via API

Generate the Releases Report manually as many times as you want or schedule it according to the desired frequency through our API.

## Configure the Releases Report

### Configurable attributes

Check the fields you can configure to adjust your preferences before starting:

> WARNING
>
> Important
>
> Configuring the `frequency` attribute does not mean that the report will be generated automatically. The configuration will only be applied when automatic scheduling is activated. For more information, see the section [Schedule report automatically.](#bookmark_schedule_report_automatically)

| Configurable field        | Type       | Example                                                                                                                | Description                                                                                                                                                                                                                                                                                                      |
|---------------------------|------------|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `columns`                  | JSON Array | ``` [{"key": "DATE"}, {"key": "SOURCE_ID"}] ```                                                                       | Field with details of the columns to be included in your report. Find all possible values in the [Glossary](/developers/en/docs/checkout-pro/additional-content/reports/released-money/report-use).                                                                                                                                                                              |
| `file_name_prefix`         | String     | "conciliation-settlement-report"                                                                                      | Prefix that composes the name of the generated and ready-to-download report.                                                                                                                                                                                                                                    |
| `frequency`                | JSON       | ``` {"hour": 0, "type": "monthly", "value": 1} ```                                                                    | Indicates the daily, weekly, or monthly frequency of scheduled reports.<br> - `frequency`: applies type _monthly_ to the day of the month or _weekly_ to the day of the week.<br> - `hour`: the time of day the report should be generated.<br> - `type`: indicates the type of frequency: _daily_, _weekly_, or _monthly_.                                          |
| `sftp_info` (optional)    | JSON       | ``` {"server": "sftp.myserver.com", "password": "mypassword", "remote_dir": "/myfolder", "port": 22, "username": "myusername"} ```                                                  | Provides the necessary connection data to access the server.<br> - `server`: URL or IP address (public) of the server.<br> - `password`: password of the user with which we will establish the connection.<br> - `remote_dir`: folder where we will deposit your reports.<br> - `port`: port used to establish the connection.<br> - `username`: user with which we will authenticate on your server.<br>          |
| `separator` (optional)    | String     | ";"                                                                                                                    | Alternative separator for _csv_ files when a character other than a comma (',') is desired.                                                                                                                                                                                                                   |
| `display_timezone` (optional)| String   | "GMT-04"                                                                                                               | This field determines the date and time shown in the reports. If you do not configure a time zone for this field, the system will consider GMT-04 as the default time zone. If you choose a time zone that observes daylight saving time, you will need to manually adjust it when the time changes.                   |
| `report_translation` (optional)| String  | "es"                                                                                                                  | Allows changing the default language of column headers. If enabled, it is recommended to check if Excel file (_xlsx_) integrations are working correctly to allow automatic reconciliation. If the integration is not working correctly, please update it using the new headers as a reference. Supported languages: en (English), es (Neutral Spanish), pt (Portuguese).   |
| `notification_email_list` (optional)| Array| ``` ["example@email.com", "john@example.com"] ```                                                                    | Allows adding a group of email recipients to receive a notification when a report is ready and available for download. Make sure to include the email associated with your Mercado Pago account so you also receive the notifications.                                                                                 |
| `refund_detailed` (optional)| Boolean   | true                                                                                                                   | Displays the reference code (`external_reference`) of the refund instead of the payment reference code (`external_reference`).                                                                                                                                                                                 |
| `include_withdrawal` (optional)| Boolean | true                                                                                                                   | Includes money withdrawals in the report.                                                                                                                                                                                                                                                                     |
| `coupon_detailed` (optional)| Boolean   | true                                                                                                                   | Includes a column to show discount coupon details.                                                                                                                                                                                                                                                             |
| `scheduled` (read_only)    | Boolean    | true                                                                                                                   | Informative field indicating whether there are already scheduled reports in the user's account.<br> - `True`: Automatic generation is enabled.<br> - `False`: Automatic generation is disabled.                                                                                                                                                                               |
| `check_available_balance` (optional)| Boolean| true                                                                                                                  | Balance before and after making a withdrawal, explaining the account balance. (This setting is purely informational. It should not be considered for proof of balance and/or account balance).                                                                                                                  |
| `compensate_detail` (optional)| Boolean | true                                                                                                                  | Blocking and unblocking of money that offset each other and do not affect the final balance. Helps understand how the final report balance is made, in a chronological format (recommended setting if you have a large volume of transactions).                                                                       |

You can configure your reports as needed. Below, we highlight the available API calls so you can manage the configuration of your report and, based on these settings, generate the reports.

> Have the [Glossary of the Releases Report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/glossary) on hand for reference whenever needed or to check any technical terms.

### Create a new configuration

Customize your reports by assigning different creation properties by running the following _curl_:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/release_report/config' \
    -d '{
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
                    "key": "DATE"
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
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
    }';
$response = Requests::post('https://api.mercadopago.com/v1/account/release_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"release-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": true,
                \\"execute_after_withdrawal\\": false,
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
                    { \\"key\\": \\"DATE\\" },
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
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }'

response = requests.post('https://api.mercadopago.com/v1/account/release_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
                    "key": "DATE"
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
    url: 'https://api.mercadopago.com/v1/account/release_report/config',
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
    "file_name_prefix": "release-report-USER_ID",
    "include_withdrawal_at_end": true,
    "scheduled": false,
    "execute_after_withdrawal": false,
    "separator": ",",
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
            "key": "DATE"
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
    'https://api.mercadopago.com/v1/account/release_report/config' \
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
$response = Requests::get('https://api.mercadopago.com/v1/account/release_report/config', $headers);
```
```java
 URL url = new URL("https://api.mercadopago.com/v1/account/release_report/config");

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

response = requests.get('https://api.mercadopago.com/v1/account/release_report/config', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/release_report/config',
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
    "file_name_prefix": "release-report-USER_ID",
    "include_withdrawal_at_end": true,
    "scheduled": false,
    "execute_after_withdrawal": false,
    "separator": ";",
    "display_timezone": "GMT-04",
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
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
    'https://api.mercadopago.com/v1/account/release_report/config' \
    -d '{
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
                    "key": "DATE"
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
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/release_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"release-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": true,
                \\"execute_after_withdrawal\\": false,
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
                    { \\"key\\": \\"DATE\\" },
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
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": false,
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
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                }
            ]
        }'

response = requests.put('https://api.mercadopago.com/v1/account/release_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
            "file_name_prefix": "release-report-USER_ID",
            "include_withdrawal_at_end": true,
            "execute_after_withdrawal": falsre,
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
                    "key": "DATE"
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
    url: 'https://api.mercadopago.com/v1/account/release_report/config',
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
    "file_name_prefix": "release-report-USER_ID",
    "include_withdrawal_at_end": true,
    "scheduled": false,
    "execute_after_withdrawal": false,
    "separator": ",",
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
            "key": "DATE"
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
    'https://api.mercadopago.com/v1/account/release_report' \
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

$response = Requests::post("https://api.mercadopago.com/v1/account/release_report", $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report");

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

response = requests.post('https://api.mercadopago.com/v1/account/release_report', headers=headers, data=data)
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
    url: 'https://api.mercadopago.com/v1/account/release_report',
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
    'https://api.mercadopago.com/v1/account/release_report/list'
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
$response = Requests::post('https://api.mercadopago.com/v1/account/release_report/list', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/list");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = { 
    'accept': 'application/json', 
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

response = requests.post('https://api.mercadopago.com/v1/account/release_report/list', headers=headers)
```
```node
var request = require('request');
var headers = { 'accept': 'application/json'};
var dataString = 'access_token=ENV_ACCESS_TOKEN';
var options = {
    url: 'https://api.mercadopago.com/v1/account/release_report/list',
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

In the absence of errors, an `HTTP 200 (Ok)` status code will be issued. The API will respond with a JSON Array in which you will find the list of all the reports it generated.

#### Response

```json
[
    {
        "id": 12345678,
        "user_id": "USER_ID",
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T23:59:59Z",
        "file_name": "release-report-USER_ID-2016-01-20-131015.csv",
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
    'https://api.mercadopago.com/v1/account/release_report/:file_name'
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
$response = Requests::post('https://api.mercadopago.com/v1/account/release_report/:file_name', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/:file_name");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

response = requests.get('https://api.mercadopago.com/v1/account/release_report/:file_name', headers=headers)
```
```node
var request = require('request');

var headers = {
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};


var options = {
    url: 'https://api.mercadopago.com/v1/account/release_report/:file_name',
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
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
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
    'https://api.mercadopago.com/v1/account/release_report/schedule'
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
$response = Requests::post('https://api.mercadopago.com/v1/account/release_report/schedule', $headers);
```

```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/schedule");

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

response = requests.post('https://api.mercadopago.com/v1/account/release_report/schedule', headers=headers)
```

```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/release_report/schedule',
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
    "report_type": "release",
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
    'https://api.mercadopago.com/v1/account/release_report/schedule'
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
$response = Requests::delete('https://api.mercadopago.com/v1/account/release_report/schedule', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/release_report/schedule");

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

response = requests.delete('https://api.mercadopago.com/v1/account/release_report/schedule', headers=headers)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/release_report/schedule',
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
    "report_type": "release",
    "retries": 0,
    "status": "deleted",
    "user_id": USER_ID
}
```