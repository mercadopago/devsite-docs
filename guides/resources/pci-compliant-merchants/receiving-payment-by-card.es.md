# Recibir pagos siendo PCI Compliant

Mercado Pago permite a vendedores que cumplen con las normativas PCI, _tokenizar_ las tarjetas por _backend_.

> WARNING
>
> Pre-requisitos
>
> * Implementar el [procesamiento de pagos por API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card).
> * Tener el documento AOC (Attestation of Compliance) firmado por un consultor QSA.
> * Para más información sobre como postear pagos server to server siendo PCI compliant por favor contactarnos a través de nuestro formulario de soporte estando logueado con tu cuenta de Mercado Pago. 

Es necesario crear un `card_token`, el cual es la representación segura de la tarjeta:

[[[
```php
<?php  
    require ('mercadopago.php');

    $mp = new MP('ACCESS_TOKEN');

    $card_token_data = array(
        "card_number" => "450995xxxxxx3704",
        "security_code" => "123",
        "expiration_month" => 6,
        "expiration_year" => 2018,
        "cardholder" => array(
            "name" => "APRO",
            "identification" => array(
                "number" => "12345678",
                "type" => "DNI"
            )
        )
    );

    $card_token = $mp->post("/v1/card_tokens", $card_token_data);
  ?>
```
```java
import com.mercadopago.MP;
import org.codehaus.jettison.json.JSONObject;

MP mp = new MP ("ACCESS_TOKEN");

JSONObject payment = mp.post("/v1/card_tokens", "{"+
    "'card_number': '450995xxxxxx3704',"+
    "'security_code': '123',"+
    "'expiration_month': 6,"+
    "'expiration_year': 2018,"+
    "'cardholder': {"+
        "'name': 'APRO',"+
        "'identification': {"+
            "'number': '12345678',"+
            "'type': 'DNI',"+
        "}"+
    "}"+
"}");
```
```csharp
using mercadopago;
using System;
using System.Collections;

MP mp = new MP("ACCESS_TOKEN");

Hashtable card_token = mp.post("/v1/card_tokens", "{"+
    "'card_number': '450995xxxxxx3704',"+
    "'security_code': '123',"+
    "'expiration_month': 6,"+
    "'expiration_year': 2018,"+
    "'cardholder': {"+
        "'name': 'APRO',"+
        "'identification': {"+
            "'number': '12345678',"+
            "'type': 'DNI'"+
        "}"+
    "}"+
"}");
```
```javascript
var MP = require ("mercadopago");
var mp = new MP ("ACCESS_TOKEN");

var doCardToken = mp.post ("/v1/card_tokens",
    "card_number": "450995xxxxxx3704",
    "security_code": "123",
    "expiration_month": 6,
    "expiration_year": 2018,
    "cardholder": {
        "name": "APRO",
        "identification": {
            "number": "12345678",
            "type": "DNI"
        }
    });

doCardToken.then (
    function (payment) {
        console.log (payment);
    },
    function (error){
        console.log (error);
    });
```
```ruby
require 'mercadopago.rb'
$mp = MercadoPago.new('ACCESS_TOKEN')

cardTokenData = Hash[
    "card_number" => "450995xxxxxx3704",
    "security_code" => "123",
    "expiration_month" => 6,
    "expiration_year" => 2018,
    "cardholder" => Hash[
        "name" => "APRO",
        "identification" => Hash[
            "number" => "12345678",
            "type" => "DNI"
        ]
    ]

card_token = $mp.post("/v1/card_tokens", cardTokenData);

puts card_token
```
```python
import mercadopago
mp = mercadopago.MP("ACCESS_TOKEN")

card_token = mp.post("/v1/card_tokens", {
    "card_number": "450995xxxxxx3704",
    "security_code": "123",
    "expiration_month": 6,
    "expiration_year": 2018,
    "cardholder": {
        "name": "APRO",
        "identification": {
            "number": "12345678",
            "type": "DNI"
        }
    }
});

print(json.dumps(card_token, indent=4))
```
]]]

**Response**

```json
{
    "id": "ff8080814cbd77a8014cc",
    "public_key": null,
    "card_id": null,
    "luhn_validation": true,
    "status": "active",
    "date_used": null,
    "card_number_length": 16,
    "date_created": "2015-04-16T13:06:25.525-04:00",
    "first_six_digits": "450995",
    "last_four_digits": "3704",
    "security_code_length": 3,
    "expiration_month": 6,
    "expiration_year": 2018,
    "date_last_updated": "2015-04-16T13:06:25.525-04:00",
    "date_due": "2015-04-24T13:06:25.531-04:00",
    "live_mode": false,
    "cardholder": {
        "identification": {
            "number": "12345678",
            "type": "type"
        },
        "name": "name"
    }
}
```

Una vez hayas obtenido el _Card Token_ de la tarjeta, puedes [crear el pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card#bookmark_envía_el_pago_a_mercado_pago).
