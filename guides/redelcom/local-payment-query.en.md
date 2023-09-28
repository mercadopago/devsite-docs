# Query a payment

If you want to inquire about a payment instance already made in the RDCPass application, follow the steps below.

1. Add the intent-filter (Activity) in your project's AndroidManifest.xml file: `<action android:name="android.intent.action.ANSWER" />`.

In addition to the intent-filter for creating the payment intention, your project should look like this:

```android

<intent-filter> 
<action android:name="android.intent.action.SEND" /> 
<action android:name="android.intent.action.ANSWER" /> 
<category android:name="android.intent.category.DEFAULT" /> 
<data android:mimeType="text/*" /> 
</intent-filter>

```

2. Implement again the "shareRDCPass" function used to create a payment intention, but change the `String intent` to the value `Intent.ACTION_ANSWER`, which corresponds to the intention of querying for a payment. 

The `String total` value, on the other hand, can be empty (`String total = ""`).

```android

public void shareRDCPass(String total, String intent) { 
 	try { 
 		Intent sharingIntent = new Intent(intent); 
sharingIntent.setClassName("redelcom.cl.rdcpass", "redelcom.cl.rdcpass.MainActivity"); sharingIntent.putExtra("packageName", getPackageName()); 
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
> Important 
>
> To query a payment, you will need the `userTransactionId` assigned to that payment when it was created. Remember to replace the value "DEMO 1234" with the appropriate `userTransactionId`.
>
> If you don't have it, you can use this same method to find out what the last identifier used was, but replace "DEMO1234" with the value "-1" as follows: `sharingIntent.putExtra("userTransactionId", "-1");`

3.  To receive the response from RDCPass, you should also include the following code block:


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
> Important 
>
>  The line `String userTransactionId = new JSONObject(intent.getStringExtra("userTransactionId"));` should only be included if you used the method to retrieve the last `userTransactionId`.

The structure of the response for the payment query intention will be the same as that provided during the creation of a payment intention. You can check it out in the [annex: response examples](/developers/en/docs/redelcom/additional-content/response-examples).

