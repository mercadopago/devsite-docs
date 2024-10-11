# Acceder a la configuración

Usa el método `launch` de la clase `BluetoothUiSettings` para iniciar la actividad de configuración de bluetooth de Mercado Pago. Este componente ofrece diversas funcionalidades, cómo activar y desactivar, buscar dispositivos, emparejar y desemparejar, entre otros. Consulta cómo acceder.

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

|Campo|Descripción|
|---|---|
|**context (Context)**| Debe ser el contexto de la app y es obligatorio para iniciar la actividad.|