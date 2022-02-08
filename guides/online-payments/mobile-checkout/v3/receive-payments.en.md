---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
---
# Receive Payments

> WARNING
>
> Prerequisites
>
> * This guide presumes that you have already followed the steps in the introduction section of the documentation for installing the SDK.

This guide will help you integrate MercadoPago’s visual payment component in your application. This component addresses the selection of the payment method, the collection of data from the payment method of the user and the communication of the payment result.

#### The integration consists of two steps:
- Integration in your server: in this step, you will get the payment information.
- Integration in your application: in this step, you will configure the visual component.

![scheme](/images/mobile-sdk-schema.png)

1. Create the payment preference from your server on MercadoPago’s servers.
2. Start the checkout in your application, using the preference id.
3. The Checkout will make the payment on MercadoPago’s servers.
4. Sign up to receive notifications to find out about new payments and status updates.

## Set up your server

In order to start the payment flow, you need to get information about the product or service to be paid.
This entity is the payment preference and contains:

1. Description and amount.
2. Your buyer’s information (email, name, address, etc.).
3. Payment methods accepted.
4. Reference ID of your system.

[[[
```php
<?php  
  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);
?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
```
```node
var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")
```
]]]

Then, you must add the attributes of your payment preference:

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "test_user_19653727@testuser.com";

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->save();
?>
```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();

```
```javascript
var preference = {}

var item = {
  title: 'Blue shirt',
  quantity: 1,
  currency_id: '[FAKER][CURRENCY][ACRONYM]',
  unit_price: [FAKER][COMMERCE][PRICE]
}

var payer = {
  email: "demo@mail.com"
}

preference.items = [item]
preference.payer = payer

mercadopago.preferences.create(preference).then(function (data) {
   // Do Stuff...
 }).catch(function (error) {
   // Do Stuff...
 });
```
```ruby
preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  }
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```python
preference_data = {
    "title": "Blue shirt",
    "quantity": 10,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "unit_price": [FAKER][COMMERCE][PRICE],
    "payer": {
        "email": "john@yourdomain.com"
    }
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

### Content of the preference

The more information you send us, the faster is the payment approval and the better is the experience for your users.

#### Payer

You must submit your buyer’s email.

```json
{
   ...,
  "payer": {
    "name": "[FAKER][NAME][FIRST_NAME]",
    "surname": "[FAKER][NAME][LAST_NAME]",
    "email": "john@yourdomain.com",
    "date_created": "2015-06-02T12:58:41.425-04:00",
    "phone": {
      "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
      "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
    },
    "identification": {
      "type": "DNI",
      "number": "123456789"
    },
    "address": {
      "street_name": "[FAKER][ADDRESS][STREET_NAME]",
      "street_number": 7304,
      "zip_code": "[FAKER][ADDRESS][ZIP_CODE]"
    }
  },
  ...
}
```

## Integrate MercadoPago’s payment flow in your application


### 1. Connect your application to your server

In the SDK, we offer you a class called CustomServer to make the connection to your server easier. The `createPreference` method makes a _POST_ and sends a map that you can configure to receive extra info (`preferenceMap`) as the message body. Send us your base URL (https://your-base-url.com) and the URI (/your-create-preference-uri) where you receive the data to create the preference.

The _CustomServer_ will be responsible for converting your service response (which must have the same structure as that of MercadoPago) into a **CheckoutPreference** object, whose ID is the entry point to our checkout.

Create the preference on your server from your application with the following code:


[[[

```android
public void submit(View view) {
// Create a map with payment’s details.
Map<String, Object> preferenceMap = new HashMap<>();
preferenceMap.put("item_id", "1");
preferenceMap.put("amount", new BigDecimal(10));
preferenceMap.put("currency_id", "[FAKER][CURRENCY][ACRONYM]");
preferenceMap.put("payer_email", "john@yourdomain.com");

final Activity activity = this;
LayoutUtil.showProgressLayout(activity);
CustomServer.createCheckoutPreference(activity, "https://your-base-url.com", "/your-create-preference-uri", preferenceMap, new Callback<CheckoutPreference>() {
@Override
public void success(CheckoutPreference checkoutPreference) {
startMercadoPagoCheckout(checkoutPreference);
LayoutUtil.showRegularLayout(activity);
}

@Override
public void failure(ApiException apiException) {
// Ups, something went wrong
}
});
}
```
```swift
        let preferenceBody : [String : Any] = ["item_id" : "id", "quantity" : 10]

        CustomServer.createCheckoutPreference(url: "https://your-base-url.com/", uri: "your-create-preference-uri", bodyInfo: preferenceBody as NSDictionary, success: { (checkoutPrefernece) in
            startMercadoPagoCheckout(checkoutPreference)
        }) { (error) in
            // Handle error
        }
```
```Objective-c
    NSDictionary *preferenceBody = @{
                                     @"amount" : @10,
                                     @"itemId" : @29334,
                                     @"customerId" : @207,
                                     @"payerEmail" : @"john@yourdomain.com" };


    [CustomServer createCheckoutPreferenceWithUrl:@"https://your-base-url.com" uri:@"/your-create-preference-uri" bodyInfo:preferenceBody success:^(CheckoutPreference * checkoutPreference) {
        [self startMercadoPagoCheckoutWithCheckoutPreference: checkoutPreference];

    } failure:^(NSError * error) {
        // Ups, something went wrong
    }];
```

]]]

### 2. Create a pay button

As an example, we propose that you initiate the MercadoPago’s flow from a button.

[[[

```android
===
1.  Create an Activity to insert the button (** MainActivity**, for example).  
2. Add a text field to show the payment result.
3. Paste the following sample code in **res/layout/activity_main.xml**.
===

<FrameLayout xmlns:android='http://schemas.android.com/apk/res/android'
xmlns:tools='http://schemas.android.com/tools'
android:layout_width='match_parent'
android:layout_height='match_parent'
android:paddingLeft='@dimen/activity_horizontal_margin'
android:paddingRight='@dimen/activity_horizontal_margin'
android:paddingTop='@dimen/activity_vertical_margin'
android:paddingBottom='@dimen/activity_vertical_margin'
android:orientation='vertical'
tools:context='.MainActivity'>
<include layout="@layout/mpsdk_view_progress_bar"/>
<LinearLayout
android:id="@+id/mpsdkRegularLayout"
android:layout_width="match_parent"
android:layout_height="match_parent"
android:orientation="vertical">

<Button
android:layout_width='match_parent'
android:layout_height='50dp'
android:layout_marginTop='25dp'
android:gravity='center'
android:text='Pagar $10'
android:onClick='submit'/>

<TextView
android:layout_width='match_parent'
android:layout_height='wrap_content'
android:id='@+id/mp_results'
android:paddingTop='50dp'/>
</LinearLayout>
</FrameLayout>
```
```swift
===
1. Create a ViewController to insert the button (**MainViewController**, for example).
2. Insert a button on the corresponding **.xib**.
3. Add a text field to show the payment result.
4. Paste the following example code on your class **MainViewController.swift**.
5. In the next step, you will be working on the event associated with the button click (startCheckout).
===

import UIKit
import MercadoPagoSDK

class MainViewController: UIViewController {
@IBOutlet weak var payButton: UIButton!
@IBOutlet weak var paymentResult: UITextField!

override func viewDidLoad() {
super.viewDidLoad()

self.payButton.addTarget(self,
action: #selector(MainViewController.startCheckout),
for: .touchUpInside)
}
}
```   
```objective-c
===
1. Create a ViewController to insert the button (**MainViewController**, for example).
2. Insert a button on the corresponding .xib.
3. Add a text field (in our case we call it paymentResult) to show the payment result.
4. Paste the following example code on your class **MainViewController.c**.
5. In the next step, you will be working on the event associated with the button click (startCheckout).
===

@import MercadoPagoSDK;

@interface MainExamplesViewController()
@property (weak, nonatomic) IBOutlet UIButton *button;
@property (weak, nonatomic) IBOutlet UILabel *label;

@end
@implementation MainExamplesViewController

- (void)viewDidLoad {
[super viewDidLoad];

[_button addTarget:self action:@selector(startCheckout:)
forControlEvents:UIControlEventTouchUpInside];
}
@end
```

]]]

### 3. Start the Checkout

After creating the payment preference and defining an event from which to start the payment flow, you can start our Checkout with the following code:

[[[

```android
private void startMercadoPagoCheckout(CheckoutPreference checkoutPreference) {
  new MercadoPagoCheckout.Builder()
    .setActivity(activity)
    .setPublicKey("ENV_PUBLIC_KEY").setCheckoutPreference(checkoutPreference)
    .startForPayment();
}
```
```swift
===
The flow of our checkout is based on **NavigationController**. If your application is also based on NavigationControllers you can start the Checkout flow using the NavigationController of your application, or you can create one, start the Checkout on it, and then present it.
===

public func startMercadoPagoCheckout(_ checkoutPreference CheckoutPreference) {

let checkout = MercadoPagoCheckout(publicKey: "ENV_PUBLIC_KEY", accessToken: nil, checkoutPreference: checkoutPreference,
navigationController: self.navigationController!)

checkout.start()
}
```
```objective-c
===
The flow of our checkout is based on **NavigationController**. If your application is also based on NavigationControllers you can start the Checkout flow using the NavigationController of your application, or you can create one, start the Checkout on it, and then present it.
===

-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
    MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: "ENV_PUBLIC_KEY" checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
    [checkout start];
}
```

]]]


### 4. Get the response

The SDK will always return a payment result.

In the event of a hard error, or if the user left the flow, it will return an object representing the error so you can understand what happened.

These are the most important payment attributes:

- id: Payment identifier.
- status: Payment status.
- payment\_method\_id: Identifier of the payment method selected by your user.
- payment\_type\_id: Payment type selected.
- card: Object that identifies your user’s card.
- issuer_id: : Identifier of the card bank selected by your user.
- installments: Number of installments selected.

The posible payment status are:

![payment-status](/images/payments-status-transitions-diagram.png)

You can get the response with the following code:

[[[

```android
@Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == MercadoPagoCheckout.CHECKOUT_REQUEST_CODE) {
            if (resultCode == MercadoPagoCheckout.PAYMENT_RESULT_CODE) {
                Payment payment = JsonUtil.getInstance().fromJson(data.getStringExtra("payment"), Payment.class);
                ((TextView) findViewById(R.id.mp_results)).setText("Resultado del pago: " + payment.getStatus());
                //Done!
            } else if (resultCode == RESULT_CANCELED) {
                if (data != null && data.getStringExtra("mercadoPagoError") != null) {
                    MercadoPagoError mercadoPagoError = JsonUtil.getInstance().fromJson(data.getStringExtra("mercadoPagoError"), MercadoPagoError.class);
                    ((TextView) findViewById(R.id.mp_results)).setText("Error: " +  mercadoPagoError.getMessage());
                    //Resolve error in checkout
                } else {
                    //Resolve canceled checkout
                }
            }
        }
    }
```      
```swift
MercadoPagoCheckout.setPaymentCallback { (payment) in
self.payment = payment
}

checkout.setCallbackCancel {
   // Resolved cancel checkout
   self.navigationController?.popToRootViewController(animated: true)
}
```
```objective-c
[MercadoPagoCheckout setPaymentCallbackWithPaymentCallback:^(Payment * payment) {
self.payment = payment
}];

[self.checkout setCallbackCancelWithCallback:^{
	// Resolved cancel checkout
  [self.navigationController popToRootViewControllerAnimated:YES];
}];
```

]]]

### Color settings

You can change the colors of the graphical interface of the payment flow, as well as make the font darker, by using the DecorationPreference class. You can do this using the following code:

[[[

```android
private void startMercadoPagoCheckout(CheckoutPreference checkoutPreference) {
  DecorationPreference decorationPreference = new DecorationPreference.Builder()
    .setBaseColor(ContextCompat.getColor(context, R.color.your_color))
    .enableDarkFont() //Optional
    .build();

  new MercadoPagoCheckout.Builder()
    .setActivity(activity)
    .setDecorationPreference(decorationPreference)
    .setPublicKey("ENV_PUBLIC_KEY")
    .setCheckoutPreference(checkoutPreference)
    .startForPayment();
}
```
```swift
public func startMercadoPagoCheckout(_ checkoutPreference CheckoutPreference) {
    let decorationPreference: DecorationPreference = DecorationPreference()
    decorationPreference.setBaseColor(color: UIColor.purple)
    decorationPreference.enableDarkFont()
    MercadoPagoCheckout.setDecorationPreference(decorationPreference)

    let checkout = MercadoPagoCheckout(publicKey: "ENV_PUBLIC_KEY", accessToken: nil, checkoutPreference: checkoutPreference,
    navigationController: self.navigationController!)

    checkout.start()
}
```
```objective-c
DecorationPreference *decorationPreference = [[DecorationPreference alloc] initWithBaseColor:[UIColor fromHex:@"#CA254D"]];
[decorationPreference enableDarkFont];
[MercadoPagoCheckout setDecorationPreference:decorationPreference];

-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
    MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: "ENV_PUBLIC_KEY" checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
    [checkout start];
}
```

]]]

The SDK allows you to set the color in the hexadecimal format, i.e. **setBaseColor("#060d72");**.

## Enable payment notifications

Notifications are automatically sent to inform you of any new payments and status updates.

This will allow you to manage your inventories and keep your system in sync.

To learn more about it, go to [Notifications.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction)

## Test the integration

You can test the integration before going into production, in order to check the operation and make all the adjustments you need.

For that, you must use test users and cards.

For more information, go to the [Test](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/mobile-checkout/testing) section.

### Next steps

- To adapt the payment flow to your needs, go to the [Customization](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/mobile-checkout/v3/personalization) section.
- For information on how to test, go to the [testing integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/mobile-checkout/v3/testing) section.
