
----[mla, mlb]---- 
# Obtener lista de cuotas 

------------ 
----[mlm]---- 
# Obtener lista de mensualidades 

------------

Para obtener la lista de cuotas asociadas a un monto específico, usa la función `getInstallmentsAmount`. Puedes acceder a ella a través de la `PaymentInstallmentTools`, a través del objeto `MPManager`.

> WARNING
>
> Attention
>
> Por el momento, esta opción solo está disponible para soluciones implementadas en Brasil.

Para usar la función, debes:

1. Seleccionar el medio de pago **CREDIT-CARD**.
2. Usar un monto mayor que $ 10,00.

De esta manera:

----[mla, mlb]---- 
[[[
```kotlin
MPManager.paymentInstallmentTools.getInstallmentsAmount(
   callback = { mpResponse ->
       mpResponse.doIfSuccess { installments ->
           // Manejar la lista de cuotas exitosamente
       }.doIfError {
           // Manejar el error en la solicitud de cuotas
       }
   },
   amount = "11.0"
)
```
```java
final PaymentInstallmentTools paymentInstallmentTools = MPManager.INSTANCE.getPaymentInstallmentTools();

final Function1<MPResponse<List<InstallmentAmount>>, Unit> callback = (final MPResponse<List<InstallmentAmount>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manejar la lista de cuotas exitosamente
 } else {
   // Manejar el error en la solicitud de cuotas 
 }
 return Unit.INSTANCE;
};
final String amount = "11.0";

paymentInstallmentTools.getInstallmentsAmount(callback, amount);
```
]]]

|Campo|Descripción|
|---|---|
|**callback ((MPResponse<List<InstallmentAmount>>) -> Unit)**|Función de respuesta con el resultado de la solicitud de la lista de cuotas.|
|**amount (String)**|Monto con el cual se determina la lista de cuotas.|
|**installment (Int)|**Número de cuotas.|
|**amount (Double)**|Monto de cada cuota.|
|**financialAmount (Double)**|Porcentaje de interés de cada cuota.|

------------ 
----[mlm]---- 
[[[
```kotlin
MPManager.paymentInstallmentTools.getInstallmentsAmount(
   callback = { mpResponse ->
       mpResponse.doIfSuccess { installments ->
           // Manejar la lista de mensualidades exitosamente
       }.doIfError {
           // Manejar el error en la solicitud de mensualidades
       }
   },
   amount = "11.0"
)
```
```java
final PaymentInstallmentTools paymentInstallmentTools = MPManager.INSTANCE.getPaymentInstallmentTools();

final Function1<MPResponse<List<InstallmentAmount>>, Unit> callback = (final MPResponse<List<InstallmentAmount>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manejar la lista de mensualidades exitosamente
 } else {
   // Manejar el error en la solicitud de mensualidades 
 }
 return Unit.INSTANCE;
};
final String amount = "11.0";

paymentInstallmentTools.getInstallmentsAmount(callback, amount);
```
]]]

|Campo|Descripción|
|---|---|
|**callback ((MPResponse<List<InstallmentAmount>>) -> Unit)**|Función de respuesta con el resultado de la solicitud de la lista de mensualidades.|
|**amount (String)**|Monto con el cual se determina la lista de mensualidades.|
|**installment (Int)**|Número de mensualidades.|
|**amount (Double)**|Monto de cada mensualidade.|
|**financialAmount (Double)**|Porcentaje de interés de cada mensualidade.|

------------