
# Como gerar o seu relatório de Dinheiro em conta?

## Canais de geração

Há dois formas de gerar um relatório de Dinheiro em conta:

| Canais | Descrição |
| ------- | ----------- |
| Painel do Mercado Pago | <br/>É muito rápido e simples. Para gerar a partir da sua conta do Mercado Pago, vá até [seus Relatórios](https://www.mercadopago.com.br/balance/reports?page=1#!/settlement-report) e selecione uma opção de Relatórios.<br/><br/>Siga o passo a passo para [gerar relatórios a partir do painel.](https://www.mercadopago.com.br/developers/pt/guides/reports/account-money/panel/)<br/><br/> |
| Integração via API | <br/>Programa a frequência do seu relatório de acordo com as suas necessidades. Pode ser tanto de forma manual como de forma programada.<br/><br/>Leia a documentação para [gerar relatórios por API.](https://www.mercadopago.com.br/developers/pt/guides/reports/account-money/api/) <br/><br/>|

<br/>

## Características técnicas do relatório

Considere as seguintes informações técnicas sempre que for gerar, programar e configurar seus relatórios.

### Programação do relatório

Programe como e com que frequência você quer gerar seus relatórios. 


| Elemento | Características |
| ------------ |	--------    |
| Programação | <br/>-  Diária<br/>  -  Semanal<br/>-  Mensal<br/><br/> |
| Geração  | <br/>-  Manual<br/><br/>  |


### Estrutura do relatório

Saiba as características dos elementos que compõem seu relatório.


| Elemento ou ação | Características |
| ------------ |	--------    |
| Detalhes das tabelas | <br/>Os detalhes das tabelas compreende as informações no mínimo de 1 dia. Exceto nos relatórios gerados por retirada de dinheiro. <br/> <br/>  |
| Ordem das colunas |<br/> Fixa <br/> <br/> |
| Período máximo | <br/> Relatórios com dados de até 60 dias.   <br/> <br/> |
| Moeda | <br/> Local (com base no país onde está cadastrada a conta do Mercado Pago) <br/> <br/> |
| Fuso horário das colunas: | <br/> GMT-4 <br/> |
| Seleção de datas via API |<br/>  Formato do fuso horário: UTC / GMT-0 <br/> <br/> |
| Seleção de datas via web  | <br/> Deve ter como base o fuso horário da conta do usuário. 
Por exemplo, a conta do usuário cadastrada no Brasil corresponde ao fuso horário de São Paulo. <br/> <br/> |


### Exportação do relatório

Todas as opções disponíveis na hora de baixar seu relatório.

| Ações e componentes | Características |
| ------------ |	--------    |
| Formato do nome do arquivo | <br/>Quando o relatório é programado ou manual:<br/> "&#60;prefixo-configurável&#62;-<span>&#60;yyyy-MM-dd-hhmmss&#62;.&#60;formato&#62;</span>" <br/> Exemplo:  mitienda-2019-05-28-104010.csv<br/><br/> |
| Formatos de download | <br/>.csv, .xlsx <br/><br/>Dica: baixe o relatório em .csv para importar os dados e usá-los em outros aplicativos. Baixe-o em .xlsx para ler as informações nas tabelas da planilha. <br/><br/> |
| Arquivo | <br/>Os relatórios gerados ficam salvos na sua conta do Mercado Pago.<br/><br/> |
| Configuração disponível via API | <br/>-  Colunas a gerar por relatório<br/> -  Prefixo do arquivo para identificá-lo facilmente<br/> -  Envio por SFTP<br/> -  Separador de colunas (ponto ou ponto e vírgula)<br/> - Notificação por e-mail<br/><br/> |



> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago.com.br/developers/pt/guides/reports/account-money/glossary/) de Dinheiro em conta para consultá-lo quando precisar ou queira conferir algum termo técnico.

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Geração a partir do Mercado Pago 
>
> Baixe seus relatórios de forma manual ou programada na sua conta do Mercado Pago.
>
> [Geração a partir do Mercado Pago](https://www.mercadopago.com.br/developers/pt/guides/reports/account-money/panel/)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Generação via API
>
> Crie relatórios de forma programada e manual através de uma integração com o Mercado Pago.
>
> [Generação via API](https://www.mercadopago.com.ar/developers/es/guides/reports/account-money/api/)
