# Añade la dependencia a tu proyecto

[[[
```android
===
En el archivo **build.gradle** añade el siguiente código.
Sino puedes [descargar el SDK](https://github.com/mercadopago/px-android/releases) y añadirlo a tu proyecto.
===
dependencies {
   implementation 'com.mercadopago.android.px:checkout:4.+'
}
```
```ios
===
Si en tu proyecto utilizas **CocoaPods**, puedes añadir la dependencia en el **Podfile** del módulo donde nos integres con el siguiente código.
Sino puedes [descargar el SDK](https://github.com/mercadopago/px-ios/releases) y añadirlo a tu proyecto.
===
source 'https://github.com/CocoaPods/Specs.git'
# Se necesita este parámetro por ser una SDK en swift
use_frameworks!
platform :ios, '8.0'
pod 'MercadoPagoSDK'
```
]]]

> NOTE
>
> Nota
>
> Si tienes la versión 3.x del Mobile Checkout integrado puedes visitar la [documentación de integración de la versión 3](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/v3/introduction).<br>
> Recuerda que solo se brinda soporte activo a la última versión major y soporte pasivo a la anterior por lo que recomendamos una migración a la nueva versión.

Puedes encontrar la referencia de los métodos en los siguientes links: [Documentación Android](https://mercadopago.github.io/px-android/) - [Documentación iOS](https://mercadopago.github.io/px-ios/v4/)