# Receive payments in Gateway mode

> WARNING
>
> Prerequisites
>
> * Have the [card information capture](receiving-payment-by-card.es.md#captura-los-datos-de-tarjeta) implemented.

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
