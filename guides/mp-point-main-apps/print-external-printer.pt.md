# Imprimir com impressora externa

Use a função print, da classe `BluetoothPrinter`, para fazer impressões com uma impressora externa. Este acesso é feito pelo objeto `MPManager`. Confira como fazê-lo.

[[[
```kotlin
val bluetoothPrinter = MPManager.bluetooth.printer

bluetoothPrinter.print(dataToPrint) { response ->
   response
       .doIfSuccess { printerResult ->
           // Gerenciar o resultado bem-sucedido da impressão
           when (printerResult) {
               BluetoothPrinterResult.SUCCESS -> {
                   // Impressão bem-sucedida
                   // ... Realizar ações adicionais, se necessário
               }

               BluetoothPrinterResult.NEED_SELECTION_DEVICE -> {
                   // Mais de um dispositivo emparelhado, é necessário especificar o endereço
                   // ... Realizar ações adicionais, se necessário
               }

               else -> { // Outros casos de resultado bem-sucedido }
               }
           }
       }.doIfError { error ->
           // Gerenciar o caso de erro, se necessário
       }
}
```
```java
final BluetoothPrinter bluetoothPrinter = MPManager.INSTANCE.getBluetooth().getPrinter();

final Function1<MPResponse<BluetoothPrinterResult>, Unit> callback =
   (final MPResponse<BluetoothPrinterResult> response) -> {
     if (response.getStatus() == ResponseStatus.SUCCESS) {
       // Realizar ações adicionais, se necessário
     } else {
       // Gerenciar o caso de erro, se necessário
     }
     return Unit.INSTANCE;
   };

bluetoothPrinter.print(dataToPrint, callback);
```
]]]

|Campo|Descrição|
|---|---|
|**dataToPrint (String)**| Sequência de texto que se deseja imprimir.|
|**callback ((MPResponse<BluetoothPrinterResult>) -> Unit)**| Função de devolução da chamada que proporciona o resultado do pedido de impressão. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados no caso de sucesso, que contêm um objeto `[BluetoothPrinterResult]`.|
|**CONNECTION_FAILED**| Indica que a conexão falhou.|
|**ERROR_UNDEFINED**| Indica que há um erro de causa indefinida. |
|**SUCCESS**| Indica que a impressão foi exitosa.|
|**NEED_SELECTION_DEVICE**| Indica que é preciso especificar o endereço dos dispositivos quando há mais de uma impressora emparelhada.|
|**ERROR_DATA_TO_PRINT_NULL**| Indica que os dados para imprimir são nulos.|
|**ERROR_PRINTER_NOT_FOUND**|  Indica que não foram encontradas impressoras emparelhadas.|

## Imprimir usando uma impressora externa com endereço específico

Para imprimir com uma impressora externa identificada por seu endereço, use a função print da classe `BluetoothPrinter`. O acesso deve ser feito pelo objeto `MPManager`, como exemplificado abaixo.

[[[
```kotlin
val bluetoothPrinter = MPManager.bluetooth.printer

bluetoothPrinter.print(dataToPrint, address) { response ->
   response
       .doIfSuccess { printerResult ->
           // Gerenciar o resultado bem-sucedido da impressão
       }.doIfError { error ->
           // Gerenciar o caso de erro, se necessário
       }
}
```
```java
final BluetoothPrinter bluetoothPrinter = MPManager.INSTANCE.getBluetooth().getPrinter();

final Function1<MPResponse<BluetoothPrinterResult>, Unit> callback =
   (final MPResponse<BluetoothPrinterResult> response) -> {
     if (response.getStatus() == ResponseStatus.SUCCESS) {
       // Realizar ações adicionais, se necessário
     } else {
       // Gerenciar o caso de erro, se necessário
     }
     return Unit.INSTANCE;
   };

bluetoothPrinter.print(dataToPrint, address, callback);
```
]]]

|Campo|Descrição|
|---|---|
|**dataToPrint (String)**| Sequência de texto que se deseja imprimir.|
|**address (String)**| Endereço da impressora que será usada para a impressão.|
|**callback ((MPResponse<BluetoothPrinterResult>) -> Unit)**| Função de devolução da chamada que proporciona o resultado do pedido de impressão. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados no caso de sucesso, que contêm um objeto `[BluetoothPrinterResult]`.|
|**CONNECTION_FAILED**| Indica que a conexão falhou.|
|**ERROR_UNDEFINED**| Indica que há um erro de causa indefinida. |
|**SUCCESS**| Indica que a impressão foi exitosa.|
|**NEED_SELECTION_DEVICE**| Indica que é preciso especificar o endereço dos dispositivos quando há mais de uma impressora emparelhada.|
|**ERROR_DATA_TO_PRINT_NULL**| Indica que os dados para imprimir são nulos.|
|**ERROR_PRINTER_NOT_FOUND**|  Indica que não foram encontradas impressoras emparelhadas.|
