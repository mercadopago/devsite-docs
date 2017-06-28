---
  sites_supported:
      - mla
      - mlb 
      - mpe
---

# Autorización y captura

> WARNING
> 
> Pre-requisitos
>
> * Tener implementado el [procesamiento de pagos con tarjeta](receiving-payment-by-card.es.md).
> 
> Disponible solamente en:
> 
> * Argentina (Visa, Mastercard, American Express, Naranja, Cencosud, Cabal, Diners, Argencard y Tarjeta Shopping)
> * Brasil
> * Perú

Mercado Pago ofrecé la posibilidad de realizar una autorización antes de generar una captura.

La autorización es una reserva de fondos en la tarjeta de tu comprador. Esto significa que al realizarla todavía no se le generó un cobró a tu cliente en su tarjeta. Solo cuando se realice una captura el cliente verá el pago.

## Realizar una reserva de fondos

Realizar una autorización o reserva de los fondos es como realizar un pago, pero agregando el atributo `capture=false`:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('ACCESS_TOKEN');

$payment_data = array(
	"transaction_amount" => 100,
	"token" => "ff8080814c11e237014c1ff593b57b4d",
	"installments" => 1,
	"payment_method_id" => "visa",
	"payer" => array (
		"email" => "test_user_19653727@testuser.com"
	),
	"capture" => false
);

$payment = $mp->post("/v1/payments", $payment_data);
?>
```

Respuesta:

```json
{
  "id": PAYMENT_ID,
  ...
  "status": "authorized",
  "status_detail": "pending_capture",
  ...
  "captured": false,
  ...
}
```

La respuesta indica que el pago se encuentra **autorizado** y **pendiente de captura**.

Ten en cuenta que estos fondos no podrán ser utilizados por tu comprador hasta que no sean capturados, por lo cuál recomendamos realizar la captura en el menor tiempo posible.

> **Consideraciones**:   
> 
> * La reserva tendrá una validez de [AR:7][BR:5][PE:22] días. Si no la capturas hasta ese momento será cancelada.
> * La reserva también puede resultar rechazada o quedar pendiente, como cualquier otro pago normal.

## Capturar un pago

Para poder cobrarle a tu cliente es necesario capturar los fondos que reservaste.

Es posible realizar la captura por el monto total o de forma parcial.

### Capturar el monto total de una reserva

Para hacer la captura por el monto total solo debes enviar el atributo `capture` en **true** en un request `HTTP PUT`.

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('ACCESS_TOKEN');

$payment_data = array(
	"capture" => true
);

$payment = $mp->put("/v1/payments/PAYMENT_ID", $payment_data);
?>
```

El request actualizará el status a `approved` con un `status_detail=accredited`:

```json
{
  ...
  "status": "approved",
  "status_detail": "accredited",
  ...
  "captured": true,
  ...
}
```

Siempre que no especifiques un monto se capturará el monto total reservado.

> _**Nota**_: Si la reserva había sido exitosa, la operación de captura siempre será exitosa también.

### Capturar un pago por un monto menor al reservado

> En Argentina solo disponible para Visa y American Express

Si decides capturar por un monto menor al reservado, es necesario que además de enviar el atributo `capture`, envies el atributo `transaction_amount` con el nuevo monto.

```php
<?php
  require_once ('mercadopago.php');

  $mp = new MP('ACCESS_TOKEN');

  $payment_data = array(
  	"transaction_amount" => 75,
  	"capture" => true
  );

  $payment = $mp->put("/v1/payments/PAYMENT_ID", $payment_data);
?>

```

Respuesta:

```json
{
  ...
  "status": "approved",
  "status_detail": "accredited",
  ...
  "transaction_amount": 75,
  ...
  "captured": true,
  ...
}
```

> _**Nota**_: No es posible capturar un monto mayor al reservado, para eso es necesario realizar cancelar la reserva y generar una nueva.


## Cancelar una reserva

Si no harás uso del dinero reservado, es importante que canceles la reserva para liberar el dinero de la tarjeta.

Para hacer esto debes actualizar el atributo `status` del pago a un estado `cancelled`:

```php
<?php
  require_once ('mercadopago.php');

  $mp = new MP('ACCESS_TOKEN');

  $payment_data = array(
  	"status" => "cancelled"
  );

  $payment = $mp->put("/v1/payments/PAYMENT_ID", $payment_data);
?>
```

Respuesta:

```json
{
  ...
  "status": "cancelled",
  "status_detail": "by_collector",
  ...
  "captured": false,
  ...
}
```

> _**Nota**_: Las reservas que no hayan sido capturadas dentro del plazo mencionado, serán automáticamente canceladas. Serás notificado vía [Webhooks](webhooks.es.md) del cambio de estado del pago.
