# Pago Unificado

Mercado Pago permite a vendedores que cumplen con las normativas PCI, procesar los pagos Server to Server sin necesidad de tokenizar la tarjeta previamente. 


> WARNING
>
> Pre-requisitos
>
> * El vendedor deberá comunicar en forma clara e inequívoca a su base de usuarios o clientes (i) que la plataforma de pago en su sistio web es provista por Mercado Pago.
> * El vendedor deberá presentar la documentación correspondiente a la certificación PCI.
> * Cada vez que se le procese un pago a un cliente, será necesario notificarle: "En tu resumen verás el cargo como Mercado Pago/Mercado libre" (*).

En el caso de tarjetas de crédito en el resumen del usuario aparecerá como: "MERPAG*<brand_name>". Donde <Brand_name> se configura desde la cuenta de Mercado Pago del vendedor: Menu-> Configuración-> Nombre de mi negocio


[[[
```curl
      curl -X POST -H "Content-Type: application/json" -d '{
          "transaction_amount": 5,
          "card": {
          "card_number": "4509953566233704",
          "security_code": "123",
          "expiration_month": 12,
          "expiration_year": 2016,
          "cardholder": {
          "name": "APRO",
          "identification": {
          "number": "23456789",
          "type": "DNI"
          }
        }
      },
        "description": "Payment test",
        "installments": 9,
        “issuer_id” 310,
        "payment_method_id": "visa",
        "payer": {
        "email": "testpayer@test.com"
        }
      }' https://api.mercadopago.com/v1/secure_payments?access_token=<<ACCESS_TOKEN>>
```
]]]

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
      "issuer_id": "310",
      "payment_method_id": "visa",
      "payment_type_id": "credit_card",
      "status": "approved",
      "status_detail": "accredited",
      "currency_id": "[FAKER][CURRENCY][ACRONYM]",
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
      "statement_descriptor": "WWW.MERCADOPAGO.COM",
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
      "type": "DNI"
      }
      }
      },
      "notification_url": null,
      "refunds": []
      }
      "type": "mercadopago_fee",
      "fee_payer": "collector",
      "amount": 0.3
      }
      ],
      "captured": true,
      "binary_mode": false,
      "call_for_authorize_id": null,
      "statement_descriptor": "WWW.MERCADOPAGO.COM",
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
      "type": "DNI"
      }
      }
      },
      "notification_url": null,
      "refunds": []
      }
```

**Información adicional para fraude**: 

Esta información debe ser enviada por el integrador para que la aprobación por el sistema
de fraude de Mercado Pago responda a valores normales de aprobación.
La documentación correspondiente puedes encontrarla en la siguiente URL: 
https://www.mercadopago.com.ar/developers/es/guides/pci-compliant-merchants/receiving-payment-by-card/
