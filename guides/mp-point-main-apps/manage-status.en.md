# Manage status

Check how to activate, deactivate and validate the current status of the bluetooth using the `BluetoothIgnitor` class.

## Activate bluetooth

To activate the bluetooth on the [Smart POS](/developers/en/docs/mp-point/landing) machine, use the `turnOn` feature of the `BluetoothIgnitor` class on our SDK. You can access that feature through the `MPManager` object, as in the example below.

[[[
```kotlin
val bluetoothIgnitor = MPManager.bluetooth.ignitor

bluetoothIgnitor.turnOn { response ->
   response
       .doIfSuccess { result ->
           if (result) {
               // Bluetooth was successfully activated
               // Perform additional actions if necessary
           } else {
               // It wasn’t possible to activate the bluetooth
           }
       }.doIfError {
           // Manage the error case if necessary
       }
}
```
```java
final BluetoothIgnitor bluetoothIgnitor = MPManager.INSTANCE.getBluetooth().getIgnitor();

final Function1<MPResponse<Boolean>, Unit> callback = (final MPResponse<Boolean> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   if (response.getData()) {
     // Bluetooth was successfully activated
     // Perform additional actions if necessary
   } else {
     // It wasn’t possible to activate the bluetooth
   }
 } else {

   // Manage the error case if necessary
 }
 return Unit.INSTANCE;
};

bluetoothIgnitor.turnOn(callback);
```
]]]

|Field|Description|
|---|---|
|**callback ((MPResponse&lt;Boolean&gt;) -> Unit)**| Request response feature that provides the result of the activation operation. The `[MPResponse]` includes the status, the error (if any) and the details in case of an error. The response contains a **boolean** value where `true` indicates that the bluetooth was activated and `false` the inability to do so.|

## Deactivate bluetooth

To deactivate the bluetooth on the [Point Smart](/developers/en/docs/mp-point/landing), use the feature `turnOff` from the `BluetoothIgnitor` class. The access is also done through `MPManager`, as shown below.

[[[
```kotlin
val bluetoothIgnitor = MPManager.bluetooth.ignitor

bluetoothIgnitor.turnOff { response ->
   response
       .doIfSuccess { result ->
           if (!result) {
               // Bluetooth was successfully deactivated
               // Perform additional actions if necessary
           } else {
               // It wasn’t possible to deactivate the bluetooth
           }
       }
       .doIfError { error ->
           // Manage the error case
       }
}
```
```java
final BluetoothIgnitor bluetoothIgnitor = MPManager.INSTANCE.getBluetooth().getIgnitor();

final Function1<MPResponse<Boolean>, Unit> callback = (final MPResponse<Boolean> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   if (!response.getData()) {
     // Bluetooth was successfully deactivated
     // Perform additional actions if necessary
   } else {
     // It wasn’t possible to deactivate the bluetooth
   }
 } else {

   // Manage the error case if necessary
 }
 return Unit.INSTANCE;
};

bluetoothIgnitor.turnOff(callback);
```
]]]

|Field|Description|
|---|---|
|**callback ((MPResponse&lt;Boolean&gt;) -> Unit)**| Request response feature that provides the result of the deactivation operation. The `[MPResponse]` includes the status, the error (if any), and the details in case of success. The response contains a **boolean** value where `false` indicates that the bluetooth was deactivated and `true` the inability to do so.|

## Validate the current status of the bluetooth

The feature `getCurrentState` of the `BluetoothIgnitor` class is used to validate the activation status of the bluetooth on the [Point Smart](/developers/en/docs/mp-point/landing). The access is through the `BluetoothIgnitor` instance from the `MPManager`, as shown in the example below.

[[[
```kotlin
val bluetoothIgnitor = MPManager.bluetooth.ignitor

bluetoothIgnitor.getCurrentState { result ->
   result
       .doIfSuccess { state ->
           if (state) {
               // Bluetooth is activated
               // Perform additional actions if necessary
           } else {
               // Bluetooth is deactivated
               // Perform additional actions if necessary
           }
       }
       .doIfError { error ->
           // Manage the error case if necessary
       }
}
```
```java
final BluetoothIgnitor bluetoothIgnitor = MPManager.INSTANCE.getBluetooth().getIgnitor();

final Function1<MPResponse<Boolean>, Unit> callback = (final MPResponse<Boolean> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   if (!response.getData()) {
     // Bluetooth is activated
     //Perform additional actions if necessary
   } else {
     // Bluetooth is deactivated
     // Perform additional actions if necessary
   }
 } else {
   // Manage the error case if necessary
 }
 return Unit.INSTANCE;
};

bluetoothIgnitor.getCurrentState(callback);
```
]]]

|Field|Description|
|---|---|
|**callback ((MPResponse&lt;Boolean&gt;) -> Unit)**| Request response feature that provides the result the validation of the current status of the bluetooth. The `[MPResponse]` includes the status, the error (if any) and the details in case of success. The response contains a **boolean** value where `true` indicates that the bluetooth is activated and `false` indicates its deactivation.|