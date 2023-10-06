# Query for a payment intent

To check the current status of a previously made payment intent, you have two options:

1. Use the `callback` parameter within the request to create a payment intent (**recommended**).

2. Make a `GET` call to `{https://api-dev.redelcom.cl:20010/v2}/pago?rdcTransactionId={rdcTransactionId}`, replacing `{rdcTransactionId}` with the value obtained in the response to the payment intention creation you want to check, and `X-Authentication`, `clientId`, and `secret` with your credentials.

```curl
curl -X GET \
'https://api-dev.redelcom.cl:20010/v2/pago?rdcTransactionId={rdcTransactionId}' \
--header 'X-Authentication: clientId;secret'


```

Here is an example response to this request. Please note that some fields may vary depending on the payment's characteristics.

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


| Field                                 | Description                                                                                       |
|---------------------------------------|---------------------------------------------------------------------------------------------------|
| `Estado`                              | Indicates whether the transaction was successful (`APROBADO`) or not (`RECHAZADO`).              |
| `Total`                               | Total amount for which the transaction was made.                                                   |
| `Propina`                             | Amount of the tip given in the transaction, if applicable.                                           |
| `Medio_pago`                          | Payment method used for the transaction.                                                             |
| `CODAUT`                              | Authorization code for the transaction.                                                              |
| `fecha&hora`                          | Date and time when the transaction was made, in the format AAAAMMDD&HHMMSS.                            |
| `mensaje_visor`                       | Message displayed on the device's screen indicating the transaction's status.                         |
| `mensaje_premio`                      | In case the transaction is rewarded, it will come in the form of a voucher.                         |
| `datos_adquirencia_cliente`            | Transactional data required for printing the customer copy of the voucher.                               |
| `datos_adquirencia_cliente_imprimir`   | Contains the customer's acquiring text printed on the device, in voucher format.                            |
| `datos_adquirencia_comercio`           | Transactional data required for printing the merchant copy of the voucher.                               |
| `datos_adquirencia_comercio_imprimir`  | This field contains the merchant's acquiring text printed on the device, in voucher format.                  |
| `BOLETA`                              | Data associated with the electronic receipt, will be returned if Redelcom handles the generation and printing of receipts and invoices. |
| `FACTURA`                             | Data associated with the electronic invoice, will be returned if Redelcom handles the generation and printing of receipts and invoices. |



Here is a list of possible status codes that this response can return:

| Code | Status                              |
|------|-------------------------------------|
| 200  | Payment transaction completed.     |
| 204  | Pending payment request.           |
| 400  | Invalid DTE sent.                 |
| 401  | Invalid or nonexistent authentication. Check your credentials. |
| 404  | Nonexistent payment request. You can check the `TransactionId` sent. |

