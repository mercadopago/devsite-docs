# Pix

Pix es un medio de pago electrónico instantáneo ofrecido por el Banco Central de Brasil a personas físicas y jurídicas. A través de Checkout API, es posible ofrecer esta opción de pago a través de un código QR o un código de pago.  

> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar **pagos con Pix** utilizando el **Brick de Payment**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/payment-brick/default-rendering#editor_2) de Payment para obtener más detalles.

Para integrar los pagos vía Pix, sigue las siguientes etapas; pero si ya integraste los pagos con tarjeta, inicia la integración desde la etapa [Añadir formulario de pago](/developers/es/docs/checkout-api/integration-configuration/integrate-with-pix#bookmark_Añadir_formulario_de_pago).

## Importar MercadoPago.js

Después de crear las claves Pix, es necesario realizar la captura de datos para el pago. Esta captura se realiza incluyendo la biblioteca MercadoPago.js en tu proyecto, seguida del formulario de pago. Utiliza el siguiente código para importar la biblioteca MercadoPago.js antes de añadir el formulario de pago.

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


## Configurar credencial

Las credenciales son claves únicas con las que identificamos una integración en tu cuenta. Se utilizan para capturar pagos en tiendas online y otras aplicaciones de forma segura.

Esta es la primera etapa de una estructura de código completa que se debe seguir para integrar correctamente los pagos vía Pix. Presta atención a los siguientes bloques para añadirlos a los códigos como se indica.

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

Con la biblioteca MercadoPago.js incluida y la credencial configurada, añade el formulario de pago que aparece a continuación a tu proyecto para garantizar la captura segura de los datos de los clientes.


[[[
```html

  <form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="payerFirstName">Nombre</label>
        <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
      </div>
      <div>
        <label for="payerLastName">Apellido</label>
        <input id="form-checkout__payerLastName" name="payerLastName" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
      <div>
        <label for="identificationType">Tipo del documento</label>
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


## Obtener tipos de documento

Después de configurar la credencial, añadir el formulario de pago e inicializar los campos de la tarjeta, es necesario obtener los tipos de documentos que se utilizarán para rellenar el formulario de pago.

Al incluir el elemento `select` con el id: `form-checkout__identificationType` que se encuentra en el formulario, será posible completar automáticamente las opciones disponibles al llamar la siguiente función.

[[[
```javascript

    (async function getIdentificationTypes() {
      try {
        const identificationTypes = await mp.getIdentificationTypes();
        const identificationTypeElement = document.getElementById('form-checkout__identificationType');

        createSelectOptions(identificationTypeElement, identificationTypes);
      } catch (e) {
        return console.error('Error getting identificationTypes: ', e);
      }
    })();

    function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {
      const { label, value } = labelsAndKeys;

      elem.options.length = 0;

      const tempOptions = document.createDocumentFragment();

      options.forEach(option => {
        const optValue = option[value];
        const optLabel = option[label];

        const opt = document.createElement('option');
        opt.value = optValue;
        opt.textContent = optLabel;

        tempOptions.appendChild(opt);
      });

      elem.appendChild(tempOptions);
    }
```
]]]


## Enviar pago

Al finalizar la inclusión del formulario de pago, es necesario enviar el email del comprador, el tipo y número de documento, el medio de pago utilizado (pix) y el detalle del importe.

Para configurar los pagos con Pix, envía un **POST** al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, realiza la solicitud utilizando nuestros SDKs.


[[[
```php
<?php
 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título del producto";
 $payment->payment_method_id = "pix";
 $payment->payer = array(
     "email" => "PAYER_EMAIL",
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
  description: 'Título del producto',
  payment_method_id: 'pix',
  payer: {
    email: 'PAYER_EMAIL',
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
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .description("Título del producto")
       .paymentMethodId("pix")
       .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
       .payer(
           PaymentPayerRequest.builder()
               .email("PAYER_EMAIL")
               .firstName("Test")
               .identification(
                   IdentificationRequest.builder().type("CPF").number("19119119100").build())
               .build())
       .build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'pix',
  payer: {
    email: 'PAYER_EMAIL',
    identification: {
      type: 'CPF',
      number: '19119119100',
    }
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título del producto",
    PaymentMethodId = "pix",
    Payer = new PaymentPayerRequest
    {
        Email = "PAYER_EMAIL",
        FirstName = "Test",
        LastName = "User",
        Identification = new IdentificationRequest
        {
            Type = "CPF",
            Number = "191191191-00",
        },
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
    "payment_method_id": "pix",
    "payer": {
        "email": "PAYER_EMAIL",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "CPF",
            "number": "191191191-00"
        },
        "address": {
            "zip_code": "06233-200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "description": "Título del producto",
      "payment_method_id": "pix",
      "payer": {
        "email": "PAYER_EMAIL",
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



La respuesta mostrará el estado del pago pendiente y toda la información que necesitas mostrar al comprador. El valor `transaction_data` devolverá los datos del código QR.


[[[
```json
{
  ...,
  "id": 5466310457,
  "status": "pending",
  "status_detail": "pending_waiting_transfer",
  ...,
  "transaction_details": {
      "net_received_amount": 0,
      "total_paid_amount": 100,
      "overpaid_amount": 0,
      "external_resource_url": null,
      "installment_amount": 0,
      "financial_institution": null
  },
  "point_of_interaction": {
      "type": "PIX",
      "sub_type": null,
      "application_data": {
        "name": "NAME_SDK",
        "version": "VERSION_NUMBER"
      },
      "transaction_data": {
        "qr_code_base64": "iVBORw0KGgoAAAANSUhEUgAABRQAAAUUCAYAAACu5p7oAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAIABJREFUeJzs2luO3LiWQNFmI+Y/Zd6vRt36KGNXi7ZOBtcagHD4kNLeiLX33v8DAAAAABD879sDAAAAAAA/h6AIAAAAAGSCIgAAAACQCYoAAAAAQCYoAgAAAACZoAgAAAAAZIIiAAAAAJAJigAAAABAJigCAAAAAJmgCAAAAABkgiIAAAAAkAmKAAAAAEAmKAIAAAAAmaAIAAAAAGSCIgAAAACQCYoAAAAAQCYoAgAAAACZoAgAAAAAZIIiAAAAAJAJigAAAABAJigCA...",
        "qr_code": "00020126600014br.gov.bcb.pix0117john@yourdomain.com0217additional data520400005303986540510.005802BR5913Maria Silva6008Brasilia62070503***6304E2CA",
        "ticket_url": "https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=123e4567-e89b-12d3-a456-426655440000"
      }
  }
  ...,
}
```
]]]


Con Pix, también puedes elegir el plazo que el cliente tendrá para pagar la compra, definiendo la validez del código de pago que se le envía después de realizar el pedido.

> NOTE
>
> Importante
>
> Por defecto, la fecha de vencimiento para pagos con Pix es de **24 horas**, pero puedes modificarla enviando el campo `date_of_expiration` en el request de creación del pago. La fecha configurada debe estar entre **30 minutos y hasta 30 días** a partir de la fecha de emisión del pago.

## Visualización del pago

Para que el usuario pueda efectuar el pago, debes elegir la forma de visualización del mismo, que puede ser a través de un botón o de un código QR que debe ser renderizado. 

Selecciona la opción que mejor se adapte a tu modelo de negocio y sigue las etapas descritas a continuación.


* **Añadir link o botón**: Al optar por añadir un link o botón para el pago con Pix, el comprador será dirigido a una nueva ventana que contiene toda la información para el pago, como QR Code, Pix Copia e Cola y las instrucciones de pago.

Para ofrecer esta opción, utiliza el atributo `ticket_url`, que muestra un Pix en una nueva ventana con toda la información del QR Code, Pix Copia e Cola y de las instrucciones de pago.

[[[
```html

<a href="https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=123e4567-e89b-12d3-a456-426655440000" target="_blank">Pagar con Pix</a>
```
]]]


* **Renderizar Código QR**: Es posible renderizar el código QR vigente, que se utilizará una sola vez, en la propia pantalla. Además, también se puede añadir una opción para copiar y pegar el código de pago, lo que le permitirá realizar la transacción desde un Internet Banking.

Sigue las etapas que se indican a continuación para renderizar el código QR y hacer que el recurso de copiar y pegar esté disponible.


1. Añade el `qr_code_base64` para exhibir el código QR.


[[[
```html
<img src={`data:image/jpeg;base64,${qr_code_base64}`/>

```
]]]


2. Para mostrar la opción que permitirá copiar y pegar el código de pago, añade el qr_code de la siguiente manera:

[[[
 ```html
    <label for="copiar">Copiar Hash:</label>
    <input type="text" id="copiar"  value={qr_code}/>
```
]]]


Al finalizar estas etapas, el código QR estará renderizado y se mostrará al comprador durante el pago. 


