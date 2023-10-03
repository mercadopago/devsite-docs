# Consultar parámetros para Multiservicios

Si quieres consultar información necesaria para realizar pagos de cuenta y recargas en compañías de telecomunicaciones, tales como el saldo disponible en la terminal o las compañías disponibles para hacer recargas, sigue los pasos a continuación.

1. Implementa la función “consultaParametros” al inicio de tu aplicación, tal como se muestra en el siguiente bloque de código. Ten en cuenta que para esta consulta de información, los parámetros `firmaRecargas` y `firmaCuentas` pueden quedar vacíos ("").

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


2. Para obtener la respuesta desde RDCPass, implementa el siguiente bloque de código.

```android
Intent intent = getIntent(); 
String action = intent.getAction(); 
if ("IR_INICIO".equals(action)) { 
    String respuestaCuentas = intent.getStringExtra("respuestaCuentas"); 
    String respuestaRecargas = intent.getStringExtra("respuestaCompanies"); 
    String SALDO_TERMINAL = intent.getStringExtra("SALDO_TERMINAL"); 
} 

```


La respuesta llegará  desde un intent con la acción `IR_INICIO`, y contendrá los siguientes campos:

| Campo | Descripción |
|---|---|
| `respuestaCuentas` | String que contiene un archivo JSON con la  información de las cuentas que se pueden pagar desde el dispositivo. |
| `respuestaRecargas` | String que contiene un archivo JSON con la  información de las compañías y servicios de telecomunicaciones que se pueden  recargar desde el dispositivo. |
| `SALDO_TERMINAL` | String que contiene el saldo actual en el terminal. Si se tuviese  un saldo de $1.000, llegaría con formato “1000”.  |


Puedes ver en detalle un ejemplo de respuesta a consultas para pago de cuentas y recargas en el [Anexo: ejemplos de respuesta](/developers/es/docs/redelcom/additional-content/response-examples).