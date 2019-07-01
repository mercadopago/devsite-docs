---
sites_supported:
  - mla
---

# Requisitos Previos
Es importante conocer los requisitos previos necesarios antes de continuar:

## Glosario

Término		| 							|	Descripción
------------	| ----------- 			| 	-----------
Preferencia (_preference_)	|							|	Es la información del producto o servicio que se quiere ofrecer. Entre los atributos más importantes de una preferencia se definen: la descripción, el monto y los items. Al generarla se obtiene la URL para iniciar el flujo de pago.
Punto de inicio (_init_point_) 	|							|	Es la URL que se obtiene al momento de generar la preferencia y que da inicio al flujo de pago del Web Checkout.
Item (_item_)			|							|	Hace referencia al producto o servicio que se quiere ofrecer. Puede ser uno o una lista.
Aplicación (_application_)|            | Cada aplicación está designada a identificar una integración en particular, y tiene sus credenciales correspondientes. Una cuenta de Mercado Pago puede tener múltiples aplicaciones.
Credenciales (_credentials_) | ACCESS_TOKEN				|	Clave privada de la aplicación para generar pagos. Debes usarla solo para tus integraciones.
				|PUBLIC_KEY				|	Clave pública de la aplicación para conocer, por ejemplo, los medios de pago y cifrar datos de tarjeta. Debes usarla solo para tus integraciones.

## Cuenta de Mercado Pago

Para poder comenzar la integración es necesario contar con una cuenta de Mercado Pago.
Si aún no tienes una, puedes [crear una cuenta de Mercado Pago](https://www.mercadopago.com.ar/) cuando quieras.

## Aplicaciones

Las aplicaciones sirven para procesar los pagos del vendedor.

Puedes encontrar la información de cada una en [credenciales](https://www.mercadopago.com/mla/account/credentials). Al ingresar, se creará una automáticamente o puedes [crear una aplicación](https://applications.mercadopago.com/) cada vez que lo necesites.


## Credenciales
Tus credenciales son las claves que te proporcionamos para que puedas hacer tus integraciones. Están disponibles en tu cuenta de Mercado Pago en la [sección Credenciales](https://www.mercadopago.com/mla/account/credentials).

Si ingresaste con tu cuenta en esta página, se completarán automáticamente dentro de los códigos.


## SDK de Mercado Pago
Instala el SDK oficial para simplificar tu interacción con nuestras APIs.

[[[
```php
===
[Instala Composer](https://getcomposer.org/download) para usar el SDK.

Luego, **crea una carpeta en donde quieras para tu proyecto** y ejecuta dentro de ella, el siguiente código desde la terminal:
===
php composer.phar require "mercadopago/dx-php:dev-master"
```
```node
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [npm](https://www.npmjs.com/get-npm)
===
npm install mercadopago
```
```java
===
Para instalar el SDK en tu proyecto [Maven](http://maven.apache.org/install.html) agrega la siguiente dependencia en tu archivo pom.xml y luego ejecuta 'maven install'
===
<dependency>
		    <groupId> com.mercadopago </groupId>
		    <artifactId> dx-java </artifactId>
		    <version> 1.0.33 </version>
</dependency>
```
```ruby
===
El SDK de Mercado Pago está disponible como [gema](https://rubygems.org/gems/mercadopago-sdk), para instalarla debes ejecutar el siguiente código en la línea de comandos:
===
gem install mercadopago-sdk
```
```csharp
===
Usa [NuGet](https://docs.microsoft.com/es-es/nuget/install-nuget-client-tools) para instalar el SDK .NET de Mercado Pago.
Para hacerlo ejecuta el siguiente comando en la consola del NuGet Package Manager:
===
PM> Install-Package mercadopago-sdk -Version 1.0.56
```
]]]

>NOTE
>
>Nota
>
> Esta documentación refiere a la nueva versión del Web Checkout. Para **ver la versión anterior**, ve a la [sección de Web Checkout antigua](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/v1/introduction/)

[Continuar a Integrar Web Checkout](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/integration/)
