# Ofrecer descuentos

Mercado Pago te permite crear campañas de descuentos para todos tus compradores en forma directa o para aquellos que tengan un código de descuento en particular. Sólo debes elegir cuánto dinero quieres invertir y cuándo, sin costos extras. 
Ingresa a [Crear descuento](https://www.mercadopago.com.ar/campaigns/create) para configurar la campaña de descuentos.

## Pre-requisitos


## //Ver de diferenciar dos articulos. Uno para chechout y el otro para API. Sección: herramientas de markenting. VER



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
- El `percent_off` es la tasa de descuento que se aplicará, en caso de que hayas creado una campaña con porcentaje de descuento.
- El `amount_off` es el monto fijo que definiste en tu campaña de descuento.
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

- El `transaction_amount` es el importe original de los items a pagar.
- El `total_paid_amount` es el importe total pagado por el comprador.
- El `coupon_amount` es el importe del descuento aplicado.

Como puedes ver el descuento se aplicó y el comprador sólo tendrá que pagar $269.99. 



# Cupón con código de descuento

También puedes crear cupones de descuento, que aplicarán cuando se procese el pago.

Puedes agregar un campo adicional en el formulario de pago para poder capturar el código de cupón.

### Verifica si el comprador tiene un descuento disponible:

Para verificar, utiliza las [credenciales de tu aplicación](https://www.mercadopago.com/mla/account/credentials):

```curl
curl -X GET 'https://api.mercadopago.com/v1/discount_campaigns?transaction_amount=299.99&payer_email=test_user_99525168@testuser.com&coupon_code=TESTMP&access_token=ACCESS_TOKEN'
```

- El `transaction_amount` es el importe total de la compra.
- El `payer_email` es el email del comprador en tu plataforma.
- El `coupon_code` es el código insertado por el comprador. Este lo utilizarás cuando proceses el pago en caso de que el comprador tenga el descuento.

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
- El `id` identifica la campaña. 
- El `percent_off` es la tasa de descuento que se aplicará, en caso de que hayas creado una campaña con porcentaje de descuento.
- El `amount_off` es el monto fijo que definiste en tu campaña de descuento.
- El `coupon_amount` es el importe del descuento que se aplicará. Guárdalo, también lo usarás al procesar el pago.


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
