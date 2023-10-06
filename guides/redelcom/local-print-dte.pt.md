# Impressão do Documento Tributario Electrónico (DTE)

Se você deseja imprimir o DTE de uma instância de pagamento já realizada no RDCPass, siga as etapas abaixo.

1. Adicione o intent-filter (Activity) no arquivo AndroidManifest.xml do seu projeto: 

 `<action android:name="android.intent.action.ACTION_SENDTO" />`. 

 Além do intent-filter para criar a intenção de pagamento e consultar um pagamento, seu projeto deve ser assim:

```android

<intent-filter> 
	<action android:name="android.intent.action.SEND" /> 
	<action android:name="android.intent.action.ANSWER" /> 
	<action android:name="android.intent.action.SENDTO" />
	<category android:name="android.intent.category.DEFAULT" /> 
	<data android:mimeType="text/*" /> 
</intent-filter>

```

2. Implemente novamente a função "shareRDCPass" usada para criar uma intenção de pagamento, mas altere o `String intent` para o valor `Intent.ACTION_SENDTO`, que corresponde à intenção de busca de um pagamento.

O valor `String total`, por outro lado, pode estar vazio (`String total = ""`).


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


| Método  | Descrição |
|---|---|
| `sharingIntent.putExtra("payload", "RESULTADO_PAGO_REALIZADO");` | Este parâmetro pode ser obtido como resposta à intenção de pagamento. |
| `sharingIntent.putExtra("dte", dte);` | Este parâmetro corresponde à estrutura (XML) do recibo/fatura eletrônica. Você pode conferir um exemplo completo de XML no [Anexo: Exemplo XML para Impressão do DTE](/developers/pt/docs/redelcom/additional-content/print-example). |

3. Por fim, incorpore o seguinte bloco de código para gerar a impressão do DTE no RDCPass. 

```android
if (Intent.ACTION_SENDTO.equals(action)) { 
	// Define what to do after printing the DTE 
}
 

```


Isso também realizará um retorno limpo que devolverá o controle do processo do aplicativo RDCPass para o aplicativo do integrador.
