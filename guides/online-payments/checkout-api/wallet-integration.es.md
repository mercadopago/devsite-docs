# Recibe pagos con la billetera de Mercado Pago

Agrega en tu integración el Checkout Pro modo billetera, para que **recibas pagos únicamente de usuarios registrados en Mercado Pago, con sus tarjetas y dinero disponible**.

Esto significa que tus clientes tienen más formas de pagarte y pueden acceder a mejores beneficios, sin alterar la dinámica de tu Checkout API.

![Checkout-Wallet](/images/web-payment-checkout/cho-wallet-landing.png)

## Beneficios de la billetera de Mercado Pago

* Tus clientes pueden pagarte con más medios de pago y de forma más rápida:
  * **Con tarjetas de crédito o débito ya guardadas** en sus cuentas de Mercado Pago, ahorrando el esfuerzo de ingresar una tarjeta desde el comienzo. 
  También tienen sus **direcciones guardadas**, lo que simplifica todo el proceso de carga.
  * **Con dinero disponible en Mercado Pago** tienen su dinero listo para ser usado en el momento, en tan solo 1 click.
----[mla]----
* Tus clientes pueden pagarte en hasta 12 cuotas sin usar tarjeta de crédito, siendo financiados por <a href="https://www.mercadolibre.com.ar/mercado-credito/meses-sin-tarjeta/" target="_blank"> Mercado Crédito</a>.
------------
----[mlb]----
* Tus clientes pueden pagarte en hasta 12 cuotas sin usar tarjeta de crédito, siendo financiados por <a href="https://www.mercadolibre.com.br/mercado-credito/meses-sin-tarjeta/" target="_blank"> Mercado Crédito</a>.
------------
* La conversión de tu Checkout mejora al ofrecer medios de pago más dinámicos y fáciles de usar.
* Mejora la aprobación de tus pagos con menor riesgo de fraude.

## Cómo sumar la billetera en tu sitio

Necesitas integrar [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction) configurado como [modo billetera](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations#bookmark_aceptar_pagos_%C3%BAnicamente_de_usuarios_registrados) para agregar la billetera de Mercado Pago en tu sitio.

Para integrarlo, tienes que [generar la preferencia de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/integration#bookmark_pasos_para_integrarte) con la información del producto o servicio que quieras ofrecer y agregar la opción de pago en tu sitio. 

### Pasos para integrar la billetera

> SERVER_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Genera tu preferencia

Para comenzar, tienes que generar tu preferencia de pago desde tu backend con la [SDK de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements#bookmark_utiliza_nuestras_librer%C3%ADas_siempre) que utilizaste en tu Checkout API. 

{{CODIGO}}

> CLIENT_SIDE
>
> h3
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Suma el checkout a tu sitio

Luego, desde tu frontend, agrega el siguiente código para mostrar el botón de pago de Checkout Pro modo billetera en el lugar que quieras que aparezca.

{{CODIGO}}

Para más información sobre cada atributo, consulta la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post/). 

¡Y listo! Ya tienes integrada la billetera de Mercado Pago en tu sitio. 

> WARNING
>
> Importante
>
> Para probarlo, no te olvides de acceder desde otro navegador o cerrar la sesión de tu cuenta de Mercado Pago ya que no puedes pagarte a ti mismo.<br/> 

---

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada de Checkout Pro
>
> Optimiza la integración de tu billetera para mejorar la gestión de tus ventas.
>
> [Integración avanzada](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/advanced-integration)


> RIGHT_BUTTON_RECOMMENDED_ES
>
> Prueba la billetera
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration/)