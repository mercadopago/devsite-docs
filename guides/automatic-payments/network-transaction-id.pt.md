# Network Transaction ID - TID

A partir das novas regras operacionais para tokenização de operações de pagamentos recorrentes da bandeira _Visa_, será necessário enviar o identificador de transação da bandeira (TID) às transações de mensageria para que seja utilizado dentro da multiadquirência* e evitar possíveis multas.

> *De forma automática, a **multiadquirência** envolve mais regras de aprovação e bancos de dados para checar as informações de pagamento, garantindo a otimização das aprovações de acordo com a bandeira do cartão e a própria retentativa do pagamento.

## Processar primeiro pagamento

Para o **primeiro pagamento** com _Visa_, será preciso enviar o _header_ `X-Expand-Responde-Nodes` ao endpoint [v1/payments](/developers/pt/reference/payments/_payments/post) conforme abaixo.

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

### Processar pagamentos subsequentes 

Para os **pagamentos subsequentes** com _Visa_, será preciso enviar a informação do `network_transaction_id` recebido ao endpoint [v1/payments](/developers/pt/reference/payments/_payments/post), através do parâmetro `forward_data`.

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

| Parâmetro  | Tipo  | Descrição  | Exemplo |
| --- | --- | --- | --- |
| network_transaction_id | string | Está associado ao identificador da bandeira | 584152665425694 |

> WARNING
>
> Atenção
> 
> Caso o `network_transaction_id` não retorne no último pagamento realizado, deverá ser enviado valor recebido no primeiro pagamento.