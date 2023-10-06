# Consultar un pago
Si quieres consultar una instancia de pago ya realizada en la aplicación RDCPass, sigue los pasos a continuación.

1. Agrega el intent-filter (Activity) en AndroidManifest.xml de tu proyecto: 

 `<action android:name="android.intent.action.ANSWER" />`.

 Sumado al intent-filter para crear la intención de pago, tu proyecto debería verse así:

```android

<intent-filter> 
	<action android:name="android.intent.action.SEND" /> 
	<action android:name="android.intent.action.ANSWER" /> 
	<category android:name="android.intent.category.DEFAULT" /> 
	<data android:mimeType="text/*" /> 
</intent-filter>

```

2. Vuelve a implementar la función “RDCPass” utilizada para crear una intención de pago, pero modificando `String intent` por el valor `Intent.ACTION_ANSWER`, que se corresponde con la intención de consulta de un pago. 

El valor `String total`, por su parte, puede ir vacío (`String total = ""`).

```android

public void shareRDCPass(String total, String intent) { 
	try { 
		Intent sharingIntent = new Intent(intent); 
		sharingIntent.setClassName("redelcom.cl.rdcpass", "redelcom.cl.rdcpass.MainActivity"); 
		sharingIntent.putExtra("packageName", getPackageName()); 
		sharingIntent.putExtra("className", getClass().toString().split(" ")[1]); 
		sharingIntent.putExtra("userTransactionId", "DEMO1234"); 
		startActivity(sharingIntent); 
	} catch (Exception e) { 
		e.printStackTrace(); 
	} 
}

```

> WARNING 
> 
> Importante 
>
> Para consultar un pago, necesitarás el `userTransactionId` asignado a ese pago al momento de crearlo. Recuerda reemplazar el valor “DEMO 1234” por el `userTransactionId`.
> <br>
> Si no tienes este dato, puedes usar este mismo método para conocer cuál fue el último identificador utilizado, pero reemplazando “DEMO1234” por el valor “-1” de la siguiente manera: `sharingIntent.putExtra("userTransactionId", "-1");`

3.  Para recibir la respuesta desde RDCPass, deberás también incorporar el siguiente bloque de código.


```android

try{ 
	Intent intent = getIntent(); 
	String action = intent.getAction(); 
	String payload = new JSONObject(intent.getStringExtra("payload")); 
	String userTransactionId= new JSONObject(intent.getStringExtra("userTransactionId")); 
	if (Intent.ACTION_ANSWER.equals(action)) { 
		// Define what to do with the received data “payload” 
	} 
} catch (Exception e) { 
	e.printStackTrace(); 
} 

```


> WARNING 
> 
> Importante 
>
>  La sentencia `String userTransactionId = new JSONObject(intent.getStringExtra("userTransactionId"));` sólo deberá incorporarse si utilizaste el método para conocer el último `userTransactionId`.

La estructura de la respuesta para la intención de consulta de pago será igual que aquella entregada durante la creación de una intención de pago. Puedes verla en el [anexo: ejemplos de respuesta](/developers/es/docs/redelcom/additional-content/response-examples).