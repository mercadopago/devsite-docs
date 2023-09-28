# Exemplos de respostas

Abaixo, você pode encontrar vários exemplos de respostas para a criação de intenções na integração local do RDCPass, juntamente com uma descrição de cada parâmetro recebido.

## Exemplo de resposta para a criação de uma intenção de pagamento

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


| Campo | Descrição | Dados |
|---|---|---|
| `ESTADO` (String) | O resultado final da transação. | `APROBADO` ou `RECHAZADO` |
| `TOTAL` (String) | Valor total da transação (inclui gorjeta). |  |
| `PROPINA` (String) | Valor indicado como gorjeta ao criar a intenção. |  |
| `MEDIO_PAGO` (String) | Método de pagamento usado na transação. |  |
| `CODAUT` (String) | Código de autorização da transação. Será retornado se o status da transação for `APROBADO`, caso em que o número não deve se repetir. |  |
| `FECHA&HORA` (String) | Data e hora em que a transação foi realizada. Será retornado se o status for `APROBADO`. | Formato: "AAAAMMDD&hhmmss" |
| `MENSAJE_VISOR` (String) | A resposta fornecida pelo servidor de transação. Essa resposta é a mensagem que deve ser exibida durante a transação. |  |
| `MENSAJE_PREMIO` (String) | Corresponde a uma transação premiada. Vem em formato de voucher, pronto para ser impresso pelo aplicativo. Será retornado se o status for `APROBADO` e, se existir, sempre deve ser impresso. |  |
| `DATOS_ADQUIRENCIA_CLIENTE` (JSONObject) | Dados obtidos da transação para gerar a cópia do cliente. Vem em formato de voucher, pronto para ser impresso pelo aplicativo. Será retornado se a transação for feita com cartão como método de pagamento e deve sempre ser impresso ou entregue ao cliente de alguma forma. | "RETAILER_ID" - "FECHA&HORA" - "TERMINAL"  -  “NUM_TARJETA”  -  "TOTAL” - “PROPINA” -  “NUM_OPER” - “COD_AUTO” - “NUM_UNICO” - “TIPO_TARJETA” - "TIPO_LECTURA" - “NUM_CUOTAS” |
| `DATOS_ADQUIRENCIA_CLIENTE_IMPRIMIR` (String) | Dados de aquisição do cliente, em formato de voucher, pronto para ser impresso pelo aplicativo. Será retornado apenas para pagamentos com cartão. |  |
| `DATOS_ADQUIRENCIA_COMERCIO` (JSONObject) | Dados obtidos da transação para gerar a cópia do comerciante. Esses devem sempre ser impressos como backup para o operador. Será retornado apenas para pagamentos com cartão. | "RETAILER_ID" - "FECHA&HORA" - "TERMINAL” - “NUM_TARJETA” - "NUM_CUENTA" - "TOTAL” - “PROPINA” - “NUM_OPER” - “COD_AUTO” - “NUM_UNICO” - “TIPO_TARJETA” - "TIPO_LECTURA"  |
| `DATOS_ADQUIRENCIA_COMERCIO_IMPRIMIR` (String) | Dados de aquisição do comerciante, em formato de voucher, pronto para ser impresso pelo aplicativo. Será retornado apenas para pagamentos com cartão. |  |
| `BOLETA` (JSONObject) | Dados associados ao recibo eletrônico, serão retornados se a Redelcom lidar com a geração e impressão de recibos e faturas. | “RUBRO” - “DIRECCION” - “SUCURSAL” - “CAF” - “TED” |
| `FACTURA` (JSONObject) | Dados associados à fatura eletrônica, serão retornados se a Redelcom lidar com a geração e impressão de recibos e faturas. | “DTE”  - “ENCABEZADO”  - “EMISOR”  - “RECEPTOR” - “TOTALES” - “DETALHES”  |

Por favor, note que se algum campo não corresponder ou não conter dados, ele será retornado com um valor `null`.


## Exemplo de resposta para consulta de pagamento de contas


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


| Parâmetro | Descrição |
|---|---|
| `estatus` | Status da resposta. Valores possíveis: <br>`ok`: Novos dados recebidos com sucesso.<br>`SD`: Dados previamente existentes foram encontrados. |
| `codaut` | Uma sequência de 32 caracteres que identifica a versão do JSON enviado. Somente necessário para atualizar o banco de dados quando esse valor mudar. |
| `datos` | Lista de todas as contas que podem ser pagas. Caso o valor de `codaut` corresponda a uma consulta anterior, esse parâmetro estará vazio. |
| `rubro` | Classificação do tipo de serviço a ser pago. |
| `meta_rubro` | Agrupamento das classificações de serviço. |
| `rubro_id` | Identificador numérico da classificação. |
| `descripcion` | Descrição do serviço. Este é um parâmetro opcional que pode retornar uma resposta vazia. |
| `nombre` | Nome do serviço a ser exibido na tela. |
| `company` | Nome da empresa que receberá o pagamento. |
| `datos_captura` | Indica o tipo de dados a serem inseridos em linguagem natural. Segue o formato NÚMERO=DESCRIÇÃO DO TIPO DE DADOS=NÚMERO. |
| `montos` | Algumas empresas definem valores fixos para pagamentos. Segue o formato VALOR1&VALOR2&...&VALOR-N. |
| `id` | Identificador numérico do serviço a ser pago. |


## Exemplo de resposta para consulta de empresas de telecomunicações


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


| Parâmetro | Descrição |
|---|---|
| `Estatus` | Status da resposta. Valores possíveis: <br>`ok`: Novos dados recebidos com sucesso.<br>`SD`: Dados previamente recebidos foram confirmados. |
| `codaut` | Uma sequência de 32 caracteres que identifica a versão do JSON enviado. Somente necessário para atualizar o banco de dados quando esse valor mudar. |
| `datos` | Lista de todos os produtos que podem ser pagos. Se o valor de `codaut` corresponder a uma consulta anterior, esse parâmetro é recebido vazio. |
| `secuencia` | Número inteiro que indica a ordem de exibição recomendada das empresas em sua aplicação (ordem ascendente). |
| `categoria_id` | Indica o tipo de recarga associado a um código.<br>`RCEL`: Recargas de celular.<br>`RBA`: Pagamentos e recargas para internet banda larga ou fibra.<br>`ROT`: Outros tipos de recargas. |
| `montos` | Algumas empresas definem valores fixos para pagamentos. Segue o formato MONTO1&MONTO2&...&MONTO-N. |
| `monto_min` | Determina o valor mínimo de recarga que pode ser enviado. |
| `tipo_dato` | Define o tipo de dado solicitado ao cliente para a recarga.<br>`CEL`: Número de celular.<br>`TEL`: Número de telefone.<br>`RUT`: Número de identificação. |
| `id` | Identificador do produto. |
| `largo_telefono` | Comprimento dos dados usados para identificar o cliente (chamado de "telefone", independentemente de ser um número de telefone ou número de identificação). |
| `operador` | Operadora associada à recarga. |
| `nombre` | Nome do produto a ser exibido na tela. |
| `monto_max` | Determina o valor máximo de recarga que pode ser enviado. |
| `mensaje` | Status da resposta. |

