# Simplified Integration

The simplified integration of Fintoc will allow you to offer this payment method in online store checkouts accessed through web browsers or in its mobile version.

In two simple steps, you can redirect buyers to Mercado Pago, where they can complete the payment using a pre-configured Fintoc widget, without extra integration efforts.

This documentation will guide you step by step through the necessary integration process and will also provide you with a test flow so you can verify that it was successful.

## Create Payment

To initiate the Fintoc implementation process, it is necessary to create a payment. Send a **POST** request with the **required mandatory attributes, described in the table below**, to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and execute the request, or if you prefer, send the information using our SDKs.

> WARNING
>
> Important
>
> For this stage, when making the request via API or SDKs, it is necessary to send your production Access Token. For more information, check [Credentials](/developers/en/docs/checkout-api/additional-content/your-integrations/credentials).

[[[
```php
MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
    
$client = new PaymentClient();

$createRequest = [
  "description" => "Product title",
  "payer" => [
     "email" => "test_user_123@testuser.com",
  ],
  "payment_method_id" => "fintoc",
  "transaction_amount" => 5000,
  "callback_url" => "https://www.your-site.com",
  "point_of_interaction" => [
    "type" => "CHECKOUT",
    "sub_type" => "INTER_PSP"
  ]
];

    $client->create($createRequest, $request_options);

```
```node
const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment = req.body;

var payment_data = {
  transaction_amount: 5000,
  callback_url: 'https://www.your-site.com',
  point_of_interaction: {
   type: 'CHECKOUT',
   sub_type: 'INTER_PSP'
  },
  description: 'Product title',
  payment_method_id: 'fintoc',
  payer: {
    email: payment.email,
  }
};

var payment = mercadopago.payment.save(payment_data)
  .then(function (response) {
    res.status(response.status).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: respose.body.id,
    });
  })
  .catch(function (error) {
    res.status(error.status).send(error);
});

var payment_link = payment.transaction_details.external_resource_url;

```
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .description("Product title")
        .paymentMethodId("fintoc")
        .payer(PaymentPayerRequest.builder()
            .email("test_user_123@testuser.com")
            .build())
        .transactionAmount(new BigDecimal("5000"))
        .callbackUrl("https://www.your-site.com")
        .pointOfInteraction(PaymentPointOfInteractionRequest
        .builder().type("CHECKOUT").subType("INTER_PSP").build())
        .build();

client.create(createRequest);

```
```ruby
require 'mercadopago'

sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_object = {
  description: 'Product title',
  payer: {
    email: 'test_user_123@testuser.com',
  },
  payment_method_id: 'fintoc',
  transaction_amount: 5000,
  callback_url: 'https://www.your-site.com',
  point_of_interaction: {
   type: 'CHECKOUT',
   sub_type: 'INTER_PSP'
  }

}

payment_response = sdk.payment.create(payment_request, custom_request_options)
payment_response[:response]

```
```csharp
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN

var paymentPayerRequest = new PaymentPayerRequest
{
    Email = "test_user_123@testuser.com",
};

var paymentPointOfInteractionRequest = new PaymentPointOfInteraction
{
    Type = "CHECKOUT",
    SubType = "INTER_PSP"
};

var request = new PaymentCreateRequest
{
    Description = "Product title",
    Payer = paymentPayerRequest,
    PaymentMethodId = "fintoc",
    TransactionAmount = (decimal?)5000,
    CallbackUrl = "https://www.your-site.com",
    PointOfInteraction = paymentPointOfInteractionRequest
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request, requestOptions);

```
```python
import mercadopago
sdk = mercadopago.SDK("YOUR_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
    "description": "Titulo del producto",
    "payer": {
        "email": "test_user_123@testuser.com",
    },
    "payment_method_id": "fintoc",
    "transaction_amount": 5000,
    "callback_url": "https://www.your-site.com",
    "point_of_interaction": {
        "type": "CHECKOUT",
        "sub_type": "INTER_PSP"
    },
}

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]

```
```Go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/payment"
)

func main() {
	accessToken := "YOUR_ACCESS_TOKEN"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := payment.NewClient(cfg)

	request := payment.Request{
		TransactionAmount: 5000,
               Description: "Product title",
		PaymentMethodID:   "fintoc",
		Payer: &payment.PayerRequest{
			Email: "test_user_123@testuser.com",
		},
		CallbackURL: "https://www.your-site.com",
               PointOfInteraction: &payment.PointOfInteraction{
                Type: "CHECKOUT",
                SubType: "INTER_PSP",
         }
	}

	resource, err := client.Create(context.Background(), request)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(resource)
}
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ' \
--data-raw '{
    "transaction_amount": 2000,
    "payment_method_id": "fintoc",
    "description": "description",
    "callback_url": "https://www.your-site.com",
    "point_of_interaction": {
      "type": "CHECKOUT",
      "sub_type": "INTER_PSP"
    },
    "payer": {
        "email": "mail@mail.com.br"
    }
}'

```
]]]

| Attribute | Type | Description | Example |
|---|---|---|---|
| `transaction_amount` | number | Transaction amount. | 2000 |
| `payment_method_id` | string | Payment method identifier. **It must always be `fintoc`**. | fintoc |
| `description` | string | Description of the payment reason. | Product1 |
| `callback_url` | string | URL to which Mercado Pago makes the final redirection in case of success or error. | https://www.your-site.com |
| `point_of_interaction.type` | string | Information of the application processing the payment. For the `type` attribute, it must always be `CHECKOUT`. | CHECKOUT |
| `point_of_interaction.sub_type` | string | Secondary identifier of the payment type. For the `sub_type` attribute, it must always be `INTER_PSP`. | INTER_PSP |

> WARNING
>
> Important
>
> The payment created with Fintoc is **valid for only 10 minutes**. After that time, it will expire, and you will need to create another.

In the response to the payment creation, within the `data` node and among other parameters, you will find the `external_resource_url` field, which will contain the necessary URL to redirect the buyer to the Mercado Pago site in order to complete the transaction.

Below, you can see an example response to this request, where information has been omitted to show the most relevant fields.

```json
{
    "id": 82512912106,
    ...
    "payment_method_id": "fintoc",
    "payment_type_id": "bank_transfer",
    "payment_method": {
        "id": "fintoc",
        "type": "bank_transfer",
        "data": {
            "reference_id": "82512912106",
            "external_reference_id": "pi_2nGAKKSDoWG8ALR8_sec_Vfwt2rhBdjxYLhVpWupimnnp",
            "external_resource_url": "https://mercadopago.cl/banktransfer..."
        }
    },
    "status": "pending",
    ...
}

```

> NOTE
>
> Note
>
> If you receive any errors when creating the payment, check the list of possible errors in our [API Reference](/developers/en/reference/payments/_payments/post).

## Redirect to Mercado Pago

Once the payment is created, it is necessary to redirect the buyer to Mercado Pago, a screen that will already be prepared with the necessary Fintoc widget to complete the payment.

To do this, redirect to the URL stored in the `external_resource_url` field, which was returned in the response to the payment creation. 

```json
{
   …
        "data": {
            "reference_id": "82512912106",
            "external_reference_id": "pi_2nGAKKSDoWG8ALR8_sec_Vfwt2rhBdjxYLhVpWupimnnp",
            "external_resource_url": "https://mercadopago.cl/banktransfer..."
        }
   …
}

```

> WARNING
>
> Important
>
> Mercado Pago only carries out the buyer's payment experience and does not handle the success or error processing of it. Once the payment is finalized, it will redirect to the URL registered as `callback_url` by the integrator, who must handle that processing.

If you want, it is possible to **pre-select the financial institution and the buyer's name**, so that, upon opening, the *widget* already contains these details and they do not have to be filled in manually. To do this, add the following query parameters to the `external_resource_url`:

```external_resource_url

https://www.mercadopago.cl/sandbox/payments/1319503224/bank_transfer/fintoc?caller_id=[…]b96-ab4bcf820559&username=JohnDoe&instutuion_id=banco_estado

```

| Query param | Description | Example |
|---|---|---|
| `username` | Parameter used to pre-fill the buyer's name. | `JohnDoe` |
| `institution_id` | Parameter used to pre-fill the financial institution for payment. Check which institutions are available by accessing the [Fintoc documentation](https://docs.fintoc.com/docs/payment-initiation-countries-and-institutions). | `banco_estado` |

> WARNING
>
> Important
> 
> **Refunds** for payments made through Fintoc can be requested through the **"Activities"** section within the [Mercado Pago Panel](https://www.mercadopago[FAKER][URL][DOMAIN]/home) of the seller. They can take **up to 72 hours to be processed**. Keep in mind that if you request them after 2:00 PM, the processing time will start from the following day. 

## Test Simplified Integration

To test the functioning of your integration and the payment processing with Fintoc, you need to [Create a payment](/developers/en/docs/checkout-api/integration-configuration/fintoc/simplified-integration#bookmark_create_payment) using your [Mercado Pago test credentials](/developers/en/docs/checkout-api/additional-content/your-integrations/credentials#bookmark_obtener_credenciales:~:text=sistema%20o%20intruso.-,Test%20credentials,-The%20test%20credentials%20for). 

You can test different payment scenarios based on the **last two digits sent in the `amount` field**, which will allow you to define success or error cases. Follow the instructions in the table below for each case:

| Scenario       | Last digits of the `amount` field | Example         |
|----------------|----------------------------------|-----------------|
| Successful payment | 01                               | `amount: 10701` |
| Successful payment | 02                               | `amount: 10702` |
| Rejected payment   | 03                               | `amount: 10703` |
| Successful payment | 04                               | `amount: 10704` |
| Successful payment | 05                               | `amount: 17505` |
| Successful payment | 06                               | `amount: 3006`  |
| Successful payment | 07                               | `amount: 3007`  |
| Successful payment | 08                               | `amount: 3008`  |
| Successful payment | 09                               | `amount: 3009`  |

Within the iframe, you must **select a bank** to carry out the test transaction, which can be any of those displayed. There, you should **log in** simulating a buyer user with one of the **test accounts** provided below:

| User      | Password |
|-----------|----------|
| 41614850-3 | jonsnow  |
| 40427672-7 | jonsnow  |
| 41579263-8 | jonsnow  |

On the next screen, still within the test environment, you will be asked to select an account from which the test transaction will be paid. **These are not real accounts or money**.

The selected account will determine the MFA authorization code that must be entered later, as shown below.

| Account Number | MFA Type               | Code            |
|----------------|------------------------|-----------------|
| 813990168      | Security device        | 000000          |
| 422159212      | Mobile application     | N/A             |
| 5233137377     | Mobile application     | N/A             |
| 170086177      | SMS                    | 0000            |
| 746326042      | Coordinate card        | ['00', '00', '00'] |
| 4420245701     | Coordinate card        | ['00', '00', '00'] |

Finally, after entering the correct code, click on the **Pay** button and validate the payment outcome according to the amount entered for the transaction.

By doing so, you will have completed your tests with Fintoc and can begin operating in a production environment.