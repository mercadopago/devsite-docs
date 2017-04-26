# Ofrecer descuentos

Mercado Pago te permite crear campañas de descuentos directos o con cupones, que aplicarán cuando el pago sea procesado. Sólo debes elegir cuánto dinero quieres invertir y cuándo, sin costos extras. Ingresa a [Crear descuento](https://www.mercadopago.com.ar/campaigns/create) para configurarlo.

A continuación te mostraremos cómo aplicar un [Descuento directo](#descuento-directo) o un [Cupón de descuento](#cupón-de-descuento).

## Descuento Directo

Esta API tiene como objetivo proporcionar la información correcta y actualizada a fin de dar una buena y clara experiencia de compra. Es importante verificar y notificar al comprador si el descuento aplicó o no.

### Verifica si el comprador tiene un descuento disponible:

Para verificar, utiliza las [credenciales de tu aplicación](https://www.mercadopago.com/mla/account/credentials):

```curl
curl -H "Accept: application/json" \
'https://api.mercadopago.com/v1/discount_campaigns?transaction_amount=299.99&payer_email=test_user_85556797@testuser.com&access_token=ACCESS_TOKEN' \
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
    "currency_id": "ARS"
}
```

- El `id` identifica la campaña. Guárdalo, lo usarás al procesar el pago.
- El `percent_off` es la tasa de descuento que se aplicará.
- El `coupon_amount` es el importe del descuento que se aplicará. Guárdalo, también lo usarás al procesar el pago.

### Procesar pago

Para procesar, utiliza las [credenciales de tu aplicación](https://www.mercadopago.com/mla/account/credentials):

```curl
curl -X POST -H 'accept: application/json' -H 'content-type: application/json' \
https://api.mercadopago.com/v1/payments?access_token=ACCESS_TOKEN \
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
	"currency_id": "ARS",
	"coupon_amount": 30,
	"transaction_details": {
		"total_paid_amount": 269.99,
		...
	},
	...
}
```

- El `transaction_amount` es el importe total del pago.
- El `total_paid_amount` es el importe total pagado por el comprador.
- El `coupon_amount` es el importe del descuento.

Como puedes ver el descuento se aplicó y el comprador sólo tendrá que pagar $269.99. 

En este ejemplo utilizamos `master`. Todos los medios de pago tienen el mismo comportamiento.

---

# Cupón de descuento

También puedes crear cupones de descuento, que aplicarán cuando se procese el pago.

Puedes agregar un campo adicional en el formulario de pago para poder capturar el código de cupón.

### Verifica si el comprador tiene un descuento disponible:

Para verificar, utiliza las [credenciales de tu aplicación](https://www.mercadopago.com/mla/account/credentials):

```curl
curl -X GET 'https://api.mercadopago.com/v1/discount_campaigns?transaction_amount=299.99&payer_email=test_user_99525168@testuser.com&coupon_code=TESTMP&access_token=ACCESS_TOKEN'
```

- El `transaction_amount ` es el importe total de la compra.
- El `payer_email` es el email del comprador en tu plataforma.
- El `coupon_code` es el código insertado por el comprador.

Si el comprador tiene el descuento disponible, la API devolverá:

```json
{
    "id": 1117,
    "name": "Test coupon campaign",
    "percent_off": 10,
    "amount_off": 0,
    "coupon_amount": 100,
    "currency_id": "ARS"
}
```

- El `percent_off` es la tasa de descuento que se aplicará.
- El `coupon_amount` es el importe de descuento que se aplicará.

Si el descuento no está disponible porque el comprador ya lo utilizó, la API devolverá:

```json
{
    "message": "Run Out of uses per user",
    "error": "run-out-of-uses",
    "status": 404,
    "cause": []
}
```

En este momento puedes mostrar que el cupón no es válido o ya no está disponible.

### Procesar pago

```curl
curl -X POST -H 'accept: application/json' -H 'content-type: application/json' \
https://api.mercadolibre.com/v1/payments?access_token=ACCESS_TOKEN \
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
	"currency_id": "ARS",
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
