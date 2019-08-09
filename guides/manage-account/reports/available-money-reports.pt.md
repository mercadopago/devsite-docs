# O que é o Relatório de saldo disponível?

> INDEX
>
> Nesta página
>
> - [Introdução](#bookmark_introdução) 
>
> - [Casos de uso](#bookmark_casos_de_uso)
>
> - [Como usar o relatório](#bookmark_como_usar_o_relatório) 
>
>    + [Exemplos](#bookmark_exemplos)
>

## Introdução


O Relatório de saldo disponível é um **relatório para ser baixado** em formato .CSV ou .XLSX que permite conhecer a liquidez do seu negócio, ou seja, quanto você tem para usar. Ele contém **detalhes dos pagamentos liberados** que estão prontos para serem retirados para uma conta bancária ou para render no Mercado Pago.


Acesse seus relatórios na seção de Relatórios na sua conta do Mercado Pago seguindo estas etapas:
1. [Entre](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEAy2NQQ7DIAwE_-JzlNw59iPIIQ5BhRoZR7SK8veaqscd744vyBzTy-unEjigd80pJIUJakbdWYpPmx1KNdSS0j_mdVRQsJCSNHDXEEXaHmSjodoxN7ISnnr4PXM39vtlLLKFQ7U2tyy997mQBNy4YuQ5cJlXWeCezNHUq2B4glM56f4CVo_Sya8AAAA/user) na sua conta do Mercado Pago
1. Acesse [Relatórios](https://www.mercadopago.com/mlb/account/movements) e, a partir daí, [Relatórios](https://www.mercadopago.com/mlb/account/movements)
1. Selecione Dinheiro disponível, lá você encontrará uma lista dos relatórios gerados.

Lembre-se de que a geração do relatório leva um tempo, ou seja, nem sempre estará pronto no ato e que, até lá, você verá o status “Em preparação” na tela. Uma vez disponível, ele estará na sua bandeja de relatórios e você poderá baixá-lo de duas formas:
* Por um link de download que enviaremos via e-mail
* Pela sua conta do Mercado Pago, em Relatórios de saldo disponível.

É importante esclarecer que o valor total do relatório nem sempre coincide com os valores do relatório de dinheiro em conta ou dos relatórios de cobrança. Dependendo dos prazos e tarifas que você escolher, o dinheiro que você ganha de uma venda será liberado algum tempo após o pagamento ser creditado. Para descobrir a data exata em que o dinheiro de uma transação estará disponível, confira os detalhes dos pagamentos creditados.

Esses prazos têm a ver com os tempos dos bancos ou com os fluxos de intermediação quando as transações são realizadas no Mercado Livre. Outras transações que podem afetar a liberação do seu dinheiro são as contestações e reclamações que você pode receber por uma venda.

## Casos de uso

Geralmente, **esse relatório é usado para conciliar** as retiradas de dinheiro e inclui as transações que o compõem.

Geramos um Relatório de dinheiro disponível nestas três situações:
1. Toda vez que você o gerar manualmente.
1. Agendado, de acordo com suas configurações.
1. Com cada retirada de dinheiro para uma conta bancária.

Use o Relatório de dinheiro disponível nestes casos:
1. Quando você quiser um relatório de liquidez da conta,
1. Para conciliar como as transações que afetam seu saldo disponível a nível transacional são compostas,
Conciliação mensal ou periódica com os detalhes das movimentações que geram saldo disponível para retirada.
1. Para saber:
    + O histórico do saldo disponível entre duas datas ou duas retiradas.
    + Os detalhes dos eventos que compõem uma retirada automática ou manual, total ou parcial.
    + Os detalhes de disputas, reembolsos, envio, estornos, impostos e outras transações que afetam o saldo disponível.
    + Os detalhes das parcelas liberadas e as transações “parceladas”.


## Como usar o relatório

Para ler o relatório, recomendamos usar um arquivo .CSV e revisar as configurações dos caracteres. Deve estar em formato UTF-8. Confira nas configurações da sua planilha de cálculo:

![Relatório de dinheiro disponivel excel Mercado Pago](/images/manage-account/reports/ms-excel.png)
<p style="text-align:center;font-size:12px;">Exemplo no Excel</p>

![Relatório de dinheiro disponivel Open Office Mercado Pago](/images/manage-account/reports/open-office.png)
<p style="text-align:center;font-size:12px;">Exemplo no Open Office</p>

O relatório contém 4 seções:
1. Saldo inicial (Initial Available Balance)
1. Detalhes de liberações de dinheiro (Releases)
1. Bloqueios de dinheiro por disputas (Block)
1. Desbloqueios pela resolução da disputa (Unblock)

Você verá uma seção de **subtotais** por cada bloqueio e, finalmente, o **resultado total**. Calculamos este total sobre os subtotais líquidos de cada seção, é uma soma líquida de: 

> Subtotal release - Subtotal block + Subtotal unblock = resultado total

Confira o [Glossário completo](https://www.mercadopago.com.br/developers/pt/guides/manage-account/reports/available-money-reports-glossary)

Vamos ver os conceitos contábeis universais de deve (dinheiro que você tem que pagar) e a ver (dinheiro que você tem que coletar) elaborando o relatório em duas colunas, uma para cada conceito: 

> Seu a ver estará na coluna `NET_CREDIT`
>
> Seu deve estará na coluna `NET_DEBIT`

Você verá o dinheiro disponível nas operações liberadas nas colunas `NET_CREDIT` (creditado) e `NET_DEBIT` (debitado), dependendo de o valor ser positivo ou negativo. Você também verá o valor bruto e os custos de financiamento, impostos e custos de envio que deduzimos para chegar ao valor líquido.

**O que acontece se uma retirada falhar?**

Se isso acontecer, o relatório ainda será válido. O dinheiro volta para sua conta e a operação aparecerá no relatório como uma nova linha na coluna `NET_CREDIT`

### Exemplos (

Veja como o relatório de dinheiro disponível é composto neste exemplo para identificar as seções e ler seus próprios relatórios:

![Relatório de dinheiro disponivel Exemplos Mercado Pago](/images/manage-account/reports/examples.png)

A versão padrão mostrará uma visão estendida das colunas. O relatório final terá o máximo de detalhes possível. Se você quer menos detalhes ou há colunas que não são úteis para conciliação, você pode alterar quais devem ser incluídas e quais não em Ajustes.


> NOTE 
> 
> Importante: diferenças entre retirada parcial e retirada total.
> 
> Quando você retirar todo o seu saldo disponível, o total do relatório corresponderá a esse valor. Por outro lado, quando você faz uma retirada parcial, que não inclui todo o seu dinheiro liberado na conta, o saldo total disponível e o total do relatório não coincidem.
>
>Por exemplo, imagine que você tenha R$ 3.000 disponíveis para retirar para uma conta bancária, mas retira apenas R$ 2.000. A retirada é parcial, mas o valor total do relatório continuará a mostrar o valor do saldo inicial que estava no momento da retirada, ou seja, os R$ 3.000 disponíveis. Por outro lado, se você retirar os R$ 3.000, o valor total do relatório corresponderá ao valor dessa retirada.
>