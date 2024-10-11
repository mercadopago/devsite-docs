# Get payment methods

Through `MPManager`, use the instance `PaymentsMethodsTools` with the feature `getPaymentMethods`. The payment methods will be shown by an **ENUM** called `PaymentMethod`, like in the example below.

[[[
```kotlin
MPManager.paymentMethodsTools.getPaymentMethods { response ->
   response
       .doIfSuccess { result ->
           // You can render the list of payment methods in a recycler view
       }.doIfError { exception ->
           // Error management
       }
}
```
```java
final Function1<MPResponse<List<PaymentMethod>>, Unit> callback = (final MPResponse<List<PaymentMethod>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // You can render the list of payment methods in a recycler view
 } else {
   // Error management
 }
 return Unit.INSTANCE;
};
MPManager.INSTANCE.getPaymentMethodsTools().getPaymentMethods(callback);
```
]]]