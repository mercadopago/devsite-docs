# Imprimir un comprobante

La integración vía API te da la posibilidad de imprimir dos tipos de comprobantes, DTE e impresión libre; es decir, impresión de facturas, o de otros tipos de comprobantes. Sigue leyendo las indicaciones a continuación para saber cómo hacerlo en cada caso.

## Imprimir un DTE (Factura)

Para solicitar una impresión de factura con DTE, deberás realizar una llamada `POST {https://api-dev.redelcom.cl:20010/v2}/factura`, reemplazando `X-Authentication`, `clientId` y `secret` por tus credenciales.

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


| Campo | Descripción |
|---|---|
| `dte` | **Obligatorio**. Estructura (XML) de la boleta/factura electrónica. Puedes ver un ejemplo completo de XML en el [anexo: ejemplo de XML para la impresión de DTE](/developers/en/docs/redelcom/additional-content/print-example). |
| `rdcTransactionId` | **Obligatorio**. Código de la solicitud de pago original que se está queriendo facturar. |
| `terminalId` | **Obligatorio**. Código de la terminal a la que se enviará la solicitud de impresión. |


Si la llamada es correcta, se generará la impresión en la terminal seleccionada y se devolverá una respuesta vacía con un status 200. Si hubiera algún error, la respuesta será alguna de las siguientes:

| Status | Descripción |
|---|---|
| 401 | Autenticación inválida o inexistente. Revisa la información correspondiente a tus credenciales. |
| 409 | Ya existe una solicitud de impresión pendiente. |



## Impresión libre


Si lo que deseas es realizar una impresión de otro tipo tipo de comprobante, como un comprobante de pago o una precuenta, realiza una llamada `POST {https://api-dev.redelcom.cl:20010/v2}/impresion` a la API, reemplazando `X-Authentication`, `clientId` y `secret` por tus credenciales.

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


| Campo | Descripción |
|---|---|
| `printText` | **Obligatorio**. Texto a imprimir de acuerdo con el formato de impresión para terminales Redelcom. |
| `terminalId` | **Obligatorio**. Código de la terminal a la que se enviará la solicitud de impresión. |


Si la llamada es correcta, se generará la impresión en la terminal seleccionada y se devolverá una respuesta vacía con un status 200. Si hubiera algún error, la respuesta será alguna de las siguientes:

| Status | Descripción |
|---|---|
| 401 | Autenticación inválida o inexistente. Revisa la información correspondiente a tus credenciales. |
| 409 | Ya existe una solicitud de impresión pendiente. |



## Tags de impresión

Para realizar impresiones de comprobantes vía API, deberás utilizar ciertos tags que te permitirán darles el formato deseado. Puedes ver estos tags en detalle en la tabla a continuación.


| Tag | Descripción |
|---|---|
| `{w}{/w}` | Letra tamaño wide 16 x 48. |
| `{s}{/s}` | Letra tamaño small 8 x 16. |
| `{b}{/b}` | Bold, letra en negrita. |
| `{left}` | Alineación de texto a la izquierda. |
| `{center}` | Alineación de texto centrado. |
| `{reset}` | Comando utilizado para limpiar el buffer de la impresora. Se debe utilizar<br>siempre que se quiera ingresar un comando nuevo, distinto al anterior. |
| `{br}` | Salto de línea. |
| `{qr}{/qr}` | El texto entre estas llaves será impreso en un código QR.<br>Recomendamos la utilización de un tag `{br}` antes y después. |
| `{code93}{/code93}` | El texto entre estas llaves será<br>impreso en un código de barra (máx. 58 caracteres).<br>Recomendamos la utilización de un tag `{br}` antes y después. |
| `{pdf417}{/pdf417}` | El texto entre estas tags será impreso en un código pdf. <br>Recomendamos la utilización<br>de un tag `{br}` antes y después. |
