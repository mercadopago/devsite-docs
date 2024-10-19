# Escanear códigos de barras e QR

Abaixo você encontrará informações de como iniciar e gerenciar o escâner da [Point Smart](/developers/pt/docs/mp-point/landing) para a leitura de **códigos de barra e QR**.

## Código de barras

Para iniciar a leitura de códigos de barras da [Point Smart](/developers/pt/docs/mp-point/landing), use a função `initBarcodeScanner` da classe `CameraScanner`. 

Esse processo utiliza uma chamada de câmera mediante `startActivityForResult`, de modo que o método `onActivityResult` deve ser implementado na atividade para manipular a resposta de leitura. 

Confira o exemplo a seguir.

[[[
```kotlin
val cameraScanner = MPManager.cameraScanner
cameraScanner.initBarcodeScanner(this@YourActivity)
```
```java
final CameraScanner cameraScanner = MPManager.INSTANCE.getCameraScanner();
cameraScanner.initBarcodeScanner(this);
```
]]]

## Código QR

Para iniciar a leitura de códigos QR da [Point Smart](/developers/pt/docs/mp-point/landing), use a função `initQRCodeScanner` da classe `CameraScanner`. 

Esse processo utiliza uma chamada de câmera mediante `startActivityForResult`, de modo que o método `onActivityResult` deve ser implementado na atividade para manipular a resposta de leitura. 

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

## Processar resposta de escâner

Para gerenciar a resposta de uma atividade de escâner de **código QR** ou de **código de barras**, use a função `handleScannerResponse` da classe `CameraScanner` no método `onActivityResult`. 

Esta função processa o resultado do escâner da câmera, validando a resposta e invocando o _callback_ apropriado de acordo com o resultado. Recebe um objeto `MPResponse` com um `[CameraScannerResponse]`, representando a resposta da leitura.

Este método simplifica o processo de gerenciamento das respostas do escâner de QR ou código de barras no método `onActivityResult`, processando o resultado do escâner da câmera, validando a resposta e invocando o _callback_ apropriado de acordo com o resultado.

Confira como isso ocorre a seguir.

[[[
```kotlin
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
   super.onActivityResult(requestCode, resultCode, data)

   val cameraScanner = MPManager.cameraScanner

   cameraScanner.handleScannerResponse(this, resultCode, data) { response ->
       response.doIfSuccess { result ->
           // Gerenciar resposta bem-sucedida
           val status = result.status
           val message = result.message
           // ... Fazer algo com a resposta
       }.doIfError { error ->
           // Gerenciar o erro na resposta
           val errorMessage = error.message
           // ... Fazer algo com o erro
        }
    }
}
```
```java
@Override
protected void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
 super.onActivityResult(requestCode, resultCode, data);

 final CameraScanner cameraScanner = MPManager.INSTANCE.getCameraScanner();
 final Function1<MPResponse<CameraScannerResponse>, Unit> callback = (final MPResponse<CameraScannerResponse> response) -> {

   if (response.getStatus() == ResponseStatus.SUCCESS) {
     final CameraScannerResponse cameraScannerResponse = response.getData();
     // Gerenciar resposta bem-sucedida
     final String result = response.getData().getMessage();
     // ... Fazer algo com a resposta
   } else {
     // Gerenciar o erro na resposta
     final Exception errorMessage = response.getError();
     // ... Fazer algo com o erro
   }
   return Unit.INSTANCE;
 };

 cameraScanner.handleScannerResponse(this, resultCode, data, callback);
}
```
]]]

|Campo|Descrição|
|---|---|
|**resultCode (Int)**| Valor do `resultCode` em `onActivityResult`.|
|**resultData (Intent?)**|Valor de `data` em `onActivityResult`.|
|**MPResponse&lt;CameraScannerResponse&gt;**| Objeto `[MPResponse]` que encapsula o estado, o erro (se houver) e os dados em caso de sucesso, que contêm um objeto `CameraScannerResponse`. El callback a ser invocado con el resultado de la operación del escáner. |
|**status (CameraScannerStatus)**| Define o estado da resposta. Pode ser "Ok" (a leitura foi exitosa), **Error** (houve um erro ou a leitura foi cancelada) ou **Unknown** (ocorreu um erro indeterminado).|
|**message (String)**| Define a mensagem da resposta recebida pelo escâner. Se for "Ok", conterá o resultado da leitura do código.|