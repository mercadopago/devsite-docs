----[mla]----
# Relatório de Liquidações
------------

----[mlm, mlb, mlc, mco, mlu, mpe]----
# Relatório de Liberações
------------

O Relatório de----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ é um arquivo que pode ser baixado e que detalha o saldo que você tem disponível no Mercado Pago. Ele não apenas mostra o valor total disponível, mas também fornece informações sobre as transações realizadas em um período determinado, incluindo situações como bloqueios e desbloqueios de fundos.

Além disso, permite que você saiba se o seu dinheiro está disponível ou não, e você pode solicitar essa informação para o período de datas que for mais conveniente para você. Tenha em mente que atualmente este relatório só é gerado através do seu computador.

----[mpe]----
## Análise dos relatórios a partir de janeiro de 2022
------------
----[mlu]----
## Análise dos relatórios a partir de marchar de 2022
----[mlc, mco]----
## Análise dos relatórios a partir de agosto de 2022
------------
----[mla, mlm]----
## Análise dos relatórios a partir de outubro de 2022
------------
----[mlb]----
## Análise dos relatórios a partir de janeiro de 2023
------------

Os relatórios que você gerar a partir de ----[mpe]----janeiro de 2022------------  ----[mlu]----marchar de 2022------------ ----[mla, mlm]----outubro de 2022------------  ----[mco, mlc]----agosto de 2022------------ ----[mlb]----janeiro de 2023------------ têm as seguintes características: 

1. As movimentações são mostradas em ordem cronológica, o que permite identificá-las mais facilmente e ter ainda mais controle sobre suas vendas.
2. Caso haja alguma reclamação ou contestação referente a algum problema com o serviço ou produto oferecido, o valor correspondente fica retido até a mediação ser resolvida. Essas informações constam no seu relatório e você pode encontrá-las ao procurar pelo prefixo "reserve-".
3. As movimentações relacionadas aos saques e/ou transferências do seu saldo disponível aparecem como "Payout", e todas as mediações que surgirem quando uma reclamação for iniciada ou resolvida aparecem como "Dispute". Para conferir a descrição das demais movimentações e termos, consulte [o glossário](/developers/pt/docs/checkout-pro/additional-content/reports/released-money/report-use).
4. Você encontrará uma nova coluna chamada "Sale detail" ou "Detalhe da venda" que fornece informações detalhadas sobre os itens vendidos, facilitando a conciliação e o controle das suas vendas. Cada entrada nesta coluna mostra o primeiro elemento da venda, seguido pelo agrupamento de outros itens.

## Baixar relatório

Siga este caminho para saber como gerar e baixar o relatório de Liberações:
**Relatórios e faturamento -> Relatórios de vendas e extratos de conta -> Liberações**.

### Criar relatório por API

Crie o relatório de Liberações manualmente quantas vezes desejar ou programe-o conforme suas necessidades de frequência por meio da [API](/developers/pt/docs/checkout-pro/additional-content/reports/released-money/api).

A geração do relatório leva alguns minutos, dependendo de quanta informação você deseja incluir. Nem sempre estará pronto instantaneamente e, até que esteja, você verá o status "Em preparação" na tela.

Consulta ["Como analisar o relatório de Liberações?"](https://www.mercadopago.com.br/ajuda/28771) para entender melhor o seu relatório.

### Valores do relatório

Dependendo das [tarifas e prazos](/settings/release-options) selecionados, o valor obtido com a venda será liberado após o pagamento ser creditado. Por isso, o valor total indicado no relatório pode não coincidir sempre com seu saldo total ou com o valor total nos relatórios de faturamento.

Os prazos de liberação estão relacionados aos processos bancários e aos fluxos de intermediação quando as transações são feitas no Mercado Livre. Além disso, contestações e reclamações recebidas em vendas podem impactar a liberação do dinheiro.

> Para obter a data exata de disponibilidade do dinheiro de uma transação, é importante revisar os [detalhes dos pagamentos creditados](https://www.mercadopago.com.br/activities/balance).

## Utilizar relatório

O relatório de ----[mla]----Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ é uma ferramenta importante tanto para conciliação quanto para análise de seu histórico financeiro. Ele detalha as transações da conta, proporciona compreensão e conciliação do saldo disponível em datas determinadas e fornece dados de cada transação, incluindo data, conceito e valor. 

Além disso, este relatório apresenta o histórico completo de dinheiro liberado, abordando eventos como transferências bancárias, disputas, reembolsos e estornos, e destaca as parcelas liquidadas em comparação às pendentes de pagamento.

> NOTE
>
> Nota
>
> Utilize o [Glossário do Relatório de----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------](https://www.mercadopago.com.br/developers/pt/docs/checkout-pro/additional-content/reports/released-money/report-use) para consulta de termos técnicos, caso necessário.