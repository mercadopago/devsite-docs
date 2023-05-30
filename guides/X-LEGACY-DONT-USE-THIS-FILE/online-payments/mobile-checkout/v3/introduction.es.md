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
> Importante
>
> Esta documentación es solo para uso por parte del equipo interno, ya que fue deprecada o es un producto exclusivo. Para más detalles, hablar con el equipo comercial o de integraciones.

Las SDK de Mercado Pago facilitan la creación de una experiencia de pago en tu aplicación. Instantáneamente ofrecerás a tus usuarios:

----[mla, mpe, mlb, mlm]----
- Pagos con tarjeta, efectivo o transferencia bancaria.
- **Financiación**: cuotas con la mejor financiación posible.
- Descuentos y promociones.
- Comunicación del resultado de los pagos.
------------
----[mlc, mco]----
- Pagos con tarjeta.
- **Financiación**: cuotas con la mejor financiación posible.
- Descuentos y promociones.
- Comunicación del resultado de los pagos.
------------

Todos nuestros pagos son analizados por nuestra herramienta de prevención de fraude, para minimizar el riesgo en tus transacciones.


## Una experiencia, todas las plataformas

Ofrece a tus usuarios la mejor experiencia de pago, tanto en Android como en iOS.

![androidiosfinal](/images/mobile-sdk-flow.png)

### Integrar el checkout es muy fácil:

1. Incluye el SDK en tu proyecto.
2. Coloca tus credenciales y crea la preferencia de pagos.
3. Inicia el proceso de pago desde un botón en tu aplicación.
4. Enterate del pago escuchando las notificaciones que te enviamos.


## Añade la dependencia a tu proyecto
[[[
```android
===
En el archivo **build.gradle** añade el siguiente código.
Sino puedes [descargar el SDK](https://github.com/mercadopago/px-android/releases) y añadirlo a tu proyecto.
===
dependencies {
   compile 'com.mercadopago:sdk:3.8.1'
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
pod 'MercadoPagoSDK', '3.7.2'
```
]]]

En [este artículo](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/v3/receive-payments) verás el detalle de cómo hacer un pago.
