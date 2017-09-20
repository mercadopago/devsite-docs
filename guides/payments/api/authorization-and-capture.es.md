---
  sites_supported:
      - mla
      - mlb
      - mpe
      - global
---

# Autorización y captura

> WARNING
>
> Pre-requisitos
>
> * Tener implementado el [procesamiento de pagos con tarjeta](/guides/payments/api/receiving-payment-by-card.es.md).
>
> Disponible solamente en:
>
> * Argentina (Visa, Mastercard, American Express, Naranja, Cencosud, Cabal, Diners, Argencard y Tarjeta Shopping)
> * Brasil
> * Perú

Mercado Pago ofrece la posibilidad de realizar una autorización antes de generar una captura.

La autorización es una reserva de fondos en la tarjeta de tu comprador. Esto significa que al realizarla todavía no se le generó un cobro a tu cliente en su tarjeta. Solo cuando se realice una captura el cliente verá el pago.

## Realizar una reserva de fondos

Realizar una autorización o reserva de los fondos es como realizar un pago, pero agregando el atributo `capture=false`:

[[[
```php
<?php  

  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

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


Respuesta:

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

La respuesta indica que el pago se encuentra **autorizado** y **pendiente de captura**.

Ten en cuenta que estos fondos no podrán ser utilizados por tu comprador hasta que no sean capturados, por lo cual recomendamos realizar la captura en el menor tiempo posible.

> WARNING
>
> Consideraciones
>
> * La reserva tendrá una validez de [AR:7][BR:5][PE:22] días. Si no la capturas hasta ese momento será cancelada.
> * La reserva también puede resultar rechazada o quedar pendiente, como cualquier otro pago normal.

## Capturar un pago

Para poder cobrarle a tu cliente es necesario capturar los fondos que reservaste.

Es posible realizar la captura por el monto total o de forma parcial.

### Capturar el monto total de una reserva

Para hacer la captura por el monto total solo debes enviar el atributo `capture` en **true** en un _request_ `HTTP PUT`.

[[[
```php
<?php

  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

  $payment = MercadoPago\Payment::load($payment_id);
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

El _request_ actualizará el _status_ a `approved` con un `status_detail=accredited`:

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

Siempre que no especifiques un monto se capturará el monto total reservado.

> NOTE
>
> Nota
>
> Si la reserva había sido exitosa, la operación de captura siempre será exitosa también.

### Capturar un pago por un monto menor al reservado

> En Argentina solo disponible para Visa y American Express

Si decides capturar por un monto menor al reservado, es necesario que además de enviar el atributo `capture`, envies el atributo `transaction_amount` con el nuevo monto.


[[[
```php
<?php

  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

  $payment = MercadoPago\Payment::load($payment_id);
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


Respuesta:

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
> No es posible capturar un monto mayor al reservado, para eso es necesario realizar cancelar la reserva y generar una nueva.


## Cancelar una reserva

Si no harás uso del dinero reservado, es importante que canceles la reserva para liberar el dinero de la tarjeta.

Para hacer esto debes actualizar el atributo `status` del pago a un estado `cancelled`:


[[[
```php
<?php

  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

  $payment = MercadoPago\Payment::load($payment_id);
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

Respuesta:

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
> Las reservas que no hayan sido capturadas dentro del plazo mencionado, serán automáticamente canceladas. Serás notificado vía [Webhooks](/guides/notifications/webhooks.es.md) del cambio de estado del pago.
