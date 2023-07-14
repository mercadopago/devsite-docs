#  Comienza a procesar tus pagos

Sigue los pasos a continuación para comenzar a procesar tus pagos con Punto de Venta (PDV).

## Obtén el listado de tus dispositivos disponibles

Antes de crear una intención de pago, debes obtener los dispositivos Point asociados a tu cuenta. Puedes hacerlo a través del siguiente llamado:

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/devices?offset=0&limit=50' \ 
--header 'Authorization: Bearer ${ACCESS_TOKEN}' 
```

Recibirás una respuesta como esta:

----[mlb, mla]----

```json
{
   "devices": [
       {
           "id": "INGENICO_MOVE2500__ING-ARG-1123345670",
           "operating_mode": "STANDALONE"
       },
       {
           "id": "INGENICO_MOVE2500__ING-ARG-0987654P",
           "operating_mode": "STANDALONE"
       },
       {
           "id": "INGENICO_MOVE2500__ING-5467853",
           "operating_mode": "PDV"
       },
       {
           "id": "INGENICO_MOVE2500__ING-ARG-1233456",
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
           "id": "PAX_A910__SMARTPOS1234567890",
           "operating_mode": "STANDALONE"
       },
       {
           "id": "PAX_A910__SMARTPOS12345678901",
           "operating_mode": "STANDALONE"
       },
       {
           "id": "INGENICO_MOVE2500__ING-5467853",
           "operating_mode": "PDV"
       },
       {
           "id": "PAX_A910__SMARTPOS123456789042",
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

## Crea la intención de pago
Una intención de pago es un llamado que contiene los detalles de la transacción a realizarse, y que debe ser creada para poder iniciar un cobro. Se trata de un intento que, de ser exitoso, devolverá un `id` del pago y su estado.
Puedes crear una intención de pago y asignarla a tu dispositivo Point de esta manera:

----[mla]----
```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{{device.id}}/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
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
| `amount` | Monto total de la intención de pago.  **Monto mínimo permitido**: 500 (dispositivos POS) y 100 (dispositivos SMART). **Monto máximo permitido**: 400000000 (ambos dispositivos). **Importante**: este campo no admite puntos decimales. Si deseas generar una intención de pago, debes contemplar los dos decimales del valor en su total. Por ejemplo: para generar orden de pago de valor "15,00" deberás ingresar "1500". |
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
```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
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
| `amount` | Monto total de la intención de pago. **Monto mínimo permitido**: 100 (dispositivos POINT y SMART).  **Monto máximo permitido**: 7000000 (ambos dispositivos).  **Importante**: este campo no admite puntos decimales. Si deseas generar una intención de pago, debes contemplar los dos decimales del valor en su total. Por ejemplo: para generar orden de pago de valor "15,00" deberás ingresar "1500". |
| `description` | Descripción de la intención de pago. |
| `payment.type` | Tipo de método de pago. |
| `payment.installments` | Cantidad de cuotas de pago. |
| `payment.installments_cost` | Costo por las cuotas de pago. Este campo determina quién asume el interés y los valores aceptados son seller y buyer |
| `external_reference` | Campo de uso exclusivo del integrador para incluir referencias propias de su sistema. |
| `print_on_terminal` | Campo que determina si el dispositivo realiza la impresión del comprobante de pago. |

Como respuesta, recibirás algo similar a esto:

```json
{
   "id":"7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
   "device_id":"INGENICO_MOVE2500__ING-ARG-14886780",
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

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
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
| `amount` | Monto total de la intención de pago. **Monto mínimo permitido**: 500 (dispositivos SMART).  **Monto máximo permitido**: 35000000.  **Importante**: este campo no admite puntos decimales. Si deseas generar una intención de pago, debes contemplar los dos decimales del valor en su total. Por ejemplo: para generar orden de pago de valor "15,00" deberás ingresar "1500". |
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

## Cancela una intención de pago

Puedes cancelar una intención de pago asignada a un dispositivo Point de la siguiente manera:


``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents/:paymentIntentId' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```

Obtendrás esta respuesta:

``` json
{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca"
}
```

## Procesa tu intención de pago

Una vez creada la intención de pago, puedes obtenerla desde tu dispositivo Point oprimiendo el botón para iniciar cobro (en caso de Point Plus y  Point Pro 2 el **botón verde** y, en el caso de Point Smart, el **botón digital “Cobrar ahora”**).
Luego, continúa con los pasos que se muestran en la pantalla para completar el pago.

> NOTE
>
> Importante
>
> Recomendamos evaluar la [calidad de tu integración](/developers/es/docs/checkout-api/additional-content/integration-quality) para validar si estás cumpliendo con los estándares de calidad y seguridad de Mercado Pago que pueden mejorar tu tasa de aprobación de pagos. 


## Consulta el estado de tu intención de pago

Puedes consultar el estado actual de tu intención de pago utilizando el `id` que recibiste en la respuesta al momento de crearla.
Recuerda que `id` y estado de la intención de pago son diferentes a `id` y estado del pago. En este caso, se trata de consultar los detalles de un intento. Si quieres consultar la información correspondiente al pago, accede a la sección [API de Pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) en Referencia de API. 

> WARNING
>
> Importante
>
> El mecanismo principal recomendado para conocer el resultado de una intención de pago es la suscripción a las [notificaciones de integraciones](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/notifications). Aconsejamos utilizar el endpoint aquí presente sólo como mecanismo alternativo.


``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/:paymentIntentID' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

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
    "device_id": "88731317_INGENICO_MOVE2500_ING-ARG-14123456",
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
> Si en el estado de la intención recibes el valor `confirmation_required`, deberás confirmar en tu dispositivo cuál es el estado del pago que se corresponde con el  `payment_id` recibido en la respuesta. No entregues tu producto o servicio hasta verificarlo.


Puedes consultar los estados posibles de una intención de pago accediendo a nuestro [Glosario](/developers/es/docs/mp-point/integration-api/glossary).

