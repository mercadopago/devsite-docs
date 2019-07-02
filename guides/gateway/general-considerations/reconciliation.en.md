---
sites_supported:
  - mla
  - mco
  - global
---

# Mercado Pago Gateway: Reconciliation

You will find information below on how to reconcile your operations in Mercado Pago Gateway with the information of acquirers or issuers.

## Using a partner

The easiest way is working with one of our partners:

|Country|Partner|
|---|---|
|Argentina|[Increase](https://www.increasecard.com/mercadopago/)|

> We are working on adding more partners soon

## Using your own development or system

If you want to reconcile with a custom development or system you have two options:

### API reconciliation

By making a **GET** call to the /payments endpoint you can obtain the list of all your transactions:

```curl -X GET \
"https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN" \
-H "Content-Type: application/json"
-d "{
  'status': 'approved'
}"
```

Each transaction (payment) will have the reconciliation information in the `acquirer_reconciliation` node:

```json
{
  "id": "",
  "acquirer_reconciliation": [
    {
      "authorization_code": "646382",
      "batch_closing_date": "2019-06-10T17:00:00.000-04:00",
      "batch_number": "017",
      "date_created": "2019-06-10T10:49:47.000-04:00",
      "date_last_updated": "2019-06-10T10:49:53.000-04:00",
      "operation": "authorization",
      "operation_status": "approved",
      "refund_id": null,
      "terminal_number": "98809468",
      "transaction_number": "0036"
    },
    {
      "authorization_code": "646382",
      "batch_closing_date": "2019-06-10T17:00:00.000-04:00",
      "batch_number": "017",
      "date_created": "2019-06-10T10:49:48.000-04:00",
      "date_last_updated": "2019-06-10T10:49:53.000-04:00",
      "operation": "capture",
      "operation_status": "approved",
      "refund_id": null,
      "terminal_number": "98809468",
      "transaction_number": "0037"
    }
  ],
  ...
}
```

### Attributes

|Attribute|Description|
|---|---|
|`authorization_code`| Authorization code |
|`batch_closing_date`| Batch closing date |
|`batch_number`| Batch number |
|`date_created`| Creating date |
|`date_last_updated`| Last updated date |
|`operation`| Operation type |
|`operation_status`| Operation status |
|`refund_id`| Refund ID |
|`terminal_number`| Terminal number |
|`transaction_number`| Transaction number / Coupon number |

> Is very important to mention that the information provided in the `acquirer_reconciliation` object may vary according to different use cases and depending on the acquirer.

### Operation types

The possible `operation` values are:

* **authorization:** authorization
* **capture:** capture
* **online_purchase:** direct purchase
* **refund_online_purchase:** refund of a direct purchase
* **refund_capture:** refund of captured payment
* **refund_authorization:** refund of an authorization (cancelation)

### Operation statuses

The possible `operation_status` values are:

* approved
* rejected
* in_process

### File reconciliation

In Mercado Pago's backoffice visit the _Operaciones Gateway_ section:

![Transactions](/images/gateway/operations.png)

By pressing on the _Exportar_ link you will see the following:

![Export](/images/gateway/export.png)

Choose your preferred format and the file will be generated

> If the file is too big you will receive it a few minutes later via e-mail (the one registered in your account)

## Do you need help?

Get in touch with your sales represantive.