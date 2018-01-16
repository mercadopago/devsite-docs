---
sites_supported:
  - mla
  - mlb
  - mlm
  - global
---

# Charges with integrated Point
To be able to charge in an integrated manner with the Point device, it is necessary to download the Mercado Pago Point application available in the iOS and Android marketplaces.

Currently, we allow to carry out an integration from any type of external application that can be accessed from the same device where the seller has installed the Mercado Pago Point application:

- Native Android or iOS Mobile application.
- Hybrid Mobile application.
- Web Application.

> WARNING
>
> Pre-requisites
>
> * Have the Mercado Pago Point app
> * Have a Point device associated with the Mercado Pago account
> * The seller must be logged in with your Mercado Pago account in the Mercado Pago Point application.
> * Available for Android version 2.8.0 or higher, iOS version 1.7.0 or higher and only when running on iOS 9 or higher.

## Flowchart

![instore diagram](/images/point_diagram.png)


## Integration via Deep Linking

One of the ways to integrate with Mercado Pago Point is through a deep linking. When that link is accessed, it will be intercepted as a point-handled address.

In the call to this link you can send different parameters that will be raised by the Point application and impacted in the payment. Once the call to this link is made, the seller will be redirected to the Mercado Pago Point application screen to pass the customer's card and thus make the payment.

Once the payment is processed, the user will be redirected to the success url or fail url, depending on the status of the payment. This must be intercepted to return the user to the flow of your application. 


### Creation of Deep Linking

The URL to call the Mercado Pago Point application is:


`` `https: // secure.mlstatic.com / org-img / point / app / index.html```

The parameters that can be included are:

* `amount`: The amount that will be charged to the customer (*).
* `description`: A description of the operation (Max .: 20 characters) (*).
* `external_reference`: The reference code of your system, it is the one that will allow you to reconcile your purchase order with payment.
* `notification_url`: It is the URL where you will receive notification of that payment.
* `payer_email`: It is the payer's email.
* `success_url`: It is the URL where the user will be redirected after an approved payment.
* `fail_url`: It is the URL where the user will be redirected after a rejected payment.

> WARNING
>
> * Fields marked with (*) are required fields.

#### Android
To manage on Android the `success_url` and` failure_url` on the Android Manifest of your project you have to declare an activity similar to the following:

```
<activity android: name = ". ActivityName">
<intent-filter>
<action android: name = "android.intent.action.VIEW" />
<category android: name = "android.intent.category.DEFAULT" />
<category android: name = "android.intent.category.BROWSABLE" />
<data
Android: host = "www.example.com"
android: scheme = "example" />
   </ intent-filter>
</ activity>
```

#### iOS
To manage on iOS the `success_url` and` failure_url` you have to configure a return URL of type `myapp: //` and you have to add the scheme to `info.plis`

When from the Mercado Pago application return to that URL your app will open in the method declared in `appdelegate`

```
open func application (_ application: UIApplication, open url: URL, sourceApplication: String ?, annotation: Any) -> Bool
```
In the case that the app was closed, in the method of the `appdelegate didFinishLaunchingWithOptions` you will get the URL within the` launchingoptions`



## Integration via Intent-Based
> WARNING
>
> * This integration is only available for Android version 2.8.0 or higher.

The other way to integrate with the Mercado Pago Point application is through native Android code, through the concept of Intent-Based.

The first thing you should do is declare an `intentFilter`:

```
IntentFilter filter = new
IntentFilter ("com.mercadopago.merchant.PAYMENT_STATUS");
```

Then you must create a new `Intent`:

```
Intent i = new Intent ();
i.setAction ("com.paymarket.PAYMENT_ACTION");
Bundle bundle = new Bundle ();
```

You must upload the information you want to send in the bundle when charging:

```
bundle.putDouble (BundleCodes.AMOUNT, <AMOUNT>);
bundle.putString (BundleCodes.DESCRIPTION, <DESCRIPTION>);
...
```

The parameters that can be included in the `bundle` are:

* `amount`: The amount that will be charged to the customer (*).
* `description`: A description of the operation (Max .: 20 characters) (*).
* `external_reference`: The reference code of your system, it is the one that will allow you to reconcile your purchase order with payment.
* `notification_url`: It is the URL where you will receive notification of that payment.
* `payer_email`: It is the payer's email.


> WARNING
>
> * Fields marked with (*) are required fields.


Finally, use the `startActivityForResult` method to directly initiate the payment process by sending the necessary data for processing:

```
i.putExtras (bundle);
startActivityForResult (i, PAYMENT_REQUEST);
```

The result of the payment will be obtained in the method `onActivityResult`

## Payment Notifications

It is necessary that you send your `notification_url`, where you will receive notice of all new payments and updates of states that are generated.

In the article of [notifications] (../../notifications/webhooks) you can get more information.

