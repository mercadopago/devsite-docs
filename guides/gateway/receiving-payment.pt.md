# Receber um pagamento em modo Gateway

> WARNING
>
> Pré-requisitos
>
> * Possuir a [captura de dados do cartão implementada](receiving-payment-by-card.es.md#captura-los-datos-de-tarjeta).

## Atributos adicionais

Assim que tiver concluído o fluxo de captura de dados do cartão e possuir o `card_token`, você poderá gerar o pagamento.

Para utilizar o modo Gateway, dois atributos são disponibilizados no fluxo de processamento de pagamentos:
1. `processing_mode.`
2. `merchant_account_id (opcional).`

### processing_mode

É o modo que indica se processaremos os pagamentos com seus próprios números de estabelecimento comercial ou com os do MercadoPago.

Se este parâmetro não for enviado no *POST^, o comportamento padrão será o valor `aggregator`, indicando que o pagamento foi processado utilizando os números de estabelecimento comercial do Mercado Pago.

Se deseja processar com seus números de estabelecimento comercial, você deve enviar gateway. Automaticamente, de acordo com o método de pagamento e os números BIN, o Mercado Pago utilizará o número de estabelecimento comercial correspondente para essa transação.

> NOTE
>
> Nota
>
> Para solicitar o registro do modo Gateway e a configuração dos seus números de estabelecimento comercial, consulte seu gerente de conta.

### merchant_account_id

Em casos mais complexos de uso, é útil poder definir em cada pagamento o número de estabelecimento comercial a ser utilizado.

O atributo merchant_account_id permite controlar esse comportamento. Esta ID será a identificação interna do MercadoPago representando um determinado número de estabelecimento comercial.

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

## Crie um pagamento em parcelas
Para utilizar suas promoções bancárias, é importante que envie o campo installments e processing_mode no gateway ao criar um pagamento.
O campo installments corresponde ao número de parcelas selecionado pelo cliente.
Para obter as promoções e parcelas disponíveis:

A resposta possui informações sobre as parcelas disponíveis indicando o valor a ser pago:



## Atributos adicionales

Luego de que hayas hecho el flujo de captura de datos de tarjeta y cuentes con el `card_token` puedes proceder a generar el pago.

Para utilizar el modo _Gateway_ se disponibilizan dos atributos al flujo de procesamiento de pagos:

1. `processing_mode`
2. `merchant_account_id` _(opcional)_

### processing\_mode

Es el modo que indica si procesaremos los pagos con tus propios números de comercio o los de Mercado Pago.

Si este parámetro no se envía en el *POST^, el comportamiento por defecto es que el valor sea `aggregator` e indica que el pago fue procesado utilizando los números de comercio de Mercado Pago.

Si quieres procesar con tus números de comercio debes enviar `gateway`.
Automáticamente según el medio de pago y los números de BIN, Mercado Pago utilizará el número de comercio correspondiente para esa transacción.

> NOTE
>
> Nota
>
> Para solicitar el alta del modo Gateway y configuración de tus números de comercio debes hablar con tu ejecutivo de cuenta.

### merchant\_account\_id

En casos de uso más complejos, es de utilidad poder definir en cada pago el número de comercio a utilizar.

El atributo `merchant_account_id` permite controlar dicho comportamiento. Ese ID será el identificador interno de Mercado Pago que representa a un determinado número de comercio.

## Creando un pago

Una vez que cuentas con el id del `card_token` puedes realizar el pago realizando un API call:

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

La respuesta esperada será la siguiente:

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

Además de devolver los campos `processing_mode` y `merchant_account_id` se devuelven dos campos más:

* `acquirer`: Nombre del adquiriente
* `merchant_number`: Número de comercio utilizado para procesar el pago

## Creando un pago en cuotas

Para hacer uso de tus promociones bancarias, es importante que se envíe el campo `installments` y `processing_mode` en `gateway` al momento de crear un pago.

El campo `installments` corresponde a la cantidad de cuotas que el comprador elije.

Para obtener las promociones y cuotas disponibles:

```javascript
Mercadopago.getInstallments({
    "bin": bin,
    "amount": amount,
    "processing_mode": "gateway",
    "merchant_account_id": "ID"
}, setInstallmentInfo);
```

La respuesta cuenta con la información de las cuotas disponibles indicando el valor a pagar:

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
