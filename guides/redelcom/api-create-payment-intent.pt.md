# Criar uma intenção de pagamento

Uma intenção de pagamento é uma solicitação contendo os detalhes de uma transação a ser realizada.

Para criar uma intenção de pagamento, você precisa ter feito anteriormente a chamada para obter o código do terminal ao qual a transação será associada. Lembre-se que, se você já fez isso uma vez e salvou o `id` do terminal, não precisará repetir essa consulta, pois esse código é único e inalterável.

Em seguida, faça uma chamada POST para a API `{https://api-dev.redelcom.cl:20010/v2}/pago`, adicionando o valor obtido anteriormente ao campo `terminalId` e substituindo `X-Authentication`, `clientId` e `secret` pelas suas credenciais:

```curl
curl -X POST \
 'https://api-dev.redelcom.cl:20010/v2/pago' \
--header 'X-Authentication: clientId;secret' \
--header 'Content-Type: application/json' \
--data '{


   "amount": 6900,
   "description": "Compra de prueba",
   "paymentType": "EFECTIVO",
   "products": [{
       "description": "PIZZA MEDIANA",
       "id": "1845",
       "iva_exempt": false,
       "quantity": 10,
       "unit_price": 300
   }],
   "rdcDTE": true,
   "requestTip": true,
   "responseCallback": "https://eom2h2tqm3g6y7l.m.pipedream.net",
   "terminalId": "3727",
   "userTransactionId": "345565"


}'

```

Configure os campos desta solicitação seguindo as seguintes especificações:

| Campo | Tipo | Descrição |
|---|---|---|
| `amount` | inteiro | **Obrigatório**. Valor da transação. Deve ser um número entre 1 e 99999999. |
| `Description` | string | **Opcional**. Informações adicionais a serem exibidas na solicitação de pagamento. |
| `dte` | string | **Opcional**. Você deve configurar isso se o Documento Tributario Electrónico (DTE) associado ao pagamento não for gerado pela Redelcom e você desejar que o POS o imprima. Aplica-se apenas se `rdcDTE` for `false`. <br>Você pode consultar a seção "Imprimir DTE" para obter mais informações. |
| `paymentType` | enum | **Opcional**. Método de pagamento a ser usado. Se o parâmetro for omitido, o método de pagamento deve ser escolhido no POS. <br>Valores possíveis: `EFECTIVO`, `TARJETA`, `WALLET`, `SIN_EFECTIVO`, `SIN_WALLET`. |
| Products - `description` | string | **Opcional**. Breve descrição do produto vendido. |
| Products - `id` | string | **Opcional**. Código do produto. |
| Products - `iva_exempt` | boolean | **Opcional**. Se o produto está isento de IVA ou não. Valores possíveis: `True` se isento; `false` se não. |
| Products - `quantity` | inteiro | **Opcional**. Número de itens. |
| Products - `unit_price` | inteiro | **Opcional**. Preço unitário do item vendido. |
| `rdcDTE` | boolean | **Opcional**. Se a Redelcom deve gerar o DTE (por padrão, não gera). |
| `requestTip` | boolean | **Opcional**. Se o terminal deve solicitar uma gorjeta (por padrão, não solicita). |
| `responseCallback` | string | **Opcional**. A URL própria do integrador que a Redelcom chamará para relatar o status de um pagamento no final da transação, seja ele bem-sucedido ou não. Para configurá-lo, consulte a subseção "Implementação da URL de Resposta".<br>Recomendamos o uso deste método para evitar a necessidade de fazer uma chamada de consulta para intenções de pagamento. |
| `terminalId` | string | **Obrigatório**. Código do terminal ao qual a transação será associada, obtido na chamada "Obter terminal". |
| `UserTransactionId` | string | **Obrigatório**. Código de referência para a solicitação de pagamento, que você pode definir. |


Se a solicitação for bem-sucedida, a resposta retornará o código associado à solicitação de pagamento e se parecerá com o exemplo a seguir:

```json
{
   "rdcTransactionId": "294-3727-16384"
}

```


> WARNING
> 
> Importante
>
> Recomendamos armazenar o `rdcTransactionId` associado a cada transação feita para facilitar consultas posteriores a uma intenção de pagamento.


Na tabela a seguir, você pode ver os principais motivos pelos quais esta solicitação pode **não** ser processada:

| Erro | Motivo |
|---|---|
| STATUS CODE - 400 | Informações de pagamento inválidas. Reveja as informações enviadas e tente novamente. |
| STATUS CODE 401 | Autenticação inválida ou inexistente. Reveja suas credenciais. |
| STATUS CODE - 409 | Já existe uma intenção de pagamento pendente. Tente novamente mais tarde. |


## Implementação da URL de Resposta

Ao criar uma intenção de pagamento, recomendamos configurar o parâmetro `responseCallback`, que permite receber atualizações sobre os estados finais dessas intenções em sua própria URL.

Para implementar esse `responseCallback`, observe:

- Deve ser uma chamada `POST` com um único parâmetro na string de consulta, `rdcTransactionId`, que é o identificador da transação fornecido pela RedelCom ao solicitar o pagamento.
- O `Content-Type` deve ser `application/json`.

Essa implementação será considerada bem-sucedida se o serviço retornar um código de status `HTTP 200 OK`. Se, por outro lado, a resposta retornar um código de status `5xx`, o serviço tentará novamente a chamada de URL a cada 1 minuto, até 3 vezes. Se a resposta retornada não for uma dessas duas opções mencionadas, a implementação será considerada falha e não será tentada novamente.
