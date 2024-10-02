# Obter informações

Através da função `getInformation` da classe `SmartInformationTools`, você recupera informações detalhadas sobre um dispositivo e o SDK de integrações. Acesse essa função pelo objeto `MPManager`, como no exemplo a seguir:

[[[
```kotlin
val informationTools = MPManager.smartInformationTools

informationTools.getInformation { response ->
   response.doIfSuccess { smartInformation ->
       // Gerencie informações no dispositivo e integração
       val deviceSerialNumber = smartInformation.smartDevice.serialNumber
       val brandName = smartInformation.smartDevice.brandName
       val modelName = smartInformation.smartDevice.modelName
       val paymentModuleVersion = smartInformation.smartDevice.paymentModuleVersion

       val sdkVersion = smartInformation.integration.nativeSdkVersion
   }.doIfError { error ->
       // Gerencie erro na solicitação de informações 
}
```
```java
final SmartInformationTools smartInformationTools = MPManager.INSTANCE.getSmartInformationTools();

final Function1<MPResponse<SmartInformation>, Unit> callback = (final MPResponse<SmartInformation> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Gerencie informações no dispositivo e integração
   final String deviceSerialNumber = response.getData().getSmartDevice().getSerialNumber();
   final String brandName = response.getData().getSmartDevice().getBrandName();
   final String modelName = response.getData().getSmartDevice().getModelName();
   final String paymentModuleVersion = response.getData().getSmartDevice().getPaymentModuleVersion();

   final String sdkVersion = response.getData().getIntegration().getNativeSdkVersion();
 } else {
   // Gerencie erro na solicitação de informações
 }
 return Unit.INSTANCE;
};

smartInformationTools.getInformation(callback);
```
]]]

|Campo|Descrição|
|---|---|
|**smartDevice**| Detalhes do dispositivo.|
|**integration**| Detalhes do SDK de integrações.|
|**serialNumber**| Número de série da maquininha.|
|**brandName**| Nome da marca da maquininha.|
|**modelName**| Nome do modelo da maquininha.|
|**paymentModuleVersion**| Versão do módulo de pagamento do [SmartPOS](/developers/pt/docs/mp-point/landing).|
|**nativeSdkVersion**| Versão do SDK de integrações.|