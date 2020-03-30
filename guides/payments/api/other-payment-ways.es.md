# Integra otros medios de pago

Con la API de pagos de Mercado Pago puedes sumar otras alternativas de medios de pago para ofrecer a tus clientes a la hora de realizar el pago.

## Medios de pago

Además de tarjetas de crédito o débito, también existen otras opciones de pago que puedes ofrecer en tu sitio.

Tipo de medio de pago | Medio de pago 
------------ | -------------
`ticket` | Rapipago
`ticket` | Pago Fácil
`ticket` | Provincia NET Pagos
`ticket` | Carga Virtual
`ticket` | Cobro Express
`atm` | Red Link

## Obtén los medios de pago disponibles

Puedes consultar los medios de pago disponibles siempre que lo necesites.

[[[

```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");

```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp

using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods"); 

```
```curl

curl -X GET \
	-H 'accept: application/json' \
	-H 'content-type: application/json' \
	'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```

]]]


El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tiene como valor `ticket` se refiere a medio de pago en efectivo. 

```json 
[
    {
        "id": "rapipago",
        "name": "Rapipago",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/2002.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2002.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "id": "redlink",
        "name": "RedLink",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/2003.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2003.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "...": "..."
    }
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

## Recibir pagos con un medio de pago en efectivo

Para recibir pagos en efectivo solo tienes que enviar el e-mail de tu cliente y el detalle del monto y el método de pago.

[[[

```php

<?php  

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Title of what you are paying for";
  $payment->payment_method_id = "rapipago";
  $payment->payer = array(
    "email" => "test_user_19653727@testuser.com"
  );

  $payment->save();

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Title of what you are paying for',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100)
      .setDescription('Title of what you are paying for')
      .setPaymentMethodId("rapipago")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Title of what you are paying for'
payment.payment_method_id = "rapipago"
payment.payer = {
  email: "test_user_19653727@testuser.com"
}

payment.save()

```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("105"),
    Description = "Awesome Wooden Wallet",
    PaymentMethodId = "rapipago",
    Payer = new Payer(){
        Email = "test_user_19653727@testuser.com"
  }
};
// Save and posting the payment
payment.Save();
//...

```
```curl

curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "rapipago",
  payer: { email: "test_user_19653727@testuser.com" } 
}'

```

]]]

La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. 

```json 
{
    ...,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "http://www.mercadopago.com/mla/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
}
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno. 

Ten en cuenta que solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado. 

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago.com.ar/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.


### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Pruebas
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Pruebas](https://www.mercadopago.com.ar/developers/es/guides/payments/api/test-integration/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Completa tu integración y optimiza la gestión de tus cobros.
>
> [Integración avanzada](https://www.mercadopago.com.ar/developers/es/guides/payments/api/advanced-integration)
