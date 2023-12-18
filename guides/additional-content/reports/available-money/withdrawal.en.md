
# Generating per withdrawal

You can create an Available Balance report automatically every time you transfer money from your Mercado Pago account to a bank account. Set up this option from your Mercado Pago panel or via API.

> WARNING
>
> The Available Balance report will be disabled from March 1st, 2022
>
> You can use the [Releases report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/introduction) to reconcile the transactions that affect the balance available in your account, including your bank withdrawals.

## Generating from the Mercado Pago panel

From the Mercado Pago Reports section, schedule the generation of reports by withdrawal following these steps:

1. From your Mercado Pago account, go to [your Reports](https://www.mercadopago.com.ar/balance/reports) and from there to *Reports*.
1. Click on *Schedule reports* and confirm *Schedule*.
1. Done! Every time you withdraw money, you will have your report available.

Generate your reports every time you want to review a withdrawal

1. From your Mercado Pago account, go to [your Reports](https://www.mercadopago.com.ar/balance/reports) and from there to *Reports*.
1. Go to your [Available Balance report](https://www.mercadopago.com.ar/balance/reports?page=1#!/bank-report) and click on *Create report*.
1. Locate your withdrawals by **time period** and select the withdrawal you want to review.

<span style="margin-left:40px">Done! You will see your report *In preparation*.</span>

> NOTE
>
> Note
>
> Have the [Glossary](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/available-money/glossary) of the Available Balance report on hand to review it when needed or want to review a technical term.


## Generating through API

Update the `execute_after_withdrawal` attribute with the value `true`.

Done! Now you’ll have a report for every withdrawal you make.

[[[
```curl
curl -X PUT \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/config' \
    -d '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "execute_after_withdrawal": true,
        "scheduled": true,
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
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "execute_after_withdrawal": true,
        "scheduled": true,
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
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/bank_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"bank-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": false,
                \\"execute_after_withdrawal\\": true,
                \\"schedule\\": true,
                \\"display_timezone\\": \\"GMT-04\\",
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
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "execute_after_withdrawal": true,
        "scheduled": true,
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
    }'

response = requests.put('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
            "scheduled": true,
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
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config',
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


> WARNING
>
> Important
>
> The generation by withdrawal is another option for generating the Available Balance report. It does not modify the generation that you set up from your Mercado Pago panel or via API. Explore the rest of the documentation to learn how you can generate your reports: from the Mercado Pago panel and through API.