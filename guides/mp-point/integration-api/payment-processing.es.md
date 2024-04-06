#  Procesar pagos

Sigue los pasos a continuación para comenzar a procesar tus pagos con Punto de Venta (PDV).

## Obtener el listado de dispositivos disponibles

Antes de crear una intención de pago, debes [obtener los dispositivos Point](/developers/es/reference/integrations_api/_point_integration-api_devices/get) asociados a tu cuenta. Puedes hacerlo a través del siguiente llamado:

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/devices?offset=0&limit=50' \ 
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' 
```

Recibirás una respuesta como esta:

----[mla]----
```json
{
    "devices": [
        {
            "id": "PAX_A910__SMARTPOS1234345545",
            "pos_id": 47792476,
            "store_id": "47792479",
            "external_pos_id": "SUC0101POS",
            "operating_mode": "PDV"
        },
        {
            "id": "INGENICO_MOVE2500__ING-ARG-12348394345",
            "pos_id": 47792476,
            "store_id": "47792476",
            "external_pos_id": "SUC0102POS",
            "operating_mode": "STANDALONE"
        },
        {
            "id": "INGENICO_MOVE2500__ING-ARG-4782743403",
            "operating_mode": "PDV",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0103POS",
        },
        {
            "id": "PAX_A910__SMARTPOS849233453",
            "pos_id": 47792476,
            "store_id": "47792472",
            "external_pos_id": "SUC0104POS",
            "operating_mode": "STANDALONE"
        }
    ],
    "paging": {
        "total": 4,
        "limit": 50,
        "offset": 0
    }
}

```

------------
----[mlb]----
```json
{
    "devices": [
        {
            "id": "PAX_A910__SMARTPOS1234345545",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0101POS",
            "operating_mode": "PDV"
        },
        {
            "id": "GERTEC_MP35P__5749748758974567",
            "pos_id": 47792476,
            "store_id": "47792474",
            "external_pos_id": "SUC0102POS",
            "operating_mode": "STANDALONE"
        },
        {
            "id": "GERTEC_MP35P__5743245346764567",
            "operating_mode": "PDV",
            "pos_id": 47792476,
            "store_id": "47792471",
            "external_pos_id": "SUC0103POS",
        },
        {
            "id": "PAX_A910__SMARTPOS849233453",
            "pos_id": 47792476,
            "store_id": "47792479",
            "external_pos_id": "SUC0104POS",
            "operating_mode": "STANDALONE"
        }
    ],
    "paging": {
        "total": 4,
        "limit": 50,
        "offset": 0
    }
}
```
------------
----[mlm]----
```json
{
    "devices": [
        {
            "id": "PAX_A910__SMARTPOS1234345545",
            "pos_id": 47792476,
            "store_id": "47792476",
            "external_pos_id": "SUC0101POS",
            "operating_mode": "PDV"
        },
        {
            "id": "PAX_A910__SMARTPOS13453456546",
            "pos_id": 47792476,
            "store_id": "47792477",
            "external_pos_id": "SUC0102POS",
            "operating_mode": "STANDALONE"
        },
        {
            "id": "PAX_A910__SMARTPOS1344567435646",
            "operating_mode": "PDV",
            "pos_id": 47792476,
            "store_id": "47792478",
            "external_pos_id": "SUC0103POS",
        },
        {
            "id": "PAX_A910__SMARTPOS849233453",
            "pos_id": 47792476,
            "store_id": "47792479",
            "external_pos_id": "SUC0104POS",
            "operating_mode": "STANDALONE"
        }
    ],
    "paging": {
        "total": 4,
        "limit": 50,
        "offset": 0
    }
}
```
------------

## Crear la intención de pago

Una intención de pago es un llamado que contiene los detalles de la transacción a realizarse, y que debe ser creada para poder iniciar un cobro. Se trata de un intento que, de ser exitoso, devolverá un `id` del pago y su estado.

----[mla]----
Puedes [crear una intención de pago](/developers/es/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents/post) y asignarla a tu dispositivo Point de esta manera:

```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
   "amount": 1500,
   "additional_info": {
       "external_reference": "4561ads-das4das4-das4754-das456",
       "print_on_terminal": true,
       "ticket_number": "S0392JED"
   }
}'
```

| Campo | Descripción |
|---|---|
| `amount` | Monto total de la intención de pago. <br>**Importante**: este campo no admite puntos decimales. Si deseas generar una intención de pago, debes contemplar los dos decimales del valor en su total. Por ejemplo: para generar orden de pago de valor "15,00" deberás ingresar "1500". |
| `external_reference` | Campo de uso exclusivo del integrador para incluir referencias propias de su sistema. |
| `print_on_terminal` | Campo que determina si el dispositivo realiza la impresión del comprobante de pago. |
| `ticket_number` | Número de ticket de la intención de pago. |

Como respuesta, recibirás algo similar a esto:

```json
{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id": "INGENICO_MOVE2500__ING-ARG-14886780",
  "amount": 1500,
  "additional_info": {
      "external_reference": "4561ads-das4das4-das4754-das456",
      "print_on_terminal": true,
      "ticket_number": "S0392JED"
  }
}
```
------------
----[mlb]----
Puedes [crear una intención de pago](/developers/es/reference/integrations_api_paymentintent_mlb/_point_integration-api_devices_deviceid_payment-intents/post) y asignarla a tu dispositivo Point de esta manera:

```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "amount": 1500,
    "description": “this is an example”,
    "payment": {
      "installments": 1,
      "type": “credit_card”
     },
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true
    }
}'
```

| Campo | Descripción |
|:---:|---|
| `amount` | Monto total de la intención de pago. <br>**Importante**: este campo no admite puntos decimales. Si deseas generar una intención de pago, debes contemplar los dos decimales del valor en su total. Por ejemplo: para generar orden de pago de valor "15,00" deberás ingresar "1500". |
| `description` | Descripción de la intención de pago. |
| `payment.type` | Tipo de método de pago. |
| `payment.installments` | Cantidad de veces en las que se procesa el pago. El valor mínimo de cada cuota debe ser de 5.00 (500). <br>En el caso de dispositivos Smart, si el valor es menor al mínimo aceptado, el pago se procesará de una vez, sin contemplar las cuotas establecidas. |
| `payment.installments_cost` | Costo por las cuotas de pago. Este campo determina quién asume el interés y los valores aceptados son seller y buyer |
| `external_reference` | Campo de uso exclusivo del integrador para incluir referencias propias de su sistema. |
| `print_on_terminal` | Campo que determina si el dispositivo realiza la impresión del comprobante de pago. |

Como respuesta, recibirás algo similar a esto:

```json
{
  "id":"7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id":"GERTEC_MP35P__8701016695109435",
  "amount":1500,
  "description":"this is an example",
  "payment":{
     "type":"credit_card",
     "installments":1,
     "installments_cost":"seller"
  },
  "additional_info":{
     "external_reference":"4561ads-das4das4-das4754-das456",
     "print_on_terminal":true
  }
}
```

------------
----[mlm]----
Puedes [crear una intención de pago](/developers/es/reference/point_apis_mlm/_point_integration-api_devices_deviceid_payment-intents/post) y asignarla a tu dispositivo Point de esta manera:

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "amount": 1500,
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true
    }
}'
```
]]]

| Campo | Descripción |
|:---:|---|
| `amount` | Monto total de la intención de pago. <br>**Importante**: este campo no admite puntos decimales. Si deseas generar una intención de pago, debes contemplar los dos decimales del valor en su total. Por ejemplo: para generar orden de pago de valor "15,00" deberás ingresar "1500". |
| `external_reference` | Campo de uso exclusivo del integrador para incluir referencias propias de su sistema. |
| `print_on_terminal` | Campo que determina si el dispositivo realiza la impresión del comprobante de pago. |

Como respuesta, recibirás algo similar a esto:

[[[
```json

{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id": "PAX_A910__SMARTPOS123456789075",
  "amount": 1500,
  "additional_info": {
      "external_reference": "4561ads-das4das4-das4754-das456",
      "print_on_terminal": true
  }
}
```
]]]

------------

Ten en cuenta que las intenciones de pago son la base para el procesamientos de pagos con dispositivos Point. Por este motivo, es importante que registres y guardes los datos obtenidos en su creación, especialmente su `id`.


## Procesar intención de pago

Una vez creada la intención de pago, puedes obtenerla desde tu dispositivo Point oprimiendo el botón para iniciar cobro (en caso de Point Plus y Point Pro 2, el **botón verde**, y en el caso de Point Smart, el **botón digital “Cobrar”**).

Luego, continúa con los pasos que se muestran en la pantalla para completar el pago.

> NOTE
>
> Importante
>
> Recomendamos evaluar la [calidad de tu integración](/developers/es/docs/mp-point/how-tos/integration-quality) para validar si estás cumpliendo con los estándares de calidad y seguridad de Mercado Pago que pueden mejorar tu tasa de aprobación de pagos. 

## Consultar el estado de una intención de pago

Si deseas saber el estado de una intención de pago en particular, puedes ----[mla, mlb]----[consultar el estado actual de tu intención de pago](/developers/es/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get)------------ ----[mlm]----[consultar el estado actual de tu intención de pago](/developers/es/reference/point_apis_mlm/_point_integration-api_payment-intents_paymentintentid/get)------------ utilizando el `id` que recibiste en la respuesta al momento de crearla.

----[mla, mlb, mlm]----
> WARNING
>
> Atención
> 
> Tenga en cuenta que solo es posible **verificar el estado de una intención de pago que haya sido creada hace, como máximo, 3 meses**. Asegúrate de utilizar el identificador (`id`) correspondiente al intento de pago que esté dentro de este período. Si necesitas información sobre intenciones de pago más antiguas, te recomendamos que contactes con nuestro servicio de atención al cliente para obtener asistencia adicional.
------------

Recuerda que `id` y estado de la intención de pago (por ejemplo, _7f25f9aa-eea6-4f9c-bf16-a341f71ba2f1_)son diferentes a `id` y estado del pago (por ejemplo, _65412345_). En este caso, se trata de consultar los detalles de un intento. Si quieres consultar la información correspondiente al pago, accede a la sección [API de Pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) en Referencia de API. 

> WARNING
>
> Importante
>
> El mecanismo principal recomendado para conocer el resultado de una intención de pago es la suscripción a las [notificaciones de integraciones](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/notifications). Aconsejamos utilizar el endpoint aquí presente sólo como mecanismo alternativo.

----[mlm]----

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' 
```
------------

----[mla, mlb]----

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```
------------

Recibirás una respuesta similar a la siguiente:

----[mlb]----
``` json
{
   "state":"FINISHED",
   "id":"f8f50814-a8c5-4524-95b6-672958523121",
   "device_id":"GERTEC_MP35P__8701016695109435",
   "description":"this is an example",
   "amount":1500,
   "payment":{
      "type":"credit_card",
      "installments":1
   },
   "additional_info":{
      "external_reference":"4561ads-das4das4-das4754-das456",
      "print_on_terminal":true
   }
}
```

------------
----[mla]----

``` json
{
    "state": "FINISHED",
    "id": "0aa0519d-d985-4e83-b62d-dda123456789",
    "device_id": "INGENICO_MOVE2500_ING-ARG-14123456",
    "amount": 600,
    "payment": {
        "id": "11123456789"
    },
    "additional_info": {
        "ticket_number": "123456789123456789"
    }
}
```

------------
----[mlm]----

[[[
```json

{
    "state": "FINISHED",
    "id": "0aa0519d-d985-4e83-b62d-dda123456789",
    "device_id": "PAX_A910__SMARTPOS1234567890123",
    "amount": 600,
    "payment": {
        "id": "11123456789"
    },
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456"
    }
}
```
]]]

------------

> WARNING
>
> Importante
>
> `Confirmation_required` es un estado final y no cambiará una vez recibido. Si efectivamente lo recibes en el estado de la intención, deberás confirmar en tu dispositivo cuál es el estado del pago que se corresponde con el  `payment_id` recibido en la respuesta. No entregues tu producto o servicio hasta verificarlo.

Puedes consultar los estados posibles de una intención de pago accediendo a nuestro [Glosario](/developers/es/docs/mp-point/integration-api/glossary).

## Cancelar una intención de pago

Si lo desea, puede cancelar una intención de pago asignada a un dispositivo Point según el estado de la intención de pago. Consulte más información a continuación.

### Status: open

Si el estado de la intención es `open` y todavía no fue enviada a la terminal, puedes [cancelarlo vía API](/developers/es/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents_paymentintentid/delete) realizando el siguiente llamado:

``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/payment-intents/{paymentintentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
```

El llamado devolverá la siguiente respuesta:

``` json
{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca"
}
```

### Status: on_terminal

Si, en cambio, el estado de la intención de pago es `on_terminal`, deberás realizar la cancelación directamente desde el dispositivo Point. Para hacerlo, sigue las indicaciones a continuación.

----[mlm]----
- **Point Smart**: en el dispositivo, mantén presionado el **botón inferior derecho** durante unos segundos y, cuando aparezca el mensaje indicando si deseas salir de la pantalla sin finalizar el cobro, haz clic en **sí**.
- **Point Air**:
- **Point Blue**:

------------
----[mlb]----
- **Point Smart**: en el dispositivo, mantén presionado el **botón inferior derecho** durante unos segundos y, cuando aparezca el mensaje indicando si deseas salir de la pantalla sin finalizar el cobro, haz clic en **sí**.
- **Point Pro 2**: en el dispositivo, mantén presionado el **botón rojo** durante unos segundos y, cuando aparezca el mensaje indicando si deseas salir de la pantalla sin finalizar la cobranza, haz clic en **sí**.
- **Point Mini NFC 1**:
- **Point Mini Chip**:

------------
----[mla]----
- **Point Smart**: en el dispositivo, mantén presionado el **botón inferior derecho** durante unos segundos y, cuando aparezca el mensaje indicando si deseas salir de la pantalla sin finalizar el cobro, haz clic en **sí**.
- **Point Plus**: en el dispositivo, mantén presionado el **botón rojo** durante unos segundos y, cuando aparezca el mensaje indicando si deseas salir de la pantalla sin finalizar la cobranza, haz clic en **sí**.
- **Point Mini**:

------------

> NOTE
>
> Recomendación
>
> Puedes utilizar el [Simulador Point](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/point-simulator) para testear tu integración y la creación de intenciones de pago de manera segura con tu cuenta y credenciales de prueba.