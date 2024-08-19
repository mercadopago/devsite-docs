# Get list of installments

To get the list of installments linked to a specific amount, use the feature `getInstallmentsAmount`. Its accessible in the `PaymentInstallmentTools` instance, through the `MPManager` object.

> WARNING
>
> Attention
>
> Currently this option will only be available for solutions implemented within Brazil.

To use this feature, you have to:

1. Select the **CREDIT-CARD** payment method.
2. Use an amount greater than R$10,00.

Like this:

[[[
```kotlin
MPManager.paymentInstallmentTools.getInstallmentsAmount(
   callback = { mpResponse ->
       mpResponse.doIfSuccess { installments ->
           // Successfully manage the list of installments
       }.doIfError {
           // Manage the error in the installment request 
       }
   },
   amount = "11.0"
)
```
```java
final PaymentInstallmentTools paymentInstallmentTools = MPManager.INSTANCE.getPaymentInstallmentTools();

final Function1<MPResponse<List<InstallmentAmount>>, Unit> callback = (final MPResponse<List<InstallmentAmount>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Successfully manage the list of installments
 } else {
   // Manage the error in the installment request 
 }
 return Unit.INSTANCE;
};
final String amount = "11.0";

paymentInstallmentTools.getInstallmentsAmount(callback, amount);
```
]]]

|Field|Description|
|---|---|
|**callback ((MPResponse<List<InstallmentAmount>>) -> Unit)**|Response feature with the result of the request of the list of installments.|
|**amount (String)**|Amount with which the list of installments is determined.|
|**installment (Int)**|Number of installments.|
|**amount (Double)**|Amount of each installment.|
|**financialAmount (Double)**|Interest rate for each installment.|