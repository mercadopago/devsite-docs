# Crear una intención de pago

Una intención de pago es un llamado que contiene los detalles de una transacción a realizarse, y que debe ser creada para iniciar  una instancia de pago en la aplicación RDCPass.

Para crear una intención de pago, sigue los pasos a continuación.

1. Agrega el siguiente intent-filter (Activity) en el archivo AndroidManifest.xml de tu proyecto:

```android

<intent-filter> 
	<action android:name="android.intent.action.SEND" /> 
	<category android:name="android.intent.category.DEFAULT" /> 
	<data android:mimeType="text/*" /> 
</intent-filter>

```


2. Implementa la función “shareRDCPass”, tal como se muestra a continuación:

```android

public void shareRDCPass(String total, String intent) { 
	try { 
		Intent sharingIntent = new Intent(intent); 
		sharingIntent.setClassName("redelcom.cl.rdcpass", "redelcom.cl.rdcpass.MainActivity"); 
		sharingIntent.putExtra("packageName", getPackageName()); 
		sharingIntent.putExtra("className", getClass().toString().split(" ")[1]); 
		sharingIntent.putExtra(Intent.EXTRA_TEXT, total); 
		sharingIntent.putExtra("userTransactionId", "DEMO1234");
		sharingIntent.putExtra("description", "Descripcion para tu transacción");
		sharingIntent.putExtra("payment_type", "TIPO_PAGO");
		sharingIntent.putExtra("request_tip", false);
		sharingIntent.putExtra("rdcDTE", false);

		ArrayList<String> arrayListUserTransactionId = new ArrayList<String>(); 
		arrayListUserTransactionId.add("DEMO1233"); 
		sharingIntent.putExtra("completeTransactions", arrayListUserTransactionId);
		startActivity(sharingIntent); 
	} catch (Exception e) { 
		e.printStackTrace(); 
	} 
}

```

Deberás modificar los siguientes parámetros teniendo en cuenta estas especificaciones:


| Parámetro | Descripción | Ejemplo | Tipo |
|---|---|---|---|
| `String total` | **Obligatorio**. <br>Monto total de la transacción. Solo se acepta la moneda CLP  y un monto numérico, sin puntos  ni caracteres especiales.  | 2000 | String |
| `String intent` | **Obligatorio**. <br>Corresponderá al tipo de intención a requerir. Para este caso, utilizaremos el parámetro `Intent.ACTION_SEND`, que se corresponde con la creación de una intención de pago. | `Intent.ACTION_SEND` | String |
| `userTransactionId` | **Opcional**. <br>Puedes incluir un código referencial a la solicitud de pago, reemplazando “DEMO1234” por el código elegido. | Transaction1234 | Alfanumérico |
| `description` | **Opcional**. <br>Puedes incluir una descripción del pago, que se verá reflejada en la pantalla de pago. Recuerda reemplazar “Descripción para tu transacción” por la descripción deseada. | Artículo1 | Alfanumérico |
| `payment_type`  | **Opcional**. <br>Selecciona el medio de pago a utilizar (si esto se omite, se deberá seleccionar en el POS). Deberás reemplazar “TIPO_PAGO”. | • “EFECTIVO” <br>• “TARJETA” <br>• “WALLET” (Pagos con QR) <br>• “SIN_EFECTIVO” (Permite seleccionar en el POS entre: “TARJETAS Y WALLET”) <br>• “SIN_WALLET” (Permite seleccionar en el POS entre: “EFECTIVO Y TARJETAS”)  | Alfanumérico |
| `request_tip` | **Opcional**. <br>Maneja la solicitud de propina. | `true` /`false` | Booleano. Por defecto, false. |
| `rdcDTE` | **Opcional**. <br>Utiliza los servicios de Redelcom para generar el documento tributario. | `true` /`false` | Booleano. Por defecto, false. |
| `completeTransactions` | **Opcional**. <br>Debes incluirlo en caso de necesitar consultar el último userTransactionId más adelante, para mantener una conciliación en las transacciones realizadas. | - | Alfanumérico |

3. Si quieres recibir la respuesta a la intención de pago creada desde RDCPass, utiliza el siguiente bloque de código:

```android

try{ 
	Intent intent = getIntent(); 
	String action = intent.getAction(); 

	JSONObject payload = new JSONObject(intent.getStringExtra(Intent.EXTRA_TEXT)); 
	String userTransactionId = intent.getStringExtra(“userTransactionId”); 
	if (Intent.ACTION_SEND.equals(action)) { 
		// Define what to do with the received data “payload” 
	} 
} catch (Exception e) { 
	e.printStackTrace(); 
} 

```


| Campo  | Descripción |
|---|---|
| `JSONObject payload = new JSONObject(intent.getStringExtra(Intent.EXTRA_TEXT));` | Permite recepcionar la respuesta del pago. Sólo debes utilizarlo si quieres recibir la respuesta de RDCPass. |
| `String userTransactionId = intent.getStringExtra(“userTransactionId”);` | Si utilizaste un `userTransactionId`, incluye este campo y el identificador elegido. Sólo debes utilizarlo si quieres recibir la respuesta de RDCPass. |

Para ver un ejemplo de respuesta completa a la creación de la intención de pago, dirígete a nuestro [Anexo: ejemplos de respuestas](/developers/es/docs/redelcom/additional-content/response-examples).

> WARNING 
> 
> Importante 
>
> Aconsejamos almacenar los `userTransactionId` asociados a cada transacción realizada para facilitar luego la consulta por una intención de pago.