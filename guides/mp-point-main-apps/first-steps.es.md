# Primeros pasos

Asegúrate de tener la **Demo App** instalada en el dispositivo SmartPOS del [kit de desarrollo](https://drive.google.com/drive/folders/1Mglpa2c3FmYs4L9iskczagBMPGjHCMbY?usp=share_link). Esta app puede servir como referencia en la integración.

Para usar el [SDK](/developers/es/docs/sdks-library/landing), sigue estos pasos:

1. Agrega la biblioteca del kit de Ddsarrollo en el directorio **app/libs**.
2. Incluye la dependencia para la biblioteca en el archivo **.gradle** del módulo en el que se usará el SDK. Así:

```gradle
dependencies {
     ....
     implementation files("libs/nativesdk-0.1.0.aar")
     ...
}
```

3. En el archivo **AndroidManifest.xml**, define la actividad principal que se establecerá como _launcher_ de la app. Agrega los siguientes `intent-filter`:

```xml
<intent-filter>                
                <action android:name="android.intent.action.MAIN" />               
                <category android:name="android.intent.category.DEFAULT" />               
                <category android:name="android.intent.category.HOME" />
</intent-filter>
```

4. Crea la clase heredada de la clase [Application](https://developer.android.com/reference/android/app/Application) de Android e ingresa la configuración del SDK:

[[[
```kotlin
class MainApplication : Application() {
   override fun onCreate() {
       super.onCreate()
       val config = MPConfigBuilder(this, "123456789")
           .withBluetoothConfig()
           .withBluetoothUIConfig()
           .build()
       MPManager.initialize(this, config)
   }
}
```
```java
public class MainApplication extends Application {

 @Override
 public void onCreate() {
   super.onCreate();
   MPConfig config = new MPConfigBuilder(this, "123456789")
     .withBluetoothConfig()
     .withBluetoothUIConfig()
     .build();
   MPManager.INSTANCE.initialize(this, config);
 }
}
```
]]]

5. Empieza a usar el SDK para procesar pagos:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val uriSuccess = paymentFlow.buildCallbackUri(
   "mercadopago://launcher_native_app",
   "success",
   hashMapOf("attr" to "123"),
   "demo_app"
)

val uriError = paymentFlow.buildCallbackUri(
   "mercadopago://launcher_native_app",
   "error",
   hashMapOf("attr" to "456"),
   "demo_app"
)

paymentFlow.launchPaymentFlowActivity(
   amount,
   description,
   uriSuccess,
   uriError,
   context,
   lastPaymentMethodSelected
) { response ->
   response.doIfError { error ->
       error.message?.let { errorMessage -> setLayoutError(errorMessage) }
   }
}
```
```java
PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

HashMap<String, String> metadata = new HashMap<>();

Uri uriSuccess = paymentFlow.buildCallbackUri(
 "mercadopago://launcher_native_app",
 "success",
 metadata,
 "demo_app"
);

Uri uriError = paymentFlow.buildCallbackUri(
 "mercadopago://launcher_native_app",
 "error",
 metadata,
 "demo_app"
);

Function1<MPResponse, Unit> callback = (MPResponse response) -> {
 return;
};

paymentFlow.launchPaymentFlowActivity(
 "1",
 "My Payment Description",
 uriSuccess,
 uriError,
 getApplicationContext(),
 "credit",
 callback
);
```
]]]