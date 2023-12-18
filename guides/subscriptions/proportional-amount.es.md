# Monto proporcional (Prorrateo)

El prorrateo es la cantidad facturada al suscriptor si la suscripción comienza en un día diferente a la fecha de facturación establecida por el vendedor. Al crear una suscripción, el vendedor puede decidir si ofrece o no esta opción. 

> WARNING
>
> Importante
>
> Para configurar un monto proporcional, los campos `frequency` y `frequency_type` deben ser completados con los valores `frequency`:`1` y `frequency_type`:`months`, respectivamente. Esto significa que el cálculo proporcional es **aplicable únicamente a suscripciones mensuales durante un período de 30 días**.

A continuación mostramos un flujo de cómo funciona el cobro proporcional de pagos.

![Basic-subscriptions](/images/subscriptions/linea-cobro-ES.png)

Para establecer un prorrateo para el pago de suscripciones, envía un POST con los parámetros `billing_day`, con el día del mes en que se debe realizar la facturación (este campo acepta valores del 1 al 28) y el ` billing_day_proportional` con el valor verdadero para el endpoint [/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval_plan/post) y ejecuta la solicitud.

> NOTE
>
> Importante
>
> Si deseas modificar una suscripción específica y definir un prorrateo, envíe un PUT con el parámetro `billing_day_proportional` al endpoint [/preapproval_plan/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval_plan_id/put), cambia el valor de `false` a `true` y ejecuta la solicitud.