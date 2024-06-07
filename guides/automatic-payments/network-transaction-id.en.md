# Network Transaction ID - TID

Under the new operational rules for tokenizing recurring payment transactions from the Visa brand, it will be necessary to send the transaction identifier (TID) in messaging transactions to be used within multi-acquiring and to avoid possible fines.

## Process the first payment

Para o **primeiro pagamento** com _Visa_, será preciso enviar o _header_ `X-Expand-Responde-Nodes` ao endpoint [v1/payments](/developers/pt/reference/payments/_payments/post) conforme abaixo.

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

## Process subsequent payments

For **subsequent payments** with Visa, it will be necessary to send the received `network_transaction_id` information to the [v1/payments](/developers/es/reference/payments/_payments/post) endpoint through the `forward_data` parameter.

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

> WARNING
>
> Attention
> 
> If the `network_transaction_id` is not returned in the last payment made, the value received in the first payment should be sent.