# Framework Ionic

Para comenzar a operar localmente con Redelcom utilizando una App Ionic, sigue los pasos aquí debajo. 

## Instalar y configurar plugins

Para poder establecer la comunicación con el sistema RDCPass, deberás instalar los plugins como se muestra a continuación.


```ionic

AppVersion => (https://ionicframework.com/docs/native/app-version) 

WebIntent => (https://ionicframework.com/docs/native/web-intent)

```


Una vez instalados, deberás iniciar la configuración añadiéndolos al `app.modules.ts` como un servicio dentro del arreglo de providers del `@NgModule({…})` : 

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

Finaliza la configuración del entorno agregando la dependencia al constructor de la clase:


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

## Enviar y recibir intent desde una App nativa en Android

Para procesar pagos, deberás primero implementar el método que te permitirá enviar un intent a una App nativa en Android:

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

Para poder obtener la respuesta a ese intent, implementa el siguiente método:

```ionic

getIntent() { 
 		this.intent.getIntent().then(async (intentRDCPass: any) => { 
 				if (intentRDCPass.extras && intentRDCPass.action == this.intent.ACTION_SEND) {  
					this.data = JSON.parse(intentRDCPass.extras['android.intent.extra.TEXT']); 
					this.statusPay = this.data.ESTADO; 
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

Por último, agrega el intent-filter (Activity) al `AndroidManifest.xml` de la app compilada:


```ionic

<intent-filter> 
 	<action android:name="android.intent.action.SEND" /> 
 	<category android:name="android.intent.category.DEFAULT" /> 
 	<data android:mimeType="text/*" /> 
</intent-filter>

```

¡Y listo! Ya puedes comenzar a operar con Redelcom desde tu app Ionic.
