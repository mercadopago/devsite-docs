# Download the report

After manually creating the report, you can download it. Execute an API call using the code below, replacing `statement_id` with the value obtained in the response of report creation. Also, make sure to specify the desired download format as shown in the table below.

> WARNING
>
> Important
>
> Report downloads are only available for `statements`, i.e., reports generated manually. Report downloads for automatically generated reports (events) are not available at this time.

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/statements/{{statement_id}}/download?format=csv' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Response
```
COLLECTOR;COLLECTOR_NICKNAME;PAYMENT;STATUS_DESCRIPTION;STATUS_DETAIL;PURCHASE_ORDER;PAYMENT_METHOD_TYPE;TRANSACTION_AMOUNT;DATE_CREATED;DATE_APPROVED;MARKETPLACE_FEE_AMOUNT;MERCADOPAGO_FEE_AMOUNT;TOTAL_PAID_AMOUNT;NET_RECEIVED_AMOUNT
{{report rows}}
```

| Field                   | Description                                                                                                          |
|-------------------------|----------------------------------------------------------------------------------------------------------------------|
| `statement_id` (required) | Identification of the report, obtained in the response of its creation.                                                    |
| `format` (optional)        | Format in which you want to download the report. It can be csv or json. Default is csv.                            |

> In case there is an error in report creation, the returned status will be 404, and the response body will be empty.
