---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
---

# Como integrar QR modelo comprador

Para realizar a cobrança do pagamento, é preciso ler o QR e enviar o código desta leitura junto com as informações do pedido (valor, ítens, quantidade). Dessa forma, a transação será processada automaticamente no aplicativo do Mercado Pago.

## Requisitos  previos

Para que a integração funcione corretamente, é preciso:

- Criar [Store](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/qr-code/stores-and-pos).
- Criar [QR](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/qr-code/stores-and-pos).
- Ter um leitor para código QR.
- Habilitar sua conta do Mercado Pago para este tipo de cobrança. 

## Fluxo do modelo

O modelo comprador funciona da seguinte forma: 

![Fluxo de pagamento QR comprador](/images/mobile/flujo-qrc-PT.png)

1. O Integrador faz a leitura do código QR através de um leitor.
2. Com as informações para cobrança do pedido e código de leitura do QR, o integrador envia os dados de cobrança para API.
3. Na resposta da API, o integrador recebe a resposta sobre a aprovação ou rejeição do pagamento.

## Criação de pedido

Neste modelo, existe uma API que enviará ao Mercado Pago as informações do pedido obtidas na leitura do QR. Isso permitirá que o valor da transação seja cobrado.
Antes de publicar a ordem, será necessário coletar 2 dados:

-**payment_token**
Informação obtida ao ler o código QR do comprador (não modificar a informação do token)
Este token é criptografado em base64, conforme o padrão EMVCo. 

-**X-Idempotency-Key**
Uma chave única criada pelo integrador que identificará o pedido. Para evitar que a chave seja duplicada, basta usar:  timestamp+external_pos_id

Em seguida, faça a chave de pedido inserindo os dados acima nos campos indicados dentro do body.

```curl
curl --location --request POST
 'https://api.mercadopago.com/instore/qr/buyer/collectors/USER_ID/stores/EXTERNAL_STORE_ID/pos/EXTERNAL_POS_ID/orders' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--header 'X-Idempotency-Key: 92022242-f08a-11e9-81b4-2a2a12' \
--data-raw ' {
    "external_reference" : "order-id-1234",
   "total_amount": 100.0,
    "items": [
        {
            "sku_number": "KS955RUR",
            "category": "FOOD",
            "title": "Item1",
            "description": "Item1 Mercado Pago",
            "unit_price": 20,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 100
        }
   ],
   "title": "Title",
    "description": "Mercado Pago",
 "scan_timestamp": 1581356798,
"payment_token":"PAYMENT_TOKEN"
   }'
```
| Atributo | Tipo (_type_) | Descrição |
| --- | --- | --- |
| `external_reference` | _string (256)_ | Identificador do cobrador do pedido. (obrigatório) |
| `total_amount` | _double_ | Valor total a ser cobrado do pagador. (obrigatório) |
| `items.sku_number` | _string (256)_ | Código do item. |
| `items.category` | _string (256)_ | Categoria do item. (Recomendável) |
| `items.title` | _string (256)_ | Nome do item. (obrigatório) |
| `items.description` | _string (256)_ |  Descrição do item |
| `items.unit_price` | _double_ | Preço unitário do item. (obrigatório) |
| `items.quantity` | _float_ | Quantidade do item. (obrigatório) |
| `items.unit_measure` | _string (256)_ | Unidade de medida do item. (obrigatório)  |
| `items.total_amount` | _double_ | Valor total do item. (obrigatório) |
| `title` | _string (256)_ | Título do pedido. |
| `description` | _string (256)_ | Descrição do pedido. |
| `scan_timestamp` | _string (256)_ | Data e hora do período em que a varredura foi realizada no ponto de venda.  |
| `payment_token` | _string (256)_ | Código capturado do telefone do pagador. **Este atributo está em Base64 e possui comprimento variável. Não há limite de caracteres.** (obrigatório) |

## Informações adicionais para requisição

Depois de utilizar pela primeira vez a combinação entre X-Idempotency-key e o token do pagador,  é possível usá-las de diferentes maneiras, conforme tabela mostra a tabela abaixo.

Caso de uso | Conexão perdida entre o PDV e Mercado Pago | Evitar duplicidade de pagamento (Ex: Erro do caixa do PDV) | Evitar duplicidade de pagamento (Ex: Erro do caixa do PDV) | Processar pagamento de outro cliente
----------------- | ----------------- | ----------------- | ----------------- | -----------------
Idempotency-key | Mesmo| Mesmo | Diferente | Diferente
Token do pagador | Mesmo | Diferente | Mesmo | Diferente
Resposta do MP | Exibe o pagamento anterior | Chave inválida (já foi utilizada) | Chave inválida (já foi utilizada) | Pagamento realizado

Esta chamada retornará uma resposta semelhante a descrita abaixo.

```json
{
   "id": 2574846382,
   "status": "approved",
   "items": [
       {
            "sku_number": "KS955RUR",
            "category": "FOOD",
            "title": "Item1",
            "description": "Item1 Mercado Pago",
            "unit_price": 20,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 100
        }
   ],
   "payments": [
       {
           "id": 14527153428,
           "status": "approved",
           "status_detail": "accredited",
           "payment_type_id": "account_money",
           "payment_method_id": "account_money",
           "token": null,
           "transaction_amount": 100,
           "installments": 1,
           "processing_mode": null,
           "issuer_id": null,
           "coupon_amount": 0,
           "campaign_id": null,
           "coupon_code": null,
           "description": "Mercado Pago",
           "external_reference": "order-id-1234",
           "statement_descriptor": null,
           "date_of_expiration": null,
           "merchant_account_id": null,
           "payment_method_option_id": null,
           "additional_info": null,
           "net_amount": null,
           "transaction_details": {
               "external_resource_url": null,
               "total_paid_amount": 100
           },
```