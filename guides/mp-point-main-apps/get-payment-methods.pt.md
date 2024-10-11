# Obter meios de pagamento

Por meio do `MPManager`, use a instância `PaymentsMethodsTools` com a função `getPaymentMethods`. Os meios de pagamentos serão mostrados por um **ENUM** chamado `PaymentMethod`, como no exemplo a seguir.

[[[
```kotlin
MPManager.paymentMethodsTools.getPaymentMethods { response ->
   response
       .doIfSuccess { result ->
           // Você pode renderizar a lista de métodos de pagamento em um recycler view
       }.doIfError { exception ->
           // Gerenciamento do erro
       }
}
```
```java
final Function1<MPResponse<List<PaymentMethod>>, Unit> callback = (final MPResponse<List<PaymentMethod>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Você pode renderizar a lista de métodos de pagamento em um recycler view
 } else {
   // Gerenciamento do erro
 }
 return Unit.INSTANCE;
};
MPManager.INSTANCE.getPaymentMethodsTools().getPaymentMethods(callback);
```
]]]