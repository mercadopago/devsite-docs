# Mobile Checkout

Mercado Pago SDK makes it easy to create a payment experience in your application. You will instantly offer your users:

----[mla, mpe, mlb, mlm]----
- Card payments, payments in cash or bank transfer.
- **Financing**: payments in installments with the best possible financing fee.
- Discounts and promotions.
- Communication of payment results.
------------
----[mlc, mlv, mco]----
- Card payments.
- **Financing**: payments in installments with the best possible financing fee.
- Discounts and promotions.
- Communication of payment results.
------------

All our payments are assessed by our fraud prevention tool to minimize the risks in your transactions.


## One experience, all platforms

Offer the best payment experience to your users, on Android or iOS.

![Mercado Pago sdk android](/images/mobile-sdk-flow.png)

### It is very easy to integrate the checkout:

1. Include the SDK in your project.
2. Enter your [credentials]([FAKER][CREDENTIALS][URL]) and create the payment preference.
3. Start the payment process with a button on your application.
4. Get to know when a payment is made with the notifications we send you.

> Read [Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials) for more information. 

## Add the dependency to your project
[[[
```android
===
Add the following code in the file **build.gradle**.
Alternatively, you can [download the SDK](https://github.com/mercadopago/px-android/releases) and add it to your project.
===
dependencies {
   implementation 'com.mercadopago.android.px:checkout:4.+'
}
```
```ios
===
If you use **CocoaPods** in your project, you can add the dependency in the **Podfile** of the module where you integrate with us with the following code.
Alternatively, you can  [download the SDK](https://github.com/mercadopago/px-ios/releases) and add it to your project.
===
source 'https://github.com/CocoaPods/Specs.git'
# This parameter is needed because this is a Swift library
use_frameworks!
platform :ios, '8.0'
pod 'MercadoPagoSDK'
```
]]]

> NOTE
>
> Note
>
> If you have version 3.x of the Mobile Checkout integrated you can visit the [integration docs of version 3](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/mobile-checkout/v3/introduction).<br>
> Remember that active support is only provided to the latest major version and passive support to the previous one, so we recommend a migration to the new version.

You can find the reference to the interface in the following links: [Android docs](https://mercadopago.github.io/px-android/) - [iOS docs](https://mercadopago.github.io/px-ios/v4/)
