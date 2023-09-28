# Criar uma intenção de pagamento

Uma intenção de pagamento é uma solicitação que contém os detalhes de uma transação a ser realizada, e deve ser criada para iniciar uma instância de pagamento no aplicativo RDCPass.

Para criar uma intenção de pagamento, siga as etapas abaixo:

1. Adicione o seguinte intent-filter (Activity) ao arquivo AndroidManifest.xml do seu projeto:

```android

<intent-filter> 
<action android:name="android.intent.action.SEND" /> 
<category android:name="android.intent.category.DEFAULT" /> 
<data android:mimeType="text/*" /> 
</intent-filter>

```

2. Implemente a função "shareRDCPass", como mostrado abaixo:

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

Você deve modificar os seguintes parâmetros levando em consideração estas especificações:


| Parâmetro          | Descrição                                                                                          | Exemplo         | Tipo         |
|-------------------|------------------------------------------------------------------------------------------------------|-----------------|--------------|
| `String total`    | **Obrigatório**. <br>Valor total da transação. Aceita apenas moeda CLP e um valor numérico, sem pontos ou caracteres especiais. | 2000            | String       |
| `String intent`   | **Obrigatório**. <br>Corresponde ao tipo de intenção a ser solicitada. Neste caso, usaremos o parâmetro `Intent.ACTION_SEND`, que corresponde à criação de uma intenção de pagamento. | `Intent.ACTION_SEND` | String |
| `userTransactionId` | **Opcional**. <br>Você pode incluir um código de referência para a solicitação de pagamento, substituindo "DEMO1234" pelo código escolhido. | Transaction1234 | Alfanumérico |
| `description`     | **Opcional**. <br>Você pode incluir uma descrição de pagamento, que será exibida na tela de pagamento. Lembre-se de substituir "Descrição para a sua transação" pela descrição desejada. | Item1           | Alfanumérico |
| `payment_type`    | **Opcional**. <br>Selecione o método de pagamento a ser usado (se omitido, deve ser selecionado no POS). Você deve substituir "TIPO_PAGO". | • "CASH" <br>• "CARD" <br>• "WALLET" (Pagamentos por QR) <br>• "NON_CASH" (Permite seleção no POS entre: "CARTÕES E WALLET") <br>• "NON_WALLET" (Permite seleção no POS entre: "DINHEIRO E CARTÕES") | Alfanumérico |
| `request_tip`     | **Opcional**. <br>Gerencia a solicitação de gorjeta. | `true` / `false` | Booleano. O padrão é `false`. |
| `rdcDTE`          | **Opcional**. <br>Usa os serviços da Redelcom para gerar o documento fiscal. | `true` / `false` | Booleano. O padrão é `false`. |
| `completeTransactions` | **Opcional**. <br>Você deve incluí-lo se precisar consultar o último `userTransactionId` posteriormente para manter a conciliação nas transações feitas. | - | Alfanumérico |

3. Se você deseja receber a resposta para a intenção de pagamento criada a partir do RDCPass, use o seguinte bloco de código:

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


| Campo  | Descrição |
|---|---|
| `JSONObject payload = new JSONObject(intent.getStringExtra(Intent.EXTRA_TEXT));` | Permite receber a resposta de pagamento. Use isso apenas se desejar receber a resposta do RDCPass. |
| `String userTransactionId = intent.getStringExtra("userTransactionId");` | Se você usou um `userTransactionId`, inclua este campo juntamente com o identificador escolhido. Use isso apenas se desejar receber a resposta do RDCPass. |

Para visualizar um exemplo completo de resposta à criação de intenção de pagamento, consulte nosso [Anexo: exemplos de resposta](/developers/pt/docs/redelcom/additional-content/response-examples).

> WARNING 
> 
> Importante
> 
> Recomendamos salvar o `userTransactionId` associado a cada transação para facilitar a busca posterior de uma intenção de pagamento.
