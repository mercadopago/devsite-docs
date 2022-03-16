## Medios de Pago

--—-[mlb]----

Al integrar suscripciones, es posible personalizar y ofrecer diferentes medios de pago. Además de las opciones de tarjeta de crédito disponibles, puedes ofrecer boleto bancário y también establecer una cantidad proporcional para el pago de las suscripciones.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----

Al integrar las suscripciones, es posible personalizar y definir un valor proporcional para el pago de la suscripción. Para realizar esta integración, sigue los pasos que se describen a continuación.

------------

--—-[mlb]----

### Boleto Bancário

Es posible poner a disposición del suscriptor la opción de pagar la suscripción con boleto bancário. Al optar por este medio de cobro, la factura enviada tendrá una validez de 7 días y permanecerá vigente hasta 3 días después de su vencimiento. Si el suscriptor no paga más de 2 boletos consecutivos, la suscripción será cancelada.

Para ofrecer el pago de suscripciones a través de boleto bancario, envía un POST con el parámetro `payment_methods_allowed" informando el método de pago que aparecerá al finalizar la compra, por ejemplo, `bolbradesco` al endpoint [/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval_plan/post) y ejecute la solicitud. 


> NOTE
>
> Importante
>
> El pago de suscripciones con boleto bancário solo está disponible para suscripciones creadas por Checkout Pro, donde el vendedor debe redirigir al comprador a la URL generada en el parámetro `init_point`. 

------------


### Monto proporcional (Prorrateo)

El prorrateo es la cantidad facturada al suscriptor si la suscripción comienza en un día diferente a la fecha de facturación establecida por el vendedor. Al crear una suscripción, el vendedor puede decidir si ofrece o no esta opción. 

A continuación mostramos un flujo de cómo funciona el cobro proporcional de pagos.

![Basic-subscriptions](/images/subscriptions/linea-cobro-ES.png)


Para establecer un prorrateo para el pago de suscripciones, envía un POST con los parámetros `billing_day`, con el día del mes en que se debe realizar la facturación (este campo acepta valores del 1 al 28) y el ` billing_day_proportional` con el valor verdadero para el endpoint [/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval_plan/post) y ejecuta la solicitud.


> NOTE
>
> Importante
>
> Si deseas modificar una suscripción específica y definir un prorrateo, envíe un PUT con el parámetro `billing_day_proportional` al endpoint [/preapproval_plan/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval_plan_id/put), cambia el valor de `false` a `true` y ejecuta la solicitud.
