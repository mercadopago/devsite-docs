# Pair and unpair

In this section, you’ll learn how to pair and unpair devices with a [Point Smart](/developers/en/docs/mp-point/landing) by using a `BluetoothDevicesPairing` class.

## Pair a device

Use the `pairDevice` feature from the `BluetoothDevicesPairing` class to pair a device with Point Smart by sending only the (`(address)`). The access is through the  `MPManager` object, as shown below.

[[[
```kotlin
val bluetoothPairing = MPManager.bluetooth.paring

bluetoothPairing.pairDevice(address) { response ->
   response.doIfSuccess { result ->
       // Manage pairing success
       val bondState = result.first
       val deviceModel = result.second
       // ... Perform additional actions if necessary 
   }.doIfError { error ->
       // Manage the error case if necessary
   }
}
```
```java
final BluetoothDevicesPairing bluetoothPairing = MPManager.INSTANCE.getBluetooth().getParing();

final Function1<MPResponse<Pair<BluetoothBondState, BluetoothDeviceModel>>, Unit> callback =
   (final MPResponse<Pair<BluetoothBondState, BluetoothDeviceModel>> response) -> {
     if (response.getStatus() == ResponseStatus.SUCCESS) {
       final BluetoothBondState bondState = response.getData().getFirst();
       final BluetoothDeviceModel deviceModel = response.getData().getSecond();
       // Perform additional actions if necessary 
     } else {
       // Manage the error case if necessary
     }
     return Unit.INSTANCE;
   };

bluetoothPairing.pairDevice(address, callback);
```
]]]

## Unpair a device

To unpair a device, use the `unPairDevice` feature from the `BluetoothDevicesPairing` class by accessing through the `MPManager` object. This feature uses the (`(address)`) of the selected device as a parameter, as shown below.

[[[
```kotlin
val bluetoothPairing = MPManager.bluetooth.paring

bluetoothPairing.unPairDevice(address) { response ->
   response.doIfSuccess { result ->
       // Manage pairing success
       val bondState = result.first
       val deviceModel = result.second
       // ... Perform additional actions if necessary
   }.doIfError { error ->
       // Manage the error case if necessary
   }
}
```
```java
final BluetoothDevicesPairing bluetoothPairing = MPManager.INSTANCE.getBluetooth().getParing();

final Function1<MPResponse<Pair<BluetoothBondState, BluetoothDeviceModel>>, Unit> callback =
   (final MPResponse<Pair<BluetoothBondState, BluetoothDeviceModel>> response) -> {
     if (response.getStatus() == ResponseStatus.SUCCESS) {
       final BluetoothBondState bondState = response.getData().getFirst();
       final BluetoothDeviceModel deviceModel = response.getData().getSecond();
       // Perform additional actions if necessary
     } else {
       // Manage the error case if necessary
     }
     return Unit.INSTANCE;
   };

bluetoothPairing.unPairDevice(address, callback);
```
]]]

## Description of the fields

|Field|Description|
|---|---|
|**address (String)**| Location of the selected device, obtained through `[BluetoothDeviceModel]`.|
|**callback ((MPResponse<Pair<BluetoothBondState, BluetoothDeviceModel>>) -> Unit)**| Request response feature that provides the result of the pairing process. The [MPResponse] includes the status, the error (if any), and the details in case of success, which contain a `(Pair)` that comprises `[BluetoothBondState]` and [BluetoothDeviceModel].|
|**NONE (BOND_NONE)**| Indicates that the device isn’t paired.|
|**BONDING (BOND_BONDING)**| Indicates that the device is in pairing process. |
|**BONDED (BOND_BONDED)**| Indicates that the device is paired.|
|**id (String)**| Identificador del dispositivo.|
|**boundState (Int)**| Estado de emparejamiento del dispositivo. Puede ser `true` o `false`.|
|**name (String)**| Nombre del dispositivo ofrecido por el sistema operacional.|
|**id (String)**| Dirección MAC del dispositivo.|
|**isConnected (Boolean)**| Indica si el dispositivo está conectado.|