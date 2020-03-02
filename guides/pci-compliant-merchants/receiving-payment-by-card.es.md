# Recibir pagos siendo PCI Compliant

Mercado Pago permite a vendedores que cumplen con las normativas PCI, _tokenizar_ las tarjetas por _backend_.

> WARNING
>
> Pre-requisitos
>
> * Implementar el [procesamiento de pagos por API](https://www.mercadopago.com.ar/developers/es/guides/payments/api/receiving-payment-by-card#recibir-un-pago-con-tarjeta).
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

Una vez hayas obtenido el _Card Token_ de la tarjeta, puedes [crear el pago](https://www.mercadopago.com.ar/developers/es/guides/payments/api/receiving-payment-by-card#recibir-un-pago-con-tarjeta).

## Mejora la aprobación enviando el _Device Fingerprint_

Mercado Pago tiene sus propias herramientas de prevención de fraude. Siempre que sea posible recomendamos enviar información sobre los comportamientos de los clientes para detectar movimientos inusuales y poder evitar transacciones fraudulentas. Y no te preocupes, cuidamos los datos de tus clientes y no los compartiremos con nadie.

### Implementación del _device_ en Web

Para **implementar en tu sitio la generación del Device** debes agregar el siguiente código a tu plataforma de pagos:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

**Es importante que envíes el `device_id` generado por este script a tu servidor** y que al momento de crear el pago agregues el siguiente header al request:

```http
X-meli-session-id: device_id
```
**Puedes obtener el `device_id` de dos formas:**
- Usando una variable global de javascript de nombre predefinido o con el nombre que necesites.
- Sumando una etiqueta HTML en tu sitio.

Usa el script para crear automáticamente una **variable global de javascript** con el nombre `MP_DEVICE_SESSION_ID` cuyo valor es el `device_id`. Y si lo necesitas, **indica el nombre de la variable que necesites** al sumar el atributo output.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceFingerprint"></script>
````

También, puedes agregar una **etiqueta HTML en tu sitio** con el identificador `id="deviceId"`.

```html
<input type="hidden" id="deviceId">
```

El script va a agregar el atributo `value` y le asignará automáticamente el `device_id`.

### Implementación de _device_ en aplicaciones móviles nativas

Si cuentas con una aplicación nativa deberás enviar información sobre el _device_ de tus compradores, esto lo puedes hacer enviando la siguiente información al momento de crear un `card_token`:

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

Nuestros SDKs cuentan con funciones que puedes utilizar para capturar esta información:

[[[

```android
===
La clase [Device](https://github.com/mercadopago/px-android/blob/master/px-services/src/main/java/com/mercadopago/android/px/model/Device.java) recolectará tanto la información del dispositivo como su fingerprint.
===
new Device(context);
```
```swift
===
La clase [Device](https://github.com/mercadopago/px-ios/blob/master/MercadoPagoSDK/MercadoPagoSDK/Device.swift) recolectará tanto la información del dispositivo como su fingerprint.
===
Device()
```

]]]
