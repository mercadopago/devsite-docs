# Ejemplos de respuesta

A continuación, puedes consultar distintos ejemplos de respuesta a la creación de intenciones dentro de la integración local de RDCPass, junto con la descripción de cada parámetro recibido.

## Ejemplo de respuesta para creación de una intención de pago


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


| Campo | Descripción | Datos |
|---|---|---|
| `ESTADO` (String) | Es el resultado final de la transacción.  | `APROBADO` o `RECHAZADO` |
| `TOTAL` (String) | Monto total de la transacción (incluye propina). |  |
| `PROPINA` (String) | Monto indicado como propina al crear la intención. |  |
| `MEDIO_PAGO` (String) | Medio de pago utilizado en la transacción. |  |
|  `CODAUT` (String) | Código de autorización de la transacción. Será devuelto si el estado de la transacción es `APROBADO`, en cuyo caso el número no debería repetirse. |  |
| `FECHA&HORA` (String) | Fecha y hora en la cual se realizó la transacción. Será devuelto en caso de que su estado sea `APROBADO`. | formato “AAAAMMDD&hhmmss” |
| `MENSAJE_VISOR` (String) | Es la respuesta entregada por el servidor de la transacción.  Esta respuesta es el mensaje que se debe desplegar al realizar la transacción. |  |
| `MENSAJE_PREMIO` (String) | Corresponde a una  transacción premiada. Viene en formato de voucher, lista para ser impresa por la  aplicación. Será devuelta en el caso de que el estado sea `APROBADO` y, de existir, siempre debe ser impresa.  |  |
| `DATOS_ADQUIRENCIA_CLIENTE` (JSONObject) | Son los datos obtenidos de la  transacción para generar la copia cliente. Vienen en formato de voucher, listos para  ser impresos por la aplicación. Será devuelto Si la transacción se realizó con tarjeta como medio de pago, y siempre deben ser impresos o entregados de  alguna forma al cliente. | "RETAILER_ID” - "FECHA&HORA" - "TERMINAL"  -  “NUM_TARJETA”  -  "TOTAL” - “PROPINA” -  “NUM_OPER” - “COD_AUTO” - “NUM_UNICO” - “TIPO_TARJETA” - "TIPO_LECTURA" - “NUM_CUOTAS” |
| `DATOS_ADQUIRENCIA_CLIENTE_IMPRIMIR` (String) | Datos de  adquirencia del cliente, vienen en formato de voucher, listos para ser impresos por la  aplicación. Será devuelto sólo en caso de pagos con tarjeta. |  |
| `DATOS_ADQUIRENCIA_COMERCIO` (JSONObject) | Datos obtenidos de la  transacción para generar la copia comercio. Estos siempre deben ser impresos como  respaldo para el operador. Será devuelto sólo en caso de pagos con tarjeta. | "RETAILER_ID” - "FECHA&HORA" - "TERMINAL” - “NUM_TARJETA” - "NUM_CUENTA" - "TOTAL” - “PROPINA” - “NUM_OPER” - “COD_AUTO” - “NUM_UNICO” - “TIPO_TARJETA” - "TIPO_LECTURA"  |
| `DATOS_ADQUIRENCIA_COMERCIO_IMPRIMIR` (String) | Datos de  adquirencia del comercio, vienen en formato de voucher, listos para ser impresos por  la aplicación. Será devuelto sólo en caso de pagos con tarjeta. |  |
| `BOLETA` (JSONObject) | Datos asociados a la boleta electrónica, será devuelto en caso de que Redelcom sea quien maneje la generación e impresión de boletas y facturas. | “RUBRO” - “DIRECCION” - “SUCURSAL” - “ CAF” - “TED” |
| `FACTURA` (JSONObject) | Datos asociados a la factura electrónica, será devuelto en caso de que Redelcom sea quien maneje la generación e impresión de boletas y facturas. | “DTE”  - “ENCABEZADO”  - “EMISOR”  - “RECEPTOR” - “TOTALES” - “DETALLES”  |


Ten en cuenta que, en caso de que algún campo no corresponda o no  contenga datos, será devuelto con el valor `null`.


## Ejemplo de respuesta para consulta de pago de cuentas


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

| Parámetro | Descripción |
|---|---|
| `Estatus` | Estado de la respuesta. Valores posibles: <br>`ok`: se recibieron nuevos datos exitosamente.<br>`SD`: se comprobó que ya se tenían datos previos. |
| `codaut` | Cadena de 32 caracteres que identifica la versión del JSON enviado. Sólo es<br>necesario actualizar la base de datos cuando este valor cambie. |
| `datos` | Lista de todas las cuentas que se pueden pagar. En caso de que el valor codaut<br>coincida con una consulta previa, este parámetro es recibido vacío. |
| `rubro` | Clasificación del tipo de servicio a pagar. |
| `meta_rubro` | Agrupación de clasificaciones de los servicios. |
| `rubro_id` | Identificador numérico del rubro. |
| `descripcion` | Descripción del servicio. Es un parámetro opcional que puede arrojar una respuesta vacía. |
| `nombre` | Nombre del servicio que se debe mostrar en pantalla. |
| `company` | Nombre de la empresa que recibirá el pago. |
| `datos_captura` | Señala el tipo de dato que hay que ingresar en lenguaje natural. Sigue el formato NUMERO=DESCRIPCIÓN DEL TIPO DE DATO=NUMERO. |
| `montos` | Algunas compañías definen montos fijos para realizar pagos. Sigue el formato MONTO1&MONTO2&...&MONTO-N. |
| `id` | Identificador numérico del servicio a pagar. |



## Ejemplo de respuesta para consulta de compañías de telecomunicaciones


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

| Parámetro | Descripción |
|---|---|
| `Estatus` | Estado de la respuesta. Valores posibles: <br>`ok`: se recibieron nuevos datos exitosamente.<br>`SD`: se comprobó que ya se tenían datos previos. |
| `codaut` | Cadena de 32 caracteres que identifica la versión del JSON enviado. Sólo es necesario actualizar la base de datos cuando este valor cambie. |
| `datos` | Lista de todas los productos que se pueden pagar. En caso de que el valor codauts coincida con una consulta previa, este parámetro es recibido vacío. |
| `secuencia` | Número entero que indica el orden en el que se recomienda que se muestren las compañías en su aplicación (orden ascendente). |
| `categoria_id` | Indica el tipo de recarga, que está asociada a un código.<br>`RCEL`: Recargas móviles.<br>`RBA`: Pagos y recargas de internet de fibra o banda ancha.<br>`ROT`: Otros tipos de recarga. |
| `montos` | Algunas compañías definen montos fijos para realizar pagos. Sigue el formato MONTO1&MONTO2&...&MONTO-N. |
| `monto_min` | Determina el monto mínimo de recarga que se puede enviar. |
| `tipo_dato` | Define el tipo de dato que se le pregunta al cliente para recargar.<br>`CEL`: Número de teléfono.<br>`TEL`: Número de teléfono.<br>`RUT`: número de rut. |
| `id` | Identificador del producto. |
| `largo_telefono` | Largo del dato usado para identificar al cliente (se llama así independiente de si es RUT o teléfono). |
| `operador` | Operador asociado a la recarga. |
| `nombre` | Nombre del producto que se debe mostrar en pantalla. |
| `monto_max` | Determina el monto máximo de recarga que se puede enviar. |
| `mensaje` | Estado de la respuesta. |
