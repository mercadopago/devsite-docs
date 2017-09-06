---
sites_supported:
    - mla
    - mlb
    - mlm
    - global
---


# Introducción

> WARNING
>
> Pre-requisitos
>
> * Tener implementada la [captura de datos de tarjeta](/guides/payments/api/receiving-payment-by-card.es.md#captura-los-datos-de-tarjeta).
> * Tener implementado [Clientes y Tarjetas Almacenadas](/guides/payments/api/customers-and-cards.es.md)


Mercado Pago te permitirá recibir pagos recurrentes a través de suscripciones.

Solo tienes que adherir a tus clientes a los planes de suscripción y procesaremos los pagos de forma automática y recurrente.
Enviaremos una notificación _webhook_ para informarte el resultado de los pagos.

En los planes de suscripción podrás configurar:

* Frecuencia de pago: Cada cuantos días o meses se ejecutará el cobro y en que día del mes deseas realizarlo.
* Duración de la suscripción: ilimitada o limitada a una cantidad de repeticiones de cobros.
* Período gratuito de prueba.
* Cargo adicional por inicio de suscripción.

## Credenciales

Cuentas con dos pares de claves para conectarte con la API, uno para un entorno de pruebas y otro productivo. Estas claves las encuentras en la sección [credenciales de tu cuenta](https://www.mercadopago.com.ar/account/credentials).

La **credencial pública**, o *public key*, es la utilizada para acceder a todos los recursos que necesitará tu frontend para recolectar los datos de tarjeta de crédito, y tokenizar.

La **credencial privada**, o *access token*, se utiliza para todas las otras llamadas a las APIs, como procesar un pago, realizar reembolsos, almacenar tarjetas y más. Las claves privadas deben ser mantenidas **confidencialmente** en tus servidores de backend y nunca deben ser publicadas.

> Haciendo click en el botón "renovar credenciales" obtienes pares nuevos y los anteriores dejan de funcionar. Usa esto sólo cuando creas que tus credenciales privadas han sido vulneradas o por cuestiones de seguridad, similares al cambio de contraseña, cada cierto período de tiempo. Recuerda reemplazar las credenciales en tu aplicación para que siga funcionando.

## Modo Sandbox y Productivo

Inicialmente tu aplicación sólo podrá interactuar con Mercado Pago en **Modo Sandbox**, una réplica exacta de **Modo Producción**, diseñado con el objetivo de facilitar las pruebas durante la integración.

Te brindaremos tarjetas de prueba, para que puedas simular transacciones como si fueran reales.

Una vez que hayas [probado tu aplicación](/guides/subscriptions/api/testing.es.md), deberás completar el formulario "Quiero ir a producción" que encontrarás en tus [credenciales](https://www.mercadopago.com.ar/account/credentials).

Tu aplicación será activada automáticamente. Lo único que debes hacer es reemplazar las claves de _sandbox_ por las productivas en tu código.


#### Comenzar a crear [planes y suscribir clientes](/guides/subscriptions/api/create-subscription.es.md)
