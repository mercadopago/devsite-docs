# Cancelamentos e Devoluções

Existem diferentes situações que podem dar origem ao cancelamento de uma venda:

	•	Se o status do pagamento for `pending` ou `in_process`, o valor ainda não foi cobrado do comprador, então deve-se realizar um cancelamento.

	•	Se o `status` do pagamento for `approved`, significa que o comprador efetuou o pagamento, e a devolução deverá ser realizada.


## Cancelamentos

- Os cancelamentos podem ser realizados somente com status pending e in process
- É importante para meios de pagamento offline
- Os meios de pagamento offline não expiram sozinhos, devem ser cancelados.

Somente é possível cancelar pagamentos que se encontrem com status `pending` ou `in_process`. Assim que forem cancelados, não poderão mais ser aprovados e o estoque pendente de confirmação poderá ser liberado.

Os cancelamentos são utilizados principalmente com **meios de pagamento em dinheiro**.

Eles não expiram automaticamente, portanto, é necessário que realize seu cancelamento.

Para realizar o cancelamento, faça a seguinte requisição enviando o `status` `cancelled`:

[[[
```php
<?php

  $payment = MercadoPago\Preapproval::load($payment_id);
  $payment->status = "cancelled";
  $payment->update();

?>
```
```java
Payment payment = Payment.load(paymentId);
payment.setStatus("cancelled");
payment.update();

```
```node

mercadopago.payment.update({
  id: paymentId,
  status: "cancelled"
}).then().catch();

```
```ruby
preapproval = MercadoPago::Preapproval.load(paymentId)
preapproval.status = "cancelled"
preapproval.update()
```
```curl
curl -X PUT \
-H "Content-Type: application/json" \
-d '{"status":"cancelled"}' \
'https://api.mercadopago.com/v1/payments/:ID?access_token=ACCESS_TOKEN'
```
]]]

**Response status code: 200 OK**

## Devoluções
É possível devolver um pagamento dentro de **90 dias** a partir de sua data de aprovação.

Deve haver saldo suficiente disponível em sua conta para efetuar a devolução do valor do pagamento com sucesso. Caso contrário, obterá um erro `400 Bad Request`.

Caso o comprador tenha efetuado o pagamento com cartão, o valor será devolvido no próprio cartão.
Para pagamentos realizados a partir de outros meios, o valor a ser devolvido será depositado na conta Mercado Pago do comprador. Caso não possua uma conta, criaremos uma utilizando seu e-mail.

### Efetue a devolução integral do pagamento

Para realizar a devolução integral, faça a seguinte requisição indicando o `payment_id`:

```php
<?php
require ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');

$refund = $mp->post("/v1/payments/". $PAYMENT_ID."/refunds");
?>
```
> NOTE
>
> Nota
>
> O pagamento permanecerá com o `status` `refunded`.


**Response status code: 201 Created**

```json
{
	"id": REFUND_ID,
	"payment_id": ID,
	"amount": 73.48,
	"metadata": {},
	"source": {
		"id": "130379930",
		"name": "Firstname Lastname",
		"type": "collector"
	},
	"date_created": "2014-12-11T11:26:40.537-04:00"
}
```

### Efetue uma devolução parcial

Pode-se realizar até 20 devoluções parciais de um mesmo pagamento. Assim que concluída, o `status` do pagamento será `approved` com um status_detail em `partially_refunded`.

Deve-se indicar o valor a ser devolvido.

[[[

```php
<?php
  $payment = MercadoPago\Payment::load(paymentId);
  $payment->refund(10.5);
?>
```
```java
Payment payment = Payment.load(paymentId);
payment.refund(10.5);
```
```node
mercadopago.payment.refund(paymentId).then(function(data) {}
  //Do Stuff ..
});
```
```ruby
payment = MercadoPago::Payment.load(paymnentId)
payment.refund(10.5);
```
]]]


### Obtenha as devoluções realizadas

É possível consultar as devoluções de um pagamento específico através da seguinte requisição:

[[[
```php
<?php
  $payment = MercadoPago\Payment::load($payment_id);
  $refunds = $payment->refunds();
?>
```
```java
Payment payment = Payment.load(paymentId);
ArrayList<Refund> refunds = payment.refunds();
```
```node
mercadopago.payment.refund(paymentId).then(function(data) {}
  //Do Stuff ..
});
```
```ruby
payment = MercadoPago::Payment.load(payment_id)
refunds = payment.refunds()
```
]]]



Resposta:

```json
{
    "id": PAYMENT_ID,
    ...

    "refunds": [
      {
        "id": 111,
        "payment_id": PAYMENT_ID,
        "amount": 16.98,
        "metadata": {
        },
        "source": {
            "id": "130379930",
            "name": "Firstname Lastname",
            "type": "collector"
        },
        "date_created": "2014-12-04T17:00:03.000-04:00",
        "unique_sequence_number": null
      }
    ]
}
```
