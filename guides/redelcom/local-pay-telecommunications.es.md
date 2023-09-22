# Pagar recarga de Telecomunicaciones

> WARNING 
> 
> Importante 
>
> Para realizar una intención de recarga de telecomunicaciones, es necesario haber realizado previamente una [carga de saldo en POS](/developers/es/docs/redelcom/local-integration/android/payments-processing/load-money-in-pos) y una [consulta de parámetros necesarios para multiservicios](/developers/es/docs/redelcom/local-integration/android/payments-processing/query-multiservice-parameters), ya que se requerirá enviar `CompanyRecharge`, `CompanyNameRecharge`, `AmountRecharge` y `NumberRecharge`, obtenidos en la respuesta a la consulta de parámetros para multiservicios.

Si ya has realizado una carga de saldo en POS y una consulta de parámetros necesarios para multiservicios, y quieres realizar una recarga de telecomunicaciones, sigue los pasos a continuación.

1. Agrega el siguiente intent-filter (Activity) en el archivo AndroidManifest.xml de tu proyecto:


```android
<intent-filter> 
<action android:name="android.intent.action.SEND" /> 
<category android:name="android.intent.category.DEFAULT" /> 
<data android:mimeType="text/*" /> 
</intent-filter>
 
```


> WARNING 
> 
> Importante 
>
> Si ya realizaste la creación de una intención de pago, ya has incorporado este intent-filter y puedes saltar este paso. 

2. Implementa la intención “sendRecarga”, reemplazando los parámetros `nombre_servicio` e `id_servicio` por los obtenidos al realizar una consulta de parámetros para multiservicios.


```android
private void sendRecarga(String nombre_servicio, String id_servicio, String id_cliente, String  monto) { 
Intent recargaIntent = new Intent("enviaRecarga"); 
recargaIntent.setClassName("redelcom.cl.rdcpass", "redelcom.cl.rdcpass.MainActivity"); recargaIntent.putExtra("packageName", context.getPackageName()); 
recargaIntent.putExtra("className", getClass().toString().split(" ")[1]); 
recargaIntent.putExtra("NumberRecharge", id_cliente); 
recargaIntent.putExtra("AmountRecharge", monto); 
recargaIntent.putExtra("CompanyRecharge", id_servicio); 
recargaIntent.putExtra("CompanyNameRecharge", nombre_servicio); 
startActivity(recargaIntent); 
}
 
```

Además, deberás identificar al cliente que recibirá la recarga y el monto. Para hacerlo, puedes seguir las indicaciones para cada campo señaladas a continuación:

| Campo | Descripción |
|---|---|
| `CompanyRecharge` | Identificador de la compañía con la que se desea realizar la recarga. Debe ser enviado en formato String. |
| `CompanyNameRecharge` | Nombre de la compañía con la que se desea realizar la recarga. Debe ser enviado en formato String. |
| `AmountRecharge` | Monto que se desea recargar. Debe ser enviado en formato String y sin caracteres especiales (por ejemplo, si el monto fuese de $1.000, se debe enviar “1000”). |
| `NumberRecharge` | Número telefónico del cliente, que será su identificación. Debe ser enviado en formato String. |


Como resultado, se abrirá un cuadro de diálogo en RDCPass. Una vez finalizado el procesamiento e impresión del voucher, se retornará a la aplicación integrada.
