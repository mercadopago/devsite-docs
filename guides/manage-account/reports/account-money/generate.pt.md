
# Como gerar o seu relatório de Dinheiro em conta?

> NOTE
>
> Gerencie suas vendas com código QR de um jeito fácil
>
> Criamos novas colunas que permitem que você identifique as carteiras digitais ou os bancos que seus clientes utilizam ao pagarem com um código QR do Mercado Pago. Atualize suas preferências de configuração [no painel](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/settlement/settings) ou [via API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/account-money/api) para incluir as colunas nos seus relatórios.

## Canais de geração

Há duas formas de gerar um relatório de Dinheiro em conta:

| Canais | Descrição |
| --- | --- |
| Painel do Mercado Pago | <br/>É muito rápido e simples. Para gerar a partir da sua conta do Mercado Pago, vá até [seus Relatórios](https://www.mercadopago.com.br/balance/reports?page=1#!/settlement-report) e selecione uma opção de *Relatórios*.<br/><br/>No painel é possível efetuar customizações e programar a geração automática do relatório.<br/><br/>Siga o passo a passo para [gerar relatórios a partir do painel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/account-money/panel).<br/><br/> |
| Integração via API | <br/>Programa a frequência do seu relatório de acordo com as suas necessidades. Pode ser tanto de forma manual como de forma programada.<br/><br/>Como no painel, também é possível efetuar customizações no relatório.<br/><br/>Leia a documentação para [gerar relatórios por API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/account-money/api). <br/><br/> |

<br/>

## Características técnicas do relatório

Considere as seguintes informações técnicas sempre que for gerar, programar e configurar seus relatórios.

### Programação do relatório

Programe como e com que frequência você quer gerar seus relatórios. 


| Elemento | Características |
| --- | --- |
| Programação | <br/>- Diária<br/> - Semanal<br/>- Mensal<br/><br/> |
| Geração | <br/>- Manual<br/><br/> | <br/>- Automática<br/><br/> |


### Estrutura do relatório

Saiba as características dos elementos que compõem seu relatório.


| Elemento ou ação | Características |
| --- | --- |
| Detalhes das tabelas | <br/>Os detalhes das tabelas compreendem as informações de, no mínimo, 1 dia. <br/> <br/> |
| Ordem das colunas |<br/> Fixa <br/> <br/> |
| Período máximo | <br/> Relatórios com dados de até 60 dias. <br/> <br/> |
| Moeda | <br/> Local (com base no país onde está cadastrada a conta do Mercado Pago) <br/> <br/> |
| Fuso horário das colunas: | <br/> GMT-3 (Horário de Brasília) <br/> <br> Tome como referência o lugar de onde o relatório é baixado. <br/><br/> |
| Seleção de datas via API |<br/> Formato do fuso horário: UTC / GMT-0 <br/> <br/> |
| Seleção de datas via web | <br/> Deve ter como base o fuso horário da conta do usuário.<br/> Por exemplo, a conta do usuário cadastrada no Brasil corresponde ao fuso horário de São Paulo. <br/> <br/> |


### Exportação do relatório

Todas as opções disponíveis na hora de baixar seu relatório.

| Ações e componentes | Características |
| --- | --- |
| Formato do nome do arquivo | <br/>Quando o relatório é programado ou manual:<br/> "&#60;prefixo-configurável&#62;-<span>&#60;yyyy-MM-dd-hhmmss&#62;.&#60;formato&#62;</span>" <br/> Exemplo: minhaloja-2019-05-28-104010.csv<br/><br/> |
| Formatos de download | <br/>.csv, .xlsx <br/><br/>Dica: baixe o relatório em .csv para importar os dados e usá-los em outros aplicativos. Baixe-o em .xlsx para ler as informações nas tabelas da planilha. <br/><br/> |
| Arquivo | <br/>Os relatórios gerados ficam salvos na sua conta do Mercado Pago.<br/><br/> |
| Configuração disponível via API | <br/>- Colunas a gerar por relatório<br/> - Prefixo do arquivo para identificá-lo facilmente<br/> - Envio por SFTP<br/> - Separador de colunas (ponto ou ponto e vírgula)<br/> - Notificação por e-mail<br/><br/> |



> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/account-money/glossary) de Dinheiro em conta para consultá-lo quando precisar ou queira conferir algum termo técnico.

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Geração a partir do Mercado Pago 
>
> Baixe seus relatórios de forma manual ou programada na sua conta do Mercado Pago.
>
> [Geração a partir do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/account-money/panel)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Geração via API
>
> Crie relatórios de forma programada e manual através de uma integração com o Mercado Pago.
>
> [Geração via API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/account-money/api)
