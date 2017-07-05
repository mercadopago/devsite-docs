# Checkout mobile

Las SDK de Mercado Pago facilitan la creación de una experiencia de pago en tu aplicación. Instantáneamente ofrecerás a tus usuarios:
 
 - Pagos con tarjeta, efectivo o transferencia bancaria.
 - **Financiación**: cuotas con la mejor financiación posible. 
 - Descuentos y promociones.
 - Comunicación del resultado de los pagos.

Todos nuestros pagos son analizados por nuestra herramienta de prevención de fraude, para minimizar el riesgo en tus transacciones.


## Una experiencia, todas las plataformas 

Ofrece a tus usuarios la mejor experiencia de pago, tanto en Android como en iOS. 

![androidiosfinal](https://user-images.githubusercontent.com/8038535/27835532-f47863c2-60a0-11e7-80d0-26f0b4d4c4d1.png)


### Integrar el checkout es muy fácil:

1. Incluye el SDK en tu proyecto.
1. Coloca tus credenciales y crea la preferencia de pagos.
1. Inicia el proceso de pago desde un botón en tu aplicación.
1. Enterate del pago escuchando las notificaciones que te enviamos.


## Añade la dependencia a tu proyecto
[[[
```Android
===
En el archivo **build.gradle** añade el siguiente código.
Sino puedes [descargar el SDK](https://github.com/mercadopago/px-android/releases) y añadirlo a tu proyecto. 
===
    dependencies {
       compile 'com.mercadopago:sdk:3.1.0'
    }
```
```ios
===
Si en tu proyecto utilizas **CocoaPods**, puedes añadir la dependencia en el **Podfile** del módulo donde nos integres con el siguiente código.
Sino puedes [descargar el SDK](https://github.com/mercadopago/px-ios/releases) y añadirlo a tu proyecto.
===
    source 'https://github.com/CocoaPods/Specs.git'
	#Se necesita este parámetro por ser una SDK en swift
    use_frameworks!
    platform :ios, '8.0'
    pod 'MercadoPagoSDK', '3.1.0'
```
]]]


