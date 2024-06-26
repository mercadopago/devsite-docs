# Respuestas de validación de cupones

En esta sección encontrarás las posibles respuestas al validar cupones, con detalles sobre cada una, e incluyendo casos de éxito, pendencia, invalidez y error.

| Status   | Descripción |
| --- | --- |
| success  | Cupón validado con éxito. Está asociado a un descuento. |
| pending  | Cupón listo para ser utilizado para realizar un pago. |
| invalid  | Cupón incorrecto. No está asociado a un descuento.  |

## Éxito

1. Cupón válido con descuento asociado

* Código de estado: 200 (Success)
* Descripción: respuesta que indica éxito en la validación del cupón, vinculado a un descuento activo. Incluye los términos legales, el valor del descuento, tipo, límite máximo y los montos mínimos y máximos aplicables al pago.
* Cuerpo de la respuesta:

```Json
{
    "status": "success",
    "description": "Descripción del cupón mostrada a los clientes, por ejemplo, en interfaces, facturas o recibos",
    "legal_terms": "URL de los términos y condiciones para fines legales",
    "details": {
       "value": 10.0,
       "type": "percentl",
       "cap": 1000.0,
       "min_payment_amount": 100.0,
       "max_payment_amount": 10000.0
    }
}
```

2. Cupón con descuento listo para uso

* Código de estado: 200 (Success)
* Descripción: respuesta que confirma que el cupón está listo para su uso, a la espera de ser aplicado en un pago. Incluye detalles del descuento y términos legales.
* Cuerpo de la respuesta:

```Json
{
    "status": "pending",
    "description": "Descripción del cupón, como se muestra a los clientes en interfaces, facturas o recibos.",
    "legal_terms": "URL de los términos y condiciones para fines legales.",
    "details": {
       "value": 10.0,
       "type": "percent",
       "cap": 1000.0,
       "min_payment_amount": 100.0,
       "max_payment_amount": 10000.0
    }
}
```

3. Cupón sin descuento asociado

* Código de estado: 200
* Descripción: respuesta que indica que el cupón enviado es inválido y no tiene un descuento asociado.
* Cuerpo de la respuesta: 

```Json
{
    "status": "invalid"
}
```

## Error

1. Solicitud mal formulada

* Código de estado: 400 (Bad Request).
* Descripción: respuesta de error que indica que la solicitud fue mal formulada. Incluye un mensaje de error detallado con el código de estado correspondiente.
* Cuerpo de la respuesta: 

```Json
{
  "error": "bad_request",
  "message": "mensaje de error detallado",
  "status": 400
}
```

2. Coupon_id inválido

* Código de estado: 400 (Bad Request).
* Descripción: respuesta de error que indica que el `coupon_id` enviado en la solicitud es inválido.
* Cuerpo de la respuesta:

```json
{
  "error": "bad_request",
  "message": "Invalid coupon_id.",
  "status": 400
}
```

3. Payer_token inválido

* Código de estado: 400 (Bad Request).
* Descripción: respuesta de error que indica que el `payer_token` enviado en la solicitud es inválido.
* Cuerpo de la respuesta:

```json
{
  "error": "bad_request",
  "message": "Invalid payer token.",
  "status": 400
}
```