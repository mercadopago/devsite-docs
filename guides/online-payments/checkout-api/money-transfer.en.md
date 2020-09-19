---
  sites_supported:
      - mla
  indexable: false
---

# Money transfer

From Mercado Pago, we provide the necessary services to be able to send money immediately and without cost from your Mercado Pago account to another Mercado Pago account.

## Create an application

To create an application you must enter with your Mercado Pago account at: [https://applications.mercadopago.com/](https://applications.mercadopago.com/). To operate with the money transfer API, the application must be enabled for this purpose. These permits are assigned from Mercado Pago, therefore you should send the obtained APP ID to your commercial advisor in order to make the corresponding configuration.

> WARNING
>
> Considerations
>
>The APP must be assigned the scope of "money_transfer", the payment must be with the `payment_method_id` =  `account_money`, and the `operation_type` = `money_transfer` field must be added.<br>
> For payments that meet the conditions mentioned above, the transaction will have a commission of 0% and the money will be released immediately after creating the transaction.

## Payment to suppliers and payroll

This solution allows payment to suppliers and payment of salaries. For these cases, we must add the specific "concept_id" field to identify these types of payments:
    
-   For payment to suppliers must send the "concept_id" = "supply"
-   For payment of salaries must send the "concept_id" = "payroll"

## General considerations

If at the moment of the payment generation some of the conditions mentioned in the previous point are not met, you will receive one of the following error messages:

In case "operation_type" = "money_transfer", "payment_method" = "account_money" is sent, but the APP ID doesn’t have the scope of "money_transfer" configured, you will receive an error message:

```json
{
    "badrequest"
}
```

In case "operation_type" = "money_transfer" is sent, the APP ID has the "money_transfer" scope, but with a "payment_method" different than "account_money", you will receive an error message:

```json
{
    "badrequest"
}
```

In case "payment_method" = "account_money" is sent, the APP ID has the "money_transfer" scope, but without the "operation_type" = "money_transfer", you will receive an error message:

```json
{
    "badrequest"
}
```

In case "concept_id" = "payroll" or "supply" is sent without the APP ID, having the "money_transfer" scope, the "operation_type" = "money_transfer" and/or the "payment_method" = "account_money", you will receive an error message:

```json
{
    "badrequest"
}
```

## Integration per API

This solution consists of using the Mercado Pago APIs to carry out the corresponding payment creation. The entire experience is handled by the integrator.

For sending money you can specify the payment recipient in two ways:

- Using the email address associated with the Mercado Pago account.
- Using the Mercado Pago account ID.

Below you can see an example of the payment creation using the email address:

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

Below you can see an example of the payment creation using the account ID:

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

Finally you will receive a payment response such as the following:

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

##  Specifying the concept

To identify whether it is a payment to a supplier ("supply") or payment of a salary ("payroll"), it is necessary to incorporate a "concept_id" object into the creation of the payment

Below you can see an example of a supplier payment creation:

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

Below you can see an example of a salary payment creation:

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
