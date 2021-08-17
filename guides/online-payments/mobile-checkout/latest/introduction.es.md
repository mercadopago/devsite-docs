# Mobile Checkout

Las SDK de Mercado Pago facilitan la creación de una experiencia de pago en tu aplicación. Instantáneamente ofrecerás a tus usuarios:

----[mla, mpe, mlb, mlm]----
- Pagos con tarjeta, efectivo o transferencia bancaria.
- **Financiación**: cuotas con la mejor financiación posible.
- Descuentos y promociones.
- Comunicación del resultado de los pagos.
------------
----[mlc, mlv, mco]----
- Pagos con tarjeta.
- **Financiación**: cuotas con la mejor financiación posible.
- Descuentos y promociones.
- Comunicación del resultado de los pagos.
------------

Todos nuestros pagos son analizados por nuestra herramienta de prevención de fraude, para minimizar el riesgo en tus transacciones.


## Una experiencia, todas las plataformas

Ofrece a tus usuarios la mejor experiencia de pago, tanto en Android como en iOS.

![Mercado Pago sdk android](/images/mobile-sdk-flow.png)

### Integrar el checkout es muy fácil:

1. Incluye el SDK en tu proyecto.
2. Coloca tus [credenciales]([FAKER][CREDENTIALS][URL]) y crea la preferencia de pagos.
3. Inicia el proceso de pago desde un botón en tu aplicación.
4. Enterate del pago escuchando las notificaciones que te enviamos.

> Lee [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) para obtener más información.

## Añade la dependencia a tu proyecto
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
