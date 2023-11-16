----[mco]----
# PSE
Con el Checkout API de Mercado Pago puedes ofrecer pagos con **PSE -Pagos Seguros en Línea-**, el servicio que permite realizar compras y pagos a través de internet debitando los recursos en línea directamente de cuentas de ahorros, corriente o depósito electrónico.

Para obtener una lista detallada de todos los medios de pago disponibles para integración, envía un **GET** con tu _Public key_ al endpoint [/v1/payment_methods](/developers/es/reference/payment_methods/_payment_methods/get) o, si lo prefieres, haz la solicitud utilizando uno de nuestros SDKs.

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

var response = await mercadopago.payment_methods.listAll();
var payment_methods = response.body;
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

> NOTE
>
> Nota
>
> Recomendamos que, al momento de exhibir el listado de bancos, lo hagas en orden alfabético y de manera ascendente ; es decir, de la A a la Z. 

Para ofrecer pagos con **PSE**, sigue los siguientes pasos.


## Importar MercadoPago.js

Para realizar la integración de Checkout API, es necesario capturar los datos necesarios para procesar el pago.

Esta captura se realiza incluyendo la biblioteca `MercadoPago.js` en tu proyecto, seguida del formulario de pago. Utiliza el siguiente código para importar la biblioteca MercadoPago.js antes de añadir el formulario de pago.

[[[
```html

<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
]]]


## Configurar credenciales

Las [credenciales](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials) son claves únicas con las que identificamos una integración en tu cuenta. Se utilizan para capturar pagos en tiendas online y otras aplicaciones de forma segura.

Esta es la primera etapa de una estructura de código completa que se debe seguir para integrar correctamente los pagos. Presta atención a los siguientes bloques para añadirlos a los códigos como se indica.


[[[
```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
]]]


## Añadir formulario de pago

Con la biblioteca `MercadoPago.js` incluida, añade el siguiente formulario de pago a tu proyecto para garantizar la captura segura de los datos de los compradores. En esta etapa es importante utilizar la lista que consultaste para obtener los medios de pago disponibles para crear las opciones de pago que deseas ofrecer.

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
        <label for="zipCode">Zip Code</label>
        <input id="form-checkout__zipCode" name="zipCode" type="text">
      </div>
      <div>
        <label for="streetName">Street Name</label>
        <input id="form-checkout__streetName" name="streetName" type="text">
      </div>
      <div>
        <label for="streetNumber">Street Number</label>
        <input id="form-checkout__streetNumber" name="streetNumber" type="text">
      </div>
      <div>
        <label for="neighborhood">Neighborhood</label>
        <input id="form-checkout__neighborhood" name="neighborhood" type="text">
      </div>
      <div>
        <label for="city">Ciudad</label>
        <input id="form-checkout__city" name="city" type="text">
      </div>
      <div>
        <label for="federalUnit">Unidad Federal</label>
        <input id="form-checkout__federalUnit" name="federalUnit" type="text">
      </div>
      <div>
        <label for="phoneAreaCode">PhoneAreaCode</label>
        <input id="form-checkout__phoneAreaCode" name="phoneAreaCode" type="text">
      </div>
      <div>
        <label for="phoneNumber">PhoneNumber</label>
        <input id="form-checkout__phoneNumber" name="phoneNumber" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
      <div>
        <label for="personType">Tipo de persona</label>
        <select id="form-checkout__personType" name="personType" type="text">
          <option value="natural">Natural</option>
          <option value="juridica">Jurídica</option>
        </select>
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


## Obtener tipos de documentos

Después de configurar la credencial y añadir el formulario de pago, es necesario obtener los tipos de documentos que se utilizarán para rellenar el formulario de pago.

Al incluir el elemento `select` con el ID `id = docType` que se encuentra en el formulario, será posible completar automáticamente las opciones disponibles al llamar la siguiente función:

[[[
```javascript

document.getElementById('form-checkout__personType').addEventListener('change', e => {
    const personTypesElement = document.getElementById('form-checkout__personType');
    updateSelectOptions(personTypesElement.value);
});

function updateSelectOptions(selectedValue){
    console.log(selectedValue);
    const naturalDocTypes = [
        new Option('C.C', 'CC'),
        new Option('C.E.', 'CE'),
        new Option('Otro', 'Otro')
    ];
    const juridicaDocTypes = [
        new Option('NIT', 'NIT')
    ];
    const idDocTypes = document.getElementById('form-checkout__identificationType');
    
    if(selectedValue === 'natural') {
        idDocTypes.options.length = 0;
        naturalDocTypes.forEach(item => idDocTypes.options.add(item, undefined));
    } else {
        idDocTypes.options.length = 0;
        juridicaDocTypes.forEach(item => idDocTypes.options.add(item, undefined));
    }
}
 
 (function setIdentificationTypes () {
    try {
        const docTypeElement = document.getElementById('form-checkout__identificationType');
 
        updateSelectOptions('natural')
    }catch(e) {
        return console.error('Error getting identificationTypes: ', e);
    }
 })();

```
]]]


## Enviar pago

Al finalizar la inclusión del formulario de pago y obtener los tipos de documentos, es necesario enviar el email del comprador, el tipo y número de documento, el medio de pago utilizado y el detalle del importe a pagar utilizando nuestra API de Pagos o uno de nuestros SDKs.

Para configurar pagos con **PSE**, envía un **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

> WARNING
>
> Importante
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu clave privada (`Access_Token`).

[[[
```php

<?php
require '../vendor/autoload.php';

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 5000;
$payment->description = "Título del producto";
$payment->payment_method_id = "pse";
$payment->additional_info = array(
  "ip_address" => "127.0.0.1"
);
$payment->transaction_details = array(
  "financial_institution" => '1009'
);
$payment->callback_url = "http://www.your-site.com";

$payer = new MercadoPago\Payer();
$payer->email = $_POST['email'];
$payer->identification = array(
     "type" => $_POST['identificationType'],
     "number" => $_POST['identificationNumber']
);
$payer->address = array(
      "zip_code" => $_POST['zipCode'],
      "street_name": $_POST['streetName'],
      "street_number": $_POST['streetNumber'],
      "neighborhood": $_POST['neighborhood'],
      "city": $_POST['city'],
      "federal_unit": $_POST['federalUnit']
);

$payer->phone = array(
     "area_code" => $_POST['phoneAreaCode'],
     "number" => $_POST['phoneNumber']
);
$payer->entity_type = "individual";

$payment->payer = $payer;

$payment->save();

$response = array(
    'status' => $payment->status,
    'status_detail' => $payment->status_detail,
    'id' => $payment->id
);
echo json_encode($response);

```
```node

 const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var payment = req.body;

var payment_data = {
 	transaction_amount: 5000,
 	description: 'Título del producto',
 	payment_method_id: 'pse',
 	payer: {
 		entity_type: 'individual',
 		email: payment.email,
 		identification: {
 			type: payment.identificationType,
 			number: payment.identificationNumber
 		}
            address: {
                 zip_code: payment.zipCode,
                 street_name: payment.streetName,
                 street_number: payment.streetNumber,
                 neighborhood: payment.neighborhood,
                 city: payment.city,
                 Federal_unit: payment.federalUnit
           },
           phone: {
                 area_code: payment.phoneAreaCode,
                 number: payment.phoneNumber
           }
 	},
 	additional_info: {
 		ip_address: '127.0.0.1'
 	},
 	transaction_details: {
 		financial_institution: '1009'
 	},
 	callback_url: 'http://www.your-site.com'
};

mercadopago.payment.save(payment_data)
 	.then(function(response) {
 		res.status(response.status).json({
 			status: response.body.status,
 			status_detail: response.body.status_detail,
 			id: response.body.id,
 		});
 	})
 	.catch(function(error) {
 		res.status(error.status).send(error);
 	});

```
```java
 MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

  PaymentClient client = new PaymentClient();

  IdentificationRequest identification =
  	IdentificationRequest.builder()
  	.type(request.getPayer().getIdentification().getType())
  	.number(request.getPayer().getIdentification().getNumber())
  	.build();

  PaymentPayerAddressRequest address =
      PaymentPayerAddressRequest.builder()
      .zipCode(request.getPayer().getAddress().getZipCode())
      .streetName(request.getPayer().getAddress().getStreetName())
      .streetNumber(request.getPayer().getAddress().getStretNumber())
      .neighborhood(request.getPayer().getAddress().getNeighborhood())
      .city(request.getPayer().getAddress().getCity())
      .federalUnit(request.getPayer().getAddress().getFederalUnit())
      .build();

  PaymentPayerPhoneRequest phone =
      PaymentPayerPhoneRequest.builder()
      .areaCode(request.getPayer().getPhone().getAreaCode())
      .number(request.getPayer().getPhone().getNumber())
      .build();

  PaymentPayerRequest payer =
  	PaymentPayerRequest.builder()
  	.type("customer")
  	.email("test_payer_9999999@testuser.com")
  	.entityType("individual")
  	.firstName("Test")
  	.lastName("User")
  	.identification(identification)
      .address(address)
      .phone(phone)
  	.build();

  PaymentAdditionalInfoRequest additionalInfo =
  	PaymentAdditionalInfoRequest.builder()
  	.ipAddress("127.0.0.1")
  	.build();

  PaymentTransactionDetailsRequest transactionDetails = PaymentTransactionDetailsRequest.builder()
  	.financialInstitution("1009")
  	.build();

  PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
  	.transactionAmount(new BigDecimal(5000))
  	.description("description")
  	.paymentMethodId("pse")
  	.additionalInfo(additionalInfo)
  	.transactionDetails(transactionDetails)
  	.notificationUrl("https://your-site.com")
  	.payer(payer)
  	.build();

  client.create(paymentCreateRequest);
```
```ruby
 require 'mercadopago'
sdk = Mercadopago::SDK.new('ACCESS_TOKEN')

payment_data = {

  transaction_amount: 5000,
  description: "description",
  payment_method_id: "pse",
  additional_info: {
    ip_address: "127.0.0.1"
  },
  transaction_details: {
    financial_institution: "1009"
  },
  callback_url: "https://your-site.com"
  payer: {
    type: "customer",
    email: "test_payer_9999999@testuser.com",
    entity_type: "individual",
    first_name: "Test",
    last_name: "User",
    identification: {
      type: params[: identificationType],
      number: params[: identificationNumber]
    }
    address: {
      zip_code: params[: zip_code],
      street_name: params[: street_name],
      street_number: params[: street_number],
      neighborhood: params[: neighborhood],
      city: params[: city],
      federal_unit: params[: federal_unit]
    }
    phone: {
      area_code: params[: area_code],
      number: params[: number]
    }
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[: response]

```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ACCESS_TOKEN";

var client = new PaymentClient();

var identification = new IdentificationRequest() {
  Type = request.Payer.Identification.Type,
    Number = request.Payer.Identification.Number
};

var address = new PaymentPayerAddressRequest() {
    ZipCode = request.Payer.Address.ZipCode,
    StreetName = request.Payer.Address.StreetName,
    StreetNumber = request.Payer.Address.StreetNumber,
    Neighborhood = request.Payer.Address.Neighborhood,
    City = request.Payer.Address.City,
    FederalUnit = request.Payer.Address.FederalUnit
};

var phone = new PaymentPayerPhoneRequest() {
    AreaCode = request.Payer.Phone.AreaCode,
    Number = request.Payer.Phone.Number
};

var payer = new PaymentPayerRequest() {
    Type = "customer",
    Email = "test_payer_9999999@testuser.com",
    EntityType = "individual",
    FirstName = "Test",
    LastName = "User",
    Identification = identification,
    Address = address,
    Phone = phone
};

var additionalInfo = new PaymentAdditionalInfoRequest() {
  IpAddress = "127.0.0.1"
};

var transactionDetails = new PaymentTransactionDetailsRequest() {
  FinancialInstitution = "1009"
};

var paymentCreateRequest = new PaymentCreateRequest() {
    TransactionAmount = 5000,
    Description = "description",
    PaymentMethodId = "pse",
    AdditionalInfo = additionalInfo,
    TransactionDetails = transactionDetails,
    CallbackUrl = "https://your-site.com",
    Payer = payer
};

var payment = await client.CreateAsync(paymentCreateRequest);

```
```python

 import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
 
payment_data = {
   "transaction_amount": 5000,
   "description": "description",
   "payment_method_id": "pse",
   "additional_info": {
      "ip_address": "127.0.0.1"
   },
   "transaction_details": {
      "financial_institution": "1009"
   },
   "callback_url": "https://your-site.com"
   "payer": {
       "type": "customer",
       "email": "test_payer_9999999@testuser.com",
       "entity_type": "individual",
       "first_name": "Test",
       "last_name": "User",
       "identification": {
           "type": request.POST.get("type"), 
           "number": request.POST.get("number")
       }
       "address": {
                 "zip_code": request.POST.get("zipCode"),
                 "street_name": request.POST.get("streetName"),
                 "street_number": request.POST.get("streetNumber"),
                 "neighborhood": request.POST.get("neighborhood"),
                 "city": request.POST.get("city"),
                 "federal_unit": request.POST.get("federalUnit")
       },
       "phone": {
                 "area_code": request.POST.get("phoneAreaCode"),
                 "number": request.POST.get("phoneNumber")
       }
   }
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]


```
```curl
 curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-H 'Content-Type: application/json' \
--d '{
    "transaction_amount": 5000,
    "description": "Título del producto",
    "payment_method_id": "pse",
    "payer": {
        "email": "test_user_19549678@testuser.com",
        "entity_type": "individual",
        "identification": {
            "type": "CC",
            "number": "76262349"
        }, 
        "address": {
          "zip_code": "111",
          "street_name": "siempre viva",
          "street_number": "111",
          "neighborhood": "sarasa",
          "city": "salto",
          "federal_unit": "1"
        },
        "phone": {
          "area_code": "011",
          "number": "2134242412"
        }
    },
    "additional_info": {
        "ip_address": "127.0.0.1"
    },
    "transaction_details": {
        "financial_institution": "1009"
    },
    "callback_url": "http://www.your-site.com"
}'

```
]]]

Los siguientes campos para enviar un pago son **obligatorios** y deberás completarlos siguiendo las especificaciones de la de la tabla a continuación:

| Campo | Descripción | Valores posibles/validaciones | Llamado para obtener los valores |
|:---:|:---:|:---:|:---:|
| `transaction_details.financial_institution` | Banco informado en el POST para hacer la transferencia electrónica. Se debe mostrar al usuario el listado de bancos y permitirle seleccionar. El listado se actualiza, por lo que se recomienda consumir la información cada una hora. | - | https://api.mercadopago.com/v1/payment_methods/search?site_id=MCO&id=pse&public_key=**YOUR_PUBLIC_KEY**  |
| `payer.entity_type` | Tipo de personería, física o jurídica.  | *individual* o *association* | - |
| `payer.identification` | Tipo y número de documento del comprador. | - | curl -X GET \<br>'https://api.mercadopago.com/v1/identification_types' \<br>-H 'Authorization: Bearer **YOUR_PUBLIC_KEY**' |
| `additional_info.ip_address` | Dirección IP del comprador, donde se genera el pago. | - | - |
| `callback_url` | Página donde se redirecciona al comprador por defecto luego de realizar el pago dentro de la interfaz del banco, cuando el comprador indica que desea regresar a la tienda. <br>Puedes ver mensajes sugeridos para mostrar al comprador en el subtítulo “Ejemplos de mensajes para callback URL”. | - | - |
| `payer.address.zip_code` | Código postal del comprador | - | - |
| `payer.address.street_name` | Nombre de la calle del domicilio del comprador | - | - |
| `payer.address.street_number` | Número del domicilio del comprador | - | - |
| `payer.address.neighborhood` | Barrio al que pertenece la dirección del comprador | - | - |
| `payer.address.city` | Ciudad del comprador | - | - |
| `payer.phone.area_code` | Código de área del teléfono del comprador. | - | - |
| `payer.phone.number` | Número de teléfono del comprador | - | - |


La respuesta mostrará el status `pendiente` hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro `external_resource_url` devolverá una URL a la que debes redirigir al comprador para que finalice el flujo de pago.

```json
{
    "id": 1312147735,
     ..., 
    "operation_type": "regular_payment",
    "payment_method_id": "pse",
    "payment_type_id": "bank_transfer",
    "payment_method": {
        "id": "pse",
        "type": "bank_transfer"
    },
    "status": "pending",
    "status_detail": "pending_waiting_transfer",
     ...,
    "description": "Título del producto",
     ..., 
    "callback_url": "http://www.your-site.com",
    "installments": 1,
    "transaction_details": {
     ...,
        "total_paid_amount": 5000,
     ...,
        "external_resource_url": "https://www.mercadopago.com.co/sandbox/payments/1312147735/bank_transfer?caller_id=1148920820&hash=f41dd14f-b3a6-4ac4-9b78-5cfeb5a35e77",
     ...,
        "financial_institution": "1009",
     ...,
        "bank_transfer_id": 129229,
        "transaction_id": "10022214"
    }, 
}

```

> NOTE
>
> Importante
>
> En caso de recibir un error al generar un pago, puedes consultar el listado de errores posibles en la sección [Referencia de API](/developers/es/reference/payments/_payments/post), o bien dirigirte a [Errores en pagos con PSE](/developers/es/checkout-api/error-messages/pse-errors).

### Ejemplos de mensajes para callback URL

Una vez que el comprador realiza el pago en la plataforma del banco seleccionado, este es redirigido a una *callback URL*, en la que se le informa el estado de su transacción. 

A continuación, te mostramos ejemplos de mensajes que puedes ofrecerle, de acuerdo a los tres estados posibles en los que puede encontrarse un pago.

#### * Estado aprobado

![imagen de transacción exitosa y redireccionamiento](/images/api/pse-transaccion-aprobada.png)

#### * Estado pendiente

![imagen de transacción pendiente](/images/api/pse-transaccion-pendiente.png)

#### * Estado rechazado

![imagen de transacción rechazada](/images/api/pse-transaccion-rechazada.png)


## Expiración

El pago creado con **PSE** expira automáticamente dentro de los 15 minutos de generado y su status pasa a ser `rechazado`. Si el comprador no accede a la web y realiza el pago dentro de ese tiempo, será necesario generar uno nuevo.

------------