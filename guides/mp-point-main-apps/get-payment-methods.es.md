# Obtener medios de pago

A través del `MPManager`, usa la instancia `PaymentsMethodsTools` con la función `getPaymentMethods`. Los medios de pagos se mostrarán por un **ENUM** llamado `PaymentMethod`, como en el ejemplo a continuación.

[[[
```kotlin
MPManager.paymentMethodsTools.getPaymentMethods { response ->
   response
       .doIfSuccess { result ->
           // Puedes renderizar la lista de payment methods en un recycler view
       }.doIfError { exception ->
           // Manejo del error
       }
}
```
```java
final Function1<MPResponse<List<PaymentMethod>>, Unit> callback = (final MPResponse<List<PaymentMethod>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Puedes renderizar la lista de payment methods en un recycler view
 } else {
   // Manejo del error
 }
 return Unit.INSTANCE;
};
MPManager.INSTANCE.getPaymentMethodsTools().getPaymentMethods(callback);
```
]]]