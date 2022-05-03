# Integrate MercadoPago’s payment flow in your application

## 1. Create a pay button

As an example, we propose that you initiate the MercadoPago’s flow from a button.

[[[

```android
===
1. Create an Activity to insert the button (**MainActivity**, for example).
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
      android:onClick='startMercadoPagoCheckout'/>

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
5. In the next step, you will be working on the event associated with the button click (startMercadoPagoCheckout).
===

import UIKit
import MercadoPagoSDK

class MainViewController: UIViewController {
@IBOutlet weak var payButton: UIButton!
@IBOutlet weak var paymentResult: UITextField!

override func viewDidLoad() {
  super.viewDidLoad()

  self.payButton.addTarget(self,
    action: #selector(MainViewController.startMercadoPagoCheckout),
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
5. In the next step, you will be working on the event associated with the button click (startMercadoPagoCheckout).
===

@import MercadoPagoSDK;

@interface MainExamplesViewController()
@property (weak, nonatomic) IBOutlet UIButton *button;
@property (weak, nonatomic) IBOutlet UILabel *label;

@end
@implementation MainExamplesViewController

- (void)viewDidLoad {
[super viewDidLoad];

[_button addTarget:self action:@selector(startMercadoPagoCheckout:)
forControlEvents:UIControlEventTouchUpInside];
}
@end
```

]]]

## 2. Start the Checkout

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
@IBAction func startMercadoPagoCheckout(_ sender: Any) {
    MercadoPagoCheckout.init(builder: MercadoPagoCheckoutBuilder.init(publicKey: "ENV_PUBLIC_KEY", preferenceId: checkoutPreferenceId))
    .start(navigationController: self.navigationController!)
}
```
```objective-c
- (IBAction)startMercadoPagoCheckout:(id)sender {
  MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:[[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"]];
  [checkout startWithNavigationController:self.navigationController lifeCycleProtocol:nil];
}
```

]]]

## 3. Get the response

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

The posible payment statuses are:

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
===
Implement **PXLifeCycleProtocol** protocol to be able to obtain the checkout result, and pass it as an argument on the checkout initialization. The methods that must be implemented are **finishCheckout** and **cancelCheckout** as it is shown in the next example. When you implement this protocol you are responsible for finishing the checkout flow, in this example we execute **popToRootViewController** to close the checkout.
===
@IBAction func startMercadoPagoCheckout(_ sender: Any) {
    MercadoPagoCheckout.init(builder: MercadoPagoCheckoutBuilder.init(publicKey: "ENV_PUBLIC_KEY", preferenceId: checkoutPreferenceId))
    .start(navigationController: self.navigationController!, lifeCycleProtocol: self)
}

func finishCheckout() -> ((_ payment: PXResult?) -> Void)? {
    return  ({ (_ payment: PXResult?) in
        print(payment)
        self.navigationController?.popToRootViewController(animated: false)
    })
}

func cancelCheckout() -> (() -> Void)? {
    return {
        self.navigationController?.popToRootViewController(animated: true)
    }
}
```
```objective-c
===
Implement **PXLifeCycleProtocol** protocol to be able to obtain the checkout result, and pass it as an argument on the checkout initialization. The methods that must be implemented are **finishCheckout** and **cancelCheckout** as it is shown in the next example. When you implement this protocol you are responsible for finishing the checkout flow, in this example we execute **popToRootViewController** to close the checkout.
===
- (IBAction)startMercadoPagoCheckout:(id)sender {
  MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:[[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"]];
  [checkout startWithNavigationController:self.navigationController lifeCycleProtocol:self];
}

-(void (^ _Nullable)(void))cancelCheckout {
    return ^ {
        [self.navigationController popToRootViewControllerAnimated:YES];
    };
}

- (void (^)(id<PXResult> _Nullable))finishCheckout {
    return nil;
}
```

]]]

## Enable payment notifications

Notifications are automatically sent to inform you of any new payments and status updates.

This will allow you to manage your inventories and keep your system in sync.

To learn more about it, go to [Notifications.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction)

## Prevent payment rejection

A payment can be rejected because the issuer for the selected method detected a problem or because of non-compliance with security requirements.

Avoid rejected payments with our recommendations and [improve the approval process](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/payment-rejections).

## Test the integration

You can test the integration before going into production, in order to check the operation and make all the adjustments you need.

For that, you must use test users and cards.

For more information, go to the [Testing](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/mobile-checkout/testing) section.

## Next steps

- To adapt the payment flow to your needs, go to the [Customization](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/mobile-checkout/personalization) section.
