# Conectar y desconectar

En esta sección, comprenderás cómo emparejar y desemparejar dispositivos con el [Point Smart](/developers/es/docs/mp-point/landing) usando la clase `BluetoothDevicesPairing`.

## Emparejar un dispositivo

Usa la función `pairDevice` de la clase `BluetoothDevicesPairing` para emparejar un dispositivo con el [Point Smart](/developers/es/docs/mp-point/landing) enviando solo la dirección `(address)`. El acceso se hace a través del objeto `MPManager`, como se muestra a continuación.

[[[
```kotlin
val bluetoothPairing = MPManager.bluetooth.paring

bluetoothPairing.pairDevice(address) { response ->
   response.doIfSuccess { result ->
       // Manejar el éxito del emparejamiento
       val bondState = result.first
       val deviceModel = result.second
       // ... Realizar acciones adicionales si es necesario
   }.doIfError { error ->
       // Manejar el caso de error si es necesario
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
       // Realizar acciones adicionales si es necesario
     } else {
       // Manejar el caso de error si es necesario
     }
     return Unit.INSTANCE;
   };

bluetoothPairing.pairDevice(address, callback);
```
]]]

## Desemparejar un dispositivo

Para desemparejar un dispositivo, usa la función `unPairDevice` de la clase `BluetoothDevicesPairing` accediendo a través del objeto `MPManager`. Esta función usa como parámetro la dirección `(address)` del dispositivo seleccionado, como se muestra a continuación.

[[[
```kotlin
val bluetoothPairing = MPManager.bluetooth.paring

bluetoothPairing.unPairDevice(address) { response ->
   response.doIfSuccess { result ->
       // Manejar el éxito del emparejamiento
       val bondState = result.first
       val deviceModel = result.second
       // ... Realizar acciones adicionales si es necesario
   }.doIfError { error ->
       // Manejar el caso de error si es necesario
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
       // Realizar acciones adicionales si es necesario
     } else {
       // Manejar el caso de error si es necesario
     }
     return Unit.INSTANCE;
   };

bluetoothPairing.unPairDevice(address, callback);
```
]]]

## Descripción de campos

|Campo|Descripción|
|---|---|
|**address (String)**| Ubicación del dispositivo seleccionado, obtenida a través de `[BluetoothDeviceModel]`.|
|**callback ((MPResponse&lt;Pair&lt;BluetoothBondState, BluetoothDeviceModel&gt;&gt;) -> Unit)**| Función de devolución del llamado que ofrece el resultado del proceso de emparejamiento. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito, que tiene un `(Pair)` compuesto por `[BluetoothBondState]` y `[BluetoothDeviceModel]`.|
|**NONE (BOND_NONE)**| Indica que el dispositivo no está emparejado.|
|**BONDING (BOND_BONDING)**| Indica que el dispositivo está en proceso de emparejamiento.|
|**BONDED (BOND_BONDED)**| Indica que o dispositivo está emparejado.|
|**id (String)**| Identificador del dispositivo.|
|**boundState (Int)**| Estado de emparejamiento del dispositivo. Puede ser `true` o `false`.|
|**name (String)**| Nombre del dispositivo ofrecido por el sistema operacional.|
|**id (String)**| Dirección MAC del dispositivo.|
|**isConnected (Boolean)**| Indica si el dispositivo está conectado.|