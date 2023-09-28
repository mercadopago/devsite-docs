# Pagar recargas de telecomunicações

> WARNING
> 
> Importante
>
> Para realizar uma intenção de pagamento de recargas de telecomunicações, é necessário [ter carregado dinheiro no POS](/developers/pt/docs/redelcom/local-integration/android/payments-processing/load-money-in-pos) anteriormente, e realizado uma [consulta dos parâmetros necessários para multiserviços](/developers/pt/docs/redelcom/local-integration/android/payments-processing/query-multiservice-parameters). Você precisará enviar os parâmetros `CompanyRecharge`, `CompanyNameRecharge`, `AmountRecharge` e `NumberRecharge`, obtidos na resposta à consulta de parâmetros para multiserviços.

Para pagar recargas de telecomunicações, siga as etapas abaixo.

1. Adicione o seguinte intent-filter (Activity) ao arquivo AndroidManifest.xml do seu projeto:

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
> Se você já criou uma intenção de pagamento, já incorporou este intent-filter e pode pular esta etapa.

2. Implemente a intenção "sendRecarga", substituindo os parâmetros `nombre_servicio` e `id_servicio` pelos obtidos na consulta de parâmetros para multiserviços.

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


Além disso, você precisará identificar o cliente que receberá a recarrega e o valor. Para fazer isso, siga as instruções para cada campo abaixo:

| Campo | Descrição |
|---|---|
| `CompanyRecharge` | Identificador da empresa com a qual a recarrega será feita. Deve ser enviado em formato de string. |
| `CompanyNameRecharge` | Nome da empresa com a qual a recarga será feita. Deve ser enviado em formato de string. |
| `AmountRecharge` | Valor a ser recarregado. Deve ser enviado em formato de string sem caracteres especiais (por exemplo, se o valor for R$ 1.000, você deve enviar "1000"). |
| `NumberRecharge` | Número de telefone do cliente, que servirá como identificação. Deve ser enviado em formato de string. |

Como resultado, uma caixa de diálogo será aberta no RDCPass. Após o processamento e a impressão do comprovante, você será devolvido ao aplicativo integrado.


