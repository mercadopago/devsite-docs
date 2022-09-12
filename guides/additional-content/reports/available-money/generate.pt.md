
# Como gerar o seu relatório de Dinheiro disponível?

----[mlu, mpe]----
> WARNING
>
> A partir do dia 1º de março de 2022, o relatório Dinheiro disponível será desabilitado
>
> Você pode usar o [relatório de Liberações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/released-money/introduction) para fazer a reconciliação das transações que afetem o saldo disponível na sua conta, incluindo seus saques bancários.
------------

----[mla]----
> WARNING
>
> Importante
>
> A partir de 5 de dezembro, não será mais possível criar novos relatórios de "Dinheiro retirado". Para continuar controlando as transferências, saques e movimentações do seu saldo disponível, por favor, [use o relatório "Liberações".](https://bit.ly/3JzFPEG)
------------

----[mlm]----
> WARNING
>
> Importante
>
> A partir de 12 de dezembro, não será mais possível criar novos relatórios de "Dinheiro retirado". Para continuar controlando as transferências, saques e movimentações do seu saldo disponível, por favor, [use o relatório "Liberações".](https://bit.ly/3QiCD2f)
------------

## Canais de geração

Há três formas de gerar um relatório de Dinheiro disponível: 

| Canais | Descrição |
| --- | --- |
| Painel do Mercado Pago | <br/>É muito rápido e simples. Para gerar a partir da sua conta do Mercado Pago, vá até [Relatórios](https://www.mercadopago.com.br/balance/reports) e selecione uma opção de *Relatórios*.<br/><br/>Siga o passo a passo para [gerar relatórios a partir do painel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/available-money/panel).<br/><br/> |
| Integração via API | <br/> ----[mla, mlb, mlm]---- Programa a frequência do seu relatório de acordo com as suas necessidades. Pode ser tanto de forma manual como de forma programada.<br/><br/>Leia a documentação para [gerar relatórios por API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/available-money/api). ------------ ----[mpe, mlu, mco, mlc]---- Esta integração só pode ser usada para consultar a baixar o manual de relatórios e não permite gerar novos relatórios. ------------<br/><br/>|
| Com retirada de dinheiro | <br/>Gere um relatório automaticamente cada vez que retirar seu dinheiro disponível para uma conta bancária. <br/><br/>Siga o passo a passo para [gerar relatórios para cada retirada de dinheiro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/available-money/withdrawal).<br/><br/> |


## Características técnicas do relatório

Considere as seguintes informações técnicas sempre que for gerar, programar e configurar seus relatórios.

### Programação do relatório

Programe como e com que frequência você quer gerar seus relatórios. 


| Componentes | Características |
| --- | --- |
| Programação | <br/>- Diária.<br/> - Semanal.<br/>- Mensal. <br/><br/> |
| Geração | <br/>- Manual.<br/> - Automática por retirada de dinheiro, total ou parcial. <br/><br/>Estas categorias de geração podem caminhar juntas. Ou seja, mesmo que você programe a geração dos seus relatórios automaticamente, cada vez que retirar dinheiro será gerado um relatório adicional.<br/> <br/> |


### Estrutura do relatório

Saiba as características dos elementos que compõem seu relatório.


| Ações e componentes | Características |
| --- | --- |
| Detalhes das tabelas | <br/>Os detalhes das tabelas compreende as informações no mínimo de 1 dia. Exceto nos relatórios gerados por retirada de dinheiro. <br/> <br/> |
| Ordem das colunas |<br/> Fixa <br/> <br/> |
| Período máximo | <br/> Relatórios com dados de até 60 dias. <br/> <br/> |
| Moeda | <br/> Local (com base no país onde está cadastrada a conta do Mercado Pago). <br/> <br/> |
| Fuso horário das colunas: | <br/> GMT-4 <br/> <br/> Tome como referência o lugar de onde o relatório é baixado. <br/> <br/> |
| Seleção de datas via API |<br/> Formato do fuso horário: UTC / GMT-0 <br/> <br/> |
| Seleção de datas via web | <br/> Deve ter como base o fuso horário da conta do usuário. <br/>Por exemplo, a conta do usuário cadastrada no Brasil corresponde ao fuso horário de São Paulo. <br/> <br/> |


### Exportação do relatório

Todas as opções disponíveis na hora de baixar seu relatório.

| Ações e componentes | Características |
| --- | --- |
| Formato do nome do arquivo | <br/>Quando o relatório é programado ou manual:<br/> "prefixo-configurável-<span style='color:#999999;'>data-de-criação.csv</span>" <br/> Exemplo: mitienda-28-05-2019.csv <br/><br/> Quando o relatório é gerado por uma retirada de dinheiro: <br/> "prefixo-configurável-<span style='color:#999999;'>id-de-retirada-data-de-criação.csv</span>"<br/> Exemplo: mitienda-ID123456789-28-05-2019.csv <br/> <br/> |
| Formatos de download | <br/>.csv, .xlsx <br/><br/>Dica: baixe o relatório em .csv para importar os dados e usá-los em outros aplicativos. Baixe-o em .xlsx para ler as informações nas tabelas da planilha.<br/><br/> |
| Arquivo | <br/> Os relatórios gerados ficam salvos na sua conta do Mercado Pago. <br/><br/> |
| Configuração disponível via API | <br/>- Colunas a gerar por relatório<br/> - Prefixo do arquivo para identificá-lo facilmente<br/> - Envio por SFTP<br/> - Separador de colunas (ponto ou ponto e vírgula)<br/> - Separador decimal (vírgula ou ponto)<br/> - Notificação por e-mail<br/> - Retirada no final do relatório (opcional)<br/><br/> |



> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/available-money/glossary) de Dinheiro Disponível para consultá-lo quando precisar ou queira conferir algum termo técnico.

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Geração a partir do Mercado Pago  
>
> Crie seus relatórios de forma manual ou programada a partir da sua conta do Mercado Pago.
>
> [Geração a partir do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/available-money/panel)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Geração via API
>
> Crie relatórios de forma programada e manual através de uma integração com o Mercado Pago.
>
> [Geração via API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/available-money/api)
