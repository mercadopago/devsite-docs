# Conciliation reports

Mercado Pago provides reports to conciliate your operations with your internal systems. We have two reports for different needs.

**Account money report (Settlement Report)**

It contains all payment events (approved, refund, mediation and chargebacks) that have affected the balance of your Mercado Pago account for a specific period.

**Available money report (Bank Report)**

It contains all payments that were released and are ready to be withdrawn to the bank account. The report can be requested for a specific period or every time a withdrawal is made.

This report is usually used to conciliate a withdrawal to a bank account. Therefore, for each withdrawal, a Bank Report is generated specifying the corresponding transactions.

## How to use them?

Both reports can be generated manually (indicating a specific date range) or they can be scheduled.

Check out the [glossary of reports](https://www.mercadopago.com.ar/ayuda/glosario-reporte-conciliacion_2118).

### Manual use

#### Available money report (Bank Report)

##### 1. In order to generate a report:
Make a POST to the API specifying the start and end dates as follows:

```php
<?php

$request =

$mp = new MP("ACCESS_TOKEN");

$request = array(
        "uri" => "/v1/account/bank_report",
        "data" => array(
            "begin_date" => "2015-05-01T00:00:00Z",
            "end_date" => "2015-06-01T00:00:00Z"
        )
    );

$mp->post($request);

?>
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report?access_token=ACCESS_TOKEN' \
    -d '{
            "begin_date": "2015-05-01T00:00:00Z",
            "end_date": "2015-06-01T00:00:00Z"
    }'
 ```

You will receive a `HTTP STATUS 202 (Accepted)` as response, and the report will be generated asynchronously.

##### 2. Search:
In order to check whether the reported has already been generated, you must check the API as follows:

```php
<?php

// SDK Version >= 0.5.0

$mp = new MP("ACCESS_TOKEN");

$request = array(
        "uri" => "/v1/account/bank_report/list"
    );

$mp->get($request);

?>
```
```curl
curl -G \
    -H 'accept: application/json' \
    -d 'access_token=ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/list'
```

You will receive the following response:

```json
[
    {
        "id": 1234,
        "user_id": 130379930,
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T00:00:00Z",
        "file_name": "BK-TEST-1234567890123.csv",
        "created_from": "manual",
        "date_created": "2016-01-20T10:07:53.000-04:00"
    },
    {
    	...
    }
]
```

##### 3. Download
Using the `file_name` attribute, you can download the report from the following URL:

	https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ACCESS_TOKEN


#### Account money report (Settlement Report)

##### 1. . In order to generate a report:
Make a POST to the API specifying the start and end dates as follows:

```php
<?php

// SDK Version >= 0.5.0

$mp = new MP("ACCESS_TOKEN");

$request = array(
        "uri" => "/v1/account/settlement_report",
        "data" => array(
            "begin_date" => "2015-05-01T00:00:00Z",
            "end_date" => "2015-06-01T00:00:00Z"
        )
    );

$mp->post($request);

?>
```

You will receive a `HTTP STATUS 202 (Accepted)` as response, and the report will be generated asynchronously.

##### 2. Search:
In order to check whether the report has already been generated, you must check the API as follows:

```php
<?php

// SDK Version >= 0.5.0

$mp = new MP("ACCESS_TOKEN");

$request = array(
        "uri" => "/v1/account/settlement_report/list"
    );

$mp->get($request);

?>
```

You will receive the following response:

```json
[
    {
        "id": 1234,
        "user_id": 130379930,
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T00:00:00Z",
        "file_name": "SR-TEST-1234567890123.csv",
        "created_from": "manual",
        "date_created": "2016-01-20T10:07:53.000-04:00"
    },
    {
    	...
    }
]
```

##### 3. Download

Using the `file_name` attribute, you can download the report from the following URL:

	https://api.mercadopago.com/v1/account/settlement_report/:file_name?access_token=ACCESS_TOKEN


### Scheduled use

Conciliation reports can also be generated automatically.

### Available money  (Bank Report)

##### 1. In order to generate a report:

Schedule the automatic generation of the report using the frequency in the configuration resource. Update the `scheduled` attribute in the configuration to `true`:

	POST /v1/account/bank_report/schedule

Interrupt the automatic generation of the report. Update the `scheduled` attribute in the configuration to `false`:

	DELETE /v1/account/bank_report/schedule

### 2. Download

Download the specified file

	GET /v1/account/bank_report/:file_name

### Account money report (Settlement Report)

##### 1. In order to generate a report:

Schedule the automatic generation of the report using the frequency in the configuration resource. Update the `scheduled` attribute in the configuration to `true`:

	POST /v1/account/settlement_report/schedule

Interrupt the automatic generation of the report. Update the `scheduled` attribute in the configuration to `false`:

	DELETE /v1/account/settlement_report/schedule

### 2. Download

Download the specified file: 

	GET /v1/account/settlement_report/:file_name
