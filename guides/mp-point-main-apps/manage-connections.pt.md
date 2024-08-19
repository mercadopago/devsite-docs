# Gerenciar conexões

Em nosso SDK, você pode buscar impressoras e outros dispositivos bluetooth, além de checar os que estão emparelhados com a maquininha. Aprenda a seguir como fazê-lo.

## Obter dispositivos emparelhados

A obtenção da lista dos dispositivos emparelhados com a [Point Smart](/developers/pt/docs/mp-point/landing) é feita usando a função `getPairedDevices`, da classe `BluetoothDiscoverDevices`. Confira abaixo como acessá-la por meio do objeto `MPManager`.

[[[
```kotlin
val bluetoothDiscoverDevices = MPManager.bluetooth.discover

bluetoothDiscoverDevices.getPairedDevices { result ->
   result
       .doIfSuccess { devices ->
           // Trabalhar com a lista de dispositivos emparelhados
       }
       .doIfError { error ->
           // Gerenciar o caso de erro, se necessário
       }
}
```
```java
final BluetoothDiscoverDevices bluetoothDiscoverDevices = MPManager.INSTANCE.getBluetooth().getDiscover();

final Function1<MPResponse<List<BluetoothDeviceModel>>, Unit> callback = (final MPResponse<List<BluetoothDeviceModel>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   final List<BluetoothDeviceModel> devices = response.getData();
   // Trabalhar com a lista de dispositivos emparelhados
 } else {
   // Gerenciar o caso de erro, se necessário
 }
 return Unit.INSTANCE;
};

bluetoothDiscoverDevices.getPairedDevices(callback);
```
]]]

|Campo|Descrição|
|---|---|
|**callback ((MPResponse<List<BluetoothDeviceModel>>) -> Unit)**| Função de devolução da chamada que proporciona os dispositivos emparelhados como resultado. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados no caso de sucesso, em uma lista de modelos `BluetoothDeviceModel`.|
|**id (String)**|  Identificador único do dispositivo bluetooth.|
|**boundState (Int)**| Estado de emparelhamento do dispositivo. Pode ter diferentes valores representando estados distintos.|
|**name (String)**| Nome do dispositivo proporcionado pelo sistema operacional.|
|**address (String)**| Endereço MAC do dispositivo bluetooth.|
|**isConnected (Boolean)**| Indica se o dispositivo está conectado. Em caso positivo, a resposta é `true`; se estiver desconectado, aparece como `false`.|

## Obter impressoras emparelhadas

Use a função `getPairedPrinterDevices` da classe `BluetoothDiscoverDevices` para consultar a lista de impressoras bluetooth emparelhadas com a [Point Smart](/developers/pt/docs/mp-point/landing). O acesso é feito através do objeto `MPManager`, como no exemplo abaixo.

[[[
```kotlin
val bluetoothDiscoverDevices = MPManager.bluetooth.discover

bluetoothDiscoverDevices.getPairedPrinterDevices { result ->
   result
       .doIfSuccess { printers ->
           // Trabalhar com a lista de dispositivos emparelhados
       }
       .doIfError { error ->
           // Gerenciar o caso de erro, se necessário
       }
}
```
```java
final BluetoothDiscoverDevices bluetoothDiscoverDevices = MPManager.INSTANCE.getBluetooth().getDiscover();

final Function1<MPResponse<List<BluetoothDeviceModel>>, Unit> callback = (final MPResponse<List<BluetoothDeviceModel>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   final List<BluetoothDeviceModel> printers = response.getData();
   // Trabalhar com a lista de dispositivos emparelhados
 } else {
   // Gerenciar o caso de erro, se necessário
 }
 return Unit.INSTANCE;
};

bluetoothDiscoverDevices.getPairedPrinterDevices(callback);
```
]]]

|Campo|Descrição|
|---|---|
|**callback ((MPResponse<List<BluetoothDeviceModel>>) -> Unit)**| Função de devolução da chamada que proporciona as impressoras emparelhadas como resultado. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados em caso de sucesso em uma lista de modelos `BluetoothDeviceModel`.|
|**id (String)**|  Identificador único do dispositivo bluetooth.|
|**boundState (Int)**| Estado de emparelhamento do dispositivo. Pode ter diferentes valores representando estados distintos.|
|**name (String)**| Nome do dispositivo proporcionado pelo sistema operacional.|
|**address (String)**| Endereço MAC do dispositivo bluetooth.|
|**isConnected (Boolean)**| Indica se o dispositivo está conectado. Em caso positivo, a resposta é `true`; se estiver desconectado, aparece como `false`.|

## Iniciar busca

A função `startDiscovery` da classe `BluetoothDiscoverDevices` inicia o descobrimento de dispositivos bluetooth. O acesso é feito através do objeto `MPManager`. Este método facilita a implementação dinâmica da lógica baseada em eventos na sua solução. Assim:

[[[
```kotlin
val bluetoothDiscover = MPManager.bluetooth.discover

bluetoothDiscover.startDiscovery { response ->
   response
       .doIfSuccess { discoveryState ->
           when (discoveryState.type) {
               BluetoothDiscoveryState.Type.STARTED -> {
                   // Gerenciar o início da descoberta
               }
               BluetoothDiscoveryState.Type.DEVICE_FOUND -> discoveryState.device?.let { device ->
                   // Gerenciar a descoberta de um novo dispositivo
               }
               BluetoothDiscoveryState.Type.DEVICE_CHANGE -> discoveryState.device?.let { device ->
                   // Gerenciar mudanças em um dispositivo descoberto
               }
               BluetoothDiscoveryState.Type.ENDED -> {
                   // Gerenciar o fim da descoberta
               }
           }
       }
       .doIfError { error ->
           // Gerenciar o caso de erro, se necessário
       }
}
```
```java
final BluetoothDiscoverDevices bluetoothDiscoverDevices = MPManager.INSTANCE.getBluetooth().getDiscover();

final Function1<MPResponse<BluetoothDiscoveryState>, Unit> callback = (final MPResponse<BluetoothDiscoveryState> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   switch (response.getData().getType()) {
     case STARTED:
       // Gerenciar o início da descoberta
       break;
     case DEVICE_FOUND:
       // Gerenciar a descoberta de um novo dispositivo
       final BluetoothDeviceModel foundDevice = response.getData().getDevice();
       break;
     case DEVICE_CHANGE:
       // Gerenciar mudanças em um dispositivo descoberto
       final BluetoothDeviceModel changedDevice = response.getData().getDevice();
       break;
     case ENDED:
       // Gerenciar o fim da descoberta

   }
 } else {
   // Gerenciar o caso de erro, se necessário
 }
 return Unit.INSTANCE;
};

bluetoothDiscoverDevices.startDiscovery(callback);
```
]]]

|Campo|Descrição|
|---|---|
|**callback ((MPResponse<BluetoothDiscoveryState>) -> Unit)**| Função de devolução da chamada que proporciona o resultado do processo de descobrimento. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados em caso de sucesso, contendo um objeto `BluetoothDiscoveryState` que representa o estado atual da descoberta, eventos como o início e fim do descobrimento e mudanças no dispositivo.|
|**id (String)**|  Identificador único do dispositivo bluetooth.|
|**boundState (Int)**| Estado de emparelhamento do dispositivo. Pode ter diferentes valores representando estados distintos.|
|**name (String)**| Nome do dispositivo proporcionado pelo sistema operacional.|
|**address (String)**| Endereço MAC do dispositivo bluetooth.|
|**isConnected (Boolean)**| Indica se o dispositivo está conectado. Em caso positivo, a resposta é `true`; se estiver desconectado, aparece como `false`.|