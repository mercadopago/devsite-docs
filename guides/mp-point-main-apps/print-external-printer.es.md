# Imprimir con impresora externa

Usa la función print, de la clase `BluetoothPrinter`, para hacer impresiones con la impresora externa. Este acceso se hace a través del objeto `MPManager`. Consulta cómo hacerlo.

[[[
```kotlin
val bluetoothPrinter = MPManager.bluetooth.printer

bluetoothPrinter.print(dataToPrint) { response ->
   response
       .doIfSuccess { printerResult ->
           // Manejar el resultado exitoso de la impresión
           when (printerResult) {
               BluetoothPrinterResult.SUCCESS -> {
                   // Impresión exitosa
                   // ... Realizar acciones adicionales si es necesario
               }

               BluetoothPrinterResult.NEED_SELECTION_DEVICE -> {
                   // Más de un dispositivo emparejado, se requiere especificar la dirección
                   // ... Realizar acciones adicionales si es necesario
               }

               else -> { // Otros casos de resultado exitoso }
               }
           }
       }.doIfError { error ->
           // Manejar el caso de error si es necesario
       }
}
```
```java
final BluetoothPrinter bluetoothPrinter = MPManager.INSTANCE.getBluetooth().getPrinter();

final Function1<MPResponse<BluetoothPrinterResult>, Unit> callback =
   (final MPResponse<BluetoothPrinterResult> response) -> {
     if (response.getStatus() == ResponseStatus.SUCCESS) {
       // Realizar acciones adicionales si es necesario
     } else {
       // Manejar el caso de error si es necesario
     }
     return Unit.INSTANCE;
   };

bluetoothPrinter.print(dataToPrint, callback);
```
]]]

|Campo|Descripción|
|---|---|
|**dataToPrint (String)**| Secuencia de texto que se quiere imprimir.|
|**callback ((MPResponse&lt;BluetoothPrinterResult&gt;) -> Unit)**| Función de devolución del llamado que ofrece el resultado del pedido de impresión. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito, que tiene un objeto `[BluetoothPrinterResult]`.|
|**CONNECTION_FAILED**| Indica que la conexión falló.|
|**ERROR_UNDEFINED**| Indica que hay un error de causa indefinida. |
|**SUCCESS**| Indica que la impresión fue exitosa.|
|**NEED_SELECTION_DEVICE**| Indica que hace falta especificar la dirección de los dispositivos cuando hay más de una impresora emparejada.|
|**ERROR_DATA_TO_PRINT_NULL**| Indica que los datos para imprimir son nulos.|
|**ERROR_PRINTER_NOT_FOUND**| Indica que no se encontraron impresoras emparejadas.|

## Imprimir usando una impressora externa con dirección específica

Para imprimir con una impresora externa identificada por tu dirección, usa la función print de la clase `BluetoothPrinter`. El acceso se debe hacer a través del objeto `MPManager`, como se ejemplifica a continuación.

[[[
```kotlin
val bluetoothPrinter = MPManager.bluetooth.printer

bluetoothPrinter.print(dataToPrint, address) { response ->
   response
       .doIfSuccess { printerResult ->
           // Manejar el resultado exitoso de la impresión
       }.doIfError { error ->
           // Manejar el caso de error si es necesario
       }
}
```
```java
final BluetoothPrinter bluetoothPrinter = MPManager.INSTANCE.getBluetooth().getPrinter();

final Function1<MPResponse<BluetoothPrinterResult>, Unit> callback =
   (final MPResponse<BluetoothPrinterResult> response) -> {
     if (response.getStatus() == ResponseStatus.SUCCESS) {
       // Realizar acciones adicionales si es necesario
     } else {
       // Manejar el caso de error si es necesario
     }
     return Unit.INSTANCE;
   };

bluetoothPrinter.print(dataToPrint, address, callback);
```
]]]

|Campo|Descripción|
|---|---|
|**dataToPrint (String)**| Secuencia de texto que se quiere imprimir|
|**address (String)**| Dirección de la impresora que se usará para la impresión.|
|**callback ((MPResponse&lt;BluetoothPrinterResult&gt;) -> Unit)**| Función de devolución del llamado que ofrece el resultado del pedido de impresión. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito, que tiene un objeto `[BluetoothPrinterResult]`.|
|**CONNECTION_FAILED**| Indica que la conexión falló.|
|**ERROR_UNDEFINED**| Indica que hay un error de causa indefinida. |
|**SUCCESS**| Indica que la impresión fue exitosa|
|**NEED_SELECTION_DEVICE**| Indica que hace falta especificar la dirección de los dispositivos cuando hay más de una impresora emparejada|
|**ERROR_DATA_TO_PRINT_NULL**| Indica que los datos para imprimir son nulos.|
|**ERROR_PRINTER_NOT_FOUND**| Indica que no se encontraron impresoras emparejadas.|