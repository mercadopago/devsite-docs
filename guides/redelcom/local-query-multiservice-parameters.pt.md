# Consulta de parâmetros multisserviço

Se você deseja consultar as informações necessárias para efetuar pagamentos de contas e recarregar empresas de telecomunicações, como o saldo disponível no terminal ou as empresas disponíveis para recargas, siga as etapas abaixo.

1. Implemente a função "consultaParametros" no início do seu aplicativo, conforme mostrado no seguinte bloco de código.

Lembre-se de que, para essa consulta de informações, os parâmetros `firmaRecargas` e `firmaCuentas` podem ser deixados em branco ("").

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


2. Para receber a resposta do RDCPass, você também deve incluir o seguinte bloco de código:

```android
Intent intent = getIntent(); 
String action = intent.getAction(); 
if ("IR_INICIO".equals(action)) { 
    String respuestaCuentas = intent.getStringExtra("respuestaCuentas"); 
    String respuestaRecargas = intent.getStringExtra("respuestaCompanies"); 
    String SALDO_TERMINAL = intent.getStringExtra("SALDO_TERMINAL"); 
} 

```


A resposta chegará por meio de um intent com a ação `IR_INICIO` e conterá os seguintes campos:

| Campo | Descrição |
|---|---|
| `respuestaCuentas` | String contendo um arquivo JSON com informações sobre as contas que podem ser pagas no dispositivo. |
| `respuestaRecargas` | String contendo um arquivo JSON com informações sobre as empresas de telecomunicações e serviços que podem ser recarregados no dispositivo. |
| `SALDO_TERMINAL` | String contendo o saldo atual no terminal. Se você tiver um saldo de R$ 1.000, ele chegará no formato "1000". |

Você pode ver um exemplo detalhado de resposta para consultas de pagamento de contas e recargas no [Anexo: Exemplos de Resposta](/developers/pt/docs/redelcom/additional-content/response-examples).
