# Introduccion

Recibe pagos en cuestión de segundos de manera simple y segura utilizando el SDK de Mercado Pago.

## Agrega la dependencia a tu proyecto

Si en tu proyecto usas CocoaPods, puedes agregar la dependencia en el Podfile del módulo donde nos integres.

Si no utilizas CocoaPods, descarga la SDK de MercadoPago:

- Android: https://github.com/mercadopago/px-android/releases
- iOS: https://github.com/mercadopago/px-ios/releases
- Cordova Plugin: https://github.com/mercadopago/px-hybrid

```bash
 cordova plugin add mercadopago-plugin
```
```java
dependencies {
   compile 'com.mercadopago:sdk:2.5.0'
}
```
```bash
source 'https://github.com/CocoaPods/Specs.git'
# Se necesita este parámetro por ser una SDK en swift
use_frameworks!
platform :ios, '8.0'
pod 'MercadoPagoSDK', 'workshop'
```
