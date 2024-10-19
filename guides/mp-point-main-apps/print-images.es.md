# Imprimir imágenes

Para imprimir imagens en bitmap con la impresora de [Point Smart](/developers/es/docs/mp-point/landing), usa la **función print** de la clase `BitmapPrinter`. El acceso se da a través del objeto `MPManager`, como en el ejemplo a continuación:

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
|**callback ((MPResponse&lt;String&gt;) -> Unit)**| Función de devolución del llamado que ofrece la operación de impresión. El `[MPResponse]` encapsula el estado, el error (si lo hay) y los datos en caso de éxito, que tiene un **String** representando el ID o estado de la impresión.|