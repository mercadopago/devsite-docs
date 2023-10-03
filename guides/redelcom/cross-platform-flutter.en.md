# Flutter Framework 

To start operating locally with Redelcom using a Flutter App, follow the steps below. 

## Install and configure plugins 

To establish communication with the RDCPass system, you will need to install the plugins by adding the following block to `pub.dev`:

```flutter

Package_info 0.4.3+4 => (https:// pub.dev/packages/package_info) 

android_intent 0.3.7+7 => (https:// pub.dev/packages/android_intent)
 
```

Once installed, you will need to start the configuration by importing the packages in `main.dart`:

```flutter

import 'package:package_info/package_info.dart'; 
import 'package:android_intent/android_intent.dart';  

```


## Sending and Receiving Intents from a native Android App

To process payments, you first need to implement the method that allows you to send an intent to a native Android app:


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

To be able to obtain the response to that intent, you need to first add the following block to `main.dart`:

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

Then, add the following block in `MainActivity.java`:

```flutter

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

Finally, add the intent-filter (Activity) to the `AndroidManifest.xml` file of the compiled app.

```flutter

<intent-filter> 
	<action android:name="android.intent.action.SEND" /> 
	<category android:name="android.intent.category.DEFAULT" /> 
	<data android:mimeType="text/*" /> 
</intent-filter>

```

That's it! Now you can start operating with Redelcom from your Flutter app.
