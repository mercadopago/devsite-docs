# Create a payment intent

A payment intent is a request that contains the details of a transaction to be carried out, and must be created to initiate a payment instance in the RDCPass application.

To create a payment intention, follow the steps below:

1.  Add the following intent-filter (Activity) to your project's AndroidManifest.xml file:

```android

<intent-filter> 
<action android:name="android.intent.action.SEND" /> 
<category android:name="android.intent.category.DEFAULT" /> 
<data android:mimeType="text/*" /> 
</intent-filter>

```


2. Implement the "shareRDCPass" function as shown below:

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

You should modify the following parameters taking into account these specifications:


| Parameter          | Description                                                                                          | Example         | Type         |
|-------------------|------------------------------------------------------------------------------------------------------|-----------------|--------------|
| `String total`    | **Required**. Total amount of the transaction. Only accepts CLP currency and a numerical amount, without dots or special characters. | 2000            | String       |
| `String intent`   | **Required**. Corresponds to the type of intention to be requested. In this case, we will use the `Intent.ACTION_SEND` parameter, which corresponds to creating a payment intention. | `Intent.ACTION_SEND` | String |
| `userTransactionId` | **Optional**. You can include a reference code for the payment request, replacing "DEMO1234" with the chosen code. | Transaction1234 | Alphanumeric |
| `description`     | **Optional**. You can include a payment description, which will be displayed on the payment screen. Remember to replace "Description for your transaction" with the desired description. | Item1           | Alphanumeric |
| `payment_type`    | **Optional**. Select the payment method to be used (if omitted, it must be selected on the POS). You should replace "TIPO_PAGO". | • "CASH" <br>• "CARD" <br>• "WALLET" (QR Payments) <br>• "NON_CASH" (Allows selection on the POS between: "CARDS AND WALLET") <br>• "NON_WALLET" (Allows selection on the POS between: "CASH AND CARDS") | Alphanumeric |
| `request_tip`     | **Optional**. Manages the tip request. | `true` / `false` | Boolean. Default is false. |
| `rdcDTE`          | **Optional**. Uses Redelcom services to generate the tax document. | `true` / `false` | Boolean. Default is false. |
| `completeTransactions` | **Optional**. You must include it if you need to query the last `userTransactionId` later to maintain reconciliation in the transactions made. | - | Alphanumeric |

3. If you want to receive the response to the payment intention created from RDCPass, use the following code block:

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


| Field  | Description |
|---|---|
| `JSONObject payload = new JSONObject(intent.getStringExtra(Intent.EXTRA_TEXT));` | Allows you to receive the payment response. Use this only if you want to receive the response from RDCPass. |
| `String userTransactionId = intent.getStringExtra("userTransactionId");` | If you used a `userTransactionId`, include this field along with the chosen identifier. Use this only if you want to receive the response from RDCPass. |

To view a complete example of a response to the payment intention creation, please refer to our [Annex: response examples](/developers/en/docs/redelcom/additional-content/response-examples).

> WARNING 
> 
> Important 
>
> We recommend storing the `userTransactionId` associated with each transaction to facilitate later search for a payment intention.
