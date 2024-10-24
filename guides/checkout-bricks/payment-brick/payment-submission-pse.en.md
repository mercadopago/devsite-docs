> SERVER_SIDE
>
> h1
>
> PSE

To make a payment with PSE, before processing it with the backend SDKs, it is necessary to send both data provided by the callback `onSubmit` and other data regarding the payer, which are:

| Field | Description | Present in the onSubmit callback of the brick | Possible values/validations |
|---|---|---|---|
| `transaction_amount` | Payment amount. | Yes | Any value greater than 0. |
| `transaction_details.financial_institution` | Bank specified to make the electronic transfer. | Yes | Must correspond to an existing bank and cannot be sent null or empty. |
| `payer.entity_type` | Type of entity, individual or association. | Yes | `individual` or `association`. |
| `payer.identification.type` | Type of document of the buyer. | Yes | Values sent by the brick:<br> -`CC` (Cédula de Ciudadanía)<br> -`CE`  (Cédula de Extranjería)<br> -`NIT`<br> -`Otro`<br> Accepted values (in addition to those sent by the brick):<br> -`TE` (Tarjeta de Extranjería<br> - `RC` (Registro Civil de Nacimiento)<br> -`TI` (Tarjeta de Identidad)<br> -`PAS` (Passport) |
| `payer.identification.number` | Document number of the buyer. | Yes | String.<br> Must have between 1 to 15 numeric positions. If it is of the type "passport", it will accept alphanumeric values. |
| `payer.first_name` | First name of the buyer. | No | Must have between 1 to 32 positions. |
| `payer.last_name` | Last name of the buyer. | No | Must have between 1 to 32 positions. |
| `payer.address.zip_code` | Zip code of the buyer. | No | Must have exactly 5 positions. |
| `payer.address.street_name` | Name of the street where the buyer lives. | No | Must have between 1 to 18 positions. |
| `payer.address.street_number` | House number of the buyer. | No | Must have between 1 to 5 positions. |
| `payer.address.neighborhood` | Name of the neighborhood where the buyer lives. | No | Must have between 1 to 18 positions. |
| `payer.address.city` | City of the buyer. | No | Must have between 1 to 18 positions. |
| `payer.phone.area_code` | Area code of the buyer's phone. | No | Must have 3 positions. |
| `payer.phone.number` | Phone number of the buyer. | No | String.<br> Must have between 1 to 5 positions and only accepts numeric characters. |
| `description` | Description of the product or purchase. | No | Does not have |
| `additional_info.ip_address` | IP address of the buyer, from where the payment is generated. | No | Does not have |
| `callback_url` | Page where the buyer is redirected by default after making the payment within the bank's page, when the buyer indicates that he wants to return to the store.<br> More information can be found in the sections [Redirect buyer to PSE](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/pse#bookmark_redirect_buyer_to_pse) and [Show payment status](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/pse#bookmark_show_payment_status). | No | Must have a maximum of 512 characters and cannot be null or empty. |
| `notification_url` | URL used to notify the application that the transfer has been completed. | No | Must have a maximum of 512 characters and cannot be null or empty. |

> WARNING
>
> Important
>
> Sending the listed information, whether or not provided by the brick, is necessary for the completion of the payment and **will be mandatory from 31/12/2024**. This information can be obtained, for example, through a form or through the payer's registration data.


Below are some examples of how to send PSE payments to Mercado Pago.

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

Below is an example of the response:

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
   "description": "Product title",
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

The response, as you can see in the `json` above, will show the pending status until the buyer makes the payment.

## Redirect buyer to PSE

After creating the payment in your backend with the Mercado Pago SDK, you need to redirect the buyer to the PSE platform to carry out the bank transfer. After making the payment, the buyer will be redirected back to your website. To run this flow, just follow these steps:

1. After creating the payment in your backend, use the **id** field received in the response to render the [Status Screen Brick](/developers/en/docs/checkout-bricks/status-screen-brick/introduction) on your frontend. This Brick will inform the user that we will take him to the PSE page and a few seconds later the redirection takes place automatically.

2. When the buyer completes the payment on the PSE platform, he will be redirected to your website through the `callback_url` that was sent to us when creating the payment. In addition, the `payment_id` field will be added as a url parameter in this callback. In this way, you can re-render the Status Screen Brick so that the buyer can see the final payment status on your website.

![payment-loading-pse-redirect](checkout-bricks/payment-brick-pse-redirect-en.jpg)

## Show payment status

Once the payment has already been completed, it is also possible to continue using the Status Screen Brick to show the payment status to the user on your website, for example. Simply create the Status Screen instance using the payment ID.

![payment-status-pse](checkout-bricks/payment-status-pse-en.jpg)

## Test your integration

With the integration completed, you will be able to test payment reception. For more information, access the section [Make test purchase](/developers/en/docs/checkout-bricks/integration-test/test-payment-flow).