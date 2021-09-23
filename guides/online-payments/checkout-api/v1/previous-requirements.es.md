# Requisitos previos para comenzar

Te contamos qué necesitas saber para poder integrar nuestras APIs.

## Ten a mano tus credenciales
Las credenciales son las **claves que te proporcionamos para que puedas configurar tu integración**. Para este caso, vas a utilizar una clave pública y otra clave privada.

* La clave pública, o Public key, te sirve para acceder a los recursos que necesita tu frontend. Con ella vas a poder recolectar los datos de las tarjetas de crédito y convertirlos en un token representativo que puedes enviar de forma segura a tus servidores para crear un pago.

* La clave privada, o Access token, te va a permitir llamar al resto de las APIs desde tus servidores. Por ejemplo, para procesar un pago, realizar un reembolso o almacenar tarjetas.

Para poder encontrarlas, ve la [sección de Credenciales]([FAKER][CREDENTIALS][URL]).

> ¿Tienes dudas sobre credenciales? Lee [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) para obtener más información.

## Utiliza nuestras librerías siempre
Te recomendamos usar las librerías oficiales para tu integración. Esto permite cuidar los datos sensibles de tus clientes, cumplir con los estándares de seguridad requeridos y estar siempre actualizado.

<br>

> CLIENT_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incluye MercadoPago.js

----[mlb]----
> INFO
>
> Nueva versión MercadoPago.js
>
> Utiliza la librería MercadoPago.js V2 para actualizarte a la última versión, autogenerar la lógica de negocio en tu formulario de pagos con tarjeta y mejorar la compatibilidad con los distintos navegadores.<br><br>[Integrar Checkout Transparente con MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements)
------------
----[mla, mlm, mco, mlc, mlu]----
> INFO
>
> Nueva versión MercadoPago.js
>
> Utiliza la librería MercadoPago.js V2 para actualizarte a la última versión, autogenerar la lógica de negocio en tu formulario de pagos con tarjeta y mejorar la compatibilidad con los distintos navegadores.<br><br>[Integrar Checkout API con MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements)
------------

MercadoPago.js te permite gestionar los datos de la tarjeta para cumplir con los requerimientos de seguridad necesarios y evitar el envío de datos sensibles a tus servidores. Para ello, nuestra librería genera un token que representa esta información y te permite operar de forma segura. Puedes utilizarla sumando el siguiente código en tu sitio:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

<br>

> SERVER_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instala la SDK de Mercado Pago

Instala un [SDKs oficial](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/sdks) para simplificar tu interacción con nuestras APIs.

[[[
```php
===
[Instala Composer](https://getcomposer.org/download) para usar el SDK.

Luego ejecuta el siguiente código en la línea de comandos:
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
Para instalar la SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
Para instalar la SDK en tu proyecto [Maven](http://maven.apache.org/install.html) agrega la siguiente dependencia en tu archivo pom.xml y luego ejecuta 'maven install'.
===
<dependency>
            <groupId> com.mercadopago </groupId>
            <artifactId> sdk-java </artifactId>
            <version> 1.8.0 </version>
</dependency>
```
```ruby
===
La SDK de Mercado Pago está disponible como [gema](https://rubygems.org/gems/mercadopago-sdk), para instalarla debes ejecutar el siguiente código en la línea de comandos:
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Usa [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference) para instalar la SDK .NET de Mercado Pago.
------------
----[mla, mlm, mco, mlc, mlu]----
Usa [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference) para instalar la SDK .NET de Mercado Pago.
------------
Para hacerlo ejecuta el siguiente comando en tu terminal:
===
nuget install mercadopago-sdk
```
```python
===
El SDK de Mercado Pago está disponible como [pip](https://pypi.org/project/mercadopago/), para instalarla debes ejecutar el siguiente código en la línea de comandos:
===
pip3 install mercadopago
```
]]]

## Conoce nuestras Referencias de API

Si no puedes utilizar nuestras SDK oficiales, tienes disponible toda la información sobre consultas y respuestas de datos para interactuar directamente con nuestras APIs en [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post).

## Cumple los requisitos para salir a producción

Al realizar tu integración, es necesario que tengas en cuenta todos los [requisitos para salir a producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/goto-production). Con este proceso, se puede garantizar la seguridad de lo datos de tus clientes, el cumplimiento de las normas o disposiciones legales de cada país y lograr la mejor experiencia de compra para tus ventas.

Cuando tengas lista tu integración y quieras comenzar a recibir pagos, solo tienes que completar el formulario para ir producción desde la [sección de Credenciales]([FAKER][CREDENTIALS][URL]).

---
### Próximos pasos
----[mlb]----
> LEFT_BUTTON_REQUIRED_ES
>
> Integrar Checkout Transparente con tarjeta
>
> Construye y configura tu propia experiencia de pagos.
>
> [Integrar Checkout Transparente de Mercado Pago con tarjeta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/receiving-payment-by-card)
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> LEFT_BUTTON_REQUIRED_ES
>
> Integrar Checkout API con tarjeta
>
> Construye y configura tu propia experiencia de pagos.
>
> [Integrar Checkout API de Mercado Pago con tarjeta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/receiving-payment-by-card)
------------

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference)
