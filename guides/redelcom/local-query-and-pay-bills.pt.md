# Consultar e pagar contas

> WARNING
> 
> Importante
>
> Para realizar uma intenção de consulta e pagamento de contas, é necessário ter [carregado dinheiro no POS](/developers/pt/docs/redelcom/local-integration/android/payments-processing/load-money-in-pos) anteriormente e realizado uma [consulta dos parâmetros necessários para multiserviços](/developers/pt/docs/redelcom/local-integration/android/payments-processing/query-multiservice-parameters). Você precisará enviar o `id_cuenta`, as substrings `datos_captura` e `nombre` obtidas do JSON `respuestasCuentas` na resposta à consulta de parâmetros multiserviços.

Se você já carregou saldo no POS e buscou os parâmetros necessários para multiserviços, e deseja realizar uma consulta e pagamento de contas, siga as etapas abaixo.

1. Adicione o seguinte intent-filter (Activity) ao arquivo AndroidManifest.xml do seu projeto:

```android
<intent-filter> 
<action android:name="android.intent.action.SEND" /> 
<category android:name="android.intent.category.DEFAULT" /> 
<data android:mimeType="text/*" /> 
</intent-filter>

```

2. Implemente a intenção "sendConsulta", substituindo os parâmetros `id_cuenta`, `datos_captura_substring` e `nombre` pelos obtidos ao realizar uma consulta de parâmetros para multiserviços.

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

Além disso, você precisará identificar o cliente ou documento a ser pago. Para fazer isso, siga as instruções para cada campo abaixo:

| Campo | Descrição |
|---|---|
| `idCategoria` | Corresponde ao identificador numérico do cliente ou documento a ser pago, e deve ser enviado em formato de string. O tipo de identificador será encontrado em `datos_captura`, obtido na consulta de parâmetros para multiserviços. |
| `nombreCuenta` | Nome da conta. Deve ser enviado em formato de string. |
| `hint` | Indica o tipo de dados a serem inseridos em linguagem natural e é obtido dentro de `datos_captura`. Segue o formato "NUMERO=DESCRIÇÃO DO TIPO DE DADO=NUMERO" (por exemplo, se o valor for "0=NUMERO DE RUT=2", você deve enviar a substring "NUMERO DE RUT"). |

Como resultado, uma caixa de diálogo será aberta no RDCPass, indicando a conta a ser paga, o identificador do documento ou cliente e o valor da transação. Você pode prosseguir com o pagamento ou cancelar esta transação, e em ambos os casos, você será devolvido ao aplicativo integrado.

