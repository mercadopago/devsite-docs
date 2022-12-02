# Open Finance (Advanced)

Payments can be made via Open Finance through Mercado Pago using the account balance of financial institutions participating in Open Finance, which is approved by the Central Bank of Brazil.

With Open Finance, **it will be possible to offer Pix payments in the Checkout API**, using balances that are in financial institutions besides the one initiating the payment.

> NOTE
> 
> Important
> 
> You must have a PIX key registered in your Mercado Pago account. If you haven't already, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and check the necessary steps.

Use our APIs or SDKs to build your own payment experience with Open Finance on your website or mobile app. You can control the entire flow according to your checkout experience.

## Features

* Create your own Payment Initiation platform within your website.
  
* Develop and customize the Payment Transaction Initiation process. 
  
* Allow your customers to pay using funds from other accounts. 
  
* Communicate directly with your customers through error messages with personalized responses.

## How to integrate Open Finance into your Checkout

Before starting a charge using Open Finance, you must have configured the Pix payment method.  To learn how to configure and integrate it, [access the documentation](/developers/en/docs/checkout-api/prerequisites).

Once you've configured the payment method correctly, you'll need to add new information to the request to [create payment](/developers/en/reference/payments/_payments/post_), through `the point_of_interaction` parameter, indicating the Open finance mode. This is valid both via the API and through our SDKs, as shown in the following examples:

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

## Usability best practices

It is important to make sure that the customer understands how to use the Open Finance Payment Transaction Initiation option at Checkout. T**hey need to know that the payment will be made through Mercado Pago** using the Open Finance Payment Transaction Initiation option.

![Payment method selection page](/images/api/open-finance(advanced)/usability-rule1.png)

Check below some usability tips to improve the flow of payments via Open Finance.

### How to list available banks

To let the customer pay through the Open Finance Payment Transaction Initiator, you need to do the following:

#### 1 - Provide the list of available Financial Institutions
Provide a list of possible financial institutions so that the user can select the one he would like to use for the payment.

To achieve this, simply make the following request:

```curl
curl --request GET \
  --url https://api.mercadopago.com/open-banking/payments/v1/banks \
  --header 'Authorization: Bearer <ENV_ACCESS_TOKEN>'
```

**Filter parameters for the request**

| Parameter | Type  | Required | Values               | Description                                                                                                                                                                                                          |
|-----------|-------|----------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| segment   | Query | Optional | [personal, business] | Allows you to filter banks for PJ or PF.                                                                                                                                                                             |
| platform  | Query | Optional | [desktop, mobile]    | It allows you to filter by banks that have a specific experience. If the payment is being made on the desktop, you can filter the list of banks to only display ones that have a desktop experience, and vice versa. |

> By default, the API returns all banks, without any type of filter.

**Response sample**:

```json
{
   "data": [
       {
           "id": "81d8e591-5d8e-46e2-8b4a",
           "name": "Mercado Pago - Payments",
           "code": "370",
           "ispb": "10573521",
           "logo": "https://http2.mlstatic.com/open-banking/assets/88b4a.svg",
           "isFrequentlyUsed": true
       },
       {
           "id": "87290355-03e2-4cf9-b30b",
           "name": "Mock Bank",
           "code": "345",
           "ispb": "",
           "logo": "https://http2.mlstatic.com/open-banking/assets/8b30b.svg",
           "isFrequentlyUsed": false
       }
   ]
}
```

**Possible errors**:

| Error code     | Type         | Description                                        |
|----------------|--------------|----------------------------------------------------|
| 401            | unauthorized | Unauthorized access                                |
| 403            | forbidden    | You do not have permission to access this resource |


> WARNING
> 
> Attention
> 
> As a prerequisite for calling this endpoint, it is necessary to pass the production `access_token` for productive requests and the test one for test requests.

Currently, the participating Financial Institutions approved and available to start are:

| Financial Institution     | App | Web |
|---------------------------|-----|-----|
| Nubank                    | OK  | OK  |
| Bradesco PF               | OK  | OK  |
| PicPay Servicos S.A       | OK  | OK  |
| Banco do Brasil           | OK  | OK  |
| Banco Bradesco S.A (Next) | OK  | OK  |
| Santander PF              | OK  | OK  |
| Itaú PF                   | OK  | OK  |
| XP                        | OK  | OK  |
| iti - Itaú                | OK  |  -  |
| Pagbank                   | OK  | OK  |
| Neon                      | OK  | OK  |
| Sicredi                   | OK  | OK  |
| Woop                      | OK  | OK  |

> WARNING
> 
> Attention
> 
> The list of Financial Institutions is dynamic and may be changed in case of unavailability.

#### 2 - Create a payment
Use the bank ID chosen by the user to create a payment and pass this information to the 'transaction_data.bank_info.origin_bank_id' field of the payment creation request.

For more information, go to the payment creation section of this documentation, or by [clicking here](#bookmark_payment_creation)

#### Display tips
The seller will be able to choose how to display the favorite institutions, **but he won't be able to stop the customer from choosing any of the available institutions**.


![Available Financial Institutions list sample](/images/api/open-finance(advanced)/display-tips.png)

> WARNING
> 
> Important
> 
> The Central Bank of Brazil currently requires all Open Finance participants to display all Financial Institutions available for use, except in cases of errors, unavailability, or inoperability. 

### Review and confirm
The review and confirmation page must include, at a minimum, the following information:

* The payment method;

* The payment transaction amount;

* Information related to the recipient of the payment transaction;

* Payment transaction date.

* The redirect warning should be modified to provide the customer more visibility into the next steps. 

![Review and confirm page](/images/api/open-finance(advanced)/review-confirm.png)

> WARNING
> 
> Attention
> 
> The Terms and Conditions can be presented as a link, depending on the Initiating Payment Transaction Institution's decision on whether to require customers to act.

## Payment creation

To initiate a Pix payment via Open Finance, the seller must use the API Payment Creation method, with some requirements:

* Payer information is mandatory and must be entered in the `payer` attribute

* A callback URL must be sent, through the `callback_url` field, to show the feedback to the payer. For more information, visit the [callback section](#bookmark_callback) of this documentation. 

**Request sample**:

```curl
curl --request POST \
  --url 'https://api.mercadopago.com/v1/payments?access_token=XXX' \
  --data '{
  "payment_method_id": "pix",
  "transaction_amount": 50,
  "description": "Open Finance Payment",
  "payer": {
    "email": "test_user_58128038@testuser.com",
    "identification": {
      "number": "15635614680",
      "type": "CPF"
    },
  },
  "point_of_interaction": {
    "linked_to": "openfinance",
       "transaction_data": {
		"bank_info": {
			"origin_bank_id": "81d8e591-8b4a-9819e4739fd9"
	 }
  },
  "token": "45ba90f2-a37f-4d57-bce2-e46aae3c3b04",
  "callback_url": "https://example.com"
}'
```

For authentication and confirmation at the selected Financial Institution, the customer must be redirected to the appropriate channel through the URL returned in the `ticket_url` parameter in the request response.

> The value returned in `ticket_url` is the Carousel Redirect url.

**Response**:

```json
{
    "id": 22831702804,
    "date_created": "2022-06-02T10:17:13.865-04:00",
    "date_approved": null,
    "date_last_updated": "2022-06-02T10:17:13.865-04:00",
    "date_of_expiration": "2022-06-03T10:17:13.536-04:00",
    "money_release_date": null,
    "operation_type": "regular_payment",
    "issuer_id": null,
    "payment_method_id": "pix",
    "payment_type_id": "bank_transfer",
    "status": "pending",
    "status_detail": "pending_waiting_transfer",
    "currency_id": "BRL",
    "description": "Pagamento Openfinace",
    "live_mode": true,
    "sponsor_id": null,
    "authorization_code": null,
    "money_release_schema": null,
    "taxes_amount": 0,
    "counter_currency": null,
    "brand_id": null,
    "shipping_amount": 0,
    "pos_id": null,
    "store_id": null,
    "integrator_id": null,
    "platform_id": null,
    "corporation_id": null,
    "collector_id": 456852241,
    "payer": {
        "type": null,
        "id": "435906493",
        "operator_id": null,
        "email": null,
        "identification": {
            "type": null,
            "number": null
        },
        "phone": {
            "area_code": null,
            "number": null,
            "extension": null
        },
        "first_name": null,
        "last_name": null,
        "entity_type": null
    },
    "marketplace_owner": null,
    "metadata": {},
    "additional_info": {
        "available_balance": null,
        "nsu_processadora": null,
        "authentication_code": null
    },
    "order": {},
    "external_reference": "45ba90f2-a37f-4d57-bce2-e46aae3c3b04",
    "transaction_amount": 5,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "callback_url": null,
    "installments": 1,
    "transaction_details": {
        "payment_method_reference_id": null,
        "net_received_amount": 0,
        "total_paid_amount": 5,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 0,
        "financial_institution": null,
        "payable_deferral_period": null,
        "acquirer_reference": null,
        "bank_transfer_id": null,
        "transaction_id": null
    },
    "fee_details": [],
    "charges_details": [],
    "captured": true,
    "binary_mode": false,
    "call_for_authorize_id": null,
    "statement_descriptor": null,
    "card": {},
    "notification_url": null,
    "refunds": [],
    "processing_mode": "aggregator",
    "merchant_account_id": null,
    "merchant_number": null,
    "acquirer_reconciliation": [],
    "point_of_interaction": {
        "type": "OPENPLATFORM",
        "linked_to": "openfinance",
        "business_info": {
            "unit": "online_payments",
            "sub_unit": "default"
        },
        "application_data": {
            "name": null,
            "version": null
        },
        "transaction_data": {
            "qr_code": null,
            "bank_transfer_id": null,
            "transaction_id": null,
            "financial_institution": null,
            "ticket_url": null,
            "bank_info": {
                "payer": {
                    "account_id": null,
                    "id": null,
                    "long_name": null,
                    "external_account_id": null
                },
                "collector": {
                    "account_id": null,
                    "long_name": null,
                    "account_holder_name": "Salazar Tucker",
                    "transfer_account_id": null
                },
                "is_same_bank_account_owner": null,
                "origin_bank_id": null,
                "origin_wallet_id": null
            },
            "infringement_notification": {
                "type": null,
                "status": null
            },
          "qr_code_base64":null
        }
    }
}
```

## Authorization and redirection

Redirection must occur to the secure digital channel of the Financial Institution holding the account, which may be:

* App-to-App
  
* App-to-Browser
  
* Browser-to-Browser
  
* Browser-to-App

![Redirection page sample](/images/api/open-finance(advanced)/authorization.gif)

It is essential to point out that the redirection is part of Open Finance; therefore the customer is being redirected safely from the Initiating Institution of the Payment Transaction - Mercado Pago to the Account Holder Institution, using the same graphic elements for both institutions.

> WARNING
> 
> Attention
> 
> The Central Bank of Brazil says that the customer needs to know who is starting the Payment Transaction, for this reason, it is important to say that the transaction is **"done through Mercado Pago."**

## Callback

After the payment has been authorized at the other institution, the user will be redirected to a Mercado Pago web page, which regulates this payment flow. The user will then be directed to the URL inserted in the 'callback_url' attribute when creating the payment.

At this moment, if you want to obtain the current status of the payment, you need to query the payment API, using the [Get Payment method](/developers/en/reference/payments/_payments_search/get), using the payment ID returned in the url.

> The callback url will come with the `paymentId` parameter containing the previously created payment ID.

If you need to open a mobile application, we recommend creating an [Android App Link](https://developer.android.com/training/app-links) or Universal Link](https://developer.android.com/training/app-links). It is worth remembering that on Androids with versions before 12, the user has the possibility to choose where to open the App Link as shown in the image below:

![Android open with sample](/images/api/open-finance(advanced)/callback.png)

Even if the flow is going to end in a mobile app, **we recommend that you also create a handover screen** to be used when the user wants to open the link in their browser.

## Response messages

Ensure that your customers are provided with clear and accurate information about possible errors in the Initiation of Payment Transactions or the status of payments made. You can let them know what action they can take to resolve or communicate if there are more steps to take.

For example, if the account chosen to initiate the payment does not have enough balance for the purchase, it may be recommended that the customer try again with another payment method to complete the operation. Below you will find further information about this.

> WARNING
> 
> Attention
> 
> The Central Bank of Brazil says that every payment transaction started with the Payment Transaction Initiator has to be finished in 60 minutes.

**Payment Status**:

| Status   | Scenario                                   | Suggested message                    |
|----------|--------------------------------------------|--------------------------------------|
| PENDING  | Cases where payment is still pending.      |   Your payment is being processed.   |
| APPROVED | Cases where payment are approved.          |   Your payment has been approved.    |
| REJECTED | Cases where payment is rejected.           |   Your payment has been rejected.    |

**Reasons of rejection**:

| Status                     | Scenario                                                                                            | Suggested message                                                                                                                  |
|----------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| REJECTED_ACCOUNT_ERROR     | Case where there is some kind of error in the user account                                          | We couldn't finish the transaction because of a problem with your account. Please contact your bank and try again.                 |
| INSUFFICIENT_AMOUNT        | Case where the user attempting to make the payment does not have sufficient funds in their account. | You don't have enough money in the account you chose. Please select another account and try again.                                 |
| REJECTED_CAP_EXCEEDED      | Case where the Pix value limit is exceeded.                                                         | This amount exceeds your daily Pix limit. Go back to the {{holding institution}} and choose a lower amount, or try again tomorrow. |
| REJECTED_SETTLEMENT_FAILED | Case where the customer did not agree to the payment or there was an error during the approval.     | It is not possible to do this transaction right now. We're sorry about that. Try again later.                                      |

## Testing your integration

To test your integration, simply create a PIX Open Finance payment and follow the steps below:

* Redirect to the URL returned in `point_of_interaction.transaction_data.ticket_url`, which has the link to the Sandbox environment;

* Update the `transaction_data.bank_info.origin_bank_id` field with the ID of the chosen bank, which can be found in the public listing of banks available for Open Finance.

* Inform the callback url in `callback_url`.

In the Sandbox environment, a screen will be shown that simulates the institution that owns the account. There will be three buttons that will allow you to choose what the final status of this test payment will be:

* approved
  
* pending
  
* rejected.

Finally, after selecting the final payment status, you will be redirected to the feedback screen.

After choosing the final payment status, the test flow will show a "waiting screen", which will not be shown in the productive flows.

> WARNING
> 
> Attention
> 
> In Sandbox tests, it is not possible to see the callback that occurs in the browser (in the Mercado Pago domain for regulatory reasons). 