# Receba pagamentos sendo PCI Compliant

O Mercado Pago permite aos vendedores que cumprem com a regulamentação PCI que tokenizem cartões por backend.

> WARNING
>
> Pré-requisitos
>
> * Implementar o [processamento de pagamentos por API](https://www.mercadopago.com.br/developers/pt/guides/payments/api/receiving-payment-by-card).
> * Possuir o documento AOC (Declaração de Compliance) assinado por um consultor QSA.

É necessário criar um `card_token`, que é a representação segura do cartão:

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
using System;xº
using System.Collections;

MP mp = new MP("ACCESS_TOKEN");

Hashtable card_token = mp.post("/v1/card_tokens", "{"+
            "\"card_number\": \"450995xxxxxx3704\","+
            "\"security_code\": \"123\","+
            "\"expiration_month\": 6,"+
            "\"expiration_year\": 2018,"+
            "\"cardholder\": {"+
                "\"name\": \"APRO\","+
                "\"identification\": {"+
                    "\"number\": \"12345678\","+
                    "\"type\": \"DNI\""+
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

**Resposta**

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

Após obter o card_token, você pode [criar o pagamento](https://www.mercadopago.com.br/developers/pt/guides/payments/api/receiving-payment-by-card).

## Obtenha aprovação mais rápida enviando o Device Fingerprint

O Mercado Pago possui suas próprias ferramentas de prevenção de fraudes. Sempre que possível, recomendamos que envie informações sobre o dispositivo do comprador, isso ajudará a evitar transações fraudulentas.

### Implementação de dispositivo na Web

Para implementar a geração do dispositivo em seu site, adicione o seguinte código em seu checkout:

```html
<script src="https://resources.mlstatic.com/device/meli-metrix.min.js"></script>
```

Em seu formulário, adicione o seguinte `input`:

```html
<form>
	...
    <input type='hidden' id='deviceId' name='deviceId' />
    ...
</form>
```

É importante que envie o campo `deviceId` ao seu servidor e, ao criar o pagamento, adicione o seguinte header à requisição:

```http
X-Device-Session-Id: device_id
```

Onde `device_id` foi substituído pelo ID obtido no passo anterior.

### Implementação de dispositivos em aplicativos móveis nativos

Caso possua um aplicativo nativo, você deverá enviar informações sobre o dispositivo de seus compradores. É possível fazer isso enviando as seguintes informações ao criar um `card_token`:


```
{
	...,
	 "device":{
	  "fingerprint":{
	     "os":"iOS",
	     "system_version":"8.3",
	     "ram":18446744071562067968,
	     "disk_space":498876809216,
	     "model":"MacBookPro9,2",
	     "free_disk_space":328918237184,
	     "vendor_ids":[
	        {
	           "name":"vendor_id",
	           "value":"C2508642-79CF-44E4-A205-284A4F4DE04C"
	        },
	        {
	           "name":"uuid",
	           "value":"AB28738B-8DC2-4EC2-B514-3ACF330482B6"
	        }
	     ],
	     "vendor_specific_attributes":{
	        "feature_flash":false,
	        "can_make_phone_calls":false,
	        "can_send_sms":false,
	        "video_camera_available":true,
	        "cpu_count":4,
	        "simulator":true,
	        "device_languaje":"en",
	        "device_idiom":"Phone",
	        "platform":"x86_64",
	        "device_name":"iPhone Simulator",
	        "device_family":4,
	        "retina_display_capable":true,
	        "feature_camera":false,
	        "device_model":"iPhone Simulator",
	        "feature_front_camera":false
	     },
	     "resolution":"375x667"
	  }
}
```

Nossos SDKs possuem funções que podem ser utilizadas para capturar essas informações:

[[[

```android
===
A classe [Device](https://github.com/mercadopago/px-ios/blob/master/MercadoPagoSDK/MercadoPagoSDK/Device.swift) coletará tanto as informações do dispositivo quanto sua impressão digital (fingerprint).
===
new Device(context);
```
```swift
===
A classe [Device](https://github.com/mercadopago/px-android/blob/master/sdk/src/main/java/com/mercadopago/model/Device.java) coletará tanto as informações do dispositivo quanto sua impressão digital (fingerprint).
===
Device()
```

]]]
