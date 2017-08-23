# Cancelaciones y devoluciones

Existen diferentes situaciones en las que puedes querer anular una venta:

* Si el status del pago es `pending`o `in_process` el dinero aún no se le ha cobrado al comprador, por lo que debes efectuar una cancelación.

* Si el `status` del pago es `approved` entonces tu comprador pudo efectuarlo y deberás realizar una devolución.



## Cancelaciones

- Las cancelaciones se pueden hacer solo con pending e in process
- Es importante para medios off
- Los medios off no se vencen solos, tenes que cancelarlos

Sólo puedes cancelar pagos que estén en estado `pending` o `in_process`. Cuando los canceles, ya no se aprobarán y podrás liberar el stock que tengas pendiente de confirmación.

Las cancelaciones se utilizan principalmente con **medios en efectivo**.

Estos no vencen automáticamente, por lo que es necesario que ejecutes su cancelación.

Para realizar la cancelación, realiza el siguiente request enviando el `status` en `cancelled`:

[[[
```php
<?php 

  $payment = MercadoPago\Preapproval::load($payment_id);
  $payment->status = "cancelled";
  $payment->update();
  
?>
```
```java
Payment payment = Payment.load(paymentId);
payment.setStatus("cancelled");
payment.update();

```
```node

mercadopago.payment.update({
  id: paymentId,
  status: "cancelled"
}).then().catch();

```
```ruby
preapproval = MercadoPago::Preapproval.load(paymentId)
preapproval.status = "cancelled"
preapproval.update()
```
```curl
curl -X PUT \
-H "Content-Type: application/json" \
-d '{"status":"cancelled"}' \
'https://api.mercadopago.com/v1/payments/:ID?access_token=ACCESS_TOKEN'
```
]]]
 
**Response status code: 200 OK**

## Devoluciones

Puedes devolver un pago dentro de los **90 días** desde su acreditación.

Debes poseer suficiente dinero disponible en tu cuenta para devolver el monto del pago satisfactoriamente. De lo contrario obtendrás un error `400 Bad Request`.

Si tu comprador realizó el pago con tarjeta, la devolución será reintegrada en la misma.

Si el pago fue realizado con otro medio, se reintegrará en la cuenta de Mercado Pago del comprador. En caso que no tenga una cuenta, crearemos una utilizando su e-mail.


### Realiza la devolución total del pago

Para realizar la devolución total, realiza el siguiente request indicando el `payment_id`:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');

$refund = $mp->post("/v1/payments/". $PAYMENT_ID."/refunds");
?>
```
> NOTE
> 
> Nota
>
> El pago quedará con `status` en `refunded`.


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

Puedes realizar hasta 20 devoluciones parciales a un mismo pago. Una vez efectuada, el `status` del pago será `approved` con un `status_detail` en `partially_refunded`.

Debes indicar el monto a devolver.

[[[

```php
<?php
  $payment = MercadoPago\Payment::load(paymentId);
  $payment->refund(10.5);
?>
```
```java
Payment payment = Payment.load(paymentId);
payment.refund(10.5);
```
```node
mercadopago.payment.refund(paymentId).then(function(data) {}
  //Do Stuff ..
});
```
```ruby
payment = MercadoPago::Payment.load(paymnentId)
payment.refund(10.5);
```
]]]


### Obtén las devoluciones realizadas

Puedes ver los refunds realizados para un pago especifico con el siguiente request:

[[[
```php
<?php
  $payment = MercadoPago\Payment::load($payment_id);
  $refunds = $payment->refunds();
?>
```
```java
Payment payment = Payment.load(paymentId);
ArrayList<Refund> refunds = payment.refunds();
```
```node
mercadopago.payment.refund(paymentId).then(function(data) {}
  //Do Stuff ..
});
```
```ruby
payment = MercadoPago::Payment.load(payment_id)
refunds = payment.refunds()
```
]]]



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
