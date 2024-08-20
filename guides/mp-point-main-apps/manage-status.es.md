# Gestionar estado

Consulta cómo activar, desactivar y validar el estado actual del bluetooth usando la clase `BluetoothIgnitor`.

## Activar el bluetooth

Para activar el bluetooth en el lector [Smart](/developers/es/docs/mp-point/landing), usa la función turnOn de la clase `BluetoothIgnitor` en nuestro SDK. Puedes acceder a esta función a través del objeto MPManager, como en el ejemplo a continuación.

[[[
```kotlin
val bluetoothIgnitor = MPManager.bluetooth.ignitor

bluetoothIgnitor.turnOn { response ->
   response
       .doIfSuccess { result ->
           if (result) {
               // Bluetooth se encendió con éxito
               // Realizar acciones adicionales si es necesario
           } else {
               // No se pudo encender el Bluetooth
           }
       }.doIfError {
           // Manejar el caso de error si es necesario
       }
}
```
```java
final BluetoothIgnitor bluetoothIgnitor = MPManager.INSTANCE.getBluetooth().getIgnitor();

final Function1<MPResponse<Boolean>, Unit> callback = (final MPResponse<Boolean> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   if (response.getData()) {
     // Bluetooth se encendió con éxito
     // Realizar acciones adicionales si es necesario
   } else {
     // No se pudo encender el Bluetooth
   }
 } else {

   // Manejar el caso de error si es necesario
 }
 return Unit.INSTANCE;
};

bluetoothIgnitor.turnOn(callback);
```
]]]

|Campo|Descripción|
|---|---|
|**callback ((MPResponse&lt;Boolean&gt;) -> Unit)**| Función de devolución del llamado que ofrece el resultado de la operación de activación. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito. La respuesta tiene un valor **booleano**, en el que `true` indica que el bluetooth se activó y `false`, la incapacidad de hacerlo.|

## Desactivar el bluetooth

Para desactivar el bluetooth en el [Point Smart](/developers/es/docs/mp-point/landing), usa la función `turnOff` de la clase `BluetoothIgnitor`. El acceso también se hace a través del `MPManager`, como se muestra a continuación.

[[[
```kotlin
val bluetoothIgnitor = MPManager.bluetooth.ignitor

bluetoothIgnitor.turnOff { response ->
   response
       .doIfSuccess { result ->
           if (!result) {
               // Bluetooth se apagó con éxito
               // Realizar acciones adicionales si es necesario
           } else {
               // No se pudo apagar el Bluetooth
           }
       }
       .doIfError { error ->
           // Manejar el caso de error
       }
}
```
```java
final BluetoothIgnitor bluetoothIgnitor = MPManager.INSTANCE.getBluetooth().getIgnitor();

final Function1<MPResponse<Boolean>, Unit> callback = (final MPResponse<Boolean> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   if (!response.getData()) {
     // Bluetooth se apagó con éxito
     // Realizar acciones adicionales si es necesario
   } else {
     // No se pudo apagar el Bluetooth
   }
 } else {

   // Manejar el caso de error si es necesario
 }
 return Unit.INSTANCE;
};

bluetoothIgnitor.turnOff(callback);
```
]]]

|Campo|Descripción|
|---|---|
|**callback ((MPResponse&lt;Boolean&gt;) -> Unit)**| Función de devolución del llamado que ofrece el resultado de la operación de desactivado. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito. La respuesta tiene un valor **booleano**, en el que `false` indica que o bluetooth se desactivó y `true`, la incapacidad de hacerlo.|

## Validar el estado actual del bluetooth

La función `getCurrentState` de la clase `BluetoothIgnitor` se emplea para validar el estado de activación del bluetooth en el [Point Smart](/developers/es/docs/mp-point/landing). El acceso se hace en la instancia `BluetoothIgnitor` a través del `MPManager`, como en el ejemplo a continuación.

[[[
```kotlin
val bluetoothIgnitor = MPManager.bluetooth.ignitor

bluetoothIgnitor.getCurrentState { result ->
   result
       .doIfSuccess { state ->
           if (state) {
               // Bluetooth está encendido
               // Realizar acciones adicionales si es necesario
           } else {
               // Bluetooth está apagado
               // Realizar acciones adicionales si es necesario
           }
       }
       .doIfError { error ->
           // Manejar el caso de error si es necesario
       }
}
```
```java
final BluetoothIgnitor bluetoothIgnitor = MPManager.INSTANCE.getBluetooth().getIgnitor();

final Function1<MPResponse<Boolean>, Unit> callback = (final MPResponse<Boolean> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   if (!response.getData()) {
     // Bluetooth está encendido
     // Realizar acciones adicionales si es necesario
   } else {
     // Bluetooth está apagado
     // Realizar acciones adicionales si es necesario
   }
 } else {
   // Manejar el caso de error si es necesario
 }
 return Unit.INSTANCE;
};

bluetoothIgnitor.getCurrentState(callback);
```
]]]

|Campo|Descripción|
|---|---|
|**callback ((MPResponse&lt;Boolean&gt;) -> Unit)**| Función de devolución del lado que ofrece el resultado de la validación del estado atual del bluetooth. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito. La respuesta tiene un valor **booleano**, en el que `true` indica que el bluetooth está activado y `false`, su desactivación.|