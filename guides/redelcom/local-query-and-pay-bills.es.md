# Consultar y pagar cuentas

> WARNING
> 
> Importante
>
> Para realizar una intención de consulta y pago de cuentas, es necesario haber realizado previamente una [carga de saldo en POS](/developers/es/docs/redelcom/local-integration/android/payments-processing/load-money-in-pos) y una [consulta de parámetros necesarios para multiservicios](/developers/es/docs/redelcom/local-integration/android/payments-processing/query-multiservice-parameters), ya que se requerirá enviar `id` de la cuenta y los substrings de `datos_captura`, y `nombre_cuenta`, obtenidos en el JSON `respuestasCuentas` de la respuesta a la consulta de parámetros para multiservicios.


SSi ya has realizado una carga de saldo en POS y una consulta de parámetros necesarios para multiservicios, y quieres realizar una consulta y pago de cuentas, sigue los pasos a continuación.

1. Agrega el siguiente intent-filter (Activity) en el archivo AndroidManifest.xml de tu proyecto:

```android
<intent-filter> 
<action android:name="android.intent.action.SEND" /> 
<category android:name="android.intent.category.DEFAULT" /> 
<data android:mimeType="text/*" /> 
</intent-filter>

```

2. Implementa la función “sendConsulta”, reemplazando los parámetros `id_cuenta`, `datos_captura_substring` y `nombre` por los obtenidos al realizar una consulta de parámetros para multiservicios.

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

Además, deberás identificar al cliente o el documento a pagar. Para hacerlo, sigue las indicaciones para cada campo señaladas a continuación:

| Campo | Descripción |
|---|---|
| `idCategoria` | Corresponde al identificador numérico del cliente o documento a pagar, debe ser enviado en formato String. El tipo de identificador será el contenido en `datos_captura`, obtenido en la consulta de parámetros multiservicios. |
| `nombreCuenta` | Nombre de la cuenta. Debe ser enviado en formato String. |
| `hint` | Indica el tipo de dato que hay que ingresar en lenguaje natural y se obtiene al interior de `datos_captura`. Sigue el formato “NUMERO=DESCRIPCION DEL TIPO DE DATO=NUMERO” (por ejemplo, si su valor es "0=NUMERO DE RUT=2", se debe enviar el substring “NUMERO DE RUT”). |


Como resultado, se abrirá un cuadro de diálogo en RDCPass que indicará la cuenta a pagar, el identificador del documento o cliente, y el monto de la transacción. Podrás proceder a realizar el pago o cancelar esta transacción, y en cualquiera de los dos casos serás retornado a la aplicación integrada.
