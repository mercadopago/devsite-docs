# Recibiendo un pago en modo Gateway

> Pre-requisitos:
>
> * Tener implementada la [captura de datos de tarjeta](receiving-payment-by-card.es.md#captura-los-datos-de-tarjeta).

En Mercado Pago es posible transaccionar utilizando tus números de establecimiento o los nuestros.

## Creación de un pago

Luego de que hayas hecho el flujo de captura de datos de tarjeta y cuentes con el `card_token` puedes proceder a generar el pago.

Para utilizar el modo _Gateway_ se agregan dos atributos al flujo de procesamiento de pagos:

1. `processing_mode`
2. `merchant_account_id`

#### processing\_mode

Es el modo que indica si procesaremos los pagos con tus números de establecimiento o los de Mercado Pago.

El default es `aggregator` e indica que procesaremos los pagos con los números de establecimiento de Mercado Pago.

Si quieres procesar con tus números de establecimiento y los tienes configurados, debes enviar `gateway`.

> _**Nota**_: Para solicitar el alta del modo Gateway y configuración de tus números de establecimientos debes hablar con tu ejecutivo de cuenta.

#### merchant\_account\_id

Puedes indicar por qué establecimiento quieres procesar tu pago utilizando `merchant_account_id` que es el ID de Mercado Pago que lo representa.

### Recibir un pago

Una vez que cuentas con el id del `card_token` puedes realizar el pago realizando un API call:

```php
<?php
require_once ('mercadopago.php');

// Setup your private key
$mp = new MP('SECRET_ACCESS_TOKEN');

$payment_data = array(
    "transaction_amount" => 100,
    "token" => "ff8080814c11e237014c1ff593b57b4d",
    "payment_method_id" => "visa",
    "payer" => array (
        "email" => "test_user_19653727@testuser.com"
    ),
    "processing_mode" => "gateway",
    "merchant_account_id" => "#hashMerchantAccountID"
);

$payment = $mp->post("/v1/payments", $payment_data);
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
```

Además de devolver los campos `processing_mode` y `merchant_account_id` se agregan dos más:

* `acquirer`: Nombre del adquiriente
* `merchant_number`: Número de establecimiento utilizado para procesar el pago


## Recibir un pago en cuotas

Para hacer uso de tus promociones bancarias que ofrece Mercado Pago, es importante que se envíe el campo `installments` y `processing_mode` en `gateway` al momento de crear un pago.

El campo `installments` corresponde a la cantidad de cuotas que el comprador elije.

Para obtener las promociones y cuotas disponibles:

```javascript
Mercadopago.getInstallments({
    "bin": bin,
    "amount": amount,
    "processing_mode": "gateway",
    "merchant_account_id": "#hashMerchantAccountID"
}, setInstallmentInfo);
```

El campo `merchant_account_id` es opcional.

La respuesta cuenta con la información de las cuotas disponibles indicando el valor a pagar:

```json
[
    {
        "payment_method_id": "amex",
        "payment_type_id": "credit_card",
        "processing_mode" : "gateway",
        "merchant_account_id" : "#hashMerchantAccountID-1",
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
        "merchant_account_id" : "#hashMerchantAccountID-2",
        ...
  }
]

```

> _**Nota**_: Debido a la Resolución E 51/2017 de la Secretaría de Comercio Argentina, sobre precios transparentes, es necesario que cumplas con ciertas exigencias adicionales.

Para crear el pago es importante enviar la cantidad de `installments` y el `processing_mode`:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');

$payment_data = array(
    "transaction_amount" => 100,
    "token" => "ff8080814c11e237014c1ff593b57b4d",
    "payer" => array (
        "email" => "test_user_19653727@testuser.com"
    ),
    "installments" => 3,
    "processing_mode" => "gateway",
    "payment_method_id" => "amex"
);

$payment = $mp->post("/v1/payments", $payment_data);
```

## Manejo de respuestas

Es **muy importante** comunicar correctamente los resultados recibidos al crear un pago. Esto ayudará a mejorar la conversión en los casos de rechazos, y evitar contracargos en los casos de transacciones aprobadas.

Te recomendamos leer el artículo sobre el [manejo de respuestas](handling-responses.es.md) y utilizar la comunicación recomendada en cada uno de los casos.

## Recibir una notificación del pago

Es importante que te enteres de cualquier actualización del estado de tu pago. Para esto se deben utilizar _Webhooks_.

Puedes leer todo para su implementación en el [artículo de Webhooks](#).

## Próximos pasos

### Recibe pagos con tarjetas guardadas

Puedes almacenar de forma segura las tarjetas de tus clientes y realizar cobros con una experiencia one-click-to-buy.

[Más información](customers-and-cards.es.md)