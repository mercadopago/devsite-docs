# Imprimir imágenes

To print bitmap images with the [Point Smart](/developers/es/docs/mp-point/landing) printer, use the print feature of the `BitmapPrinter` class. The access is through the `MPManager` object, as in the example below:

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

val imageToPrint: Bitmap = bitmap // Get the bitmap image that will be printed

bitmapPrinter.print(imageToPrint) { response ->
   response.doIfSuccess { printResult ->
       // Gerenciar a impressão bem-sucedida
   }.doIfError { error ->
       // Gerenciar o erro na operação de impressão
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

final Bitmap imageToPrint = bitmap // Get the bitmap image that will be printed

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Gerenciar a impressão bem-sucedida
 } else {
   // Gerenciar o erro na operação de impressão
 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(imageToPrint, callback);
```
]]]

|Campo|Descripción|
|---|---|
|**dataToPrint (Bitmap)**| La imagen bitmap que se imprimirá.|
|**PaymentResponse**| Función de devolución del llamado que ofrece la operación de impresión. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito, que tiene un **String** representando el ID o estado de la impresión.|