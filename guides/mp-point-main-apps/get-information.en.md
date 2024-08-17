# Get information

Through the `getInformation` feature of the `SmartInformationTools` class, you recover detailed information about a device and the integration SDK. Access this feature through the `MPManager` object, as in the following example:

[[[
```kotlin
val informationTools = MPManager.smartInformationTools

informationTools.getInformation { response ->
   response.doIfSuccess { smartInformation ->
       // Manage information on the device and integration
       val deviceSerialNumber = smartInformation.smartDevice.serialNumber
       val brandName = smartInformation.smartDevice.brandName
       val modelName = smartInformation.smartDevice.modelName
       val paymentModuleVersion = smartInformation.smartDevice.paymentModuleVersion

       val sdkVersion = smartInformation.integration.nativeSdkVersion
   }.doIfError { error ->
       // Manage error in information request 
}
```
```java
final SmartInformationTools smartInformationTools = MPManager.INSTANCE.getSmartInformationTools();

final Function1<MPResponse<SmartInformation>, Unit> callback = (final MPResponse<SmartInformation> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manage information on the device and integration
   final String deviceSerialNumber = response.getData().getSmartDevice().getSerialNumber();
   final String brandName = response.getData().getSmartDevice().getBrandName();
   final String modelName = response.getData().getSmartDevice().getModelName();
   final String paymentModuleVersion = response.getData().getSmartDevice().getPaymentModuleVersion();

   final String sdkVersion = response.getData().getIntegration().getNativeSdkVersion();
 } else {
   // Manage error in information request 
 }
 return Unit.INSTANCE;
};

smartInformationTools.getInformation(callback);
```
]]]

|Field|Description|
|---|---|
|smartDevice| Device details.|
|serialNumber| POS machine serial number.|
|brandName| POS machine brand.|
|modelName| POS machine model.|
|paymentModuleVersion| Version of the payment module of the [SmartPOS](/developers/en/docs/mp-point/landing).|
|integration| Integration SDK details.|
|nativeSdkVersion| Integration SDK version.|