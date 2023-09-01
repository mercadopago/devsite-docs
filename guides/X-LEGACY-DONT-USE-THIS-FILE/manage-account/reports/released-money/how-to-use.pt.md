# Como usar o relatório?

Quando o relatório estiver pronto e baixado, você terá um arquivo pronto para consultar as planilhas de cálculo e importá-las para o programa que você usa.

Para consultar o relatório, recomendamos baixá-lo em formato .csv para poder abri-lo no programa que possa visualizá-lo. O arquivo deve estar configurado em formato UTF-8 para evitar problemas de leitura.

## O que contém no relatório?

O relatório é composto por:


| Composição do relatório | Descrição |
| --- | --- |
| Initial Available Balance |<br/> Saldo inicial.<br/><br/>|
| Release |<br/>O detalhe das ----[mla]---- liquidaçoes ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberações ------------ de dinheiro que inclui o saldo inicial.<br/><br/> |
| Block | <br/>Os bloqueios de dinheiro por disputas.<br/><br/> |
| Unblock |<br/> Os desbloqueios após a resolução das disputas.<br/><br/>|
| Subtotal | <br/>É a soma das transações que compõem cada seção.<br/><br/>|
| Total| <br/> É o resultado final composto pela soma de todos os subtotais. <br/><br/>Ou seja:<br/> subtotal `Release` + subtotal `Block` + subtotal `Unblock` = resultado total<br/><br/> |


Além disso, o relatório reflete os conceitos de *débito* (dinheiro a pagar) e *crédito* (dinheiro a receber) em duas colunas, uma para cada conceito: 


> Seu **a receber** estará na coluna `NET_CREDIT`
><br>
> Seu **a pagar** estará na coluna `NET_DEBIT`

Você verá o saldo disponível das transações liberadas nas colunas `NET_CREDIT` (creditado) e `NET_DEBIT` (debitado), dependendo se o valor é positivo ou negativo. Você também verá aí o valor bruto e os gastos de financiamento, impostos e custos de envio que descontamos para chegar ao valor líquido.

**O que acontece se uma transferência não se concretizar?**

Caso isso aconteça, o relatório continuará válido. O dinheiro voltará à sua conta e a transação aparecerá no relatório em uma nova linha na coluna `NET_CREDIT`.


> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/released-money/glossary) de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ para consultá-lo quando precisar ou queira conferir algum termo técnico.

## Exemplo de um relatório

Observe como está composto o relatório de dinheiro ----[mla]---- liquidado ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberado ------------ neste exemplo para identificar as seções e analisar seus próprios relatórios:

----[mla]----
![Relatório de liquidaçoes](/images/manage-account/reports/example-release-pt.jpg)
------------
----[mlm, mlb, mlc, mco, mlu, mpe]----
![Relatório de liberações](/images/manage-account/reports/example-release-pt.jpg)
------------

A versão padrão mostrará uma visualização estendida das colunas. O relatório final terá a maior quantidade de detalhes possível. 

<hr/>

### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Gere seus relatórios
>
> Saiba as formas de gerar um relatório e siga as etapas para configurar suas preferências.
>
> [Gere seus relatórios](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/released-money/generate)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Glossário
>
> Saiba o que significa cada termo e os detalhes das colunas que compõem o relatório.
>
> [Glossário](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/released-money/glossary)
