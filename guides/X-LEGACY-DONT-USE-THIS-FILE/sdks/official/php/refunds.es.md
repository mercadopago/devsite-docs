## Crear reembolso total

Puede crear un reembolso total con el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API [Crear reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/post). 

[[[
```php
<?php
 
MercadoPago\SDK::setAccessToken("YOUR_ACCESS_TOKEN");
 
$refund = new MercadoPago\Refund();
$refund->payment_id = 000000000;
$refund->save();

 
?>
```
]]]

## Crear reembolso parcial

Puede crear un reembolso parcial con el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API [Crear reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/post).

[[[
```php
<?php
 
MercadoPago\SDK::setAccessToken("YOUR_ACCESS_TOKEN");
 
$refund = new MercadoPago\Refund();
$refund->amount = 0.0;
$refund->payment_id = 0;
$refund->save();
 
?>
```
]]]

## Obtener reembolso específico

Puede obtener reembolsos específicos para ciertos pagos utilizando el SDK a continuación. Para detalles sobre los parámetros de solicitud, consulta la API de [Obtener reembolso específico](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds_refund_id/get).

[[[
```php
<?php
 $payment = MercadoPago\Payment::find_by_id($payment_id);
 $refunds = $payment->refund();
?>
```
]]]