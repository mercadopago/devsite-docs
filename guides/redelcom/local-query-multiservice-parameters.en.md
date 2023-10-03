# Query multiservice parameters

If you want to inquire about the necessary information to make bill payments and recharge telecommunications companies, such as the available balance on the terminal or the companies available for top-ups, follow the steps below.

1. Implement the "consultaParametros" function at the beginning of your application, as shown in the following code block.

Keep in mind that for this information query, the parameters `firmaRecargas` and `firmaCuentas` can be left empty ("").

```android
public void consultaParametros(String firmaRecargas, String firmaCuentas) { 
    Intent consultaParametros = new Intent("consultaParametros"); 
    consultaParametros.setClassName("redelcom.cl.rdcpass",  "redelcom.cl.rdcpass.MainActivity"); 
    consultaParametros.putExtra("packageName", getPackageName()); 
    consultaParametros.putExtra("className", getClass().toString().split(" ")[1]); 
    consultaParametros.putExtra("firmaGetCuentas", firmaCuentas); 
    consultaParametros.putExtra("firmaGetCompanies", firmaRecargas); 
    startActivity(consultaParametros); 
}

```


2. To receive the response from RDCPass, you should also include the following code block:

```android
Intent intent = getIntent(); 
String action = intent.getAction(); 
if ("IR_INICIO".equals(action)) { 
    String respuestaCuentas = intent.getStringExtra("respuestaCuentas"); 
    String respuestaRecargas = intent.getStringExtra("respuestaCompanies"); 
    String SALDO_TERMINAL = intent.getStringExtra("SALDO_TERMINAL"); 
} 

```


The response will arrive through an intent with the action `IR_INICIO`  and will contain the following fields:

| Field | Description |
|---|---|
| `respuestaCuentas` | A string containing a JSON file with information about the accounts that can be paid from the device. |
| `respuestaRecargas` | A string containing a JSON file with information about the telecommunications companies and services that can be recharged from the device. |
| `SALDO_TERMINAL` | A string containing the current balance on the terminal. If you have a balance of $1,000, it will arrive in the format "1000". |

You can see a detailed example of response to queries for bill payments and recharges in the [Annex: response examples](/developers/en/docs/redelcom/additional-content/response-examples).