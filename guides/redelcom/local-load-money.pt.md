# Carregar dinheiro no POS

Para recarregar telefones celulares ou pagar contas, é necessário ter saldo disponível no terminal, que pode ser carregado criando uma instância de pagamento especial no RDCPass. Se você deseja gerar essa instância de pagamento para carregar saldo no POS, siga as etapas abaixo.

> WARNING
> 
> Importante
>
> O processo de carregar dinheiro no POS é semelhante à criação de uma intenção de pagamento. Preste atenção especial nas instruções passo a passo para carregar dinheiro com sucesso.

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

2. Modifique a função "shareRDCPass" implementada para gerar uma intenção de pagamento, conforme mostrado abaixo:

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


| Campo | Descrição | Exemplo |
|---|---|---|
| `sharingIntent.putExtra(Intent.EXTRA_TEXT, total)` | `total` é o valor total da transação. Aceita apenas moeda CLP e deve estar em formato de string numérica, sem pontos ou caracteres especiais. | 2000 |
| `sharingIntent.putExtra("recargaSaldo", true)` | Indica que a transação é uma recarga de saldo. Formato booleano, padrão é `false`. Para gerar a recarga, deve ser definido como `true`. | `true`/`false` |
| `sharingIntent.putExtra("payment_type", "TARJETA")` | Indica o método de pagamento a ser usado. Se omitido, deve ser selecionado no POS. | "EFECTIVO"<br>"TARJETA"<br>"WALLET" (Pagamentos QR)<br>"SIN_EFECTIVO" (Permite seleção no POS entre: "CARTÕES E CARTEIRA")<br>"SIN_WALLET" (Permite seleção no POS entre: "DINHEIRO E CARTÕES") |

A resposta para esta intenção de recarrega de dinheiro no POS é semelhante à criação de uma intenção de pagamento. O campo mais relevante é `saldo_terminal`, que indica o saldo resultante ao final da transação.
