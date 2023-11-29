# Crear promesa de descuento con cupón pre-añadido

La **promesa de descuento con cupón pre-añadido** representa una forma simplificada y eficiente de aplicar descuentos en transacciones. En este sistema, es posible que el vendedor muestre el precio con descuento de un producto específico antes de realizar el pago; es decir, antes del checkout.

La creación de la promesa de descuento con cupón pre-añadido se realiza en dos pasos:

* Validar el cupón antes de realizar el pago
* Añadir el cupón antes de proceder al pago


## Validar cupón antes de realizar el pago.

Para **validar un cupón antes de proceder con el pago**, es importante enviar los datos de la campaña en la solicitud, que asegura que el cliente pueda aprovechar el beneficio del descuento antes de finalizar la compra.

Para ello, utiliza el _curl_ a continuación e inserta los parámetros de acuerdo con la tabla descriptiva. Esta solicitud verificará la validez del cupón y devolverá información detallada sobre el descuento aplicable, si lo hay.

| Parámetro  | Descripción  | Tipo  | Ejemplo  |
| --- | --- | --- | --- |
| Authorization  | Token de autorización del usuario (Access token). Esta información puede obtenerse a través del menú [Tus integraciones](/developers/es/docs/wallet-connect/additional-content/your-integrations/credentials).  | String  | APP_USR-123456-test-access-t0ken  |
| x-payer-token  | Este es un token específico del pagador. Reemplaza <PAYER_TOKEN> con el token correspondiente. Esta información se obtiene al finalizar el [flujo de vinculación de cuentas](/developers/es/docs/wallet-connect/account-linking-flow/create-agreement) | String  | payer1-token2-test3-example4  |
| id  | ID del cupón. Código que identifica y asocia su uso a una campaña promocional específica  | String  | Black_Friday_20  |

[[[
```curl

curl -X POST \
'https://api.mercadopago.com/v2/wallet_connect/coupons' \
--header 'Authorization: <Bearer YOUR_ACCESS_TOKEN>' \
--header 'x-payer-token: <PAYER_TOKEN>' \
--header 'Content-Type: application/json' \
-d '{
    "id": "<COUPON>"
 }'
```
]]]

> NOTE
>
> Importante
>
> Cuando se envía un cupón para validación, el sistema verifica si es correcto y si hay un descuento asociado a él. Dependiendo del resultado de la verificación, se pueden recibir diferentes respuestas. Consulta la sección [Respuestas de validación de cupones](/developers/es/docs/wallet-connect/discounts/create-discount-promie-preadd-coupon/validation-responses) para más detalles.


## Añadir cupón antes de proceder al pago

Cuando la validación de un código de cupón es necesaria durante el proceso de checkout, es decir, antes de efectuar el pago, es esencial enviar los datos de la campaña en la solicitud subsiguiente.

Esta etapa implica el envío de esta solicitud al sistema, para aplicar el descuento del cupón a la transacción que está a punto de finalizarse.

> WARNING
>
> Importante
>
> Es importante que esta solicitud se haga después de que el usuario ingrese el cupón y antes de confirmar el pago.

Utiliza el _curl_ a continuación para realizar la solicitud y asegúrate de que los parámetros sean completados de acuerdo con la siguiente tabla descriptiva.



| Parámetro  | Descripción  | Ejemplo  |
| --- | --- | --- |
| Authorization  | Token de autorización del usuario (Access token). Esta información se puede obtener a través del menú [Tus integraciones](/developers/es/docs/wallet-connect/additional-content/your-integrations/credentials).  | APP_USR-123456-test-access-t0ken  |
| x-payer-token  | Este es un token específico del pagador. Reemplaza <PAYER_TOKEN> por el token correspondiente. Esta información se obtiene al finalizar el [flujo de vinculación de cuentas](/developers/es/docs/wallet-connect/account-linking-flow/create-agreement).  | payer1-token2-test3-example4  |
| amount  | Valor total de la transacción  | 550.50  |
| coupon  | Código del cupón a ser aplicado. Es el código que el usuario introduce y que refiere a la campaña de descuento.  | descuento20off  |

[[[
```curl

curl -X POST \
  'https://api.mercadopago.com/v2/wallet_connect/discounts' \
  --header 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --header 'x-payer-token: <PAYER_TOKEN>' \
  --header 'Content-Type: application/json' \
  -d '{
      "amount": 550,
      "coupon": "<COUPON>"
  }'

```
]]]

Al añadir el cupón antes de proceder al pago, es posible que se reciban diferentes respuestas, sean de éxito o errores. A continuación, se detalla cada una de ellas.

### Éxito

1. Respuesta de éxito al añadir cupón

* Código de estado: no se devuelve ningún código en esta solicitud.
* Descripción: la respuesta trae información referente a la moneda, valor del descuento, términos legales, entre otros, lo que atestigua el éxito de la transacción.
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
   "legal_terms":"https://mp.com/legal"
  }
}
```

### Error

1. Descuento inexistente para el usuario

* Código de estado: no se retorna ningún código.
* Descripción: Este error se devuelve para informar que no existe un descuento disponible para el usuario.
* Cuerpo de la respuesta:

```Json
{
  "transaction_amount": 550.0,
  "currency_id": "ARS",
  "discount": {}
}
```

2. Transaction_amount debe ser mayor que 0

* Código de estado: 400 (Bad Request).
* Descripción: Este error se devuelve cuando el campo `transaction_amount` se llena con un valor de 0. En este caso, es necesario ingresar un valor superior a 0 y realizar una nueva solicitud.
* Cuerpo de la respuesta:

```Json
{
  "error": "bad_request",
  "message": "transaction_amount must be greater than 0",
  "status": 400
}
```

3. Transaction_amount no puede estar vacío

* Código de estado: 400 (Bad Request).
* Descripción: Este error se devuelve cuando el campo `transaction_amount` se deja en blanco. En este caso, es necesario ingresar un valor superior a 0 y realizar una nueva solicitud.
* Cuerpo de la respuesta:

```Json
{
  "error": "bad_request",
  "message": "transaction_amount must not be null.",
  "status": 400
}
```
