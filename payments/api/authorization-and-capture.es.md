# Autorización y captura

> Pre-requisitos:
> 
> * Tener implementado el [procesamiento de pagos con tarjeta](receiving-payment-by-card.es.md).
> 
> Disponible solamente en:
> 
> * Argentina (Visa, Mastercard, American Express, Naranja, Cencosud, Cabal, Diners, Argencard y Tarjeta Shopping)
> * Brasil
> * Perú

Mercado Pago ofrecé la posibilidad de realizar una autorización antes de generar una captura.

La autorización es una reserva de fondos en la tarjeta de tu comprador. Esto significa que al realizar una autorización todavía no se le cobró a tu cliente. Solo cuando se realice una captura el cliente verá el pago.

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

Ten en cuenta que estos fondos no podrán ser utilizados por tu comprador hasta que no sean capturados, por lo cuál recomendamos realizar la captura por el menor tiempo posible.

> **Consideraciones**:   
> 
> * La reserva tendrá una validez de [AR:7][BR:5][PE:22] días. Si no la capturas hasta ese momento será cancelada.
> * La reserva también puede resultar rechazada, como cualquier otro pago normal.

## Capturar un pago

WIP

### Capturar un pago por un monto menor al reservado
