---
sites_supported:
  - mla
  - mco
indexable: false
---

# Pagos en modo Gateway en Advanced Payments

> WARNING
>
> Contacto comercial requerido
>
> Solo puedes integrar este producto si tu contacto comercial te compartió toda la información necesaria para hacerlo.


## Introducción

La modalidad de `Gateway` en Advanced Payments permite realizar múltiples pagos con distintos números de comercio propios y un mismo card token. Esto implica que el comprador debe ingresar los datos de su tarjeta una única vez.

Para poder realizar pagos en esta modalidad, debes cargar tus números de comercios, acuerdos y medios de pago asociados desde la configuración de tu cuenta de Mercado Pago. Los mismos serán utilizados en la integración con la API.
----[mco]----
En el caso de que tu cuenta de Mercado Pago sea de Colombia, contáctate con tu ejecutivo de cuentas para poder cargar tus números de comercios, acuerdos y medios de pago asociados.
------------

## Configurar Aplicación para procesar pagos en modo Gateway

### Crear una cuenta de Mercado Pago

Debes crear una cuenta desde el sitio de Mercado Pago del país a donde desees recibir pagos. La modalidad Gateway está disponible actualmente sólo para Argentina y Colombia:

* [Argentina](https://www.mercadopago.com.ar)
* [Colombia](https://www.mercadopago.com.co)

### Crear una aplicación

La aplicación será utilizada para poder cargar los números de comercio, acuerdos y medios de pago y, posteriormente, realizar la integración con la API.
Debes crear una aplicación accediendo a la página de aplicaciones de Mercado Pago del país correspondiente a tu cuenta y completando la información solicitada:

* [Argentina](https://www.mercadopago.com.ar/developers/panel/applications)
* [Colombia](https://www.mercadopago.com.co/developers/panel/applications)

Una vez creada la aplicación, obtendrás el valor de APP_ID, que será necesario para los siguientes pasos.


### Habilitar la aplicación para recibir pagos en modalidad Gateway

Debes contactar a tu ejecutivo de cuentas informando el APP_ID de tu aplicación a fin de requerir la habilitación de la modalidad Gateway.

### Cargar información correspondiente a números de comercios, acuerdos y medios de pago asociados

Para poder realizar pagos en esta modalidad, debes cargar tus números de comercios, acuerdos y medios de pago asociados desde la configuración de tu cuenta de Mercado Pago. Los mismos serán utilizados en la integración con la API.

En el caso de que tu cuenta de Mercado Pago sea de Colombia, contáctate con tu ejecutivo de cuentas para poder cargar tus números de comercios, acuerdos y medios de pago asociados.

### Generar un token de tarjeta

Debes generar el token de tarjeta del pagador para poder procesar pagos con la API. Esta guía asume que sabes [cómo generar un token de tarjeta](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card).
