# Framework Flutter

Para comenzar a operar localmente con Redelcom utilizando una App Flutter, sigue los pasos debajo.

## Instalar y configurar plugins

Para poder establecer la comunicación con el sistema RDCPass, deberás instalar los plugins agregando el siguiente bloque a `pub.dev`: 


```flutter

Package_info 0.4.3+4 => (https:// pub.dev/packages/package_info) 
android_intent 0.3.7+7 => (https:// pub.dev/packages/android_intent)
 
```

Una vez instalados, deberás iniciar la configuración importando los paquetes al `main.dart` :

```flutter

import 'package:package_info/package_info.dart'; 
import 'package:android_intent/android_intent.dart';  

```


## Enviar y recibir intent desde una App nativa en Android

Para procesar pagos, deberás primero implementar el método que te permitirá enviar un intent a una App nativa en Android:

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

Para poder obtener la respuesta a ese intent deberás, primero, agregar el siguiente bloque al `main.dart`:


```flutter

static const platform = const MethodChannel('app.channel.shared.data'); String data = "No hay datos"; 
@Override 
 void initState() { 
 super.initState(); 
 getSharedIntent(); 
 } 
 getSharedIntent() async { 
 var sharedData = await platform.invokeMethod("getSharedText");  if (sharedData != null) { 
 setState(() { 
 data = sharedData; 
// Do something… 
 }); 
 } 
 } 
 
```

Luego, agrega el siguiente bloque en `MainActivity.java`: 

```flutter

private String sharedIntent; 
private static final String CHANNEL = "app.channel.shared.data"; 
@Override 
 protected void onCreate(Bundle savedInstanceState) { 
 super.onCreate(savedInstanceState); 
 try { 
 Intent intent = getIntent(); 
 String action = intent.getAction(); 
 if (action != null && Intent.ACTION_SEND.equals(action)) {  handleSend(intent); 
 } 
 } catch (Exception e) { 
 e.printStackTrace(); 
 } 
}
@Override 
 public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {  GeneratedPluginRegistrant.registerWith(flutterEngine); 
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

Por último, agrega el intent-filter (Activity) al `AndroidManifest.xml` de la app compilada:


```flutter

startActivity(pay): void { 
 this.app.getPackageName().then(async (value) => {  
const options = { 
 			action: this.intent.ACTION_SEND, 
 			package: value.toString(), 
 extras: { 
 packageName: value.toString(), 
 				className: `${value.toString()}.MainActivity`,  monto: `${pay}` 
 }, 
 			component: { 
 package: 'redelcom.cl.rdcpass', 
 				class: 'redelcom.cl.rdcpass.MainActivity' 
 }, 
 }; 
 this.intent.startActivity(options) 
 .then((onSucces) => { 
 			this.getIntent(); 
 }, 
 (onError) => { 
 console.log('error', onError); 
 }); 
 } 
);  
}

```

¡Y listo! Ya puedes comenzar a operar con Redelcom desde tu app Flutter.
