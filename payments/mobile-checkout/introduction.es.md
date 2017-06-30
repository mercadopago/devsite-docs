# Introducción

Las SDK de Mercado Pago facilitan la creación de una experiencia de pago en tu aplicación. Instantáneamente ofrecerás a tus usuarios:
 
 - Pagos con tarjeta en una o más cuotas, efectivo o transferencia bancaria. 
 - Comunicación de descuentos y promociones.
 - Comunicación del resultado de los pagos.

Todos nuestros pagos son analizados por nuestra herramienta de prevención de fraude, para minimizar el riesgo en tus transacciones. 

Integrar el checkout es muy fácil:

1. Incluye el SDK en tu proyecto.
1. Coloca tus credenciales y crea la preferencia de pagos.
1. Inicia el proceso de pago desde un botón en tu aplicación.
1. Enterate del pago escuchando las notificaciones que te enviamos.


## Añade la dependencia a tu proyecto
[[[
```Android
===
En el archivo **build.gradle** añade el siguiente código: 
===
    dependencies {
       compile 'com.mercadopago:sdk:3.0.0'
    }
```
Sino puedes [descargar el SDK](https://github.com/mercadopago/px-android/releases) y añadirlo a tu proyecto.
```ios
===
Si en tu proyecto utilizas **CocoaPods**, puedes añadir la dependencia en el **Podfile** del módulo donde nos integres con el siguiente código:
===
    source 'https://github.com/CocoaPods/Specs.git'
	#Se necesita este parámetro por ser una SDK en swift
    use_frameworks!
    platform :ios, '8.2'
    pod 'MercadoPagoSDK', '3.0.0'
```
]]]

Sino puedes [descargar el SDK](https://github.com/mercadopago/px-ios/releases) y añadirlo a tu proyecto.
