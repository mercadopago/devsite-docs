# Mensajería de Pagos automaticos

La Mensajería de Pagos automaticos, o **Mensajería de suscripción**, involucra información de los pagos recurrentes (ID de pagos anteriores, ID de la suscripción, número de veces que se generará el pago y POI con `type = SUBSCRIPTIONS`) que se envía a la [API de Pagos](/developers/es/reference/payments/_payments/post) con el objetivo de aumentar la tasa de aprobación para estos tipos de pagos.

> WARNING
>
> Importante
>
> En el caso de operaciones con pagos recurrentes de la marca _Visa_, será necesario enviar el identificador de transacción de la tarjeta (TID) a las transacciones de mensajería. Para más información sobre cómo enviar el TID, acceda a la documentación [Network Transaction ID - TID](/developers/es/docs/automatic-payments/recurring-charges/network-transaction-id).

## Configuración

Ve a continuación cómo enviar la información de los pagos recurrentes a la [solicitud de crear pago](/developers/es/reference/payments/_payments/post).

### Procesar el primer pago

Para el **primer pago** en la mensajería de recurrencia, será necesario enviar la siguiente información al endpoint [v1/payments](/developers/es/reference/payments/_payments/post), a través del parámetro `point_of_interaction`.

----[mla, mlb, mlu, mco, mlc, mpe]----

- Indicar que el tipo es suscripción (`type = SUBSCRIPTIONS`);
- Indicar que es la primera transacción (`first_time_use = TRUE`);
- Indicar cuál es el `subscription_id` del pago (sugerimos usar el `collector` + un `ID` de suscripción único por usuario);
- Número de cuotas (`subscription_sequence`);
- Periodicidad de los cobros (`invoice_period`);
- Fecha del cobro (`billing_date`).

------------
----[mlm]----

- Indicar que el tipo es suscripción (`type = SUBSCRIPTIONS`);
- Indicar que es la primera transacción (`first_time_use = TRUE`);
- Indicar cuál es el `subscription_id` del pago (sugerimos usar el `collector` + un `ID` de suscripción único por usuario);
- Número de meses (`subscription_sequence`);
- Periodicidad de los cobros (`invoice_period`);
- Fecha del cobro (`billing_date`).

------------

Ejemplo:

```json
"point_of_interaction": {
    "type": "SUBSCRIPTIONS",
    "transaction_data": {
        "first_time_use": true,
        "subscription_id": "COLLECTORPADRE-SUBSCRIPCION_ID",
        "subscription_sequence": {
            "number": 1,
            "total": 12
        },
        "invoice_period": {
            "period": 1,
            "type": "monthly"
        },
        "billing_date": "2024-03-16"
    }
}
```

### Procesar pagos subsecuentes

Para los **pagos subsecuentes** en la mensajería de recurrencia, será necesario reenviar la información del primer pago al endpoint [v1/payments](/developers/es/reference/payments/_payments/post), a través del parámetro `point_of_interaction`, modificando los datos que se presentan a continuación.

----[mla, mlb, mlu, mco, mlc, mpe]----

- Indicar que **no es la primera** transacción (`first_time_use = FALSE`);
- Indicar cuál es el `subscription_id` del pago (sugerimos usar el `collector` + un `ID` de suscripción único por usuario);
- Número de la cuota actual (`subscription_sequence = number`);
- Número total de cuotas (`subscription_sequence = total`);
- Periodicidad de los cobros (`invoice_period`);
- Fecha del cobro (`billing_date`);
- Usuario presente al realizar el pago (`user_present`);
- Número de referencia del primer pago (`payment_reference`).

------------
----[mlm]----

- Indicar que **no es la primera** transacción (`first_time_use = FALSE`);
- Indicar cuál es el `subscription_id` del pago (sugerimos usar el `collector` + un `ID` de suscripción único por usuario);
- Número de la cuota actual (`subscription_sequence = number`);
- Número total de meses (`subscription_sequence = total`);
- Periodicidad de los cobros (`invoice_period`);
- Fecha del cobro (`billing_date`);
- Usuario presente al realizar el pago (`user_present`);
- Número de referencia del primer pago (`payment_reference`).

------------

> WARNING
>
> Atención
> 
> No `payment_reference.id` deverá permanecer o ID do primeiro pagamento da sequência.

Ejemplo:

```json
"point_of_interaction": {
    "type": "SUBSCRIPTIONS",
    "transaction_data": {
        "first_time_use": true,
        "subscription_id": "COLLECTORPADRE-SUBSCRIPCION_ID",
        "subscription_sequence": {
            "number": 2,
            "total": 12
        },
        "invoice_period": {
            "period": 2,
            "type": "monthly"
        },
        "payment_reference": {
            "id": "20792195335"
        },
	  "user_present": true/false,
        "billing_date": "2024-04-16"
    }
}
```

| Parámetro  | Tipo  | Descripción  | Ejemplo |
| --- | --- | --- | --- |
| type | string | Indica el tipo de 'poi' | SUBSCRIPTIONS |
| first_time_use| boolean | Indica si es el primer pago de la suscripción | true/false |
| subscription_id | string | Identificador de la suscripción | "COLLECTORPADRE-SUBSCRIPCION_ID" |
| subscription_sequence.number |integer | Indica el número del pago subsecuente  | 3 |
| subscription_sequence.total |integer| Indica el total de la suscripción. Para suscripciones permanentes setear en 'null'| 12 |
| invoice_period.period |integer | Indica la frecuencia del pago recurrente | 1 |
| invoice_period.type | string | Indica el tipo de periodo del pago recurrente| daily, monthly ou yearly |
| user_present | boolean | Indica si hubo intervención del usuario en el momento en que se creó el pago |true/false |
| billing_date | string | Fecha de facturación | 2024-03-16 |
| payment_reference.id | string | ID del pago de validación ok | 20792195335 |
| transaction_amount | number | Monto del pago |100 |
| token | string | Token de tarjeta | 12346622341 |
| description | string | Descripción de pago | "Pagamento de teste" |
| payment_method_id | string | Indica el identificador del método de pago seleccionado para realizar el pago | master |
| payer.email | string | Email del pagador | buyer@examplemail.com |
| payer.type | string | Tipo de identificación del pagador asociado | guest |