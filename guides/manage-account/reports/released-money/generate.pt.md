# Como gerar o seu Relatório de Liberaçoes?


## Canais de geração

Você pode gerar um relatório de liberações pela sua conta Mercado Pago:

| Canais | Descrição |
| ------- | ----------- |
| Painel do Mercado Pago | <br/>É muito rápido e simples. Para gerar a partir da sua conta do Mercado Pago, vá até ----[mla]---- [Tus informes](https://www.mercadopago.com.ar/movements) ------------ ----[mlm]---- [tus informes](https://www.mercadopago.com.mx/movements) ------------ ----[mlu]---- [tus informes](https://www.mercadopago.com.uy/movements) ------------ ----[mlc]---- [tus informes](https://www.mercadopago.cl/movements) ------------ ----[mco]---- [tus informes](https://www.mercadopago.com.co/movements) ------------ ----[mpe]---- [tus informes](https://www.mercadopago.com.pe/movements) ------------ ----[mlb]---- [Relatórios](https://www.mercadopago.com.br/movements) ------------ e selecione uma opção de *Relatórios criados*.<br/><br/>Siga o paso a paso para [gerar seus relatórios a partir do painel.](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/released-money/panel/)<br/><br/> |

## Características técnicas do relatório

Considere as seguintes informações técnicas sempre que for gerar, programar e configurar seus relatórios.


### Estrutura do relatório

Saiba as características dos elementos que compõem seu relatório.


| Ações e componentes | Características |
| ------------ |	--------    |
| Detalhes das tablas | <br/>Os detalhes das tabelas compreende as informações no mínimo de 1 dia. <br/> <br/>  |
| Ordem das colunas |<br/> Fixa <br/> <br/> |
| Período máximo | <br/> Relatórios com dados de até 60 dias. <br/> <br/> |
| Moeda | <br/> Local (com base no país onde está cadastrada a conta do Mercado Pago) <br/> <br/> |
| Fuso horário das colunas: | <br/> GMT-4 <br/> <br/> Tome como referência o lugar de onde o relatório é baixado. <br/> <br/> |
| Seleção de datas via web | <br/> Deve ter como base o fuso horário da conta do usuário. <br/>Por exemplo, a conta do usuário cadastrada no Brasil corresponde ao fuso horário de São Paulo. <br/> <br/> |


### Exportação do relatório

Todas as opções disponíveis na hora de baixar seu relatório.

| Ações e componentes | Características |
| ------------ |	--------    |
| Formato do nome do arquivo | <br/>Quando o relatório é programado ou manual:<br/> "prefixo-configuravel-<span style='color:#999999;'>data-de-criacao.csv</span>" <br/> Exemplo: minhaloja-28-05-2019.csv <br/><br/> |
| Formatos de download | <br/>.csv, .xlsx <br/><br/>Dica: baixe o relatório em .csv para importar os dados e usá-los em outros aplicativos. Baixe-o em .xlsx para ler as informações nas tabelas da planilha. <br/><br/> |
| Arquivo | <br/>Os relatórios gerados ficam salvos na sua conta do Mercado Pago<br/><br/> |


> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago.com.br/developers/es/guides/manage-account/reports/released-money/glossary/) de liberaçoes para consultá-lo quando precisar ou queira conferir algum termo técnico.

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Introdução ao relatório de liberações 
>
> Saiba o que é o relatório de liberação e para que serve.
>
> [Introdução ao relatório de liberações](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/released-money/introduction/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Como usar o relatório
>
> Saiba como o relatório é composto e aprenda a analisá-lo para fazer sua conciliação. 
>
> [Como usar o relatório](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/released-money/how-to-use/)
