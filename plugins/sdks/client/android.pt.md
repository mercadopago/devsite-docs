#MercadoPago - Android SDK

The MercadoPago Android SDK make it easy to collect your user's credit card details inside your android app. By creating tokens, MercadoPago handles the bulk of PCI compliance by preventing sensitive card data from hitting your server.

![Screenshot of MercadoPago](https://raw.githubusercontent.com/mercadopago/sdk-android/master/screenshot.png)

##Installation

###Android Studio

Add this line to your app's `build.gradle` inside the `dependencies` section:

    compile ('com.mercadopago:android-sdk:0.9.16@aar') { transitive = true }

###Eclipse

1. Clone the repository.
2. Be sure you've installed the Android SDK with API Level 21 and _android-support-v7_
3. Import the SDK folder into Android Studio
4. Add the folder as library.

### ProGuard

If you're planning on optimizing your app with ProGuard, make sure that you exclude the MercadoPago bindings. You can do this by adding the following to your app's `proguard.cfg` file:

    -keep class com.mercadopago.** { *; }

## Examples

This project includes five examples you can follow to understand how MercadoPago SDK works:

1. Start with a simple card form payment flow
2. Add your customers' cards to the flow
3. Manage installments and bank issuers
4. Pay with other payment types (ticket, atm)
5. Let MercadoPago SDK do steps 1-4 for you!

## Documentation

+ [Read more about this 5 steps integration.](http://www.mercadopago.com.ar/developers/en/solutions/payments/custom-checkout/charge-with-creditcard/android/)
+ [Check out MercadoPago Developers Site!](http://www.mercadopago.com.ar/developers)

## Feedback

You can join the MercadoPago Developers Community on MercadoPago Developers Site:

+ [English](https://www.mercadopago.com.ar/developers/en/community/forum/)
+ [Español](https://www.mercadopago.com.ar/developers/es/community/forum/)
+ [Português](https://www.mercadopago.com.br/developers/pt/community/forum/)
