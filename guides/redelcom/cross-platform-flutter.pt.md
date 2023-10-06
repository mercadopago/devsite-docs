# Flutter Framework 

Para começar a operar localmente com a Redelcom usando um aplicativo Flutter, siga as etapas abaixo. 

## Instalar e configurar plugins 

Para estabelecer comunicação com o sistema RDCPass, você precisará instalar os plugins adicionando o seguinte bloco ao `pub.dev`:

```flutter

Package_info 0.4.3+4 => (https:// pub.dev/packages/package_info)

android_intent 0.3.7+7 => (https:// pub.dev/packages/android_intent)
 
```

Uma vez instalados, você precisará iniciar a configuração importando os pacotes em `main.dart`:


```flutter

import 'package:package_info/package_info.dart'; 
import 'package:android_intent/android_intent.dart';  

```

## Enviar e receber Intents de um aplicativo nativo Android 

Para processar pagamentos, primeiro você precisa implementar o método que permite enviar um intent para um aplicativo nativo Android:


```flutter

Future<void> _intentSend() async { 
 		PackageInfo packageInfo = await PackageInfo.fromPlatform();  setState(() { 
 			String packageName = packageInfo.packageName; 
 			final AndroidIntent intent = AndroidIntent( 
 			action: 'android.intent.action.SEND', 
 			package: 'redelcom.cl.rdcpass ', 
 			arguments: <String, dynamic>{ 
 				'packageName': packageName, 
 				'className': '$packageName.MainActivity', 
 				'monto': '200', //pasar la cantidad del envío 
 			}, 
 			componentName: 'redelcom.cl.rdcpass.MainActivity', 
 			); 
 			intent.launch(); 
 		}); 
 }
 
```

Para poder obter a resposta a esse intent, você precisa primeiro adicionar o seguinte bloco em `main.dart`:


```flutter

static const platform = const MethodChannel('app.channel.shared.data'); String data = "No hay datos"; 

@Override 
void initState() { 
	super.initState(); 
	getSharedIntent(); 
} 
 getSharedIntent() async { 
 		var sharedData = await platform.invokeMethod("getSharedText"); 
 		if (sharedData != null) { 
			setState(() { 
				data = sharedData; 
				// Do something… 
 			}); 
 		} 
 } 
 
```

Em seguida, adicione o seguinte bloco em `MainActivity.java`:


```flutter

private String sharedIntent; 
private static final String CHANNEL = "app.channel.shared.data"; 

@Override 
protected void onCreate(Bundle savedInstanceState) { 
 	super.onCreate(savedInstanceState); 
 	try { 
 			Intent intent = getIntent(); 
 			String action = intent.getAction(); 
 			if (action != null && Intent.ACTION_SEND.equals(action)) {  
					handleSend(intent); 
 			} 
 	} catch (Exception e) { 
 			e.printStackTrace(); 
 	} 
}
@Override 
 public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {  
		GeneratedPluginRegistrant.registerWith(flutterEngine); 
 		new MethodChannel(flutterEngine.getDartExecutor().getBinaryMessenger(), CHANNEL)  .setMethodCallHandler( 
 		(call, result) -> { 
			if (call.method.contentEquals("getSharedText")) { 
				result.success(sharedIntent); 
				sharedIntent = null; 
			} 
 		} 
 		); 
 } 
 void handleSend(Intent intent) { 
 		sharedIntent = intent.getStringExtra(Intent.EXTRA_TEXT); 
 } 


```

Por fim, adicione o intent-filter (Activity) ao arquivo `AndroidManifest.xml` do aplicativo compilado.


```flutter

<intent-filter> 
	<action android:name="android.intent.action.SEND" /> 
	<category android:name="android.intent.category.DEFAULT" /> 
	<data android:mimeType="text/*" /> 
</intent-filter>
 
```

É isso! Agora você pode começar a operar com a Redelcom a partir do seu aplicativo Flutter. 
