----[mlb]----
# Boleto bancário

Es posible poner a disposición del suscriptor la opción de pagar la suscripción con boleto bancário. Al optar por este medio de cobro, la factura enviada tendrá una validez de 7 días y permanecerá vigente hasta 3 días después de su vencimiento. Si el suscriptor no paga más de 2 boletos consecutivos, la suscripción será cancelada.

Para ofrecer el pago de suscripciones a través de boleto bancario, envíe un **POST** con el parámetro `payment_methods_allowed` informando el medio de pago que debe aparecer en el checkout, por ejemplo, `bolbradesco` y el parámetro `status` como "pending" al endpoint [/preapproval_plan](/developers/es/reference/subscriptions/_preapproval_plan/post) y ejecuta la solicitud.

> NOTE
>
> Importante
>
> El pago de suscripciones mediante boleto bancario solo está disponible para las suscripciones creadas a través del endpoint [/preapproval_plan](/developers/es/reference/subscriptions/_preapproval_plan/post), donde el vendedor debe redirigir al comprador a la URL generada en el parámetro `init_point `.

> PREV_STEP_CARD_PT
>
> Suscripciones sin plan asociado
>
> Vea más informaciónes sobre las diferentes suscripciones que tienen características diferentes ya que son específicas de cada pagador.
>
> [Suscripciones sin plan asociado](/developers/es/docs/subscriptions/integration-configuration/subscriptions-no-associated-plan)

> NEXT_STEP_CARD_PT
>
> Valor proporcional (Pro rata)
>
> Vea cómo configurar el monto que se le cobrará al suscriptor si la suscripción comienza en un día diferente a la fecha de facturación establecida por el vendedor.
>
> [Valor proporcional (Pro rata)](/developers/es/docs/subscriptions/integration-customization/payment-methods/proportional-amount)

------------
