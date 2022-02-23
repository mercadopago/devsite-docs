## Criar reembolso total

Criar um reembolso total para um pagamento específico. 

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

## Criar reembolso parcial

Criar um reembolso parcial para um pagamento específico. 

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

## Obter reembolso específico

Consultar reembolso específico de determinado pagamento.

[[[
```php
<?php
 $payment = MercadoPago\Payment::find_by_id($payment_id);
 $refunds = $payment->refund();
?>
```
]]]