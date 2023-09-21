# Query and pay bills

> WARNING 
> 
> Important 
>
> To perform an intention to query and pay bills, it is necessary to have previously [loaded money in the POS](/developers/en/docs/redelcom/local-integration/android/payments-processing/load-money-in-pos) and conducted a [search of the necessary parameters for multiservices](/developers/en/docs/redelcom/local-integration/android/payments-processing/query-multiservice-parameters). You will need to send the account `ID` and the substrings of `datos_captura` and `nombre_cuenta`, obtained from the `respuestasCuentas` JSON in the response to the multiservices parameters query.


If you have already loaded balance in the POS and searched for the necessary parameters for multiservices and want to perform a query and bill payment, follow the steps below.

1. Add the following intent-filter (Activity) to the AndroidManifest.xml file of your project:

```android
<intent-filter> 
<action android:name="android.intent.action.SEND" /> 
<category android:name="android.intent.category.DEFAULT" /> 
<data android:mimeType="text/*" /> 
</intent-filter>

```

2. Implement the "sendConsulta" function, replacing the parameters `id_cuenta`, `datos_captura_substring`, and `nombre` with those obtained when conducting a search of parameters for multiservices.

```android
public void sendConsulta(String id_cliente, String id_cuenta, String datos_captura_substring,  String nombre) { 
try { 
 		Intent consultaCuentaIntent = new Intent(intent); 
 		consultaIdCuenta.setClassName("redelcom.cl.rdcpass",  
"redelcom.cl.rdcpass.MainActivity"); 
 		consultaCuentaIntent.putExtra("packageName", getPackageName()); 
 consultaCuentaIntent.putExtra("className", getClass().toString().split(" ")[1]);   
  
 		consultaCuentaIntent.putExtra("idCategoria", id_cuenta); 
 		consultaCuentaIntent.putExtra("id", id_cliente); 
 		consultaCuentaIntent.putExtra("nombreCuenta", nombre); 
 		consultaCuentaIntent.putExtra("hint", datos_captura_substring); 
  
 		startActivity(consultaCuentaIntent); 
} catch (Exception e) { 
 		e.printStackTrace(); 
} 
} 
 
```


In addition, you will need to identify the customer or document to be paid. To do this, you can follow the instructions for each field outlined below:

| Field | Description |
|---|---|
| `idCategoria` | Corresponds to the numerical identifier of the customer or document to be paid, and it should be sent in String format. The type of identifier will be found in `datos_captura`, obtained in the multiservices parameters query. |
| `nombreCuenta` | Name of the account. It should be sent in String format. |
| `hint` | Indicates the type of data to be entered in natural language and is obtained from within `datos_captura`. Follows the format "NUMBER=DESCRIPTION OF DATA TYPE=NUMBER" (for example, if its value is "0=NUMERO DE RUT=2", you should send the substring "NUMERO DE RUT"). |

As a result, a dialog box will open in RDCPass, indicating the account to be paid, the identifier of the document or customer, and the transaction amount. You can proceed with the payment or cancel this transaction, and in either case, you will be returned to the integrated application.
