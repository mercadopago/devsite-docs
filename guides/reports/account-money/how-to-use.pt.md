---	
sites_supported:	
  - mlb
---

# Como usar o relatório?

Quando o relatório estiver pronto e baixado, você terá um arquivo pronto para consultar as planilhas de cálculo e importá-las para o programa que você usa.

Para consultar o relatório, recomendamos baixá-lo em formato .csv para poder abri-lo no programa que possa visualizá-lo. O arquivo deve estar configurado em formato UTF-8 para evitar problemas de leitura. 

## O que contém no relatório?

O relatório está composto por diferentes tipos de transações que você pode ver na coluna `TRANSACTION_TYPE`. Cada uma delas terá um valor bruto da operação.

<br/>

| Transações | Tipo de operação |
| --- | --- |
| *SETTLEMENT* |<br/> Aprovadas<br/><br/>|
| *REFUND* |<br/> Devoluções totais ou parciais.<br/><br/> |
| *CHARGEBACK* | <br/>Contestação<br/><br/> |
| *DISPUTE* |<br/> Estão com reclamação.<br/><br/>|
| *WITHDRAWAL* | <br/>Dinheiro retirado.<br/><br/>|
| *CASHBACK* | <br/> Devolução de dinheiro.<br/><br/> |
| *SETTLEMENT_SHIPPING* | <br/> Envios aprovados.<br/><br/> |
| *REFUND_SHIPPING* | <br/> Devoluções totais ou parciais de custos de envio.<br/><br/> |
| *CHARGEBACK_SHIPPING* | <br/> Contestação de envios.<br/><br/> |
| *DISPUTE_SHIPPING* | <br/> O envio está com reclamação.<br/><br/> |


Na coluna `SETTLEMENT_NET_AMOUNT` está o impacto real sobre o dinheiro da sua conta.

> NOTE
>
> Nota
>
> Ten a mano el [Glossário do relatório](https://www.mercadopago.com.ar/developers/es/guides/reports/account-money/glossary/) de Dinheiro 

em conta para consultá-lo quando precisar ou queira conferir algum termo técnico.

## Exemplo de um relatório

Observe como está composto o relatório de Dinheiro em conta neste exemplo para identificar as operações e analisar seus próprios relatórios:

![Reporte de dinero en cuenta Ejemplos Mercado Pago](/images/manage-account/reports/example-settlement-pt.png)

A versão padrão mostrará uma visualização estendida das colunas. O relatório final terá a maior quantidade de detalhes possível.

<hr/>

### Próximos passos

> LEFT_BUTTON_REQUIRED_ES
>
> Gere seus relatórios
>
> Saiba as formas de gerar um relatório e siga as etapas para configurar suas preferências.
>
> [Gere seus relatórios](https://www.mercadopago.com.br/developers/pt/guides/reports/account-money/generate/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Glossário
>
> Saiba o que significa cada termo e os detalhes das colunas que compõem o relatório.
>
> [Glossário](https://www.mercadopago.com.br/developers/pt/guides/reports/account-money/glossary/)
