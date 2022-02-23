# Create cancellation

Cancel a sale for a specific payment.

[[[
```php
<?php
 
MercadoPago\SDK::setAccessToken("YOUR_ACCESS_TOKEN");
$payment_id = 000000000;
$payment = MercadoPago\Payment::find_by_id($payment_id);
$payment->status = "cancelled";
$payment->update();
 
?>
```
]]]