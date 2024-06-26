# Respuestas de la API en pruebas

En esta sección encontrarás las posibles respuestas relacionadas con la prueba de validación de Zero Dollar Auth, con detalles sobre cada tipo de respuesta, incluyendo casos de éxito y error.

## Éxito

### Aprobado

* **Código de status**: aprobado
* **Descripción**: Esta respuesta indica que el flujo de Zero Dollar Auth ha sido aprobado.
* **Cuerpo de la respuesta**:

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
    …
}
```

## Error

### Rejected

* **Código de Status**: rejected
* **Descripción**: Esta respuesta indica que el flujo de Zero Dollar Auth ha sido rechazado. Te recomendamos revisar los parámetros de la solicitud para asegurarte de que se hayan completado correctamente con los valores aceptados por nuestra API. Después de hacer la revisión, realiza una nueva solicitud.
* **Cuerpo de la respuesta**:

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
…
}
```

### Feature desactivada

* **Descripción**: Este mensaje se devuelve cuando la función de Zero Dollar Auth está temporalmente desactivada.
* **Cuerpo de la respuesta**:

```json
{
    "message": "This feature is temporarily off"
}
```

### Collector no está en la Whitelist

* **Descripción**: Este error se produce cuando el collector no se encuentra en la Whitelist. Consulta la sección [Lista de permisos](/developers/es/docs/zero-dollar-auth/api-responses#bookmark_lista_de_permisos) para obtener más detalles.
* **Cuerpo de la respuesta**:

```json
{
     "message": "Forbidden"
}
```

### Error interno

* **Código de estado**: 500
* **Descripción**: Respuesta para errores internos en el flujo de Zero Dollar Auth. Si hay fallos en las llamadas a las APIs durante el flujo, la causa se detallará en el objeto `cause`, incluyendo el mensaje de error, el código, la fecha y el ID de solicitud (requestId) correspondiente.
* **Cuerpo de la respuesta**:

```json
{
     "message": "Error message",
      "error": "internal_error",
     "status": "500",
     "cause": [
           {
              "code": "Error code",
              "description": "Error description",
              "data": "2023-10-11T10:06:56.000-04:00;",
           }
      ]
}
```

