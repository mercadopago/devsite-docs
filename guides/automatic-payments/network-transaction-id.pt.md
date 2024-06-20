# Network Transaction ID - TID

A partir das novas regras operacionais para tokenização de operações de pagamentos recorrentes da bandeira _Visa_, será necessário enviar o identificador de transação da bandeira (TID) às transações de mensageria para que seja utilizado dentro da multiadquirência* e evitar possíveis multas.

> *De forma automática, a **multiadquirência** envolve mais regras de aprovação e bancos de dados para checar as informações de pagamento, garantindo a otimização das aprovações de acordo com a bandeira do cartão e a própria retentativa do pagamento.

## Processar primeiro pagamento

Para o **primeiro pagamento** com _Visa_, envie o _header_ `X-Expand-Responde-Nodes` ao endpoint [v1/payments](/developers/pt/reference/payments/_payments/post) conforme abaixo.

```json
--header 'X-Expand-Responde-Nodes: gateway.reference'\
```

Na resposta se poderá observar o retorno do `network_transaction_id` no parâmetro `expanded`. Exemplo:

```json
"expanded": {
   "gateway": {
 	  "reference": {
 		 "network_transaction_id": "n7w-c0d3-t7d"
 	    }
    }
}
```

| Parâmetro  | Tipo  | Descrição  | Exemplo |
| --- | --- | --- | --- |
| network_transaction_id | string | Está associado ao identificador da bandeira | 584152665425694 |

### Processar pagamentos subsequentes 

Para os **pagamentos subsequentes** com _Visa_, envie a informação do `network_transaction_id` retornado no último pagamento realizado ao endpoint [v1/payments](/developers/pt/reference/payments/_payments/post), através do parâmetro `forward_data`, ou utilizando o _cURL_ abaixo.

> WARNING
>
> Atenção
> 
> Caso o `network_transaction_id` não retorne no último pagamento realizado, deverá ser enviado valor recebido no primeiro pagamento.

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

Exemplo:

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

Resposta:

```json
"expanded": {
   "gateway": {
 	  "reference": {
 		 "network_transaction_id": "n7w-c0d3-t7d"
 	    }
    }
}
```