# Requisitos previos para comenzar


## Glosario

Tenga a mano los principales términos técnicos del flujo de integración del Checkout Pro antes de verificar los requisitos previos:

| Término | Descripción |
| --- | --- |
| _Preferencia (preference)_ | Es la **información del producto o servicio que se quiere ofrecer.** Entre los atributos más importantes de una preferencia están la descripción, el monto y los items. Al generarla se obtiene la URL para iniciar el flujo de pago. |
| _Credenciales (credentials)_ | Tus credenciales son las **claves únicas que te proporcionamos para que puedas configurar tus integraciones.** Hay dos tipos de credenciales: Public key y Access token. <br/><br/>**Public key es la clave pública de la aplicación** para conocer los medios de pago y cifrar datos de tarjeta, por ejemplo. Debes usarla solo para tus integraciones. <br/><br/>**Access token es la clave privada de la aplicación** para generar pagos. Debes usarla solo para tus integraciones.<br/><br/>Para encontrarlas, consulte la sección [Credenciales]([FAKER][CREDENTIALS][URL]) en el Panel de desarrollador de tu cuenta Mercado Pago y selecciona las productivas.<br/><br/> |
| _Punto de inicio (init_point)_ | Es la **URL que se obtiene al momento de generar la preferencia** y que da inicio al flujo de pago del Checkout Pro. |
| _Ítem (ítem)_ | Hace referencia al **producto o servicio que se quiere ofrecer**. Puede ser uno o una lista. |
| _Aplicación (application)_ | Las aplicaciones sirven para procesar los pagos del vendedor. **Cada aplicación identifica a una integración en particular**, ya que cada una tiene sus credenciales propias. Una cuenta de Mercado Pago puede tener múltiples aplicaciones.<br/><br/>Puedes encontrar la información de cada una en la sección [Credenciales]([FAKER][CREDENTIALS][URL]) de su Panel de desarrollador. Al ingresar, se creará una aplicación automáticamente o puedes [crear una aplicación](https://applications.mercadopago.com) cada vez que lo necesites. |

## Requisitos previos

Siga estos pasos antes de comenzar su integración:

### 1. Accede a una cuenta
Para poder comenzar la integración, es necesario contar con una cuenta de Mercado Pago o Mercado Libre.

Puedes [acceder](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/previous-requirements) a una cuenta que ya exista o [crear una cuenta nueva](https://www.mercadopago[FAKER][URL][DOMAIN]).

### 2. Instala la SDK de Mercado Pago
Instala la SDK oficial para simplificar tu interacción con nuestras APIs.

[[[
```php
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [Composer](https://getcomposer.org/download):
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
Para instalar el SDK en tu proyecto [Maven](http://maven.apache.org/install.html), debes agregar la siguiente dependencia en tu archivo <code>pom.xml</code> y ejecutar <code>maven install</code> en la línea de comandos de tu terminal:
===
<dependency>
            <groupId> com.mercadopago </groupId>
            <artifactId> sdk-java </artifactId>
            <version> 1.9.0 </version>
</dependency>
```
```ruby
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [gema](https://rubygems.org/gems/mercadopago-sdk):
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference):
----[mla, mlm, mco, mlc, mlu]----
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference):
===
nuget install mercadopago-sdk
```
```python
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [Pip](https://pypi.org/project/mercadopago/):
===
pip3 install mercadopago
```
]]]

### 3. Ten a mano tus credenciales
Las credenciales son las **claves únicas que te proporcionamos para que puedas configurar tus integraciones**.

Para encontrarlas, consulte la sección [Credenciales]([FAKER][CREDENTIALS][URL]) en el Panel de desarrollador de tu cuenta Mercado Pago

> ¿Aún tienes dudas sobre? Lee nuestra documentación de [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) para obtener más información.

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
> Revisa que esté todo bien con tu integración utilizando usuarios de prueba.
>
> [Prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration)
