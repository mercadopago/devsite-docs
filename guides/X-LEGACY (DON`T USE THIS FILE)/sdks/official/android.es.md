---
  indexable: false
---
# MercadoPago - Android SDK

> NOTE
>
> Importante
>
> Esta documentación es solo para uso por parte del equipo interno, ya que fue deprecada o es un producto exclusivo. Para más detalles, hablar con el equipo comercial o de integraciones.

The Mercado Pago Android SDK makes it easy to collect your user's credit card details inside your android app. By creating tokens, Mercado Pago handles the bulk of PCI compliance by preventing sensitive card data from hitting your server.

![Screenshot MercadoPago](images/sdk/android.png)

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

+ [See the GitHub project](https://github.com/mercadopago/px-android).
+ [Read the SDK quick integration guide](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/introduction).
