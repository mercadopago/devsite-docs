# Respuestas de la API

En esta sección encontrarás las posibles respuestas relacionadas con la creación de la validación Zero Dollar Auth, con detalles sobre cada tipo de respuesta, incluyendo casos de éxito y error.


## Respuestas 200 

Al recibir el `Return 200`, que confirma la autorización Zero Dollar Auth para la tarjeta, y el estado indica **"approved"**, se concluye que la validación de la tarjeta se realizó correctamente. Por otro lado, si el estado es **"rejected"**, significa que la validación de la tarjeta no fue posible. Este resultado negativo puede ser causado por diversos factores, como una tarjeta bloqueada o vencida.


> NOTE
>
> Importante
>
> Una transacción con estado `approved` o `rejected` será comunicada a través de una notificación Webhooks.

A continuación, enumeramos el `body` de respuesta para cada uno de los escenarios.

### Tarjeta validada correctamente

- **Status**: approved
- **Descripción**: respuesta que indica el éxito de la creación de la validación Zero Dollar Auth.
- **Cuerpo de la respuesta**: 

```json
{
    "id": 0000000000,
    "version": null,
    "date_created": "2023-01-12T11:36:19.497-04:00",
    "date_approved": "2023-01-12T11:36:20.345-04:00",
    "date_last_updated": "2023-01-12T11:36:20.345-04:00",
    "date_of_expiration": null,
    "money_release_date": "2023-01-12T11:36:20.345-04:00",
    "operation_type": "card_validation",
    "issuer_id": "205",
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "status": "approved",
    "status_detail": "accredited",
    "transaction_amount": 0,
}
```

### Tarjeta no validada

* **Status**: rejected
* **Descripción**: Respuesta que indica que la creación de la validación Zero Dollar Auth fue rechazada. En caso de recibir este error, recomendamos revisar los parámetros de la solicitud para asegurarse de que todos cumplan con los valores aceptados por nuestra API. Después de revisarlo, realiza una nueva solicitud.
- **Cuerpo de la respuesta**: 

```json
{
    "id": 0000000000,
    "version": null,
    "date_created": "2023-01-12T11:36:19.497-04:00",
    "date_approved": "2023-01-12T11:36:20.345-04:00",
    "date_last_updated": "2023-01-12T11:36:20.345-04:00",
    "date_of_expiration": null,
    "money_release_date": "2023-01-12T11:36:20.345-04:00",
    "operation_type": "card_validation",
    "issuer_id": "205",
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "status": "rejected",
    "status_detail": "cc_rejected_other_reason",
    "transaction_amount": 0,
}
```

## Respuestas 400

Si recibes el código de respuesta `400`, generalmente significa que el cuerpo de la solicitud contiene datos incompatibles con los aceptados por la API. Un ejemplo común de esta situación es intentar validar la transacción enviando un `transaction_amount` con un valor diferente de cero.

A continuación, enumeramos el `body` de respuesta para cada uno de los escenarios.

### 'transaction_amount' distinto a cero

* **Status**: 400
* **Descripción**: Assistant
Este error ocurre cuando el campo `transaction_amount` tiene un valor diferente de cero. Para evitar este tipo de error, revisa el cuerpo de la solicitud y asegúrate de que el parámetro `transaction_amount` tenga un valor igual a cero.
* **Cuerpo de la respuesta**:

```json
{
    "message": "Invalid value for transaction_amount",
    "error": "bad_request",
    "status": 400,
    "cause": [
        {
            "code": 2072,
            "description": "Invalid value for transaction_amount",
            "data": "26-09-2023T17:27:50UTC;76230673-8376-47ee-8d7f-6ccaacdb5b2a"
        }
    ]
}
```

### Bad request

* **Status**: 400
Assistant
* **Descripción**: Si recibes este error, te recomendamos que revises los parámetros de la solicitud para asegurarte de que estén en conformidad con los valores aceptados por nuestra API. Después de la revisión, realiza una nueva solicitud.
* **Cuerpo de la respuesta**:

```json
{
    "message": "<BADREQUEST MESSAGE>",
    "error": "bad_request",
    "status": 400,
    "cause": [
        {
            "code": <error_code>,
            "description": "<detail error description>",
            "data": "12-01-2023T15:27:07UTC;bcd3be45-fcb4-4647-ba35-a0396cd71b90"
        }
    ]
}
```

## Respuestas 500

* **Status**: 500 (internal error)
* **Descripción**: Este error puede indicar una falla en el servidor durante el intento de procesamiento de la operación.
* **Cuerpo de la respuesta**:

```json
{
   "message": "<ERROR MESSAGE>",
   "error": "internal_error",
   "status": 500,
   "cause": [
       {
           "code": <error_code>,
           "description": "<detail error description>",
           "data": "12-01-2023T15:21:28UTC;82c52796-1026-41d2-8ef9-4cbda2d0db8d"
       }
   ]
}
```

## Lista de permisos

Si el vendedor no se encuentra en la lista de permisos, la respuesta será el mensaje "Forbidden", junto con el código de estado 403. A continuación, se muestra un ejemplo de código que ilustra esta respuesta.

```json
{
   "message": "Forbidden"
}
```

Si recibes esta respuesta, te recomendamos que te pongas en contacto con tu representante comercial de Mercado Pago.



