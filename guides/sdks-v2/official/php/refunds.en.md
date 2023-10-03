# Create full refund

You can create a full refund using the SDK below. For details on the request parameters, check the [Create refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/post) API.

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

# Create partial refund

You can create a partial refund using the SDK below. For details on the request parameters, check the [Create refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/post) API.

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

# Get specific refund

You can get a specific refund of certain payments using the SDKs below. For details on the request parameters, check the [Get specific refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds_refund_id/get) API.

[[[
```php
<?php
 $payment = MercadoPago\Payment::find_by_id($payment_id);
 $refunds = $payment->refund();
?>
```
]]]