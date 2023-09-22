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

Finally, add the intent-filter (Activity) to the `AndroidManifest.xml` file of the compiled app.

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

That's it! Now you can start operating with Redelcom from your Ionic app.
