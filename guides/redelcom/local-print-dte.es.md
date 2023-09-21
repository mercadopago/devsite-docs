# Imprimir el Documento Tributario Electrónico (DTE)

En caso de querer imprimir el DTE generado por el Boleteador/Facturador Electrónico de una instancia de pago ya realizada en RDCPass, sigue los pasos a continuación.

1. Agrega el intent-filter (Activity) en AndroidManifest.xml de tu proyecto: `<action android:name="android.intent.action.ACTION_SENDTO" />`.

Sumado al intent-filter para crear la intención y la consulta de pago, tu proyecto debería verse así:


```android

<intent-filter> 
<action android:name="android.intent.action.SEND" /> 
<action android:name="android.intent.action.ANSWER" /> 
                <action android:name="android.intent.action.SENDTO" />

<category android:name="android.intent.category.DEFAULT" /> 
<data android:mimeType="text/*" /> 
</intent-filter>


```

2. Vuelve a implementar la función “RDCPass” utilizada para crear una intención y una consulta de pago, pero modificando `String intent` por el valor `Intent.ACTION_SENDTO`, que se corresponde con la intención de imprimir el DTE.

El valor `String total`, por su parte, puede ir vacío (`String total = ""`).


```android
public void shareRDCPass(String total, String intent) { 
 	try { 
 		Intent sharingIntent = new Intent(intent); 
sharingIntent.setClassName("redelcom.cl.rdcpass", "redelcom.cl.rdcpass.MainActivity"); sharingIntent.putExtra("packageName", getPackageName()); 
sharingIntent.putExtra("className", getClass().toString().split(" ")[1]);  
sharingIntent.putExtra(“payload”, “RESULTADO_PAGO_REALIZADO”); 
sharingIntent.putExtra(“dte”, dte); 
startActivity(sharingIntent); 
 } catch (Exception e) { 
 		e.printStackTrace(); 
 	} 
} 

```

| Campo  | Descripción |
|---|---|
| `sharingIntent.putExtra(“payload”, “RESULTADO_PAGO_REALIZADO”);` | Este parámetro puede ser obtenido como respuesta a la intención de pago. |
| `sharingIntent.putExtra(“dte”, dte);` | Este parámetro corresponde a la estructura (XML) de la boleta/factura electrónica.  Puedes ver un ejemplo completo de XML en el [anexo: ejemplo de XML para la impresión de DTE](/developers/es/docs/redelcom/additional-content/print-example). |


3. Por último, incorpora el siguiente bloque de código para generar la impresión del DTE en RDCPass.  

```android
if (Intent.ACTION_SENDTO.equals(action)) { 
 	// Define what to do after printing the DTE 
 	}
 

```

Esto, además, realizará un retorno limpio que devolverá el control del proceso de la app RDCPass a la aplicación del integrador.
