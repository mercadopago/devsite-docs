---
sites_supported:
  - mla
  - mco
  - global
---

# Mercado Pago Gateway: Introducción

## ¿Qué es?

**Mercado Pago Gateway** es un modelo de operación que te permite procesar pagos con tarjeta de débito y crédito con tus propios números de comercio. En este modelo, Mercado Pago te ofrece toda su tecnología y robustez para poder operar con tus propios acuerdos con los adquirentes y emisores.

## ¿Cuáles son las diferencias con Mercado Pago "tradicional"?

Al Mercado Pago "tradicional", el que probablemente estés más acostumbrado, en la industria de pago se lo denomina como **Modelo Agregador.** Los acuerdos con los adquirentes y emisores en este caso son del Agregador: Mercado Pago. Los vendedores registrados en la plataforma se "agregan" o subscriben a la utilización de dichos acuerdos.

El **Modelo Agregador** es el que se usa por defecto en Mercado Pago a menos que el vendedor califique (ver requisitos debajo) para operar en el **Modelo Gateway**.

_A continuación se comparan las características principales de cada modelo:_

|Característica| Modelo Agregador | Modelo Gateway |
|---|:---:|:---:|
|Procesamiento | ✔ | ✔ |
|Prevención de fraude (Scoring) | ✔ | ✔ (*) |
|Prevención de fraude (Revisión Manual) | ✔ | ✔ (*) |
|Conciliación (con Mercado Pago) | ✔ | ✔ |
|Conciliación (con Adquirentes y Emisores) | Incluído | No ofrecido/a |
|Financiación (cuotas y promociones) | Incluída | No aplicable |
|Contracargos (Gestión) | Incluído | No ofrecido/a |
|Contracargos (Cobertura) | Incluída | No ofrecido/a |

> (\*) Opcional

## ¿Hay diferencias en la integración?

Si, hay algunas diferencias, pero no muy grandes.

Generalmente si te encuentras empezando un nuevo emprendimiento o negocio recomendamos empezar con el **Modelo Agregador** y luego cuando crezca considerar el **Modelo Gateway**. El hecho de que los cambios de integración sean pequeños permite que no cambiar de modelo en el futuro no impliquen altos costos o tiempos.

## Modelo híbrido (Agregador + Gateway)

La integración con Mercado Pago adicionalmente te permite utilizar el modelo híbrido, único en latinoamérica. Con la misma integración podrás ofrecer todos los medios de pago y/o promociones de Mercado Pago de **Modelo Agregador** además de los tuyos en **Modelo Gateway**, dándole al pagador la oferta de medios de pago y financiación más completa de todas.

## Requisitos para operar en Modelo Gateway

### Si ya estás operando con Mercado Pago

* Ponte en contacto con tu ejecutivo de cuentas

### Si no estás operando con Mercado Pago aún <br> (o no tienes un ejecutivo asignado)

* [Completá el siguiente formulario](http://e.mercadolibre.com.ar/pub/sf/ResponseForm?_ri_=X0Gzc2X%3DYQpglLjHJlYQGsPShNr7YSD716AmfdSgiLzc9zaHbPGEzcMTwa2VXMtX%3DYQpglLjHJlYQGmfifPS0tzgzeKqXw7tLnnzgHYCPEBohUzdBmze09&_ei_=ErPkEDqzVJEurmXsCCFMSWw) y nos comunicaremos contigo

## Costos de servicio

Los costos de servicio en el **Modelo Gateway** son negociados uno a uno.
El costo dependerá según el volumen mensual operado del vendedor.

## Próximos pasos

* [Configurá tus números de comercio y medios de pago](https://www.mercadopago.com.ar/developers/es/guides/gateway/configuration) en el backoffice de Mercado Pago
* [Integrá el Smart Checkout](https://www.mercadopago.com.ar/developers/es/guides/gateway/web-checkout/receiving-payments) en Modelo Gateway
* [Integrá la API](https://www.mercadopago.com.ar/developers/es/guides/gateway/api/receiving-payments) en Modelo Gateway
* [Integrá pagos avanzados](https://www.mercadopago.com.ar/developers/es/guides/gateway/advanced/introduction) en Modelo Gateway
