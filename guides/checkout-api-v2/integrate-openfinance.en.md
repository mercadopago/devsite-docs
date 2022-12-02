# Open Finance
Open Finance is a new financial system that gives you more freedom with your finances and control over your data. Financial histories can be shared with other institutions to gain access to more beneficial products and services.

With Open Finance, **it will be possible to offer Pix payments in the Checkout API**, using balances that are in financial institutions besides the one initiating the payment.

> NOTE
> 
> Important
> 
> You must have a PIX key registered in your Mercado Pago account. If you haven't already, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and check the necessary steps.

## Creating a Pix Payment with Open Finance

Before starting a charge using Open Finance, you must have configured the Pix payment method. To learn how to configure and integrate it, [access the documentation](/developers/en/docs/checkout-api/prerequisites).


Once you've configured the payment method correctly, you'll need to add new information to the request to [create a payment](/developers/en/reference/payments/_payments/post), through `the point_of_interaction` parameter, indicating the Open finance mode. This is valid both via the API and through our SDKs, as shown in the following examples:

[[[
    ```php
    MercadoPago\SDK::setAccessToken("access_token");
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = 100;
    $payment->description = "Título do produto";
    $payment->payment_method_id = "pix";
    $payment->payer = array(
        "email" => "test@test.com",
        "first_name" => "Test",
        "last_name" => "User",
        "identification" => array(
            "type" => "CPF",
            "number" => "19119119100"
        ),
    );
    $payment->point_of_interaction = array(
    "linked_to" => "openfinance"
    );
    $payment->save();
    ```
    ```node
    mercadopago.configurations.setAccessToken("access_token");
    var payment = {
        transaction_amount: 100,
        description: 'description',
        payment_method_id: 'pix',
        payer: {
            email: 'test@test.com'
        },
        point_of_interaction: {
            linked_to: "openfinance"
        }
    };
    mercadopago.payment.create(payment).then(function (data) {
        console.log(data.response);
    }).catch(function (error) {
        console.log(error);
    });
    ```
    ```java
    MercadoPagoConfig.setAccessToken("access_token");
    PaymentClient client = new PaymentClient();

    PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .transactionAmount(new BigDecimal(100))
        .description("description")
        .paymentMethodId("pix")
        .pointOfInteraction(
            PaymentPointOfInteractionRequest.builder().linkedTo("openfinance").build())
        .payer(PaymentPayerRequest.builder().email("test@test.com").build())
        .build();

    Payment payment = client.create(createRequest);
    ```
    ```ruby
    sdk = Mercadopago::SDK.new('access_token')

    payment_request = {
        transaction_amount: 100,
        description: 'description',
        payment_method_id: 'pix',
        payer: {
            email: 'test@test.com'
        },
        point_of_interaction: {
            linked_to: "openfinance"
        }
    }
    payment_response = sdk.payment.create(payment_request)
    payment = payment_response[:response]
    ```
    ```csharp
    MercadoPagoConfig.AccessToken = "access_token";

    var request = new PaymentCreateRequest
    {
        TransactionAmount = 100,
        Description = "description",
        PaymentMethodId = "pix",
        Payer = new PaymentPayerRequest
        {
            Email = "test@test.com"
        },
        PointOfInteraction = new PaymentPointOfInteractionRequest
        {
            LinkedTo = "openfinance"
        }
    };
    var client = new PaymentClient();
    Payment payment = await client.CreateAsync(request);
    ```
    ```python
    sdk = mercadopago.SDK("access_token")

    payment_data = {
        "transaction_amount": 100,
        "description": "description",
        "payment_method_id": "pix",
        "payer": {
            "email": "test@test.com"
        },
        "point_of_interaction": {
            "linked_to": "openfinance"
        }
    }
    payment_response = sdk.payment().create(payment_data)
    payment = payment_response["response"]
    ```
    ```curl
    curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
    --header 'Authorization: Bearer TOKEN' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "transaction_amount": 1000,
        "description": "Teste Pix Open Finance",
        "payment_method_id": "pix",
        "payer": {
            "email": "test_user_19734329@testuser.com"
        },
        "point_of_interaction": {
            "linked_to": "openfinance"
        },
        "callback_url": "https://example.com"
    }'
    ```
]]]

> WARNING
> 
> Important information
> 
> For this type of payment method, the **CPF number is mandatory**.
> The `callback_url` parameter must contain the URL value that shows the feedback page.


The response will be very similar to the return of a payment with a common Pix, with some changes:

* The **openfinance** value at `point_of_interaction.linked_to`
* **Null** value in `point_of_interaction.transaction_data.qr_code` and `point_of_interaction.transaction_data.qr_code_base64`
* Value of `point_of_interaction.transaction_data.ticket_url` with URL to the application that finalizes the payment by Open Finance

Response:

```json
{
  "point_of_interaction": {
    "linked_to": "openfinance",
    "transaction_data": {
      "qr_code": null,
      "ticket_url": "https://mercadopago.com.br/payments/12/openfinance?caller_id=1&hash=1111",
      "qr_code_base64": null
    }
  }
}
```

## Guiding the user to finalize the payment

With the payment creation response, just use the URL available in the `point_of_interaction.transaction_data.ticket_url` object. This allows the buyer to finalize the payment through Open Finance.

To accomplish this, you can either redirect the user to the URL directly or present a button that redirects when clicked.

An example of this flow is shown in the user's view:

![Payment flow sample](/images/api/api-integrate-openfinance.gif)

## Testing your integration
If you want to test the integration, you must have a test user with a registered Pix key and a test credential. You can find more details on how to do this by [clicking here](/developers/en/docs/checkout-api/integration-test/make-test-purchase).

Create a Pix Open Finance payment and use the URL available in the `point_of_interaction.transaction_data.ticket_url` attribute to access the redirect page.

```json
{
  "point_of_interaction": {
    "linked_to": "openfinance",
    "transaction_data": {
      "qr_code": null,
      "ticket_url": "https://mercadopago.com.br/payments/12/openfinance?caller_id=1121&hash=11",
      "qr_code_base64": null
    }
  }
}
```

On this page, you will find payment information, and you will have the option to select only bank "370 - Mercado Pago - Payments" to continue with the test.

When you choose the bank listed, you can pay and finally be redirected to the Feedback page with the `callback_url` parameter.

This experience is presented in the following image:

![Open finance payment flow sample](/images/api/api-integrate-openfinance-sample.gif)