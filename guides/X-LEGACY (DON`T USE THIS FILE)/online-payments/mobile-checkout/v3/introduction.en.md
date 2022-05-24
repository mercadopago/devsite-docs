---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
---
# Mobile Checkout

> NOTE
>
> Important
>
> This documentation is for internal team use only,  as it has been deprecated or is an exclusive product. For further details, talk to the sales or integrations team.

Mercado Pago SDK makes it easy to create a payment experience in your application. You will instantly offer your users:

----[mla, mpe, mlb, mlm]----
    - Card payments, payments in cash or bank transfer.
 	- **Financing**: payments in installments with the best possible financing fee.
 	- Discounts and promotions.
 	- Communication of payment results.
------------
----[mlc, mco]----
	- Card payments.
 	- **Financing**: payments in installments with the best possible financing fee.
 	- Discounts and promotions.
 	- Communication of payment results.
------------

All our payments are assessed by our fraud prevention tool to minimize the risks in your transactions.


## One experience, all platforms

Offer the best payment experience to your users, on Android or iOS.

![androidiosfinal](/images/mobile-sdk-flow.png)

### It is very easy to integrate the checkout:

1. Include the SDK in your project.
2. Enter your credentials and create the payment preference.
3. Start the payment process with a button on your application.
4. Get to know when a payment is made with the notifications we send you.


## Add the dependency to your project
[[[
```android
===
Add the following code in the file **build.gradle**.
Alternatively, you can [download the SDK](https://github.com/mercadopago/px-android/releases) and add it to your project.
===
dependencies {
   compile 'com.mercadopago:sdk:3.8.1'
}
```
```ios
===
If you use **CocoaPods** in your project, you can add the dependency in the **Podfile** of the module where you integrate with us with the following code.
Alternatively, you can  [download the SDK](https://github.com/mercadopago/px-ios/releases) and add it to your project.
===
source 'https://github.com/CocoaPods/Specs.git'
# Se necesita este parámetro por ser una SDK en swift
use_frameworks!
platform :ios, '8.0'
pod 'MercadoPagoSDK', '3.7.2'
```
]]]

- In [this artcile](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/mobile-checkout/v3/receive-payments) you will learn how to receive payments.
