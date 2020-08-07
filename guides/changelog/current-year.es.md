# Changelog

Entérate todo sobre las nuevas versiones y actualizaciones de las integraciones de Mercado Pago.

---

## Agosto 2020

### 7 de agosto

> CHANGELOG
>
> Solicita las credenciales que necesitas para integrar
>
> NEWS: NOVEDADES
>
> PRODUCT: CREDENCIALES

¿Vas a integrar Mercado Pago para otra cuenta? Ahora puedes solicitar el acceso a sus credenciales de forma rápida y segura.

[Conocer más sobre cómo solicitar credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/faqs/credentials/)

---

## Julio 2020

### 8 de julio

> CHANGELOG
>
> Cambios en la API de órdenes
>
> FEATURE: FEATURE
>
> PRODUCT: ÓRDENES

Actualizamos nuestras medidas de protección de datos para cumplir con los más altos estándares de seguridad. Desde el miércoles 8 de julio, vamos a dejar de mostrar el e-mail del vendedor en la creación de órdenes. El cambio no debería generar ningún problema en la integración, ya que es información de la persona que se encuentra creando la orden. 

Puedes ver toda la información en la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/resource/).

### 7 de julio

> CHANGELOG
>
> Nueva versión SDK NodeJS
>
> NEW_VERSION: NUEVA VERSIÓN
>
> PRODUCT: SDK NODEJS

Lanzamos una nueva versíon del SDK NodeJS 1.3.2.

> GIT
>
> GitHub
>
> Para más detalle, consulta en GitHub los [últimos cambios productivos](https://github.com/mercadopago/dx-nodejs/releases/tag/1.3.2).

### 1 de julio

> CHANGELOG
>
> Nueva versión SDK Java
>
> NEW_VERSION: NUEVA VERSIÓN
>
> PRODUCT: SDK JAVA

Lanzamos una nueva versión del SDK Java 1.7.0.

> GIT
>
> GitHub
>
> Para más detalle, consulta en GitHub los [últimos cambios productivos](https://github.com/mercadopago/dx-java/releases/tag/1.7.0).

<br>

> CHANGELOG
>
> Nueva versión SDK PHP
>
> NEW_VERSION: NUEVA VERSIÓN
>
> PRODUCT: SDK PHP

Lanzamos una nueva versión del SDK PHP 2.1.0.

> GIT
>
> GitHub
>
> Para más detalle, consulta en GitHub los [últimos cambios productivos](https://github.com/mercadopago/dx-php/releases/tag/2.1.0).

<br>

> CHANGELOG
>
> Nueva versión SDK .NET
>
> NEW_VERSION: NUEVA VERSIÓN
>
> PRODUCT: SDK .NET

Lanzamos una nueva versión del SDK .NET 1.8.0.

> GIT
>
> GitHub
>
> Para más detalle, consulta en GitHub los [últimos cambios productivos](https://github.com/mercadopago/dx-dotnet/releases/tag/1.8.0).

---

## Junio 2020

### 11 de junio

> CHANGELOG
>
> Nueva versión de Botón y link de pago
>
> NEW_VERSION: NUEVA VERSIÓN
>
> PRODUCT: BOTÓN Y LINK DE PAGO

Lanzamos una nueva versión de Botón y link de pago totalmente renovada. Diseñamos e implementamos una nueva experiencia a la hora de crear links de pago para compartir online por chat, e-mail o redes sociales.

[Ir a documentación de Botón y link de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/button/intro-button/)

---

## Mayo 2020

### 26 de mayo

> CHANGELOG
>
> Nueva versíon SDK Javascript
>
> NEW_VERSION: NUEVA VERSIÓN
>
> PRODUCT: SDK JAVASCRIPT

Lanzamos una nueva versión de SDK Javascript 1.3.0. A partir de ahora, es compatible con Internet Explorer 11 para que la puedas usar en tus integraciones sin problemas.

[Ir a la documentación de SDK Javascript](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/sdks/official/js/)


### 13 de mayo

> CHANGELOG
>
> Nueva versión WooCommerce
>
> NEW_VERSION: NUEVA VERSIÓN
>
> PRODUCT: WOOCOMMERCE

Lanzamos una nueva versión de WooCommerce.

[Ir a documentación de WooCommerce](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/woocommerce/introduction/)

> GIT
>
> GitHub
>
> Consulta en GitHub el detalle de los [últimos cambios productivos](https://github.com/mercadopago/cart-woocommerce/releases/tag/v4.2.0).


### 6 de mayo

> CHANGELOG
>
> Nueva versión de SDK Java
>
> NEW_VERSION: NUEVA VERSIÓN
>
> PRODUCT: SDK JAVA

Disponibilizamos una nueva versión de SDK Java 1.6.

> GIT
>
> GitHub
>
> Para más detalle, consulta en GitHub los [últimos cambios productivos](https://github.com/mercadopago/dx-java/releases/tag/1.6.0).


### 4 de mayo

> CHANGELOG
>
> Nueva versión de SDK .NET
>
> NEW_VERSION: NUEVA VERSIÓN
>
> PRODUCT: SDK .NET

Disponibilizamos una nueva versión de SDK .NET.

> GIT
>
> GitHub
>
> Para más detalle, consulta en GitHub los [últimos cambios productivos](https://github.com/mercadopago/dx-dotnet/releases/tag/1.7.0).

---

## Abril 2020

### 3 de abril

> CHANGELOG
>
> Actualización de documentación de API
>
> NEW_DOCUMENTATION: NUEVA DOCUMENTACIÓN
>
> PRODUCT: API

Renovamos la documentación para usar nuestras APIs de pagos. Agregamos un ejemplo básico del formulario en el frontend y sumamos diagramas de funcionamiento para ayudarte a la hora de integrar.

[Ir a documentación de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/api/introduction/)

---

## Marzo 2020

### 27 de marzo

> CHANGELOG
>
> Mejoramos tus reportes programados
>
> FEATURE: FEATURE
>
> PRODUCT: REPORTES

Para ayudarte a optimizar tus conciliaciones, implementamos una mejora en la generación de los rangos de fechas para reportes programados. El cambio aplica tanto para el reporte de Dinero retirado, como al reporte de Todas las transacciones. Desde el miércoles 1 de abril, para encontrar tus reportes programados, vas a tener que buscarlos por un segundo menos.

 Filtros del `search`| Fecha actual | Nueva fecha |
--------- | ------------------------ | ------------------------------- |
begin_date  | 01/01/2020 00:00:00 | 01/01/2020 00:00:00
end_date | 02/01/2020  00:00:00 | 01/01/2020  23:59:59

Tu nuevo parámetro quedaría de la siguiente forma:

```
https://api.mercadolibre.com/account/bank_report/search?access_token={{access_token}}
    &created_from=schedule
    &user_id=290477154
    &begin_date=2020-01-01T00:00:00Z
    &end_date=2020-01-01T23:59:59Z

```

> Para más información sobre la programación de reportes, [consulta la documentación](https://www.mercadopago.com.ar/developers/es/guides/reports/general-considerations/reconciliation-reports/).


### 19 de marzo

> CHANGELOG
>
> Nueva versión Prestashop 1.6 & 1.7
>
> NEW_VERSION: NUEVA VERSIÓN
>
> PRODUCT: PRESTASHOP

Lanzamos una nueva versión de Prestashop 1.6 & 1.7. Disponibilizamos el Checkout Pro a través de modal para que tus compradores puedan realizar una compra sin salir de tu sitio.

[Ir a documentación de Prestashop 1.6 & 1.7](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/prestashop/introduction/)

> GIT
>
> GitHub
>
> Consulta en GitHub el detalle de los [últimos cambios productivos](https://github.com/mercadopago/cart-prestashop-7/releases).

---

## Enero 2020

### 9 de enero

> CHANGELOG
>
> Obtén información sobre tu negocio
>
> FEATURE: FEATURE
>
> PRODUCT: CHECKOUT PRO

Si tienes campañas de publicidad para tu negocio, es importante que puedas seguirlas y ver si te están ayudando a concretar ventas. Para poder mejorarlas y que sean cada más eficientes, sumamos la posibilidad de asociar un píxel de Facebook y una etiqueta de seguimiento de conversiones de Google Ads a los pagos de tu Checkout Pro.

[Comienza a medir la conversión de tus anuncios](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations/).
