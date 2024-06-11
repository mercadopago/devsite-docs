# Requisitos prévios

Para poder começar a utilizar a ferramenta de Gestão de Dívidas e Links massivos do Mercado Pago, você deve ser cadastrado pela área comercial. Para isso, serão necessárias as seguintes informações.

> WARNING
>
> Importante
>
> Os dados devem ser compartilhados com o consultor comercial através de uma planilha ou enviados através do ticket previamente criado para este fim, conforme a orientação fornecida.

| Dado                             | Descrição                                                                                                                                                      | Valores possíveis/Exemplos                                                                                           |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Site                         | País onde o vendedor opera.                                                                                                                                    | Dívidas: MLA (Argentina), MLM (México) Links: MLA (Argentina), MLB (Brasil), MCO (Colômbia), MLC (Chile), MLM (México), MPE (Peru), MLU (Uruguai)        |
| Usuário Mercado Pago         | O user_ID do Mercado Pago do vendedor. Trata-se do número de identificação da conta do Mercado Pago que recebe o dinheiro das vendas, ou seja, a conta responsável pela arrecadação dos valores. Você pode encontrá-lo no painel do desenvolvedor ao acessar qualquer aplicação. | 1117105806                                                                                                                                                            |
| Nome da empresa que será visível para o pagador | Nome do vendedor que será exibido ao pagador dentro das opções de pagamento e busca.                                                        | Nome visível da empresa.                                                                                      |

## Carteira 

Preencha os seguintes dados caso o vendedor publique dívidas na carteira do Mercado Pago:

| Dado                        | Descrição                                                                                                         | Valores possíveis/Exemplos                                                                                                    |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Identificação do cliente  | Tipo de identificador que o vendedor utilizará para distinguir seu cliente.                                      | DNI / CUIT / CUIL (apenas para Argentina) <br> Código do cliente                                                                         |
| Formato do identificador do cliente | Define os caracteres que podem compor o identificador.                                                          | Números, Letras, Números e letras                                                                                            |
| Segmento                     | Segmento de mercado ao qual a empresa pertence.                                                                   | telecom, energy, gas, government, financial, water, insurance, catalog, wallet, utilities, health, ecommerce, teaching, other, transport, electricity, bank, penalty, sanitation, subscriptions, municipality |
| Categoria do produto      | Categoria do produto da empresa.                                                                              | electricity, gas, generic, home, tv, phone, water, teaching, catalog, government, telecom, transport, sube                     |
| Meios de pagamento      | Meios de pagamento que a empresa deseja habilitar para seus pagadores.                                                                              | dinheiro em conta (obrigatório), cartão de crédito, cartão de débito, meios offline (boletos), créditos ao consumidor (Mercado Crédito), debin (exclusivo para Argentina)                     |
| Logos                       | Imagens que serão exibidas aos pagadores na carteira do Mercado Pago (opcional).                        | Os logos a serem carregados devem estar no formato .jpg ou .png e devem ter até 5 MB. |

## SFTP

Preencha os seguintes dados caso o vendedor utilize SFTP para carga e descarga de informações:

| Dado                        | Descrição                                                                                   | Valores possíveis/Exemplos                                                                                                    |
|-----------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Razão social da empresa        | Nome legal da empresa.                                                                                         | Exemplo: Mercado Livre SA                                                                                                                        |
| Tax ID                      | Identificador fiscal da empresa.                                                                                         | Exemplo: CUIT na Argentina, CNPJ no Brasil.                                                                                                                        |
| Email de contato do terceiro    | Conta de e-mail do vendedor.                                                               |                                                                                                                         |
| SFTP - Nome               | Responsável pelo usuário SFTP.                                                                |                                                                                                                         |
| SFTP - Email                | Email do responsável pelo usuário SFTP.                                                       |                                                                                                                         |
| SFTP - Telefone             | Telefone do responsável pelo usuário SFTP.                                                    |                                                                                                                         |
| SFTP - Chave Pública SSH    | Chave pública associada ao usuário que se conectará ao SFTP. Para criar a chave, acesse a documentação [Como criar uma chave pública/privada SSH](/developers/es/docs/links-and-debts/public-and-private-key). | Chave gerada com o comando `ssh-keygen -t rsa -b 4096 -C`.                                                                |
| SFTP - Faixas de IP             | Lista de faixas de IP pública que o vendedor utilizará para subir os arquivos.                        | Formato 123.123.123.123/32                                                                                                  |