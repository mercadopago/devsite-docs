# Emparelhar e desemparelhar

Nesta seção, você entenderá como emparelhar e desemparelhar dispositivos com a [Point Smart](/developers/pt/docs/mp-point/landing) usando a classe `BluetoothDevicesPairing`.

## Emparelhar um dispositivo

Use a função `pairDevice` da classe `BluetoothDevicesPairing` para emparelhar um dispositivo com a [Point Smart](/developers/pt/docs/mp-point/landing) enviando apenas o endereço (`(address)`). O acesso é feito por meio do objeto `MPManager`, como mostrado abaixo.

[[[
```kotlin
val bluetoothPairing = MPManager.bluetooth.paring

bluetoothPairing.pairDevice(address) { response ->
   response.doIfSuccess { result ->
       // Manage pairing success
       val bondState = result.first
       val deviceModel = result.second
       // ... Realizar ações adicionais, se necessário 
   }.doIfError { error ->
       // Gerenciar o caso de erro, se necessário
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
       // Realizar ações adicionais, se necessário
     } else {
       // Gerenciar o caso de erro, se necessário
     }
     return Unit.INSTANCE;
   };

bluetoothPairing.pairDevice(address, callback);
```
]]]

## Desemparelhar um dispositivo

Para desemparelhar um dispositivo, use a função `unPairDevice` da classe `BluetoothDevicesPairing` acessando pelo objeto `MPManager`. Essa função usa como parâmetro o endereço (`(address)`) do aparelho selecionado, como mostrado a seguir.

[[[
```kotlin
val bluetoothPairing = MPManager.bluetooth.paring

bluetoothPairing.unPairDevice(address) { response ->
   response.doIfSuccess { result ->
       // Manage pairing success
       val bondState = result.first
       val deviceModel = result.second
       // ... Realizar ações adicionais, se necessário
   }.doIfError { error ->
       // Gerenciar o caso de erro, se necessário
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
       // Realizar ações adicionais, se necessário
     } else {
       // Gerenciar o caso de erro, se necessário
     }
     return Unit.INSTANCE;
   };

bluetoothPairing.unPairDevice(address, callback);
```
]]]

## Descrição dos campos

|Campo|Descrição|
|---|---|
|**address (String)**| Localização do dispositivo selecionado, obtida por `[BluetoothDeviceModel]`.|
|**callback ((MPResponse<Pair<BluetoothBondState, BluetoothDeviceModel>>) -> Unit)**| Função de devolução da chamada que proporciona o resultado do processo de emparelhamento. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados no caso de sucesso, que contêm um `(Pair)` composto por `[BluetoothBondState]` e `[BluetoothDeviceModel]`.|
|**NONE (BOND_NONE)**| Indica que o dispositivo não está emparelhado.|
|**BONDING (BOND_BONDING)**| Indica que o dispositivo está em processo de emparelhamento |
|**BONDED (BOND_BONDED)**| Indica que o dispositivo está emparelhado.|
|**id (String)**| Identificador do dispositivo.|
|**boundState (Int)**| Estado de emparejação do dispositivo. Pode ser `true` ou `false`.|
|**name (String)**| Nome do dispositivo proporcionado pelo sistema operacional.|
|**id (String)**| Endereço MAC do dispositivo.|
|**isConnected (Boolean)**| Indica se o dispositivo está conectado.|