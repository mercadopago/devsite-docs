# Respuestas de la API en pruebas

En esta sección encontrarás las posibles respuestas relacionadas con la prueba de validación de Zero Dollar Auth, con detalles sobre cada tipo de respuesta, incluyendo casos de éxito y error.

## Éxito

### Aprobado

* Código de status: aprobado
* Descripción: Esta respuesta indica que el flujo de Zero Dollar Auth ha sido aprobado.
* Cuerpo de la respuesta:

```
{
    "id": 64962742075,
    "date_created": "2023-10-11T10:06:56.466-04:00",
    "date_approved": null,
    "date_last_updated": "2023-10-11T10:06:56.466-04:00",
    "date_of_expiration": null,
    "money_release_date": null,
    "money_release_status": null,
    "operation_type": "card_validation",
    "issuer_id": null,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "payment_method": null,
    "status": "approved",
    "status_detail": "accredited",
    "currency_id": "BRL",
    "description": "validação de cartão com valor zero dollar master crédito sem cvv",
    "live_mode": true,
    "sponsor_id": null,
    "authorization_code": "131385",
    "money_release_schema": null,
    "taxes_amount": 0,
    "counter_currency": null,
    "brand_id": null,
    "shipping_amount": 0,
    "build_version": "3.21.0",
    "pos_id": null,
    "store_id": null,
    "integrator_id": null,
    "platform_id": null,
    "corporation_id": null,
    "payer": {
        "type": null,
        "id": "1485104424-uz1JdByYh0Vv3Z",
        "operator_id": null,
        "email": "fernandospaganti@hotmail.com",
        "identification": {
            "type": null,
            "number": null
        },
        "phone": {
            "area_code": null,
            "number": null,
            "extension": null
        },
        "first_name": null,
        "last_name": null,
        "entity_type": null
    },
    "collector_id": 749032422,
    "marketplace_owner": null,
    "metadata": {},
    "additional_info": {
        "available_balance": null,
        "nsu_processadora": null,
        "authentication_code": null
    },
    "order": {},
    "external_reference": null,
    "transaction_amount": 0,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "financing_group": null,
    "deduction_schema": null,
    "installments": 1,
    "transaction_details": {
        "payment_method_reference_id": null,
        "acquirer_reference": null,
        "net_received_amount": 0,
        "total_paid_amount": 0,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 0,
        "financial_institution": null,
        "payable_deferral_period": null
    },
    "fee_details": [],
    "charges_details": [],
    "captured": true,
    "binary_mode": true,
    "call_for_authorize_id": null,
    "statement_descriptor": "MP*MERCADOPAGO",
    "card": {
        "id": "9273883530",
        "first_six_digits": "550209",
        "last_four_digits": "4132",
        "bin": null,
        "expiration_month": 6,
        "expiration_year": 2027,
        "date_created": "2023-10-11T10:06:56.000-04:00",
        "date_last_updated": "2023-10-11T10:06:56.000-04:00",
        "cardholder": {
            "name": "FERNANDO S P AGANTI",
            "identification": {
                "number": "40246499818",
                "type": "CPF"
            }
        }
    },
    "notification_url": null,
    "refunds": [],
    "processing_mode": "aggregator",
    "merchant_account_id": null,
    "merchant_number": null,
    "acquirer_reconciliation": [],
    "point_of_interaction": {
        "type": "UNSPECIFIED",
        "business_info": {},
        "transaction_data": {}
    },
    "accounts_info": null,
    "tags": null
}
```

## Error

### Rejected

* Código de Status: rejected
* Descripción: Esta respuesta indica que el flujo de Zero Dollar Auth ha sido rechazado. Te recomendamos revisar los parámetros de la solicitud para asegurarte de que se hayan completado correctamente con los valores aceptados por nuestra API. Después de hacer la revisión, realiza una nueva solicitud.
* Cuerpo de la respuesta:

```
{
    "id": 64962742075,
    "date_created": "2023-10-11T10:06:56.466-04:00",
    "date_approved": null,
    "date_last_updated": "2023-10-11T10:06:56.466-04:00",
    "date_of_expiration": null,
    "money_release_date": null,
    "money_release_status": null,
    "operation_type": "card_validation",
    "issuer_id": null,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "payment_method": null,
    "status": "rejected",
    "status_detail": "cc_rejected_other_reason",
    "currency_id": "BRL",
    "description": "validação de cartão com valor zero dollar master crédito sem cvv",
    "live_mode": true,
    "sponsor_id": null,
    "authorization_code": "131385",
    "money_release_schema": null,
    "taxes_amount": 0,
    "counter_currency": null,
    "brand_id": null,
    "shipping_amount": 0,
    "build_version": "3.21.0",
    "pos_id": null,
    "store_id": null,
    "integrator_id": null,
    "platform_id": null,
    "corporation_id": null,
    "payer": {
        "type": null,
        "id": "1485104424-uz1JdByYh0Vv3Z",
        "operator_id": null,
        "email": "test@test.com",
        "identification": {
            "type": null,
            "number": null
        },
        "phone": {
            "area_code": null,
            "number": null,
            "extension": null
        },
        "first_name": null,
        "last_name": null,
        "entity_type": null
    },
    "collector_id": 749032422,
    "marketplace_owner": null,
    "metadata": {},
    "additional_info": {
        "available_balance": null,
        "nsu_processadora": null,
        "authentication_code": null
    },
    "order": {},
    "external_reference": null,
    "transaction_amount": 0,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "financing_group": null,
    "deduction_schema": null,
    "installments": 1,
    "transaction_details": {
        "payment_method_reference_id": null,
        "acquirer_reference": null,
        "net_received_amount": 0,
        "total_paid_amount": 0,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 0,
        "financial_institution": null,
        "payable_deferral_period": null
    },
    "fee_details": [],
    "charges_details": [],
    "captured": true,
    "binary_mode": true,
    "call_for_authorize_id": null,
    "statement_descriptor": "MP*MERCADOPAGO",
    "card": {
        "id": "9273883530",
        "first_six_digits": "550209",
        "last_four_digits": "4132",
        "bin": null,
        "expiration_month": 6,
        "expiration_year": 2027,
        "date_created": "2023-10-11T10:06:56.000-04:00",
        "date_last_updated": "2023-10-11T10:06:56.000-04:00",
        "cardholder": {
            "name": "John Deer",
            "identification": {
                "number": "40246499818",
                "type": "CPF"
            }
        }
    },
    "notification_url": null,
    "refunds": [],
    "processing_mode": "aggregator",
    "merchant_account_id": null,
    "merchant_number": null,
    "acquirer_reconciliation": [],
    "point_of_interaction": {
        "type": "UNSPECIFIED",
        "business_info": {},
        "transaction_data": {}
    },
    "accounts_info": null,
    "tags": null
}
```

### Feature desactivada

* Descripción: Este mensaje se devuelve cuando la función de Zero Dollar Auth está temporalmente desactivada.
* Cuerpo de la respuesta:

```
{
    "message": "This feature is temporarily off"
}
```

### Collector no está en la Whitelist

* Descripción: Este error se produce cuando el collector no se encuentra en la Whitelist. Consulta la sección [Lista de permisos](/developers/es/docs/zero-dollar-auth/api-responses#bookmark_lista_de_permisos) para obtener más detalles.
* Cuerpo de la respuesta:

```
{
     "message": "Forbidden"
}
```

### Error interno

* Código de estado: 500
* Descripción: Respuesta para errores internos en el flujo de Zero Dollar Auth. Si hay fallos en las llamadas a las APIs durante el flujo, la causa se detallará en el objeto `cause`, incluyendo el mensaje de error, el código, la fecha y el ID de solicitud (requestId) correspondiente.
* Cuerpo de la respuesta:

```
{
     "message": "Error message",
      "error": "internal_error",
     "status": "500",
     "cause": [
           {
              "code": "Error code",
              "description": "Error description",
              "data": "2023-10-11T10:06:56.000-04:00;",
           }
      ]
}
```

