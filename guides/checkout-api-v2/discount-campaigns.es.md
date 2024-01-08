---
  description: Crea campañas de descuento para potenciar tus ventas utilizando las herramientas de marketing de tu cuenta de Mercado Pago
  indexable: false
---


# Campañas de descuento

Crea campañas de descuento para potenciar tus ventas utilizando las herramientas de marketing de tu cuenta de Mercado Pago, ingresando en la sección Configuración para tu Negocio: [Crear descuento](https://www.mercadopago[FAKER][URL][DOMAIN]/campaigns/create).

Puedes crear dos tipos de campañas:

* Que apliquen a todos tus compradores. Por ejemplo: rebajas por temporada.
* Con código de descuento para enviar a tus compradores.

Sólo debes elegir cuánto dinero quieres invertir y cuándo, sin costos extras.


## Consulta el descuento para incluirlo en el pago

Antes de crear el pago, consulta si tu comprador es alcanzado por alguna de tus campañas de descuentos.

### Campañas para todos los compradores

Para verificar, utiliza las [credenciales de tu aplicación]([FAKER][CREDENTIALS][URL]):

```curl
curl -H "Accept: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/discount_campaigns?transaction_amount=299.99&payer_email=test_user_85556797@testuser.com' \
```

- El `transaction_amount` es el importe total del pago.
- El `payer_email` es el email del comprador en tu plataforma.

**Respuesta**

```json
{
    "id": 1118,
    "name": "Test discount campaign",
    "percent_off": 10,
    "amount_off": 0,
    "coupon_amount": 30,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]"
}
```

- El `id` identifica la campaña. Lo usarás al procesar el pago.
- El `percent_off` es la tasa de descuento que se aplicará, en caso de que hayas creado una campaña con porcentaje de descuento.
- El `amount_off` es el monto fijo que definiste en tu campaña de descuento.
- El `coupon_amount` es el importe del descuento que se aplicará. Lo usarás al procesar el pago.

#### Procesar el pago

Para recibir un pago con una campaña que aplique a todos tus compradores, debes adicionar los campos `campaign_id` y `coupon_amount`:

```curl
curl -X POST \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/v1/payments \
-d '{
    "transaction_amount": 299.99,
    "description": "Title of what you are paying for",
    "payment_method_id": "master",
    "payer":{
        "email": "test_user_85556797@testuser.com"
    },
    "campaign_id": 1118,
    "coupon_amount": 30
}'
```

**Respuesta**

```json
{
	"id": 25417,
	"description": "Title of what you are paying for",
	"payment_method_id": "master",
	"payer": {
		"email": "test_user_23700775@testuser.com",
		...
	},
	"transaction_amount": 299.99,
	"currency_id": "[FAKER][CURRENCY][ACRONYM]",
	"coupon_amount": 30,
	"transaction_details": {
		"total_paid_amount": 269.99,
		...
	},
	...
}
```

- El `transaction_amount` es el importe original de los items a pagar.
- El `total_paid_amount` es el importe total pagado por el comprador.
- El `coupon_amount` es el importe del descuento aplicado.


### Cupón con código de descuento

Agrega un campo adicional en el formulario de pago para poder capturar el código de cupón que tu comprador ingrese.

#### Verifica si el comprador tiene un descuento disponible:

Para verificar, utiliza las [credenciales de tu aplicación]([FAKER][CREDENTIALS][URL]):

```curl
curl -X GET \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/discount_campaigns?transaction_amount=299.99&payer_email=test_user_99525168@testuser.com&coupon_code=TESTMP'
```

- El `coupon_code` es el código insertado por el comprador. Este lo utilizarás cuando proceses el pago en caso de que el comprador tenga el descuento.
- El `transaction_amount` es el importe total de la compra.
- El `payer_email` es el email del comprador en tu plataforma.

Si el comprador tiene el descuento disponible, la API devolverá:

```json
{
    "id": 1117,
    "name": "Test coupon campaign",
    "percent_off": 10,
    "amount_off": 0,
    "coupon_amount": 100,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]"
}
```

- El `id` identifica la campaña.
- El `percent_off` es la tasa de descuento que se aplicará, en caso de que hayas creado una campaña con porcentaje de descuento.
- El `amount_off` es el monto fijo que definiste en tu campaña de descuento.
- El `coupon_amount` es el importe del descuento que se aplicará. Guárdalo, también lo usarás al procesar el pago.


Si el comprador ya utilizó el descuento, la API devolverá:

```json
{
    "message": "Run Out of uses per user",
    "error": "run-out-of-uses",
    "status": 404,
    "cause": []
}
```

En este momento puedes mostrar que el cupón no es válido o ya no está disponible.

#### Procesar el pago

Para recibir un pago con un cupón de descuento debes adicionar el `coupon_code`:

```curl
curl -X POST \
-H 'accept: application/json' \ 
-H 'content-type: application/json' \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/v1/payments \
-d '{
    "transaction_amount": 299.99,
    "description": "Title of what you are paying for",
    "token": "ff8080814d71d513014d8d42173452f7",
    "installments": 1,
    "payment_method_id": "master",
    "payer": {
        "email": "test_user_99525168@testuser.com"
    },
    "coupon_code": "TESTMP"
}'
```

**Respuesta:**

```json
{
	"id": 25416,
	"description": "Title of what you are paying for",
	"payment_method_id": "master",
	"payer": {
		"email": "test_user_99525168@testuser.com",
		...
	},
	"transaction_amount": 299.99,
	"currency_id": "[FAKER][CURRENCY][ACRONYM]",
	"coupon_amount": 29.99,
	"transaction_details": {
		"total_paid_amount": 269.98,
		...
	},
	...
}
```

### Descuento no disponible

Si el comprador no tiene el descuento disponible, la API devolverá:

```json
{
    "message": "invalid parameters",
    "error": "bad_request",
    "status": 400,
    "cause": [
        {
            "code": "campaign_code_doesnt_match",
            "description": "doesn't find a campaign with the given code"
        }
    ]
}
```
