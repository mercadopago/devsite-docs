# Crear una intención de pago

Una intención de pago es un llamado que contiene los detalles de una transacción a realizarse.

Para crear una intención de pago, necesitarás haber realizado anteriormente la llamada para obtener el código de la terminal a la que se asociará la transacción. Ten en cuenta que, si ya lo hiciste una vez y guardaste el `id` de la terminal, no necesitarás repetir esta consulta, ya que ese código es único e invariable.

Luego, realiza una llamada `POST {https://api-dev.redelcom.cl:20010/v2}/pago`a la API, agregando el valor obtenido previamente al campo `terminalId` y reemplazando `X-Authentication`, `clientId` y `secret` por tus credenciales:

```curl
curl -X POST \
 'https://api-dev.redelcom.cl:20010/v2/pago' \
--header 'X-Authentication: clientId;secret' \
--header 'Content-Type: application/json' \
--data '{


   "amount": 6900,
   "description": "Compra de prueba",
   "paymentType": "EFECTIVO",
   "products": [{
       "description": "PIZZA MEDIANA",
       "id": "1845",
       "iva_exempt": false,
       "quantity": 10,
       "unit_price": 300
   }],
   "rdcDTE": true,
   "requestTip": true,
   "responseCallback": "https://eom2h2tqm3g6y7l.m.pipedream.net",
   "terminalId": "3727",
   "userTransactionId": "345565"


}'

```

Configura los campos de esta llamada siguiendo estas especificaciones:

| Campo | Tipo | Descripción |
|---|---|---|
| `amount` | integer | **Obligatorio**. Monto de la transacción. Debe ser un número entre 1 y 99999999. |
| `Description` | string | **Opcional**. Información adicional a mostrar en la solicitud de pago. |
| `dte` | string | **Opcional**. Debes configurarlo en caso de que el Documento Tributario Electrónico asociado al pago no sea generado por Redelcom y quieras que lo imprima el POS. Solo aplica si `rdcDTE` es `false`. <br>Puedes consultar la sección "Imprimir DTE" para más información. |
| `paymentType` | enum | **Opcional**. Medio de pago a utilizar. Si el parámetro se omite, el medio de pago deberá ser elegido en el POS. <br>Valores posibles: `EFECTIVO`, `TARJETA`, `WALLET`, `SIN_EFECTIVO`, `SIN_WALLET`. |
| Products - `description` | string | **Opcional**. Descripción breve del producto vendido. |
| Products - `id` | string | **Opcional**. Código del producto. |
| Products - `iva_exempt` | boolean | **Opcional**. Si el producto está o no exento de IVA. Valores posibles: `True` si está exento; `false` si no. |
| Products - `quantity` | integer | **Opcional**. Cantidad de ítems. |
| Products - `unit_price` | integer | **Opcional**. Precio unitario del ítem vendido. |
| `rdcDTE` | boolean | **Opcional**. Si la generación del DTE la debe hacer Redelcom (por defecto, no). |
| `requestTip` | boolean | **Opcional**. Si la terminal debe solicitar propina (por defecto, no). |
| `responseCallback` | string | **Opcional**. Es aquella URL propia del integrador que será invocada por Redelcom para informar el estado de un pago al finalizar la transacción, sea exitosa o no. Para configurarla, dirígete al subtítulo “Implementar la URL de respuesta”.<br>Recomendamos utilizar este método para evitar tener que realizar un llamado de consulta para las intenciones de pago. |
| `terminalId` | string | **Obligatorio**. Código de la terminal a la que se asociará la transacción, resultado de la  llamada “Obtener terminal”.  |
| `UserTransactionId` | string | **Obligatorio**. Código referencial de la solicitud de pago, que puedes definir. |


Si la solicitud fue exitosa, la respuesta te devolverá el código asociado a la solicitud del pago, y se parecerá al siguiente ejemplo: 

```json
{
   "rdcTransactionId": "294-3727-16384"
}

```


> WARNING
> 
> Importante
>
> Aconsejamos almacenar los `rdcTransactionId` asociados a cada transacción realizada para facilitar luego la consulta por una intención de pago.


En la siguiente tabla, puedes ver los principales motivos por los que esta solicitud puede **no** ser procesada:

| Error | Motivo |
|---|---|
| STATUS CODE - 400 | Información de pago inválida. Revisa la información enviada y vuelve a intentarlo. |
| STATUS CODE 401 | Autenticación inválida o inexistente. Revisa la información correspondiente a tus credenciales. |
| STATUS CODE - 409 | Ya existe una intención de pago pendiente. Vuelve a intentarlo luego. |



## Implementar la URL de respuesta

Al crear una intención de pago, recomendamos configurar el parámetro `responseCallback`, que te permitirá recibir las actualizaciones de los estados finales de esas intenciones en una URL propia. 
Para implementar este `responseCallback`, ten en cuenta:  
- Debe ser una llamada `POST` con un único parámetro en el queryString, `rdcTransactionId`, que es el identifcador de la transacción entregado por RedelCom al solicitar el pago.
- El `Content-Type` será `application/json`.

Esta implementación se habrá realizado de manera exitosa si el servicio devuelve como respuesta un código `HTTP 200 OK` . Si, en cambio, la respuesta entrega un código `5xx`, el servicio reintentará la llamada a la URL cada 1 minuto, 3 veces. 
En caso de que la respuesta devuelta no sea ninguna de las dos opciones mencionadas, la implementación se considerará fallida y no se reintentará.

