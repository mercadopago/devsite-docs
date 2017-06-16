**Introducción**
============

Las SDK de Mercado Pago facilitan la creación de una experiencia de pago en tu aplicación. Utiliza nuestra SDK e instantáneamente ofrecerás a tus usuarios:
 
 - Pagos con tarjeta en una o más cuotas, efectivo o transferencia bancaria. 
 - Comunicación de descuentos y promociones.
 - Comunicación del resultado de su pago.


Añade la dependencia a tu proyecto
----------------------------------

[Android]

Añade la dependencia en el archivo **build.gradle** del módulo donde nos integres con el siguiente código: 

    dependencies {
       compile 'com.mercadopago:sdk:3.0.0'
    }

Sino puedes [descargar el SDK](https://github.com/mercadopago/px-android/releases) y añadirlo en tu proyecto.

----------
[iOS - Swift/Objective-C]

Si en tu proyecto utilizas **CocoaPods**, puedes añadir la dependencia en el **Podfile** del módulo donde nos integres con el siguiente código:

    source 'https://github.com/CocoaPods/Specs.git'
	#Se necesita este parámetro por ser una SDK en swift
    use_frameworks!
    platform :ios, '8.2'
    pod 'MercadoPagoSDK', '3.0.0'

Sino puedes [descargar el SDK](https://github.com/mercadopago/px-ios/releases) y añadirlo a tu proyecto.
