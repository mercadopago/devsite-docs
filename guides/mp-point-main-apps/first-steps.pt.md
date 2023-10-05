# Primeiros passos

Assegure-se de ter o **Demo App** instalado no dispositivo SmartPOS do [Kit de Desenvolvimento](https://drive.google.com/drive/folders/1Mglpa2c3FmYs4L9iskczagBMPGjHCMbY?usp=share_link). Este aplicativo pode servir como referência na integração.

Para usar o [SDK](/developers/pt/docs/sdks-library/landing), siga estes passos:

1. Adicione a biblioteca do Kit de Desenvolvimento no diretório **app/libs**.
2. Inclua a dependência para a biblioteca no arquivo **.gradle** do módulo no qual o SDK vai ser usado. Assim:

```gradle
dependencies {
     ....
     implementation files("libs/nativesdk-0.1.0.aar")
     ...
}
```

3. No arquivo **AndroidManifest.xml**, defina a atividade principal que será estabelecida como _launcher_ da aplicação. Adicione os seguintes `intent-filter`:

```xml
<intent-filter>                
                <action android:name="android.intent.action.MAIN" />               
                <category android:name="android.intent.category.DEFAULT" />               
                <category android:name="android.intent.category.HOME" />
</intent-filter>
```

4. Crie a classe herdada da classe [Application](https://developer.android.com/reference/android/app/Application) de Android e insira a configuração do SDK:

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

5. Comece a usar o SDK para processar pagamentos:

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