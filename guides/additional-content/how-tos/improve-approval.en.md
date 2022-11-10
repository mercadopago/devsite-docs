# How to improve payments approval

When making an online payment, the transaction undergoes a careful analysis to minimize fraud risks and ensure that processing takes place without errors.

In this documentation, you will find information about what causes a payment to be declined and some recommendations to prevent this from happening.

## Why is a payment order rejected?

A payment may be declined due to an **issue with the payment method or because it does not meet the necessary security requirements**. For example, if the card does not have enough amount or if there is a strange movement of the account.

## Reasons for refusal

Payment refusal is a reality in the world of online sales and can happen for several reasons: incorrect filling of information by the customer, attempted fraud, problem in communication between acquirers, among many other issues. 

You can find the information and check the status of a payment via the API, through the [Get Payment](/developers/en/reference/payments/_payments_id/get) method. The `status` field indicates whether the payment was approved, while the `status_detail` field provides more details, including the reasons for rejection.

> NOTE
>
> Important
>
> You can also find more information about payments in the [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) account activity.


### Errors made by the buyer

This is one of the main reasons a payment might be declined. Occasionally, the buyer can make a mistake when filling in their data, **especially address, card numbers, and identification numbers**.

In these cases, the `status_detail` field may return: `cc_rejected_bad_filled_date`, `cc_rejected_bad_filled_other`, `cc_rejected_bad_filled_security_code`

### Bank rejected payments

When paying with a credit or debit card, for example, the issuing bank may refuse the charge for different reasons such as the expiration date, insufficient balance or limit, card disabled or blocked for online payments. 

In these cases, the `status_detail` field may return: `cc_rejected_call_for_authorize`, `cc_rejected_card_disabled`, `cc_rejected_duplicated_payment`, `cc_rejected_insufficient_amount`

### Payments rejected due to fraud prevention

When paying, both the issuing bank and Mercado Pago do a series of checks. If our anti-fraud system detects any unusual movement that characterizes a scam or fraud, it will be blocked. 

In these cases, the `status_detail` field may return: `cc_rejected_blacklist`, `cc_rejected_high_risk`

> WARNING
> 
> Rejection without reason
>
> Keep in mind that if the card issuer fails to inform the rejection reason, you’ll see the payment details as `cc_rejected_other_reason`. In this scenario, we recommend changing the payment method or reaching out to the bank to solve the issue.

## Recommendations to improve your approval

To prevent a legitimate payment from being refused because it does not meet security validations, **it is necessary to include all possible information** when carrying out the transaction. Furthermore, you must pay attention to some security requirements, such as our **Security Code** and **Device ID**.

> NOTE
>
> Important
>
> If you use Checkout Pro, you already implement our security methods to prevent fraud.

### Detail all information about the payment

To optimize payment security validation and improve approvals, it is important to submit as much buyer and item data as possible. 
 
When you use the [Create payment](/developers/en/reference/payments/_payments/post) method, make sure to fill in all the available fields. 

### Configure preferences

You can adapt **the Checkout Pro integration** to your business model by configuring preference attributes, which help improve approvals.

For more details, visit the [Checkout Pro preference setting](/developers/en/docs/checkout-pro/checkout-customization/preferences) documentation.

### Improve the User Experience

Often, the buyer can make mistakes when filling in their details at checkout. That's why it's worth reviewing every step, interaction, and even the interface design, to ensure everything is as clear as it should be. Please make the necessary changes to prevent confusion or issues.

### Help your customers with their declined payments
The reason for refusing payment must be explained to your customers. They need to be able to pay easily!

For example, if a payment is declined because the user does not have enough funds in their bank account, you could recommend they try using a different payment method to complete the transaction.

> NOTE
>
> Nota
>
> If you’re using Checkout Pro, don’t worry! All your messages are already set up. If you’re using another product, we recommend showing [a specific message for each rejection reason](/developers/en/guides/online-payments/checkout-api/handling-responses).


### Add the security code

Add the Mercado Pago security script to your page and replace the `view` value with the name of the section (e.g., home, search, item)

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

> NOTE
>
> Important
>
> In case of unavailable value for a section, left empty.

### Implement the Device ID in your site

The Device ID is an important piece of information to ensure better security and, consequently, a better payment approval rate. **It's a unique number that's used to identify a customer's device** when they are buying.

If a customer makes a purchase on a different device than usual, this may mean that the purchase was fake and should not be done.

To use it on the web, follow the steps below:

#### 1. Add the security code

To generate device IDs on your website, add the following code to your Checkout page:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

#### 2. Getting the device ID

When you add the Mercado Pago security code to your site, a global JavaScript variable is automatically created with the name `MP_DEVICE_SESSION_ID`, whose value is the device ID. 

  - If you prefer that we assign it to another variable, indicate the name by adding the attribute `output`, as in the following example:  
  ```html
  <script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
  ```

  - If you want your own variable, you can add an HTML tag on your site as `id="deviceId"` and the code will automatically assign the value device_id.
  ```html
  <input type="hidden" id="deviceId">
  ```

#### 3. Using the device ID

When creating a payment, you need to send us the Device ID value. To do so, simply add the following header to the request:

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