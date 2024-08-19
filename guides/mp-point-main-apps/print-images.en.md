# Imprimir imágenes

Para imprimir imagens en bitmap con la impresora de [Point Smart](/developers/pt/docs/mp-point/landing), usa la **función print** de la clase `BitmapPrinter`. El acceso se da a través del objeto `MPManager`, como en el ejemplo a continuación:

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

val imageToPrint: Bitmap = bitmap // Obtener la imagen bitmap que se imprimirá

bitmapPrinter.print(imageToPrint) { response ->
   response.doIfSuccess { printResult ->
       // Gerenciar a impressão bem-sucedida
   }.doIfError { error ->
       // anage error in the printing operation
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

final Bitmap imageToPrint = bitmap // Obtener la imagen bitmap que se imprimirá

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Gerenciar a impressão bem-sucedida
 } else {
   // anage error in the printing operation
 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(imageToPrint, callback);
```
]]]

|Field|Description|
|---|---|
|**dataToPrint (Bitmap)**| The bitmap image that will be printed.|
|**PaymentResponse**| Request response feature that provides the result of the printing operation. The `[MPResponse]` includes the status, the error (if any), and the details in case of success, which contain a String representing the ID or status of the printing.|