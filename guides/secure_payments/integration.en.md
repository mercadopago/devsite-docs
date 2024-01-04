> WARNING
>
> Importante
>
> This documentation is for internal team use only, as it is an exclusive product or has been deprecated. For more details, please contact the sales or integration team.

# Integrate Secure Payments

To use Secure Payments, you will need to make requests to the following APIs. Please note that you will need to include both the card data and the necessary information for the payment in the request body.

| Environment | URL |
|---|---|
| Staging (testing) | `https://api.mercadopago.com/v1/secure_payments/zeta` |
| Production | `https://api.mercadopago.com/v1/secure_payments/ ` |

## Integrate online payments

Below is an example request. Please remember to replace the value of the `token` field with your Access Token.

```curl
curl - X POST\ -
  H 'X-Caller-Scopes: payments'\ -
  H 'accept: application/json'\ -
  H 'Authorization: Bearer YOUR_ACCESS_TOKEN'\ -
  d '{
"binary_mode": true,
"capture": true,
"card":
{
  "card_number": "4688163623817035",
  "security_code": "438",
  "expiration_month": "08",
  "expiration_year": "2024",
  "cardholder":
  {
    "identification":
    {
      "number": "123456",
      "type": "DNI"
    },
    "name": "APRO"
  },
  "device":
  {
    "fingerprint":
    {}
  },
  "require_esc": false
},
"description": "Lorem ipsum.",
"installments": 1,
"issuer_id": "303",
"payer":
{
  "first_name": "APRO",
  "last_name": "APRO",
  "address":
  {},
  "identification":
  {
    "number": "123456",
    "type": "DNI"
  },
  "email": "test@testuser.com"
},
"payment_method_id": "visa",
"statement_descriptor": "Lorem ipsum.",
"transaction_amount": 9000
}
```

## Integrate in-person payments

It is possible to make an in-person payment on an MPOST device (a cash-capturing device) that has encrypted card information.

> WARNING
>
> Important
>
> Before using this method, make sure the device is registered and approved by Mercado Pago.

To make an in-person payment, you will need to change the `card` field to **`card_present`**. Here is an example request:

```curl
curl - X POST\ -
  H 'X-Caller-Scopes: payments'\ -
  H 'accept: application/json'\ -
  H 'Authorization: Bearer YOUR_ACCESS_TOKEN'\ -
  -H 'X-Caller-Scopes: payments'\ -
  -d '{
"binary_mode": true,
"capture": true,
"card_present":
{
  "card_data_entry_mode": "2",
  "card_sequence_number": "02",
  "track2": "107547ee4bad13deb793c8f04ddc4a70c88913e2680856c38f8f48b4a5ab64c213d0512428a73f6d",
  "ksn": "0d040b76543210e001f8",
  "icc_related_data": "5010414D45524943414E204558505245535382025C008408A0000000250108018E180000000000000000420141035E035F0300000000000000008F01C9950502000080009A032011199B02E8009C010091005F201041454950532032332F56455220322E305F24032412315F25031711015F2A0209865F300202015F3401029F02060000000033009F03060000000000009F0608A0000000250108019F0702FF009F090200019F0D05FC50ECA8009F0E0500000000009F0F05FC78FCF8009F100706020103A400009F160F4D45524348414E54303030303030319F1A0200769F1C085445524D303030319F1E0830373030303034319F26087F490A8F139D58BA9F2701809F3303E0F0E89F34034103029F3501229F360204019F37049325DA479F4104000000019F4502DAC1",
  "fallback_indicator": false,
  "poi": "8701012007000041",
  "poi_signature": "0c074a2b [APP_PRO2]:aa6d737ff3faef73b9c96b868a83e6f11e959950095b8045a02a9467",
  "poi_type": "GERTEC_MP35P",
  "trx_id": "1754288142011191155248701012007000041",
  "tag": "chip",
  "has_chip": "true",
  "app_version": "1.2.1"
},
"cardholder":
{
  "name": "AEIPS 23/VER 2.0"
},
"security_code": "0000"
}
```

## Request field description

To learn the description of each field in the request, access the [Swagger documentation](https://web.furycloud.io/gateway-unified-payment-go/specs-hub/spec/14d77c1c-8c3c-4617-ba40-07c9dc39b7c2). To view the description, access the models section and navigate through the JSON until you reach the example and field description.
