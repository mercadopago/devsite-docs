# Network Transaction ID - TID

A partir de las nuevas reglas operacionales para la tokenización de operaciones de pagos recurrentes de la marca _Visa_, será necesario enviar el identificador de transacción de la tarjeta (TID) a las transacciones de mensajería para que se utilice dentro de la multi-adquirencia y evitar posibles multas.

## Procesar el primer pago

Para el **primer pago** con _Visa_, será necesario enviar el _header_ `X-Expand-Response-Nodes` al endpoint [v1/payments](/developers/es/reference/payments/_payments/post) como se muestra a continuación.

```json
--header 'X-Expand-Responde-Nodes: gateway.reference'\
```

En la respuesta se podrá observar el retorno del `network_transaction_id` en el parámetro `expanded`. Ejemplo:

```json
"expanded": {
    "gateway": {
 	"reference": {
 		"network_transaction_id": "n7w-c0d3-t7d"
 	 }
   }
}
```

## Procesar pagos subsecuentes

Para los **pagos subsecuentes** con _Visa_, será necesario enviar la información del `network_transaction_id` recibido al endpoint [v1/payments](/developers/es/reference/payments/_payments/post), a través del parámetro `forward_data`.

Ejemplo:

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

Respuesta:

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
> Atención
> 
> En caso de que el `network_transaction_id` no se devuelva en el último pago realizado, se deberá enviar el valor recibido en el primer pago.