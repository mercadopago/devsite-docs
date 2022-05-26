# Requisitos para salir a producción

Cuando tengas lista tu integración y quieras comenzar a recibir pagos, tienes que [activar tus credenciales]([FAKER][CREDENTIALS][URL]).

## ¿Por qué es necesario este proceso?

Con este proceso, se puede garantizar la seguridad de los datos de tus clientes, el cumplimiento de las normas o disposiciones legales de cada país y lograr la mejor experiencia de compra para tus ventas.

[Conoce los términos y condiciones de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/legal/terms-and-conditions).

## ¿Qué validamos?
Con el fin de asegurar tanto la mejor calidad de integración como experiencia de usuario para el cliente final, desde Mercado Pago necesitamos que se cumplan ciertos requisitos antes de salir a producción.

## Seguridad

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usa las librerías oficiales y cuida la seguridad de los datos

Por un lado, es importante que utilices la librería MercadoPago.js como es provista por Mercado Pago. No puedes modificarla ni alojarla en tus servidores. Y por otro lado, asegúrate de no incluir el atributo `name` al crear un formulario de tarjeta para cuidar la seguridad de los datos.

Estas medidas permiten cuidar los datos sensibles, cumplir con los estándares de seguridad requeridos y mantenerte siempre actualizado.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No te olvides de contar con un certificado SSL

Para que seas seguro y que puedas cuidar los datos, es necesario que tengas un certificado SSL válido y que el formulario de pagos sea disponibilizado en una página HTTPS. Esto permite proteger las transacciones que realicen los compradores y sus datos. Durante las pruebas puedes no tenerlo pero es obligatorio para salir a producción.

## Envío de información

Para evitar que un pago real se rechace por no cumplir con las validaciones de seguridad, es necesario sumar toda la información posible a la hora de realizar la operación.

Para optimizar la validación de seguridad de los pagos y mejorar las aprobaciones, puedes enviarnos los datos del comprador y del ítem para que los analicemos. Por ejemplo, si nos envías esta información, podemos detectar si ese comprador realizó pagos sospechosos en otro momento y prevenirlo.

Puedes ver más información en la [sección de Mejora la aprobación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections).

## Notificaciones y búsqueda de pagos

Para poder aprovechar al máximo los beneficios de la integración de Mercado Pago, uno de los puntos claves a destacar es la utilización de notificaciones para la actualización de los pedidos en tiempo real en tu sistema.
Ambos tipos de notificaciones, [IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction) o [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks/webhooks), se envían de un servidor a otro mediante una llamada `HTTP POST` en relación a tus transacciones.
Implementando estas notificaciones, podrás enterarte de todas las actualizaciones de tus transacciones en el momento.

## Experiencia de usuario

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mostrar los correctos mensajes de respuesta

Como se menciona en la [sección de Mensajes de respuesta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/handling-responses), se le deben mostrar los mensajes correspondientes al cliente, dependiendo el resultado del pago, para que el mismo pueda accionar de la manera correcta.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sé transparente con las promociones y financiación

Debes aclarar que las promociones son ofrecidas por Mercado Pago. Puedes [incluir un banner de medios de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/banners/introduction) o [sumar el link a la sección de promociones](https://www.mercadopago.com/mla/credit_card_promos.htm). Como también, debes informar los [costos de financiación que aplican a tus clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/costos-financiacion_621).

----[mla]----
> NOTE
>
> Nota
>
> Debido a la Resolución [E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) de la Secretaría de Comercio Argentina, sobre precios transparentes, es necesario que cumplas con [exigencias adicionales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/considerations-argentina).
------------

## Disponibiliza tus términos y condiciones

Debes disponer de una política de términos y condiciones y aclarar que sos responsable por todos los datos que sean ingresados en tu sitio.

---
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Acepta pagos con la billetera de Mercado Pago
>
> Permite pagos solo de usuarios registrados en Mercado Pago, con tarjetas y dinero disponible.
>
> [Usuarios registrados](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/wallet-integration)

> RIGHT_BUTTON
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference)
