# API

Mercado Pago cuenta con APIs para poder recibir pagos de forma segura en tu sitio web, aplicación móvil, o donde desees, manteniendo la experiencia de compra.

### !!! SUMAR BENEFICIOS !!!

## Credenciales

Cuentas con dos pares de claves para conectarte con la API. Estas claves las encuentras en la sección [credenciales de tu cuenta]().

La **credencial pública**, o *public key*, es la utilizada para acceder a todos los recursos que necesitará tu frontend para recolectar los datos de tarjeta de crédito, y tokenizar.

La **credencial privada**, o *secret key*, se utiliza para todas las otras llamadas a las APIs, como procesar un pago, realizar reembolsos, almacenar tarjetas y más. Las claves privadas deben ser mantenidas **confidencialmente** en tus servidores de backend y nunca deben ser publicadas.

> Haciendo click en el botón "renovar credenciales" obtienes pares nuevos y los anteriores dejan de funcionar. Usa esto sólo cuando creas que tus credenciales privadas han sido vulneradas o por cuestiones de seguridad, similares al cambio de contraseña, cada cierto período de tiempo. Recuerda reemplazar las credenciales en tu aplicación para que siga funcionando.

## Modo Sandbox y Productivo

Inicialmente tu aplicación sólo podrá interactuar con Mercado Pago en **Modo Sandbox**, una réplica exacta de **Modo Producción**, diseñado con el objetivo de facilitar las pruebas durante la integración. El uso de este modo no genera ningún tipo de cargo real, ya que todas las pruebas las puedes realizar con tarjetas que te brindamos.

Una vez tu aplicación esté lista para recibir pagos productivos, deberás habilitar el entorno productivo. Para esto, debes seleccionar la aplicación en [credenciales]() y completar un formulario con información básica sobre tu negocio. Tu aplicación será activada automáticamente, y podrás comenzar a utilizar las claves de producción.


#### [Comenzar a utilizar la API]()



---

# Esto se va:


## Comenzando

Contamos con dos entornos, _sandbox_ y _production_. El entorno _sandbox_ es el que utilizaras para realizar la integración, y donde puedes utilizar tarjetas de crédito de pruebas.

Cada uno de estos entornos cuenta con conjunto de credenciales que deberás utilizar:

* Credencial pública
* Credencial privada

La credencial pública, o _public key_ es la utilizada para recolectar los datos de tarjeta de crédito.

La credencial privada, o _secret key_ se utiliza para todas las otras llamadas a las APIs, como obtener recibir un pago, realizar reembolsos, almacenar tarjetas de forma segura y mucho más.

Es importante que antes de comenzar a desarrollar, conozcas los [requerimientos][1] para poder habilitar el entorno productivo.


## Habilitar el entorno productivo

Una vez que finalices el desarrollo de tu aplicación, y estés seguro de que pases todos los [requerimientos][1], puedes hacer el cambio al entorno productivo haciendo el cambio de las credenciales.


[1]: (http://mercadopago.com)


