# Receive payments being a PCI Compliant

Mercado Pago allows vendors who comply with PCI standards to tokenize cards via backend.

> WARNING
>
> Prerequisites
>
> * Implement the [payment processing via API](https://www.mercadopago.com.ar/developers/en/guides/payments/api/receiving-payment-by-card#recibir-un-pago-con-tarjeta).
> * Possess the document Attestation of Compliance (AOC) signed by a QSA Consultant.
> * For more information in order to post server to server payments being PCI compliant please contact us via the support form being logged in with your Mercado Pago account.

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

Once you got the card_token, you can [create the payment](https://www.mercadopago.com.ar/developers/en/guides/payments/api/receiving-payment-by-card#recibir-un-pago-con-tarjeta).

## Get approval faster by submitting the device fingerprint

Mercado Pago has its own fraud prevention tools. We always recommend sending information about customer behaviors to detect unusual movements and avoid fraudulent transactions. And don't worry, we take care of your customer's data and we won't share them with anyone.

### Device deployment on the web

To deploy the device on your website, you must add the following code to your checkout:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

When creating a payment, it’s important to send the `device_id` generated by this code to your server and add the following header to the request:

```http
X-meli-session-id: device_id
```

**You can obtain the `device_id` in two ways:**

A global javascript variable is automatically created `MP_DEVICE_SESSION_ID` with the value ` device_id`. If you prefer that we assign it to another variable, indicate the name by adding the attribute `output`.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
````

Also, you can add an HTML tag on your site with the identificator `id =" deviceId "` and the code will automatically assign the value `device_id`.

```html
<input type="hidden" id="deviceId">
```

### Device deployment on native mobile applications

If you have a native application, you can capture the device information with our SDK and send it when creating the token.

#### 1. Add dependency

[[[

```ios
===
Add the following code in the **Podfile** file.
===
use_frameworks!
pod ‘MercadoPagoDevicesSDK’
```
```android
===
Add the following code in the **build.gradle** file.
===
dependencies {
   implementation 'com.mercadolibre.android.device:sdk:1.0.0'
}
```

]]]

#### 2. Initialize module

[[[

```swift
===
We recommend initializing it in the _didFinishLaunchingWithOptions_ event of the _AppDelegate_.
===
import MercadoPagoDevicesSDK
...
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        ...        
        MercadoPagoDevicesSDK.shared.execute()
        ...
}
```
```objective-c
===
We recommend initializing it in the _didFinishLaunchingWithOptions_ event of the _AppDelegate_.
===
@import ‘MercadoPagoDevicesSDK’;
...
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    ...
    [[MercadoPagoDevicesSDK shared] execute];
    ...
}
```
```java
===
We recommend initializing it in the _MainApplication_ class.
===
import com.mercadolibre.android.devices.sdk.DeviceSDK;


DeviceSDK.getInstance().execute(this);
```

]]]

#### 3. Capture information

Execute one of these functions to obtain the information in the format that you prefer.

[[[

```swift
MercadoPagoDevicesSDK.shared.getInfo() // Returns a Codable Device Object
MercadoPagoDevicesSDK.shared.getInfoAsJson() // Returns a JSON Library Data Object
MercadoPagoDevicesSDK.shared.getInfoAsJsonString() // Returns a JSON String
MercadoPagoDevicesSDK.shared.getInfoAsDictionary() // Returns a Dictionary<String,Any>
```
```objective-c
[[[MercadoPagoDevicesSDK] shared] getInfoAsJson] // Returns a JSON Library Data Object
[[[MercadoPagoDevicesSDK] shared] getInfoAsJsonString] // Returns a JSON String
[[[MercadoPagoDevicesSDK] shared] getInfoAsDictionary] // Returns a Dictionary<String,Any>
```
```java
Device device = DeviceSDK.getInstance().getInfo() // Returns a Serializable Device Object
Map deviceMap = DeviceSDK.getInstance().getInfoAsMap()  // Returns a Map<String, Object>
String jsonString = DeviceSDK.getInstance().getInfoAsJsonString() // Returns a JSON String
```

]]]

#### 4. Send information

Finally, send the information in the `device` field when creating the `card_token`.

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
