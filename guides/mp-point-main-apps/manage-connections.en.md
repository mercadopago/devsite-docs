# Manage connections

On our SDK, you can search for printers and other bluetooth devices, in addition to checking the ones paired with the POS machine. Learn how to continue.

## Manage paired devices

To get the list of paired devices with [Point Smart](/developers/en/docs/mp-point/landing) use the `getPairedDevices feature`, from the `BluetoothDiscoverDevices` class. Check below how to access it through the `MPManager`.

[[[
```kotlin
val bluetoothDiscoverDevices = MPManager.bluetooth.discover

bluetoothDiscoverDevices.getPairedDevices { result ->
   result
       .doIfSuccess { devices ->
           // Work with the list of paired devices
       }
       .doIfError { error ->
           // Manage the error case if necessary
       }
}
```
```java
final BluetoothDiscoverDevices bluetoothDiscoverDevices = MPManager.INSTANCE.getBluetooth().getDiscover();

final Function1<MPResponse<List<BluetoothDeviceModel>>, Unit> callback = (final MPResponse<List<BluetoothDeviceModel>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   final List<BluetoothDeviceModel> devices = response.getData();
   // Work with the list of paired devices
 } else {
   // Manage the error case if necessary
 }
 return Unit.INSTANCE;
};

bluetoothDiscoverDevices.getPairedDevices(callback);
```
]]]

|Field|Description|
|---|---|
|**callback ((MPResponse<List<BluetoothDeviceModel>>) -> Unit)**| Request response feature that provides the paired devices as a result. The `[MPResponse]` includes the status, the error (if any), and the details in case of success, in a list of `BluetoothDeviceModel` models.|
|**id (String)**| Unique identifier of the bluetooth device.|
|**boundState (Int)**| Pairing status of the device. It can have different values representing different status.|
|**name (String)**| Name of the device provided by the operational system.|
|**address (String)**| MAC address of the bluetooth device.|
|**isConnected (Boolean)**| Indicates if the device is connected. In a positive case, the answer is `true`; if disconnected, it appears as `false`.|

## Get paired printers

Use the `getPairedPrinterDevices` feature from the `BluetoothDiscoverDevices` class to check the list of bluetooth printers with the [Point Smart](/developers/en/docs/mp-point/landing). The access is done through the `MPManager object`, as in the example below.

[[[
```kotlin
val bluetoothDiscoverDevices = MPManager.bluetooth.discover

bluetoothDiscoverDevices.getPairedPrinterDevices { result ->
   result
       .doIfSuccess { printers ->
           // Work with the list of paired devices
       }
       .doIfError { error ->
           // Manage the error case if necessary
       }
}
```
```java
final BluetoothDiscoverDevices bluetoothDiscoverDevices = MPManager.INSTANCE.getBluetooth().getDiscover();

final Function1<MPResponse<List<BluetoothDeviceModel>>, Unit> callback = (final MPResponse<List<BluetoothDeviceModel>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   final List<BluetoothDeviceModel> printers = response.getData();
   // Work with the list of paired devices
 } else {
   // Manage the error case if necessary
 }
 return Unit.INSTANCE;
};

bluetoothDiscoverDevices.getPairedPrinterDevices(callback);
```
]]]

|Field|Description|
|---|---|
|**callback ((MPResponse<List<BluetoothDeviceModel>>) -> Unit)**| Request response feature that provides the paired printers as a result. The `[MPResponse]` includes the status, the error (if any) and the details in case of success in a list of `BluetoothDeviceModel` models.|
|**id (String)**| Unique identifier of the bluetooth device.|
|**boundState (Int)**| Pairing status of the device. It can have different values representing different status.|
|**name (String)**| Name of the device provided by the operational system.|
|**address (String)**| MAC address of the bluetooth device.|`
|**isConnected (Boolean)**| Indicates if the device is connected. In a positive case, the answer is `true`; if disconnected, it appears as `false`.|

## Start search

The `startDiscovery` feature from the `BluetoothDiscoverDevices` class starts the discovery of bluetooth devices. The access is through the `MPManager` object. This method makes the dynamic implementation of the logic based on events in your solution easier. Like this:

[[[
```kotlin
val bluetoothDiscover = MPManager.bluetooth.discover

bluetoothDiscover.startDiscovery { response ->
   response
       .doIfSuccess { discoveryState ->
           when (discoveryState.type) {
               BluetoothDiscoveryState.Type.STARTED -> {
                   // Manage the start of the discovery
               }
               BluetoothDiscoveryState.Type.DEVICE_FOUND -> discoveryState.device?.let { device ->
                   // Manage the discovery of a new device
               }
               BluetoothDiscoveryState.Type.DEVICE_CHANGE -> discoveryState.device?.let { device ->
                   // Manage changes in a discovered device
               }
               BluetoothDiscoveryState.Type.ENDED -> {
                   // Manage the end of the discovery
               }
           }
       }
       .doIfError { error ->
           // Manage the error case if necessary
       }
}
```
```java
final BluetoothDiscoverDevices bluetoothDiscoverDevices = MPManager.INSTANCE.getBluetooth().getDiscover();

final Function1<MPResponse<BluetoothDiscoveryState>, Unit> callback = (final MPResponse<BluetoothDiscoveryState> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   switch (response.getData().getType()) {
     case STARTED:
       // Manage the start of the discovery
       break;
     case DEVICE_FOUND:
       // Manage the discovery of a new device
       final BluetoothDeviceModel foundDevice = response.getData().getDevice();
       break;
     case DEVICE_CHANGE:
       // Manage changes in a discovered device
       final BluetoothDeviceModel changedDevice = response.getData().getDevice();
       break;
     case ENDED:
       // Manage the end of the discovery

   }
 } else {
   // Manage the error case if necessary
 }
 return Unit.INSTANCE;
};

bluetoothDiscoverDevices.startDiscovery(callback);
```
]]]

|Field|Description|
|---|---|
|**callback ((MPResponse<BluetoothDiscoveryState>) -> Unit)**| Request response feature that provides the result of the discovery process. The `[MPResponse]` includes the status, the error (if any), and the details in case of success, containing a `BluetoothDiscoveryState` object that represents the current status of the discovery, events such as the start and end of the discovery and changes in the device.|
|**id (String)**| Unique identifier of the bluetooth device.|
|**boundState (Int)**| Pairing status of the device. It can have different values representing different status.|
|**name (String)**| Name of the device provided by the operational system.|
|**address (String)**| MAC address of the bluetooth device.|`
|**isConnected (Boolean)**| Indicates if the device is connected. In a positive case, the answer is `true`; if disconnected, it appears as `false`.|