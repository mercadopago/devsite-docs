# Pay telecommunications recharges

> WARNING 
> 
> Important 
>
> To perform an intention to pay telecommunications recharges, it is necessary to have previously [loaded money in the POS](/developers/en/docs/redelcom/local-integration/android/payments-processing/load-money-in-pos) and conducted a [search of the necessary parameters for multiservices](/developers/en/docs/redelcom/local-integration/android/payments-processing/query-multiservice-parameters). You will need to send `CompanyRecharge`, `CompanyNameRecharge`, `AmountRecharge` y `NumberRecharge` parameters, obtained from the response to the multiservices parameters query.

If you have already loaded balance in the POS and searched for the necessary parameters for multiservices and want to pay telecommunications recharges, follow the steps below.

1. Add the following intent-filter (Activity) to the AndroidManifest.xml file of your project:

```android
<intent-filter> 
<action android:name="android.intent.action.SEND" /> 
<category android:name="android.intent.category.DEFAULT" /> 
<data android:mimeType="text/*" /> 
</intent-filter>
 
```


> WARNING 
> 
> Important 
>
> If you have already created a payment intention, you have already incorporated this intent-filter, and you can skip this step.

2. Implement the "sendRecarga" intention, replacing the parameters `nombre_servicio` and `id_servicio` with those obtained when conducting a search of parameters for multiservices.

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


In addition, you will need to identify the customer who will receive the recharge and the amount. To do this, you can follow the instructions for each field outlined below:

| Field | Description |
|---|---|
| `CompanyRecharge` | Identifier of the company with which the top-up is to be made. Should be sent in String format. |
| `CompanyNameRecharge` | Name of the company with which the top-up is to be made. Should be sent in String format. |
| `AmountRecharge` | Amount to be topped up. Should be sent in String format without special characters (for example, if the amount is $1,000, you should send "1000"). |
| `NumberRecharge` | Customer's phone number, which will serve as their identification. Should be sent in String format. |

As a result, a dialog box will open in RDCPass. Once the processing and voucher printing are completed, you will be returned to the integrated application.

