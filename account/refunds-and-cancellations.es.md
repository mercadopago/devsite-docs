# Devoluciones y cancelaciones

Existen diferentes situaciones en las que puedes querer cancelar una venta, ya sea porque no has podido hacer la entrega del producto, porque tu comprador solicitó la devolución del dinero o bien porque el pago quedó en estado pendiente y tu modelo de negocio sólo permite guardar stock por un plazo determinado.

Si el `status`del pago es `approved` entonces tu comprador pudo efectuar el pago y tu has recibido el dinero. Por lo tanto, para reversar la transacción deberás efectuar una devulución. También puedes devolver un monto parcial de un pago.
Todas las comisiones e intereses cobrados serán devueltos total o parcialmente según corresponda.

Si el status del pago es `pending`o `in_process` el dinero aún no se le ha cobrado al comprador, por lo que se debe proceder a efectuar una cancelación del mismo evitando que se pueda concretar el pago. Este tipo se utiliza principalmente en el caso que tengas **ventas con medios offline** (cupones para pagar en efectivo) y sólo deses dar un plazo determinado para recibir el pago.


## Devoluciones

Puedes devolver un pago dentro de los **90 días** desde su acreditación.
Debes poseer suficiente dinero disponible en tu cuenta para devolver el monto del pago satisfactoriamente. De lo contrario obtendrás un error `400 Bad Request`.
Si tu comprador realizó el pago con tarjeta, la devolución será reintegrada en el resumen de la misma. 
Si el pago fue realizado con otro medio, se reintegrará en la cuenta de Mercado Pago del comprador. En caso que no tenga una cuenta, crearemos una bajo su mail para hacer el reintegro.


# (TODAS ESTAS NO LAS PONDRÍA,O LAS INCLUIRÍA EN LA PARTE DE REGIONAL)
- Por el momento, no es posible hacer devoluciones parciales a pagos de artículos de Mercado Libre (`marketplace=MELI`).
- Por el momento, no es posible hacer devoluciones parciales a pagos realizados con la tarjeta de Mercado Libre de Brasil (`payment_method_id=melicard`).
- Por el momento, no es posible hacer devoluciones parciales a pagos recurrentes de Argentina (`operation_type=recurring_payment`).

### Realiza la devolución total del pago

Para realizar la devolución, utiliza las [credenciales de tu aplicación](). El pago quedará en estado `refunded`.

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');

$refund = $mp->post("/v1/payments/". $PAYMENT_ID."/refunds");
?>
```

**Response status code: 201 Created**

```json
{
	"id": REFUND_ID,
	"payment_id": ID,
	"amount": 73.48,
	"metadata": {},
	"source": {
		"id": "130379930",
		"name": "Firstname Lastname",
		"type": "collector"
	},
	"date_created": "2014-12-11T11:26:40.537-04:00"
}
```

### Realiza una devolución parcial

Puedes realizar hasta 20 devoluciones parciales a un mismo pago. Una vez efectuada, el estado del pago será `approved:partially_refunded`

Indica el monto que 

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');
$refund_data = array(
	"amount" => 10.5
);

$refund = $mp->post("/v1/payments/". $PAYMENT_ID ."/refunds", $refund_data);
?>
```

### Obtén las devoluciones realizadas

Puedes ver los refunds realizados con el siguiente request:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');

$refund = $mp->get("/v1/payments/". $PAYMENT_ID ."/refunds");
?>
```

Respuesta:

```json
{
    "id": PAYMENT_ID,
    ...

    "refunds": [
      {
        "id": 111,
        "payment_id": PAYMENT_ID,
        "amount": 16.98,
        "metadata": {
        },
        "source": {
            "id": "130379930",
            "name": "Firstname Lastname",
            "type": "collector"
        },
        "date_created": "2014-12-04T17:00:03.000-04:00",
        "unique_sequence_number": null
      }
    ]
}
```


## Cancelaciones

Sólo puedes cancelar pagos que aún no han sido aprobados, es decir que no han sido cobrados a tu comprador por lo que se encuentran pendientes o en proceso. Cuando los cancelas, ya no podrán aprobarse y podrs liberar el stock que tenas pendiente de confirmación.

Para realizar la cancelación, utiliza las [credenciales de tu aplicación]():


```curl
curl -X PUT \
-H "Content-Type: application/json" \
-d '{"status":"cancelled"}' \
'https://api.mercadopago.com/v1/payments/:ID?access_token=ACCESS_TOKEN'
```

**Response status code: 200 OK**


