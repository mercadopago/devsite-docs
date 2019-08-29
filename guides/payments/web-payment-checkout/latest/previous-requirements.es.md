---
sites_supported:
  - mla
  - mlb
---

# Requisitos previos para comenzar

> INDEX
>
> En esta página
>
>
>
> [Glosario](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/previous-requirements#bookmark_glosario)
>
> [Requisitos previos](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/previous-requirements#bookmark_requisitos_previos)

## Glosario

Sabemos que algunos términos son nuevos. Antes de empezar, te los dejamos a mano.

Término | Descripción
------------ | -------------
_Preferencia (preference)_ | Es la **información del producto o servicio que se quiere ofrecer.** Entre los atributos más importantes de una preferencia se definen: la descripción, el monto y los items. Al generarla se obtiene la URL para iniciar el flujo de pago.
_Credenciales (credentials)_ | Tus credenciales son las **claves que te proporcionamos para que puedas configurar tus integraciones.**<br/>Existen dos tipos:<br/><br/>**ACCESS_TOKEN**. Clave privada de la aplicación para generar pagos. Debes usarla solo para tus integraciones.<br/>**PUBLIC_KEY**. Clave pública de la aplicación para conocer, por ejemplo, los medios de pago y cifrar datos de tarjeta. Debes usarla solo para tus integraciones.<br/><br/>Para poder encontrarlas, ve a tus <a href="https://www.mercadopago.com/mla/account/credentials" target="_blank"> credenciales </a> y selecciona las productivas en la opción _Checkout personalizado_.<br/><br/>Si ingresaste con tu cuenta en esta página, se completarán automáticamente dentro de las líneas de códigos.
_Punto de inicio (init_point)_ | **Es la URL que se obtiene al momento de generar la preferencia** y que da inicio al flujo de pago del Smart Checkout.
_Item (ítem)_ | Hace referencia al producto o servicio que se quiere ofrecer. Puede ser uno o una lista.
_Aplicación (application)_ | Las aplicaciones sirven para procesar los pagos del vendedor. **Cada aplicación identifica a una integración en particular**, ya que cada una tiene sus <a href="https://www.mercadopago.com/mla/account/credentials" target="_blank"> credenciales </a>propias. Una cuenta de Mercado Pago puede tener múltiples aplicaciones.<br/><br/>Puedes encontrar la información de cada una en credenciales. Al ingresar, se creará una automáticamente o puedes <a href="https://applications.mercadopago.com/" target="_blank"> crear una aplicación</a> cada vez que lo necesites.

## Requisitos previos

Para continuar, verifica los requisitos previos necesarios:

### 1. Acceso a cuenta de Mercado Pago o Mercado Libre
Para poder comenzar la integración, es necesario **contar con una cuenta de Mercado Pago o Mercado Libre**.
Si aún no tienes una, puedes <a href="https://www.mercadopago.com.ar/" target="_blank"> crear una cuenta de Mercado Pago</a> cuando quieras.

### 2. Instalación de SDK de Mercado Pago
**Instala el SDK oficial** para simplificar tu interacción con nuestras APIs.

[[[
```php
===
<a href="https://getcomposer.org/download" target="_blank"> Instala Composer</a> para usar el SDK.

Luego ejecuta el siguiente código en la línea de comandos:
===
php composer.phar require "mercadopago/dx-php:dev-master"
```
```node
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a>:
===
npm install mercadopago
```
```java
===
Para instalar el SDK en tu proyecto <a href="http://maven.apache.org/install.html" target="_blank"> Maven </a> agrega la siguiente dependencia en tu archivo pom.xml y luego ejecuta 'maven install'.
===
<dependency>
		    <groupId> com.mercadopago </groupId>
		    <artifactId> dx-java </artifactId>
		    <version> 1.0.33 </version>
</dependency>
```
```ruby
===
El SDK de Mercado Pago está disponible como <a href="https://rubygems.org/gems/mercadopago-sdk" target="_blank"> gema</a>, para instalarla debes ejecutar el siguiente código en la línea de comandos:
===
gem install mercadopago-sdk
```
```csharp
===
Usa <a href="https://docs.microsoft.com/es-es/nuget/install-nuget-client-tools" target="_blank"> NuGet</a> para instalar el SDK .NET de Mercado Pago.
Para hacerlo ejecuta el siguiente comando en la consola del NuGet Package Manager:
===
PM> Install-Package mercadopago-sdk -Version 1.0.57
```
]]]

> NOTE
>
> Nota
>
> Esta documentación refiere a la nueva versión del Smart Checkout. Para **ver la versión anterior**, ve a la [sección de Smart Checkout antigua](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/v1/introduction/).

---

### Próximos pasos

> LEFT_BUTTON_REQUIRED
>
> Integra Smart Checkout
>
> Sigue el paso a paso para comenzar a recibir pagos en tu sitio.
>
> [Integra](http://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/integration/)

> RIGHT_BUTTON_RECOMMENDED
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Prueba](http://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/test-integration/)
