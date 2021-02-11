---
  indexable: false
---

# Devoluções e cancelamentos

Existem diferentes situações que podem dar origem ao cancelamento de uma venda:

*	Se o status do pagamento for `pending` ou `in_process`, o valor ainda não foi cobrado do comprador, então pode-se realizar um cancelamento.

*	Se o `status` do pagamento for `approved`, significa que o comprador efetuou o pagamento, e a devolução poderá ser realizada caso necessário.

> WARNING
>
> AVISO
>
> Lembre que para pagamentos com QR e POINT você só pode realizar restituições, mas não cancelamentos.

## Cancelamentos

- Os cancelamentos podem ser realizados somente com status pending e in process
- É importante para meios de pagamento offline
- A expiração de um pagamento ocorre após 30 dias e o cancelamento é automático, o status final deles será cancelled/expired.

Somente é possível cancelar pagamentos que se encontrem com status `pending` ou `in_process`. Assim que forem cancelados, não poderão mais ser aprovados e o estoque pendente de confirmação poderá ser liberado.

Os cancelamentos são utilizados principalmente com **meios de pagamento em dinheiro**.

Embora os tickets fora de mídia expirem, o usuário pode gerá-los novamente inserindo a transação de sua conta no Mercado Pago. Para cancelá-los definitivamente, sem a possibilidade de gerá-los novamente, evitando problemas de retenção de estoque por exemplo, é necessário que você execute o cancelamento deles.

Para realizar o cancelamento, faça a seguinte requisição enviando o `status` `cancelled`:

[[[
```php
<?php

  $payment = MercadoPago\Payment::find_by_id($payment_id);
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
preapproval = MercadoPago::Payment.find_by_id(paymentId)
preapproval.status = "cancelled"
preapproval.update()
```
```curl
curl -X PUT \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
-d '{"status":"cancelled"}' \
'https://api.mercadopago.com/v1/payments/:ID'
```
]]]

**Response status code: 200 OK**

## Devoluções
----[mla]----
É possível devolver um pagamento dentro de **360 dias** a partir de sua data de aprovação.
------------
----[mlb]----
É possível devolver um pagamento dentro de **180 dias** a partir de sua data de aprovação.
------------
----[mlm]----
É possível devolver um pagamento dentro de **180 dias** a partir de sua data de aprovação.
------------
----[mlc]----
É possível devolver um pagamento dentro de **330 dias** a partir de sua data de aprovação.
------------
----[mlu, mpe, mco]----
É possível devolver um pagamento dentro de **90 dias** a partir de sua data de aprovação.
------------

Deve haver saldo suficiente disponível em sua conta para efetuar a devolução do valor do pagamento com sucesso. Caso contrário, obterá um erro `400 Bad Request`.

Caso o comprador tenha efetuado o pagamento com cartão, o valor será devolvido no próprio cartão.

Para pagamentos realizados a partir de outros meios, o valor a ser devolvido será depositado na conta Mercado Pago do comprador. Caso não possua uma conta, criaremos uma utilizando o e-mail que foi utilizado para realizar o pagamento.

### Efetue a devolução integral do pagamento

Para realizar a devolução integral, faça a seguinte requisição indicando o `payment_id`:

```php
<?php

$payment = MercadoPago\Payment::find_by_id($payment_id);
$payment->refund();

?>
```
```node
mercadopago.payment.refund(payment_id)
  .then(function (response) {
    // Resposta do processo ...
  })
  .catch(function (error) {
    // manipular o erro ...
  });
```
```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/payments/:ID/refunds'
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
  $payment = MercadoPago\Payment::find_by_id(paymentId);
  $payment->refund(10.5);
?>
```
```java
Payment payment = Payment.findById(paymentId);
payment.refund(10.5);
```
```node
mercadopago.payment.refundPartial({ payment_id: id, amount: Number(amount) })
  .then(function (response) {
    // Resposta do processo ...
  })
  .catch(function (error) {
    // manipular o erro ...
  });
```
```ruby
payment = MercadoPago::Payment.find_by_id(paymnentId)
payment.refund(10.5);
```
```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/payments/:ID/refunds' \
-d '{"amount":10.5}'
```
]]]


### Obtenha as devoluções realizadas

É possível consultar as devoluções de um pagamento específico através da seguinte requisição:

[[[
```php
<?php
  $payment = MercadoPago\Payment::find_by_id($payment_id);
  $refunds = $payment->refund();
?>
```
```java
Payment payment = Payment.findById(paymentId);
ArrayList<Refund> refunds = payment.refund();
```
```node
mercadopago.payment.refund(paymentId).then(function(data) {}
  //Do Stuff ..
});
```
```ruby
payment = MercadoPago::Payment.find_by_id(payment_id)
refunds = payment.refund()
```
```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/payments/:ID'
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
