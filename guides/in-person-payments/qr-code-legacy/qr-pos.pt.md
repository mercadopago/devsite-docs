---
  indexable: false
---

# Pagamentos com QR no Ponto de Venda

## Fluxo

![Payment flow with QR at the point of sale Mercado Pago](/images/mobile/qr-user-flow.es.svg)

## Conceitos

Primeiro você deve familiarizar-se com os seguintes conceitos que usará durante a integração.

| Atributo       | Descrição                                                  |
| -------------- | ------------------------------------------------------------ |
| `ACCESS_TOKEN` | É o [token de acceso](https://www.mercadopago.com/mlb/account/credentials) da conta Mercado Pago a qual se creditarão suas cobranças. |
| `COLLECTOR_ID` | É o número de usuário da conta Mercado Pago, são os últimos 9 dígitos de seu `access_token`, posterior ao hífen. |

## Objetos

Além dos conceitos anteriores, também deve conhecer os objetos com que trabalharemos.

### Objeto POS

```json
{
    "name":"Caixa Principal", 
    "fixed_amount": true,
    "category": 621102,
    "store_id": "123456",
    "external_id": "4lph4num3r1c"
}
```

**Definições**

- `name`: Nome descritivo. É uma String de até 45 caracteres.
- `external_id`: é o identificador único do ponto de venda. É um código alfanumérico definido por você, não pode conter espaços nem caracteres especiais e não se distingue maiúscula de minúscula. É uma String de até 40 caracteres.
- `category` : Código MCC que indica a categoria do ponto de venda. Os valores possíveis são:
  - Gastronomia Brasil: 5611203L
  - Postos de Gasolina Brasil: 4731300L,
  - Geral: `null`
- `store_id`: É o número identificador do ramo ao qual o ponto de venda pertence. O id da loja.
- `fixed_amount`: Indica se o usuário pode inserir qualquer quantia ao ler o QR ou terá que esperar que um pedido esteja disponível. É um booleano.

### Objeto Order

```json
{
    "external_reference": "id de transação interno",
	"notification_url": "www.seuservidor.com.br/endpoint",
      "items" :[{
        "title" : "Coxinhas",
        "currency_id" : "[FAKER][CURRENCY][ACRONYM]",
        "unit_price" : 16.0,
        "quantity" : 4
      },{
        "title" : "Refrigerante",
        "currency_id" : "[FAKER][CURRENCY][ACRONYM]",
        "unit_price" : 15.0,
        "quantity" : 1
      }]
}
```

**Definições**

- `external_reference`: String alfanumérico para uso externo, normalmente é o número de ticket ou de pedido.
- `notification_url`: URL onde se enviará vía POST a notificação de pagamento.
- `items`: Conjunto de hashes de produtos da compra.
  - `title`: Título do produto.
  - `currency_id`: Identificador de moeda em formato ISO_4217.
  - `unit_price`: Preço unitário (máximo 2 decimais).
  - `quantity`: Quantidade do produto.

### Objeto Payment

```json
{
    "id": 420101010101,
    "external_reference": "id de transação interno",
    "status": "approved",
    "status_detail": "accredited",
    ...
}
```

**Definições**

- `id`: Id único gerado pelo Mercado Pago (será necessário para fazer devoluções).

- `external_reference`: Mesma string alfanumérica que adicionou ao criar o pedido.

- `status`: Status do pagamento.

  - `approved`: O pagamento foi aprovado e creditado.

  - `rejected`: O pagamento foi rejeitado. O usuário deve tentar pagar novamente.

  - `refunded`: O pagamento foi devolvido ao usuário.

  - `charged_back`: Um estorno foi feito no cartão de crédito do comprador.

- `status_detail`: Informação detalhada sobre o status atual ou motivo da rejeição.

Consultar a [documentação completa](https://www.mercadopago.com.br/developers/pt/reference/payments/resource/) sobre este objeto na nossa referência da API.

## Cobranças

### Crie um QR

Deve-se criar um código QR para cada caixa com um `external_id`  que identifique-o.

**API de criação de QRs**

```bash
curl -X POST \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/pos \
-d \
'{
    "name":"Caixa Principal", 
    "fixed_amount": true,
    "category": 621102,
    "store_id": "123456",
    "external_id": "4lph4num3r1c"
}'
```

### Crie o pedido

Para efetuar uma cobrança através de um código QR do Mercado Pago, deverá criar um pedido com os detalhes da cobrança pendente.

**API de criação de pedidos**

```bash
curl -X POST \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/mpmobile/instore/qr/COLLECTOR_ID/EXTERNAL_ID \ 
-d \
'{
    "external_reference": "id de transação interno",
	"notification_url": "www.seuservidor.com.br/endpoint",
      "items" :[{
        "title" : "Coxinhas",
        "currency_id" : "[FAKER][CURRENCY][ACRONYM]",
        "unit_price" : 16.0,
        "quantity" : 4
      }]
}'
```

O pedido expira 10 minutos depois de ser criado e automaticamente quando pago. Se desejar um tempo de expiração diferente, pode enviar o header `X-Ttl-Store-Preference` com o tempo desejado em segundos. 

Por exemplo se deseja que esteja disponível por 5 minutos se deve enviar o header `'X-Ttl-Store-Preference: 300'`. Tenha em mente que se uma pessoa pagar esse pedido antes do tempo definido, o mesmo expirará.

### Receba o pagamento

Depois que o usuário fizer o pagamento, você poderá obter os dados usando qualquer uma das seguintes maneiras:

1. [Webhooks](https://www.mercadopago.com.br/developers/pt/guides/notifications/webhooks/): Quando o pagamento é criado, enviamos uma notificação via webhook para a URL configurada no campo `notification_url` do pedido. 
2. Fazer [busca do pagamento](https://www.mercadopago.com.br/developers/pt/reference/payments/_payments_id/get/) utilizando o `external_reference` como critério de busca.

### Eliminar pedido

Se quiser eliminar um pedido associado a um QR antes que expire o tempo (`X-Ttl-Store-Preference`) ou seja pago.

```bash
curl -X DELETE \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/mpmobile/instore/qr/COLLECTOR_ID/EXTERNAL_ID
```

## Devoluções

havendo ocasiões que necessite realizar uma [devolução](https://www.mercadopago.com.br/developers/pt/guides/manage-account/account/cancellations-and-refunds/) parcial ou total de um pagamento.

**Devolução total**

```bash
curl -X POST \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/v1/payments/PAYMENT_ID/refunds
```

**Devolução parcial**

```bash
curl -X POST \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/v1/payments/PAYMENT_ID/refunds \
-d '{ "amount": 10.50 }'
```

## Testes

Dois usuários de teste devem ser criados: um comprador e outro coletor. Com o usuário coletor o QR deve ser criado e com o outro entrar no aplicativo do Mercado Pago ou Mercado Livre.

Consulta os [dados para testes](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-pro/test-integration/): usuários de teste e cartões de teste que possam ser utilizados.

| Casos de teste                                               | Resultado esperado                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| O usuário escaneia um código QR válido antes de fazer o pedido. | O app não mostra um pedido.                                 |
| O usuário escaneia um código QR com parâmetros inválidos, isto é, refere-se a uma conta inexistente. | O app informa que ocorreu um erro.                   |
| O usuário escaneia um código válido, depois que o pedido foi feito e criado um pedido de venda. | O app mostra o pedido.                                     |
| O usuário realiza um pagamento aprovado.                         | O sistema de PDV recebe a informação de um pagamento aprovado. |
| O usuário realiza um pagamento recusado.                        | O sistema de PDV recebe a informação de um pagamento recusado. |
| A devolução de um pagamento é feito a partir do PDV.              | Na conta do comprador consta a devolução.         |

### Dicionário de erros

[Aqui](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-api/handling-responses/) poderá encontrar nosso dicionário de erros.

## Relatórios

Consulte a [documentação completa](https://www.mercadopago.com.br/ajuda/relatorios-conciliacao_2164) sobre os relatórios do Mercado Pago.
