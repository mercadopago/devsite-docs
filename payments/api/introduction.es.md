---
description: Mercado Pago cuenta con APIs para poder recibir pagos de forma segura en tu sitio web, aplicación móvil, o donde desees, manteniendo la experiencia de compra.
---

# API

Mercado Pago cuenta con APIs para poder recibir pagos de forma segura en tu sitio web, aplicación móvil, o donde desees, manteniendo la experiencia de compra.

### !!! SUMAR BENEFICIOS !!!

## Credenciales

Cuentas con dos pares de claves para conectarte con la API, uno para un entorno de pruebas y otro productivo. Estas claves las encuentras en la sección [credenciales de tu cuenta](https://www.mercadopago.com/mla/account/credentials).

La **credencial pública**, o *public key*, es la utilizada para acceder a todos los recursos que necesitará tu frontend para recolectar los datos de tarjeta de crédito, y tokenizar.

La **credencial privada**, o *access token*, se utiliza para todas las otras llamadas a las APIs, como procesar un pago, realizar reembolsos, almacenar tarjetas y más. Las claves privadas deben ser mantenidas **confidencialmente** en tus servidores de backend y nunca deben ser publicadas.

> Haciendo click en el botón "renovar credenciales" obtienes pares nuevos y los anteriores dejan de funcionar. Usa esto sólo cuando creas que tus credenciales privadas han sido vulneradas o por cuestiones de seguridad, similares al cambio de contraseña, cada cierto período de tiempo. Recuerda reemplazar las credenciales en tu aplicación para que siga funcionando.

## Modo Sandbox y Productivo

Inicialmente tu aplicación sólo podrá interactuar con Mercado Pago en **Modo Sandbox**, una réplica exacta de **Modo Producción**, diseñado con el objetivo de facilitar las pruebas durante la integración. 

Te brindaremos tarjetas de prueba, para que puedas simular transacciones como si fueran reales.

Una vez que hayas probado tu aplicación, deberás realizar el [proceso de homologación](#) y completar el formulario "Quiero ir a producción" que encontrarás en tus [credenciales](). 

Tu aplicación será activada automáticamente. Lo único que debes hacer es reemplazar las claves de sandbox por las productivas en tu código.


#### [Comenzar a integrar la API](./receive-payments.es.md)