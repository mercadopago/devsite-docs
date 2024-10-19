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

3. A configuração correta de metadata no arquivo **AndroidManifest.xml** é crucial para garantir o funcionamento ideal e a integração completa do nosso SDK em sua aplicação. A metadata permite definir configurações essenciais e personalizadas que o SDK precisa para operar adequadamente, adaptando-se às necessidades específicas de cada aplicação e seu ambiente de uso. Para isso, configure as seguintes informações:

   - **CLIENT_ID**: para identificar as transações dos integradores, indique a [credencial](/developers/pt/docs/main-apps/additional-content/your-integrations/credentials) **Client ID** que foi atribuída à aplicação criada no [Painel do desenvolvedor](/developers/pt/docs/checkout-bricks/additional-content/your-integrations/dashboard).

   ```xml
   <application
       ...>

       <meta-data

           android:name="com.mercadolibre.android.sdk.CLIENT_ID"
           android:value="123456789L" />

       <!-- Outras configurações da aplicação -->
   </application>
   ```

   > WARNING
   >
   > Importante
   >
   > É crucial que o nome da metadata seja exatamente `com.test.android.sdk.CLIENT_ID`. Qualquer variação no nome pode resultar na falta de reconhecimento do campo pelo SDK.
   > <br><br>
   > Além disso, certifique-se de que o valor do **Client ID** termine com a letra "L" para indicar que é um número do tipo _Long_. Isso é necessário para que o SDK processe corretamente o valor.

   - **OAUTH_ENABLED**: utilize o campo `OAUTH_ENABLED` para ativar o protocolo de autorização [OAuth](/developers/pt/docs/main-apps/additional-content/security/oauth/introduction), que é necessário quando os dispositivos serão usados com contas diferentes da do desenvolvedor da aplicação. Este campo é opcional e, caso não seja adicionado na metadata, será considerado o valor padrão `false`.

   ```xml
   <application
       ...>

       <meta-data

           android:name="com.mercadolibre.android.sdk.OAUTH_ENABLED"
           android:value="true" />

       <!-- Outras configurações da aplicação -->
   </application>
   ```

   > WARNING
   >
   > Importante
   >
   > É crucial que o nome da metadata seja exatamente `com.mercadolibre.android.sdk.OAUTH_ENABLED`. Qualquer variação no nome pode resultar na falta de reconhecimento do campo pelo SDK.
   > <br><br>
   > Certifique-se de definir corretamente o valor do campo apenas com `true` ou `false`, de acordo com a necessidade de habilitar ou não o protocolo [OAuth](/developers/pt/docs/main-apps/additional-content/security/oauth/introduction). Se não for especificado, o valor padrão será `false`.

4. Ainda no arquivo **AndroidManifest.xml**, defina a atividade principal que será estabelecida como _launcher_ da aplicação. Adicione os seguintes `intent-filter`:

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