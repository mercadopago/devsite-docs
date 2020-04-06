# Autorización y captura de pagos

Suma funcionalidades específicas a tu integración según las necesidades de tu negocio.

Ofrece la posibilidad de realizar una autorización antes de generar una captura de un pago. Esto te permite hacer una reserva de fondos en la tarjeta de tu comprador sin efectuar el pago.

Por ejemplo, para realizar una autorización a la hora de reservar un auto o con un precio estimado de una compra previo a su confirmación.


## Realiza una reserva de fondos

Para hacer una autorización de reserva de fondos solo tienes que agregar el atributo `capture=false` de la siguiente manera:

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

payment.setTransactionAmount(100f)
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

}).catch(function (error) {

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
```curl

curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN' \
    -d '{
          "transaction_amount": 100,
          "token": "ff8080814c11e237014c1ff593b57b4d",
          "description": "Título de producto",
          "installments": 1,
          "payment_method_id": "visa",
          "payer": {
            "email": "test_user_19653727@testuser.com"
          },
          "capture": "false"
    }'
]]]

La respuesta indica que el pago se encuentra autorizado y pendiente de captura.

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

También puede resultar rechazada o quedar pendiente. Ten en cuenta que los fondos autorizados no podrán ser utilizados por tu cliente hasta que no sean capturados. Te recomendamos realizar la captura lo antes posible.

> WARNING
>
> Importante
>
> * La reserva tendrá una validez de 7 días. Si no la capturas hasta ese momento, será cancelada.
> * Debes guardar el ID del pago para poder finalizar el proceso.

## Captura un pago autorizado

Para finalizar el pago, es necesario capturar los fondos que reservaste a tu cliente. Puede realizarse por el monto total o uno parcial.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Capturar el monto total de una reserva

Para hacer la captura por el monto total solo debes enviar el atributo `capture` como `true`.

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
```curl
curl -X PUT \
  'https://api.mercadopago.com/v1/payments/PAYMENT_ID?access_token=ENV_ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"capture": true}'
```
]]]

La respuesta va a devolver que el pago se encuentra aprobado y acreditado.

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

> NOTE
>
> Nota
>
> Si no agregas un monto, se capturará el total reservado.

## Captura un pago por un monto menor al reservado

----[mla]----
> WARNING
>
> Importante
>
> Solo disponible para Visa, Cabal, Master y American Express.
------------

Para capturar un monto menor al que reservaste, tienes que sumar el envío del atributo  `transaction_amount` con el nuevo valor.

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
```curl

curl -X PUT \
  'https://api.mercadopago.com/v1/payments/PAYMENT_ID?access_token=ENV_ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
          "transaction_amount": 75,
          "capture": true
}'
```
]]]

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

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
> No es posible capturar un monto mayor al reservado, para eso es necesario cancelar la reserva y generar una nueva.

## Cancelar una reserva

Puedes cancelar la reserva y liberar el dinero de la tarjeta al actualizar el atributo `status` del pago al estado `cancelled`.

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
```curl
curl -X PUT \
  'https://api.mercadopago.com/v1/payments/PAYMENT_ID?access_token=ENV_ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"status": "cancelled"}'
```
]]]

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

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

---
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Requisitos para ir a producción
>
> Conoce los requisitos necesarios para comenzar a recibir pago.
>
> [Requisitis para ir a producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/api/goto-production/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/)
