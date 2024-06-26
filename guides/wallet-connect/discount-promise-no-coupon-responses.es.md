# Respuestas

Esta sección detalla las diferentes respuestas que puedes recibir al crear una promesa de descuento sin un cupón pre-añadido. Las respuestas se categorizan en base al resultado de la solicitud, variando desde el éxito en la creación de la promesa de descuento hasta diferentes tipos de errores.

## Éxito

1. Respuesta con descuento aplicado

* Código de estado: 200 (Success)
* Descripción: devuelve el valor de la transacción con el descuento aplicado, información detallada sobre el descuento y un enlace a los términos legales del mismo.
* Cuerpo de la respuesta:

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

2. Respuesta para usuario/campaña sin descuentos

* Código de estado: 200 (Success)
* Descripción: indica que la transacción se procesó sin descuento aplicado.
* Cuerpo de la respuesta:

```Json
{
  "transaction_amount": 150.0,
  "currency_id": "ARS",
  "discount": {}
}
```

## Error

1. Respuesta para solicitud incorrecta

* Código de estado: 400 (Bad Request)
* Descripción: ocurre cuando la solicitud está mal formulada o incompleta.
* Cuerpo de la respuesta:

```Json
{
  "error": "bad_request",
  "message": "<bad_request_message>",
  "status": 400
}
```

2. Respuesta para recurso no encontrado

* Código de estado: 404 (Not Found)
* Descripción: significa que el recurso solicitado no existe en el servidor.
* Cuerpo de la respuesta:

```Json
{
   "error": "not_found",
   "message": "Not found manual input code",
   "status": 404
}
```

3. Respuesta para error interno del servidor

* Código de estado: 500 (Internal Server Error)
* Descripción: indica un error genérico del servidor, sugiriendo problemas en el servidor de Mercado Pago.
* Cuerpo de la respuesta:

```Json
{
  "error": "internal_error",
  "message": "internal server error",
  "status": 500
}
```