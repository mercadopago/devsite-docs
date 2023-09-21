# Load money in POS

In order to recharge mobile phones or make bill payments, it is necessary to have available balance on the terminal, which can be loaded by creating a special payment instance in RDCPass. If you want to generate this payment instance to load balance into the terminal, follow the steps below.

> WARNING 
> 
> Important 
>
> The process of loading money in the POS is similar to creating a payment intent. Pay special attention to the step-by-step instructions to successfully load money.

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
> If you have already created a payment intent, you have already incorporated this intent-filter, and you can skip this step.

2. Modify the "shareRDCPass" function implemented to generate a payment intent as shown below:

```android
public void shareRDCPass(String total, String intent, Boolean esCarga) { 
 	try { 
 		Intent sharingIntent = new Intent(intent); 
 		sharingIntent.setClassName("redelcom.cl.rdcpass", "redelcom.cl.rdcpass.MainActivity");  
sharingIntent.putExtra("packageName", getPackageName()); 
 		sharingIntent.putExtra("className", getClass().toString().split(" ")[1]); 
 		sharingIntent.putExtra(Intent.EXTRA_TEXT, total); 
 		if (esCarga){ 
 			sharingIntent.putExtra("recargaSaldo", true); 
 			sharingIntent.putExtra("payment_type", "TARJETA"); 
 		} 
 		startActivity(sharingIntent); 
 	} catch (Exception e) { 
 e.printStackTrace(); 
 	} 
} 
 
```


| Field | Description | Example |
|---|---|---|
| `sharingIntent.putExtra(Intent.EXTRA_TEXT, total)` | `total` is the total amount of the transaction. Only CLP currency is accepted, and it should be in numeric string format, without dots or special characters. | 2000 |
| `sharingIntent.putExtra("recargaSaldo", true)` | Indicates that the transaction is a balance load. Boolean format, default is `false`. To generate the load, it should be set to `true`. | `true`/`false` |
| `sharingIntent.putExtra("payment_type", "TARJETA")` | Indicates the payment method to be used. If omitted, it must be selected on the POS.  | “EFECTIVO”<br>“TARJETA”<br>“WALLET” (QR Payments)<br>“SIN_EFECTIVO” (Allows selection on the POS between: “CARDS AND WALLET”)<br>“SIN_WALLET” (Allows selection on the POS between: “CASH AND CARDS”) |


The response to this POS money load intention is similar to that of creating a payment intention. The most relevant field is `saldo_terminal`, which indicates the resulting balance at the end of the transaction.
