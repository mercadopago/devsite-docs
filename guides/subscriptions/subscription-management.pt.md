# Gerenciamento de assinaturas

Por meio do gerenciamento de assinaturas é possível pausar, cancelar ou reativar uma assinatura já criada, além de realizar outras alterações específicas dentro de suas configurações iniciais.

Na tabela abaixo você encontra mais informações sobre as possibilidades de gerenciamento.

| Tipo | Descrição |
|---|---|
| Buscar assinatura | Permite buscar as assinaturas independentemente do seu status (ativa, pausada, cancelada). Para isso, envie um GET com os parâmetros necessários ao endpoint [/preapproval/search](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_search/get) e execute a requisição. |
| Alterar cartão e valor | Permite alterar um cartão ou valor de uma assinatura já criada. Para alterar o cartão, envie um PUT com o novo token no atributo `card_token_id` ao endpoint [/preapproval/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_id/put) e execute a requisição. E para alterar o valor da assinatura, envie o novo valor através do parâmetro `auto_recurring.transaction_amount`, especifique novamente o `auto_recurring.currency_id` e execute a requisição. |
| Cancelar ou pausar assinatura | Possibilita cancelar ou pausar uma assinatura existente. Para isso, envie um PUT com o atributo `status` e o valor `cancelled` ao endpoint [/preapproval/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_id/put) e execute a requisição. E para pausar uma assinatura envie um PUT com o atributo `status` e o valor `paused` ao mesmo endpoint e execute a requisição. |
| Reativar uma assinatura | Permite reativar uma assinatura cancelada/pausada e configurar um prazo para sua finalização. Para isso, envie um PUT com os parâmetros necessários ao endpoint [/preapproval/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_id/put) e execute a requisição. |
| Alterar data de cobrança | Para assinaturas com frequência de pagamento mensal, você pode escolher um dia fixo do mês para que ocorram as cobranças. Para isso, envie um PUT com os parâmetros necessários ao endpoint [/preapproval/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_id/put) e execute a requisição. |
| Definir valor proporcional | É possível definir um valor proporcional para a cobrança de determinada assinatura. Para isso, envie um PUT com os parâmetros necessários ao endpoint [/preapproval/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_id/put) e execute a requisição. |
| Oferecer teste grátis | É possível oferecer um período de teste grátis para que os clientes possam testar o produto e/ou serviço antes de adquiri-lo. Para isso, envie um PUT com parâmetro `free_trial`, `frequency` e `frequency_type` com a quantidade de dias e o tipo (dias/meses) ao endpoint [/preapproval_plan/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_plan_id/put) e execute a requisição. |

> PREV_STEP_CARD_PT 
>
> Realizar compra teste
>
> Saiba realizar uma compra teste e validar o funcionamento da assinatura.
>
> [Realizar compra teste](/developers/pt/docs/subscriptions/integration-test/payment-approval)

> NEXT_STEP_CARD_PT
>
> Processamento de vendas
>
> Saiba realizar a gestão dos pagamentos, estornos e reembolsos.
>
> [Processamento de vendas](/developers/pt/docs/subscriptions/production-mode/sales-processing/payment-methods)