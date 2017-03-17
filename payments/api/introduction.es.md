# API

Mercado Pago cuenta con APIs para poder recibir pagos de forma segura en tu sitio web, aplicación móvil, o donde desees, manteniendo la experiencia de compra.

# !!! SUMAR BENEFICIOS !!!

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