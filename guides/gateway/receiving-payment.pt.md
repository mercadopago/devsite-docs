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
}
```

Além de retornar os campos processing_mode e merchant_account_id, outros dois são incluídos:

* `acquirer`: Nome do adquirente
* `merchant_number`: Número de estabelecimento comercial utilizado para processar o pagamento

## Criando um pagamento parcelado

Para fazer uso de suas promoções bancárias, é importante que envie o campo `installments` e `processing_mode` no `gateway` no momento de criar um pagamento.

O campo `installments` corresponde a quantidade de parcelas que o comprador escolhe.

Para obter as promoções e cotas disponíveis:

```javascript
Mercadopago.getInstallments({
    "bin": bin,
    "amount": amount,
    "processing_mode": "gateway",
    "merchant_account_id": "ID"
}, setInstallmentInfo);
```

A resposta conta com a informação das cotas disponíveis indicando o valor a pagar:

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
            }
        ]
        ...
    },
    {
        "payment_method_id": "amex",
        "payment_type_id": "credit_card",
        "processing_mode" : "gateway",
        "merchant_account_id" : "ID",
        ...
  }
]
```
