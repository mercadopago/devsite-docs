# Escanear código QR

Para iniciar la lectura de códigos QR del [Point Smart](/developers/es/docs/mp-point/landing), usa la función `initQRCodeScanner` de la clase `CameraScanner`. Este proceso usa un llamado de cámara a través de `startActivityForResult`, de modo que el método `onActivityResult` se debe implementar en la actividad para manipular la respuesta de lectura.

Consulta el ejemplo a continuación.

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

## Gestionar la respuesta

Para gestionar la respuesta del escaner de código QR, usa la función `handleQrResponse` de la clase `CameraScanner` en el método `onActivityResult`. Esta función devuelve el objeto `[MPResponse]` que encapsula el estado, el error (si lo hay) y los datos en caso de éxito, que tiene el objeto `CameraScannerResponse` representando la respuesta de lectura. 

Consulta cómo continuar.

[[[
```kotlin
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
   super.onActivityResult(requestCode, resultCode, data)

   val cameraScanner = MPManager.cameraScanner
   val response = cameraScanner.handleQrResponse(resultCode, data)

   response.doIfSuccess { result ->
       // Manejar la respuesta exitosa
       val status = result.status
       val message = result.message
       // ... Hacer algo con la respuesta
   }.doIfError { error ->
       // Manejar el error en la respuesta
       val errorMessage = error.message
       // ... Hacer algo con el error
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
   // Manejar la respuesta exitosa
   final CameraScannerStatus status = response.getData().getStatus();
   final String message = response.getData().getMessage();
 } else {
   // Manejar el error en la respuesta
   final String errorMessage = response.getError().getMessage();
 }
}
```
]]]

|Campo|Descripción|
|---|---|
|**resultCode (Int)**| Valor del `resultCode` en `onActivityResult`|
|**resultData (Intent)**| Valor de la fecha en `onActivityResult`.|
|**MPResponse&lt;CameraScannerResponse&gt;**| Objeto `[MPResponse]` que encapsula el estado, el error (si lo hay) y los datos en caso de éxito, que tiene un objeto `CameraScannerResponse`.|
|**status (CameraScannerStatus)**| Define el estado de la respuesta. Puede ser **Ok** (la lectura fue exitosa), **Error** (hubo un error o la lectura se canceló) o **Unknown** (hubo algún error indeterminado).|
|**message (String)**| Define el mensaje de la respuesta recibida por escaner. Si es ”Ok”, tendrá el resultado de la lectura del código.|