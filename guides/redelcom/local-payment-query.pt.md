# Consultar um pagamento

Se você deseja consultar uma instância de pagamento já realizada no aplicativo RDCPass, siga as etapas abaixo.

1. Adicione o intent-filter (Activity) no arquivo AndroidManifest.xml do seu projeto: `<action android:name="android.intent.action.ANSWER" />`.

Além do intent-filter para criar a intenção de pagamento, seu projeto deve ser assim:

```android

<intent-filter> 
<action android:name="android.intent.action.SEND" /> 
<action android:name="android.intent.action.ANSWER" /> 
<category android:name="android.intent.category.DEFAULT" /> 
<data android:mimeType="text/*" /> 
</intent-filter>

```

2. Implemente novamente a função "shareRDCPass" usada para criar uma intenção de pagamento, mas altere o `String intent` para o valor `Intent.ACTION_ANSWER`, que corresponde à intenção de consulta de um pagamento. 

O valor `String total`, por outro lado, pode estar vazio (`String total = ""`).

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
> Importante
> 
> Para consultar um pagamento, você precisará do `userTransactionId` atribuído a esse pagamento quando ele foi criado. Lembre-se de substituir o valor "DEMO 1234" pelo `userTransactionId` apropriado.
>
> Se você não tiver este dado, pode usar o mesmo método para descobrir qual foi o último identificador usado, mas substitua "DEMO1234" pelo valor "-1" da seguinte forma: `sharingIntent.putExtra("userTransactionId", "-1");` .


3. Para receber a resposta do RDCPass, você também deve incluir o seguinte bloco de código:

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
> Importante
> 
> A linha `String userTransactionId = new JSONObject(intent.getStringExtra("userTransactionId"));` deve ser incluída apenas se você usou o método para recuperar o último `userTransactionId`.

A estrutura da resposta para a intenção de consulta de pagamento será a mesma fornecida durante a [criação de uma intenção de pagamento](/developers/pt/docs/redelcom/additional-content/response-examples).
