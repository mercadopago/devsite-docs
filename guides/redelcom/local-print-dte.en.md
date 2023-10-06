# Printing the Documento Tributario Electrónico (DTE)

If you want to print the DTE of a payment instance already made in RDCPass, follow the steps below.

1. Add the intent-filter (Activity) in your project's AndroidManifest.xml file: 

 `<action android:name="android.intent.action.ACTION_SENDTO" />`

 In addition to the intent-filter for creating the payment intent and querying a payment, your project should look like this:

```android

<intent-filter> 
	<action android:name="android.intent.action.SEND" /> 
	<action android:name="android.intent.action.ANSWER" /> 
	<action android:name="android.intent.action.SENDTO" />
	<category android:name="android.intent.category.DEFAULT" /> 
	<data android:mimeType="text/*" /> 
</intent-filter>

```

2. Implement again the "shareRDCPass" function used to create a payment intent, but change the `String intent` to the value `Intent.ACTION_SENDTO`, which corresponds to the intention of searching for a payment. 

The `String total` value, on the other hand, can be empty (`String total = ""`).

```android
public void shareRDCPass(String total, String intent) { 
	try { 
		Intent sharingIntent = new Intent(intent); 
		sharingIntent.setClassName("redelcom.cl.rdcpass", "redelcom.cl.rdcpass.MainActivity"); 
		sharingIntent.putExtra("packageName", getPackageName()); 
		sharingIntent.putExtra("className", getClass().toString().split(" ")[1]);  
		sharingIntent.putExtra(“payload”, “RESULTADO_PAGO_REALIZADO”); 
		sharingIntent.putExtra(“dte”, dte); 
		startActivity(sharingIntent); 
	} catch (Exception e) { 
		e.printStackTrace(); 
	} 
} 

```

| Method  | Description |
|---|---|
| `sharingIntent.putExtra("payload", "RESULTADO_PAGO_REALIZADO");` | This parameter can be obtained as a response to the payment intention. |
| `sharingIntent.putExtra("dte", dte);` | This parameter corresponds to the structure (XML) of the electronic receipt/invoice. You can see a complete XML example in the [Annex: Example XML for DTE Printing](/developers/en/docs/redelcom/additional-content/print-example). |

3. Finally, incorporate the following code block to generate the printing of the DTE in RDCPass. 

```android
if (Intent.ACTION_SENDTO.equals(action)) { 
	// Define what to do after printing the DTE 
}
 
```


This will also perform a clean return that will return control of the RDCPass app's process to the integrator's application.

