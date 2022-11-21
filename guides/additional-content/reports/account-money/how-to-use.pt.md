# Como usar o relatório?

Quando o relatório estiver pronto e baixado, você terá um arquivo pronto para consultar as planilhas de cálculo e importá-las para o programa que você usa.

Para consultar o relatório, recomendamos baixá-lo em formato .csv para poder abri-lo no programa que possa visualizá-lo. O arquivo deve estar configurado em formato UTF-8 para evitar problemas de leitura. 

## O que contém no relatório?

O relatório está composto por diferentes tipos de transações que você pode ver na coluna `TRANSACTION_TYPE`. Cada uma delas terá um valor bruto da operação.

| Transações | Tipo de operação |
| --- | --- |
| *SETTLEMENT* |<br/> Aprovadas<br/><br/>|
| *REFUND* | ----[mla, mlm, mco, mlu, mlb, mlc]---- <br/> Devoluções totais ou parciais.<br/><br/> ------------ ----[mpe]---- <br/> Devoluções totais.<br/><br/> ------------ |
| *CHARGEBACK* | <br/>Transação em contestação<br/><br/> |
| *DISPUTE* |<br/> Transação em disputa.<br/><br/>|
| *WITHDRAWAL* | <br/>Dinheiro sacado da conta Mercado Pago via DOC/TED.<br/><br/>|
| *PAYOUT* | <br/>Dinheiro sacado da conta Mercado Pago via PIX.<br/><br/>|
| *CASHBACK* | <br/> Devolução de dinheiro.<br/><br/> |
| *SETTLEMENT_SHIPPING* | <br/> Envios aprovados.<br/><br/> |
| *REFUND_SHIPPING* | ----[mla, mlm, mco, mlu, mlb, mlc]---- <br/> Devoluções totais ou parciais de custos de envio.<br/><br/> ------------ ----[mpe]---- <br/> Devoluções de custos de envio.<br/><br/> ------------|
| *CHARGEBACK_SHIPPING* | <br/> Contestação de envios.<br/><br/> |
| *DISPUTE_SHIPPING* | <br/> O envio está com reclamação.<br/><br/> |

Na coluna `SETTLEMENT_NET_AMOUNT` está o impacto real sobre o dinheiro da sua conta.

> NOTE
>
> Nota
>
> Utilize o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/account-money/glossary) de dinheiro em conta para consultá-lo quando precisar, como, por exemplo, conferir algum termo técnico.

## Exemplo de um relatório

Observe como está composto o relatório de Dinheiro em conta neste exemplo para identificar as operações e analisar seus próprios relatórios:

![Reporte de dinero en cuenta Ejemplos Mercado Pago](/images/manage-account/reports/example-settlement-pt.png)

A versão padrão mostrará uma visualização estendida das colunas. O relatório final terá a maior quantidade de detalhes possível.

Para transações do tipo PNF - Pagamento no Fluxo, acesse [Pagamentos no fluxo no relatório de dinheiro disponível](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/extra/pnf-bank) para mais informações sobre como utilizar o relatório **Dinheiro em conta** para planejar sua agenda de recebimento das cotas a serem liberadas.