# Tokenización por backend

Mercado Pago permite a vendedores que cumplen con las normativas PCI Compliance, tokenizar las tarjetas por backend.

> NOTE
>
> Nota
>
> La siguiente documentación extiende la documentación de [Pagos vía API]().

**Request**

``` curl
curl -X POST -H "Content-Type: application/json" -d '{
    "card_number": "450995xxxxxx3704",
    "security_code": "123",
    "expiration_month": 12,
    "expiration_year": 2016,
    "cardholder": {
        "name": "APRO",
        "identification": {
            "number": "123456789",
            "type": "DNI"
        }
    }
}' https://api.mercadopago.com/v1/card_tokens?access_token=<<ACCESS_TOKEN>>
```

**Response**

```json
{
    "public_key": null,
    "card_id": null,
    "first_six_digits": "450995",
    "luhn_validation": true,
    "date_used": null,
    "status": "active",
    "date_due": "2015-07-09T10:12:27.651-04:00",
    "live_mode": false,
    "card_number_length": 16,
    "id": "ff8080814e3fac20014e49f62f840721",
    "security_code_length": 3,
    "expiration_year": 2016,
    "expiration_month": 12,
    "date_last_updated": "2015-07-01T10:12:27.651-04:00",
    "last_four_digits": "3704",
    "cardholder": {
        "identification": {
            "number": "123456789",
            "type": "DNI"
        },
        "name": "APRO"
    },
    "date_created": "2015-07-01T10:12:27.651-04:00"
}
```

Una vez hayas obtenido el Card Token de la tarjeta, puedes [solicitar el cobro a la tarjeta]().
