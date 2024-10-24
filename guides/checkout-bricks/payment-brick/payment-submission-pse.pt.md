> SERVER_SIDE
>
> h1
>
> PSE

Para efetuar o pagamento com PSE, antes de efetuar o pagamento com os SDKs do backend, é necessário enviar tanto dados fornecidos pelo *callback* `onSubmit` quanto outros dados referentes ao pagador, sendo eles:

| Campo | Descrição | Presente no callback onSubmit do brick | Possíveis valores/validações |
|---|---|---|---|
| `transaction_amount` | Valor do pagamento. | Sim | Cualquer valor maior que 0. |
| `transaction_details.financial_institution` | Banco informado para efetuar a transferência eletrônica. | Sim | Deve corresponder a um banco existente e não pode ser enviado nulo ou vazio. |
| `payer.entity_type` | Tipo de pessoa, física ou jurídica. | Sim | `individual` ou `association`. |
| `payer.identification.type` | Tipo de documento do comprador. | Sim | Valores enviados pelo brick:<br> -`CC` (Cédula de Ciudadanía)<br> -`CE` (Cédula de Extranjería)<br> -`NIT`<br> -`Otro`<br>Valores aceitos (além dos enviados por brick):<br> -`TE` (Tarjeta de Extranjería)<br> -`RC` (Registro Civil de Nacimiento)<br> -`TI` (Tarjeta de Identidad)<br> -`PAS` (Pasaporte) |
| `payer.identification.number` | Número do documento do comprador. | Sim | String. <br>Deve ter de 1 até 15 posições numéricas. Se é do tipo "pasaporte", aceitará valores alfanuméricos. |
| `payer.first_name` | Nome do comprador. | Não | Deve ter de 1 até 32 posições. |
| `payer.last_name` | Sobrenome do comprador | Não | Deve ter de 1 até 32 posições. |
| `payer.address.zip_code` | Código postal do comprador. | Não | Deve ter exatamente 5 posições. |
| `payer.address.street_name` | Nome da rua onde o comprador reside. | Não | Deve ter de 1 até 18 posições. |
| `payer.address.street_number` | Número da residência do comprador. | Não | Deve ter de 1 até 5 posições. |
| `payer.address.neighborhood` | Nome do bairro onde o comprador reside. | Não | Deve ter de 1 até 18 posições. |
| `payer.address.city` | Cidade do comprador. | Não | Deve ter de 1 até 18 posições. |
| `payer.phone.area_code` |Código de área do telefone do comprador. | Não | Deve ter 3 posições. |
| `payer.phone.number` | Número de telefone do comprador. | Não | String.<br>Deve ter de 1 até 5 posições e só aceita caracteres numéricos. |
| `description` | Descrição do produto ou compra. | Não | Não tem |
| `additional_info.ip_address` | Endereço do IP do comprador, onde o pagamento é gerado. | Não | Não tem |
| `callback_url` | Página onde o comprador é redirecionado por padrão após efetuar o pagamento dentro da página do banco, quando o comprador indica que deseja retornar à loja.<br>Pode ver mais informações nas seções [Redirecionar o comprador ao PSE](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/pse#bookmark_redirecionar_o_comprador_ao_pse) e [Mostrar status de pagamento](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/pse#bookmark_mostrar_status_de_pagamento). | Não | Deve ter, no máximo, 512 caracteres e não pode ser nulo ou vazio. |
| `notification_url` | URL usada para notificar a aplicação de que a transferência foi concluída. | Não | Deve ter, no máximo, 512 caracteres e não pode ser nulo ou vazio. |

> WARNING
>
> Importante
>
> O envio das informações listadas, sejam ou não enviadas pelo brick, é necessário para conclusão do pagamento e **será obrigatória a partir de 31/12/2024**. Estas informações podem ser obtidas, por exemplo, com um formulário ou com dados cadastrais do pagador.

Abaixo estão alguns exemplos de como enviar pagamentos PSE para o Mercado Pago.

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

Veja abaixo um exemplo da resposta:

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
   "description": "Título do produto",
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

A resposta, como você pode ver no `json` acima, mostrará o status pendente até que o comprador efetue o pagamento.

## Redirecionar o comprador ao PSE

Depois de criar o pagamento em seu backend com a SDK do Mercado Pago, é preciso redirecionar o comprador para a plataforma de PSE para a realização da transferência bancária. Após a realização do pagamento, o comprador será redirecionado de volta ao seu site. Para executar esse fluxo, basta seguir os seguintes passos:

1. Após a criação do pagamento em seu backend, utilize o campo **id** recebido na resposta para renderizar o [Status Screen Brick](/developers/pt/docs/checkout-bricks/status-screen-brick/introduction) no seu frontend. Este Brick informará o usuário de que o levaremos para a página do PSE e poucos segundos depois o redirecionamento ocorre automaticamente.

2. Quando o comprador finalizar o pagamento na plataforma PSE, ele será redirecionado para o seu site através da `callback_url` que nos foi enviada na criação do pagamento. Além disso, será adicionado o campo `payment_id` como parâmetro de URL nesse callback. Dessa maneira, você pode renderizar novamente o Status Screen Brick para que o comprador veja no seu site o status final do pagamento.

![payment-loading-pse-redirect](checkout-bricks/payment-brick-pse-redirect-pt.jpg)

## Mostrar status de pagamento

Uma vez que o pagamento já foi concluído, também é possível continuar usando o Status Screen Brick para mostrar o status do pagamento ao usuário em seu site, por exemplo. Basta criar a instância da tela de status usando o ID de pagamento.

![payment-status-pse](checkout-bricks/payment-status-pse-pt.jpg)

## Teste sua integração

Com a integração finalizada, você poderá testar o recebimento de pagamentos. Para mais informações, acesse a seção [Realizar compra teste](/developers/pt/docs/checkout-bricks/integration-test/test-payment-flow).