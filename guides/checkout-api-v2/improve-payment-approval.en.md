# How to improve payments approval

## Why is a payment order rejected?

Payment refusal is a reality in the world of online sales and can happen for several reasons. **A payment may be declined due to**:
 * an issue with the payment method;
 * incorrect data filling on the client side;
 * insuficient amount of money on the card used in the transaction;
 * breach of any of the necessary security requirements;
 * strange movements of the account that may indicate a fraude risk;
 * problems in communication between acquirers.

You can **find the information and check the status of a payment** via the API, through the [Get Payment](/developers/en/reference/payments/_payments_id/get) method. The `status` field indicates whether the payment was approved, while the `status_detail` field provides more details, including the reasons for rejection.

```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_insufficient_amount",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

> NOTE
>
> Important
>
> You can find more information about payments in the [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) account activity.
### Rejections due to errors in data filling

These rejections are due to **errors committed during the checkout process**, that may happen for different reasons: trouble understanding the payment screen, problems with the customer's experience, lack of validations in certain fields, or common mistakes made by the client when completing their data, especially their card’s data.

In these cases, the `status_detail` field may return: 
 * `cc_rejected_bad_filled_card_number`
 * `cc_rejected_bad_filled_date`
 * `cc_rejected_bad_filled_other`
 * `cc_rejected_bad_filled_security_code`


### Rejections made by the issuing bank

When paying with a **credit or debit card**, the issuing bank may refuse the charge for different reasons, such as the expiration date, insufficient balance or limit, or disabled or blocked card for online payments.

In these cases, the `status_detail` field may return: 
 * `cc_rejected_call_for_authorize`
 * `cc_rejected_card_disabled`
 * `cc_rejected_duplicated_payment`
 * `cc_rejected_insufficient_amount`
 * `cc_rejected_invalid_installments`
 * `cc_rejected_max_attempts`


### Rejections due to fraud prevention

We monitor transactions in real time in order to **recognize suspicious features and patterns** that may indicate a fraude attempt. This is made both by the Mercado Pago algorithm and the banks, in an attempt to reduce chargebacks to a minimum. 

When our fraud prevention system detects a suspicious payment, the API’s response in the `status_detail` field may return: 
 * `cc_rejected_blacklist`
 * `cc_rejected_high_risk`
 * `cc_rejected_other_reason`


> WARNING
> 
> Attention
>
> `cc_rejected_other_reason` is a status given by the bank that doesn’t mention the reason of the rejection, but indicates a fraude risk estimation. However, there may be other reasons why this status is returned. In case of doubt, it is recommended to choose other payment method to fulfill the transaction or to get in touch with the issuer bank institution.
```json
 {
    "status": "rejected",
    "status_detail": "cc_rejected_high_risk",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

## Recommendations to improve your approval

**To prevent a legitimate payment from being refused** because it does not meet the security validations, it is necessary to include all possible information when carrying out the transaction, as well as having your checkout’s interface optimized. 

You can see our **recommendations to improve your approval** in detail below.

### Get and send the Device ID

The **Device ID** is an important piece of information to ensure better security and, consequently, a better payment approval rate. It's a unique number that's used to identify a customer's device when they are buying.

If a customer makes a purchase on a different device than usual, this may represent an atypical behaviour. Even if it’s not necessarily a fraude, the Device ID could help us to make a correct assessment and avoid legitimate payment rejections.

> WARNING
> 
> Attention
>
> If you are already using the [JS SDK of Mercado Pago](/developers/es/docs/sdks-library/client-side/mp-js-v2), it **won’t** be necessary to add the security script because the Device ID information is already being collected.

**Add the Mercado Pago security script** to your page by replacing the `view` value with the name of the section in which you wish to add it. Adding it to your **checkout URL** is the most important, but doing it in **other pages**, such as home, search or item, may be helpful to collect even more information.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```


> NOTE
>
> Important
>
> In case of unavailable value for a section, leave it empty.

### * Implement the Device ID in your site

To use the Device ID on your web and prevent possible fraudulent purchases, follow the steps below:

#### 1. Add the security code

To generate device IDs on your website, add the following code to your Checkout page:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

#### 2. Getting the device ID

When you add the Mercado Pago security code to your site, a global JavaScript variable is automatically created with the name `MP_DEVICE_SESSION_ID`, whose value is the device ID. 

If you prefer that we assign it to another variable, indicate the name by adding the attribute `output`, as in the following example:  

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
```

You can also **create your own variable** by adding an HTML tag on your site as `id="deviceId"` and the code will automatically assign the value device_id.

```html
<input type="hidden" id="deviceId">
```

#### 3. Use the device ID

Once you have the Device ID, you must **send it to our servers** when creating a payment. To do so, simply add the following header to the request:

```http
X-meli-session-id: device_id
```

> WARNING
> 
> Attention
>
> Remember to replace `device_id` with the name of the variable that contains your Device ID value.
### Implement the Device ID in your native mobile application

If you have a native application, you can capture the device information with our SDK and send it when creating the token. Follow these steps:

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
   implementation 'com.mercadolibre.android.device:sdk:2.0.1'
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
import com.mercadolibre.android.device.sdk.DeviceSDK;
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

### Detail all information about the payment

To optimize payment security validation and improve approvals, it is important to **submit as much buyer and item data as possible**.
You can check all the available attributes when creating a payment by using the [Create payment](/developers/en/reference/payments/_payments/post) method. Pay special attention to the attributes present in `adicional_inf`, such as:
 * Buyer’s data,
 * Product data,
 * Shipping data.

There are also some **extra fields** that can be sent depending on the **branch of activities or industry of your store**. You can find details of every branch and the buyer and shipping data that we recommend to include for each of them [here]().

### Improve the User Experience

Often, the buyer can make mistakes when filling in their details at checkout. That's why it's worth reviewing every step, interaction, and even the interface design, to ensure everything is as clear as it should be. 

In case you wish to **create your front-end from scratch**, you can find some advice on how to do so in an efficient way [here](/developers/en/docs/checkout-api/best-practices/ux-best-practices/ux-for-checkouts/introduction). If a payment is rejected, it is also important to explain to your customers why it is and what they can do to fix it. By doing so, your clients would have all the information they need to pay without any problems. You can find some **recommendations on how to inform the main rejection reasons** [here](/developers/es/docs/checkout-api/response-handling/collection-results).

In case you wish to guarantee an optimized interface, you can use the **visual components of [Checkout Bricks](/developers/en/docs/checkout-bricks/landing)**, and also use a **predefined visual component** with the best messages with [Status Screen Brick](/developers/en/docs/checkout-bricks/status-screen-brick/introduction).

> WARNING
> 
> Important
>
> We recommend assessing your [integration’s quality](/developers/en/docs/checkout-api/additional-content/integration-quality) before going to production to check if you are meeting the Mercado Pago quality and security standards that would help you obtain a good payment approval rate.