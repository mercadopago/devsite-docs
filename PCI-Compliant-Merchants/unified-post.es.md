# Posteo unificado

Mercado Pago permite a vendedores que cumplen con las normativas PCI Compliance, cobrar a una tarjeta enviando los datos de la tarjeta junto a lo que se desea cobrar, sin necesidad de tokenizar la tarjeta previamente.

> NOTE
>
> Nota
>
> La siguiente documentación extiende la documentación de [Pagos vía API]().

**Request**

```curl
curl -X POST -H "Content-Type: application/json" -d '{
    "transaction_amount": 5,
    "card": {
        "card_number": "450995xxxxxx3704",
        "security_code": "123",
        "expiration_month": 12,
        "expiration_year": 2016,
        "cardholder": {
            "name": "APRO",
            "identification": {
                "number": "23456789",
                "type": CPF"
            }
        }
    },
    "description": "Payment test",
    "installments": 9,
    "payment_method_id": "visa",
    "payer": {
        "email": "testpayer@test.com"
    }
}' https://api.mercadopago.com/v1/payments?access_token=<<ACCESS_TOKEN>>
```

**Response**

```json
{
    "id": 1610,
    "date_created": "2015-04-21T10:27:47.000-04:00",
    "date_approved": "2015-04-21T10:27:47.000-04:00",
    "date_last_updated": "2015-04-21T10:27:47.000-04:00",
    "money_release_date": null,
    "collector_id": 179594975,
    "operation_type": "regular_payment",
    "issuer_id": "1",
    "payment_method_id": "visa",
    "payment_type_id": "credit_card",
    "status": "approved",
    "status_detail": "accredited",
    "currency_id": "BRL",
    "description": "Payment test",
    "live_mode": false,
    "payer": {
        "type": "guest",
        "id": null,
        "email": "testpayer@test.com",
        "identification": {
            "type": null,
            "number": null
        }
    },
    "metadata": {},
    "order": {},
    "external_reference": null,
    "transaction_amount": 5,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "transaction_details": {
        "net_received_amount": 4.7,
        "total_paid_amount": 7.13,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 1,
        "financial_institution": null,
        "payment_method_reference_id": null
    },
    "fee_details": [
        {
            "type": "financing_fee",
            "fee_payer": "payer",
            "amount": 2.13
        },
        {
            "type": "mercadopago_fee",
            "fee_payer": "collector",
            "amount": 0.3
        }
    ],
    "captured": true,
    "binary_mode": false,
    "call_for_authorize_id": null,
    "statement_descriptor": "MERCADOPAGO",
    "installments": 9,
    "card": {
        "id": null,
        "first_six_digits": "450995",
        "last_four_digits": "3704",
        "expiration_month": 12,
        "expiration_year": 2016,
        "date_created": "2015-04-21T10:27:47.000-04:00",
        "date_last_updated": "2015-04-21T10:27:47.000-04:00",
        "cardholder": {
            "name": "APRO",
            "identification": {
                "number": "23456789",
                "type": "CPF"
            }
        }
    },
    "notification_url": null,
    "refunds": []
}
```

> Algunos medios de pago permiten realizar un cobro sin código de seguridad. Puedes conocer a través del siguiente atributo:
> 
> ```
> settings.security_code.mode = "optional"
> ```
