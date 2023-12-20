# Integrar Secure Payments

Para utilizar Secure Payments, deberás hacerlo a través de pedidos a las siguientes APIs. Ten en cuenta que deberás adicionar en el body de la petición tanto los datos de la tarjeta como la información necesaria para realizar el pago.

| Ambiente | URL |
|---|---|
| Staging (pruebas) | `https://api.mercadopago.com/v1/secure_payments/zeta` |
| Producción | `https://api.mercadopago.com/v1/secure_payments/ ` |

## Pagos online

A continuación, te compartimos un pedido de ejemplo. Ten en cuenta que deberás cambiar el valor del campo `token` por tu Access Token.

```curl
curl -X POST 'https://api.mercadopago.com/v1/secure_payments/zeta?access_token=TOKEN' \
-H 'X-Caller-Scopes: payments' \
-H 'Content-Type: application/json' \
-d '{
   "binary_mode": true,
   "capture": true,
   "card": {
       "card_number": "4688163623817035",
       "security_code": "438",
       "expiration_month": "08",
       "expiration_year": "2024",
       "cardholder": {
           "identification": {
               "number": "123456",
               "type": "DNI"
           },
           "name": "APRO"
       },
       "device": {
           "fingerprint": {}
       },
       "require_esc": false
   },
   "description": "Lorem ipsum.",
   "installments": 1,
   "issuer_id": "303",
   "payer": {
       "first_name": "APRO",
       "last_name": "APRO",
       "address": {},
       "identification": {
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

## Pagos presenciales

Es posible realizar un pago presencial en un dispositivo MPOST (dispositivo captador de dinero) que cuente con la información de la tarjeta cifrada. 

> WARNING
>
> Importante
>
> Antes de utilizar este método, verifica que el dispositivo se encuentre registrado y aprobado por Mercado Pago. 

Para realizar un pago presencial, deberás cambiar el campo `card` por **`card_present`**. A continuación, te mostramos un ejemplo de petición:

```curl
curl -X POST 'https://api.mercadopago.com/v1/secure_payments/zeta?access_token=TOKEN'\ -
-H 'X-Caller-Scopes: payments'\ -
-H 'Content-Type: application/json'\ -
-d '{
    "binary_mode": true,
    "capture": true,
    "card_present": {
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
    "cardholder": {
        "name": "AEIPS 23/VER 2.0"
    },
    "security_code": "0000"
}
```

## Descripción de los campos del request

Para conocer la descripción de cada campo del request, dirígete hacia la sección Referencia de API.