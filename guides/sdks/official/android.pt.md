---
  indexable: false
---
# MercadoPago - Android SDK

The Mercado Pago Android SDK makes it easy to collect your user's credit card details inside your android app. By creating tokens, Mercado Pago handles the bulk of PCI compliance by preventing sensitive card data from hitting your server.

![Screenshot MercadoPago](https://cloud.githubusercontent.com/assets/11367894/20360662/5f3947dc-ac13-11e6-94d9-9a938f6b2cff.png)

## Installation

### Android Studio

Add this line to your app's `build.gradle` inside the `dependencies` section:

    compile 'com.mercadopago:sdk:3.4.1'

### Eclipse

1. Clone the repository.
2. Be sure you've installed the Android SDK with API Level 25 and _android-support-v7_
3. Import the _sdk_ folder into Android Studio
4. Add the folder as library.

### ProGuard

If you're planning on optimizing your app with ProGuard, make sure that you exclude the Mercado Pago bindings. You can do this by adding the following to your app's `proguard.cfg` file:

    -keep class com.mercadopago.** { *; }

## Documentation

+ [See the GitHub project.](https://github.com/mercadopago/px-android).
+ [Read the SDK quick integration guide](https://www.mercadopago.com.br/developers/pt/guides/online-payments/mobile-checkout/introduction).
