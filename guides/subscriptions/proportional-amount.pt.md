# Valor proporcional (Pro rata)

Pro rata é o valor cobrado do assinante caso a assinatura comece em um dia diferente da data de cobrança definida pelo vendedor. Ao criar uma assinatura o vendedor pode decidir se deseja ou não oferecer esta opção. 

> WARNING
>
> Importante
>
> Para configurar um valor proporcional, os campos `frequency` e `frequency_type` precisam preenchidos com os valores `frequency`:`1` e `frequency_type`:`months` respectivamente. Isso significa que o cálculo proporcional é **aplicável somente em assinaturas mensais durante um período de 30 dias**.

Abaixo mostramos um fluxo de como funciona a cobrança proporcional dos pagamentos.

![Basic-subscriptions](/images/subscriptions/linea-cobro-PT.png)

Para definir uma pro-rata no pagamento de assinaturas, envie um POST com os parâmetros `billing_day`, com o dia do mês em que a cobrança deverá ser realizada (este campo aceita valores de 1 a 28) e o `billing_day_proportional` com o valor true ao endpoint [/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_plan/post) e execute a requisição.

> NOTE 
>
> Importante
>
> Caso queira modificar uma assinatura específica e definir uma Pro rata, envie um PUT com o parâmetro `billing_day_proportional` ao endpoint [/preapproval_plan/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_plan_id/put), altere o valor de `false` para `true` e execute a requisição.

----[mlb]----
> PREV_STEP_CARD_PT
>
> Boleto bancário
>
> Saiba como disponibilizar para o assinante a opção de pagar a assinatura com boleto bancário.
>
> [Boleto bancário](/developers/pt/docs/subscriptions/integration-customization/payment-methods/boleto-bancario)
------------

----[mla, mlm, mpe, mco, mlu, mlc]---- 
> PREV_STEP_CARD_PT
>
> Assinaturas sem plano associado 
>
> Veja mais informações sobre as diferentes assinaturas que possuem características distintas por serem específicas para cada pagador.
>
> [Assinaturas com plano associado](/developers/pt/docs/subscriptions/integration-configuration/subscription-no-associated-plan)
------------

> NEXT_STEP_CARD_PT
>
> Criar usuário de teste
>
> Analise se a integração foi feita de maneira correta e se a aquisição de assinaturas está funcionando sem erros.
>
> [Criar usuário de teste](/developers/pt/docs/subscriptions/additional-content/your-integrations/test/accounts)