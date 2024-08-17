# Obtener información

A través de la función `getInformation` de la clase `SmartInformationTools`, recuperas información detallada sobre un dispositivo y el SDK de las integraciones. Accede a esta función por el a través del objeto `MPManager`, como en el ejemplo a continuación:

[[[
```kotlin
val informationTools = MPManager.smartInformationTools

informationTools.getInformation { response ->
   response.doIfSuccess { smartInformation ->
       // Manejar la información del dispositivo e integración
       val deviceSerialNumber = smartInformation.smartDevice.serialNumber
       val brandName = smartInformation.smartDevice.brandName
       val modelName = smartInformation.smartDevice.modelName
       val paymentModuleVersion = smartInformation.smartDevice.paymentModuleVersion

       val sdkVersion = smartInformation.integration.nativeSdkVersion
   }.doIfError { error ->
       // Manejar el error en la solicitud de información
}
```
```java
final SmartInformationTools smartInformationTools = MPManager.INSTANCE.getSmartInformationTools();

final Function1<MPResponse<SmartInformation>, Unit> callback = (final MPResponse<SmartInformation> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manejar la información del dispositivo e integración
   final String deviceSerialNumber = response.getData().getSmartDevice().getSerialNumber();
   final String brandName = response.getData().getSmartDevice().getBrandName();
   final String modelName = response.getData().getSmartDevice().getModelName();
   final String paymentModuleVersion = response.getData().getSmartDevice().getPaymentModuleVersion();

   final String sdkVersion = response.getData().getIntegration().getNativeSdkVersion();
 } else {
   // Manejar el error en la solicitud de información 
 }
 return Unit.INSTANCE;
};

smartInformationTools.getInformation(callback);
```
]]]

----[mla, mlb]---- 
|Campo|Descripción|
|---|---|
|smartDevice| detalles del dispositivo|
|serialNumber| número de serie del lector.|
|brandName| nombre de la marca del lector.|
|modelName| nombre del modelo del lector.|
|paymentModuleVersion| ersión del módulo de pago del [SmartPOS](/developers/en/docs/mp-point/landing).|
|integration|  detalles del SDK de las integraciones.|
|nativeSdkVersion| versión del SDK de las integraciones.|

------------ 
----[mlm]---- 
|Campo|Descripción|
|---|---|
|smartDevice| detalles del dispositivo|
|serialNumber| número de serie de la terminal.|
|brandName| nombre de la marca de la terminal.|
|modelName| nombre del modelo de la terminal.|
|paymentModuleVersion| ersión del módulo de pago del [SmartPOS](/developers/en/docs/mp-point/landing).|
|integration|  detalles del SDK de las integraciones.|
|nativeSdkVersion| versión del SDK de las integraciones.|

------------