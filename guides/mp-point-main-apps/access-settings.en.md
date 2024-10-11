# Access settings

Use the `launch` method of the `BluetoothUiSettings` class to start with the bluetooth settings on Mercado Pago. That component provides several features, like activating and deactivating, searching for devices, and pairing and unpairing, among others. Check how to access it.

[[[
```kotlin
val bluetoothUiSettings = MPManager.bluetoothUiSettings

bluetoothUiSettings.launch(context)
```
```java
final BluetoothUiSettings bluetoothUiSettings = MPManager.INSTANCE.getBluetoothUiSettings();

bluetoothUiSettings.launch(context);
```
]]]

|Field|Description|
|---|---|
|**context (Context)**| It must be the context of the app and it’s mandatory to begin the activity.|