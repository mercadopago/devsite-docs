# Ionic Framework 

To start operating locally with Redelcom using an Ionic App, follow the steps below. 

## Install and configure plugins 

To establish communication with the RDCPass system, you need to install the plugins as shown below.

```ionic

AppVersion => (https://ionicframework.com/docs/native/app-version) 

WebIntent => (https://ionicframework.com/docs/native/web-intent)
 
```

Once installed, you need to start the configuration by adding them to the `app.modules.ts` file as a service within the providers array of the `@NgModule({…})` :

```ionic

import { WebIntent } from '@ionic-native/web-intent/ngx'; 
import { AppVersion } from '@ionic-native/app-version/ngx'; 
… 
providers: [ 
 	WebIntent, 
 	AppVersion 
 ], 
… 
 
```

Finish the environment configuration by adding the dependency to the class constructor:

```ionic

import { Component } from '@angular/core'; 
import { WebIntent, Intent } from '@ionic-native/web-intent/ngx'; 
import { AppVersion } from '@ionic-native/app-version/ngx'; 
… 
constructor( 
 	private intent: WebIntent 
 	, private app: AppVersion 
 ) 
{…}
 
```

## Sending and Receiving Intents from a Native Android App

To process payments, you first need to implement the method that allows you to send an intent to a native Android app:

```ionic

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

To obtain the response to that intent, implement the following method:

```ionic

getIntent() { 
 		this.intent.getIntent().then(async (intentRDCPass: any) => { 
 				if (intentRDCPass.extras && intentRDCPass.action == this.intent.ACTION_SEND) {  
				this.data = JSON.parse(intentRDCPass.extras['android.intent.extra.TEXT']);  this.statusPay = this.data.ESTADO; 
				// ARMAR UN OBJETO CON LOS DATOS DE RESPUESTA QUE SE REQUIERAN.
  				let objWithData = { 
 						estado: this.data.ESTADO, 
 						total: this.data.TOTAL, 
 						propina: this.data.PROPINA, 
 						medio_pago: this.data.MEDIO_PAGO, 
 						codaut: this.data.CODAUT, 
 						fecha_hora: this.data['FECHA&HORA'], 
 						mensaje_visor: this.data.MENSAJE_VISOR, 
 				}; 
 				if (this.data.ESTADO == 'APROBADO') { 
 						// ACCIÓN PARA EL CASO APROBADO.... 
 				} else { 
 						// ACCIÓN PARA EL CASO RECHAZADO.... 
 				} 
 				} else { 
 						setTimeout(() => { 
 								this.getIntent(); 
 						}, 1000); 
 				} 
		});  
} 

 
```

Finally, add the intent-filter (Activity) to the `AndroidManifest.xml` file of the compiled app.

```ionic

<intent-filter> 
 	<action android:name="android.intent.action.SEND" /> 
 	<category android:name="android.intent.category.DEFAULT" /> 
 	<data android:mimeType="text/*" /> 
</intent-filter>
 
```

That's it! Now you can start operating with Redelcom from your Ionic app.
