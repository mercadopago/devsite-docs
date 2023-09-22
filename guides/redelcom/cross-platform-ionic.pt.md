# Ionic Framework 

Para começar a operar localmente com a Redelcom usando um aplicativo Ionic, siga as etapas abaixo. 

## Instalar e configurar plugins 

Para estabelecer comunicação com o sistema RDCPass, você precisa instalar os plugins conforme mostrado abaixo.

```ionic

AppVersion => (https://ionicframework.com/docs/native/app-version) 

WebIntent => (https://ionicframework.com/docs/native/web-intent)

```


Uma vez instalados, você precisa iniciar a configuração adicionando-os ao arquivo `app.modules.ts` como um serviço dentro do array de provedores do `@NgModule({…}`:

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

Finalize a configuração do ambiente adicionando a dependência ao construtor da classe:

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

## Enviar e receber intents de um aplicativo nativo Android 

Para processar pagamentos, primeiro você precisa implementar o método que permite enviar um intent para um aplicativo nativo Android:

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

Para obter a resposta a esse intent, implemente o seguinte método:

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

Por fim, adicione o intent-filter (Activity) ao arquivo `AndroidManifest.xml` do aplicativo compilado.

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

É isso! Agora você pode começar a operar com a Redelcom a partir do seu aplicativo Ionic. 
