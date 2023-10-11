# Imprimir um recibo

A integração via API permite a impressão de dois tipos de recibos: DTE e impressão livre, ou seja, contas ou outros tipos de recibos. Continue lendo as instruções abaixo para aprender como fazer isso em cada caso.

## Imprimir um DTE (recibo)

Para solicitar a impressão de uma fatura com DTE, você precisa fazer uma chamada `POST` para `{https://api-dev.redelcom.cl:20010/v2}/factura`, substituindo `X-Authentication`, `clientId` e `secret` pelas suas credenciais.


```curl
curl -X POST \ 
'https://api-dev.redelcom.cl:20010/v2/factura' \
--header 'X-Authentication: clientId;secret' \
--header 'Content-Type: application/json' \
--data '{
   "dte": "XML de boleta o factura bajo el esquema de servicios impuestos internos",
   "rdcTransactionId": "294-3727-16384",
   "terminalId": "3127"
}'

```


| Campo           | Descrição                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| `dte`           | **Obrigatório**. Estrutura (XML) da fatura eletrônica. Você pode encontrar um exemplo completo em XML no [Anexo: exemplo XML para impressão de DTE](/developers/pt/docs/redelcom/additional-content/print-example). |
| `rdcTransactionId` | **Obrigatório**. Código da solicitação de pagamento original que você deseja faturar.           |
| `terminalId`    | **Obrigatório**. Código do terminal para o qual a solicitação de impressão será enviada.         |


Se a chamada for bem-sucedida, a impressão será gerada no terminal selecionado e uma resposta vazia com um código de status 200 será retornada. 
Se houver um erro, a resposta será uma das seguintes:

| Status | Descrição |
|---|---|
| 401 | Autenticação inválida ou inexistente. Verifique suas credenciais. |
| 409 | Já existe uma solicitação de impressão pendente. |


## Impressão Livre

Se você deseja imprimir um tipo diferente de documento, como um recibo de pagamento ou uma conta preliminar, faça uma chamada `POST` para a API `{https://api-dev.redelcom.cl:20010/v2}/impresion`, substituindo `X-Authentication`, `clientId` e `secret` pelas suas credenciais.

```curl
curl  -X POST \ 
 'https://api-dev.redelcom.cl:20010/v2/impresion' \
--header 'X-Authentication: clientId;secret' \
--header 'Content-Type: application/json' \
--data '{
   "printText": ""{w}   Roberta Pizzas       {/w} {br}      PUB RESTAURANT {br}       Vina del mar.Chile{br}{br}{w}  ADICION        MESA   {br}    1763            5          {/w}{br}     18/04/2023  T:1  9:26 pm{br}Atendido por :ASDRUBAL      ( 3){br}Invitados    :  5{br}--- Detalle del Consumo --------{br}Producto {s}(Cant x Precio){/s}        Total{br}--------------------------------{b}{br}RUCULA                   $10,900{br}GAMBA                    $11,700{br}BOTURA                   $11,900{br} {br} {br}{pdf417}www.google.cl{/pdf417}{br}"
",
   "terminalId": "3127"
}'

```


| Campo | Descrição |
|---|---|
| `printText` | **Obrigatório**. Texto a ser impresso seguindo o formato de impressão do terminal RedelCom. |
| `terminalId` | **Obrigatório**. Código do terminal para o qual a solicitação de impressão será enviada. |


Se a solicitação for bem-sucedida, ela acionará a impressão no terminal selecionado e uma resposta vazia com um código de status 200 será retornada. 
Se houver um erro, a resposta será uma das seguintes:

| Status | Descrição |
|---|---|
| 401 | Autenticação inválida ou inexistente. Verifique suas credenciais. |
| 409 | Já existe uma solicitação de impressão pendente. |


## Tags de impressão

Para realizar a impressão de recibos via API, você precisará usar algumas tags que permitem formatá-los como desejar. Você pode ver essas tags em detalhes na tabela abaixo.

| Tag | Descrição |
|---|---|
| `{w}{/w}` | Fonte larga 16 x 48. |
| `{s}{/s}` | Fonte pequena 8 x 16. |
| `{b}{/b}` | Fonte em negrito, texto em negrito. |
| `{left}` | Alinhamento do texto à esquerda. |
| `{center}` | Alinhamento de texto centralizado. |
| `{reset}` | Comando usado para limpar o buffer da impressora. Deve ser usado sempre que você desejar inserir um novo comando, diferente do anterior. |
| `{br}` | Quebra de linha. |
| `{qr}{/qr}` | O texto entre estas chaves será impresso como um código QR.<br>Recomendamos o uso de uma tag `{br}` antes e depois. |
| `{code93}{/code93}` | O texto entre essas chaves será impresso como um código de barras (máx. 58 caracteres).<br>Recomendamos o uso de uma tag `{br}` antes e depois. |
| `{pdf417}{/pdf417}` | O texto entre essas tags será impresso como um código pdf.<br>Recomendamos o uso de uma tag `{br}` antes e depois. |
