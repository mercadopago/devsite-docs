# ¿Qué es Suscripciones?

Las suscripciones de Mercado Pago te permiten recibir pagos de forma recurrente, con tarjeta de crédito y débito. La disponibilidad de los medios de pago varía según la forma de integración.

## Roles disponibles

Existen dos roles involucrados:
1. El **vendedor** o **collector**, quien es dueño del plan de suscripción y acreedor de los importes que se debiten.
1. El __pagador__ o __payer__, quien abonará los importes de forma automática desde el medio de pago que haya elegido.

> NOTE
> 
> ¿Quieres ofrecer suscripciones de forma rápida y simple?
> 
> Ingresa en la sección de [Planes de suscripción](https://www.mercadopago[FAKER][URL][DOMAIN]/subscription-plans) en el panel de tu cuenta de Mercado Pago, configura tus datos ¡y listo!


## Conceptos claves

Para poder integrar suscripciones, es necesario que conozcas cuatro conceptos claves:

| Concepto | Descripción |
| --- |	--- |
| Plan de suscripción o template | Es una plantilla que permite definir, entre otros atributos, el título, monto y frecuencia de las suscripciones creadas por el vendedor. Sirve para establecer características generales en las suscripciones que se creen a partir de esta entidad. Es importante aclarar que aquí todavía no se configura ningún medio de pago.|
| Suscripción o preapproval | Autorización del pagador para cobros recurrentes con un medio de pago definido que va ser la base para crear cuotas según la recurrencia que se defina. Tiene características similares al template, ya que puede crearse una suscripción a partir de un plan. |
| Pago autorizado o authorized payment | Es la cuota de una suscripción que se genera y se cobra en base a la recurrencia definida. El motor de suscripciones calendariza y genera los pagos de forma automática. |
| Cobro de verificación | Se trata de un cobro mínimo, que se realiza en el momento de la adhesión del pagador solo para verificar que la tarjeta utilizada para pagar la suscripción es válida. Enseguida, este monto se reembolsa al pagador. |
| Fecha de facturación | Es la fecha que el vendedor puede definir para efectuar los cobros de una suscripción con frecuencia de pago mensual. |
| Monto proporcional (prorrateo) | Es el importe que se cobra al suscriptor si inicia la suscripción en un día distinto a la fecha de facturación establecida por el vendedor. Este monto es proporcional a los días transcurridos entre la adhesión y la fecha del primer cobro mensual. |
| Prueba gratis | Es un periodo gratuito que el vendedor puede ofrecer al suscriptor antes del primer cobro. En este caso, el suscriptor queda exento del primer pago y empieza a pagar en los cobros siguientes. |


### Fecha de facturación y monto proporcional

El siguiente gráfico muestra cómo actúa la fecha de facturación y el eventual cobro del monto proporcional (prorrateo) al suscriptor.

![Basic-subscriptions](/images/subscriptions/linea-cobro-ES.png)


### Fecha de facturación y monto proporcional (con prueba gratis)

Si estableces una fecha de facturación para una suscripción que también tiene un periodo de prueba gratuito establecido, el monto proporcional solo se cobrará al suscriptor un mes después de su adhesión, como se muestra en el siguiente gráfico.

![Basic-subscriptions](/images/subscriptions/linea-cobro-trial-ES.png)

------------
### Próximos pasos
> LEFT_BUTTON_REQUIRED_ES
>
> Requisitos para integrar
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Requisitos para integrar](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/previous-requirements)
