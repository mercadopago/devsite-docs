---
  indexable: false
---

# Introducción a nuestra API de pagos

Mercado Pago cuenta con APIs para poder recibir pagos de forma segura en tu sitio web, aplicación móvil, o donde desees.

Con nuestras APIs:

* Podrás crear tu propio checkout sin que tus compradores salgan de tu sitio.
* Los datos de tarjeta nunca pasarán por tus servidores, manteniendo la seguridad.
* Podrás recordar los datos de tarjeta de tus clientes para futuras compras.

## Credenciales

Cuentas con dos pares de claves para conectarte con la API, uno para un entorno de pruebas y otro productivo. Estas claves las encuentras en la sección [credenciales de tu cuenta](https://www.mercadopago.com.ar/account/credentials).

La **credencial pública**, o *public key*, es la utilizada para acceder a todos los recursos que necesitará tu frontend para recolectar los datos de tarjeta de crédito, y _tokenizar_.

La **credencial privada**, o *access token*, se utiliza para todas las otras llamadas a las APIs, como procesar un pago, realizar reembolsos, almacenar tarjetas y más. Las claves privadas deben ser mantenidas **confidencialmente** en tus servidores de backend y nunca deben ser publicadas.

> Haciendo click en el botón "renovar credenciales" obtienes pares nuevos y los anteriores dejan de funcionar. Usa esto sólo cuando creas que tus credenciales privadas han sido vulneradas o por cuestiones de seguridad, similares al cambio de contraseña, cada cierto período de tiempo. Recuerda reemplazar las credenciales en tu aplicación para que siga funcionando.

## Modo _Sandbox_ y Productivo

Inicialmente tu aplicación sólo podrá interactuar con Mercado Pago en **Modo Sandbox**, una réplica exacta de **Modo Producción**, diseñado con el objetivo de facilitar las pruebas durante la integración.

Te brindaremos tarjetas de prueba, para que puedas simular transacciones como si fueran reales.

Una vez que hayas [probado tu aplicación](https://www.mercadopago.com.ar/developers/es/guides/payments/api/testing), deberás completar el formulario "Quiero ir a producción" que encontrarás en tus [credenciales](https://www.mercadopago.com.ar/account/credentials).

Tu aplicación será activada automáticamente. Lo único que debes hacer es reemplazar las claves de _sandbox_ por las productivas en tu código.

## Requisitos para salir a producción 

Una vez que hayas probado tu aplicación en Modo _Sandbox_, debes completar el proceso de homologación que consiste en:

* Utilzar el _SDK_ mercadopago.js para consultar métodos de pago, realizar cobros, asegurar una buena experiencia de usuario y evitar transacciones fraudulentas.
* Usar el atributo `data_checkout` en las etiquetas de `input`para manejar los datos en forma segura y evitar que lleguen a tu servidor. Asegurate de NO incluir el atributo `name` en éstas etiquetas.
* Contar con certificado SSL para asegurar la navegación segura y que el formulario de pagos es enviado mediante HTTPS.
* Comunicar correctamente el resultado del pago al usuario para intentar el recupero del cobro en caso de rechazo. Para esto utiliza los [códigos de respuesta](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses).
* Comunicar las [promociones y posibilidades de financiación](https://www.mercadopago.com.ar/promociones) ofrecidas por Mercado Pago. Puedes incluir nuestros [banners](https://www.mercadopago.com/mla/com.mercadopago.web.landing.LandingController?id=banners#!institucionales) institucionales.


> Cuando hayas cumplido con los requisitos, debes completar el formulario **Quiero salir a producción** que se encuentra en la sección de tus [credenciales](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mla/account/credentials)

El incumplimiento de estas normas puede implicar desde el no procesamiento de pagos, hasta acciones legales de acuerdo a lo establecido en los [términos y condiciones](https://www.mercadopago.com.ar/ayuda/terminos-y-condiciones_299).
Debes disponer de una política de términos y condiciones, en la cual especifiques que te responsabilizas por todos los datos que sean ingresados en tu sitio.


#### [Comenzar a integrar la API](https://www.mercadopago.com.ar/developers/es/guides/payments/api/receiving-payment-by-card)
