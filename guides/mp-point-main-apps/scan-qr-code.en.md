# Scan QR code

To begin reading QR codes of the [Point Smart](/developers/en/docs/mp-point/landing), use the `initQRCodeScanner` feature of the `CameraScanner` class. This process uses a camera request through `startActivityForResult`, and the method `onActivityResult` must be implemented in the activity to handle the reading response.

Check the example below:

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

## Manage response

To manage the response of the QR code scanner, use the `handleQrResponse` feature of the `CameraScanner` class from the `onActivityResult` method. That feature brings the `[MPResponse]` object which includes the status, the error (if any), and the details in case of success, which contain a `CameraScannerResponse` object representing the response of the reading.

Check how that takes place below:

[[[
```kotlin
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
   super.onActivityResult(requestCode, resultCode, data)

   val cameraScanner = MPManager.cameraScanner
   val response = cameraScanner.handleQrResponse(resultCode, data)

   response.doIfSuccess { result ->
       // Manage successful response
       val status = result.status
       val message = result.message
       // ... Do something with the response
   }.doIfError { error ->
       // Manage error in the response
       val errorMessage = error.message
       // ... Do something with the error
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
   // Manage successful response
   final CameraScannerStatus status = response.getData().getStatus();
   final String message = response.getData().getMessage();
 } else {
   // Manage the error in the response
   final String errorMessage = response.getError().getMessage();
 }
}
```
]]]

|Field|Description|
|---|---|
|**resultCode (Int)**| Value of the `resultCode` in `onActivityResult`.|
|**resultData (Intent)**| Date result in `onActivityResult`.|
|**MPResponse&lt;CameraScannerResponse&gt;**| Object [MPResponse] that includes the status, the error (if any), and the details in case of success, which contain an `CameraScannerResponse` object.|
|**status (CameraScannerStatus)**| Defines the status of the response. It can be **Ok** (it read it successfully), **Error** (something went wrong and it was cancelled) or **Unknown** (something went wrong).|
|**message (String)**| Defines the response message received by the scanner. If it’s  ”Ok”, it will have the result of the reading of the code|
