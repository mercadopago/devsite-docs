# Consultar una intención de pago

Para consultar el estado actual de una intención de pago previamente realizada, tienes dos opciones:

1. Utilizar el parámetro `callback` dentro de la llamada para crear una intención de pago (aconsejado).
2. Si el *callback* no responde al minuto de haber creado la intención de pago, puedes realizar una llamada  `GET {https://api-dev.redelcom.cl:20010/v2}/pago?rdcTransactionId={rdcTransactionId}`, reemplazando `{rdcTransactionId}` por el valor obtenido en la respuesta a la creación de la intención que estás queriendo consultar, y `X-Authentication`, `clientId` y `secret` por tus credenciales.


```curl
curl -X GET \
'https://api-dev.redelcom.cl:20010/v2/pago?rdcTransactionId={rdcTransactionId}' \
--header 'X-Authentication: clientId;secret'

```

A continuación, puedes ver un ejemplo de respuesta a esta llamada. Ten en cuenta que algunos campos pueden variar dependiendo de las características del pago.

```json
{
   "ESTADO": "APROBADO",
   "TOTAL": "46900",
   "PROPINA": "0",
   "MEDIO_PAGO": "DEBITO",
   "CODAUT": "231403",
   "FECHA&HORA": "20230905&214300",
   "MENSAJE_VISOR": "APROBADO (00)",
   "DATOS_ADQUIRENCIA_CLIENTE": {
       "RETAILER_ID": "61000010",
       "FECHA&HORA": "20230905&214300",
       "TERMINAL": "102",
       "NUM_TARJETA": "********5706",
       "TOTAL": "46900",
       "PROPINA": "0",
       "NUM_OPER": "00000108",
       "COD_AUTO": "231403",
       "NUM_UNICO": "255207",
       "TIPO_TARJETA": "DEBITO",
       "TIPO_LECTURA": "C-DB"
   },
   "DATOS_ADQUIRENCIA_CLIENTE_IMPRIMIR": "{s}61000010 -    2.62.03          TARJETA DE DEBITO{/s}{br}{s}05/09/2023    21:43:00                      102{/s}{br}{s}********5706    {s} C-DB{br}{s}MONTO COMPRA                             $46.900{/s}{br}{s}TOTAL                                   $ 46.900{/s}{br}{s}NUM OPER    00000108       COD AUTO       231403{/s}{br}{s}NUMERO UNICO                              255207{/s}{br}{center}{s}ACEPTO PAGAR SEGUN CONTRATO CON EMISOR{/s}",
   "DATOS_ADQUIRENCIA_COMERCIO": {
       "RETAILER_ID": "61000010",
       "FECHA&HORA": "20230905&214300",
       "TERMINAL": "102",
       "NUM_TARJETA": "********5706",
       "TOTAL": "46900",
       "PROPINA": "0",
       "NUM_OPER": "00000108",
       "COD_AUTO": "231403",
       "NUM_UNICO": "255207"
   },
   "DATOS_ADQUIRENCIA_COMERCIO_IMPRIMIR": "{center}COMPROBANTE DE VENTA{br}{center}TARJETA DE DEBITO{br}{br}{center}{s}REDELCOM{/s}{br}{center}{s}COYANCURA 2241, SANTIAGO{/s}{br}{center}{s}61000010 - 2.62.03{/s}{br}{br}{s}FECHA         HORA                     TERMINAL{/s}{br}{s}05/09/2023    21:43:00                      102{/s}{br}{br}{s}NUMERO DE TARJETA   NUM DE CUENTA    C-DB{/s}{br}{s}********5706          {/s}{br}{s}MONTO COMPRA                             $46.900{/s}{br}{s}PROPINA                                       $0{/s}{br}{s}TOTAL                                   $ 46.900{/s}{br}{s}NUMERO DE OPERACION    :                00000108{/s}{br}{s}CODIGO DE AUTORIZACION :                  231403{/s}{br}{s}NUMERO UNICO :                            255207{/s}{br}{center}{s}ORIGINAL COMERCIO{/s}{br}{center}{s}ACEPTO PAGAR SEGUN CONTRATO CON EMISOR{/s}"
}
```


| Campo | Descripción |
|---|---|
| `Estado` | Indica si la transacción fue exitosa (`APROBADO`) o no (`RECHAZADO`). |
| `Total` | Monto total por el que se realizó la transacción. |
| `Propina` | Monto de la propina otorgada en la transacción, en caso de haberlo hecho. |
| `Medio_pago` | Medio de pago con el que se realizó la transacción. |
| `CODAUT` | Código de autorización de la transacción. |
| `fecha&hora` | Fecha y hora en las que la transacción fue realizada, en formato AAAAMMDD&HHMMSS. |
| `mensaje_visor` | Mensaje mostrado en el visor del dispositivo, que informa el estado de la transacción. |
| `MENSAJE_PREMIO` | En caso de que la  transacción sea premiada, vendrá en formato de voucher.  | 
| `datos_adquirencia_cliente` | Datos transaccionales necesarios para la impresión del voucher copia cliente. |
| `datos_adquirencia_cliente_imprimir` | Contiene el texto de adquirencia del cliente impreso en el equipo, en formato voucher. |
| `datos_adquirencia_comercio` | Datos transaccionales necesarios para la impresión del voucher copia comercio. |
| `datos_adquirencia_comercio_imprimir` | Este campo contiene el texto de adquirencia del comercio impreso en el equipo, en formato voucher. |
| `BOLETA` | Datos asociados a la boleta electrónica, será devuelto en caso de que Redelcom sea quien maneje la generación e impresión de boletas y facturas. |
| `FACTURA` | Datos asociados a la factura electrónica, será devuelto en caso de que Redelcom sea quien maneje la generación e impresión de boletas y facturas. | 


Puedes ver aquí debajo un listado de los posibles estados que puede retornar esta respuesta:

| Código | Estado |
|---|---|
| 200 | Transacción de pago finalizada. |
| 204 | Solicitud de pago pendiente. |
| 400 | El DTE enviado es inválido. |
| 401 | Autenticación inválida o inexistente. Revisa la información correspondiente a tus credenciales. |
| 404 | Solicitud de pago inexistente. Puedes chequear el `TransactionId` enviado. |

