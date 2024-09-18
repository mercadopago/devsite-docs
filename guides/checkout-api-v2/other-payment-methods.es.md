# Otros medios de pago

----[mlb]----
Con Checkout Transparente de Mercado Pago, es posible ofrecer, además de tarjeta y Pix, **pagos vía boleto bancario y pago en agencias de lotería**.

> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar **otros medios de pago** utilizando el **Brick de Payment**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para obtener más detalles.

------------
----[mla]----
Con el Checkout API de Mercado Pago, también es posible ofrecer pagos con **Rapipago** y/o **Pago Fácil**.

> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar **otros medios de pago** utilizando el **Brick de Payment**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para obtener más detalles.

------------
----[mlm]----
Con el Checkout API de Mercado Pago, también se puede ofrecer pagos con **OXXO**, **Paycash**, **Citibanamex**, **Santander**, **BBVA Bancomer** y **Tarjeta Mercado Pago**.

> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar **otros medios de pago** utilizando el **Brick de Payment**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para obtener más detalles.

------------
----[mpe]----
Con el Checkout API de Mercado Pago, también es posible ofrecer pagos a través de **PagoEfectivo**.

> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar **otros medios de pago** utilizando el **Brick de Payment**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para obtener más detalles.

------------
----[mco]----
Con el Checkout API de Mercado Pago, también se puede ofrecer pagos con **Efecty**.

> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar **otros medios de pago** utilizando el **Brick de Payment**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para obtener más detalles.

------------
----[mlu]----
Con el Checkout API de Mercado Pago, también es posible ofrecer pagos con **Abitab** y **Redpagos**.

> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar **otros medios de pago** utilizando el **Brick de Payment**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para obtener más detalles.

------------

Para obtener una lista detallada de todos los medios de pago disponibles para integración, envía un **GET** con tu `access_token` al endpoint [/v1/payment_methods](/developers/es/reference/payment_methods/_payment_methods/get) y ejecuta la solicitud o, si lo prefieres, haz la solicitud utilizando uno de nuestros SDKs.

[[[
```php
<?php
  use MercadoPago\MercadoPagoConfig;

  MercadoPagoConfig::setAccessToken("ENV_ACCESS_TOKEN");

  $client = new PaymentMethodClient();
  $payment_method = $client->get();

?>
```
```node
import { MercadoPagoConfig, PaymentMethods } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const paymentMethods = new PaymentMethods(client);

paymentMethods.get().then((result) => console.log(result))
  .catch((error) => console.log(error));
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentMethodClient client = new PaymentMethodClient();
client.list();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

----[mlb]----
Para ofrecer pagos con **boleto bancário** y/o **pago en agencias de lotería**, sigue las siguientes etapas.

------------
----[mla]----
Para ofrecer pagos con **Rapipago** y/o **Pago Fácil**, sigue las siguientes etapas.

------------
----[mlm]----
Para ofrecer pagos con **OXXO**, **Paycash**, **Citibanamex**, **Santander**, **BBVA Bancomer** o **Tarjeta Mercado Pago**, sigue las siguientes etapas.

------------
----[mpe]----
Para ofrecer pagos con **PagoEfectivo**, sigue las siguientes etapas.

------------
----[mco]----
Para ofrecer pagos con **Efecty**, sigue las siguientes etapas.

------------
----[mlu]----
Para ofrecer pagos con **Abitab** y/o **Redpagos**, sigue las siguientes etapas.

------------

## Importar MercadoPago.js

Para realizar la integración de ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------, es necesario capturar los datos necesarios para procesar el pago.

Esta captura se realiza incluyendo la biblioteca MercadoPago.js en tu proyecto, seguida del formulario de pago. Utiliza el siguiente código para importar la biblioteca MercadoPago.js antes de añadir el formulario de pago.

[[[
```html

<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```bash
npm install @mercadopago/sdk-js

```
]]]

## Configurar credenciales

Las credenciales son claves únicas con las que identificamos una integración en tu cuenta. Se utilizan para capturar pagos en tiendas online y otras aplicaciones de forma segura.

Esta es la primera etapa de una estructura de código completa que se debe seguir para integrar correctamente los pagos. Presta atención a los siguientes bloques para añadirlos a los códigos como se indica.

[[[
```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>

```
```javascript

import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

## Añadir formulario de pago

Con la biblioteca MercadoPago.js incluida, añade el siguiente formulario de pago a tu proyecto para garantizar la captura segura de los datos de los compradores. En esta etapa es importante utilizar la lista que consultaste para obtener los medios de pago disponibles para crear las opciones de pago que deseas ofrecer.

----[mlm, mla, mpe, mco, mlu, mlc]----
[[[
```html

  <form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="payerFirstName">Nombre</label>
        <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
      </div>
      <div>
        <label for="payerLastName">Appelido</label>
        <input id="form-checkout__payerLastName" name="payerLastName" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
      <div>
        <label for="identificationType">Tipo de documento</label>
        <select id="form-checkout__identificationType" name="identificationType" type="text"></select>
      </div>
      <div>
        <label for="identificationNumber">Número del documento</label>
        <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
        <input type="hidden" name="description" id="description" value="Nome do Produto">
        <br>
        <button type="submit">Pagar</button>
      </div>
    </div>
  </form>
```
]]]

------------

----[mlb]----

> WARNING
>
> Importante
>
> Para configurar pagos con boleto bancário, es obligatorio que los campos `zip_code`, `street_name`, `street_number`, `neighborhood`, `city` y `federal_unit` estén presentes en el formulario de pago y sean completados por el comprador. Si tienes realizada una configuración que no los incluya, deberás actualizarla para asegurarte que tus pagos sean procesados.

[[[
```html

 <form id="form-checkout" action="/process_payment" method="post">
   <div>
       <h1>Payer Request</h1>
     <div>
       <label for="payerFirstName">Nome</label>
       <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
     </div>
     <div>
       <label for="payerLastName">Sobrenome</label>
       <input id="form-checkout__payerLastName" name="payerLastName" type="text">
     </div>
     <div>
       <label for="email">E-mail</label>
       <input id="form-checkout__email" name="email" type="text">
     </div>
     <div>
       <label for="identificationType">Tipo de documento</label>
       <input id="form-checkout__identificationType" name="identificationType" type="text"></input>
     </div>
     <div>
       <label for="identificationNumber">Número do documento</label>
       <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
     </div>
     <div>
       <label for="zip_code"> CEP: </label>
       <input id="form-checkout__zip_code" name="zip_code" type="text">
     </div>
     <div>
       <label for="street_name"> Rua: </label>
       <input id="form-checkout__street_name" name="street_name" type="text">
     </div>
     <div>
       <label for="street_number"> Número: </label>
       <input id="form-checkout__street_number" name="street_number" type="text">
     </div>
     <div>
       <label for="neighborhood"> Bairro: </label>
       <input id="form-checkout__neighborhood" name="neighborhood" type="text">
     </div>
     <div>
       <label for="city"> Cidade: </label>
       <input id="form-checkout__city" name="city" type="text">
     </div>
     <div>
       <label for="federal_unit"> Estado: </label>
       <input id="form-checkout__federal_unit" name="federal_unit" type="text">
     </div>
   </div>
   <div>
     <div>
       <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
       <input type="hidden" name="description" id="description" value="Nome do Produto">
       <br>
       <button type="submit">Pagar</button>
     </div>
   </div>
 </form>
```
]]]

------------

----[mlb, mla, mpe, mco, mlu, mlc]----
## Obtener tipos de documentos

Después de configurar la credencial y añadir el formulario de pago, es necesario obtener los tipos de documentos que se utilizarán para rellenar el formulario de pago.

Al incluir el elemento `select` con el id: `form-checkout__identificationType` que se encuentra en el formulario, será posible completar automáticamente las opciones disponibles al llamar la siguiente función:

[[[
```javascript

function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
   const {label, value} = labelsAndKeys;

   elem.options.length = 0;

   const tempOptions = document.createDocumentFragment();

   options.forEach( option => {
       const optValue = option[value];
       const optLabel = option[label];

       const opt = document.createElement('option');
       opt.value = optValue;
       opt.textContent = optLabel;

       tempOptions.appendChild(opt);
   });

   elem.appendChild(tempOptions);
}

// Get Identification Types
(async function getIdentificationTypes () {
   try {
       const identificationTypes = await mp.getIdentificationTypes();
       const docTypeElement = document.getElementById('docType');

       createSelectOptions(docTypeElement, identificationTypes)
   }catch(e) {
       return console.error('Error getting identificationTypes: ', e);
   }
})()
```
]]]

------------

## Enviar pago

Al finalizar la inclusión del formulario de pago y obtener los tipos de documentos, es necesario enviar el email del comprador, el tipo y número de documento, el medio de pago utilizado y el detalle del importe a pagar utilizando nuestra API de Pagos o uno de nuestros SDKs.


----[mlb]----
Para configurar pagos con **boleto bancario** o **pago en agencia de lotería**, envía un POST con los los parámetros indicados en las tablas debajo al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.


> WARNING
>
> Atención
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token. Consulta más información en [Credenciales](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials). Además, se te solicitará enviar el *header* `X-Idempotency-Key` con tu llave de idempotencia para asegurar la ejecución y reejecución de las solicitudes evitando situaciones no deseadas, como pagos duplicados, por ejemplo.


[[[
```php
<?php

use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\Client\Common\RequestOptions;
use MercadoPago\MercadoPagoConfig;

MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

$client = new PaymentClient();
$request_options = new RequestOptions();
$request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

$payment = $client->create([
  "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
  "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
  "payer" => [
    "email" => $_POST['<EMAIL>'],
    "first_name" => $_POST['<NOME>'],
    "last_name" => $_POST['<SOBRENOME>'],
    "identification" => [
      "type" =>  $_POST['<TIPO DE DOCUMENTO>'],
      "number" => $_POST['<NUMERO>']
    ],
    "address" => [
      "zip_code" => $_POST['<CEP>'],
      "city" => $_POST['<CIDADE>'],
      "street_name" => $_POST['<RUA>'],
      "street_number" => $_POST['<NÚMERO>'],
      "neighborhood" => $_POST['<BAIRRO>'],
      "federal_unit" => $_POST['<SIGLA DO ESTADO>']
    ]
  ]
], $request_options);
echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
       transaction_amount: '<TRANSACTION_AMOUNT>',
       payment_method_id: '<PAYMENT_METHOD_ID>',
       payer: {
           email: '<EMAIL>',
           first_name: '<NOMBRE>',
           last_name: '<APELLIDO>',
           identification:{
               type:'<TIPO DE DOCUMENTO>',
               number:'<NUMERO_DOCUMENTO>'
       },
           address:{
               zip_code: '<CEP>',
               city: '<CIUDAD>',
               neighborhood: '<BARRIO>',
               street_name: '<CALLE>',
               street_number: '<NÚMERO>',
               federal_unit: '<SIGLA ESTADO>'
       }
           }
},
   requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
   .then((result) => console.log(result))
   .catch((error) => console.log(error));

```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
    .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
    .paymentMethodId("bolbradesco")
    .payer(PaymentPayerRequest.builder()
        .email("<EMAIL>")
        .firstName("<NAME>")
        .lastName("<LASTNAME>")
        .identification(IdentificationRequest.builder()
            .type("CPF")
            .number("<NUMERO>")
            .build())
        .address(PaymentPayerAddressRequest.builder()
            .streetName("<RUA XXX>")
            .streetNumber("123")
            .zipCode("<CEP>")
            .federalUnit("<SIGLA DO ESTADO>")
            .city("<CIDADE>")
            .neighborhood("<BAIRRO>")
            .build())
        .build())
    .build();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'PAYER_EMAIL',
    first_name: 'Test',
    last_name: 'User',
    identification: {
      type: 'DNI',
      number: '19119119',
    },
    address: {
      zip_code: '1264',
      street_name: 'Av. Caseros',
      street_number: '3039',
      neighborhood: 'Parque Patricios',
      city: 'Buenos Aires',
      federal_unit: 'BA'
    }
  }
}

payment_response = sdk.payment.create(payment_request, custom_request_options)
payment = payment_response[:response]

```
```csharp

MercadoPagoConfig.AccessToken = "<ENV_ACCESS_TOKEN>";

var request = new PaymentCreateRequest
{
   TransactionAmount = 105,
   Description = "<DESCRIPCIÓN>",
   PaymentMethodId = "bolbradesco",
   Payer = new PaymentPayerRequest
   {
       Email = "<EMAIL>",
       FirstName = "<NOMBRE>",
       LastName = "<APELLIDO>",
       Identification = new IdentificationRequest
       {
           Type = "CPF",
           Number = "<NUMERO DE CPF>",
       },
       Address = new  PaymentPayerAddressRequest
       {
           ZipCode = "<CÓDIGO POSTAL>",
           StreetName = "<CALLE XXX>",
           City = "<CIUDAD>",
           StreetNumber = "<NÚMERO>",
           Neighborhood = "<BARRIO>",
           FederalUnit = "<SIGLA DE ESTADO>",

       }
   },
};
var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
    "transaction_amount": 100,
    "description": "Título del producto",
    "payment_method_id": "bolbradesco",
    "payer": {
        "email": "PAYER_EMAIL",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "DNI",
            "number": "19119119"
        },
        "address": {
            "zip_code": "1264",
            "street_name": "Av. Caseros",
            "street_number": "3039",
            "neighborhood": "Parque Patricios",
            "city": "Buenos Aires",
            "federal_unit": "BA"
        }
    }
}

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]

```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
  fmt.Println(err)
  return
}

client := payment.NewClient(cfg)


request := payment.Request{
   TransactionAmount: 105,
   PaymentMethodID:   "bolbradesco",
   Payer: &payment.PayerRequest{
      Email:     "{{EMAIL}}",
      FirstName: "{{NOME}}",
      LastName:  "{{SOBRENOME}}",
      Identification: &payment.IdentificationRequest{
         Type:   "{{TIPO DO DOCUMENTO}}",
         Number: "{{NUMERO}}",
      },
      Address: &payment.AddressRequest{
         ZipCode:      "06233-200",
         City:         "Osasco",
         Neighborhood: "Bonfim",
         StreetName:   "Av. das Nações Unidas",
         StreetNumber: "3003",
         FederalUnit:  "SP",
      },
   },
}


resource, err := client.Create(context.Background(), request)
if err != nil {
   fmt.Println(err)
   return
}


fmt.Println(resource)

```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--header 'X-Product-Id: <SOME_UNIQUE_VALUE>' \
--data-raw '{
   "transaction_amount": 100,
   "description": "Titulo do produto",
   "payment_method_id": "bolbradesco",
   "payer": {
       "email": "test_user_12345@testuser.com",
       "first_name": "Test",
       "last_name": "User",
       "identification": {
           "type": "CPF",
           "number": "01234567890"
       }
       "address": {
           "zip_code": "88000000",
           "street_name": "Nombre de calle",
           "street_number": "123",
           "neighborhood": "Barrio",
           "city": "Ciudad",
           "federal_unit": "UF"
       }
   }
}'
```
]]]

#### - Campos obligatorios para pagos con boleto bancário

| Parámetro | Tipo | Descripción, valores posibles y ejemplos |
|---|---|---|
| `payment_method_id` | string | Método de pago. Para boleto, es siempre `bolbradesco`. |
| `address.zip_code` | string | Código postal. Ejemplo: 88000000 |
| `address.street_name` | string | Nombre de la calle del comprador. Ejemplo: Rua da Abobrinha. |
| `address.street_number` | string | Número de la dirección del comprador. Ejemplo: 1291 |
| `address.neighborhood` | string | Barrio donde se ubica la dirección del comprador. Ejemplo: Copacabana. |
| `address.city` | string | Ciudad donde vive el comprador. Ejemplo: Río de Janeiro. |
| `address.federal_unit` | string | Sigla del Estado donde vive el comprador. Sólo se aceptan dos caracteres. Por ejemplo: RJ. |

#### - Campos obligatorios para pagos en agencias de lotería

| Parámetro | Tipo | Descripción, valores posibles y ejemplos |
|---|---|---|
| `payment_method_id` | string | Método de pago. |

> WARNING
>
> Importante
>
> En caso de necesitar información adicional sobre cómo enviar todos los campos requeridos en este llamado, dirígete a [Referencia de API](/developers/es/reference/payments/_payments/post).

La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador realice el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

[[[
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
        "external_resource_url": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```
]]]

> NOTE
>
> Importante
>
> El cliente dispone de entre 3 y 5 días para pagar, dependiendo de la forma de pago. Después de este tiempo, el pago debe ser cancelado.

## Fecha de vencimiento

La fecha de vencimiento predeterminada para los pagos de boletos es de 3 días. Opcionalmente, es posible cambiar esta fecha enviando el campo `date_of_expiration` en la solicitud de creación del pago, definiendo un plazo entre 1 y 30 días a partir de la fecha de emisión del boleto.

Para cambiar la fecha de vencimiento, utilice uno de los códigos disponibles a continuación.

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
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

El tiempo para la aprobación del boleto es de hasta 2 horas hábiles. Por lo tanto, establezca la fecha de vencimiento en un mínimo de 3 días para asegurarse de que se pague el pago.

> WARNING
>
> Importante
>
> Si el boleto se paga después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.

## Cancelar pago

Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).

------------

----[mla]----

Para configurar pagos con **Rapipago** y/o **Pago Fácil**, envía un **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> WARNING
>
> Atención
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token. Consulta más información en [Credenciales](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials). Además, se te solicitará enviar el *header* `X-Idempotency-Key` con tu llave de idempotencia para asegurar la ejecución y reejecución de las solicitudes evitando situaciones no deseadas, como pagos duplicados, por ejemplo.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_19653727@testuser.com',
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Description = "Título del producto",
    PaymentMethodId = "rapipago",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19653727@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título del producto",
    "payment_method_id": "rapipago",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := paymentmethod.NewClient(cfg)


resources, err := client.List(context.Background())
if err != nil {
   fmt.Println(err)
   return
}


for _, v := range resources {
   fmt.Println(v)
}
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
  "transaction_amount": 100,
  "description": "Titulo del producto",
  "payment_method_id": "rapipago",
  "payer": { "email": "test_user_12345@testuser.com" }
}'

```
]]]

La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

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
        "external_resource_url": "https://www.mercadopago.com/mla/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```

## Fecha de vencimiento

Opcionalmente, es posible cambiar la fecha de vencimiento para pagos con dinero enviando el campo `date_of_expiration` en la solicitud de creación del pago, definiendo un plazo entre 1 y 30 días a partir de la fecha de emisión del pago.

Para cambiar la fecha de vencimiento, utilice uno de los códigos disponibles a continuación.

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
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
La fecha usa el formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

El plazo de acreditación es de hasta 2 horas hábiles según el medio de pago. Por lo tanto, establezca la fecha de vencimiento en un mínimo de 3 días para asegurarse de que se pague el pago.

> WARNING
>
> Importante
>
> Si el boleto se paga después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.

## Cancelar pago


Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).

------------

----[mlm]----

Para configurar pagos con **OXXO**, **Paycash**,  **Citibanamex**,  **Santander**, **BBVA Bancomer** y/o **Tarjeta  Mercado Pago**, envía un **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> WARNING
>
> Atención
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token. Consulta más información en [Credenciales](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials). Además, se te solicitará enviar el *header* `X-Idempotency-Key` con tu llave de idempotencia para asegurar la ejecución y reejecución de las solicitudes evitando situaciones no deseadas, como pagos duplicados, por ejemplo.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test_user_82045343@testuser.com',
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Description = "Título del producto",
    PaymentMethodId = "oxxo",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_82045343@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título del producto",
    "payment_method_id": "oxxo",
    "payer": {
        "email": "test_user_82045343@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := paymentmethod.NewClient(cfg)


resources, err := client.List(context.Background())
if err != nil {
   fmt.Println(err)
   return
}


for _, v := range resources {
   fmt.Println(v)
}
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
  "transaction_amount": 100,
  "description": "Titulo del producto",
  "payment_method_id": "oxxo",
  "payer": { "email": "test_user_12345@testuser.com" }
}'

```
]]]

La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

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

## Cancelar pago

Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).

## Establecimientos de pago

Al finalizar la integración, es importante compartir con los compradores la información de los diferentes lugares en los que pueden realizar el pago. Consulta la siguiente tabla para conocer los datos de cada uno de ellos.

| Medio de pago | Tiendas disponibles
| --- | --- |
| OXXO | OXXO
| PayCash | 7-Eleven |
| PayCash | Circle K |
| PayCash | Soriana |
| PayCash | Extra |
| PayCash | Calimax |
| PayCash | Santander |
| BBVA Bancomer | Farmacias del Ahorro |
| BBVA Bancomer | Casa Ley |
| BBVA Bancomer | BBVA Bancomer |
| Citibanamex| Chedraui |
| Citibanamex| Telecomm |
| Citibanamex| Citibanamex |

------------

----[mpe]----

Para configurar pagos con **PagoEfectivo**, envía un **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> WARNING
>
> Atención
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token. Consulta más información en [Credenciales](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials). Además, se te solicitará enviar el *header* `X-Idempotency-Key` con tu llave de idempotencia para asegurar la ejecución y reejecución de las solicitudes evitando situaciones no deseadas, como pagos duplicados, por ejemplo.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test_user_42972582@testuser.com'
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 5000,
    Description = "Título del producto",
    PaymentMethodId = "pagoefectivo_atm",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_42972582@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título del producto",
    "payment_method_id": "pagoefectivo_atm",
    "payer": {
        "email": "test_user_42972582@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := paymentmethod.NewClient(cfg)


resources, err := client.List(context.Background())
if err != nil {
   fmt.Println(err)
   return
}


for _, v := range resources {
   fmt.Println(v)
}
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
  "transaction_amount": 100,
  "description": "Titulo del producto",
  "payment_method_id": "pagoefectivo_atm",
  "payer": { "email": "test_user_12345@testuser.com" }
}'

```
]]]

La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

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


## Cancelar pago

Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).

------------

----[mco]----

Para configurar pagos con **Efecty**, envía un **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> WARNING
>
> Atención
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token. Consulta más información en [Credenciales](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials). Además, se te solicitará enviar el *header* `X-Idempotency-Key` con tu llave de idempotencia para asegurar la ejecución y reejecución de las solicitudes evitando situaciones no deseadas, como pagos duplicados, por ejemplo.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 5000,
  description: 'Título del producto',
  payment_method_id: 'efecty',
  payer: {
    email: 'test_user_19549678@testuser.com',
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 5000,
    Description = "Título del producto",
    PaymentMethodId = "efecty",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19549678@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 5000,
    "description": "Título del producto",
    "payment_method_id": "efecty",
    "payer": {
        "email": "test_user_19549678@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := paymentmethod.NewClient(cfg)


resources, err := client.List(context.Background())
if err != nil {
   fmt.Println(err)
   return
}


for _, v := range resources {
   fmt.Println(v)
}
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
  "transaction_amount": 10000,
  "description": "Titulo del producto",
  "payment_method_id": "efecty",
  "payer": { "email": "test_user_12345@testuser.com" }
}'

```
]]]


La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

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

## Fecha de vencimiento

Opcionalmente, es posible cambiar la fecha de vencimiento para pagos con dinero enviando el campo `date_of_expiration` en la solicitud de creación del pago, definiendo un plazo entre 1 y 30 días a partir de la fecha de emisión del pago.

Para cambiar la fecha de vencimiento, utiliza uno de los códigos disponibles a continuación.

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
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
La fecha usa el formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

El plazo de acreditación es de hasta 2 horas hábiles según el medio de pago. Por lo tanto, establece la fecha de vencimiento en un mínimo de 3 días para asegurarse de que el pago se efectúe.

> WARNING
>
> Importante
>
> Si el boleto se paga después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.

## Cancelar pago

Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).


------------
----[mlu]----

Para configurar pagos con **Abitab** y/o **Redpagos**, envía un POST con los siguientes parámetros al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs a continuación.

> WARNING
>
> Atención
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada - Access Token. Consulta más información en [Credenciales](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials). Además, se te solicitará enviar el *header* `X-Idempotency-Key` con tu llave de idempotencia para asegurar la ejecución y reejecución de las solicitudes evitando situaciones no deseadas, como pagos duplicados, por ejemplo.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<YOUR_ACCESS_TOKEN>' });
const payments = new Payments(client);

payments.create({
body: {
		transaction_amount: '<TRANSACTION_AMOUNT>',
		payment_method_id: '<PAYMENT_METHOD_ID>',
		payer: {
			email: '<EMAIL>'
			}
},
	requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
          .transactionAmount(new BigDecimal("<TRANSACTION_AMOUNT>"))
          .paymentMethodId("<PAYMENT_METHOD_ID>")
          .payer(
              PaymentPayerRequest.builder()
                  .email("<EMAIL>").build()
          ).build();

Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();

PaymentClient client = new PaymentClient();
client.create(paymentCreateRequest, requestOptions);

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'abitab',
  payer: {
    email: 'test_user_84162205@testuser.com',
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Description = "Título del producto",
    PaymentMethodId = "abitab",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_84162205@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título del producto",
    "payment_method_id": "abitab",
    "payer": {
        "email": "test_user_84162205@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := paymentmethod.NewClient(cfg)


resources, err := client.List(context.Background())
if err != nil {
   fmt.Println(err)
   return
}


for _, v := range resources {
   fmt.Println(v)
}
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
--data-raw '{
  "transaction_amount": 100,
  "description": "Titulo del producto",
  "payment_method_id": "abitab",
  "payer": { "email": "test_user_12345@testuser.com" }
}'

```
]]]

La respuesta mostrará el **status pendiente** hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

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

## Cancelar pago

Para evitar problemas de facturación, es importante cancelar los pagos expirados. Además, ten en cuenta que **es posible cancelar solo los pagos que están pendientes o en proceso**. Si un pago vence dentro de los 30 días, la cancelación es automática y el estado final del pago será "cancelado" o "expirado".

Para obtener más información, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).

------------