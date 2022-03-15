## Meios de pagamento

--—-[mlb]----

Ao integrar assinaturas, é possível customizar e oferecer diferentes meios de pagamento além das opções de cartão de crédito disponíveis, como boleto bancário ou definir um valor proporcional (Pro rata) para o pagamento de assinaturas.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----

Ao integrar assinaturas, é possível customizar e definir um valor proporcional para o pagamento de assinaturas. Para realizar esta integração, siga as etapas descritas abaixo.

------------

--—-[mlb]----

### Boleto bancário

É possível disponibilizar para o assinante a opção de pagar a assinatura com boleto bancário. Ao optar por esse meio de cobrança, o boleto enviado terá validade de 7 dias e continuará válido até 3 dias após o vencimento. Caso o assinante deixe de pagar mais de 2 boletos consecutivos, a assinatura será cancelada.

Para oferecer pagamento de assinaturas via boleto bancário, envie um POST com o parâmetro `payment_methods_allowed` informando o meio de pagamento que deverá aparecerá no checkout, por exemplo, `bolbradesco` ao endpoint [/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_plan/post) e execute a requisição. 

> NOTE
>
> Importante
>
> O pagamento de assinaturas por boleto bancário está disponível somente para assinaturas criadas pelo Checkout Pro, onde o vendedor deverá redirecionar o comprador para a URL gerada no parâmetro `init_point`. 

------------

### Valor proporcional (Pro rata)

Pro rata é o valor cobrado do assinante caso a assinatura comece em um dia diferente da data de cobrança definida pelo vendedor. Ao criar uma assinatura o vendedor pode decidir se deseja ou não oferecer esta opção. 

Abaixo mostramos um fluxo de como funciona a cobrança proporcional dos pagamentos.

![Basic-subscriptions](/images/subscriptions/linea-cobro-PT.png)


Para definir uma pro-rata no pagamento de assinaturas, envie um POST com os parâmetros `billing_day`, com o dia do mês em que a cobrança deverá ser realizada (este campo aceita valores de 1 a 28) e o `billing_day_proportional` com o valor true ao endpoint [/preapproval_plan](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_plan/post) e execute a requisição.


> NOTE
>
> Importante
>
> Caso queira modificar uma assinatura específica e definir uma Pro rata, envie um PUT com o parâmetro `billing_day_proportional` ao endpoint [/preapproval_plan/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_plan_id/put),  altere o valor de `false` para `true` e execute a requisição.
