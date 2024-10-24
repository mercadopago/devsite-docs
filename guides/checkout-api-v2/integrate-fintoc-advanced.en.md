# Advanced Integration

The advanced integration of Fintoc will allow you to offer this payment method in online store checkouts accessed through web browsers.

Through our SDKs, you will be able to utilize different methods that will allow you to control the payment experience of users within the same store, transparently and tailored to your needs.

This documentation will guide you step by step through the necessary integration process and will also provide you with a test flow so you can verify that it was successful.

## Import MercadoPago.js

To integrate Fintoc and subsequently initialize the *widget*, it is first necessary to capture the data needed to process the payment by including the MercadoPago.js library in your project. Use the following code to do so via `html` or `bash`.

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

## Configure Credentials

[Credentials](/developers/en/docs/checkout-api/additional-content/your-integrations/credentials) are unique keys that we use to identify an integration within your account. They are used to securely capture payments in online stores and other applications.

Use the code below to configure the credentials in your integration, replacing `"YOUR_PUBLIC_KEY"` with the production Public Key assigned to your application.

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');

```

## Create Payment

To start the Fintoc implementation process, it is necessary to create a payment. This will return, within the `data` node and among other parameters, the `external_reference_id` field. Its value represents a token that you must store to use in the initialization of Fintoc's widget in your frontend.

To do this, send a **POST** with the **required mandatory attributes** to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and execute the request, or if you prefer, send the information using our SDKs.

> WARNING
>
> Important
>
> For this stage, when making the request via API or SDKs, it is necessary that you send your production Access Token. For more information, see [Credentials](/developers/en/docs/checkout-api/additional-content/your-integrations/credentials).

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
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN"

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
| `callback_url` | string | URL to which Mercado Pago makes the final redirection. | https://www.your-site.com |
| `point_of_interaction.type` | string | Information of the application processing the payment. For the `type` attribute, it must always be `CHECKOUT`. | CHECKOUT |
| `point_of_interaction.sub_type` | string | Secondary identifier of the payment type. For the `sub_type` attribute, it must always be `INTER_PSP`. | INTER_PSP |

Below, you can see an example of a response to this request, where information has been omitted to show the most relevant fields.

> WARNING
>
> Important
>
> Remember to store the value of the `external_reference_id` field to use it in the initialization of the widget. Note that **it is valid only for 10 minutes**. After this time, it will expire, and you will need to create another payment.

```json
{
  ...
    "id":"<PAYMENT_ID>",
  "payment_method_id": "fintoc",
  "payment_method": {
    "data": {
      "external_reference_id": "<WIDGET_TOKEN>",
    }
   ...
  }
}
```

> NOTE
>
> Note
>
> In case you encounter any errors when creating the payment, check the list of possible errors in our [API Reference](/developers/en/reference/payments/_payments/post).

## Initialize Fintoc

To finalize the payment, it is necessary to initialize the iframe and implement Fintoc's widget in the frontend. For this, use the `mp.fintoc()` method, which we provide within our SDKs, and it will allow you to initialize the existing resources.

```javascript
 const fintoc = mp.fintoc();

```

Then, open Fintoc's payment widget using the `mp.fintoc.open()` method and sending the necessary parameters, as indicated below.

```javascript
               async function openFintoc() {
                  try {
                    await fintoc.open({
                      institutionId: document.querySelector('#fintoc-institutionId').value,
                      username: document.querySelector('#fintoc-username').value,
                      widgetToken: <EXTERNAL_REFERENCE_ID>
                      onSuccess,
                      onExit,
                      onEvent,
                    })
                  } catch(e) {
                    console.error(e)
                  }
                }

```

| Attribute | Type | Description | Required/Optional |
|---|---|---|---|
| `institutionId` | string | Identifier of the [financial institution](https://docs.fintoc.com/docs/payment-initiation-countries-and-institutions). When included, it pre-selects the institution that will appear when the widget is opened. For example, the value `cl_banco_de_chile` will make the widget open with Banco Estado. | Optional |
| `username` | string | Identifies the user's account. If completed, it ensures that when selecting the bank for the transaction, the user is already identified and only needs to provide their password. | Optional |
| `widgetToken` | string | Token created in the backend when creating a payment. It is the value received for the `external_reference_id` parameter, which initializes and configures the widget. | Required |
| `onSuccess` | function | Callback that will be called after a successful creation of the link. | Required |
| `onExit` | function | Callback that will be called if the user closes the link prematurely. | Required |
| `onEvent` | function | Callback that will be called each time the user executes an action in the widget. | Required |

> WARNING
>
> Important
>
> **Refunds** for payments made through Fintoc can be requested in the **"Activities"** section within the seller's [Mercado Pago Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/home). They can take **up to 72 hours to process**. Note that if requested after 2:00 PM, the processing time will be counted from the next day.

## Close and Remove Fintoc

If necessary, you can close and remove the previously initialized Fintoc iframe using these two methods.

### - Close Fintoc
Use the `mp.fintoc.close()` method to close the iframe without destroying the widget, hiding it from the user.

```javascript
function closeFintoc() {
      fintoc.close()
}
```

### - Eliminate Fintoc
Use the `mp.fintoc.destroy()`method when in need to directly eliminate the instance from your application.

```javascript
function destroyFintoc() {
      fintoc.destroy()
}

```

In case you need to reinitialize it, you can do so by calling the `mp.fintoc.open()` method again.

## Advanced integration test

Test your integration and payment processing with Fintoc using a pre-established sandbox environment and your **Mercado Pago test credentials**.

To initialize this environment, instantiate the Fintoc widget by adding the parameter `sandbox: true` to the `mp.fintoc` method:

```javascript
 const fintoc = mp.fintoc({sandbox: true});
```

Once the test scope of Fintoc is instantiated, continue with the opening of the widget, as described in the [Initialize Fintoc](/developers/en/docs/checkout-api/integration-configuration/fintoc/advanced-integration#bookmark_initialize_fintoc) stage.


```javascript
async function openFintoc() {
                  try {
                    await fintoc.open({...})
                  } catch(e) {
                    console.error(e)
                  }


```

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