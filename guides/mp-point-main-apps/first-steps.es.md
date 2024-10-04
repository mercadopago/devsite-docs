# Primeros pasos

Asegúrate de tener la **Demo App** instalada en el dispositivo SmartPOS del [Kit de Desarrollo](https://drive.google.com/drive/folders/1Mglpa2c3FmYs4L9iskczagBMPGjHCMbY?usp=share_link). Esta app puede servir como referencia en la integración.

Para usar el [SDK](/developers/es/docs/sdks-library/landing), sigue estos pasos:

1. Agrega la biblioteca del Kit de Desarrollo en el directorio **app/libs**.
2. Incluye la dependencia para la biblioteca en el archivo **.gradle** del módulo en el que se usará el SDK. Así:

```gradle
dependencies {
     ....
     implementation files("libs/nativesdk-0.1.0.aar")
     ...
}
```

3. La configuración correcta de metadata en el archivo **AndroidManifest.xml** es crucial para garantizar el funcionamiento óptimo y la integración completa de nuestro SDK en tu aplicación. La metadata permite definir configuraciones esenciales y personalizadas que el SDK necesita para operar adecuadamente, adaptándose a las necesidades específicas de cada aplicación y su entorno de uso. Para ello, configure las siguientes información:

  - **CLIENT_ID**: para identificar las transacciones de los integradores, indica la [credencial](/developers/es/docs/main-apps/additional-content/your-integrations/credentials) **Client ID** que fue asignada a la aplicación creada en el [Panel del desarrollador](/developers/es/docs/checkout-bricks/additional-content/your-integrations/dashboard).

  ```xml
  <application
      ...>

      <meta-data

          android:name="com.mercadolibre.android.sdk.CLIENT_ID"
          android:value="123456789L" />

      <!-- Otras configuraciones de la aplicación -->
  </application>
  ```

  > WARNING
  >
  > Importante
  >
  > Es crucial que el nombre de la metadata sea exactamente `com.test.android.sdk.CLIENT_ID`. Cualquier variación en el nombre puede resultar en la falta de reconocimiento del campo por parte del SDK.
  > <br><br>
  > Además, asegúrate de que el valor del **Client ID** termine con la letra "L" para indicar que es un número del tipo _Long_. Esto es necesario para que el SDK procese correctamente el valor.

  - **OAUTH_ENABLED**: utiliza el campo `OAUTH_ENABLED` para activar el protocolo de autorización [OAuth](/developers/es/docs/main-apps/additional-content/security/oauth/introduction), que es necesario cuando los dispositivos se utilizarán con cuentas diferentes a la del desarrollador de la aplicación. Este campo es opcional y, si no se agrega en la metadata, se considerará el valor predeterminado `false`.

  ```xml
  <application
      ...>

      <meta-data

          android:name="com.mercadolibre.android.sdk.OAUTH_ENABLED"
          android:value="true" />

      <!-- Otras configuraciones de la aplicación -->

  </application>
  ```

  > WARNING
  >
  > Importante
  >
  > Es crucial que el nombre de la metadata sea exactamente `com.mercadolibre.android.sdk.OAUTH_ENABLED`. Cualquier variación en el nombre puede resultar en la falta de reconocimiento del campo por parte del SDK.
  > <br><br>
  > Asegúrate de definir correctamente el valor del campo solo con `true` o `false`, de acuerdo con la necesidad de habilitar o no el protocolo [OAuth](/developers/es/docs/main-apps/additional-content/security/oauth/introduction). Si no se especifica, el valor predeterminado será `false`.

4. Aún en el archivo **AndroidManifest.xml**, define la actividad principal que se establecerá como _launcher_ de la app. Agrega los siguientes `intent-filter`:

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
```javascript
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
```javascript
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