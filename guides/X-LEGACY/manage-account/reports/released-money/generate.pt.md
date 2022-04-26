
# Como gerar o seu relatório de Liberações?
------------


## Canais de geração

Você pode gerar um relatório de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ pela sua conta Mercado Pago:

| Canais | Descrição |
| --- | --- |
| Painel do Mercado Pago | Para gerar manualmente o relatório a partir do seu painel Mercado Pago, vá até [Relatórios](https://www.mercadopago[FAKER][URL][DOMAIN]/movements) e selecione a opção "Relatórios criados".<br/><br/>Siga o passo a passo para [gerar seus relatórios a partir do painel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/released-money/panel). |
| Integração via API | Para gerar manualmente o report ou agendar um de acordo com a frequência desejada, use a nossa integração via API. <br/><br/> Leia a documentação para [gerar relatórios por API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/released-money/api). |

## Características técnicas do relatório

Considere as seguintes informações técnicas sempre que for gerar, programar e configurar seus relatórios.


### Estrutura do relatório

Saiba as características dos elementos que compõem seu relatório.


| Ações e componentes | Características |
| --- | --- |
| Detalhes das tablas | Os detalhes das tabelas compreende as informações no mínimo de 1 dia. |
| Ordem das colunas | Fixa |
| Período máximo | Relatórios com dados de até 60 dias. |
| Moeda | Local (com base no país onde está cadastrada a conta do Mercado Pago) |
| Fuso horário das colunas: | GMT-4 <br/> <br/> Tome como referência o lugar de onde o relatório é baixado. |
| Seleção de datas via web | Deve ter como base o fuso horário da conta do usuário. <br/>Por exemplo, a conta do usuário cadastrada no Brasil corresponde ao fuso horário de São Paulo. |


### Exportação do relatório

Todas as opções disponíveis na hora de baixar seu relatório.

| Ações e componentes | Características |
| --- | --- |
| Formato do nome do arquivo | Quando o relatório é programado ou manual:<br/> "prefixo-configuravel-<span style='color:#999999;'>data-de-criacao.csv</span>" <br/> Exemplo: minhaloja-28-05-2019.csv |
| Formatos de download | .csv, .xlsx <br/><br/>Dica: baixe o relatório em .csv para importar os dados e usá-los em outros aplicativos. Baixe-o em .xlsx para ler as informações nas tabelas da planilha. |
| Arquivo | Os relatórios gerados ficam salvos na sua conta do Mercado Pago. |


> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/released-money/glossary) de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ para consultá-lo quando precisar ou queira conferir algum termo técnico.

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Glossário
>
> Saiba o que significa cada termo e os detalhes das colunas que compõem o relatório.
>
> [Glossário](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/released-money/glossary)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Como usar o relatório
>
> Saiba o que é o relatório de ----[mla]---- Liquidações ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberações ------------ e para que serve. 
>
> [Como usar o relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/released-money/how-to-use)
