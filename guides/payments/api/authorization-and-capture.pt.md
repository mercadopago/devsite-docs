---
  sites_supported:
      - mla
      - mlb
      - mpe
      - global
---

# Autorização e captura

> WARNING
>
> Pré-requisitos
>
> * Possuir o [processamento de pagamentos com cartão](/guides/payments/api/receiving-payment-by-card.pt.md) implementado.
>
> Disponível apenas nos seguintes países:
>
> * Argentina (Visa, Mastercard, American Express, Naranja, Cencosud, Cabal, Diners, Argencard y Tarjeta Shopping)
> * Brasil
> * Peru

O Mercado Pago oferece a possibilidade de realizar uma autorização antes de gerar uma captura.

A autorização é uma reserva de valores no cartão do seu comprador. Isto significa que, ao realizá-la, ainda não foi gerada uma cobrança no cartão do seu cliente. Somente quando a captura for realizada, o cliente visualizará o pagamento.

## Faça uma reserva de valores

Fazer uma autorização ou reserva de valores é como fazer um pagamento, porém acrescentando o atributo `capture=false`:

[[[
```php
<?php  

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();

  $payment->transaction_amount = 100;
  $payment->token = "ff8080814c11e237014c1ff593b57b4d";
  $payment->description = "Title of what you are paying for";
  $payment->installments = 1;
  $payment->payment_method_id = "visa";
  $payment->payer = array(
    "email" => "test_user_19653727@testuser.com"
  );

  $payment->capture=false;

  $payment->save();

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100)
      .setToken('ff8080814c11e237014c1ff593b57b4d')
      .setDescription('Title of what you are paying for')
      .setInstallments(1)
      .setPaymentMethodId("visa")
      .setPayer(new Payer("test_user_19653727@testuser.com"))
      .setCapture(false);

payment.save();

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: 'Title of what you are paying for',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: 'test_user_3931694@testuser.com'
  },
  capture: false
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = 'Title of what you are paying for'
payment.installments = 1
payment.payment_method_id = "visa"
payment.payer = {
  email: "test_user_19653727@testuser.com"
}
payment.capture = false
payment.save()

```
]]]


Resposta:

```json
{
  "id": PAYMENT_ID,
  ...
  "status": "authorized",
  "status_detail": "pending_capture",
  ...
  "captured": false,
  ...
}
```

A resposta indica que o pagamento foi **autorizado** e está **aguardando a captura**.

Tenha em mente que este valor não poderá ser utilizado pelo comprador enquanto não for capturado, por isso recomendamos realizar a captura o mais rápido possível.


> WARNING
>
> Considerações
>
----[mlb]----
> * A reserva será válida por 5 dias. Se não efetuar a captura dentro desse prazo, ela será cancelada.
------------
----[mla]----
> * A reserva será válida por 7 dias. Se não efetuar a captura dentro desse prazo, ela será cancelada.
------------
----[mpe]----
> * A reserva será válida por 22 dias. Se não efetuar a captura dentro desse prazo, ela será cancelada.
------------
> * A reserva também pode ser recusada ou ficar pendente, assim como qualquer outro pagamento.

## Capture um pagamento

Para realizar a cobrança ao seu cliente, é necessário capturar os valores reservados.

É possível realizar a captura do valor total ou parcial.

### Capture o valor total de uma reserva

Para capturar o valor total, você deve apenas enviar o atributo `capture` em **true** em uma requisição `HTTP PUT`.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = MercadoPago\Payment::find_by_id($payment_id);
  $payment->capture = true;
  $payment->update();

?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");


Payment payment = Payment.load(paymentId);
payment.capture = true;
payment.update();


```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);


```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.load(paymentId)
payment.capture=true
payment.update()

```
]]]

A requisição atualizará o status `approved` com `status_detail=accredited`:

```json
{
  ...
  "status": "approved",
  "status_detail": "accredited",
  ...
  "captured": true,
  ...
}
```

Quando não especificar um valor, será realizada a captura do valor total reservado.

> NOTE
>
> Nota
>
> Se a reserva for realizada com sucesso, a captura também será efetuada com sucesso.

### Capture um pagamento por um valor inferior ao da reserva


----[mla]----
> Disponível apenas para Visa e American Express na Argentina.
------------

Caso decida capturar um valor inferior ao reservado, é necessário que, além de enviar o atributo `capture`, envie o atributo `transaction_amount` com o novo valor.


[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = MercadoPago\Payment::find_by_id($payment_id);
  $payment->transaction_amount = 75;
  $payment->capture = true;
  $payment->update();

?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");


Payment payment = Payment.load(paymentId);
payment.transaction_amount = 75;
payment.capture = true;
payment.update();


```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);


```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.load(paymentId)
payment.transaction_amount = 75
payment.capture=true
payment.update()

```
]]]


Resposta:

```json
{
  ...
  "status": "approved",
  "status_detail": "accredited",
  ...
  "transaction_amount": 75,
  ...
  "captured": true,
  ...
}
```

> NOTE
>
> Nota
>
> O valor da captura não pode ser maior que o valor reservado, para isso é necessário cancelar a reserva e gerar uma nova.


## Cancele uma reserva

Se não for utilizar a quantia reservada, é importante cancelar a reserva para liberar o saldo no cartão.

Para isso, atualize o atributo `status` do pagamento para um status `cancelled`:

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = MercadoPago\Payment::find_by_id($payment_id);
  $payment->status = "cancelled";
  $payment->update();

?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");


Payment payment = Payment.load(paymentId);
payment.status = "canceled";
payment.update();


```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);


```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.load(paymentId)
payment.status = "canceled"
payment.update()

```
]]]

Resposta:

```json
{
  ...
  "status": "cancelled",
  "status_detail": "by_collector",
  ...
  "captured": false,
  ...
}
```
> NOTE
>
> Nota
>
> As reservas que não forem capturadas dentro do prazo mencionado serão automaticamente canceladas. Será feita uma notificação via [Webhooks](/guides/notifications/webhooks.pt.md) da mudança de status do pagamento.
