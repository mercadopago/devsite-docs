# Generate your Available Balance Reports

> INDEX
>
> In this page
>
> - [Generation by withdrawal](#bookmark_generation_by_withdrawal)
>
> - [Web generation](#bookmark_web_generation)
>
> - [API generation](#bookmark_api_generation)
>
>    + [manually](#bookmark_manually)
>
>    + [scheduled](#bookmark_scheduled)
>
>
> - [Datasheet](#bookmark_datasheet)
>


## Generation by withdrawal

You can create an Available Money report automatically every time you make a withdrawal from your Mercado Pago account to a bank account. Program this option from your Mercado Pago panel or via API.

From the Reports section in Mercado Pago:

1. [Log in](https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAy2OQQ7DIAwE_-JzlNw59iPIIoagQo2MI1pF_XtN1OOux2NfUDjll9dPI3BA71ZyyAoLtIIaWarPuw1qs6pnpX8sOBEUrKQkHdw1RYn2B9nSVKmcZAyeevhYeFh1n7IusYVDtXW3bWOMtZIE3Llh4jVwXVE2w4RS7man-cCt-y4QsatXwfAEF7F0-v4AxU1qhMMAAAA/user) to Mercado Pago and go to the Available Balance reports.
1. Click on “Program reports” and confirm “Program”.
1. Done! You do not need to write a single line of code.

Vía API:

Update the *`execute_after_withdrawal`* attribute with the *`true`* value. Done! You’ll generate a report for each withdrawal you make.


> NOTE
> 
> Note
>
> Generation by withdrawal is another option for generating the Available Balance report. It does not affect or modify the generation you configure via web or via API. Read on to learn about the other two types of report generation.


[[[
```curl
curl -X PUT \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN' \
    -d '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$data = '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"bank-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": false,
                \\"detailed\\": true,
                \\"execute_after_withdrawal\\": true,
                \\"extended\\": true,
                \\"schedule\\":true,
                \\"frequency\\": {
                    \\"hour\\": 0,
                    \\"type\\": \\"monthly\\",
                    \\"value\\": 1
                }
            }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

data = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {"hour": 0,"type": "monthly","value": 1}

        }'

response = requests.put('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var dataString = '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN',
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


As a response you will receive `HTTP STATUS 200` (Ok):


```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "detailed": true,
    "scheduled": true,
    "execute_after_withdrawal": true,
    "v1": {
        "language": null,
        "generate_bank_report": false
    },
    "extended": true,
    "frequency": {
        "hour": 3,
        "type": "daily",
        "value": {}
    }
}
```


## Web generation

Generate your Available Balance reports from your Mercado Pago dashboard You can only schedule the reports by withdrawal. Follow these steps to do so:

1. [Login](https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAy2OQQ7DIAwE_-JzlNw59iPIIoagQo2MI1pF_XtN1OOux2NfUDjll9dPI3BA71ZyyAoLtIIaWarPuw1qs6pnpX8sOBEUrKQkHdw1RYn2B9nSVKmcZAyeevhYeFh1n7IusYVDtXW3bWOMtZIE3Llh4jVwXVE2w4RS7man-cCt-y4QsatXwfAEF7F0-v4AxU1qhMMAAAA/user) to Mercado Pago and go to Reports from the Reports section.
1. Enter the Available Balance section and click on ‘Generate report’.
1. Search for withdrawals by **time period** and select the withdrawal you want to reconcile.

<span style="margin-left:40px">Done! You will see your report **in preparation.**</span>

You can also schedule the generation of these reports for each automatic withdrawal.

## API generation

Save time scheduling the **frequency of generation** of the Available Balance report as many times as you want, both manually and on a scheduled basis.

### Manually

Generate your reports manually by configuring these three instances:


#### 1. Generation

Post the API by specifying the start and end dates as follows:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report?access_token=ENV_ACCESS_TOKEN' \
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
    'content-type' => 'application/json'
);
$data ='{
            "begin_date": "2019-05-01T00:00:00Z",
            "end_date": "2019-06-01T00:00:00Z"
    }';

$response = Requests::post("https://api.mercadopago.com/v1/account/bank_report?access_token=ENV_ACCESS_TOKEN", $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
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
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = { 'access_token': 'ENV_ACCESS_TOKEN' }

data = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }'

response = requests.post('https://api.mercadopago.com/v1/account/bank_report', headers=headers, params=params, data=data)
```
```node
var request = require('request');

var headers = { 'accept': 'application/json', 'content-type': 'application/json' };

var dataString = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report?access_token=ENV_ACCESS_TOKEN',
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

You will receive an `HTTP STATUS 202` (Accepted) in response, and the report will be generated asynchronously.

#### 2. Search

Check the API this way to see if the report generation was ready:

[[[
```curl
curl -G \
    -H 'accept: application/json' \
    -d 'access_token=ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/list'
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
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/list', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/list?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = { 'accept': 'application/json' }

params = { 'access_token': 'ENV_ACCESS_TOKEN' }

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/list', headers=headers, params=params)
```
```node
var request = require('request');
var headers = { 'accept': 'application/json'};
var dataString = 'access_token=ENV_ACCESS_TOKEN';
var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/list',
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

As a response you will receive `HTTP STATUS 200` (Ok):

```json
[
    {
        "id": 12345678,
        "user_id": USER-ID,
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T00:00:00Z",
        "file_name": "bank-report-USER_ID-2016-01-20-131015.csv",
        "created_from": "manual",
        "date_created": "2016-01-20T10:07:53.000-04:00"
    },
    {
        ...
    }
]
```

#### 3. Download

Using the `file_name` attribute, you can download the report from the following URL:

[[[
```curl
curl -X GET 'https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN'
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
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/:file_name', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.get('https://api.mercadopago.com/v1/account/bank_report/:file_name', params=params)
```
```node
var request = require('request');

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]


As a response you will receive `HTTP STATUS 200` (Ok):

```csv
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
```

### Scheduled

#### 1. Generation

Program the automatic generation of the report using the frequency in the configuration resource. Update the *`scheduled`* attribute in the configuration to *`true`*:


[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN' 
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers, params=params)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN',
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

As a response you will receive `HTTP STATUS 200`(Ok)

```json
{
    "id": 2541818,
    "user_id": "USER-ID",
    "begin_date": "2019-07-01T06:00:00Z",
    "end_date": "2019-08-01T06:00:00Z",
    "created_from": "schedule",
    "status": "pending",
    "report_type": "bank",
    "generation_date": "2019-08-01T06:00:00.000Z",
    "last_modified": "2019-07-24T13:45:33.479-04:00",
    "retries": 0
}
```

Stop the automatic report generation. Update the *`scheduled`* attribute in the configuration to *`false`*:

[[[
```curl
curl -X DELETE \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN' \
  -d '{"user_id": "USER-ID"}'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$data = '{"user_id": "USER-ID" }';
$response = Requests::delete('https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("DELETE");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

String body = "{\\"user_id\\": \\"USER-ID\\" }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
[[[
```curl
curl -X DELETE \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN' \
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::delete('https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("DELETE");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.delete('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers, params=params)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN',
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


As a response you will receive `HTTP STATUS 200` (Ok)

```json
{
    "id": 2538023,
    "begin_date": "2019-07-24T06:00:00Z",
    "created_from": "schedule",
    "end_date": "2019-07-25T06:00:00Z",
    "generation_date": "2019-07-25T02:00:00.000-04:00",
    "last_modified": "2019-07-24T13:50:10.719-04:00",
    "report_type": "bank",
    "retries": 0,
    "status": "deleted",
    "user_id": "USER-ID"
}
```


#### 2. Download

Download the file with this command:


[[[
```curl
curl -X GET 'https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array();
$response = Requests::get('https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
 URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.get('https://api.mercadopago.com/v1/account/bank_report/:file_name', params=params)
```
```node
var request = require('request');

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ENV_ACCESS_TOKEN'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

As a response you will receive `HTTP STATUS 200` (Ok):


```csv
DATE,SOURCE_ID,EXTERNAL_REFERENCE,RECORD_TYPE,DESCRIPTION,NET_CREDIT_AMOUNT,NET_DEBIT_AMOUNT,GROSS_AMOUNT,MP_FEE_AMOUNT,FINANCING_FEE_AMOUNT,SHIPPING_FEE_AMOUNT,TAXES_AMOUNT,COUPON_AMOUNT,INSTALLMENTS,PAYMENT_METHOD
2018-04-17T15:07:53.000-04:00,,,initial_available_balance,,813439.19,0.00,813439.19,0.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:07:53.000-04:00,,,release,withdrawal,0.00,813363.45,-813360.45,-3.00,0.00,0.00,0.00,0.00,1,
2018-04-17T15:11:12.000-04:00,,,release,payment,225.96,0.00,269.00,-43.04,0.00,0.00,0.00,0.00,1,account_money
2018-04-17T15:18:16.000-04:00,,,release,payment,124.32,0.00,148.00,-23.68,0.00,0.00,0.00,0.00,1,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,820.14,0.00,1099.00,-278.86,0.00,0.00,0.00,0.00,6,visa
2018-04-17T15:38:40.000-04:00,,,release,payment,850.00,0.00,850.00,0.00,0.00,0.00,0.00,0.00,1,account_money
```

#### 3. Configuration

| Attribute | Description |
| ---------- | ----------- |
| sftp_info (optional) | Indicates SFTP upload data if needed |
| extended (optional) | Indicates whether commission details are desired |
| include_withdrawal_at_end | Indicates whether to include the withdrawal for which the report is generated at the end of the report |
| detailed | Indicates whether the report should include extra columns such as `financing`, `fee amount`, `mp fee amount`, etc. |
| file_name_prefix | Static prefix of the name of the generated report file |
| scheduled (read_only) | Informative, indicates whether there are already scheduled reports for this user |
| frequency | If using scheduled reports, indicate the frequency (`daily`,`weekly`,`monthly`) |
| value | Applies to type `monthly` (day of the month) or `weekly` (day of the week) |
| hour | Time of day the report should be generated |
| type | Frequency type: `daily`, `weekly`, `monthly` |
| execute_after_withdrawal | Indicates whether a report will be generated automatically after each user's withdrawal of money |

```json
{
	"sftp_info": {
    	    "port": 22,
    	    "username": "username",
    	    "server": "sftp.urlserver.com",
    	    "remote_dir": "/",
    	    "password": "xxxxxxxx"
	},
    "extended": false,
	"file_name_prefix": "bank-report-USER-ID-",
	"detailed": true,
	"include_withdrawal_at_end": false,
	"scheduled": false,
	"execute_after_withdrawal": false,
	"frequency": {
    	    "hour": 0,
    	    "type": "weekly",
    	    "value": "monday"
	}
}
```

##### View configuration

[[[
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'http://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN' \
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::get('http://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
 URL url = new URL("http://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("GET");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests
headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}
params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.get('http://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'http://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN',
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


As a response you will receive `HTTP STATUS 200` (Ok):

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "detailed": true,
    "scheduled": true,
    "execute_after_withdrawal": true,
    "v1": {
        "language": null,
        "generate_bank_report": false
    },
    "extended": true,
    "frequency": {
        "hour": 3,
        "type": "daily",
        "value": {}
    }
}
```

##### Create configuration

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN' \
    -d '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$data = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
    }';
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"bank-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": false,
                \\"detailed\\": true,
                \\"execute_after_withdrawal\\": true,
                \\"extended\\": true,
                \\"schedule\\":true,
                \\"frequency\\": {
                    \\"hour\\": 0,
                    \\"type\\": \\"monthly\\",
                    \\"value\\": 1
                }
                }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

data = '{  
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {"hour": 0,"type": "monthly","value": 1}
        }'

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var dataString = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN',
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


As a response you will receive `HTTP STATUS 201` (Created):

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "detailed": true,
    "scheduled": true,
    "execute_after_withdrawal": true,
    "v1": {
        "language": null,
        "generate_bank_report": false
    },
    "extended": true,
    "frequency": {
        "hour": 3,
        "type": "daily",
        "value": {}
    }
}
```


##### Update configuration

[[[
```curl
curl -X PUT \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN' \
    -d '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$data = '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"bank-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": false,
                \\"detailed\\": true,
                \\"execute_after_withdrawal\\": true,
                \\"extended\\": true,
                \\"schedule\\":true,
                \\"frequency\\": {
                    \\"hour\\": 0,
                    \\"type\\": \\"monthly\\",
                    \\"value\\": 1
                }
            }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

data = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "schedule":true,
            "frequency": {"hour": 0,"type": "monthly","value": 1}

        }'

response = requests.put('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var dataString = '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "schedule":true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ENV_ACCESS_TOKEN',
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


As a response you will receive `HTTP STATUS 200` (Ok):

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "detailed": true,
    "scheduled": true,
    "execute_after_withdrawal": true,
    "v1": {
        "language": null,
        "generate_bank_report": false
    },
    "extended": true,
    "frequency": {
        "hour": 3,
        "type": "daily",
        "value": {}
    }
}
```

##### Initiate scheduled generation

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::post('https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("POST");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers, params=params)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN',
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


As a response you will receive `HTTP STATUS 201` (Created):

```json
{
    "id": 2787882,
    "user_id": USER_ID,
    "begin_date": "2019-08-15T06:00:00Z",
    "end_date": "2019-08-16T06:00:00Z",
    "created_from": "schedule",
    "status": "pending",
    "report_type": "bank",
    "generation_date": "2019-08-16T06:00:00.000Z",
    "last_modified": "2019-08-15T15:40:00.899-04:00",
    "retries": 0
}
```

##### Cancel scheduled generation

[[[
```curl
curl -X DELETE \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN'
```

```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::delete('https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("DELETE");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}
params = {'access_token': 'ENV_ACCESS_TOKEN'}

response = requests.delete('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers, params=params)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ENV_ACCESS_TOKEN',
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


As a response you will receive `HTTP STATUS 200` (Ok):

```json
{
    "id": 2787882,
    "begin_date": "2019-08-15T06:00:00Z",
    "created_from": "schedule",
    "end_date": "2019-08-16T06:00:00Z",
    "generation_date": "2019-08-16T02:00:00.000-04:00",
    "last_modified": "2019-08-15T15:41:53.681-04:00",
    "report_type": "bank",
    "retries": 0,
    "status": "deleted",
    "user_id": USER_ID
}
```


## Datasheet

| Actions and components | Characteristics |
| ------------ |	--------    |
| Scheduling| <br/> -  Daily.<br/><br/>  -  Weekly.<br/><br/> -  Monthly. <br/> <br/> |
| Generation  | <br/> -  Manually.<br/><br/>  -  Automatic by available money withdrawal, total or partial <br/><br/> The three generation instances coexist. That is, even if you schedule the generation of your reports automatically, each time you withdraw money an additional report will be generated.<br/> <br/>  |
| Table Details | <br/> The table details include information generated in at least 1 day. Except in the reports generated by money withdrawal. <br/> <br/>  |
| Filename Format | <br/>When the report is scheduled or manual: <br/> "configurable-prefix-<span style='color:#999999;'>creation-date.csv</span>" <br/> Example:  mystore-28-05-2019.csv <br/><br/> When the report is generated by a money withdrawal: <br/> "configurable-prefix-<span style='color:#999999;'>withdrawal-id-creation-date.csv</span>"<br/> Example: mystore-ID23902138-28-05-2019.csv <br/> <br/> |
| Download Formats | <br/> .csv, .xlsx <br/><br/>Tip: Download the report in .csv to import the data and use it in other applications. Download it in .xlsx to read the information in the spreadsheet tables. <br/> <br/> |
| Configuration available via API | <br/>-  Columns to generate per report<br/> -  File prefix for easy identification <br/> -  Upload by SFTP <br/> -  Column separator (comma or semicolon) <br/> -  Decimal separator (comma or period) <br/> -  Email notification <br/> -  Withdrawal at the end of the report (optional) <br/> <br/> |
| Column order |<br/> Fixed <br/> <br/> |
| File | <br/> The generated reports are saved in your Mercado Pago account <br/> <br/> |
| Maximum period | <br/> Reports with data of up to 60 dias <br/> <br/> |
| Currency | <br/> Local (based in the country where the Mercado Pago account is registered) <br/> <br/> |
| Time zone of the columns | <br/> GMT-4 <br/> <br/> |
| Date selection via API |<br/>  Time zone format: UTC / GMT-0 <br/> <br/> |
| Date selection via Web  | <br/> It must be based on the time zone of the user. <br/>For example, for the registered user account in Brazil, it corresponds to the Sao Paulo time zone.<br/> <br/> |
