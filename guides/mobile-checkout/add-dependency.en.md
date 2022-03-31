# Add the dependency to your project

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