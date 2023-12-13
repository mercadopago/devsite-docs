----[mco]----

# Cómo migrar a la nueva versión de PSE

Checkout API cuenta actualmente con una nueva integración PSE, que permitirá a los compradores utilizar este medio de pago de una manera sencilla y simplificada. 

Si **ya cuentas con una integración PSE implementada** en Checkout API, podrás realizar una actualización a esta nueva versión a partir de la inclusión de nuevos campos durante la creación del pago. Sigue los pasos a continuación para saber cómo hacerlo de manera correcta. 

> WARNING
>
> Importante
>
> Si todavía no implementaste una integración con PSE y  deseas saber cómo desarrollarla, consulta la [guía para nuevas integraciones](/developers/es/docs/checkout-api/integration-configuration/pse). 

> CLIENT_SIDE
>
> h2
>
> Agregar nuevos campos al formulario de pago

Para comenzar la migración, deberás agregar nuevos campos obligatorios al formulario de pago que ya habías añadido a tu proyecto. Estos nuevos campos serán relativos a la dirección y el teléfono del comprador, tal como se muestra en la tabla a continuación:

| Campo | Descripción |
|---|---|
| `payer.address.zip_code` | Código postal del comprador |
| `payer.address.street_name` | Nombre de la calle del domicilio del comprador |
| `payer.address.street_number` | Número del domicilio del comprador |
| `payer.address.neighborhood` | Barrio al que pertenece la dirección del comprador |
| `payer.address.city` | Ciudad del comprador |
| `payer.phone.area_code` | Código de área del teléfono del comprador. |
| `payer.phone.number` | Número de teléfono del comprador |

En el ejemplo a continuación, encontrarás una nueva estructura de código que incluye todos estos campos obligatorios y los elementos `HTML` que necesitarás en los próximos pasos. 

```HTML
<form id="form-checkout" action="/process_payment" method="post">
    <div>
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
        <label for="banksList">Banco</label>
        <div id="banksList"></div> 
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

> CLIENT_SIDE
>
> h2
>
> Obtener tipos de documentos

En esta nueva integración con PSE, es necesario poder obtener y enviar exclusivamente los tipos de documento que se corresponden con el tipo de persona seleccionada durante la adición del formulario de pago. Se trata de un cambio con respecto a la antigua integración, en la que no era necesaria esta diferenciación.

Para obtener los tipos de documento de manera automática, utiliza la siguiente función:

```javascript
document.getElementById('form-checkout__personType').addEventListener('change', e => {
    const personTypesElement = document.getElementById('form-checkout__personType');
    updateSelectOptions(personTypesElement.value);
});

function updateSelectOptions(selectedValue){
    
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
```

> CLIENT_SIDE
>
> h2
>
> Listar bancos

Al crear un pago con PSE, es necesario enviar el código del banco que será utilizado para hacer la transferencia. Para ello, deberás listar los bancos disponibles y ofrecer las opciones al pagador, para que elija el banco de su preferencia. 

Para obtener el listado de bancos disponibles para PSE primero deberás, desde el backend, obtener los medios de pago enviando un **GET** con tu _Access Token_ al endpoint [/v1/payment_methods](/developers/es/reference/payment_methods/_payment_methods/get), o bien obtenerlos mediante [nuestras SDKs](/developers/es/docs/sdks-library/landing) y enviarlos al frontend. 

En el siguiente ejemplo, puedes ver cómo enviar los medios de pago por medio de un endpoint de aplicación, `/payment_methods`. Una vez que este endpoint es llamado desde el frontend, el listado de bancos disponibles para PSE es obtenido a través del campo `financial_institutions` dentro del objeto con `id=pse`. 

Para mostrar la lista de bancos, crea un un elemento `select` en javascript, y enriquécelo con los datos devueltos en el llamado a la API, como también muestra el ejemplo.

```javascript
function setPse() {
    fetch('/payment_methods')
        .then(async function(response) {
            const paymentMethods = await response.json();
            const pse = paymentMethods.filter((method) => method.id === 'pse')[0];
            const banksList = pse.financial_institutions;
            const banksListElement = document.getElementById('banksList');
            const selectElement = document.createElement('select');
            selectElement.name = 'financialInstitution';

            banksList.forEach(bank => {
                const option = document.createElement('option');
                option.value = bank.id;
                option.textContent = bank.description;
                selectElement.appendChild(option);
            });

            banksListElement.appendChild(selectElement);

        }).catch(function(reason) {
            console.error('Failed to get payment methods', reason);
        });
}
```

> NOTE
>
> Nota
>
> Recomendamos que, al momento de exhibir el listado de bancos, lo hagas en orden alfabético y de manera ascendente; es decir, de la *A* a la *Z*. 

Para que los elementos dinámicos creados con estos javascript se carguen cuando la página termine de renderizar, deberás añadir el siguiente código:

```javascript
(function initCheckout() {
    try {
        const docTypeElement = document.getElementById('form-checkout__identificationType');
        setPse();
        updateSelectOptions('natural')
    }catch(e) {
        return console.error('Error getting identificationTypes: ', e);
    }
 })();

``` 


> SERVER_SIDE
>
> h2
>
> Enviar pago

Enviar un pago con la nueva implementación de PSE implica sólo algunos cambios. 

Deberás enviar un **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecutar la solicitud, pero será necesario añadir los nuevos campos obligatorios (`address` y `phone`). Aquí debajo puedes ver un ejemplo completo como referencia, seguido de una descripción de cada campo a enviar:

[[[
```php

<?php
use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\MercadoPagoConfig;

MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
$client = new PaymentClient();
$payment = $client->create([
  "transaction_amount" => 5000,
  "description" => "Product description",
  "payment_method_id" => "pse",
  "additional_info" => [
    "ip_address" => "127.0.0.1"
  ],
  "transaction_details" => [
    "financial_institution" => $_POST['financialInstitution']
  ],
  "callback_url" => "http://www.your-site.com",
  "email" => $_POST['email'],
  "identification" => [
       "type" => $_POST['identificationType'],
       "number" => $_POST['identificationNumber']
  ],
  "address" => [
        "zip_code" => $_POST['zipCode'],
        "street_name": $_POST['streetName'],
        "street_number": $_POST['streetNumber'],
        "neighborhood": $_POST['neighborhood'],
        "city": $_POST['city'],
        "federal_unit": $_POST['federalUnit']
  ],

  "phone" => [
       "area_code" => $_POST['phoneAreaCode'],
       "number" => $_POST['phoneNumber']
  ],
  "entity_type" => "individual";
]);

echo implode($payment);
?>

```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });
const payment = new Payment(client);

payment.create({
      body: {
 	transaction_amount: 5000,
 	description: 'Product description',
 	payment_method_id: 'pse',
 	payer: {
 		entity_type: 'individual',
 		email: req.body.email,
 		identification: {
 			type: req.body.identificationType,
 			number: req.body.identificationNumber
 		}
            address: {
                 zip_code: req.body.zipCode,
                 street_name: req.body.streetName,
                 street_number: req.body.streetNumber,
                 neighborhood: req.body.neighborhood,
                 city: req.body.city,
                 Federal_unit: req.body.federalUnit
           },
           phone: {
                 area_code: req.body.phoneAreaCode,
                 number: req.body.phoneNumber
           }
 	},
 	additional_info: {
 		ip_address: '127.0.0.1'
 	},
 	transaction_details: {
 		financial_institution: req.body.financialInstitution
 	},
 	callback_url: 'http://www.your-site.com'
   }
}).then(function(response) {
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
  	.type(request.getIdentificationType())
  	.number(request.getIdentificationNumber())
  	.build();

  PaymentPayerAddressRequest address =
      PaymentPayerAddressRequest.builder()
      .zipCode(request.getZipCode())
      .streetName(request.getStreetName())
      .streetNumber(request.getStretNumber())
      .neighborhood(request.getNeighborhood())
      .city(request.getCity())
      .federalUnit(request.getFederalUnit())
      .build();

  PaymentPayerPhoneRequest phone =
      PaymentPayerPhoneRequest.builder()
      .areaCode(request.getPhoneAreaCode())
      .number(request.getPhoneNumber())
      .build();

  PaymentPayerRequest payer =
  	PaymentPayerRequest.builder()
  	.email(request.getEmail())
  	.entityType("individual")
  	.identification(identification)
      .address(address)
      .phone(phone)
  	.build();

  PaymentAdditionalInfoRequest additionalInfo =
  	PaymentAdditionalInfoRequest.builder()
  	.ipAddress("127.0.0.1")
  	.build();

  PaymentTransactionDetailsRequest transactionDetails = PaymentTransactionDetailsRequest.builder()
  	.financialInstitution(request.getFinancialInstitution())
  	.build();

  PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
  	.transactionAmount(new BigDecimal(5000))
  	.description("Product description")
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
  description: "Product description",
  payment_method_id: "pse",
  additional_info: {
    ip_address: "127.0.0.1"
  },
  transaction_details: {
    financial_institution: params[: financialInstitution]
  },
  callback_url: "https://your-site.com"
  payer: {
    email: params[:email],
    entity_type: "individual",
    identification: {
      type: params[: identificationType],
      number: params[: identificationNumber]
    }
    address: {
      zip_code: params[: zipCode],
      street_name: params[: streetName],
      street_number: params[: streetNumber],
      neighborhood: params[: neighborhood],
      city: params[: city],
      federal_unit: params[: federalUnit]
    }
    phone: {
      area_code: params[: phoneAreaCode],
      number: params[: phoneNumber]
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
  Type = request.IdentificationType,
    Number = request.IdentificationNumber
};

var address = new PaymentPayerAddressRequest() {
    ZipCode = request.ZipCode,
    StreetName = request.StreetName,
    StreetNumber = request.StreetNumber,
    Neighborhood = request.Neighborhood,
    City = request.City,
    FederalUnit = request.FederalUnit
};

var phone = new PaymentPayerPhoneRequest() {
    AreaCode = request.PhoneAreaCode,
    Number = request.PhoneNumber
};

var payer = new PaymentPayerRequest() {
    Email = request.Email,
    EntityType = "individual",
    Identification = identification,
    Address = address,
    Phone = phone
};

var additionalInfo = new PaymentAdditionalInfoRequest() {
  IpAddress = "127.0.0.1"
};

var transactionDetails = new PaymentTransactionDetailsRequest() {
  FinancialInstitution = request.FinancialInstitution
};

var paymentCreateRequest = new PaymentCreateRequest() {
    TransactionAmount = 5000,
    Description = "Product description",
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
   "description": "Product description",
   "payment_method_id": "pse",
   "additional_info": {
      "ip_address": "127.0.0.1"
   },
   "transaction_details": {
      "financial_institution": request.POST.get("financialInstitution")
   },
   "callback_url": "https://your-site.com"
   "payer": {
       "email": request.POST.get("email"),
       "entity_type": "individual",
       "identification": {
           "type": request.POST.get("identificationType"), 
           "number": request.POST.get("identificationNumber")
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
-H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
-H 'Content-Type: application/json' \
--d '{
    "transaction_amount": 5000,
    "description": "Product description",
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

La tabla a continuación contiene los **campos obligatorios** y sus especificaciones:

| Campo | Descripción | Valores posibles/validaciones | Llamado para obtener los valores |
|:---:|:---:|:---:|:---:|
| `transaction_details.financial_institution` | Banco informado en el POST para hacer la transferencia electrónica. Se debe mostrar al usuario el listado de bancos y permitirle seleccionar. El listado se actualiza, por lo que se recomienda consumir la información cada una hora. | - | https://api.mercadopago.com/v1/payment_methods/search?site_id=MCO&id=pse&public_key=YOUR_PUBLIC_KEY  |
| `payer.entity_type` | Tipo de personería, natural o jurídica.  | *individual* o *association* | - |
| `payer.identification` | Tipo y número de documento del comprador. | - | curl -X GET \<br>'https://api.mercadopago.com/v1/identification_types' \<br>-H 'Authorization: Bearer **YOUR_PUBLIC_KEY**' |
| `additional_info.ip_address` | Dirección IP del comprador, donde se genera el pago. | - | - |
| `callback_url` | Página donde se redirecciona al comprador por defecto luego de realizar el pago dentro de la interfaz del banco, cuando el comprador indica que desea regresar a la tienda. <br>Puedes ver mensajes sugeridos para mostrar al comprador en el subtítulo [Ejemplos de mensajes para callback URL](/developers/es/docs/checkout-api/how-tos/migrate-pse#bookmark_ejemplos_de_mensajes_para_callback_url). | - | - |
| `payer.address.zip_code` | Código postal del comprador | - | - |
| `payer.address.street_name` | Nombre de la calle del domicilio del comprador | - | - |
| `payer.address.street_number` | Número del domicilio del comprador | - | - |
| `payer.address.neighborhood` | Barrio al que pertenece la dirección del comprador | - | - |
| `payer.address.city` | Ciudad del comprador | - | - |
| `payer.phone.area_code` | Código de área del teléfono del comprador. | - | - |
| `payer.phone.number` | Número de teléfono del comprador | - | - |


La respuesta mostrará el status `pendiente` hasta que el comprador realice el pago. Además, el parámetro `external_resource_url` devolverá una URL a la que debes redirigir al comprador para que finalice el flujo de pago.

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
     ...
    "description": "Título del producto",
     ... 
    "callback_url": "http://www.your-site.com",
    "installments": 1,
    "transaction_details": {
     ...
        "total_paid_amount": 5000,
     ...
        "external_resource_url": "https://www.mercadopago.com.co/sandbox/payments/1312147735/bank_transfer?caller_id=1148920820&hash=f41dd14f-b3a6-4ac4-9b78-5cfeb5a35e77",
     ...
        "financial_institution": "1009",
     ...
        "bank_transfer_id": 129229,
        "transaction_id": "10022214"
    }, 
}

```

> NOTE
>
> Importante
>
> En caso de recibir un error al generar un pago, puedes consultar el listado de errores posibles en la sección [Referencia de API](/developers/es/reference/payments/_payments/post), o bien dirigirte a [Errores en pagos con PSE](/developers/es/docs/checkout-api/error-messages/pse-errors).

### Ejemplos de mensajes para callback URL

Una vez que el comprador realiza el pago en la plataforma del banco seleccionado, este es redirigido a una *callback URL*, en la que se le informa el estado de su transacción. 

En la nueva versión, este es un **campo obligatorio**, por lo que necesitas poder ofrecer mensajes acorde a los diferentes estados de la transacción.

A continuación, te mostramos ejemplos de mensajes que puedes ofrecerle, de acuerdo a los tres estados posibles en los que puede encontrarse un pago.

#### Estado aprobado

![imagen de transacción exitosa y redireccionamiento](/images/api/pse-callback-approved.png)

#### Estado pendiente

![imagen de transacción pendiente](/images/api/pse-callback-pending.png)

#### Estado rechazado

![imagen de transacción rechazada](/images/api/pse-callback-rejected.png)


------------