# Gerenciar status

Confira como ativar, desativar e validar o estado atual do bluetooth utilizando a classe `BluetoothIgnitor`.

## Ativar o bluetooth

Para ativar o bluetooth na maquininha [Smart](/developers/pt/docs/mp-point/landing), use a função `turnOn` da classe `BluetoothIgnitor` em nosso SDK. Você pode acessar essa função através do objeto `MPManager`, como no exemplo abaixo.

[[[
```kotlin
val bluetoothIgnitor = MPManager.bluetooth.ignitor

bluetoothIgnitor.turnOn { response ->
   response
       .doIfSuccess { result ->
           if (result) {
               // O Bluetooth foi ativado com sucesso
               // Realizar ações adicionais, se necessário
           } else {
               // Não foi possível ativar o Bluetooth
           }
       }.doIfError {
           // Gerenciar o caso de erro, se necessário
       }
}
```
```java
final BluetoothIgnitor bluetoothIgnitor = MPManager.INSTANCE.getBluetooth().getIgnitor();

final Function1<MPResponse<Boolean>, Unit> callback = (final MPResponse<Boolean> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   if (response.getData()) {
     // O Bluetooth foi ativado com sucesso
     // Realizar ações adicionais, se necessário
   } else {
     // Não foi possível ativar o Bluetooth
   }
 } else {

   // Gerenciar o caso de erro, se necessário
 }
 return Unit.INSTANCE;
};

bluetoothIgnitor.turnOn(callback);
```
]]]

|Campo|Descrição|
|---|---|
|**callback ((MPResponse<Boolean>) -> Unit)**| Função de devolução da chamada que proporciona o resultado da operação de ativação. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados em caso de sucesso. A resposta contém um valor **booleano**, em que `true` indica que o bluetooth foi ativado e `false`, a incapacidade de fazê-lo.|

## Desativar o bluetooth

Para desativar o bluetooth na [Point Smart](/developers/pt/docs/mp-point/landing), use a função `turnOff` da classe `BluetoothIgnitor`. O acesso também é feito através do `MPManager`, como mostrado a seguir.

[[[
```kotlin
val bluetoothIgnitor = MPManager.bluetooth.ignitor

bluetoothIgnitor.turnOff { response ->
   response
       .doIfSuccess { result ->
           if (!result) {
               // O Bluetooth foi desligado com sucesso
               // Realizar ações adicionais, se necessário
           } else {
               // Não foi possível desligar o Bluetooth
           }
       }
       .doIfError { error ->
           // Gerenciar o caso de erro, se necessário
       }
}
```
```java
final BluetoothIgnitor bluetoothIgnitor = MPManager.INSTANCE.getBluetooth().getIgnitor();

final Function1<MPResponse<Boolean>, Unit> callback = (final MPResponse<Boolean> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   if (!response.getData()) {
     // O Bluetooth foi desligado com sucesso
     // Realizar ações adicionais, se necessário
   } else {
     // Não foi possível desligar o Bluetooth
   }
 } else {

   // Gerenciar o caso de erro, se necessário
 }
 return Unit.INSTANCE;
};

bluetoothIgnitor.turnOff(callback);
```
]]]

|Campo|Descrição|
|---|---|
|**callback ((MPResponse<Boolean>) -> Unit)**| Função de devolução da chamada que proporciona o resultado da operação de desativação. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados em caso de sucesso. A resposta contém um valor **booleano**, em que `false` indica que o bluetooth foi desativado e `true`, a incapacidade de fazê-lo.|

## Validar o estado atual do bluetooth

A função `getCurrentState` da classe `BluetoothIgnitor` é empregada para validar o estado de ativação do bluetooth na [Point Smart](/developers/pt/docs/mp-point/landing). O acesso é feito pela instância `BluetoothIgnitor` através do `MPManager`, como no exemplo abaixo.

[[[
```kotlin
val bluetoothIgnitor = MPManager.bluetooth.ignitor

bluetoothIgnitor.getCurrentState { result ->
   result
       .doIfSuccess { state ->
           if (state) {
               // O Bluetooth está ligado
               // Realizar ações adicionais, se necessário
           } else {
               // O Bluetooth está desligado
               // Realizar acciones adicionales si es necesario
           }
       }
       .doIfError { error ->
           // Gerenciar o caso de erro, se necessário
       }
}
```
```java
final BluetoothIgnitor bluetoothIgnitor = MPManager.INSTANCE.getBluetooth().getIgnitor();

final Function1<MPResponse<Boolean>, Unit> callback = (final MPResponse<Boolean> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   if (!response.getData()) {
     // O Bluetooth está ligado
     // Realizar ações adicionais, se necessário
   } else {
     // O Bluetooth está desligado
     // Realizar ações adicionais, se necessário
   }
 } else {
   // Gerenciar o caso de erro, se necessário
 }
 return Unit.INSTANCE;
};

bluetoothIgnitor.getCurrentState(callback);
```
]]]

|Campo|Descrição|
|---|---|
|**callback ((MPResponse<Boolean>) -> Unit)**| Função de devolução da chamada que proporciona o resultado da validação do estado atual do bluetooth. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados em caso de sucesso. A resposta contém um valor **booleano**, em que `true` indica que o bluetooth está ativado e `false`, sua desativação.|