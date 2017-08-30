---
  description: Mercado Pago cuenta con APIs para poder recibir pagos de forma segura en tu sitio web, aplicación móvil, o donde desees, manteniendo la experiencia de compra.
---

# Introducción a nuestra API de pagos

Mercado Pago cuenta con APIs para poder recibir pagos de forma segura en tu sitio web, aplicación móvil, o donde desees.

Con nuestras APIs:

* Podrás crear tu propio checkout sin que tus compradores salgan de tu sitio.
* Los datos de tarjeta nunca pasarán por tus servidores, manteniendo la seguridad.
* Podrás recordar los datos de tarjeta de tus clientes para futuras compras.

## Credenciales

Cuentas con dos pares de claves para conectarte con la API, uno para un entorno de pruebas y otro productivo. Estas claves las encuentras en la sección [credenciales de tu cuenta](https://www.mercadopago.com.ar/account/credentials).

La **credencial pública**, o *public key*, es la utilizada para acceder a todos los recursos que necesitará tu frontend para recolectar los datos de tarjeta de crédito, y tokenizar.

La **credencial privada**, o *access token*, se utiliza para todas las otras llamadas a las APIs, como procesar un pago, realizar reembolsos, almacenar tarjetas y más. Las claves privadas deben ser mantenidas **confidencialmente** en tus servidores de backend y nunca deben ser publicadas.

> Haciendo click en el botón "renovar credenciales" obtienes pares nuevos y los anteriores dejan de funcionar. Usa esto sólo cuando creas que tus credenciales privadas han sido vulneradas o por cuestiones de seguridad, similares al cambio de contraseña, cada cierto período de tiempo. Recuerda reemplazar las credenciales en tu aplicación para que siga funcionando.

## Modo Sandbox y Productivo

Inicialmente tu aplicación sólo podrá interactuar con Mercado Pago en **Modo Sandbox**, una réplica exacta de **Modo Producción**, diseñado con el objetivo de facilitar las pruebas durante la integración.

Te brindaremos tarjetas de prueba, para que puedas simular transacciones como si fueran reales.

Una vez que hayas [probado tu aplicación](/guides/payments/api/testing.es.md), deberás completar el formulario "Quiero ir a producción" que encontrarás en tus [credenciales](https://www.mercadopago.com.ar/account/credentials).

Tu aplicación será activada automáticamente. Lo único que debes hacer es reemplazar las claves de sandbox por las productivas en tu código.


#### [Comenzar a integrar la API](/guides/payments/api/receiving-payments-by-card.es.md)
