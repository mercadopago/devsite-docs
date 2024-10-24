> SERVER_SIDE
>
> h1
>
> PSE

Para realizar un pago con PSE, antes de crearlo con los SDKs del backend, es necesario enviar tanto los datos otorgados por el *callback* `onSubmit`, como otros datos rereridos al pagador, indicados en la tabla a continuación:

| Campo | Descripción | Presente en el callback onSubmit del brick | Valores posibles/Validaciones |
|---|---|---|---|
| `transaction_amount` | Valor del pago. | Sí | Cualquier valor mayor que 0. |
| `transaction_details.financial_institution` | Banco informado para efectuar la transferencia electrónica. | Sí | Debe corresponder a un banco existente y no puede ser enviado nulo o vacío. |
| `payer.entity_type` | Tipo de persona, física ou jurídica. | Sí | `individual` o `association`. |
| `payer.identification.type` | Tipo de documento del comprador. | Sí | Valores enviados por el brick:<br> -`CC` (Cédula de Ciudadanía)<br> -`CE` (Cédula de Extranjería)<br> -`NIT`<br> -`Otro`<br>Valores aceptados (además de los enviados por el brick):<br> -`TE` (Tarjeta de Extranjería)<br> -`RC` (Registro Civil de Nacimiento)<br> -`TI` (Tarjeta de Identidad)<br> -`PAS` (Pasaporte) |
| `payer.identification.number` | Número de documento del comprador. | Sí | String. <br>Debe tener entre 1 y 15 caracteres numéricos. Si es "pasaporte", aceptará valores alfanuméricos. |
| `payer.first_name` | Nombre del comprador. | No | Debe tener entre 1 y 32 caracteres. |
| `payer.last_name` | Apellido del comprador | No | Debe tener entre 1 y 32 caracteres. |
| `payer.address.zip_code` | Código postal del comprador. | No | Debe tener exactamente 5 caracteres. |
| `payer.address.street_name` | Nombre de la calle donde reside el comprador. | No | Debe tener entre 1 y 18 caracteres. |
| `payer.address.street_number` | Número de residencia del comprador. | No | Debe tener entre 1 y 5 caracteres. |
| `payer.address.neighborhood` | Nombre del barrio donde reside el comprador. | No | Debe tener entre 1 y 18 caracteres. |
| `payer.address.city` | Ciudad donde reside el comprador. | No | Debe tener entre 1 y 18 caracteres. |
| `payer.phone.area_code` | Código de área del teléfono del comprador. | No | Debe tener 3 caracteres. |
| `payer.phone.number` | Número de teléfono del comprador. | No | String.<br>Debe tener entre 1 y 5 caracteres, y solo acepta números |
| `description` | Descripción del producto o compra. | No | No tiene |
| `additional_info.ip_address` | Dirección IP del comprador, donde se genera el pago | No | No tiene |
| `callback_url` | Pantalla donde se redirecciona al comprador por defecto  luego de realizar el pago dentro de la pantalla del banco, cuando indica que desea volver a la tienda.<br>Puedes ver más información en [Redirigir al comprador a PSE](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/pse#bookmark_redirigir_al_comprador_a_pse) y [Mostrar estado del pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/pse#bookmark_mostrar_estado_de_pago). | No | Debe tener como máximo 512 caracteres y no puede ser nulo o vacío. |
| `notification_url` | URL utilizada para notificar a la aplicación que la transferencia fue concluida. | No | Debe tener como máximo 512 caracteres y no puede ser nulo o vacío. |

> WARNING
>
> Importante
>
> El envío de esta información, sea o no enviada por el brick, es necesario para la conclusión del pago y será **obligatoria a partir del 31/12/2024**. La obtención de la información que no es enviada por el brick puede ser hecha por medio de un fomulario o con datos de registro del pagador.


A continuación se muestran algunos ejemplos de cómo enviar pagos con PSE a Mercado Pago.

[[[
```php
<?php
use MercadoPago\Client\Common\RequestOptions;
use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\MercadoPagoConfig;

MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

$client = new PaymentClient();
$request_options = new RequestOptions();
$request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

$client = new PaymentClient();
$createRequest = [
  "transaction_amount" => 5000,
  "description" => "Product description",
  "payment_method_id" => "pse",
  "callback_url" => "http://www.your-site.com",
  "notification_url" => "http://www.your-site.com",
  "additional_info" => [
    "ip_address" => "127.0.0.1"
  ],
  "transaction_details" => [
    "financial_institution" => $_POST['financialInstitution']
  ],
  "payer" => [
    "email" => $_POST['email'],
    "entity_type" => "individual",
    "first_name" => $_POST['firstName'],
    "last_name" => $_POST['lastName'],
    "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['identificationNumber']
    ],
    "address" => [
        "zip_code" => $_POST['zipCode'],
        "street_name" => $_POST['streetName'],
        "street_number" => $_POST['streetNumber'],
        "neighborhood" => $_POST['neighborhood'],
        "city" => $_POST['city'],
        "federal_unit" => $_POST['federalUnit']
    ],
    "phone" => [
        "area_code" => $_POST['phoneAreaCode'],
        "number" => $_POST['phoneNumber']
    ],
  ],
];

$payment = $client->create($createRequest, $request_options);
print_r($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });
const payment = new Payment(client);

const requestOptions = {
	idempotencyKey: '<IDEMPOTENCY_KEY>',
};

const body = {
  transaction_amount: 5000,
  description: 'Product description',
  payment_method_id: 'pse',
  callback_url: 'http://www.your-site.com',
  notification_url: 'http://www.your-site.com',
  payer: {
    entity_type: 'individual',
    email: req.body.email,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    identification: {
      type: req.body.identificationType,
      number: req.body.identificationNumber
    },
    address: {
      zip_code: req.body.zipCode,
      street_name: req.body.streetName,
      street_number: req.body.streetNumber,
      neighborhood: req.body.neighborhood,
      city: req.body.city,
      federal_unit: req.body.federalUnit
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
  }
};

payment.create({body, requestOptions})
  .then(function (response) {
    console.info(response)
  })
  .catch(function (error) {
    console.error(error);
  });
```
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

        Map<String, String> customHeaders = Map.of("X-Idempotency-Key", "...");
        MPRequestOptions requestOptions = MPRequestOptions.builder().customHeaders(customHeaders).build();

        PaymentClient client = new PaymentClient();

        IdentificationRequest identification = IdentificationRequest.builder()
                .type(request.getIdentificationType())
                .number(request.getIdentificationNumber())
                .build();

        PaymentPayerAddressRequest address = PaymentPayerAddressRequest.builder()
                .zipCode(request.getZipCode())
                .streetName(request.getStreetName())
                .streetNumber(request.getStretNumber())
                .neighborhood(request.getNeighborhood())
                .city(request.getCity())
                .federalUnit(request.getFederalUnit())
                .build();

        PaymentPayerPhoneRequest phone = PaymentPayerPhoneRequest.builder()
                .areaCode(request.getPhoneAreaCode())
                .number(request.getPhoneNumber())
                .build();

        PaymentPayerRequest payer = PaymentPayerRequest.builder()
                .email(request.getEmail())
                .entityType("individual")
                .firstName("firstName")
                .lastName("lastName")
                .identification(identification)
                .address(address)
                .phone(phone)
                .build();

        PaymentAdditionalInfoRequest additionalInfo = PaymentAdditionalInfoRequest.builder()
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
                .callbackUrl("https://your-site.com")
                .notificationUrl("https://your-site.com")
                .payer(payer)
                .build();

        client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

body = {
  transaction_amount: 5000,
  description: "Product description",
  payment_method_id: "pse",
  callback_url: "https://your-site.com",
  notification_url: "https://your-site.com",
  additional_info: {
    ip_address: "127.0.0.1"
  },
  transaction_details: {
    financial_institution: params[:financialInstitution]
  },
  payer: {
    email: params[:email],
    entity_type: "individual",
    first_name: params[:firstName],
    last_name: params[:lastName],
    identification: {
      type: params[:identificationType],
      number: params[:identificationNumber]
    }
    address: {
      zip_code: params[:zipCode],
      street_name: params[:streetName],
      street_number: params[:streetNumber],
      neighborhood: params[:neighborhood],
      city: params[:city],
      federal_unit: params[:federalUnit]
    }
    phone: {
      area_code: params[: phoneAreaCode],
      number: params[: phoneNumber]
    }
  }
}

payment_response = sdk.payment.create(body, request_options)
payment = payment_response[: response]
```
```csharp
MercadoPagoConfig.AccessToken = "ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add(Headers.IDEMPOTENCY_KEY, "YOUR_IDEMPOTENCY_KEY");

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
    FirstName = firstName,
    LastName = lastName,
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
    NotificationUrl = "https://your-site.com",
    Payer = payer
};

var client = new PaymentClient();
var payment = await client.CreateAsync(paymentCreateRequest, requestOptions);
```
```python
 import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'X-Idempotency-Key': '<SOME_UNIQUE_VALUE>'
}
 
body = {
    "transaction_amount": 5000,
    "description": "Product description",
    "payment_method_id": "pse",
    "callback_url": "https://your-site.com",
    "notification_url": "https://your-site.com",
    "additional_info": {
        "ip_address": "127.0.0.1"
    },
    "transaction_details": {
        "financial_institution": request.POST.get("financialInstitution")
    },
    "payer": {
        "email": request.POST.get("email"),
        "entity_type": "individual",
        "first_name": request.POST.get("firstName"),
        "last_name": request.POST.get("lastName"),
        "identification": {
            "type": request.POST.get("identificationType"), 
            "number": request.POST.get("identificationNumber")
        },
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
 
payment_response = sdk.payment().create(body, request_options)
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
    "callback_url": "http://www.your-site.com",
    "notification_url": "http://www.your-site.com",
    "payer": {
        "email": "test_user_19549678@testuser.com",
        "entity_type": "individual",
        "first_name": "first name",
        "last_name": "last_name",
        "identification": {
            "type": "type",
            "number": "number"
        }, 
        "address": {
          "zip_code": "111",
          "street_name": "street name",
          "street_number": "street number",
          "neighborhood": "neighborhood",
          "city": "city",
          "federal_unit": "federal unit"
        },
        "phone": {
          "area_code": "area code",
          "number": "number"
        }
    },
    "additional_info": {
        "ip_address": "127.0.0.1"
    },
    "transaction_details": {
        "financial_institution": "1009"
    }
}'
```
]]]

A continuación se muestra un ejemplo de la respuesta:

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
       "total_paid_amount": 10000,
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

La respuesta, como puedes ver en el `json` anterior, mostrará el status pendiente hasta que el comprador realice el pago.

## Redirigir al comprador a PSE

Luego de crear el pago en tu backend con el SDK de Mercado Pago, debes redirigir al comprador a la plataforma PSE para realizar la transferencia bancaria. Después de realizar el pago, el comprador será redirigido a tu sitio web. Para ejecutar este flujo, simplemente sigue estos pasos:

1. Después de crear el pago en tu backend, usa el campo **id** recibido en la respuesta para representar el [Status Screen Brick](/developers/es/docs/checkout-bricks/status-screen-brick/introduction) en tu interfaz. Este Brick le informará al usuario que lo llevaremos a la página de PSE y unos segundos después se realizará la redirección de forma automática.

2. Cuando el comprador complete el pago en la plataforma PSE, será redirigido a tu sitio web a través de la `callback_url` que se nos envió al crear el pago. Además, el campo `payment_id` se agregará como un parámetro de URL en este callback. De esta forma, puedes volver a representar el Status Screen Brick para que el comprador pueda ver el estado del pago final en tu sitio web.

![payment-loading-pse-redirect](checkout-bricks/payment-brick-pse-redirect-es.jpg)

## Mostrar estado de pago

Una vez que el pago ya se ha completado, también es posible continuar usando el Status Screen Brick para mostrar el estado del pago al usuario en su sitio web, por ejemplo. Simplemente crea la instancia de Status Screen utilizando el ID de pago.

![payment-status-pse](checkout-bricks/payment-status-pse-es.jpg)

## Prueba tu integración

Con la integración completada, podrás probar la recepción de pagos. Para obtener más información, accede a la sección [Hacer compra de prueba](/developers/es/docs/checkout-bricks/integration-test/test-payment-flow).