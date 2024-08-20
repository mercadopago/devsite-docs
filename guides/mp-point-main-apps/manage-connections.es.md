# Gestionar conexiones

En nuestro SDK, puedes buscar impresoras y otros dispositivos bluetooth, además de gestionar los que ya están emparejados al lector. Aprende cómo hacerlo.

## Obtener dispositivos emparejados

La obtención de la lista de dispositivos emparejados con el [Point Smart](/developers/es/docs/mp-point/landing) se hace usando la función `getPairedDevices`, de la clase `luetoothDiscoverDevices`. Consulta a continuación cómo acceder a ella a través del objeto `MPManager`.

[[[
```kotlin
val bluetoothDiscoverDevices = MPManager.bluetooth.discover

bluetoothDiscoverDevices.getPairedDevices { result ->
   result
       .doIfSuccess { devices ->
           // Trabajar con la lista de dispositivos emparejados
       }
       .doIfError { error ->
           // Manejar el caso de error si es necesario
       }
}
```
```java
final BluetoothDiscoverDevices bluetoothDiscoverDevices = MPManager.INSTANCE.getBluetooth().getDiscover();

final Function1<MPResponse<List<BluetoothDeviceModel>>, Unit> callback = (final MPResponse<List<BluetoothDeviceModel>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   final List<BluetoothDeviceModel> devices = response.getData();
   // Trabajar con la lista de dispositivos emparejados
 } else {
   // Manejar el caso de error si es necesario
 }
 return Unit.INSTANCE;
};

bluetoothDiscoverDevices.getPairedDevices(callback);
```
]]]

|Campo|Descripción|
|---|---|
|**callback ((MPResponse&lt;List&lt;BluetoothDeviceModel>>) -> Unit)**| Función de devolución del llamado que ofrece los dispositivos emparejados como resultado. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito, en una lista de modelos `BluetoothDeviceModel`.|
|**id (String)**| Identificador único del dispositivo bluetooth.|
|**boundState (Int)**| Estado de emparejamiento del dispositivo. Puede tener diferentes valores representando estados distintos.|
|**name (String)**| Nombre del dispositivo ofrecido por el sistema operacional.|
|**address (String)**| Dirección MAC del dispositivo bluetooth.|
|**isConnected (Boolean)**| Indica si el dispositivo está conectado. En caso de ser positivo, la respuesta es `true`. Si está desconectado, aparece como `false`.|

## Obtener impresoras emparejadas

Usa la función `getPairedPrinterDevices` de la clase `BluetoothDiscoverDevices` para consultar la lista de impresoras bluetooth emparejadas al [Point Smart](/developers/es/docs/mp-point/landing). El acceso se hace a través del objeto `MPManager`, como en el ejemplo a continuación.

[[[
```kotlin
val bluetoothDiscoverDevices = MPManager.bluetooth.discover

bluetoothDiscoverDevices.getPairedPrinterDevices { result ->
   result
       .doIfSuccess { printers ->
           // Trabajar con la lista de dispositivos emparejados
       }
       .doIfError { error ->
           // Manejar el caso de error si es necesario
       }
}
```
```java
final BluetoothDiscoverDevices bluetoothDiscoverDevices = MPManager.INSTANCE.getBluetooth().getDiscover();

final Function1<MPResponse<List<BluetoothDeviceModel>>, Unit> callback = (final MPResponse<List<BluetoothDeviceModel>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   final List<BluetoothDeviceModel> printers = response.getData();
   // Trabajar con la lista de dispositivos emparejados
 } else {
   // Manejar el caso de error si es necesario
 }
 return Unit.INSTANCE;
};

bluetoothDiscoverDevices.getPairedPrinterDevices(callback);
```
]]]

|Campo|Descripción|
|---|---|
|**callback ((MPResponse&lt;List&lt;BluetoothDeviceModel>>) -> Unit)**| Función de devolución del llamado que ofrece las impresonas emparejadas como resultado. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito en una lista de modelos `BluetoothDeviceModel`.|
|**id (String)**| Identificador único del dispositivo bluetooth.|
|**boundState (Int)**| Estado de emparejamiento del dispositivo. Puede tener diferentes valores representando estados distintos.|
|**name (String)**| Nombre del dispositivo ofrecido por el sistema operacional.|
|**address (String)**| Dirección MAC del dispositivo bluetooth.|`
|**isConnected (Boolean)**| Indica si el dispositivo está conectado. En caso de ser positivo, la respuesta es `true`. Si está desconectado, aparece como `false`.|

## Iniciar búsqueda

La función `startDiscovery` de la clase `BluetoothDiscoverDevices` inicia la búsqueda de dispositivos bluetooth. El acceso se hace a través del objeto `MPManager`. Este método facilita la implementación dinámica de la lógica basada en eventos en tu solución. Así:

[[[
```kotlin
val bluetoothDiscover = MPManager.bluetooth.discover

bluetoothDiscover.startDiscovery { response ->
   response
       .doIfSuccess { discoveryState ->
           when (discoveryState.type) {
               BluetoothDiscoveryState.Type.STARTED -> {
                   // Manejar el inicio del descubrimiento
               }
               BluetoothDiscoveryState.Type.DEVICE_FOUND -> discoveryState.device?.let { device ->
                   // Manejar el descubrimiento de un nuevo dispositivo
               }
               BluetoothDiscoveryState.Type.DEVICE_CHANGE -> discoveryState.device?.let { device ->
                   // Manejar cambios en un dispositivo descubierto
               }
               BluetoothDiscoveryState.Type.ENDED -> {
                   // Manejar el fin del descubrimiento
               }
           }
       }
       .doIfError { error ->
           // Manejar el caso de error si es necesario
       }
}
```
```java
final BluetoothDiscoverDevices bluetoothDiscoverDevices = MPManager.INSTANCE.getBluetooth().getDiscover();

final Function1<MPResponse<BluetoothDiscoveryState>, Unit> callback = (final MPResponse<BluetoothDiscoveryState> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   switch (response.getData().getType()) {
     case STARTED:
       // Manejar el inicio del descubrimiento
       break;
     case DEVICE_FOUND:
       // Manejar el descubrimiento de un nuevo dispositivo
       final BluetoothDeviceModel foundDevice = response.getData().getDevice();
       break;
     case DEVICE_CHANGE:
       // Manejar cambios en un dispositivo descubierto
       final BluetoothDeviceModel changedDevice = response.getData().getDevice();
       break;
     case ENDED:
       // Manejar el fin del descubrimiento

   }
 } else {
   // Manejar el caso de error si es necesario
 }
 return Unit.INSTANCE;
};

bluetoothDiscoverDevices.startDiscovery(callback);
```
]]]

|Campo|Descripción|
|---|---|
|**callback ((MPResponse&lt;BluetoothDiscoveryState>) -> Unit)**| Función de devolución del llamado que ofrece el resultado del proceso de búsqueda. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito, teniendo un objeto `BluetoothDiscoveryState` que representa el estado actual de la búsqueda, eventos como el inicio y el fin de la búsqueda y los cambios en el dispositivo.|
|**id (String)**| Identificador único del dispositivo bluetooth.|
|**boundState (Int)**| Estado de emparejamiento del dispositivo. Puede tener diferentes valores representando estados distintos.|
|**name (String)**| Nombre del dispositivo ofrecido por el sistema operacional.|
|**address (String)**| Dirección MAC del dispositivo bluetooth.|`
|**isConnected (Boolean)**| Indica si el dispositivo está conectado. En caso de ser positivo, la respuesta es `true`. Si está desconectado, aparece como `false`.|