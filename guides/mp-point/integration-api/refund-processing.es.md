# Procesar reembolsos

Un reembolso es una transacción que se realiza cuando un determinado cargo se revierte y la cantidad pagada se devuelve al comprador. Esto significa que el cliente recibirá en su cuenta o en el extracto de su tarjeta el monto pagado por la compra de un determinado producto o servicio.

Al elegir la integración Point vía API para Punto de Venta, cuentas con tres opciones para realizar reembolsos de manera eficiente:

1. **A través del Dispositivo Point:**
    * Reembolsa transacciones recientes directamente desde tu dispositivo Point por su valor total. 
    * Deberás buscar los pagos realizados, seleccionar la transacción y seguir las indicaciones del dispositivo.
2. **A través de la API de Payments:**
    * Realiza devoluciones totales o parciales de cualquier tipo de pago utilizando el recurso de reembolsos de la [API de Payments](/developers/es/reference/chargebacks/_payments_id_refunds/post).
3. **A través de nuestra API para dispositivos Point**:
    * Reembolsa transacciones cuya antigüedad sea de hasta 90 días por su valor total.
    * El procesamiento del reembolso se lleva adelante en los dispositivos Point, lo que te permitirá imprimir comprobantes y realizar devoluciones de pagos efectuados con tarjeta presente.
    * Recibe notificaciones vía Webhook al completar el ciclo del intento de reembolso.

Puedes elegir la opción de reembolso que mejor se adapte a tus necesidades. Sin embargo, recomendamos utilizar nuestra API para dispositivos Point en los casos en los que se requiera la **impresión de tickets de reembolso, o bien realizar reembolsos aproximando la tarjeta al dispositivo**. 


----[mlb]----

> WARNING
>
> Importante
>
> El procesamiento de reembolsos sólo está disponible para dispositivos Point Pro 2.
------------

Para realizar reembolsos vía API deberás, primero, crear una intención de reembolso, y luego procesarla. Adicionalmente, puedes consultar el estado de una intención de reembolso o cancelarla. Continúa leyendo para saber cómo llevar adelante cada operación.

## Crear intención de reembolso

Una intención de reembolso es un llamado que contiene los detalles de la transacción a realizarse, y que debe ser creada para poder iniciar el reembolso de un pago realizado anteriormente vía API.  

De ser exitoso, el intento devolverá un `ID` de la intención y su estado. Ten en cuenta que las intenciones de reembolso son la base para el procesamiento de reembolsos con dispositivos Point. Por este motivo, es importante que registres y guardes los datos obtenidos en su creación, especialmente su `ID`.

> WARNING
>
> Importante
>
> La intención de reembolso sólo podrá ser creada para el dispositivo en el que fue procesado el pago y por el usuario que efectuó la transacción. 

Puedes [crear una intención de reembolso](/developers/es/reference/integrations_api/_point_integration-api_devices_deviceid_refund/post) y asignarla a tu dispositivo Point enviando el `payment_id` del pago que estás queriendo reembolsar en el siguiente llamado: 

``` curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/refund' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "payment_id": "93921210001"
}'

```


Como respuesta, recibirás algo similar a esto: 

``` json
{
  "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93921210001",
   "device_id": "PAX_A910__SMARTPOS1490451054"
}
```

## Procesar intención de reembolso

Una vez creada la intención de reembolso, puedes obtenerla desde tu dispositivo Point. Para eso, inicia la transacción oprimiendo el botón correspondiente: en caso de Point Plus y Point Pro 2, el **botón verde**, y en el caso de Point Smart, el botón digital **Actualizar**.

## Consultar el estado de una intención de reembolso

Si deseas saber el estado de una intención de reembolso en particular, puedes [consultar su estado actual](/developers/es/reference/integrations_api/_point_integration-api_refund_refundintentid/get) utilizando el `ID` que recibiste en la respuesta al momento de crearla.

Recuerda que `ID` y estado de la intención de reembolso (por ejemplo, *75j8sfa-euu6-4x56-slk8-a341f71ba2f1*) son diferentes a `ID` del pago y estado del reembolso (por ejemplo, *65412345*). En este caso, se trata de consultar los detalles de un intento.

> WARNING
>
> Importante
>
> El mecanismo principal recomendado para conocer el resultado de una intención de pago es la suscripción a las [notificaciones de integraciones](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/notifications). Aconsejamos utilizar el endpoint aquí presente sólo como mecanismo alternativo.

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/refund/{intentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

Recibirás una respuesta similar a la siguiente:

``` json
{
   "device_id": "GERTEC_MP35P__8701012142072431",
   "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93921210001",
   "state": "FINISHED"
}
```

Puedes consultar los estados posibles de una intención de pago accediendo a nuestro [Glosario](/developers/es/docs/mp-point/integration-api/glossary).


## Cancelar una intención de reembolso

Si lo deseas, puedes cancelar una intención de reembolso asignada a un dispositivo Point, siempre y cuando el estado de la intención sea `open` y todavía no haya sido enviada al dispositivo.

Si se cumplen estos requisitos, puedes [cancelar una intención de reembolso vía API](/developers/es/reference/integrations_api/_point_integration-api_devices_deviceid_refund_refundintentid/delete) realizando el siguiente llamado:

``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/refund/{intentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \

```

Si la ejecución fue exitosa, obtendrás una respuesta como la siguiente:

``` json
{
  "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1"
}

```

> NOTE
>
> Nota
>
> El único caso en el que es posible cancelar una intención de reembolso en estado `on_terminal` es si se trata de un reembolso a realizarse en una tarjeta sin contacto. El dispositivo esperará, o bien que se acerque la tarjeta para confirmar el reembolso, o bien que el operador cancele el intento.