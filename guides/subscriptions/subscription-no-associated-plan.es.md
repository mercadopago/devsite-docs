## Suscripciones sin plan asociado

Las suscripciones sin plan asociado se utilizan cuando distintas suscripciones tienen características diferentes por ser específicas de cada pagador. Por ejemplo: una suscripción de un solo mes con un descuento específico.

Este modelo de suscripción se puede realizar de dos formas: 

* [Con pago autorizado](/developers/es/guides/subscriptions/integration-configuration/subscription-no-associated-plan#bookmark_suscripciones_con_pago_autorizado) 
* [Con pago pendiente](/developers/es/guides/subscriptions/integration-configuration/subscription-no-associated-plan#bookmark_suscripciones_con_pago_pendiente)


### Suscripciones con pago autorizado

Las suscripciones con pago autorizado permiten generar y facturar la cuota de una suscripción en función de la periodicidad definida, lo que hace que el motor de suscripciones programe y cree automáticamente pagos en función del método de pago definido en el momento de la creación de la firma.

Para ofrecer **suscripciones sin plan asociado y con pago autorizado**, envía un POST con los atributos necesarios al endpoint [/preapproval](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval/post) y presta atención al parámetro `status`, que debe ser rellenado con el valor `autorizado`. 

Después de completar los campos, ejecuta la solicitud.


> NOTE
>
> Importante
>
> Para acreditar la validez de la tarjeta, realizamos un pago con un importe mínimo. Si el pago es exitoso, procederemos a la devolución de dicho pago. El valor puede diferir según cada país.


### Suscripciones con pago pendiente 


Las suscripciones con pago pendiente son un modelo de suscripción donde no se define un método de pago en el momento de su creación. Cuando esto ocurre, los pagos pasan automáticamente al estado `pending` y dependen de que el usuario busque una forma de completar el pago.

En este caso, es posible actualizar la suscripción y definir un medio de pago a través del endpoint [/preapproval/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval_id/put), o compartir un link de pago para que el comprador pueda completar la compra con el método de pago de su elección.

Para ofrecer **suscripciones sin plan asociado y con pago pendiente**, envía un POST con los atributos necesarios al endpoint [/preapproval](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval/post) y presta atención al parámetro `status`, que debe ser rellenado con el valor `pending`. 

Después de completar los campos, ejecute la solicitud.
