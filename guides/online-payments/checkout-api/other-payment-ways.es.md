# Integra otros medios de pago

----[mlb]----
Con el Checkout Transparente de Mercado Pago puedes sumar **otras alternativas de medios de pago para ofrecer a tus clientes a la hora de realizar el pago**.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Con el Checkout API de Mercado Pago puedes sumar **otras alternativas de medios de pago para ofrecer a tus clientes a la hora de realizar el pago**.
------------

----[mla]----

## ¿Cómo funciona?

Para recibir otros medios de pago, tienes que tener en cuenta dos instancias:

1. Primero, necesitas un frontend para que recolecte el e-mail y documento de tu cliente y el método de pago y detalle del monto.
1. Segundo, un backend que tome los datos del pago y pueda confirmar y efectuar el pago.

Tanto para el frontend como para el backend, recomendamos utilizar [nuestras librerías](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements/#bookmark_utiliza_nuestras_librerías_siempre) para poder recolectar los datos sensibles de tus usuarios de manera segura.

## Consulta los medios de pago disponibles

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| --- | ---|
| `ticket` | Rapipago |
| `ticket` | Pago Fácil |
| `ticket` | Provincia NET Pagos |
| `ticket` | Carga Virtual |
| `ticket` | Cobro Express |
| `atm` | Red Link |

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtén los medios de pago disponibles

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
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

Ten en cuenta que la respuesta devolverá todos los medios de pago. Por eso, tienes que filtrar los medios que quieras ofrecer según la [lista de medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_medios_de_pago).

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

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/).

<br>
<span></span>
> CLIENT_SIDE
>
> h2
>
> Captura los datos para el pago

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa la librería MercadoPago.js

**Recuerda utilizar la librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura.

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de tus clientes, es muy importante que utilices nuestro formulario con los atributos correspondientes para garantizar la seguridad de la información.

Puedes agregar todo lo que necesites y sumarle el estilo que quieras sin problemas.

Utiliza la lista que consultaste en [Obtén los medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtén_los_medios_de_pago_disponibles) para crear las opciones de pagos que quieres ofrecer.


```html
<form action="/process_payment" method="post" id="paymentForm">
             <h3>Medio de pago</h3>
             <div>
               <select class="form-control" id="paymentMethod" name="paymentMethod">
                 <option>Selecione un medio de pago</option>

                 <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
                 <option value="--PaymentTypeId--">--PaymentTypeName--</option>
               </select>
             </div>
             <h3>Detalles del comprador</h3>
             <div>
              <div>
                 <label for="payerFirstName">Nombre</label>
                 <input id="payerFirstName" name="payerFirstName" type="text" value="Nome"></select>
               </div>
               <div>
                 <label for="payerLastName">Apellido</label>
                 <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome"></select>
               </div>
               <div>
                 <label for="payerEmail">E-mail</label>
                 <input id="payerEmail" name="payerEmail" type="text" value="test@test.com"></select>
               </div>
               <div>
                 <label for="docType">Tipo de documento</label>
                 <select id="docType" name="docType" data-checkout="docType" type="text"></select>
               </div>
               <div>
                 <label for="docNumber">Número de documento</label>
                 <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
               </div>
             </div>

             <div>
               <div>
                 <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                 <input type="hidden" name="productDescription" id="productDescription" value="Nombre del Producto" />
                 <br>
                 <button type="submit">Pagar</button>
                 <br>
               </div>
           </div>
         </form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configura tu clave pública

Agrega tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtén los datos para tu formulario

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener tipos de documentos

Uno de los campos obligatorios es el tipo de número de documento. Utiliza la lista de documentos al momento de completar los datos.

Incluyendo el elemento de tipo _select_ con `id = docType` que se encuentra en el formulario, MercadoPago.js completará automáticamente las opciones disponibles cuando llames a la siguiente función:

```javascript
window.Mercadopago.getIdentificationTypes();
```

> Encuentra más detalle en la [sección de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/identification-types/).

<br>
<span></span>
> SERVER_SIDE
>
> h2
>
> Envía el pago a Mercado Pago

Para recibir pagos en efectivo solo tienes que enviar el e-mail y documento de tu cliente y el método de pago y detalle del monto.

Ya en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada]([FAKER][CREDENTIALS][URL]).

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
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
  description: 'Título del producto',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription('Título del producto')
      .setPaymentMethodId("rapipago")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
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

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título del producto",
    PaymentMethodId = "rapipago",
    Payer = new Payer(){
        Email = "test_user_19653727@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "rapipago",
  payer: { email: "test_user_19653727@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
 {
    ...,
    "id": 5466310457,
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
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Fecha de vencimiento para pagos en efectivo

 Si quieres, puedes cambiarla la fecha de vencimiento por defecto de un pago en efectivo enviando el campo `date_of_expiration` en la solicitud de creación de pago. La fecha configurada debe ser entre 1 y 30 días a partir de la fecha de emisión.

[[[
```php
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

payment.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

El período de acreditación es de 1 y 2 días hábiles según el medio de pago. Por lo tanto, te recomendamos establecer la fecha de vencimiento con al menos 3 días para asegurarte de que se realice el pago.

Ten en cuenta los [tiempos de acreditación por medio de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) para realizar la configuración.

> WARNING
>
> Importante
>
> Si el pago se realiza después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.

------------

----[mlm]----
## ¿Cómo funciona?

Para recibir otros medios de pago, tienes que tener en cuenta dos instancias:

1. Primero, necesitas un frontend para que recolecte el e-mail y documento de tu cliente y el método de pago y detalle del monto.
1. Segundo, un backend que tome los datos del pago y pueda confirmar y efectuar el pago.

Tanto para el frontend como para el backend, recomendamos utilizar [nuestras librerías](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements/#bookmark_utiliza_nuestras_librerías_siempre) para poder recolectar los datos sensibles de tus usuarios de manera segura.

## Consulta los medios de pago disponibles

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| --- | ---|
| `ticket` | OXXO |
| `atm` | Citibanamex |
| `atm` | Santander |
| `atm` | BBVA Bancomer |
| `prepaid_card` | Tarjeta Mercado Pago |

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtén los medios de pago disponibles

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
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

Ten en cuenta que la respuesta devolverá todos los medios de pago. Por eso, tienes que filtrar los medios que quieras ofrecer según la [lista de medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_medios_de_pago).

```json
[
  {
        "id": "oxxo",
        "name": "OXXO",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/oxxo.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/oxxo.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5,
        "max_allowed_amount": 10000,
        "accreditation_time": 2880,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "banamex",
        "name": "Citibanamex",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/banamex.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/banamex.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5,
        "max_allowed_amount": 40000,
        "accreditation_time": 60,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "serfin",
        "name": "Santander",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/serfin.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/serfin.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5,
        "max_allowed_amount": 40000,
        "accreditation_time": 60,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
 {
        "id": "bancomer",
        "name": "BBVA Bancomer",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/bancomer.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/bancomer.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 10,
        "max_allowed_amount": 40000,
        "accreditation_time": 60,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "mercadopagocard",
        "name": "Tarjeta MercadoPago",
        "payment_type_id": "prepaid_card",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/mercadopagocard.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/mercadopagocard.gif",
        "deferred_capture": "supported",
        "settings": [
            {
                "card_number": {
                    "validation": "standard",
                    "length": 16
                },
                "bin": {
                    "pattern": "^539978",
                    "installments_pattern": "^539978",
                    "exclusion_pattern": null
                },
                "security_code": {
                    "length": 3,
                    "card_location": "back",
                    "mode": "mandatory"
                }
            }
        ],
        "additional_info_needed": [
            "cardholder_name"
        ],
        "min_allowed_amount": 5,
        "max_allowed_amount": 300000,
        "accreditation_time": 1440,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/).

<br>
<span></span>
> CLIENT_SIDE
>
> h2
>
> Captura los datos para el pago

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa la librería MercadoPago.js

**Recuerda utilizar la librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura.

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de tus clientes, es muy importante que utilices nuestro formulario con los atributos correspondientes para garantizar la seguridad de la información.

Puedes agregar todo lo que necesites y sumarle el estilo que quieras sin problemas.

Utiliza la lista que consultaste en [Obtén los medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtén_los_medios_de_pago_disponibles) para crear las opciones de pagos que quieres ofrecer.

```html
<form action="/process_payment" method="post" id="paymentForm">
             <h3>Medio de pago</h3>
             <div>
               <select class="form-control" id="paymentMethod" name="paymentMethod">
                 <option>Selecione un medio de pago</option>

                 <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
                 <option value="--PaymentTypeId--">--PaymentTypeName--</option>
               </select>
             </div>
             <h3>Detalles del comprador</h3>
             <div>
              <div>
                 <label for="payerFirstName">Nombre</label>
                 <input id="payerFirstName" name="payerFirstName" type="text" value="Nome"></select>
               </div>
               <div>
                 <label for="payerLastName">Apellido</label>
                 <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome"></select>
               </div>
               <div>
                 <label for="payerEmail">E-mail</label>
                 <input id="payerEmail" name="payerEmail" type="text" value="test@test.com"></select>
               </div>
               <div>
                 <label for="docType">Tipo de documento</label>
                 <select id="docType" name="docType" data-checkout="docType" type="text"></select>
               </div>
               <div>
                 <label for="docNumber">Número de documento</label>
                 <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
               </div>
             </div>

             <div>
               <div>
                 <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                 <input type="hidden" name="productDescription" id="productDescription" value="Nome do Produto" />
                 <br>
                 <button type="submit">Pagar</button>
                 <br>
               </div>
           </div>
         </form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configura tu clave pública

Agrega tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

<br>
<span></span>
> SERVER_SIDE
>
> h2
>
> Envía el pago a Mercado Pago

Para recibir pagos en efectivo solo tienes que enviar el e-mail y documento de tu cliente y el método de pago y detalle del monto.

Ya en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada]([FAKER][CREDENTIALS][URL]).

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "oxxo";
  $payment->payer = array(
    "email" => "test_user_82045343@testuser.com"
  );

  $payment->save();

?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test_user_82045343@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription('Título del producto')
      .setPaymentMethodId("oxxo")
      .setPayer(new Payer("test_user_82045343@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
payment.payment_method_id = "oxxo"
payment.payer = {
  email: "test_user_82045343@testuser.com"
}

payment.save()

```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título del producto",
    PaymentMethodId = "oxxo",
    Payer = new Payer(){
        Email = "test_user_82045343@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "oxxo",
  payer: { email: "test_user_82045343@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "payment_method_reference_id": "24304329",
        "verification_code": "882430432923032000100001",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlm/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
    }
  }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.

## Comunica dónde pueden pagar tus clientes

Al finalizar, es importante que compartas con tus clientes la información de los distintos lugares en los que puede pagar.

| Medio de pago | Tiendas disponibles
| --- | ---|
| OXXO | OXXO
| BBVA Bancomer | 7-Eleven |
| BBVA Bancomer | K |
| BBVA Bancomer | Farmacias del Ahorro |
| BBVA Bancomer | Casa Ley |
| BBVA Bancomer | BBVA Bancomer |
| Citibanamex| Chedraui |
| Citibanamex| Telecomm |
| Citibanamex| Citibanamex |

------------

----[mlu]----

## ¿Cómo funciona?

Para recibir otros medios de pago, tienes que tener en cuenta dos instancias:

1. Primero, necesitas un frontend para que recolecte el e-mail y documento de tu cliente y el método de pago y detalle del monto.
1. Segundo, un backend que tome los datos del pago y pueda confirmar y efectuar el pago.

Tanto para el frontend como para el backend, recomendamos utilizar [nuestras librerías](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements/#bookmark_utiliza_nuestras_librerías_siempre) para poder recolectar los datos sensibles de tus usuarios de manera segura.

## Consulta los medios de pago disponibles

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| --- | ---|
| `ticket` | Abitab |
| `ticket` | Redpagos |

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtén los medios de pago disponibles

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
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

Ten en cuenta que la respuesta devolverá todos los medios de pago. Por eso, tienes que filtrar los medios que quieras ofrecer según la [lista de medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_medios_de_pago).

```json

[
 {
        "id": "abitab",
        "name": "Abitab",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/abitab.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/abitab.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "identification_number"
        ],
        "min_allowed_amount": 1,
        "max_allowed_amount": 150000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
 {
        "id": "redpagos",
        "name": "Redpagos",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/redpagos.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/redpagos.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "identification_number"
        ],
        "min_allowed_amount": 1,
        "max_allowed_amount": 150000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    }
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/).

<br>
<span></span>
> CLIENT_SIDE
>
> h2
>
> Captura los datos para el pago

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa la librería MercadoPago.js

**Recuerda utilizar la librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura.

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de tus clientes, es muy importante que utilices nuestro formulario con los atributos correspondientes para garantizar la seguridad de la información.

Puedes agregar todo lo que necesites y sumarle el estilo que quieras sin problemas.

Utiliza la lista que consultaste en [Obtén los medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtén_los_medios_de_pago_disponibles) para crear las opciones de pagos que quieres ofrecer.


```html
<form action="/process_payment" method="post" id="paymentForm">
             <h3>Medio de pago</h3>
             <div>
               <select class="form-control" id="paymentMethod" name="paymentMethod">
                 <option>Selecione un medio de pago</option>

                 <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
                 <option value="--PaymentTypeId--">--PaymentTypeName--</option>
               </select>
             </div>
             <h3>Detalles del comprador</h3>
             <div>
              <div>
                 <label for="payerFirstName">Nombre</label>
                 <input id="payerFirstName" name="payerFirstName" type="text" value="Nome"></select>
               </div>
               <div>
                 <label for="payerLastName">Apellido</label>
                 <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome"></select>
               </div>
               <div>
                 <label for="payerEmail">E-mail</label>
                 <input id="payerEmail" name="payerEmail" type="text" value="test@test.com"></select>
               </div>
               <div>
                 <label for="docType">Tipo de documento</label>
                 <select id="docType" name="docType" data-checkout="docType" type="text"></select>
               </div>
               <div>
                 <label for="docNumber">Número de documento</label>
                 <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
               </div>
             </div>

             <div>
               <div>
                 <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                 <input type="hidden" name="productDescription" id="productDescription" value="Nome do Produto" />
                 <br>
                 <button type="submit">Pagar</button>
                 <br>
               </div>
           </div>
         </form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configura tu clave pública

Agrega tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtén los datos para tu formulario

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener tipos de documentos

Uno de los campos obligatorios es el tipo de número de documento. Utiliza la lista de documentos al momento de completar los datos.

Incluyendo el elemento de tipo _select_ con `id = docType` que se encuentra en el formulario, MercadoPago.js completará automáticamente las opciones disponibles cuando llames a la siguiente función:

```javascript
window.Mercadopago.getIdentificationTypes();
```

> Encuentra más detalle en la [sección de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/identification-types/).

<br>
<span></span>
> SERVER_SIDE
>
> h2
>
> Envía el pago a Mercado Pago

Para recibir pagos en efectivo solo tienes que enviar el e-mail y documento de tu cliente y el método de pago y detalle del monto.

Ya en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada]([FAKER][CREDENTIALS][URL]).

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "abitab";
  $payment->payer = array(
    "email" => "test_user_84162205@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'abitab',
  payer: {
    email: 'test_user_84162205@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription('Título del producto')
      .setPaymentMethodId("abitab")
      .setPayer(new Payer("test_user_84162205@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
payment.payment_method_id = "abitab"
payment.payer = {
  email: "test_user_84162205@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título del producto",
    PaymentMethodId = "rapipago",
    Payer = new Payer(){
        Email = "test_user_84162205@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "abitab",
  payer: { email: "test_user_84162205@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
   "transaction_details": {
        "payment_method_reference_id": "24308188",
        "verification_code": "24308188",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlu/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.

------------

----[mco]----

## ¿Cómo funciona?

Para recibir otros medios de pago, tienes que tener en cuenta dos instancias:

1. Primero, necesitas un frontend para que recolecte el e-mail y documento de tu cliente y el método de pago y detalle del monto.
1. Segundo, un backend que tome los datos del pago y pueda confirmar y efectuar el pago.

Tanto para el frontend como para el backend, recomendamos utilizar [nuestras librerías](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements/#bookmark_utiliza_nuestras_librerías_siempre) para poder recolectar los datos sensibles de tus usuarios de manera segura.

## Consulta los medios de pago disponibles

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| --- | ---|
| `ticket` | Efecty |
| `ticket` | Baloto |
| `bank_transfer` | PSE |


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtén los medios de pago disponibles

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
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

Ten en cuenta que la respuesta devolverá todos los medios de pago. Por eso, tienes que filtrar los medios que quieras ofrecer según la [lista de medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_medios_de_pago).

```json
[
  {
        "id": "efecty",
        "name": "Efecty",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/efecty.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/efecty.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5000,
        "max_allowed_amount": 4000000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "baloto",
        "name": "Baloto",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/baloto.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/baloto.gif",
        "deferred_capture": "supported",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 1500,
        "max_allowed_amount": 1000000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "pse",
        "name": "PSE",
        "payment_type_id": "bank_transfer",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pse.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/pse.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "entity_type"
        ],
        "min_allowed_amount": 1600,
        "max_allowed_amount": 30000000,
        "accreditation_time": 30,
        "financial_institutions": [
            …,
        ],
        "processing_modes": [
            "aggregator"
        ]
    }
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/).

<br>
<span></span>
> CLIENT_SIDE
>
> h2
>
> Captura los datos para el pago

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa la librería MercadoPago.js

**Recuerda utilizar la librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura.

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de tus clientes, es muy importante que utilices nuestro formulario con los atributos correspondientes para garantizar la seguridad de la información.

Puedes agregar todo lo que necesites y sumarle el estilo que quieras sin problemas.

Utiliza la lista que consultaste en [Obtén los medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtén_los_medios_de_pago_disponibles) para crear las opciones de pagos que quieres ofrecer.


```html
<form action="/process_payment" method="post" id="paymentForm">
             <h3>Medio de pago</h3>
             <div>
               <select class="form-control" id="paymentMethod" name="paymentMethod">
                 <option>Selecione un medio de pago</option>

                 <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
                 <option value="--PaymentTypeId--">--PaymentTypeName--</option>
               </select>
             </div>
             <h3>Detalles del comprador</h3>
             <div>
              <div>
                 <label for="payerFirstName">Nombre</label>
                 <input id="payerFirstName" name="payerFirstName" type="text" value="Nome"></select>
               </div>
               <div>
                 <label for="payerLastName">Apellido</label>
                 <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome"></select>
               </div>
               <div>
                 <label for="payerEmail">E-mail</label>
                 <input id="payerEmail" name="payerEmail" type="text" value="test@test.com"></select>
               </div>
               <div>
                 <label for="docType">Tipo de documento</label>
                 <select id="docType" name="docType" data-checkout="docType" type="text"></select>
               </div>
               <div>
                 <label for="docNumber">Número de documento</label>
                 <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
               </div>
             </div>

             <div>
               <div>
                 <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                 <input type="hidden" name="productDescription" id="productDescription" value="Nombre del Producto" />
                 <br>
                 <button type="submit">Pagar</button>
                 <br>
               </div>
           </div>
         </form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configura tu clave pública

Agrega tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtén los datos para tu formulario

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener tipos de documentos

Uno de los campos obligatorios es el tipo de número de documento. Utiliza la lista de documentos al momento de completar los datos.

Incluyendo el elemento de tipo _select_ con `id = docType` que se encuentra en el formulario, MercadoPago.js completará automáticamente las opciones disponibles cuando llames a la siguiente función:

```javascript
window.Mercadopago.getIdentificationTypes();
```

> Encuentra más detalle en la [sección de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/identification-types/).

<br>
<span></span>
> SERVER_SIDE
>
> h2
>
> Envía el pago a Mercado Pago

Para recibir pagos en efectivo solo tienes que enviar el e-mail y documento de tu cliente y el método de pago y detalle del monto.

Ya en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada]([FAKER][CREDENTIALS][URL]).

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 5000;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "efecty";
  $payment->payer = array(
    "email" => "test_user_19549678@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 5000,
  description: 'Título del producto',
  payment_method_id: 'efecty',
  payer: {
    email: 'test_user_19549678@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(5000f)
      .setDescription('Título del producto')
      .setPaymentMethodId("efecty")
      .setPayer(new Payer("test_user_19549678@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 5000
payment.description = 'Título del producto'
payment.payment_method_id = "efecty"
payment.payer = {
  email: "test_user_19549678@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("5000"),
    Description = "Título del producto",
    PaymentMethodId = "efecty",
    Payer = new Payer(){
        Email = "test_user_19549678@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 5000,
  description: "Título del producto",
  payment_method_id: "efecty",
  payer: { email: "test_user_19549678@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "payment_method_reference_id": "24308386",
        "verification_code": "24308386",
        "net_received_amount": 0,
        "total_paid_amount": 5000,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mco/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.


## Fecha de vencimiento para pagos en efectivo

 Si quieres, puedes cambiarla la fecha de vencimiento por defecto de un pago en efectivo enviando el campo `date_of_expiration` en la solicitud de creación de pago. La fecha configurada debe ser entre 1 y 30 días a partir de la fecha de emisión.

[[[
```php
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

payment.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

El período de acreditación es de 1 y 2 días hábiles según el medio de pago. Por lo tanto, te recomendamos establecer la fecha de vencimiento con al menos 3 días para asegurarte de que se realice el pago.

Ten en cuenta los [tiempos de acreditación por medio de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) para realizar la configuración.

> WARNING
>
> Importante
>
> Si el pago se realiza después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.


## Recibir pagos con PSE

Para poder recibir pagos con PSE, también tienes que enviar la institución financiera que procesa el pago.

[[[
```php
<?php

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 5000;
$payment->description = "Título del producto";
$payment->payer = array (
"email" => "test_user_19549678@testuser.com",
"identification" => array(
"type" => "CC",
"number" => "76262349"
),
"entity_type" => "individual"
);
$payment->transaction_details = array(
"financial_institution" => 1234
);
$payment->additional_info = array(
"ip_address" => "127.0.0.1"
);
$payment->callback_url = "http://www.tu-sitio.com";
$payment->payment_method_id = "pse";

$payment->save();

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(ENV_ACCESS_TOKEN);

var payment_data = {
transaction_amount: 5000,
description: 'Título del producto',
payer: {
email: 'test_user_19549678@testuser.com',
identification: {
type: "CC",
number: "76262349"
},
entity_type: "individual"
},
transaction_details: {
financial_institution: 1234
},
additional_info: {
ip_address: "127.0.0.1"
},
callback_url: "http://www.tu-sitio.com",
payment_method_id: "pse"
}

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payer payer = new Payer();
payer.setEmail("test_user_19549678@testuser.com");
payer.setIdentification(new Identification("CC", 76262349));
payer.setEntityType("individual");

TransactionDetails transactionDetails = new TransactionDetails();
transactionDetails.financialInstitution = 1234;

AdditionalInfo additionalInfo = new AdditionalInfo();
additionalInfo.ipAddress = "127.0.0.1";

Payment payment = new Payment();
payment.setTransactionAmount(5000f)
.setDescription('Título del producto')
.setPayer(payer)
.setTransactionDetails(transactionDetails)
.additionalInfo(additionalInfo)
.callbackUrl("http://www.tu-sitio.com")
.setPaymentMethodId("pse");
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 5000
payment.description = 'Título del producto'
payment.payer = {
email: 'test_user_19549678@testuser.com',
identification: {
type: "CC",
number: "76262349"
},
entity_type: "individual"
}
payment.transaction_details = {
financial_institution: 1234
}
payment.additional_info = {
ip_address: "127.0.0.1"
}
payment.callback_url = "http://www.tu-sitio.com"
payment.payment_method_id = "pse"

payment.save();
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer _ACCESS_TOKEN' \
  -d '{
  transaction_amount: 5000,
  description: "Título del producto",
  payment_method_id: "pse",
  payer: { email: "test_user_19549678@testuser.com" },
  transaction_details: { financial_institution: 1234 }
}'
```
]]]

La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago.

```json
[
 {
    ...,
	"status": "pending",
	"status_detail": "pending_waiting_transfer"
    ...,
	"transaction_details": {
		...,
		"external_resource_url": "https://www.mercadopago.com/mco/payments/bank_transfer/sandbox/helper/commerce?id=3692089&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
		"installment_amount": 0,
		"financial_institution": "1234",
		"payment_method_reference_id": null
	}
 }
]
```
En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

Al finalizar el pago, el cliente va a ser redirigido a la `callback_url` que indiques.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.

------------

----[mlc]----

## ¿Cómo funciona?

Para recibir otros medios de pago, tienes que tener en cuenta dos instancias:

1. Primero, necesitas un frontend para que recolecte el e-mail y documento de tu cliente y el método de pago y detalle del monto.
1. Segundo, un backend que tome los datos del pago y pueda confirmar y efectuar el pago.

Tanto para el frontend como para el backend, recomendamos utilizar [nuestras librerías](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements/#bookmark_utiliza_nuestras_librerías_siempre) para poder recolectar los datos sensibles de tus usuarios de manera segura.

## Consulta los medios de pago disponibles

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| --- | ---|
| `ticket` | Sucursales Servipag |
| `bank_transfer` | Redcompra Webpay |

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtén los medios de pago disponibles

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
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

Ten en cuenta que la respuesta devolverá todos los medios de pago. Por eso, tienes que filtrar los medios que quieras ofrecer según la [lista de medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_medios_de_pago).

```json
[
 {
        "id": "servipag",
        "name": "Sucursales Servipag",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/servipag.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/servipag.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 1,
        "max_allowed_amount": 500000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
         ]
    },
 {
        "id": "webpay",
        "name": "Redcompra Webpay",
        "payment_type_id": "bank_transfer",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/webpay.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/webpay.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "entity_type"
        ],
        "min_allowed_amount": 50,
        "max_allowed_amount": 3000000,
        "accreditation_time": 20,
        "financial_institutions": [
            {
                "id": "1234",
                "description": "Transbank"
            }
        ],
        "processing_modes": [
            "aggregator"
        ]
    }
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/).

<br>
<span></span>
> CLIENT_SIDE
>
> h2
>
> Captura los datos para el pago

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa la librería MercadoPago.js

**Recuerda utilizar la librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura.

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de tus clientes, es muy importante que utilices nuestro formulario con los atributos correspondientes para garantizar la seguridad de la información.

Puedes agregar todo lo que necesites y sumarle el estilo que quieras sin problemas.

Utiliza la lista que consultaste en [Obtén los medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtén_los_medios_de_pago_disponibles) para crear las opciones de pagos que quieres ofrecer.


```html
<form action="/process_payment" method="post" id="paymentForm">
             <h3>Medio de pago</h3>
             <div>
               <select class="form-control" id="paymentMethod" name="paymentMethod">
                 <option>Selecione un medio de pago</option>

                 <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
                 <option value="--PaymentTypeId--">--PaymentTypeName--</option>
               </select>
             </div>
             <h3>Detalles del comprador</h3>
             <div>
              <div>
                 <label for="payerFirstName">Nombre</label>
                 <input id="payerFirstName" name="payerFirstName" type="text" value="Nome"></select>
               </div>
               <div>
                 <label for="payerLastName">Apellido</label>
                 <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome"></select>
               </div>
               <div>
                 <label for="payerEmail">E-mail</label>
                 <input id="payerEmail" name="payerEmail" type="text" value="test@test.com"></select>
               </div>
               <div>
                 <label for="docType">Tipo de documento</label>
                 <select id="docType" name="docType" data-checkout="docType" type="text"></select>
               </div>
               <div>
                 <label for="docNumber">Número de documento</label>
                 <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
               </div>
             </div>

             <div>
               <div>
                 <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                 <input type="hidden" name="productDescription" id="productDescription" value="Nombre del Producto" />
                 <br>
                 <button type="submit">Pagar</button>
                 <br>
               </div>
           </div>
         </form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configura tu clave pública

Agrega tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtén los datos para tu formulario

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener tipos de documentos

Uno de los campos obligatorios es el tipo de número de documento. Utiliza la lista de documentos al momento de completar los datos.

Incluyendo el elemento de tipo _select_ con `id = docType` que se encuentra en el formulario, MercadoPago.js completará automáticamente las opciones disponibles cuando llames a la siguiente función:

```javascript
window.Mercadopago.getIdentificationTypes();
```

> Encuentra más detalle en la [sección de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/identification-types/).

<br>
<span></span>
> SERVER_SIDE
>
> h2
>
> Envía el pago a Mercado Pago

Para recibir pagos en efectivo solo tienes que enviar el e-mail y documento de tu cliente y el método de pago y detalle del monto.

Ya en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada]([FAKER][CREDENTIALS][URL]).

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "servipag";
  $payment->payer = array(
    "email" => "test_user_15748052@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'servipag',
  payer: {
    email: 'test_user_15748052@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription('Título del producto')
      .setPaymentMethodId("servipag")
      .setPayer(new Payer("test_user_15748052@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
payment.payment_method_id = "servipag"
payment.payer = {
  email: "test_user_15748052@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título del producto",
    PaymentMethodId = "servipag",
    Payer = new Payer(){
        Email = "test_user_15748052@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "servipag",
  payer: { email: "test_user_15748052@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
   "transaction_details": {
        "payment_method_reference_id": "24308616",
        "verification_code": "24308615",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlc/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Recibir pagos con Webpay

Para poder recibir pagos con Webpay, tienes que enviar la dirección IP del comprador, la institución financiera que procesa el pago y, opcionalmente, el RUT y el tipo de persona.

[[[
```php
<?php

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 100;
$payment->description = "Título del producto";
$payment->payer = array (
"email" => "test_user_15748052@testuser.com",
"entity_type" => "individual"
);
$payment->transaction_details = array(
"financial_institution" => 1234
);
$payment->additional_info = array(
"ip_address" => "127.0.0.1"
);
$payment->callback_url = "http://www.tu-sitio.com";
$payment->payment_method_id = "webpay";

$payment->save();

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(ENV_ACCESS_TOKEN);

var payment_data = {
transaction_amount: 100,
description: 'Título del producto',
payer: {
email: 'test_user_15748052@testuser.com',
entity_type: "individual"
},
transaction_details: {
financial_institution: 1234
},
additional_info: {
ip_address: "127.0.0.1"
},
callback_url: "http://www.tu-sitio.com",
payment_method_id: "webpay"
}

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payer payer = new Payer();
payer.setEmail("test_user_15748052@testuser.com");
payer.setEntityType("individual");

TransactionDetails transactionDetails = new TransactionDetails();
transactionDetails.financialInstitution = 1234;

AdditionalInfo additionalInfo = new AdditionalInfo();
additionalInfo.ipAddress = "127.0.0.1";

Payment payment = new Payment();
payment.setTransactionAmount(100)
.setDescription('Título del producto')
.setPayer(payer)
.setTransactionDetails(transactionDetails)
.additionalInfo(additionalInfo)
.callbackUrl("http://www.tu-sitio.com")
.setPaymentMethodId("webpay");

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
payment.payer = {
email: 'test_user_15748052@testuser.com',
entity_type: "individual"
}
payment.transaction_details = {
financial_institution: 1234
}
payment.additional_info = {
ip_address: "127.0.0.1"
}
payment.callback_url = "http://www.tu-sitio.com"
payment.payment_method_id = "webpay"

payment.save();
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "webpay",
  payer: {
    email: "test_user_15748052@testuser.com",
    identification: {
    type: "RUT",
    number: 76262349
},
  entity_type: "individual"
},
  transaction_details: {
    financial_institution: 1234
},
  additional_info: {
  ip_address: “127.0.0.1”
},
  callback_url: "http://www.tu-sitio.com"
}'
```
]]]

> Los `entity_type` esperados son `individual` (personas) o `association` (empresas).

La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago.

```json
[
 {
    ...,
	"status": "pending",
	"status_detail": "pending_waiting_transfer"
    ...,
	"transaction_details": {
		...,
		"external_resource_url": "https://www.mercadopago.com/mlc/payments/bank_transfer/sandbox/helper/commerce?id=3692089&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
		"installment_amount": 0,
		"financial_institution": "1234",
		"payment_method_reference_id": null
	}
 }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

Al finalizar el pago, el cliente va a ser redirigido a la `callback_url` que indiques con los siguientes parámetros `payment_id=6725591786&payment_status=approved&external_reference=null&payment_method_id=webpay`.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

> WARNING
>
> Importante
>
> Ten en cuenta que Webpay cancelará automáticamente el pago si no se realizó a los 30 minutos.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.cl/developers/es/guides/manage-account/account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago.cl/ayuda/Medios-de-pago-y-acreditaci-n_221) siempre que lo necesites.

------------


----[mpe]----

## ¿Cómo funciona?

Para recibir otros medios de pago, tienes que tener en cuenta dos instancias:

1. Primero, necesitas un frontend para que recolecte el e-mail y documento de tu cliente y el método de pago y detalle del monto.
1. Segundo, un backend que tome los datos del pago y pueda confirmar y efectuar el pago.

Tanto para el frontend como para el backend, recomendamos utilizar [nuestras librerías](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements/#bookmark_utiliza_nuestras_librerías_siempre) para poder recolectar los datos sensibles de tus usuarios de manera segura.

## Consulta los medios de pago disponibles

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| --- | ---|
| `atm` | PagoEfectivo |

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtén los medios de pago disponibles

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
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

Ten en cuenta que la respuesta devolverá todos los medios de pago. Por eso, tienes que filtrar los medios que quieras ofrecer según la [lista de medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_medios_de_pago).

```json
[
  {
      "id": "pagoefectivo_atm",
      "name": "BCP, BBVA Continental u otros",
      "payment_type_id": "atm",
      "status": "active",
      "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pagoefectivo_atm.gif",
      "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/pagoefectivo_atm.gif",
      "deferred_capture": "does_not_apply",
      "settings": [],
      "additional_info_needed": [],
      "min_allowed_amount": 5,
      "max_allowed_amount": 10000,
      "accreditation_time": 2880,
      "financial_institutions": [],
      "processing_modes": [
          "aggregator"
      ]
  }
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/).

<br>
<span></span>
> CLIENT_SIDE
>
> h2
>
> Captura los datos para el pago

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa la librería MercadoPago.js

**Recuerda utilizar la librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura.

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de tus clientes, es muy importante que utilices nuestro formulario con los atributos correspondientes para garantizar la seguridad de la información.

Puedes agregar todo lo que necesites y sumarle el estilo que quieras sin problemas.

Utiliza la lista que consultaste en [Obtén los medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtén_los_medios_de_pago_disponibles) para crear las opciones de pagos que quieres ofrecer.


```html
<form action="/process_payment" method="post" id="paymentForm">
             <h3>Medio de pago</h3>
             <div>
               <select class="form-control" id="paymentMethod" name="paymentMethod">
                 <option>Selecione un medio de pago</option>

                 <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
                 <option value="--PaymentTypeId--">--PaymentTypeName--</option>
               </select>
             </div>
             <h3>Detalles del comprador</h3>
             <div>
              <div>
                 <label for="payerFirstName">Nombre</label>
                 <input id="payerFirstName" name="payerFirstName" type="text" value="Nome"></select>
               </div>
               <div>
                 <label for="payerLastName">Apellido</label>
                 <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome"></select>
               </div>
               <div>
                 <label for="payerEmail">E-mail</label>
                 <input id="payerEmail" name="payerEmail" type="text" value="test@test.com"></select>
               </div>
               <div>
                 <label for="docType">Tipo de documento</label>
                 <select id="docType" name="docType" data-checkout="docType" type="text"></select>
               </div>
               <div>
                 <label for="docNumber">Número de documento</label>
                 <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
               </div>
             </div>

             <div>
               <div>
                 <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                 <input type="hidden" name="productDescription" id="productDescription" value="Nombre del Producto" />
                 <br>
                 <button type="submit">Pagar</button>
                 <br>
               </div>
           </div>
         </form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configura tu clave pública

Agrega tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtén los datos para tu formulario

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener tipos de documentos

Uno de los campos obligatorios es el tipo de número de documento. Utiliza la lista de documentos al momento de completar los datos.

Incluyendo el elemento de tipo _select_ con `id = docType` que se encuentra en el formulario, MercadoPago.js completará automáticamente las opciones disponibles cuando llames a la siguiente función:

```javascript
window.Mercadopago.getIdentificationTypes();
```

> Encuentra más detalle en la [sección de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/identification-types/).

<br>
<span></span>
> SERVER_SIDE
>
> h2
>
> Envía el pago a Mercado Pago

Para recibir pagos en efectivo solo tienes que enviar el e-mail y documento de tu cliente y el método de pago y detalle del monto.

Ya en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada]([FAKER][CREDENTIALS][URL]).

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Título del producto";
  $payment->payment_method_id = "pagoefectivo_atm";
  $payment->payer = array(
    "email" => "test_user_42972582@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test_user_42972582@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setDescription('Título del producto')
      .setPaymentMethodId("pagoefectivo_atm")
      .setPayer(new Payer("test_user_42972582@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Título del producto'
payment.payment_method_id = "pagoefectivo_atm"
payment.payer = {
  email: "test_user_42972582@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Título del producto",
    PaymentMethodId = "pagoefectivo_atm",
    Payer = new Payer(){
        Email = "test_user_42972582@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{
  transaction_amount: 100,
  description: "Título del producto",
  payment_method_id: "pagoefectivo_atm",
  payer: { email: "test_user_42972582@testuser.com" }
}'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
  {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,

    "order": {},
    "external_reference": null,
    "transaction_amount": 100,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "transaction_details": {
        "payment_method_reference_id": "123457986",
        "verification_code": "24308767",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mpe/payments/sandbox/atm/helper?payment_id=24308766&payment_method_reference_id=24308767&caller_id=537490079&hash=c96a61b0-10f4-40f6-afff-82fc0f0923da",
        "installment_amount": 0,
        "financial_institution": "PagoEfectivo",
        "payable_deferral_period": null,
        "acquirer_reference": null
    }
  }
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-para-tus-compradores_2433) siempre que lo necesites.

------------

----[mlb]----

## ¿Cómo funciona?

Para recibir otros medios de pago, tienes que tener en cuenta dos instancias:

1. Primero, necesitas un frontend para que recolecte el e-mail y documento de tu cliente y el método de pago y detalle del monto.
1. Segundo, un backend que tome los datos del pago y pueda confirmar y efectuar el pago.

Tanto para el frontend como para el backend, recomendamos utilizar [nuestras librerías](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements/#bookmark_utiliza_nuestras_librerías_siempre) para poder recolectar los datos sensibles de tus usuarios de manera segura.

## Consulta los medios de pago disponibles

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medios de pago

Además de tarjetas, también existen otras opciones de pago que puedes ofrecer en tu sitio.

| Tipo de medio de pago | Medio de pago |
| --- | ---|
| `ticket` | Boleto |
| `ticket` | Pagamento em lotérica |

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtén los medios de pago disponibles

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
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

<br>

El resultado será un listado con los medios de pago y sus propiedades. Por ejemplo, los medios de pago del `payment_type_id` que tienen como valor `ticket` refieren a medio de pago en efectivo.

Ten en cuenta que la respuesta devolverá todos los medios de pago. Por eso, tienes que filtrar los medios que quieras ofrecer según la [lista de medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_medios_de_pago).

```json
[
    {
        "id": "bolbradesco",
        "name": "Boleto",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/bolbradesco.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/bolbradesco.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "id": "pec",
        "name": "Pagamento na lotérica sem boleto",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pec.gif",
        "thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pec.gif",
        "deferred_capture": "supported",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "...": "..."
    }
]
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/).

<br>
<span></span>
> CLIENT_SIDE
>
> h2
>
> Captura los datos para el pago

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Usa la librería MercadoPago.js

**Recuerda utilizar la librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura.

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de tus clientes, es muy importante que utilices nuestro formulario con los atributos correspondientes para garantizar la seguridad de la información.

Puedes agregar todo lo que necesites y sumarle el estilo que quieras sin problemas.

Utiliza la lista que consultaste en [Obtén los medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_obtén_los_medios_de_pago_disponibles) para crear las opciones de pagos que quieres ofrecer.


```html
<form action="/process_payment" method="post" id="paymentForm">
             <h3>Medio de pago</h3>
             <div>
               <select class="form-control" id="paymentMethod" name="paymentMethod">
                 <option>Selecione un medio de pago</option>

                 <!-- Create an option for each payment method with their name and complete the ID in the attribute 'value'. -->
                 <option value="--PaymentTypeId--">--PaymentTypeName--</option>
               </select>
             </div>
             <h3>Detalles del comprador</h3>
             <div>
              <div>
                 <label for="payerFirstName">Nombre</label>
                 <input id="payerFirstName" name="payerFirstName" type="text" value="Nome"></select>
               </div>
               <div>
                 <label for="payerLastName">Apellido</label>
                 <input id="payerLastName" name="payerLastName" type="text" value="Sobrenome"></select>
               </div>
               <div>
                 <label for="payerEmail">E-mail</label>
                 <input id="payerEmail" name="payerEmail" type="text" value="test@test.com"></select>
               </div>
               <div>
                 <label for="docType">Tipo de documento</label>
                 <select id="docType" name="docType" data-checkout="docType" type="text"></select>
               </div>
               <div>
                 <label for="docNumber">Número de documento</label>
                 <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
               </div>
             </div>

             <div>
               <div>
                 <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
                 <input type="hidden" name="productDescription" id="productDescription" value="Nombre del Producto" />
                 <br>
                 <button type="submit">Pagar</button>
                 <br>
               </div>
           </div>
         </form>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configura tu clave pública

Agrega tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtén los datos para tu formulario

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener tipos de documentos

Uno de los campos obligatorios es el tipo de número de documento. Utiliza la lista de documentos al momento de completar los datos.

Incluyendo el elemento de tipo _select_ con `id = docType` que se encuentra en el formulario, MercadoPago.js completará automáticamente las opciones disponibles cuando llames a la siguiente función:

```javascript
window.Mercadopago.getIdentificationTypes();
```

> Encuentra más detalle en la [sección de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/identification-types/).

<br>
<span></span>
> SERVER_SIDE
>
> h2
>
> Recibir con boleto o pago en lotérica

Para recibir pagos con boleto o pagos en lotérica solo  tienes que enviar el e-mail y documento de tu cliente y el método de pago y detalle del monto.

Ya en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada]([FAKER][CREDENTIALS][URL]).

[[[
```php
<?php

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título do produto";
 $payment->payment_method_id = "bolbradesco";
 $payment->payer = array(
     "email" => "test@test.com",
     "first_name" => "Test",
     "last_name" => "User",
     "identification" => array(
         "type" => "CPF",
         "number" => "19119119100"
      ),
     "address"=>  array(
         "zip_code" => "06233200",
         "street_name" => "Av. das Nações Unidas",
         "street_number" => "3003",
         "neighborhood" => "Bonfim",
         "city" => "Osasco",
         "federal_unit" => "SP"
      )
   );

 $payment->save();

?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
        type: 'CPF',
        number: '19119119100'
    },
    address:  {
        zip_code: '06233200',
        street_name: 'Av. das Nações Unidas',
        street_number: '3003',
        neighborhood: 'Bonfim',
        city: 'Osasco',
        federal_unit: 'SP'
    }
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;

MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
       .setDescription('Título do produto')
       .setPaymentMethodId("bolbradesco")
       .setPayer(new Payer()
           .setEmail("test@test.com")
           .setFirstName("Test")
           .setLastName("User")
           .setIdentification(new Identification()
               .setType("CPF")
               .setNumber("19119119100"))
           .setAddress(new Address()
               .setZipCode("06233200")
               .setStreetName("Av. das Nações Unidas")
               .setStreetNumber(3003)
               .setNeighborhood("Bonfim")
               .setCity("Osasco")
               .setFederalUnit("SP"))
);

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_data = {
  transaction_amount: 100,
  description: "Título do produto",
  payment_method_id: "bolbradesco",
  payer: {
    email: "test@test.com",
    first_name: "Test",
    last_name: "User",
    identification: {
        type: "CPF",
        number: "191191191-00"
    },
    address: {
        zip_code: "06233-200",
        street_name: "Av. das Nações Unidas",
        street_number: "3003",
        neighborhood: "Bonfim",
        city: "Osasco",
        federal_unit: "SP"
    }
  }
}

payment.save()

```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("105"),
    Description = "Título do produto",
    PaymentMethodId = "bolbradesco",
    Payer = new Payer(){
        Email = "test@test.com",
        FirstName = "Test",
        LastName = "User",
        Identification = new Identification(){
            Type = "CPF",
            Number = "191191191-00"
        },
        Address = new Address(){
            ZipCode = "06233-200",
            StreetName = "Av. das Nações Unidas",
            StreetNumber = "3003",
            Neighborhood = "Bonfim",
            City = "Osasco",
            FederalUnit = "SP"

        }
    }
};

payment.Save();

```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "description": "Título do produto",
      "payment_method_id": "bolbradesco",
      "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        },
        "address": {
            "zip_code": "06233200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
      }
    }'
```
]]]

<br>
La respuesta va a mostrar el estado pendiente hasta que el comprador realice el pago. El ID del cupón de pago es igual al ID de la transacción de Mercado Pago.

```json
[
{
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "http://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
}
]
```

En el campo `external_resource_url` vas a encontrar una dirección que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el enlace para que ingrese.

> NOTE
>
> Nota
>
> El cliente tiene entre 3 a 5 días para pagar según el medio de pago. Luego de este tiempo, debes cancelarlo.

## Fecha de vencimiento para pagos con boleto

Por defecto, la fecha de vencimiento para los pagos con boleto es de 3 días. Si quieres, puedes cambiarla enviando el campo `date_of_expiration` en la solicitud de creación de pago. La fecha configurada debe ser entre 1 y 30 días a partir de la fecha de emisión.

[[[
```php
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

payment.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

El período de acreditación del boleto es de 48h hábiles. Por lo tanto, te recomendamos establecer la fecha de vencimiento con al menos 3 días para asegurarse de que se realice el pago.

> WARNING
>
> Importante
>
> Si el pago se realiza después de la fecha de vencimiento, el monto se reembolsará a la cuenta de Mercado Pago del pagador.

## Cancelar un pago

Es importante que puedas cancelar los pagos luego de su vencimiento para evitar problemas con el cobro. Los pagos de medios en efectivo deben ser pagados entre los 3 a 5 días hábiles según el tiempo de cada uno.

Ten en cuenta que **solo puedes cancelar los pagos que se encuentren en estado pendiente o en proceso**. Si la expiración de un pago se produce a los 30 días, la cancelación es automática y el estado final será de cancelado o expirado.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds/).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos es inmediata y en otros puede demorar hasta 3 días hábiles.

Revisa los [tiempos de acreditación por medio de pago](https://www.mercadopago.com.br/ajuda/meios-de-pagamento-parcelamento_265) siempre que lo necesites.

------------

---
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Pruebas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/api/test-integration/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Optimiza tu integración y mejora la gestión de tus ventas.
>
> [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es//guides/online-payments/checkout-api/advanced-integration)
