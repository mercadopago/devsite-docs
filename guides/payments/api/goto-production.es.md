# Requisitos para ir a producción

Cuando tengas lista tu integración y quieras comenzar a recibir pagos, tienes que completar el formulario para ir producción desde la [sección de Credenciales](https://www.mercadopago.com/mla/account/credentials).

## ¿Por qué es necesario este proceso?

Con este proceso, se puede garantizar la seguridad de los datos de tus clientes, el cumplimiento de las normas o disposiciones legales de cada país y lograr la mejor experiencia de compra para tus ventas.

[Conoce los términos y condiciones de Mercado Pago](https://www.mercadopago.com.ar/ayuda/terminos-y-condiciones_299).

## Usa las librerías oficiales y cuida la seguridad de los datos

Por un lado, es importante que utilices la librería MercadoPago.js como es provista por Mercado Pago. No puedes modificarla ni alojarla en tus servidores. Y por otro lado, asegúrate de no incluir el atributo `name` al crear un formulario de datos de tarjeta para prevenir que los datos no lleguen a tu servidor cuando el cliente envíe el formulario.

Estas medidas permiten cuidar los datos sensibles, cumplir con los estándares de seguridad requeridos y mantenerte siempre actualizado.

## No te olvides de contar con un certificado SSL

Para que seas seguro y que puedas cuidar los datos, es necesario que tengas un certificado SSL válido y que el formulario de pagos sea disponibilizado en una página HTTPS. Esto permite proteger las transacciones que realicen los compradores y sus datos. Durante las pruebas puedes no tenerlo pero es obligatorio para ir a producción.

## Sé transparente con las promociones y financiación

Debes aclarar que las promociones son ofrecidas por Mercado Pago. Puedes [incluir un banner de medios de pago](https://www.mercadopago.com.ar/developers/es/guides/banners/introduction/) o [sumar el link a la sección de promociones](https://www.mercadopago.com/mla/credit_card_promos.htm). Como también, debes informar los [costos de financiación que aplican a tus clientes](https://www.mercadopago.com.ar/ayuda/costos-financiacion_621).

----[mla]----
> NOTE
>
> Nota
>
> Debido a la Resolución E 51/2017 de la Secretaría de Comercio Argentina, sobre precios transparentes, es necesario que cumplas con exigencias adicionales.
------------

## Disponibiliza tus términos y condiciones

Debes disponer de una política de términos y condiciones y aclarar que sos responsable por todos los datos que sean ingresados en tu sitio.

---
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración utilizando los  usuarios de prueba.
>
> [Prueba tu integración](https://www.mercadopago.com.ar/developers/es/guides/payments/api/testing/)

> RIGHT_BUTTON
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/)