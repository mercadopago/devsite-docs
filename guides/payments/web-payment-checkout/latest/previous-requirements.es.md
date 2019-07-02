---
sites_supported:
  - mla
---

# Requisitos previos para comenzar

>NOTE
>
>Contenido
>
>[Glosario](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/previous-requirements#bookmark_glosario/)
>
> [Requisitos previos](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/previous-requirements#bookmark_requisitos_previos/)

Sabemos que algunos términos son nuevos. Antes de empezar, te los dejamos a mano.

## Glosario

Término | Descripción
------------ | -------------
_Preferencia (preference)_ | Es la información del producto o servicio que se quiere ofrecer. Entre los atributos más importantes de una preferencia se definen: la descripción, el monto y los items. Al generarla se obtiene la URL para iniciar el flujo de pago.
_Credenciales (credentials)_ | Tus credenciales son las claves que te proporcionamos para que puedas configurar tus integraciones. 
<br>
Existen dos tipos:
<br>
**ACCESS_TOKEN**. Clave privada de la aplicación para generar pagos. Debes usarla solo para tus integraciones. 
<br>
**PUBLIC_KEY**. Clave pública de la aplicación para conocer, por ejemplo, los medios de pago y cifrar datos de tarjeta. Debes usarla solo para tus integraciones.
<br>
Para poder encontrarlas, ve a tus [credenciales](https://www.mercadopago.com/mla/account/credentials) y selecciona las productivas en la opción _Checkout personalizado_.
<br>
Si ingresaste con tu cuenta en esta página, se completarán automáticamente dentro de las líneas de códigos.
_Punto de inicio (init_point)_ | Es la URL que se obtiene al momento de generar la preferencia y que da inicio al flujo de pago del Web Checkout.
_Item (ítem)_ | Hace referencia al producto o servicio que se quiere ofrecer. Puede ser uno o una lista.
_Aplicación (application)_ | Las aplicaciones sirven para procesar los pagos del vendedor. Cada aplicación identifica a una integración en particular, ya que cada una tiene sus [credenciales](https://www.mercadopago.com/mla/account/credentials) propias. Una cuenta de Mercado Pago puede tener múltiples aplicaciones.Puedes encontrar la información de cada una en credenciales. Al ingresar, se creará una automáticamente o puedes [crear una aplicación](https://applications.mercadopago.com/) cada vez que lo necesites.

## Requisitos previos

Para continuar, verifica los requisitos previos necesarios:

#### 1. Acceso a cuenta de Mercado Pago o Mercado Libre
Para poder comenzar la integración es necesario contar con una cuenta de Mercado Pago o Mercado Libre.
Si aún no tienes una, puedes [crear una cuenta de Mercado Pago](https://www.mercadopago.com.ar/) cuando quieras.

#### 2. Instalación de SDK de Mercado Pago
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
