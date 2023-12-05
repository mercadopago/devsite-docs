# Respuestas

Esta sección detalla las diferentes respuestas que puedes recibir al crear una promesa de descuento sin un cupón pre-añadido. Las respuestas se categorizan en base al resultado de la solicitud, variando desde el éxito en la creación de la promesa de descuento hasta diferentes tipos de errores.

## Éxito

1. Respuesta con Descuento Aplicado

* Código de Estado: 200 (Success)
* Descripción: Devuelve el valor de la transacción con el descuento aplicado, información detallada sobre el descuento y un enlace a los términos legales del mismo.
* Cuerpo de la Respuesta:

```Json
{
  "transaction_amount": 550.0,
  "currency_id": "ARS",
  "discount": {
    "amount": 55.0,
    "detail": {
      "value": 10.0,
      "type": "percent",
      "cap": 1000.0
    },
    "legal_terms": "https://mercadopago.com/legal/terms"
  }
}
```

2. Respuesta para Usuario/Campaña Sin Descuentos

* Código de Estado: 200 (Success)
* Descripción: Indica que la transacción se procesó sin descuento aplicado.
* Cuerpo de la Respuesta:

```Json
{
  "transaction_amount": 150.0,
  "currency_id": "ARS",
  "discount": {}
}
```

## Error

1. Respuesta para Solicitud Incorrecta

* Código de Estado: 400 (Bad Request)
* Descripción: Ocurre cuando la solicitud está mal formulada o incompleta.
* Cuerpo de la Respuesta:

```Json
{
  "error": "bad_request",
  "message": "<bad_request_message>",
  "status": 400
}
```

2. Respuesta para Recurso No Encontrado

* Código de Estado: 404 (Not Found)
* Descripción: Significa que el recurso solicitado no existe en el servidor.
* Cuerpo de la Respuesta:

```Json
{
   "error": "not_found",
   "message": "Not found manual input code",
   "status": 404
}
```

3. Respuesta para Error Interno del Servidor

* Código de Estado: 500 (Internal Server Error)
* Descripción: Indica un error genérico del servidor, sugiriendo problemas en el servidor de Mercado Pago.
* Cuerpo de la Respuesta:

```Json
{
  "error": "internal_error",
  "message": "internal server error",
  "status": 500
}
```
