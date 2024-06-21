# Network Transaction ID - TID

Under the new operational rules for tokenizing recurring payment transactions from the Visa brand, it will be necessary to send the transaction identifier (TID) in messaging transactions to be used within multi-acquiring* and to avoid possible fines.

> *Automatically, **multi-acquiring** involves more approval rules and databases to check payment information, ensuring the optimization of approvals according to the card brand and the payment retry itself.

## Process the first payment

For the **first payment**, send the `X-Expand-Responde-Nodes` header to the endpoint [v1/payments](/developers/en/reference/payments/_payments/post) as indicated below.

```json
--header 'X-Expand-Responde-Nodes: gateway.reference'\
```

In the response, you can observe the return of the `network_transaction_id` in the `expanded` parameter. Example:

```json
"expanded": {
   "gateway": {
 	  "reference": {
 		 "network_transaction_id": "n7w-c0d3-t7d"
 	    }
    }
}
```

| Parameter  | Type  | Description  | Example |
| --- | --- | --- | --- |
| network_transaction_id | string | Associated with the network identifier	 | 584152665425694 |

## Process subsequent payments

For **subsequent payments**, send the `network_transaction_id` information returned in the last payment made to the [v1/payments](/developers/es/reference/payments/_payments/post) endpoint through the `forward_data` parameter, or using the cURL below.

> WARNING
>
> Attention
> 
> If the `network_transaction_id` is not returned in the last payment made, the value received in the first payment should be sent.

```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data '{
    "description": "{{description}}",
    "token": "{{card_token}}",
    "payer": {
        "id": "{{customer_id}}",
        "type": "{{type}}"
    },
    "payment_method_id": "{{payment_method_id}}",
    "transaction_amount": {{transaction_amount}},
    "point_of_interaction": {
        "type": "{{type}}",
        "transaction_data": {
            "first_time_use": {{first_time_use}},
            "subscription_id": "{{subscription_id}}",
            "subscription_sequence": {
                "number": {{subscription_number}},
                "total": {{subscription_total}}
            },
            "invoice_period": {
                "period": {{invoice_period}},
                "type": "{{invoice_type}}"
            },
            "billing_date": "{{billing_date}}",
            "user_present": {{user_present}}
        }
    },
    "forward_data": {
        "network_transaction_data": {
            "network_transaction_id": "{{network_transaction_id}}"
        }
    }
}'
```

Example:

```json
{
    "description": "TESTE",
    "external_reference": "MP_genova_master",
    "installments": 1,
    "token": "{{token}}",
    "payer": {
        "id": "{{customer_id}}",
        "entity_type": "individual",
        "type": "customer"
    },
    "payment_method_id": "master",
    "transaction_amount": 1,
    "point_of_interaction": {
        "type": "SUBSCRIPTIONS",
        "transaction_data": {
            "first_time_use": true,
            "subscription_id": "mlb-suscripcions-genova-1",
            "subscription_sequence": {
                "number": 1
            },
            "invoice_period": {
                "period": 1,
                "type": "monthly"
            },
            "billing_date": "2024-07-29",
            "user_present": true
        }
    },
    "forward_data": {
        "network_transaction_data": {
            "network_transaction_id": "n7w-c0d3-t7d"
        }
    }
}
```

Response:

```json
"expanded": {
   "gateway": {
 	  "reference": {
 		 "network_transaction_id": "n7w-c0d3-t7d"
 	    }
    }
}
```