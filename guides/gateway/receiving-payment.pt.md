---
sites_supported:
  - mla
  - mco
  - global
---

# Receber um pagamento em modo Gateway

> WARNING
>
> Pré-requisitos
>
> * Possuir a [captura de dados do cartão implementada](/guides/payments/api/receiving-payment-by-card.pt.md).

## Atributos adicionais

Assim que tiver concluído o fluxo de captura de dados do cartão e possuir o `card_token`, você poderá gerar o pagamento.

Para utilizar o modo Gateway, dois atributos são disponibilizados no fluxo de processamento de pagamentos:

1. `processing_mode.`
2. `merchant_account_id (opcional).`

### processing_mode

É o modo que indica se processaremos os pagamentos com seus próprios números de estabelecimento comercial ou com os do Mercado Pago.

Se este parâmetro não for enviado no *POST*, o comportamento padrão será o valor `aggregator`, indicando que o pagamento foi processado utilizando os números de estabelecimento comercial do Mercado Pago.

Se deseja processar com seus números de estabelecimento comercial, você deve enviar gateway. Automaticamente, de acordo com o método de pagamento e os números BIN, o Mercado Pago utilizará o número de estabelecimento comercial correspondente para essa transação.

> NOTE
>
> Nota
>
> Para solicitar o registro do modo Gateway e a configuração dos seus números de estabelecimento comercial, consulte seu gerente de conta.

### merchant_account_id

Em casos mais complexos de uso, é útil poder definir em cada pagamento o número de estabelecimento comercial a ser utilizado.

O atributo merchant_account_id permite controlar esse comportamento. Esta ID será a identificação interna do Mercado Pago representando um determinado número de estabelecimento comercial.

##Crie um pagamento

Assim que possuir a id do card_token, você poderá efetuar o pagamento realizando um API call:

```php
<?php
  require ('mercadopago.php');

  // Setup your private key
  $mp = new MP('ENV_ACCESS_TOKEN');

  $payment_data = array(
      "transaction_amount" => 100,
      "token" => "ff8080814c11e237014c1ff593b57b4d",
      "payment_method_id" => "visa",
      "payer" => array (
          "email" => "test_user_19653727@testuser.com"
      ),
      "processing_mode" => "gateway",
      "merchant_account_id" => "ID"
  );

  $payment = $mp->post("/v1/payments", $payment_data);
?>
```

A resposta esperada será a seguinte:

```json
{
  "id": 1060255593,
  "operation_type": "regular_payment",
  "payment_method_id": "visa",
  ...
  "processing_mode": "gateway",
  "merchant_account_id": "#hashMerchantAccountID",
  "acquirer": "visa",
  "merchant_number": "1234567"
  "acquirer_reconciliation": {...}
}
```

Além de retornar os campos processing_mode e merchant_account_id, outros dois são incluídos:

* `acquirer`: Nome do adquirente
* `merchant_number`: Número de estabelecimento comercial utilizado para processar o pagamento
* `adquirer_reconciliation`: Campos utilizados para conciliar com as informações do cartão
  * `authorization_code`: Código de Autorização
  * `batch_closing_date`: Data de fechamento do lote
  * `batch_number`: Número do lote
  * `date_created`: Data de criação
  * `date_last_updated`: Última data de atualização
  * `operação`: Tipo de operação (Autorização - Captura - Compra online)
  * `refund_id`: Id de reembolso no caso de ter existido um
  * `terminal_number`: Número do terminal
  * `transaction_number`: Número da transação

## Criando um pagamento parcelado

Para fazer uso de suas promoções bancárias, é importante que envie o campo `installments` e `processing_mode` no `gateway` no momento de criar um pagamento.

O campo `installments` corresponde a quantidade de parcelas que o comprador escolhe.

Para obter as promoções e cotas disponíveis:

```javascript
Mercadopago.getInstallments({
    "bin": bin,
    "amount": amount,
}, setInstallmentInfo);
```

Caso você tenha o Gateway e o Aggregador ativo em sua conta, a API irá responder os itens para cada modelo, onde irá conter informações sobre as parcelas disponíveis, taxas e o valor total a pagar.

Você terá que escolher por qual dos 2 modos deseja processar o pagamento, enviando o atributo na criação do pagamento:

```json
    [
        {
            "payment_method_id": "amex",
            "payment_type_id": "credit_card",
            "processing_mode" : "gateway",
            "merchant_account_id" : "ID",
            "issuer": {
                "id": "303",
                "is_default": null,
                "name": "Banco Patagonia",
                "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/303.gif",
                "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/303.gif"
            },
            "payer_costs": [
                {
                    "installments": 1,
                    "installment_rate": 0,
                    "discount_rate": 0
                },
                {
                    "installments": 3,
                    "installment_rate": 0,
                    "discount_rate": 0
                },          
                {
                    "installments": 6,
                    "installment_rate": 0,
                    "discount_rate": 0
                },            
                {
                    "installments": 9,
                    "installment_rate": 0,
                    "discount_rate": 0
                },
                {
                    "installments": 12,
                    "installment_rate": 0,
                    "discount_rate": 0
                }
            ]
        },
            {
            "payment_method_id": "amex",
            "payment_type_id": "credit_card",
            "processing_mode" : "aggregator",
            "merchant_account_id" : "null",
            "issuer": {
                "id": "303",
                "is_default": null,
                "name": "Banco Patagonia",
                "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/303.gif",
                "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/303.gif"
            },
            "payer_costs": [
                {
                    "installments": 1,
                    "installment_rate": 0,
                    "discount_rate": 0
                },
                {
                    "installments": 2,
                    "installment_rate": 0,
                    "discount_rate": 0
                },
                {
                    "installments": 3,
                    "installment_rate": 0,
                    "discount_rate": 0
                },
                {
                    "installments": 6,
                    "installment_rate": 0,
                    "discount_rate": 0
                }
            ]
        }
    ]
```
