# Receive payments being a PCI Compliant

Mercado Pago allows vendors who comply with PCI standards to tokenize cards via backend.

> WARNING
>
> Prerequisites
>
> * Implement the [payment processing via API](/guides/payments/api/receiving-payment-by-card.en.md#recibir-un-pago-con-tarjeta).
> * Possess the document Attestation of Compliance (AOC) signed by a QSA Consultant.
> * For more information in order to post server to server payments being PCI compliant contact: developers@mercadopago.com.

It is necessary to create a `card_token`, which is the secure representation of the card:

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

Once you got the card_token, you can [create the payment](../payments/api/receiving-payment-by-card.en.md#receive-card-payments).

## Get approval faster by submitting the Device Fingerprint

Mercado Pago has its own fraud prevention tools. Whenever possible, we recommend submitting information about the buyer's device. This will help prevent fraudulent transactions.

### Device deployment on the Web

To deploy the generation of the device on your website, you must add the following code to your checkout:

```html
<script src="https://resources.mlstatic.com/device/meli-metrix.min.js"></script>
```

In your form, add the following `input`:

```html
<form>
	...
    <input type='hidden' id='deviceId' name='deviceId' />
    ...
</form>
```

It is important that you submit the `deviceId` field to your server and add the following header to the request when creating the payment:

```http
X-Device-Session-Id: device_id
```

Donde `device_id` sea reemplazado por el ID obtenido en el paso anterior.

### Device deployment in native mobile applications

If you have a native application, you must submit information about your buyers’ device. You can do this by submitting the following information when creating a `card_token`:

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

Our SDKs have features you can use to capture this information.

[[[

```android
===
The [Device](https://github.com/mercadopago/px-ios/blob/master/MercadoPagoSDK/MercadoPagoSDK/Device.swift) class will collect both device and fingerprint information.
===
new Device(context);
```
```swift
===
The [Device](https://github.com/mercadopago/px-android/blob/master/sdk/src/main/java/com/mercadopago/model/Device.java) class will collect both device and fingerprint information.
===
Device()
```

]]]
