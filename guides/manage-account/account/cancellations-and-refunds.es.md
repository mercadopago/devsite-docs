---
  indexable: false
---

# Devoluciones y cancelaciones

Existen diferentes situaciones en las que puedes querer anular una venta:

* Si el status del pago es `pending`o `in_process` el dinero aún no se le ha cobrado al comprador, por lo que puedes efectuar una cancelación.

* Si el `status` del pago es `approved` entonces tu comprador pudo efectuarlo y podrás realizar una devolución si lo deseas.

> WARNING
>
> ADVERTENCIA
>
> * Ten en cuenta que para pagos con QR y POINT, sólo puedes efectuar devoluciones pero no cancelaciones.

## Cancelaciones

- Las cancelaciones se pueden hacer solo con _pending_ e _in process_.
- Es importante para medios _off_.
- La expiración de un pago se produce a los 30 días y la cancelación es automática, el status final del  mismo será cancelled/expired.

Sólo puedes cancelar pagos que estén en estado `pending` o `in_process`. Cuando los canceles, ya no se aprobarán y podrás liberar el _stock_ que tengas pendiente de confirmación.

Las cancelaciones se utilizan principalmente con **medios en efectivo**.

Si bien los tickets de los medios de pago en efectivo tienen vencimiento, el usuario puede volver a generarlos ingresando a la transacción de su cuenta de Mercado Pago. Para cancelarlos definitivamente, sin posibilidad de volver a generarlos, evitando problemas de retención de stock por ejemplo, es necesario que ejecutes su cancelación.


Para realizar la cancelación, realiza el siguiente request enviando el `status` en `cancelled`:

[[[
```php
<?php

  $payment = MercadoPago\Payment::find_by_id($payment_id);
  $payment->status = "cancelled";
  $payment->update();

?>
```
```java
Payment payment = Payment.findById(paymentId);
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
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
request = {
  status: 'cancelled'
}
result = sdk.payment.update(payment_id, request)
```
```python
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "status": "cancelled"
}

payment_response = sdk.payment().update(payment_id, payment_data)
payment = payment_response["response"]
```
```curl
curl -X PUT \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
-d '{"status":"cancelled"}' \
'https://api.mercadopago.com/v1/payments/:ID'
```
]]]

**Response status code: 200 OK**

## Devoluciones
----[mla]----
Puedes devolver un pago dentro de los **360 días** desde su acreditación.
------------
----[mlb]----
Puedes devolver un pago dentro de los **180 días** desde su acreditación.
------------
----[mlm]----
Puedes devolver un pago dentro de los **180 días** desde su acreditación.
------------
----[mlc]----
Puedes devolver un pago dentro de los **330 días** desde su acreditación.
------------
----[mlu, mpe]----
Puedes devolver un pago dentro de los **90 días** desde su acreditación.
------------
----[mco]----
Puedes devolver un pago dentro de los **180 días** desde su acreditación.
------------

Debes poseer suficiente dinero disponible en tu cuenta para devolver el monto del pago satisfactoriamente. De lo contrario obtendrás un error `400 Bad Request`.

Si tu comprador realizó el pago con tarjeta, la devolución será reintegrada en la misma.

Si el pago fue realizado con otro medio, se reintegrará en la cuenta de Mercado Pago del comprador. En caso que no tenga una cuenta, crearemos una utilizando el e-mail que utilizó para realizar la compra.


### Realiza la devolución total del pago

Para realizar la devolución total, realiza el siguiente _request_ indicando el `payment_id`:

[[[
```php
<?php

$payment = MercadoPago\Payment::find_by_id($payment_id);
$payment->refund();

?>
```
```node
mercadopago.payment.refund(payment_id)
  .then(function (response) {
    //Procesar respuesta...
  })
  .catch(function (error) {
    //Manejar el error...
  });
```
```python
refund_response = sdk.refund().create(payment_id)
refund = refund_response["response"]
```
```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/payments/:ID/refunds'
```
]]]

> NOTE
>
> Nota
>
> El pago quedará con `status` en `refunded`.


**Response status code: 201 Created**

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

----[mla, mpe, mlm, mco, mlu, mlb, mlc]----

### Realiza una devolución parcial

Puedes realizar hasta 20 devoluciones parciales a un mismo pago. Una vez efectuada, el `status` del pago será `approved` con un `status_detail` en `partially_refunded`.

Debes indicar el monto a devolver.

[[[

```php
<?php
  $payment = MercadoPago\Payment::find_by_id(paymentId);
  $payment->refund(10.5);
?>
```
```java
Payment payment = Payment.findById(paymentId);
payment.refund(10.5);
```
```node
mercadopago.payment.refundPartial({ payment_id: id, amount: Number(amount) })
  .then(function (response) {
    //Procesar respuesta...
  })
  .catch(function (error) {
    //Manejar el error...
  });
```
```python
refund_data = {
  "amount": 10.5
}

refund_response = sdk.refund().create(payment_id, refund_data)
refund = refund_response["response"]
```
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
request = {
  amount: 10.5
}
result = sdk.refund.create(payment_id, request)
```
```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/payments/:ID/refunds' \
-d '{"amount":10.5}'
```
]]]

------------

### Obtén las devoluciones realizadas

Puedes ver los _refunds_ realizados para un pago específico con el siguiente _request_:

[[[
```php
<?php
  $payment = MercadoPago\Payment::find_by_id($payment_id);
  $refunds = $payment->refund();
?>
```
```java
Payment payment = Payment.findById(paymentId);
ArrayList<Refund> refunds = payment.refund();
```
```node
mercadopago.payment.refund(paymentId).then(function(data) {}
  //Do Stuff ..
});
```
```python
refunds_response = sdk.refund().list_all(payment_id)
refunds = refunds_response["response"]
```
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
result = sdk.refund.list(payment_id)
refunds = result[:response]
```
```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/payments/:ID'
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
