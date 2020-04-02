# Requisitos previos para comenzar

Te contamos qué necesitas saber para poder integrar nuestras APIs.

## Ten a mano tus credenciales
Las credenciales son las **claves que te proporcionamos para que puedas configurar tu integración**. Para este caso, vas a utilizar una clave pública y otra clave privada.

* La clave pública, o _Public key_, te sirve para acceder a los recursos que necesita tu frontend. Con ella vas a poder recolectar los datos de las tarjetas de crédito y convertirlos en un token representativo que puedes enviar de forma segura a tus servidores para crear un pago.

* Y la clave privada, o _Access token_, te va a permitir llamar al resto de las APIs desde tus servidores. Por ejemplo, para procesar un pago, realizar un reembolso o almacenar tarjetas.

Para poder encontrarlas, ve la [sección de Credenciales](https://www.mercadopago.com/mla/account/credentials).

> ¿Tienes dudas sobre credenciales? Puedes consultar nuestras [preguntas frecuentes](https://www.mercadopago.com.ar/developers/es/guides/faqs/credentials/).

## Utiliza nuestras librerías siempre
Es importante que siempre utilices nuestras librerías oficiales para tu integración. Esto permite cuidar los datos sensibles de tus clientes, cumplir con los estándares de seguridad requeridos y estar siempre actualizado.

<br>

> CLIENT_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incluye MercadoPago.js.

MercadoPago.js te permite crear un token de pago para enviar los datos de las tarjetas a tu backend de forma segura. Puedes utilizarla sumando el siguiente código en tu sitio:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

<br>

> SERVER_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instala la SDK de Mercado Pago

Instala un [SDKs oficial](https://www.mercadopago.com.ar/developers/es/plugins_sdks#bookmark_sdk_title) para simplificar tu interacción con nuestras APIs.

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
----[mlb]----
Usa <a href="https://docs.microsoft.com/pt-pt/nuget/install-nuget-client-tools" target="_blank"> NuGet</a> para instalar el SDK .NET de Mercado Pago.
------------
----[mla, mlm, mco, mlc, mlu]----
Usa <a href="https://docs.microsoft.com/es-es/nuget/install-nuget-client-tools" target="_blank"> NuGet</a> para instalar el SDK .NET de Mercado Pago.
------------
Para hacerlo ejecuta el siguiente comando en la consola del NuGet Package Manager:
===
PM> Install-Package mercadopago-sdk -Version 1.0.57
```
]]]

## Conoce nuestras Referencias de API

Si no puedes utilizar nuestros SDK oficiales, tienes disponible toda la información sobre consultas y respuestas de datos para interactuar directamente con nuestras APIs en [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments/post/).

## Cumple los requisitos para ir a producción

Al realizar tu integración, es necesario que tengas en cuenta todos los [requisitos para ir a producción](https://www.mercadopago.com.ar/developers/es/guides/payments/api/goto-production/). Con este proceso, se puede garantizar la seguridad de lo datos de tus clientes, el cumplimiento de las normas o disposiciones legales de cada país y lograr la mejor experiencia de compra para tus ventas.

Cuando tengas lista tu integración y quieras comenzar a recibir pagos, solo tienes que completar el formulario para ir producción desde la [sección de Credenciales](https://www.mercadopago.com/mla/account/credentials).

---
### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Integrar API de Mercado Pago con tarjeta
>
> Construye y configura tu propia experiencia de pagos.
>
> [Integrar API de Mercado Pago con tarjeta](https://www.mercadopago.com.ar/developers/es/guides/payments/api/receiving-payment-by-card/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/)