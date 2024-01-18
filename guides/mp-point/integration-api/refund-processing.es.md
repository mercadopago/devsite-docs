# Procesar reembolsos

Un reembolso es una transacción que se realiza cuando un determinado cargo se revierte y la cantidad pagada se devuelve al comprador. Esto significa que el cliente recibirá en su cuenta o en el extracto de su tarjeta el monto pagado por la compra de un determinado producto o servicio.

Cuando realizas una integración Point vía API para Punto de Venta, puedes realizar reembolsos de dos maneras:  
 * **Utilizando tu dispositivo Point:**  siempre y cuando se trate de transacciones recientes, puedes buscar los pagos realizados, seleccionar aquel que desees reembolsar, y seguir las indicaciones del dispositivo para hacerlo.
 * **Utilizando nuestra API:** te permitirá reembolsar transacciones que el dispositivo no despliega, además de un mayor control sobre la operación.

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

De ser exitoso, el intento devolverá un `id` de la intención y su estado. Ten en cuenta que las intenciones de reembolso son la base para el procesamiento de reembolsos con dispositivos Point. Por este motivo, es importante que registres y guardes los datos obtenidos en su creación, especialmente su `id`.

> WARNING
>
> Importante
>
> La intención de reembolso sólo podrá ser creada para el dispositivo en el que fue procesado el pago y para el usuario que efectuó la transacción. 

Puedes [crear una intención de reembolso](/developers/es/reference/integrations_api/_point_integration-api_devices_deviceid_refund/post) y asignarla a tu dispositivo Point mediante el siguiente llamado: 

``` curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/refund' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "payment_id": "68316255058",
     "additional_info": {
        "print_on_terminal": [ "SELLER_TICKET", "BUYER_TICKET"]
    }
}'

```

Deberás enviar los campos señalados a continuación siguiendo su descripción:

| Campo  | Descripción | Valores posibles | Requerido/no requerido |
|:---:|:---:|:---:|:---:|
| `payment_id` | Identificador del pago que se está queriendo reembolsar.  | String numérico. Por ejemplo, *65412345*. | Requerido |
| `print_on_terminal` | Campo para determinar si el dispositivo imprime el comprobante, sea para el vendedor o para el comprador. | `SELLER_TICKET`: Imprime el ticket para el vendedor<br>`BUYER_TICKET`: Imprime el ticket para el comprador | No requerido |


Como respuesta, recibirás algo similar a esto: 

``` json
{
  "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93647810056",
   "device_id": "PAX_A910__SMARTPOS1490451054",	
   "additional_info": {
       "print_on_terminal": [
           "SELLER_TICKET",
           "BUYER_TICKET"
       ]
   }
}
```

## Procesar intención de reembolso

Una vez creada la intención de reembolso, puedes obtenerla desde tu dispositivo Point oprimiendo el botón para iniciar la transacción (en caso de Point Plus y Point Pro 2, el **botón verde**, y en el caso de Point Smart, el botón digital **Actualizar**).

## Consultar el estado de una intención de reembolso

Si deseas saber el estado de una intención de reembolso en particular, puedes [consultar su estado actual](/developers/es/reference/integrations_api/_point_integration-api_refund_refundintentid/get) utilizando el `id` que recibiste en la respuesta al momento de crearla.

Recuerda que `id` y estado de la intención de reembolso (por ejemplo, *75j8sfa-euu6-4x56-slk8-a341f71ba2f1*) son diferentes a `id` del pago y estado del reembolso (por ejemplo, *65412345*). En este caso, se trata de consultar los detalles de un intento.

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
   "payment_id": "93647810056",
   "state": "FINISHED"
   "additional_info": {
       "print_on_terminal": [ "SELLER_TICKET", "BUYER_TICKET" ]
   },
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