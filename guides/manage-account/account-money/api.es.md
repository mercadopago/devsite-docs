
# Generación por API

> INDEX
>
> En esta página
>
> [Configurar tus reportes](#bookmark_configurar_tus_reportes)
>
> [Atributos configurables](#bookmark_atributos_configurables)
>
> [Generar de forma manual](#bookmark_generar_de_forma_manual)
>
> [Generar de forma programada](#bookmark_generar_de_forma_programada)


Gana tiempo y automatiza la **frecuencia de generación** del reporte de Dinero Disponible las veces que quieras, tanto de forma manual como de forma programada.


## Configurar tus reportes

Ejecuta el curl que necesites para consultar, crear y actualizar tus reportes.


### Consultar configuración

Consulta la configuración de tus reportes por API de esta forma:

[[[
```PHP
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::get('http://api.mercadopago.com/v1/account/settlement_report/config?access_token=ENV_ACCESS_TOKEN', $headers);
```
]]]

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```json
{
    "include_withdraw": true,
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "detailed": true,
    "scheduled": false,
    "coupon_detailed": true,
    "custom_values_unquote": false,
    "shipping_detail": true,
    "refund_detailed": true,
    "extended": false,
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    }
}
```

### Crear configuración

Crea tus preferencias de generación por API para exportar columnas, nombrar a tus archivos y configurar otros ajustes:

[[[
```PHP
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$data = '{
            "include_withdraw": true,
            "file_name_prefix": "settlement-report-USER_ID",
            "show_fee_prevision": false,
            "show_chargeback_cancel": true,
            "detailed": true,
            "scheduled": false,
            "coupon_detailed": true,
            "custom_values_unquote": false,
            "shipping_detail": true,
            "refund_detailed": true,
            "extended": false,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
        }';
$response = Requests::post('https://api.mercadopago.com/v1/account/settlement_report/config?access_token=ENV_ACCESS_TOKEN', $headers, $data);
```
]]]

Recibirás como respuesta un `HTTP STATUS 201 (Created)`

```json
{
    "include_withdraw": true,
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "detailed": true,
    "scheduled": false,
    "coupon_detailed": true,
    "custom_values_unquote": false,
    "shipping_detail": true,
    "refund_detailed": true,
    "extended": false,
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    }
}
```

### Actualizar configuración

Cuando necesites actualizar tu configuración, puedes ajustar los siguientes atributos:


[[[
```PHP
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$data = '{
        "include_withdraw": true,
        "file_name_prefix": "settlement-report-USER_ID",
        "show_fee_prevision": false,
        "show_chargeback_cancel": true,
        "detailed": true,
        "scheduled": false,
        "coupon_detailed": true,
        "custom_values_unquote": false,
        "shipping_detail": true,
        "refund_detailed": true,
        "extended": false,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/settlement_report/config?access_token=ENV_ACCESS_TOKEN', $headers, $data);
```
]]]


Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```json
{
    "include_withdraw": true,
    "file_name_prefix": "settlement-report-USER_ID",
    "show_fee_prevision": false,
    "show_chargeback_cancel": true,
    "detailed": true,
    "scheduled": false,
    "coupon_detailed": true,
    "custom_values_unquote": false,
    "shipping_detail": true,
    "refund_detailed": true,
    "extended": false,
    "frequency": {
        "hour": 0,
        "type": "monthly",
        "value": 1
    }
}
```


## Atributos configurables

Conoce los campos que puedes configurar para ajustar tus preferencias:


| Campos configurables | Descripción |
| ----------| ---------------------- |
| `sftp_info` (opcional) | <br/>Indica los datos de subida a SFTP cuando lo necesites.<br/><br/> |
| `separator` (opcional) | <br/>Separador que puedes usar en el archivo .csv cuando no quieras que el separador sea una coma. <br/><br/> |
| `file_name_prefix` | <br/>Prefijo que compone el nombre del reporte una vez generado y listo para descargar.<br/><br/> |
| `frequency` | <br/>Indica la frecuencia diaria, semanal o mensual de los reportes programados.<br/><br/> - `frequency` aplica type *monthly* al día del mes o *weekly* el día de la semana<br/> - `hour` hora del día en la que generar el reporte <br/> - `type` indica el tipo de frecuencia *daily* (diaria), *weekly* (semanal) y *monthly* (mensual).<br/><br/> |
| `scheduled` (read_only) | <br/>Campo informativo que indica si ya existen reportes programados en la cuenta de usuario.<br/><br/> |
| `refund_detailed` (opcional) | <br/>Muestra el código de referencia (external_reference) del reembolso en vez del código de referencia (external_reference) del pago.<br/><br/> |
| `detailed` | <br/>Incluye columnas con información más detallada sobre tus operaciones:<br/> - Impuesto de mercado pago (`mkp_fee_amount`)<br/> - Impuesto financiero (`financing_fee_amount`)<br/> - Impuesto de envio (`shipping_fee_amount`)<br/> - Impuestos (`taxes_amount`)<br/> - Cuotas (`installments`)<br/> <br/><br/>|
| `extended` (opcional) | <br/>Incluye el detalle de las comisiones en el reporte:<br/> - Detalle del impuesto (`tax_detail`)<br/> - Detalle del impuesto (`tax_amount_telco`)<br/> - Id del punto de venta (`pos_id`)<br/> - Id de la sucursal (`store_id`)<br/> - Nombre de la sucursal (`store_name`)<br/> - Id externo del punto de venta (`external_pos_id`)<br/> - Nombre del punto de venta (`pos_name`)<br/> - Id externo de la sucursal (`external_store_id`)<br/> <br/><br/> |
| `show_fee_prevision` (opcional) |   <br/> Incluye el detalle de las comisiones  <br/> <br/>|
| `show_chargeback_cancel` (opcional) |  <br/> Incluye el detalle de las cancelaciones de los contracargos <br/> <br/>|
| `shipping_detail` (opcional) |  <br/>  Incluye el detalle de los envios <br/> <br/>|
| `include_withdrawal` (opcional) | <br/>Incluye los retiros de dinero en el reporte.<br/><br/> |
| `coupon_detailed` (opcional) | <br/>Suma una columna para mostrar el detalle de los cupones de descuento.<br/><br/> |

> NOTE
>
> Nota
>
> Ten a mano el [Glosario](https://www.mercadopago.com/developers/es/guides/manage-account/available-money/glossary/) del reporte de Dinero Disponible para revisarlo cuando lo necesites o quieras consultar algún término técnico.



## Generar de forma manual

Genera tus reportes de forma manual configurando tres instancias: generación, búsqueda y descarga.

### 1. Generación

Haz el POST a la API especificando las fechas de inicio y fin de la siguiente manera:

[[[
```PHP
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

$response = Requests::post("https://api.mercadopago.com/v1/account/settlement_report?access_token=ENV_ACCESS_TOKEN", $headers, $data);
```
]]]

Recibirás como respuesta un `HTTP STATUS 202 (Accepted)`, y el reporte se generará de manera asincrónica.

### 2. Búsqueda

Consulta la API para ver si la generación de reportes quedó lista:

[[[
```PHP
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json'
);
$data = array(
    'access_token' => 'ENV_ACCESS_TOKEN'
);
$response = Requests::post('https://api.mercadopago.com/v1/account/settlement_report/list', $headers, $data);
```
]]]

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```json
[
    {
        "id": 12345678,
        "user_id": USER-ID,
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T00:00:00Z",
        "file_name": "settlement-report-USER_ID-2016-01-20-131015.csv",
        "created_from": "manual",
        "date_created": "2016-01-20T10:07:53.000-04:00"
    },
    {
        ...
    }
]
```

### 3. Descarga

Utilizando el atributo `file_name`, puedes descargar el reporte desde la siguiente URL:

[[[
```PHP
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
]]]


Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```csv
EXTERNAL_REFERENCE;SOURCE_ID;USER_ID;PAYMENT_METHOD_TYPE;PAYMENT_METHOD;SITE;TRANSACTION_TYPE;TRANSACTION_AMOUNT;TRANSACTION_CURRENCY;TRANSACTION_DATE;FEE_AMOUNT;SETTLEMENT_NET_AMOUNT;SETTLEMENT_CURRENCY;SETTLEMENT_DATE;REAL_AMOUNT;COUPON_AMOUNT;METADATA;MKP_FEE_AMOUNT;FINANCING_FEE_AMOUNT;SHIPPING_FEE_AMOUNT;TAXES_AMOUNT;INSTALLMENTS;ORDER_ID;SHIPPING_ID;SHIPMENT_MODE;PACK_ID
2112818453;5067634447;242175264;account_money;account_money;MLB;SETTLEMENT;79.00;BRL;2019-08-11T22:20:19.000-04:00;-8.85;70.15;BRL;2019-08-11T22:20:19.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112818453;28067695419;me1;2E+15
2112815686;5067535844;242175264;account_money;account_money;MLB;SETTLEMENT;819.00;BRL;2019-08-11T22:15:32.000-04:00;-91.73;727.27;BRL;2019-08-11T22:15:32.000-04:00;727.27;0.00;[{}];-91.73;0.00;0.00;0.00;1;2112815686;28067772278;me1;2E+15
2112811587;5067365727;242175264;account_money;account_money;MLB;SETTLEMENT;769.00;BRL;2019-08-11T22:11:13.000-04:00;-86.13;682.87;BRL;2019-08-11T22:11:13.000-04:00;682.87;0.00;[{}];-86.13;0.00;0.00;0.00;1;2112811587;28067612908;me1;2E+15
2112784039;5067781790;242175264;credit_card;master;MLB;SETTLEMENT;199.00;BRL;2019-08-11T21:38:18.000-04:00;-22.29;176.71;BRL;2019-08-11T21:38:24.000-04:00;176.71;0.00;[{}];-22.29;0.00;0.00;0.00;1;2112784039;;;
2112755183;5067186172;242175264;credit_card;master;MLB;SETTLEMENT;79.00;BRL;2019-08-11T21:10:20.000-04:00;-8.85;70.15;BRL;2019-08-11T21:10:27.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112755183;;;
2112747018;5067323570;242175264;credit_card;visa;MLB;SETTLEMENT;3109.00;BRL;2019-08-11T21:00:11.000-04:00;-348.21;2760.79;BRL;2019-08-11T21:00:18.000-04:00;2760.79;0.00;[{}];-348.21;0.00;0.00;0.00;12;2112747018;;;
2112742918;5067175589;242175264;account_money;account_money;MLB;SETTLEMENT;154.00;BRL;2019-08-11T20:57:05.000-04:00;-17.25;136.75;BRL;2019-08-11T20:57:05.000-04:00;136.75;0.00;[{}];-17.25;0.00;0.00;0.00;1;2112742918;28067593333;me1;2E+15
2112736997;5067585992;242175264;digital_currency;consumer_credits;MLB;SETTLEMENT;94.00;BRL;2019-08-11T20:51:12.000-04:00;-10.53;83.47;BRL;2019-08-11T20:51:18.000-04:00;83.47;0.00;[{}];-10.53;0.00;0.00;0.00;1;2112736997;;;
2112736008;5067314803;242175264;digital_currency;consumer_credits;MLB;SETTLEMENT;79.00;BRL;2019-08-11T20:48:08.000-04:00;-8.85;70.15;BRL;2019-08-11T20:48:15.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112736008;;;
2112729919;5067463621;242175264;credit_card;master;MLB;SETTLEMENT;79.00;BRL;2019-08-11T20:41:46.000-04:00;-8.85;70.15;BRL;2019-08-11T20:41:55.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112729919;;;
```


## Generar de forma programada

Genera tus reportes de forma programada configurando tres instancias: generación, configuración y descarga.

### 1. Generación

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo *`scheduled`* en la configuración a *`true`*:

[[[
```PHP
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::post('https://api.mercadopago.com/v1/account/settlement_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers);
```
]]]

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```json
{
    "id": 2541818,
    "user_id": "USER-ID",
    "begin_date": "2019-07-01T06:00:00Z",
    "end_date": "2019-08-01T06:00:00Z",
    "created_from": "schedule",
    "status": "pending",
    "report_type": "settlement",
    "generation_date": "2019-08-01T06:00:00.000Z",
    "last_modified": "2019-07-24T13:45:33.479-04:00",
    "retries": 0
}
```


### 2. Configuración

Ejecuta el curl que necesites para cancelar la generación programada de tus reportes.


[[[
```PHP
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json'
);
$response = Requests::delete('https://api.mercadopago.com/v1/account/settlement_report/schedule?access_token=ENV_ACCESS_TOKEN', $headers);
```
]]]

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```json
{
    "id": 2787882,
    "begin_date": "2019-08-15T06:00:00Z",
    "created_from": "schedule",
    "end_date": "2019-08-16T06:00:00Z",
    "generation_date": "2019-08-16T02:00:00.000-04:00",
    "last_modified": "2019-08-15T15:41:53.681-04:00",
    "report_type": "settlement",
    "retries": 0,
    "status": "deleted",
    "user_id": USER_ID
}
```

### 3. Descarga

Descarga el archivo con este comando:


[[[
```PHP
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array();
$response = Requests::get('https://api.mercadopago.com/v1/account/settlement_report/:file_name?access_token=ENV_ACCESS_TOKEN', $headers);
```
]]]

Recibirás como respuesta un `HTTP STATUS 200 (Ok)`

```csv
EXTERNAL_REFERENCE;SOURCE_ID;USER_ID;PAYMENT_METHOD_TYPE;PAYMENT_METHOD;SITE;TRANSACTION_TYPE;TRANSACTION_AMOUNT;TRANSACTION_CURRENCY;TRANSACTION_DATE;FEE_AMOUNT;SETTLEMENT_NET_AMOUNT;SETTLEMENT_CURRENCY;SETTLEMENT_DATE;REAL_AMOUNT;COUPON_AMOUNT;METADATA;MKP_FEE_AMOUNT;FINANCING_FEE_AMOUNT;SHIPPING_FEE_AMOUNT;TAXES_AMOUNT;INSTALLMENTS;ORDER_ID;SHIPPING_ID;SHIPMENT_MODE;PACK_ID
2112818453;5067634447;242175264;account_money;account_money;MLB;SETTLEMENT;79.00;BRL;2019-08-11T22:20:19.000-04:00;-8.85;70.15;BRL;2019-08-11T22:20:19.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112818453;28067695419;me1;2E+15
2112815686;5067535844;242175264;account_money;account_money;MLB;SETTLEMENT;819.00;BRL;2019-08-11T22:15:32.000-04:00;-91.73;727.27;BRL;2019-08-11T22:15:32.000-04:00;727.27;0.00;[{}];-91.73;0.00;0.00;0.00;1;2112815686;28067772278;me1;2E+15
2112811587;5067365727;242175264;account_money;account_money;MLB;SETTLEMENT;769.00;BRL;2019-08-11T22:11:13.000-04:00;-86.13;682.87;BRL;2019-08-11T22:11:13.000-04:00;682.87;0.00;[{}];-86.13;0.00;0.00;0.00;1;2112811587;28067612908;me1;2E+15
2112784039;5067781790;242175264;credit_card;master;MLB;SETTLEMENT;199.00;BRL;2019-08-11T21:38:18.000-04:00;-22.29;176.71;BRL;2019-08-11T21:38:24.000-04:00;176.71;0.00;[{}];-22.29;0.00;0.00;0.00;1;2112784039;;;
2112755183;5067186172;242175264;credit_card;master;MLB;SETTLEMENT;79.00;BRL;2019-08-11T21:10:20.000-04:00;-8.85;70.15;BRL;2019-08-11T21:10:27.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112755183;;;
2112747018;5067323570;242175264;credit_card;visa;MLB;SETTLEMENT;3109.00;BRL;2019-08-11T21:00:11.000-04:00;-348.21;2760.79;BRL;2019-08-11T21:00:18.000-04:00;2760.79;0.00;[{}];-348.21;0.00;0.00;0.00;12;2112747018;;;
2112742918;5067175589;242175264;account_money;account_money;MLB;SETTLEMENT;154.00;BRL;2019-08-11T20:57:05.000-04:00;-17.25;136.75;BRL;2019-08-11T20:57:05.000-04:00;136.75;0.00;[{}];-17.25;0.00;0.00;0.00;1;2112742918;28067593333;me1;2E+15
2112736997;5067585992;242175264;digital_currency;consumer_credits;MLB;SETTLEMENT;94.00;BRL;2019-08-11T20:51:12.000-04:00;-10.53;83.47;BRL;2019-08-11T20:51:18.000-04:00;83.47;0.00;[{}];-10.53;0.00;0.00;0.00;1;2112736997;;;
2112736008;5067314803;242175264;digital_currency;consumer_credits;MLB;SETTLEMENT;79.00;BRL;2019-08-11T20:48:08.000-04:00;-8.85;70.15;BRL;2019-08-11T20:48:15.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112736008;;;
2112729919;5067463621;242175264;credit_card;master;MLB;SETTLEMENT;79.00;BRL;2019-08-11T20:41:46.000-04:00;-8.85;70.15;BRL;2019-08-11T20:41:55.000-04:00;70.15;0.00;[{}];-8.85;0.00;0.00;0.00;1;2112729919;;;
```

<hr/>

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Generación desde Mercado Pago
>
> Puedes generar tus reportes de Dinero Disponible desde el panel de Mercado Pago en tres simples pasos.
>
> [Generación desde Mercado Pago](https://www.mercadopago.com.ar/developers/es/guides/manage-account/available-money/panel/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Generación por retiro
>
> Puedes generar un reporte cada vez que retires dinero disponible a una cuenta bancaria.
>
> [Generación por retiro](https://www.mercadopago.com.ar/developers/es/guides/manage-account/available-money/withdrawal/)

