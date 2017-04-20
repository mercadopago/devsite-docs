# Device ID

Envía información sobre el dispositivo desde el cual tu comprador hace el pago para prevención de fraude.

Utiliza el nodo `device`:

**Request**

```curl
curl -X POST -H "Content-Type: application/json" -d '{
    "transaction_amount": 100,
    "card": {
        "card_number": "4509953566233704",
        "security_code": "123",
        "expiration_month": 12,
        "expiration_year": 2016,
        "cardholder": {
            "name": "APRO",
            "identification": {
                "number": "23456789",
                "type": "CPF"
            }
        }
    },
    "description": "Payment test",
    "installments": 1,
    "payment_method_id": "visa",
    "payer": {
        "email": "testpayer@test.com"
    },
    "additional_info": {
        "payer": {
            "first_name": "name",
            "last_name": "lastName",
            "phone": {
                "area_code": "011",
                "number": "38882377"
            },
            "address": {
                "zip_code": "5700",
                "street_name": "streetname",
                "street_number": 1
            },
            "registration_date": "2014-08-09T11: 02: 50.125-04: 00"
        },
        "items": [
            {
                "id": "2133",
                "title": "Donation to Unicef",
                "picture_url": "http://2.bp.blogspot.com/-Zu-IpE01s5Y/TtEAy89fUzI/AAAAAAAAAXE/0_ZrT5SUbUQ/s1600/unicef.jpg",
                "description": "$100 to Unicef - Donation",
                "category_id": "donations",
                "quantity": 1,
                "unit_price": 100
            }
        ],
        "shipments": {
            "receiver_address": {
                "floor": "5",
                "zip_code": "5700",
                "street_name": "Streetname",
                "apartment": "c",
                "street_number": 1
            }
        }
    },
    "device": {
        "fingerprint": {
            "vendor_specific_attributes": {
                "device_idiom": "Phone",
                "device_languaje": "es",
                "feature_camera": true,
                "retina_display_capable": true,
                "platform": "iPhone7,2",
                "device_model": "iPhone",
                "device_family": 0,
                "feature_front_camera": false,
                "simulator": 0,
                "cpu_count": 2,
                "video_camera_available": true,
                "can_send_sms": 1,
                "can_make_phone_calls": 1,
                "feature_flash": false,
                "device_name": "iPhone de Matias"
            },
            "os": "iOS",
            "model": "N61AP",
            "resolution": "375x667",
            "vendor_ids": [
                {
                    "value": "4521BA53-F27F-4C95-BE1A-04D74F813074",
                    "name": "vendor_id"
                },
                {
                    "value": "E5B72487-BEA1-491A-99F9-F5670EE0A387",
                    "name": "uuid"
                }
            ],
            "system_version": "8.3",
            "ram": 1035988992,
            "disk_space": 60028289024,
            "free_disk_space": 51513384960
        }
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
    "transaction_amount": 100,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "transaction_details": {
        "net_received_amount": 94.01,
        "total_paid_amount": 100,
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
            "amount": 0
        },
        {
            "type": "mercadopago_fee",
            "fee_payer": "collector",
            "amount": 5.99
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
