# Criar reembolso total

É possível criar um reembolso total utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post). 

[[[
```php
<?php
 $refund_client = new PaymentRefundClient();
 $refund_client->refundTotal(123456789);
?>
```
]]]

# Criar reembolso parcial

É possível criar um reembolso parcial utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post). 

[[[
```php
<?php
 $refund_client = new PaymentRefundClient();
 $refund_client->refund(123456789, 100);
?>
```
]]]

# Obter reembolso específico

É possível obter reembolsos específicos de determinados pagamentos utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter reembolso específico](/developers/pt/reference/chargebacks/_chargebacks_id/get).

[[[
```php
<?php
  $refund_client = new PaymentRefundClient();
  $refund_client->get('123456789', '1234');
?>
```
]]]

# Obter lista de reembolso

É possível consultar todos os reembolsos para um pagamento específico utilizando o SDK abaixo. Para detalhes dos parâmetros de requisição, acesse a API [Obter lista de reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/get).

[[[
```php
<?php
  $refund_client = new PaymentRefundClient();
  $refund_client->list('123456789');
?>
```
]]]
