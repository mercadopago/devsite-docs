# Relatórios

Os relatórios do Mercado Pago são conjuntos de informações financeiras que ajudam a visualizar as movimentações da sua conta (saldo disponível, transações, liquidez), permitindo conciliar vendas e outras operações com seus sistemas de gestão internos.

Confira a tabela abaixo para mais detalhes sobre os tipos de relatório disponíveis.

* Movimentações gerais
    ----[mla]----
    + [Liquidaçoes](/developers/pt/docs/checkout-api/additional-content/reports/released-money)
    ------------
    ----[mlm, mlb, mlc, mco, mlu, mpe]----
    + [Liberações](/developers/pt/docs/checkout-api/additional-content/reports/released-money)
    ------------
    + [Dinheiro em conta](/developers/pt/docs/checkout-api/additional-content/reports/account-money/introduction)
    + [Dinheiro disponível](/developers/pt/docs/checkout-api/additional-content/reports/available-money/introduction)

> NOTE
>
> A partir do dia 1º de março de 2022, o relatório Dinheiro disponível será desabilitado
>
> Você pode usar o [relatório de ----[mla]----Liquidações------------ ----[mlm, mlb, mlc, mco, mlu, mpe]----Liberações------------](/developers/pt/docs/checkout-api/additional-content/reports/released-money) para fazer a reconciliação das transações que afetem o saldo disponível na sua conta, incluindo seus saques bancários.


| Tipo de relatório | Descrição |
|---|---|
| Relatório Liberações | Informa como o saldo disponível em sua conta está composto, detalhando todos os valores envolvidos em um período de tempo. Para mais informações, [clique aqui](/developers/pt/docs/checkout-api/additional-content/reports/released-money). |
| Relatório Dinheiro em conta | Informa as transações/movimentações que afetaram seu saldo em conta. Para mais informações, [clique aqui](/developers/pt/docs/checkout-api/additional-content/reports/account-money/introduction). |
| Relatório Dinheiro disponível | Informa a liquidez do seu negócio, discriminando o valor disponível em conta para uso. [Clique aqui](/developers/pt/docs/checkout-api/additional-content/reports/available-money/introduction) para mais informações. <br><br>* **Este relatório será descontinuado em breve**. Recomendamos o uso do [Relatório Liberações](/developers/pt/docs/checkout-api/additional-content/reports/released-money) para realizar a reconciliação das transações que compõem o saldo disponível na sua conta, incluindo seus saques bancários.|
| Relatórios de faturamento | A **equipe de Marketplace do Mercado Livre** desenvolveu uma série de relatórios de faturamento, para disponibilizar os detalhes financeiros das transações realizadas no Mercado Pago a partir das vendas no Mercado Livre. <br><br>Os dados dos relatórios também contemplam informações financeiras de usuários que não realizam vendas pelo Mercado Livre, uma vez que os dados de faturamento são do Mercado Pago. Para mais informações, [clique aqui](https://developers.mercadolivre.com.br/pt_br/relatorios-de-faturamento#Resumen).|
