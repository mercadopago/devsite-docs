# Altere os serviços

Cada número de estabelecimento comercial configurado na plataforma (`merchant_account_id`) será associado aos seus serviços correspondentes (`merchant_services`).

Os serviços utilizados podem ser visualizados na resposta de cada pagamento. Esses serviços [variam de acordo com o país](/guides/localization/gateway.pt.md) e ainda podem ser alterados em cada pagamento.

Veja o exemplo a seguir.

## Pagamento padrão

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

## Pagamento com serviços alterados

Suponha que não deseja executar o scoring ou a revisão manual para um pagamento:

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
