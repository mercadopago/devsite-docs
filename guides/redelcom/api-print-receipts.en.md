# Print a receipt

The integration via API allows you to print two types of receipts: DTE and free printing, meaning bills or other types of receipts. Continue reading the instructions below to learn how to do it in each case.

## Print a DTE (bill)

To request the printing of a bill with DTE, you need to make a `POST` call to `{https://api-dev.redelcom.cl:20010/v2}/factura`, replacing `X-Authentication`, `clientId`, and `secret` with your credentials.

```curl
curl -X POST \ 
'https://api-dev.redelcom.cl:20010/v2/factura' \
--header 'X-Authentication: clientId;secret' \
--header 'Content-Type: application/json' \
--data '{
   "dte": "XML de boleta o factura bajo el esquema de servicios impuestos internos",
   "rdcTransactionId": "294-3727-16384",
   "terminalId": "3727"
}'

```


| Field           | Description                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| `dte`           | **Required**. Structure (XML) of the electronic invoice. You can find a complete XML example in the [Annex: example XML for DTE printing](/developers/en/docs/redelcom/additional-content/print-example). |
| `rdcTransactionId` | **Required**. Code of the original payment request that you want to invoice.                       |
| `terminalId`    | **Required**. Code of the terminal to which the print request will be sent.                         |

If the call is successful, the printing will be generated on the selected terminal, and an empty response with a status code of 200 will be returned. If there is an error, the response will be one of the following:

| Status | Description |
|---|---|
| 401 | Invalid or nonexistent authentication. Verify your credentials. |
| 409 | There is already a pending print request. |


## Free Printing

If you want to print a different type of document, such as a payment receipt or a preliminary bill, make a `POST` call to the API `{https://api-dev.redelcom.cl:20010/v2}/impresion`, replacing `X-Authentication`, `clientId`, and `secret` with your credentials.

```curl
curl  -X POST \ 
 'https://api-dev.redelcom.cl:20010/v2/impresion' \
--header 'X-Authentication: clientId;secret' \
--header 'Content-Type: application/json' \
--data '{
   "printText": ""{w}   Roberta Pizzas       {/w} {br}      PUB RESTAURANT {br}       Vina del mar.Chile{br}{br}{w}  ADICION        MESA   {br}    1763            5          {/w}{br}     18/04/2023  T:1  9:26 pm{br}Atendido por :ASDRUBAL      ( 3){br}Invitados    :  5{br}--- Detalle del Consumo --------{br}Producto {s}(Cant x Precio){/s}        Total{br}--------------------------------{b}{br}RUCULA                   $10,900{br}GAMBA                    $11,700{br}BOTURA                   $11,900{br} {br} {br}{pdf417}www.google.cl{/pdf417}{br}"
",
   "terminalId": "3727"
}'

```


| Field | Description |
|---|---|
| `printText` | **Required**. Text to be printed following the RedelCom terminal printing format. |
| `terminalId` | **Required**. Terminal code to which the print request will be sent. |

If the request is successful, it will trigger the printing on the selected terminal, and an empty response with a status code of 200 will be returned. If there is an error, the response will be one of the following:

| Status | Description |
|---|---|
| 401 | Invalid or nonexistent authentication. Verify your credentials. |
| 409 | There is already a pending print request. |


## Printing Tags

To perform printing of receipts via API, you will need to use certain tags that allow you to format them as desired. You can see these tags in detail in the table below.

| Tag | Description |
|---|---|
| `{w}{/w}` | Wide-sized font 16 x 48. |
| `{s}{/s}` | Small-sized font 8 x 16. |
| `{b}{/b}` | Bold font, bold text. |
| `{left}` | Text alignment to the left. |
| `{center}` | Text alignment centered. |
| `{reset}` | Command used to clear the printer buffer. It should be used whenever you want to enter a new command, different from the previous one. |
| `{br}` | Line break. |
| `{qr}{/qr}` | The text between these curly braces will be printed as a QR code.<br>We recommend using a `{br}` tag before and after. |
| `{code93}{/code93}` | The text between these curly braces will be printed as a barcode (max. 58 characters).<br>We recommend using a `{br}` tag before and after. |
| `{pdf417}{/pdf417}` | The text between these tags will be printed as a pdf code.<br>We recommend using a `{br}` tag before and after. |
