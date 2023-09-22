# Consultar uma intenção de pagamento

Para verificar o status atual de uma intenção de pagamento feita anteriormente, você tem duas opções:

1. Usar o parâmetro `callback` na solicitação para criar uma intenção de pagamento (**recomendado**).

2. Se o callback não responder dentro de um minuto após a criação da intenção de pagamento, você pode fazer uma chamada `GET` para `{https://api-dev.redelcom.cl:20010/v2}/pago?rdcTransactionId={rdcTransactionId}`, substituindo `{rdcTransactionId}` pelo valor obtido na resposta à criação da intenção de pagamento que você deseja verificar, e `X-Authentication`, `clientId` e `secret` pelas suas credenciais.


```curl
curl -X GET \
'https://api-dev.redelcom.cl:20010/v2/pago?rdcTransactionId={rdcTransactionId}' \
--header 'X-Authentication: clientId;secret'

```

Aqui está um exemplo de resposta a esta solicitação. Observe que alguns campos podem variar dependendo das características do pagamento.


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


| Campo                                 | Descrição                                                                                       |
|---------------------------------------|---------------------------------------------------------------------------------------------------|
| `Estado`                              | Indica se a transação foi bem-sucedida (`APROBADO`) ou não (`RECHAZADO`).              |
| `Total`                               | Valor total para o qual a transação foi feita.                                                   |
| `Propina`                             | Valor da gorjeta dada na transação, se aplicável.                                           |
| `Medio_pago`                          | Método de pagamento usado para a transação.                                                             |
| `CODAUT`                              | Código de autorização para a transação.                                                              |
| `fecha&hora`                          | Data e hora em que a transação foi realizada, no formato AAAAMMDD&HHMMSS.                            |
| `mensaje_visor`                       | Mensagem exibida na tela do dispositivo indicando o status da transação.                         |
| `mensaje_premio`                      | Caso a transação seja premiada, ela virá na forma de um voucher.                         |
| `datos_adquirencia_cliente`            | Dados transacionais necessários para imprimir a cópia do cliente do voucher.                               |
| `datos_adquirencia_cliente_imprimir`   | Contém o texto de aquisição do cliente impresso no dispositivo, no formato de voucher.                            |
| `datos_adquirencia_comercio`           | Dados transacionais necessários para imprimir a cópia do comerciante do voucher.                               |
| `datos_adquirencia_comercio_imprimir`  | Este campo contém o texto de aquisição do comerciante impresso no dispositivo, no formato de voucher.                  |
| `BOLETA`                              | Dados associados ao recibo eletrônico, serão retornados se a Redelcom lidar com a geração e impressão de recibos e faturas. |
| `FACTURA`                             | Dados associados à fatura eletrônica, serão retornados se a Redelcom lidar com a geração e impressão de recibos e faturas. |


Aqui está uma lista de possíveis códigos de status que esta resposta pode retornar:

| Código | Status                              |
|------|-------------------------------------|
| 200  | Transação de pagamento concluída.     |
| 204  | Solicitação de pagamento pendente.           |
| 400  | DTE inválido enviado.                 |
| 401  | Autenticação inválida ou inexistente. Verifique suas credenciais. |
| 404  | Solicitação de pagamento inexistente. Você pode verificar o `TransactionId` enviado. |
