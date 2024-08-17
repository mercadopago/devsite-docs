# Escanear código QR

Para iniciar a leitura de códigos QR da [Point Smart](/developers/pt/docs/mp-point/landing), use a função `initQRCodeScanner` da classe `CameraScanner`. Esse processo utiliza uma chamada de câmera mediante `startActivityForResult`, de modo que o método `onActivityResult` deve ser implementado na atividade para manipular a resposta de leitura. 

Confira o exemplo a seguir.

[[[
```kotlin
val cameraScanner = MPManager.cameraScanner
cameraScanner.initQRCodeScanner(this@YourActivity)
```
```java
final CameraScanner cameraScanner = MPManager.INSTANCE.getCameraScanner();
cameraScanner.initQRCodeScanner(this);
```
]]]

## Gerenciar resposta

Para gerenciar a resposta do escâner de código QR, use a função `handleQrResponse` da classe `CameraScanner` no método `onActivityResult`. Essa função devolve o objeto `[MPResponse]` que encapsula o estado, o erro (se houver) e os dados em caso de sucesso, que contêm um objeto `CameraScannerResponse` representando a resposta da leitura. 

Confira como isso ocorre a seguir.

[[[
```kotlin
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
   super.onActivityResult(requestCode, resultCode, data)

   val cameraScanner = MPManager.cameraScanner
   val response = cameraScanner.handleQrResponse(resultCode, data)

   response.doIfSuccess { result ->
       // Gerenciar resposta bem-sucedida
       val status = result.status
       val message = result.message
       // ... Hacer algo con la respuesta
   }.doIfError { error ->
       // Fazer algo com a resposta
       val errorMessage = error.message
       // ... Fazer algo com o erro
   }
}
```
```java
@Override
protected void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
 super.onActivityResult(requestCode, resultCode, data);

 final CameraScanner cameraScanner = MPManager.INSTANCE.getCameraScanner();
 final MPResponse<CameraScannerResponse> response = cameraScanner.handleQrResponse(resultCode, data);

 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Gerenciar resposta bem-sucedida
   final CameraScannerStatus status = response.getData().getStatus();
   final String message = response.getData().getMessage();
 } else {
   // Gerenciar o erro na resposta
   final String errorMessage = response.getError().getMessage();
 }
}
```
]]]

|Campo|Descrição|
|---|---|
|resultCode (Int)| Valor do `resultCode` em `onActivityResult`.|
|resultData (Intent)|Valor de data em `onActivityResult`.|
|MPResponse<CameraScannerResponse>| Objeto `[MPResponse]` que encapsula o estado, o erro (se houver) e os dados em caso de sucesso, que contêm um objeto `CameraScannerResponse`.|
|status (CameraScannerStatus)| Define o estado da resposta. Pode ser **Ok** (a leitura foi exitosa), **Error** (houve um erro ou a leitura foi cancelada) ou **Unknown** (ocorreu um erro indeterminado).|
|message (String)| Define a mensagem da resposta recebida pelo escâner. Se é ”Ok”, conterá o resultado da leitura do código.|