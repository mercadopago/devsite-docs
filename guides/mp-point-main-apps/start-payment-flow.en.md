# Start payment flow

To offer a fluid experience in your application, our SDK facilitates the initialization of the payment flow through the `PaymentFlow` class. Here’s how:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val amount = "2.0"
val description = "Payment description"
val intentSuccess = paymentFlow.buildCallbackUri(
   callback = "mercadopago://smart_integrations/payment_result",
   methodCallback = "success",
   metadata = hashMapOf("message" to "testSuccess"),
   appID = "demo.app"
)
val intentError = paymentFlow.buildCallbackUri(
   callback = "mercadopago://smart_integrations/payment_result",
   methodCallback = "error",
   metadata = hashMapOf("message" to "testError"),
   appID = "demo.app"
)

val paymentFlowData = PaymentFlowData(
   amount = amount,
   description = description,
   intentSuccess = intentSuccess,
   intentError = intentError,
   paymentMethod = PaymentMethod.CREDIT_CARD.name,
   installments = 6
)
paymentFlow.launchPaymentFlowActivity(
   paymentFlowData = paymentFlowData,
   context = context
) { response ->
   response.doIfSuccess { message ->
       // Success management with a message
   }.doIfError { error ->
       // Error management
   }
}
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final HashMap<String, String> successMetadata = new HashMap<>();
successMetadata.put("success", "testSuccess");

final HashMap<String, String> errorMetadata = new HashMap<>();
successMetadata.put("message", "testError");

final String amount = "2.0";
final String description = "Payment description";
final Uri intentSuccess = paymentFlow.buildCallbackUri(
   "mercadopago://smart_integrations/payment_result",
   "success",
   successMetadata,
   "demo.app"
);
final Uri intentError = paymentFlow.buildCallbackUri(
   "mercadopago://smart_integrations/payment_result",
   "error",
   errorMetadata,
   "demo.app"
);

final PaymentFlowData paymentFlowData = new PaymentFlowData(
   amount,
   description,
   intentSuccess,
   intentError,
   PaymentMethod.CREDIT_CARD.name(),
   6
);

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Success management with a message
 } else {
   // Error management
 }
 return Unit.INSTANCE;
};

paymentFlow.launchPaymentFlowActivity(paymentFlowData, context, callback);
```
]]]

|Field|Description|
|---|---|
|amount (String)| The amount used to start the payment flow.|
|description (String)| The description used to start the payment flow. Using it is optional.|
|intentSuccess (Uri)| URI that requests the success screen. It’s used to create a deeplink that leads to the success activity.|
|intentError (Uri)| URI that requests the error screen. It’s used to create a deeplink that leads to the error activity.|
|paymentMethod (String)| The payment method to complete the transaction. Using it is optional.|
|installments (Int)| The number of installments used to start the payment flow, Available only for Brazil. Using it is optional.|
|launchPaymentFlowActivity| This method starts the payment flow using the SmartPOS app.|
|paymentFlowData (PaymentFlowData)| Detail model necessary to open the flow.|
|context (Context)| Context from where the flow will begin.|
|callback (MPResponse<String> -> Unit)| Provides the result of the opening of the payment flow.|

## Build a URI to open the payment flow

The feature `buildCallbackUri` is designed to build a valid URI that allows you to open a specific activity, based on the deeplink strategy. To access, use the `PaymentFlow` instance through the `MPManager` object.

> WARNING
>
> Attention
>
> Correctly set up your deeplink in your `AndroidManifest` so that the corresponding activity leads to the request.

Check how to implement this feature:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val uriResult = paymentFlow.buildCallbackUri(
   callback = "tuHost://tuApp/result",
   methodCallback = "error",
   metadata = hashMapOf("message" to "result"),
   appID = "demo.app"
)
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final HashMap<String, String> resultMetadata = new HashMap<>();
resultMetadata.put("message", "result");

final Uri uriResult = paymentFlow.buildCallbackUri(
   "tuHost://tuApp/result",
   "error",
   resultMetadata,
   "demo.app"
);
```
]]]

|Field|Description|
|---|---|
|callback (String)| The value of the URI to request the deeplink. E.g.: `yourHost://tuApp/test`.|
|methodCallback (String)| Identifies if the URI is for a success, error or another custom response. |
|metadata (HashMap<String, String>)| Optional field to send information to the response screen, in case it’s necessary to show additional details, like the name of the customer or the summary of the products that were purchased.|
|appID (String)| Identifier of the main app. We use the package name. E.g.: `com.yourcompany.yourapp`.|
|Uri| the URI defined with the information provided.|

## Get the payment response

The feature `parseResponse` of the `PaymentFlow` class is used to receive the result of the payment flow, which is delivered as the `PaymentResponse` object ready for its handling. In this process, the following information is provided:

- Payment method used.
- Payment reference.
- Creation date.
- Payment amount.
- Serial number of the POS machine.
- Card brand.
- Number of installments.
- Last four digits of the card.
- Any errors associated with the transaction.

Check how to implement this feature:

[[[
```kotlin
intent.data?.let { data ->
   val response = paymentFlow.parseResponse(data)
   if (response.paymentReference.isNotEmpty()) {
       // Payment management with success case
   } else {
       // Payment management with an error
   }
}
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final Uri resultUri = getIntent().getData();
final PaymentResponse response = paymentFlow.parseResponse(resultUri);

if (!response.getPaymentReference().isEmpty()) {
 // Payment management with success case
} else {
 // Payment management with an error
}
```
]]]

|Field|Description|
|---|---|
|response (Uri)| The response received by the [SmartPOS](/developers/en/docs/mp-point/landing). To find it, use `intent.data` of the Activity in charge of opening the deeplink set within the `buildCallbackUri` feature.|
|PaymentResponse| Object that contains transaction details. If the response is null, it brings a `PaymentResponse` object with a `paymentStatusError`.|
|paymentMethod| Payment method used to complete the transaction. E.g.: credit card, debit card, QR code, payment link. |
|paymentReference| Unique transaction identifying number.|
|paymentCreationDate| Creation date of the transaction.|
|paymentAmount| Payment amount.|
|paymentSnDevice| Serial number of the POS machine with which the transaction was done.|
|paymentBrandName| User name registered in the POS machine.|
|paymentInstallments| Number of installments that a person selected when completing the payment. |
|paymentLastFourDigits| Last four digits of the card used for the payment.|
|paymentStatusError| Field to register transaction problems or errors.|

> WARNING
>
> Attention
>
> Make sure that the response of the payment flow is valid and contains the necessary information.