---
sites_supported:
  - mla
  - mco
  - global
---

# Modificando los servicios

Cada número de comercio configurado en la plataforma (`merchant_account_id`) tendrá asociado sus correspondientes servicios (`merchant_services`).

Los servicios utilizados pueden verse en la respuesta de cada pago. Dichos servicios [varían según el país](/guides/localization/gateway.es.md) y adicionalmente pueden ser modificados en cada pago.

> NOTE
>
> Nota
>
> Prender los servicios tiene un costo adicional asociado. Por cualquier duda consultar al asesor de la cuenta.

A continuación se puede ver un ejemplo

## Pago por defecto

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

## Pago con servicios modificados

Supongamos que para un pago no se quiere correr ni _scoring_ ni revisión manual:

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
