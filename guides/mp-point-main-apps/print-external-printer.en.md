# Print with an external printer

Use the print feature, of the `BluetoothPrinter` class, to print with an external printer. Access is through the `MPManager` object. Check how to do it.

[[[
```kotlin
val bluetoothPrinter = MPManager.bluetooth.printer

bluetoothPrinter.print(dataToPrint) { response ->
   response
       .doIfSuccess { printerResult ->
           // Manage successful print case
           when (printerResult) {
               BluetoothPrinterResult.SUCCESS -> {
                   // Successful print
                   // ... Perform additional actions if necessary
               }

               BluetoothPrinterResult.NEED_SELECTION_DEVICE -> {
                   // More than one paired device, specific address is required
                   // ... Perform additional actions if necessary
               }

               else -> { // Other success cases }
               }
           }
       }.doIfError { error ->
           // Manage the error case if necessary
       }
}
```
```java
final BluetoothPrinter bluetoothPrinter = MPManager.INSTANCE.getBluetooth().getPrinter();

final Function1<MPResponse<BluetoothPrinterResult>, Unit> callback =
   (final MPResponse<BluetoothPrinterResult> response) -> {
     if (response.getStatus() == ResponseStatus.SUCCESS) {
       // Perform additional actions if necessary
     } else {
       //Manage the error case if necessary
     }
     return Unit.INSTANCE;
   };

bluetoothPrinter.print(dataToPrint, callback);
```
]]]

|Field|Description|
|---|---|
|**dataToPrint (String)**| Text sequence you want to print.|
|**callback ((MPResponse&lt;BluetoothPrinterResult&gt;) -> Unit)**| Request response feature that provides the result of the print request. The `[MPResponse]` includes the status, the error (if any), and the details in case of success, which contain a `[BluetoothPrinterResult]` object.|
|**CONNECTION_FAILED**| Indicates that the connection failed.|
|**ERROR_UNDEFINED**| Indicates that there is an error with an unknown cause. |
|**SUCCESS**| Indicates that the printing was successful.|
|**NEED_SELECTION_DEVICE**| Indicates that it’s necessary to specify the address of the devices when there’s more than one printer paired.|
|**ERROR_DATA_TO_PRINT_NULL**| Indicates that the details to print are null.|
|**ERROR_PRINTER_NOT_FOUND**| Indicates that no paired printers were found.|

## Print using an external printer with a specific address

To print with an external printer identified by its address, use the print feature of the  BluetoothPrinter class. Access must be through the MPManager object, as shown below.

[[[
```kotlin
val bluetoothPrinter = MPManager.bluetooth.printer

bluetoothPrinter.print(dataToPrint, address) { response ->
   response
       .doIfSuccess { printerResult ->
           // Manage successful printing result
       }.doIfError { error ->
           // Manage the error case if necessary
       }
}
```
```java
final BluetoothPrinter bluetoothPrinter = MPManager.INSTANCE.getBluetooth().getPrinter();

final Function1<MPResponse<BluetoothPrinterResult>, Unit> callback =
   (final MPResponse<BluetoothPrinterResult> response) -> {
     if (response.getStatus() == ResponseStatus.SUCCESS) {
       // Perform additional actions if necessary
     } else {
       // Manage the error case if necessary
     }
     return Unit.INSTANCE;
   };

bluetoothPrinter.print(dataToPrint, address, callback);
```
]]]

|Field|Description|
|---|---|
|**dataToPrint (String)**| Text sequence you want to print.|
|**address (String)**| Address of the printer that will be used to print.|
|**callback ((MPResponse&lt;BluetoothPrinterResult&gt;) -> Unit)**| Request response feature that provides the result of the print request. The `[MPResponse]` includes the status, the error (if any), and the details in case of success, which contain a `[BluetoothPrinterResult]` object.|
|**CONNECTION_FAILED**| Indicates that the connection failed.|
|**ERROR_UNDEFINED**| Indicates that there is an error with an unknown cause. |
|**SUCCESS**| Indicates that the printing was successful.|
|**NEED_SELECTION_DEVICE**| Indicates that it’s necessary to specify the address of the devices when there’s more than one printer paired.|
|**ERROR_DATA_TO_PRINT_NULL**| Indicates that the details to print are null.|
|**ERROR_PRINTER_NOT_FOUND**| Indicates that no paired printers were found.|