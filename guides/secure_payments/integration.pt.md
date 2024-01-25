> WARNING
>
> Importante
>
> Esta documentação é apenas para uso interno da equipe, pois é um produto exclusivo ou foi desativado. Para mais detalhes, entre em contato com a equipe comercial ou de integrações.

# Integrar Secure Payments

Para utilizar Secure Payments, é necessário fazer chamadas para as seguintes APIs. Lembre-se de adicionar no corpo da solicitação tanto os dados do cartão quanto as informações necessárias para realizar o pagamento.

| Ambiente | URL |
|---|---|
| Staging (testes) | `https://api.mercadopago.com/v1/secure_payments/zeta` |
| Produção | `https://api.mercadopago.com/v1/secure_payments/ ` |

## Integrar pagamentos online

A seguir, compartilhamos um exemplo de solicitação. Lembre-se de alterar o valor do campo `token` pelo seu Access Token.

```curl
curl -X POST \
  -H 'X-Caller-Scopes: payments' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
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
    "transaction_amount": 9000,
    "additional_info": {
      "items": [
        {
          "id": "ItemID1234",
          "title": "Nombre del servicio",
          "description": "Descripción del servicio",
          "category_id": "travels",
          "quantity": 1,
          "unit_price": 1234.56
        }
      ],
      "payer": {
        "first_name": "Carlos",
        "last_name": "Perez",
        "is_prime_user": "1",
        "is_first_purchase_online": "1",
        "last_purchase": "2022-11-25T19:30:00.000-03:00",
        "phone": {
          "area_code": "57",
          "number": "13123772"
        },
        "address": {
          "zip_code": "11001",
          "street_name": "Calle Falsa",
          "street_number": "52"
        },
        "registration_date": "2020-08-06T09:25:04.000-03:00"
      }
    }
  }'
```

## Integrar pagos presenciales

É possível fazer um pagamento presencial em um dispositivo MPOST (dispositivo captador de dinheiro) que contenha as informações do cartão criptografadas.

> WARNING
>
> Importante
>
> Antes de utilizar esse método, verifique se o dispositivo está registrado e aprovado pelo Mercado Pago.

Para fazer um pagamento presencial, altere o campo `card` para **`card_present`**. A seguir, mostramos um exemplo de solicitação:

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
