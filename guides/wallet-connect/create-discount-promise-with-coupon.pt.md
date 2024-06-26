# Criar promessa de desconto com cupom pré-adicionado

A **promessa de desconto com cupom pré-adicionado** representa uma forma simplificada e eficiente de aplicar descontos em transações. Neste sistema, é possível que o vendedor exiba o preço com desconto de determinado produto antes de realizar o pagamento, ou seja, antes do checkout. 

A criação da promessa de desconto com cupom pré-adicionado é feita em dois passos:

* Validar o cupom antes da realização do pagamento
* Adicionar o cupom antes de prosseguir para pagamento

## Validar cupom antes da realização do pagamento.

Para **validar um cupom antes de prosseguir com o pagamento**, é importante enviar os dados da campanha na solicitação subsequente. Esta solicitação garante que o cliente possa aproveitar o benefício do desconto antes de finalizar a compra.

Para isso, utilize o _curl_ abaixo e insira os parâmetros de acordo com a tabela descritiva. Esta solicitação verificará a validade do cupom e retornará informações detalhadas sobre o desconto aplicável, se houver.

| Parâmetro  | Descrição  | Tipo  | Exemplo  |
| --- | --- | --- | --- |
| Authorization  | Token de autorização do usuário (Access token). Esta informação pode ser obtida através do menu [Suas integrações](/developers/pt/docs/wallet-connect/additional-content/your-integrations/credentials).  | String  | APP_USR-123456-test-access-t0ken  |
| x-payer-token  | Este é um token específico do pagador, substitua <PAYER_TOKEN> pelo token correspondente. Esta informação é obtida ao finalizar o  [fluxo de vinculação de contas](/developers/pt/docs/wallet-connect/account-linking-flow/create-agreement) | String  | payer1-token2-test3-example4  |
| id  | ID do cupom: Código que identifica e associa sua utilização à uma campanha promocional específica  | String  | Black_Friday_20  |
[[[
```curl

curl -X POST \
'https://api.mercadopago.com/v2/wallet_connect/coupons' \
--header 'Authorization: <Bearer YOUR_ACCESS_TOKEN>' \
--header 'x-payer-token: <PAYER_TOKEN>' \
--header 'Content-Type: application/json' \
-d '{
    "id": "<COUPON>"
 }'
```
]]]

> NOTE
>
> Importante
>
>Quando um cupom é submetido para validação, o sistema verifica se ele está correto e se há um desconto associado a ele. Dependendo do resultado da verificação, diferentes respostas podem ser recebidas. Veja a seção [Respostas da validação de cupons](/developers/pt/docs/wallet-connect/discounts/create-discount-promise-preadd-coupon/validation-responses) para mais detalhes.

## Adicionar cupom antes de prosseguir para pagamento

Quando a validação de um código de cupom é necessária durante o checkout, isto é, antes de efetuar o pagamento, é essencial enviar os dados da campanha na requisição subsequente.

Esta etapa envolve o envio de uma requisição ao sistema para aplicar o desconto do cupom à transação que está prestes a ser finalizada.

> WARNING
>
> Importante
>
> É importante que essa requisição seja feita após o usuário inserir o cupom e antes de confirmar o pagamento.


Utilize o _curl_ abaixo para realizar a requisição e garanta que os parâmetros estejam preenchidos de acordo com a tabela descritiva a seguir.
| Parâmetro  | Descrição  | Exemplo  |
| --- | --- | --- |
| Authorization  | Token de autorização do usuário (Access token). Esta informação pode ser obtida através do menu [Suas integrações](/developers/pt/docs/wallet-connect/additional-content/your-integrations/credentials).  | APP_USR-123456-test-access-t0ken  |
| x-payer-token  | Este é um token específico do pagador, substitua <PAYER_TOKEN> pelo token correspondente. Esta informação é obtida ao finalizar o [fluxo de vinculação de contas](/developers/pt/docs/wallet-connect/account-linking-flow/create-agreement).  | payer1-token2-test3-example4  |
| amount  | Valor total da transação  | 550.50  |
| coupon  | Código do cupom a ser aplicado. É o código que o usuário insere e que faz referência à campanha de desconto.  | desconto20off  |

[[[
```curl

curl -X POST \
  'https://api.mercadopago.com/v2/wallet_connect/discounts' \
  --header 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --header 'x-payer-token: <PAYER_TOKEN>' \
  --header 'Content-Type: application/json' \
  -d '{
      "amount": 550,
      "coupon": "<COUPON>"
  }'

```
]]]

Ao adicionar o cupom antes de prosseguir para o pagamento, é possível que diferentes respostas sejam recebidas (sucesso/erro). Veja abaixo o detalhamento de cada uma delas.

### Sucesso

1. Resposta de sucesso ao adicionar cupom

* Código de status: nenhum código é devolvido nesta solicitação.
* Descrição: a resposta traz a informação referente à moeda, valor do desconto, termos legais, entre outros, o que atesta o sucesso da transação.
* Corpo da resposta: 

[[[
```Json

{
  "transaction_amount": 550.0,
  "currency_id": "ARS",
  "discount": {
    "amount": 55.0,
    "detail": {
      "value": 10.0,
      "type": "percent",
      "cap": 1000.0
    },
   "legal_terms":"https://mp.com/legal"
  }
}

```
]]]

### Erro

1. Desconto inexistente para usuário

* Código de status: nenhum código é retornado.
* Descrição: Este erro retorna para informar que não existe um desconto disponível para o usuário.
* Corpo da resposta:

```Json
{
  "transaction_amount": 550.0,
  "currency_id": "ARS",
  "discount": {}
}

```

2. Transaction_amount deve ser maior que 0

* Código de status: 400 (Bad Request).
* Descrição: Este erro retorna quando o campo `transaction_amount_ é preenchido com valor 0. Neste caso, é necessário inserir um valor que seja superior a 0 e realizar uma nova requisição.
* Corpo da resposta:

[[[
```Json
{
  "error": "bad_request",
  "message": "transaction_amount must be greater than 0",
  "status": 400
}
```
]]]

3. Transaction_amount não pode estar vazio

* Código de status: 400 (Bad Request).
* Descrição: Este erro retorna quando o campo `transaction_amount_ é deixado em branco. Neste caso, é necessário inserir um valor que seja superior a 0 e realizar uma nova requisição.
* Corpo da resposta:

[[[
```Json
{
  "error": "bad_request",
  "message": "transaction_amount must not be null.",
  "status": 400
}

```
]]]