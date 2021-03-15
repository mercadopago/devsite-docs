# Requisitos previos para comenzar


## Glosario

Sabemos que algunos términos son nuevos. Antes de empezar, te los dejamos a mano.

| Término | Descripción |
| --- | --- |
| _Preferencia (preference)_ | Es la **información del producto o servicio que se quiere ofrecer.** Entre los atributos más importantes de una preferencia se definen: la descripción, el monto y los items. Al generarla se obtiene la URL para iniciar el flujo de pago. |
| _Credenciales (credentials)_ | Tus credenciales son las **claves que te proporcionamos para que puedas configurar tus integraciones.**<br/><br/>**Public key**. Clave pública de la aplicación para conocer, por ejemplo, los medios de pago y cifrar datos de tarjeta. Debes usarla solo para tus integraciones.<br/>**Access token**. Clave privada de la aplicación para generar pagos. Debes usarla solo para tus integraciones.<br/><br/>Para poder encontrarlas, ve a tus [ credenciales ]([FAKER][CREDENTIALS][URL]) y selecciona las productivas.<br/><br/> |
| _Punto de inicio (init_point)_ | **Es la URL que se obtiene al momento de generar la preferencia** y que da inicio al flujo de pago del Checkout Pro. |
| _Ítem (ítem)_ | Hace referencia al producto o servicio que se quiere ofrecer. Puede ser uno o una lista. |
| _Aplicación (application)_ | Las aplicaciones sirven para procesar los pagos del vendedor. **Cada aplicación identifica a una integración en particular**, ya que cada una tiene sus [credenciales]([FAKER][CREDENTIALS][URL]) propias. Una cuenta de Mercado Pago puede tener múltiples aplicaciones.<br/><br/>Puedes encontrar la información de cada una en credenciales. Al ingresar, se creará una automáticamente o puedes [crear una aplicación](https://applications.mercadopago.com) cada vez que lo necesites. |

## Requisitos previos

Ten en cuenta estos aspectos antes de empezar a integrar: 

### 1. Accede a una cuenta
Para poder comenzar la integración, es necesario **contar con una cuenta de Mercado Pago o Mercado Libre**.

Puedes [Ingresar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/previous-requirements) a una cuenta de Mercado Pago o de Mercado Libre que ya exista o [Crear una cuenta nueva](https://www.mercadopago[FAKER][URL][DOMAIN]) en Mercado Pago.

### 2. Instala la SDK de Mercado Pago
**Instala la SDK oficial** para simplificar tu interacción con nuestras APIs.

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
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
Para instalar el SDK en tu proyecto [Maven](http://maven.apache.org/install.html) agrega la siguiente dependencia en tu archivo pom.xml y luego ejecuta 'maven install'.
===
<dependency>
            <groupId> com.mercadopago </groupId>
            <artifactId> sdk-java </artifactId>
            <version> 1.8.0 </version>
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
----[mlb]----
Usa [NuGet](https://docs.microsoft.com/pt-pt/nuget/install-nuget-client-tools) para instalar el SDK .NET de Mercado Pago.
------------
----[mla, mlm, mco, mlc, mlu, mpe]----
Usa [NuGet](https://docs.microsoft.com/es-es/nuget/install-nuget-client-tools) para instalar el SDK .NET de Mercado Pago.
------------
Para hacerlo ejecuta el siguiente comando en la consola del NuGet Package Manager:
===
PM> Install-Package mercadopago-sdk -Version 1.0.57
```
]]]

### 3. Ten a mano tus credenciales

Las credenciales son las **claves que te proporcionamos para que puedas configurar tu integración**.

Para poder encontrarlas, ve la [sección de Credenciales]([FAKER][CREDENTIALS][URL]).

> ¿Tienes dudas sobre credenciales? Puedes consultar nuestras [preguntas frecuentes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/faqs/credentials).

---

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Integra Checkout Pro
>
> Sigue el paso a paso para comenzar a recibir pagos en tu sitio.
>
> [Integra](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/integration)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration)
