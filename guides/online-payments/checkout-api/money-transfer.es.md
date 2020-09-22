---
  sites_supported:
      - mla
  indexable: false
---

# Envío de dinero

Desde Mercado Pago, proveemos los servicios necesarios para poder realizar envíos de dinero de manera inmediata y sin costo desde tu cuenta de Mercado Pago a otra cuenta de Mercado Pago.

## Crea una aplicación

Para crear una aplicación tienes que ingresar con tu cuenta de Mercado Pago a: [https://applications.mercadopago.com/](https://applications.mercadopago.com/). Para poder operar con la API de envío de dinero  la aplicación deberá ser habilitada para tal fin. Estos permisos son asignados desde Mercado Pago, por lo que deberás enviarle a tu asesor comercial el APP ID obtenido para poder realizar la configuración correspondiente.

> WARNING
>
> Consideraciones
>
> Al APP ID se le deberá asignar el scope de "money_transfer", el pago deberá ser con el `payment_method_id` =  `account_money` y se deberá sumar el campo `operation_type` = `money_transfer`.<br>
> Para los pagos que cumplen con las condiciones mencionadas anteriormente la operación tendrá una comisión de 0% y el dinero se liberará inmediatamente al momento de crear los movimientos.


## Pago a proveedores y sueldos

Esta solución permite hacer pago a proveedores y el pago de sueldos. Para estos casos, hay que sumar el campo "concept_id" específico para poder identificar estos tipos de pagos:
    
-   Para pago a proveedores deberán enviar el "concept_id" = "supply"
-   Para pago de sueldos deberán enviar el "concept_id" = "payroll"

## Consideraciones generales

Si al momento de la generación del pago no se cumple con algunas de las condiciones mencionadas en el punto anterior, recibirás alguno de los siguientes mensajes de error:

En caso de que se mande "operation_type" = "money_transfer", "payment_method" = "account_money" pero el APP ID no tiene configurado el scope de "money_transfer" recibirás un mensaje de error:

```json
{
    "badrequest"
}
```

En caso de que se mande "operation_type" = "money_transfer", el APP ID tenga el scope de "money_transfer" pero con un "payment_method" distinto a "account_money" recibirás un mensaje de error:

```json
{
    "badrequest"
}
```

En caso de que se mande "payment_method" = "account_money", el APP ID tenga el scope de "money_transfer" pero sin el "operation_type" = "money_transfer" recibirás un mensaje de error:

```json
{
    "badrequest"
}
```

En caso de que se mande el "concept_id" = "payroll" o "supply" sin que el APP ID tenga el scope de "money_transfer", el "operation_type" = "money_transfer" y/o el "payment_method" = "account_money" recibirás un mensaje de error:

```json
{
    "badrequest"
}
```

## Integración por API

Esta solución consiste en la utilización de las API's de Mercado Pago para llevar a cabo la correspondiente creación del pago. Toda la experiencia es manejada por el integrador.

Para el envío de dinero se puede especificar el receptor del pago de dos maneras:

- Utilizando el email de asociado a la cuenta de Mercado Pago.
- Utilizando el ID de la cuenta de Mercado Pago.

A continuación se puede ver un ejemplo de la creación del pago utilizando el email:

``` json
$ curl https://api.mercadopago.com/v1/payments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -d '
  {
	"transaction_amount": 100,
	"operation_type": "money_transfer",
	"description": "Title of what you are paying for",
	"installments": 1,
	"marketplace": "NONE",
	"payment_method_id": "account_money",
	"collector": {
		"email": "test_user_50345633@testuser.com"
	},
	"external_reference": "Reference_1234",
	"notification_url": "https://www.your-site.com/webhooks",
}'
```

A continuación se puede ver un ejemplo de la creación del pago utilizando el ID de la cuenta:

``` json
$ curl https://api.mercadopago.com/v1/payments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -d '
  {
	"transaction_amount": 100,
	"operation_type": "money_transfer",
	"description": "Title of what you are paying for",
	"installments": 1,
	"marketplace": "NONE",
	"payment_method_id": "account_money",
	"collector": {
		"id": "399606359"
	},
	"external_reference": "Reference_1234",
	"notification_url": "https://www.your-site.com/webhooks",
}'
```

Por último recibirás una respuesta del pago como la siguiente:

``` json
{
    "id": 4637181430,
    "date_created": "2018-04-17T09:26:39.000-04:00",
    "date_approved": "2018-04-17T09:26:40.000-04:00",
    "date_last_updated": "2018-04-17T09:26:40.000-04:00",
    "date_of_expiration": null,
    "money_release_date": "2018-04-29T09:26:40.000-04:00",
    "operation_type": "money_transfer",
    "issuer_id": null,
    "payment_method_id": "account_money",
    "payment_type_id": "account_money",
    "status": "approved",
    "status_detail": "accredited",
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "description": "Title of what you are paying for",
    "live_mode": true,
    "sponsor_id": null,
    "authorization_code": "1234567",
    "money_release_schema": null,
    "collector_id": 307467332,
    "payer": { 
	    "email": "test_user_77371011@testuser.com",
	    "entity_type": null,
	    "first_name": "Test",
	    "id": "399605060",
	    "identification": { 
		    "number": "32659430",
		    "type": "DNI" 
	     },
	    "last_name": "Test",
	    "operator_id": null,
	    "phone": { 
		    "area_code": "01",
		    "extension": null,
		    "number": "1111-1111" 
	    },
	    "type": "guest" 
	},
    "additional_info": {
    },
    "order": {},
    "external_reference": "Reference_1234",
    "transaction_amount": 100,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "transaction_details": {
        "net_received_amount": 90.96,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 100,
        "financial_institution": null,
        "payment_method_reference_id": "null",
        "payable_deferral_period": null,
        "acquirer_reference": null
    },
    "fee_details": [
        {
            "type": "mercadopago_fee",
            "amount": 9.04,
            "fee_payer": "collector"
        }
    ],
    "captured": true,
    "binary_mode": false,
    "call_for_authorize_id": null,
    "statement_descriptor": "MERCADOPAGO",
    "installments": 1,
    "card": {
    },
    "notification_url": "https://www.your-site.com/webhooks",
    "refunds": [],
    "processing_mode": "aggregator",
    "merchant_account_id": null,
    "acquirer": null,
    "merchant_number": null,
    "acquirer_reconciliation": []
}
```

##  Especificando el concepto

Para identificar si se trata de un pago a un proveedor ("supply") o un pago de sueldo ("payrrol"), es necesario incorporar a la creación del pago un objeto "concept_id"

A continuación se puede ver un ejemplo de la creación del pago de un proveedor:

``` json
$ curl https://api.mercadopago.com/v1/payments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -d '
  {
	"transaction_amount": 100,
	"operation_type": "money_transfer",
	"concept_id": "supply",
	"description": "Title of what you are paying for",
	"installments": 1,
	"marketplace": "NONE",
	"payment_method_id": "account_money",
	"collector": {
		"id": "399606359"
	},
	"external_reference": "Reference_1234",
	"notification_url": "https://www.your-site.com/webhooks",
}'
```

A continuación se puede ver un ejemplo de la creación del pago de un sueldo:

``` json
$ curl https://api.mercadopago.com/v1/payments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -d '
  {
	"transaction_amount": 100,
	"operation_type": "money_transfer",
	"concept_id": "payroll",
	"description": "Title of what you are paying for",
	"installments": 1,
	"marketplace": "NONE",
	"payment_method_id": "account_money",
	"collector": {
		"id": "399606359"
	},
	"external_reference": "Reference_1234",
	"notification_url": "https://www.your-site.com/webhooks",
}'
```
