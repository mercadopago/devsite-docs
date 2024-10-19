# Imprimir imagens

Para imprimir imagens em bitmap com a impressora da [Point Smart](/developers/pt/docs/mp-point/landing), use a **função print** da classe `BitmapPrinter`. O acesso ocorre por meio do objeto `MPManager`, como no exemplo a seguir:

[[[
```kotlin
val bitmapPrinter = MPManager.bitmapPrinter

val imageToPrint: Bitmap = bitmap // Obter a imagem bitmap que será impressa

bitmapPrinter.print(imageToPrint) { response ->
   response.doIfSuccess { printResult ->
       // Manejar la impresión exitosa
   }.doIfError { error ->
       // Manejar el error en la operación de impresión
```
```java
final BitmapPrinter bitmapPrinter = MPManager.INSTANCE.getBitmapPrinter();

final Bitmap imageToPrint = bitmap // Obtener la imagen Bitmap que se imprimirá

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manejar la impresión exitosa
 } else {
   // Manejar el error en la operación de impresión
 }
 return Unit.INSTANCE;
};

bitmapPrinter.print(imageToPrint, callback);
```
]]]

|Campo|Descrição|
|---|---|
|**dataToPrint (Bitmap)**| A imagem bitmap que será impressa.|
|**callback ((MPResponse&lt;String&gt;) -> Unit)**| Função de devolução da chamada que proporciona o resultado da operação de impressão. O `[MPResponse]` encapsula o estado, o erro (se houver) e os dados em caso de sucesso, que contêm um String representando o ID ou estado da impressão.|