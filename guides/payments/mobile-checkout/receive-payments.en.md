---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
    - mlv
    - global
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
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)
```
]]]

Then, you must add the attributes of your payment preference:

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
  $item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
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
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();

```
```javascript
var preference = {}

var item = {
  title: '[FAKER][COMMERCE][PRODUCT_NAME]',
  quantity: 1,
  currency_id: 'ARS',
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
preference = MercadoPago::Preference.new()

item = MercadoPago::Item.new()
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

preference.items = [item]
preference.payer = payer

preference.save
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
    "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
      "street_number": [FAKER][ADDRESS][BUILDING_NUMBER],
      "zip_code": "[FAKER][ADDRESS][ZIP_CODE]"
    }
  },
  ...
}
```

## Integrate MercadoPago’s payment flow in your application


### 1. Create a pay button

As an example, we propose that you initiate the MercadoPago’s flow from a button.

[[[

```android-xml
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

### 2. Start the Checkout

After creating the payment preference and defining an event from which to start the payment flow, you can start our Checkout with the following code:

[[[

```android
===
To start the checkout you need to call **startPayment** passing as arguments the Android context and a RequestCode which is the number that will identify the checkout response in the method **onActivityResult**.
===

private static final int REQUEST_CODE = 1;

private void startMercadoPagoCheckout(final String checkoutPreferenceId) {
  new MercadoPagoCheckout.Builder("ENV_PUBLIC_KEY", checkoutPreferenceId).build()
                    .startPayment(MainActivity.this, REQUEST_CODE);
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


### 3. Get the response

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
===
Use the RequestCode that you sent on **startPayment** to obtain the checkout result on **onActivityResult**.
===
@Override
protected void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
    if (requestCode == REQUEST_CODE) {
        if (resultCode == MercadoPagoCheckout.PAYMENT_RESULT_CODE) {
            final Payment payment = (Payment) data.getSerializableExtra(MercadoPagoCheckout.EXTRA_PAYMENT_RESULT);
            ((TextView) findViewById(R.id.mp_results)).setText("Resultado del pago: " + payment.getStatus());
            //Done!
        } else if (resultCode == RESULT_CANCELED) {
            if (data != null && data.getExtras() != null
                && data.getExtras().containsKey(MercadoPagoCheckout.EXTRA_ERROR)) {
                final MercadoPagoError mercadoPagoError =
                    (MercadoPagoError) data.getSerializableExtra(MercadoPagoCheckout.EXTRA_ERROR);
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

## Enable payment notifications

Notifications are automatically sent to inform you of any new payments and status updates.

This will allow you to manage your inventories and keep your system in sync.

To learn more about it, go to [Notifications.](/guides/notifications/ipn.en.md)

## Test the integration

You can test the integration before going into production, in order to check the operation and make all the adjustments you need.

For that, you must use test users and cards.

For more information, go to the [Test](/guides/payments/mobile-checkout/testing.en.md) section.

### Next steps

- To adapt the payment flow to your needs, go to the [Customization](/guides/payments/mobile-checkout/personalization.en.md) section.
