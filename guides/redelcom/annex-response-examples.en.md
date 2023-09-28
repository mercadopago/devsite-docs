# Response examples

Below, you can find various response examples for the creation of intentions within the local integration of RDCPass, along with a description of each received parameter.

## Example of response for the creation of a payment intent

```json
{
   "ESTADO":"APROBADO",
   "TOTAL":"5566",
   "PROPINA":"0",
   "MEDIO_PAGO":"DEBITO",
   "CODAUT":"388153",
   "FECHA&HORA":"20230817&111955",
   "MENSAJE_VISOR":"APROBADO (00)",
   "DATOS_ADQUIRENCIA_CLIENTE":{
      "RETAILER_ID":"39200562",
      "FECHA&HORA":"20230817&111955",
      "TERMINAL":"3261",
      "NUM_TARJETA":"********4199",
      "TOTAL":"5566",
      "PROPINA":"0",
      "NUM_OPER":"00000812",
      "COD_AUTO":"388153",
      "NUM_UNICO":"246636",
      "TIPO_TARJETA":"DEBITO",
      "TIPO_LECTURA":"E-DB"
   },
   "DATOS_ADQUIRENCIA_CLIENTE_IMPRIMIR":"{s}39200562 -    2.62.03          TARJETA DE DEBITO{\/s}{br}{s}17\/08\/2023    11:19:55                     3261{\/s}{br}{s}********4199    {s} E-DB{br}{s}MONTO COMPRA                              $5.566{\/s}{br}{s}TOTAL                                    $ 5.566{\/s}{br}{s}NUM OPER    00000812       COD AUTO       388153{\/s}{br}{s}NUMERO UNICO                              246636{\/s}{br}{center}{s}ACEPTO PAGAR SEGUN CONTRATO CON EMISOR{\/s}",
   "DATOS_ADQUIRENCIA_COMERCIO":{
      "RETAILER_ID":"39200562",
      "FECHA&HORA":"20230817&111955",
      "TERMINAL":"3261",
      "NUM_TARJETA":"********4199",
      "TOTAL":"5566",
      "PROPINA":"0",
      "NUM_OPER":"00000812",
      "COD_AUTO":"388153",
      "NUM_UNICO":"246636"
   },
   "DATOS_ADQUIRENCIA_COMERCIO_IMPRIMIR":"{center}COMPROBANTE DE VENTA{br}{center}TARJETA DE DEBITO{br}{br}{center}{s}REDELKONG{\/s}{br}{center}{s}TEST 2050, SANTIAGO{\/s}{br}{center}{s} - 2.62.03{\/s}{br}{br}{s}FECHA         HORA                     TERMINAL{\/s}{br}{s}17\/08\/2023    11:19:55                     3261{\/s}{br}{br}{s}NUMERO DE TARJETA   NUM DE CUENTA    E-DB{\/s}{br}{s}********4199          {\/s}{br}{s}MONTO COMPRA                              $5.566{\/s}{br}{s}PROPINA                                       $0{\/s}{br}{s}TOTAL                                    $ 5.566{\/s}{br}{s}NUMERO DE OPERACION    :                00000812{\/s}{br}{s}CODIGO DE AUTORIZACION :                  388153{\/s}{br}{s}NUMERO UNICO :                            246636{\/s}{br}{center}{s}ORIGINAL COMERCIO{\/s}{br}{center}{s}ACEPTO PAGAR SEGUN CONTRATO CON EMISOR{\/s}",
   "BOLETA":{
      "RUBRO":"VENTA AL POR MENOR DE COMPUTADORES, EQUIPO PERIFERICO, PROGRAMAS INFOR",
      "DIRECCION":"PADRE MARIANO 391 OF 704 7P Providencia ",
      "SUCURSAL":"81228911",
      "CAF":"12444098",
      "TED1":"<TED version=\"1.0\"><DD><RE>13924206-8<\/RE><TD>39<\/TD><F>12444098<\/F><FE>2023-08-17<\/FE><RR>66666666-6<\/RR><RSR>SII Boleta<\/RSR><MNT>5566<\/MNT><IT1>Venta<\/IT1><CAF version=\"1.0\"><DA><RE>76123174-K<\/RE><RS>REDELCOM S.A.<\/RS><TD>39<\/TD><RNG><D>1<\/D><H>100<\/H><\/RNG><FA>2017-08-07<\/FA><RSAPK><M>0ts6Ek7exNXpPnY\/8OfC5G1k0eaK1olAfrK5Q68fD4uWdcmNetiSUyZ3pKK4uRxWJCfWB9fdG2bbFzPQqQL0MQ==<\/M><E>Aw==<\/E><\/RSAPK><IDK>100<\/IDK><\/DA><FRMA algoritmo=\"SHA1withRSA\">Hjeprfm4y6SWTTMPx5Xd348MnV0CV5x1kLVY2mreJFms6WHlabnRZISABDqwpc9JzVQCfYVaFdVbJq6hTRUz0A==<\/FRMA><\/CAF><TSTED>2023-08-17T11:19:23<\/TSTED><\/DD><FRMT algoritmo=\"SHA1withRSA\">UYSvOH22AKI4S8D+z6E7NiCkQg3y8cR\/Ane+m2N3mPG+nGpLBt+NmpmCudBHhn4Ujscl6tQLCur4\no2EqibfPzg==\n<\/FRMT><\/TED>",
      "TED2":"UYSvOH22AKI4S8D+z6E7NiCkQg3y8cR\/Ane+m2N3mPG+nGpLBt+NmpmCudBHhn4Ujscl6tQLCur4\no2EqibfPzg==\n"
   },
   "SALDO_TERMINAL":"11736999"
}

```


| Field | Description | Data |
|---|---|---|
| `ESTADO` (String) | The final result of the transaction.  | `APPROVED` or `REJECTED` |
| `TOTAL` (String) | Total amount of the transaction (includes tip). |  |
| `PROPINA` (String) | Amount indicated as a tip when creating the intention. |  |
| `MEDIO_PAGO` (String) | Payment method used in the transaction. |  |
|  `CODAUT` (String) | Authorization code of the transaction. It will be returned if the transaction status is `APPROVED`, in which case the number should not be repeated. |  |
| `FECHA&HORA` (String) | Date and time when the transaction was performed. It will be returned if the status is `APPROVED`. | Format: "YYYYMMDD&hhmmss" |
| `MENSAJE_VISOR` (String) | The response provided by the transaction server. This response is the message that should be displayed during the transaction. |  |
| `MENSAJE_PREMIO` (String) | Corresponds to a rewarded transaction. It comes in voucher format, ready to be printed by the application. It will be returned if the status is `APPROVED`, and if it exists, it must always be printed.  |  |
| `DATOS_ADQUIRENCIA_CLIENTE` (JSONObject) | Data obtained from the transaction to generate the customer copy. It comes in voucher format, ready to be printed by the application. It will be returned if the transaction was made with a card as the payment method and must always be printed or delivered to the customer in some way. | "RETAILER_ID" - "FECHA&HORA" - "TERMINAL"  -  “NUM_TARJETA”  -  "TOTAL” - “PROPINA” -  “NUM_OPER” - “COD_AUTO” - “NUM_UNICO” - “TIPO_TARJETA” - "TIPO_LECTURA" - “NUM_CUOTAS” |
| `DATOS_ADQUIRENCIA_CLIENTE_IMPRIMIR` (String) | Customer acquisition data, in voucher format, ready to be printed by the application. It will be returned only for card payments. |  |
| `DATOS_ADQUIRENCIA_COMERCIO` (JSONObject) | Data obtained from the transaction to generate the merchant copy. These must always be printed as a backup for the operator. It will be returned only for card payments. | "RETAILER_ID" - "FECHA&HORA" - "TERMINAL” - “NUM_TARJETA” - "NUM_CUENTA" - "TOTAL” - “PROPINA” - “NUM_OPER” - “COD_AUTO” - “NUM_UNICO” - “TIPO_TARJETA” - "TIPO_LECTURA"  |
| `DATOS_ADQUIRENCIA_COMERCIO_IMPRIMIR` (String) | Merchant acquisition data, in voucher format, ready to be printed by the application. It will be returned only for card payments. |  |
| `BOLETA` (JSONObject) | Data associated with the electronic receipt, will be returned if Redelcom handles the generation and printing of receipts and invoices. | “RUBRO” - “DIRECCION” - “SUCURSAL” - “ CAF” - “TED” |
| `FACTURA` (JSONObject) | Data associated with the electronic invoice, will be returned if Redelcom handles the generation and printing of receipts and invoices. | “DTE”  - “ENCABEZADO”  - “EMISOR”  - “RECEPTOR” - “TOTALES” - “DETALLES”  |

Please note that if any field does not correspond or does not contain data, it will be returned with a `null` value.

## Example of response for bill payment query

```json
{ 
 "estatus":"OK", 
 "codaut":"00112233445566778899aabbccddeeff",  "id_tx":"", 
 "saldo":-1, 
 "datos":[ 
 { 
 "rubro":"HIPOTECARIOS", 
 "meta_rubro":"SERVICIOS FINANCIEROS",  "rubro_id":12, 
 "descripcion":"", 
 "nombre":"Compania 1 - PLAN Q", 
 "company":"COMPANIA1", 
 "datos_captura":"0=NUMERO DE RUT=2",  "id":6151, 
 "id_tarjeta":40 
}, 
 { 
 "rubro":"HIPOTECARIOS", 
 "meta_rubro":"SERVICIOS FINANCIEROS",  "rubro_id":12, 
 "descripcion":"", 
 "nombre":"Leasing en Compania 12",  "company":"COMPANIA12", 
 "datos_captura":"0=NUMERO DE RUT=2",  "id":6152, 
 "id_tarjeta":40 
 }, 
... 
 ], 
 "mensaje":"Carga de Cuentas Recaudaciones  Exitosa" 
} 

```


| Parameter | Description |
|---|---|
| `estatus` | Response status. Possible values: <br>`ok`: New data received successfully.<br>`SD`: Previously existing data was found. |
| `codaut` | A 32-character string that identifies the version of the sent JSON. Only necessary to update the database when this value changes. |
| `datos` | List of all the bills that can be paid. In case the `codaut` value matches a previous query, this parameter will be empty. |
| `rubro` | Classification of the type of service to be paid. |
| `meta_rubro` | Grouping of service classifications. |
| `rubro_id` | Numeric identifier of the classification. |
| `descripcion` | Description of the service. This is an optional parameter that may return an empty response. |
| `nombre` | Name of the service to be displayed on the screen. |
| `company` | Name of the company that will receive the payment. |
| `datos_captura` | Indicates the type of data to be entered in natural language. Follows the format NUMBER=DESCRIPTION OF DATA TYPE=NUMBER. |
| `montos` | Some companies define fixed amounts for payments. Follows the format AMOUNT1&AMOUNT2&...&AMOUNT-N. |
| `id` | Numeric identifier of the service to be paid. |

## Example of response for telecommunications companies query


```json
{ 
 "estatus":"OK", 
 "codaut":"00112233445566778899aabbccddeeff",  "id_tx":"", 
 "saldo":-1, 
 "datos":[ 
 { 
 "secuencia":1, 
 "categoria_id":"RCEL", 
  
         "montos":"2000&3600&5000&10000&15000& 
20000&25000", 
 "monto_min":"750", 
 "tipo_dato":"CEL", 
 "usa_reimpresion":"1", 
 "id":"EJ1FibraOptica", 
 "largo_telefono":9, 
 "operador":"EJEMPLO1", 
 "nombre":"Ejemplo 1",  
 "monto_max":"25000" 
 }, 
 { 
 "secuencia":2, 
 "categoria_id":"RBA", 
 "montos":"", 
 "monto_min":"500", 
 "tipo_dato":"RUT", 
 "usa_reimpresion":"1", 
 "id":"Ejem2Movil", 
 "largo_telefono":10, 
 "operador":"EJEMPLO2", 
 "nombre":"Ejemplo 2", 
 "monto_max":"45000" 
 }, 
... 
 ], 
 "mensaje":"Carga de recargasCompany exitosa" } 


```


| Parameter | Description |
|---|---|
| `Estatus` | Response status. Possible values: <br>`ok`: New data received successfully.<br>`SD`: Previously received data was confirmed. |
| `codaut` | A 32-character string identifying the version of the sent JSON. Only necessary to update the database when this value changes. |
| `datos` | List of all products that can be paid. If the `codauts` value matches a previous query, this parameter is received empty. |
| `secuencia` | Integer indicating the recommended display order of the companies in your application (ascending order). |
| `categoria_id` | Indicates the type of recharge associated with a code.<br>`RCEL`: Mobile recharges.<br>`RBA`: Payments and recharges for broadband or fiber internet.<br>`ROT`: Other types of recharges. |
| `montos` | Some companies define fixed amounts for payments. Follows the format MONTO1&MONTO2&...&MONTO-N. |
| `monto_min` | Determines the minimum recharge amount that can be sent. |
| `tipo_dato` | Defines the type of data asked from the customer for the recharge.<br>`CEL`: Phone number.<br>`TEL`: Phone number.<br>`RUT`: ID number. |
| `id` | Product identifier. |
| `largo_telefono` | Length of the data used to identify the customer (referred to as "telefono" regardless of whether it's a phone number or ID). |
| `operador` | Operator associated with the recharge. |
| `nombre` | Name of the product to be displayed on the screen. |
| `monto_max` | Determines the maximum recharge amount that can be sent. |
| `mensaje` | Response status. |

