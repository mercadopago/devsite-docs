# Unified Post

Mercado Pago allows vendors who comply with PCI standards to process payments Server to Server without the need to tokenize the credit card.

> WARNING
>
> Pre-requisites
>
> * The vendor will have to communicate in a clear manner to his clients that the payment platform is being provided by Mercado Pago.
> * The vendor will have to present the corresponding PCI compliance documentation.
> * Everytime a payment is processed, it will be necessary to notify the buyer: "In your cards summary you´ll see Mercado Pago/Mercado libre" (*).

In the buyers credit card bill will appear: "MERPAG*<brand_name>". You can set the Brand name in your Mercado Pago account: Menu-> Configuration-> Brand Name


[[[
```curl
      curl -X POST \
      -H "Content-Type: application/json" \
      -H 'Authorization: Bearer <<ACCESS_TOKEN>>' \
      -d '{
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
      }' https://api.mercadopago.com/v1/secure_payments
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

**Additional info**: 

This info should be sent by the vendor in order to get a better payment approval rate. 
You can find the corresponding documentation in the following link: 
https://www.mercadopago.com.ar/developers/en/guides/pci-compliant-merchants/receiving-payment-by-card/
