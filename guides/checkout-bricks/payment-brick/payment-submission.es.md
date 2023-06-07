> SERVER_SIDE
>
> h1
>
> Envío de pagos

Para continuar el proceso de pago hacia Mercado Pago, es necesario que tu backend sepa recibir la información del formulario con el token generado y los datos completados. Su backend debe disponibilizar un endpoint `/process_payment` para recibir allí todos los datos luego de realizar la acción submit.

Ya estando en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada](/developers/es/guides/additional-content/credentials/credentials) y que para interactuar con nuestras APIs recomendamos utilizar la [SDK oficial de Mercado Pago](/developers/es/docs/sdks-library/landing).

> NOTE
>
> Importante
> 
> Antes de realizar la llamada a la API, es importante validar que los datos que se enviarán sean correctos. Entonces, si ya tiene algún tipo de sesión en su servidor de integración donde se almacena la información de contexto de compra, puede usarla para comparar los datos recibidos desde el frontend.

En las siguientes secciones, vea cómo enviar a Mercado Pago pagos realizados con:

----[mlb]----
* [Tarjetas](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Cuenta de Mercado Pago y Cuotas sin tarjeta](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits)
* [Pix](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/pix)
* [Otros medios de pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/brasil)

------------
----[mla]----
* [Tarjetas](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Cuenta de Mercado Pago y Cuotas sin tarjeta](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits)
* [Otros medios de pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/argentina)

------------
----[mlm]----
* [Tarjetas](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Cuenta de Mercado Pago y Meses sin tarjeta de crédito](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits)
* [Otros medios de pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/mexico)

------------
----[mpe]----
* [Tarjetas](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Cuenta de Mercado Pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [Otros medios de pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/peru)

------------
----[mco]----
* [Tarjetas](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Cuenta de Mercado Pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [PSE](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/pse)
* [Otros medios de pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/colombia)

------------
----[mlu]----
* [Tarjetas](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Cuenta de Mercado Pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [Otros medios de pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/uruguay)

------------
----[mlc]----
* [Tarjetas](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Cuenta de Mercado Pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet)

------------