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
> Tenha em mãos o [Glossário do relatório](/developers/pt/guides/additional-content/reports/released-money/glossary) de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ para consultá-lo quando precisar ou queira conferir algum termo técnico.

## Exemplo de um relatório

Observe como está composto o relatório de dinheiro ----[mla]---- liquidado ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberado ------------ neste exemplo para identificar as seções e analisar seus próprios relatórios:

----[mla]----
![Relatório de liquidaçoes](/images/manage-account/reports/example-release-pt.jpg)
------------
----[mlm, mlb, mlc, mco, mlu, mpe]----
![Relatório de liberações](/images/manage-account/reports/example-release-pt.jpg)
------------

A versão padrão mostrará uma visualização estendida das colunas. O relatório final terá a maior quantidade de detalhes possível. 

----[mpe]----
## Como faço para analisar os relatórios gerados a partir de janeiro de 2022?
------------
----[mlu]----
## Como faço para analisar os relatórios gerados a partir de marchar de 2022?
----[mlc, mco]----
## Como faço para analisar os relatórios gerados a partir de agosto de 2022?
------------
----[mla, mlm]----
## Como faço para analisar os relatórios gerados a partir de outubro de 2022?
------------
----[mpe, mlu, mla, mlm, mlc, mco]----
Os relatórios que você gerar a partir de ------------ ----[mpe]----janeiro------------  ----[mlu]----marchar------------ ----[mla, mlm]----outubro------------  ----[mco, mlc]----agosto------------  ----[mpe, mlu, mla, mlm, mlc, mco]---- de 2022 têm as seguintes características: :

1. As movimentações são mostradas em ordem cronológica, o que permite identificá-las mais facilmente e ter ainda mais controle sobre suas vendas.
2. Caso haja alguma reclamação ou contestação referente a algum problema com o serviço ou produto oferecido, o valor correspondente fica retido até a mediação ser resolvida. Essas informações constam no seu relatório e você pode encontrá-las ao procurar pelo prefixo "reserve-". 
3. As movimentações relacionadas aos saques e/ou transferências do seu saldo disponível aparecem como "Payout", e todas as mediações que surgirem quando uma reclamação for iniciada ou resolvida aparecem como "Dispute". Para conferir a descrição das demais movimentações e termos, consulte este glossário.

## Quais informações constam no relatório?

O relatório possui uma estrutura simplificada para que seja mais fácil entendê-lo:

| Composição do relatório | Descrição |
| --- | --- |
| Initial Available Balance |<br/> Saldo inicial. Indica o valor que estava disponível na data inicial do período que você selecionou para fazer a reconciliação.  <br/><br/>|
| Release |<br/> O detalhe das transações que impactam o saldo total. <br/><br/> |
| Total| <br/> É a diferença entre o valor líquido total creditado e o valor líquido total debitado. <br/><br/> |

## Exemplo de um relatório

Confira neste exemplo como o relatório "Liberações" é composto para identificar as seções e analisar seus próprios relatórios:

![Reporte de Dinero retirado Ejemplos Mercado Pago](/images/manage-account/reports/example-n-ledger-pt.jpg) 

------------