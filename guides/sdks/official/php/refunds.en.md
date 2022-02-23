## Create full refund

Create full refund for a specific payment. 

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

## Create partial refund

Create a partial refund for a specific payment. 

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

## Get specific refund

Get a specific Refund from a specific payment.

[[[
```php
<?php
 $payment = MercadoPago\Payment::find_by_id($payment_id);
 $refunds = $payment->refund();
?>
```
]]]


