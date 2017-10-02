# Modify the services

Each merchant number configured on the platform (`merchant_account_id`) will be associated with its services (`merchant_services`).

The services used can be viewed in the response of each payment. These services [vary according to the country](/guides/localization/gateway.es.md) and they can also be modified in each payment.

See below an example

## Payment by default

### Request

```php
<?php
  require ('mercadopago.php');

  $mp = new MP('SECRET_ACCESS_TOKEN');

  $payment_data = array(
      "transaction_amount" => 100,
      "token" => "ff8080814c11e237014c1ff593b57b4d",
      "payer" => array (
          "email" => "test_user_19653727@testuser.com"
      ),
      "installments" => 3,
      "processing_mode" => "gateway",
      "payment_method_id" => "amex"
  );

  $payment = $mp->post("/v1/payments", $payment_data);
?>
```

### Response

```json
	{
		"merchant_services": {
			"fraud_scoring": true,
			"fraud_manual_review": true
		}
	}
```

## Payment with modified services

Pretend that you do not want to run scoring or manual review for a payment:

### Request

```php
<?php
  require ('mercadopago.php');

  $mp = new MP('SECRET_ACCESS_TOKEN');

  $payment_data = array(
      "transaction_amount" => 100,
      "token" => "ff8080814c11e237014c1ff593b57b4d",
      "payer" => array (
          "email" => "test_user_19653727@testuser.com"
      ),
      "installments" => 3,
      "processing_mode" => "gateway",
      "merchant_services": {
      	"fraud_manual_review": false
      },
      "payment_method_id" => "amex"
  );

  $payment = $mp->post("/v1/payments", $payment_data);
?>
```

### Response

```json
	{
		"merchant_services": {
			"fraud_scoring": true,
			"fraud_manual_review": false
		}
	}
```
