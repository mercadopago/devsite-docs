# Usos do relatório

Quando o relatório estiver pronto e baixado, você terá um arquivo pronto para consultar as planilhas de cálculo e importá-las para o programa que você usa.

Para consultar o relatório, recomendamos baixá-lo em formato _csv_ para poder abri-lo no programa que possa visualizá-lo. O arquivo deve estar configurado em formato UTF-8 para evitar problemas de leitura.

## Conteúdo do relatório

| Campo do relatório | Descrição |
| --- | --- |
| Initial Available Balance |<br/> Saldo inicial. Indica o valor que estava disponível na data inicial do período que você selecionou para fazer a reconciliação. <br/><br/>|
| Release |<br/>O detalhe das ----[mla]---- liquidaçoes ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberações ------------ de dinheiro que incluem o saldo inicial e das transações que impactam o saldo total. <br/><br/> |
| Block | <br/>Bloqueios de dinheiro por disputas.<br/><br/> |
| Unblock |<br/> Desbloqueios após a resolução das disputas.<br/><br/>|
| Subtotal | <br/>Soma das transações que compõem cada seção.<br/><br/>|
| Total| <br/> Resultado final composto pela soma de todos os subtotais. <br/><br/>Ou seja:<br/> subtotal `Release` + subtotal `Block` + subtotal `Unblock` = resultado total. <br/><br/>É a diferença entre o valor líquido total creditado e o valor líquido total debitado. |

Além disso, o relatório reflete os conceitos contábeis de débito (dinheiro que você precisa pagar) e crédito (dinheiro que você tem a receber), organizando o relatório em duas colunas, uma para cada conceito:

> Seu **crédito** estará na coluna `NET_CREDIT_AMOUNT`.
><br>
> Sua **dívida** estará na coluna `NET_DEBIT_AMOUNT`.

Os saldos disponíveis das transações são exibidos nas colunas `NET_CREDIT` (crédito) e `NET_DEBIT` (débito) de acordo com o valor positivo ou negativo. Nesses campos, também são detalhados o valor bruto e os descontos relativos a financiamentos, impostos e custos de envio, resultando no valor líquido final.

Caso uma transferência não seja concluída, o relatório permanecerá válido. O valor será reembolsado para sua conta e a transação será exibida em uma nova linha na coluna `NET_CREDIT`.

> NOTE
>
> Importante
>
> Tenha em mãos o [Glossário do Relatório de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------](/developers/pt/guides/additional-content/reports/released-money/glossary) para consultá-lo quando precisar conferir algum termo técnico.

## Exemplo de relatório

Observe o que compõe o Relatório de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ no seguinte exemplo para identificar as seções e analisar seus próprios relatórios:
----[mla]----
![Relatório de Liquidaçoes](/images/manage-account/reports/example-release-pt.jpg)

------------
----[mlm, mlb, mlc, mco, mlu, mpe]----
![Relatório de Liberações](/images/manage-account/reports/example-release-pt.jpg)

------------
A versão padrão mostrará uma visualização estendida das colunas. O relatório final terá a maior quantidade de detalhes possível. 

## Organização do relatório

Veja no exemplo a seguir a organização do relatório:

![Reporte de Dinero retirado Ejemplos Mercado Pago](/images/manage-account/reports/example-nledger-pt.jpg) 