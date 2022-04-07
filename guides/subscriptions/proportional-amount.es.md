# Monto proporcional (Prorrateo)

El prorrateo es la cantidad facturada al suscriptor si la suscripción comienza en un día diferente a la fecha de facturación establecida por el vendedor. Al crear una suscripción, el vendedor puede decidir si ofrece o no esta opción. 

A continuación mostramos un flujo de cómo funciona el cobro proporcional de pagos.

![Basic-subscriptions](/images/subscriptions/linea-cobro-ES.png)

Para establecer un prorrateo para el pago de suscripciones, envía un POST con los parámetros `billing_day`, con el día del mes en que se debe realizar la facturación (este campo acepta valores del 1 al 28) y el ` billing_day_proportional` con el valor verdadero para el endpoint [/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval_plan/post) y ejecuta la solicitud.

> NOTE
>
> Importante
>
> Si deseas modificar una suscripción específica y definir un prorrateo, envíe un PUT con el parámetro `billing_day_proportional` al endpoint [/preapproval_plan/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/subscriptions/_preapproval_plan_id/put), cambia el valor de `false` a `true` y ejecuta la solicitud.

----[mlb]----
> PREV_STEP_CARD_ES
>
> Boleto bancário
>
> Saiba como disponibilizar para o assinante a opção de pagar a assinatura com boleto bancário.
>
> [Boleto bancário](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/subscriptions/boleto-bancario)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> PREV_STEP_CARD_ES
>
> Assinaturas sem plano associado 
>
> Veja mais informações sobre as diferentes assinaturas que possuem características distintas por serem específicas para cada pagador.
>
> [Assinaturas com plano associado](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/subscriptions/subscriptions-associated-plan)
------------

> NEXT_STEP_CARD_ES
>
> Criar usuário de teste
>
> Analise se a integração foi feita de maneira correta e se a aquisição de assinaturas está funcionando sem erros.
>
> [Criar usuário de teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/testing/create-test-user)
