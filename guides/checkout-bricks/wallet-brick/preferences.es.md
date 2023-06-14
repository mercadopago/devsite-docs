# Configuraciones de preferencia

Puedes adaptar la integración de Wallet Brick a tu modelo de negocio configurando [atributos de preferencia](/developers/es/reference/preferences/_checkout_preferences/post).

----[mla, mlb]----
Si ofreces compras de alto valor, por ejemplo, puedes aceptar [pagos con dos tarjetas de crédito](#bookmark_acepta_pagos_con_2_tarjetas_de_crédito) o [eliminar métodos de pago](#bookmark_define_los_medios_de_pago) no deseados para tu operación.

------------
----[mlm, mlc, mlu, mco, mpe]----
Si ofreces compras de alto valor, por ejemplo, puedes [excluir métodos de pago](#bookmark_define_los_medios_de_pago) no deseado para tu operación.

------------

## Ejemplo de preferencia completa

----[mlm, mla, mlb, mlc, mlu, mpe]----

```json
{
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Mi producto",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
            "description": "Descripción del Item",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
    "payer": {
        "name": "Juan",
        "surname": "Lopez",
        "email": "user@email.com",
        "phone": {
            "area_code": "11",
            "number": "4444-4444"
        },
        "identification": {
            "type": "DNI",
            "number": "12345678"
        },
        "address": {
            "street_name": "Street",
            "street_number": 123,
            "zip_code": "5700"
        }
    },
    "back_urls": {
        "success": "https://www.success.com",
        "failure": "http://www.failure.com",
        "pending": "http://www.pending.com"
    },
    "auto_return": "approved",
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": "master"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12
    },
    "notification_url": "https://www.your-site.com/ipn",
    "statement_descriptor": "MINEGOCIO",
    "external_reference": "Reference_1234",
    "expires": true,
    "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    "expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}
```

------------
----[mco]----

 ```json
{
	"items": [
		{
			"id": "item-ID-1234",
			"title": "Title of what you are paying for. It will be displayed in the payment process.",
			"currency_id": "COP",
			"picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
			"description": "Item description",
			"category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
			"quantity": 1,
			"unit_price": 100
		}
	],
	"payer": {
		"name": "user-name",
		"surname": "user-surname",
		"email": "user@email.com",
		"date_created": "2015-06-02T12:58:41.425-04:00",
		"phone": {
			"area_code": "11",
			"number": "4444-4444"
		},
		"identification": {
			"type": "RUT", // Available ID types at https://api.mercadopago.com/v1/identification_types
			"number": "12345678"
		},
		"address": {
			"street_name": "Street",
			"street_number": 123,
			"zip_code": "5700"
		}
	},
	"back_urls": {
		"success": "https://www.success.com",
		"failure": "http://www.failure.com",
		"pending": "http://www.pending.com"
	},
	"auto_return": "approved",
	"payment_methods": {
		"excluded_payment_methods": [
			{
				"id": "master"
			}
		],
		"excluded_payment_types": [
			{
				"id": "ticket"
			}
		],
		"installments": 12,
		"default_payment_method_id": null,
		"default_installments": null
	},
	"shipments": {
		"receiver_address": {
			"zip_code": "5700",
			"street_number": 123,
			"street_name": "Street",
			"floor": 4,
			"apartment": "C"
		}
	},
	"notification_url": "https://www.your-site.com/ipn",
	"statement_descriptor": "MINEGOCIO",
	"external_reference": "Reference_1234",
	"expires": true,
	"expiration_date_from": "2016-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2016-02-28T12:00:00.000-04:00",
	"taxes": [
		{
			"type": "IVA",
			"value": 16
		}
	]
}
 ```
------------
----[mla, mlb, mlm]----
# Parcelamento sem cartão

Com o Mercado Pago é possível realizar um parcelamento em até 12x sem um cartão de crédito, essa opção de pagamento se chama Mercado Crédito.

Ao oferecer esta opção na sua loja, seus clientes poderão comprar um produto hoje e pagar depois em parcelas. Para o seu negócio, a aprovação da compra é imediata e está garantida, sendo creditado o valor total adiantado e os seus clientes nos pagam depois.

A primeira etapa para configurar pagamentos com Mercado Crédito é a criação da preferência. Para isso, envie um POST com o parâmetro `purpose` e o valor `onboarding_credits` ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição ou, se preferir, utilize um dos nossos SDKs abaixo.

[[[
```php
<?php
// Crear un objeto de preferencia
$preference = new MercadoPago\Preference();


// Crea un elemento en la preferencia
$item = new MercadoPago\Item();
$item->title = 'Mi producto';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->purpose = 'onboarding_credits';
$preference->save();
?>
```
```node
// Crear un objeto de preferencia
let preference = {
items: [
{
title: 'Mi producto',
unit_price: 100,
quantity: 1,
}
],
purpose: 'onboarding_credits'
};


mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará la string "<%= global.id %>" en tu HTML
global.id = response.body.id;
}).catch(function(error){
console.log(error);
});
```
```java
// Crear un objeto de preferencia
PreferenceClient client = new PreferenceClient();


// Crea un elemento en la preferencia
PreferenceItemRequest item =
PreferenceItemRequest.builder()
.title("Mi producto")
.quantity(1)
.unitPrice(new BigDecimal("75"))
.build();


List<PreferenceItemRequest> items = new ArrayList<>();
items.add(item);


PreferenceRequest request =
PreferenceRequest.builder().items(items).purpose("onboarding_credits").build();


client.create(request);
```
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Crear un objeto de preferencia
preference_data = {
items: [
{
title: 'Mi producto',
unit_price: 100,
quantity: 1
}
],
purpose: 'onboarding_credits'
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]


# Este valor reemplazará la string "<%= @preference_id %>" en tu HTML
@preference_id = preference['id']
```
```csharp
// Crear el objeto de request de preferencia
var request = new PreferenceRequest
{
Items = new List<PreferenceItemRequest>
{
new PreferenceItemRequest
{
Title = "Mi producto",
Quantity = 1,
CurrencyId = "BRL",
UnitPrice = 75m,
},
},
Purpose = "onboarding_credits",
};
// Crear la preferencia
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
"items": [
{
"title": "Mi producto",
"unit_price": 100,
"quantity": 1
}
],
"purpose": "onboarding_credits"
}


preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
'https://api.mercadopago.com/checkout/preferences' \
-H 'Content-Type: application/json' \
-H 'cache-control: no-cache' \
-H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
-d '{
"items": [
{
"title": "Mi producto",
"quantity": 1,
"unit_price": 75
}
],
"purpose": "onboarding_credits"
}'
```
]]]

------------
----[mla]----
## Define los medios de pago

A través de la preferencia de pago, puedes configurar un método de pago por defecto, eliminar los no deseados, o elegir un número máximo de cuotas que se ofrecerán.

| Atributo | Descripción |
| --- | --- |
| `payment_methods` | Clase que describe los métodos y atributos de medios de pago de Wallet Brick. |
| `excluded_payment_types` | Método que excluye tipos de medios de pago no deseados, como tarjetas de crédito, Rapipago, Pago Fácil, entre otras. |
| `excluded_payment_methods` | Método que excluye marcas de tarjetas de crédito o débito, como Visa, Mastercard o American Express, entre otras.|
| `installments` | Método que define la cantidad de cuotas máximas a ofrecer. |
| `purpose` | Al indicar el valor `wallet_purchase` en este método, Wallet Brick solo aceptará pagos de usuarios registrados en Mercado Pago, con tarjeta y saldo de cuenta. |

------------
----[mlb]----
## Define los medios de pago

A través de la preferencia de pago, puedes configurar un método de pago por defecto, eliminar los no deseados, o elegir un número máximo de cuotas que se ofrecerán.

| Atributo | Descripción |
| --- | --- |
| `payment_methods` | Clase que describe los métodos y atributos de medios de pago de Wallet Brick. |
| `excluded_payment_types` | Método que excluye tipos de medios de pago no deseados, como tarjetas de crédito o débito, ticket (boleto o o pago en agencia de lotería), entre otros. |
| `excluded_payment_methods` | Método que excluye marcas de tarjetas de crédito o débito, como Visa, Mastercard o American Express, entre otras.|
| `installments` | Método que define la cantidad de cuotas máximas a ofrecer. |
| `purpose` | Al indicar el valor `wallet_purchase` en este método, Wallet Brick solo aceptará pagos de usuarios registrados en Mercado Pago, con tarjeta y saldo de cuenta. |

------------

----[mlc, mco, mpe, mlu]----
## Define los medios de pago

A través de la preferencia de pago, puedes configurar un método de pago por defecto, eliminar los no deseados, o elegir un número máximo de cuotas que se ofrecerán.

| Atributo | Descripción |
| --- | --- |
| `payment_methods` | Clase que describe los métodos y atributos de medios de pago de Wallet Brick. |
| `excluded_payment_types` | Método que excluye tipos de medios de pago no deseados, como tarjetas de crédito, entre otros. |
| `excluded_payment_methods` | Método que excluye marcas de tarjetas de crédito o débito, como Visa, Mastercard o American Express, entre otras.|
| `installments` | Método que define la cantidad de cuotas máximas a ofrecer. |
| `purpose` | Al indicar el valor `wallet_purchase` en este método, Wallet Brick solo aceptará pagos de usuarios registrados en Mercado Pago, con tarjeta y saldo de cuenta. |

------------
----[mlm]----
## Define los medios de pago

A través de la preferencia de pago, puedes configurar un método de pago por defecto, eliminar los no deseados, o elegir un número máximo de mensualidades que se ofrecerán.

| Atributo | Descripción |
| --- | --- |
| `payment_methods` | Clase que describe los métodos y atributos de medios de pago de Wallet Brick. |
| `excluded_payment_types` | Método que excluye tipos de medios de pago no deseados, como tarjetas de crédito, ticket, entre otros. |
| `excluded_payment_methods` | Método que excluye marcas de tarjetas de crédito o débito, como Visa, Mastercard o American Express, entre otras.|
| `installments` | Método que define la cantidad de cuotas máximas a ofrecer. |
| `purpose` | Al indicar el valor `wallet_purchase` en este método, Wallet Brick solo aceptará pagos de usuarios registrados en Mercado Pago, con tarjeta y saldo de cuenta. |

------------

Por ejemplo:

[[[
```php
<?php
$preference = new MercadoPago\Preference();
// ...
$preference->payment_methods = array(
  "excluded_payment_methods" => array(
    array("id" => "master")
  ),
  "excluded_payment_types" => array(
    array("id" => "ticket")
  ),
  "installments" => 12
);
// ...
?>
```
```node
var preference = {}
preference = {
//...
"payment_methods": {
    "excluded_payment_methods": [
        {
            "id": "master"
        }
    ],
    "excluded_payment_types": [
        {
            "id": "ticket"
        }
    ],
    "installments": 12
	}
//...
}
```
```java
PreferenceClient client = new PreferenceClient();
//...
List<PreferencePaymentMethodRequest> excludedPaymentMethods = new ArrayList<>();
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("master").build());
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("amex").build());

List<PreferencePaymentTypeRequest> excludedPaymentTypes = new ArrayList<>();
excludedPaymentTypes.add(PreferencePaymentTypeRequest.builder().id("ticket").build());

PreferencePaymentMethodsRequest paymentMethods =
   PreferencePaymentMethodsRequest.builder()
       .excludedPaymentMethods(excludedPaymentMethods)
       .excludedPaymentTypes(excludedPaymentTypes)
       .installments(12)
       .build();

PreferenceRequest request = PreferenceRequest.builder().paymentMethods(paymentMethods).build();

client.create(request);
//...
```
```ruby
#...
preference_data = {
  # ...
  payment_methods: {
    excluded_payment_methods: [
      { id: 'master' }
    ],
    excluded_payment_types: [
      { id: 'ticket' }
    ],
    installments: 12
  }
  # ...
}
#...
```
```csharp
var paymentMethods = new PreferencePaymentMethodsRequest
{
    ExcludedPaymentMethods = new List<PreferencePaymentMethodRequest>
    {
        new PreferencePaymentMethodRequest
        {
            Id = "master",
        },
    },
    ExcludedPaymentTypes = new List<PreferencePaymentTypeRequest>
    {
        new PreferencePaymentTypeRequest
        {
            Id = "ticket",
        },
    },
    Installments = 12,
};

var request = new PreferenceRequest
{
    // ...
    PaymentMethods = paymentMethods,
};
```
```python
#...
preference_data = {
    "excluded_payment_methods": [
        { "id": "master" }
    ],
    "excluded_payment_types": [
        { "id": "ticket" }
    ],
    "installments": 12
}
#...
```
]]]

----[mla, mlb]----

## Acepta pagos con 2 tarjetas de crédito

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas.png)

Puedes activar la opción de ofrecer pagos con dos tarjetas de crédito desde la cuenta de Mercado Pago.

Para activar esta opción de pago, ve a tus "[opciones de negocio](https://www.mercadopago.com.ar/settings/my-business)" y elige la opción "Recibir pagos con 2 tarjetas de crédito".

![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas.gif)
------------

## Acepta pagos únicamente de usuarios registrados

----[mla, mlb]----
Puedes aceptar pagos con la billetera de Mercado Pago exclusivamente de usuarios registrados, con tarjetas, dinero disponible y Mercado Crédito.

------------

----[mlm, mlc, mco, mpe, mlu]----
Puedes aceptar pagos con la billetera de Mercado Pago exclusivamente de usuarios registrados, con tarjetas y dinero disponible.

------------

Esto permite que tus clientes tengan disponible la información de su cuenta al instante en el momento del pago, como sus tarjetas y domicilios guardados. 

> WARNING
>
> Importante
>
> Ten en cuenta que agregando esta opción no podrás recibir pagos de usuarios que no tengan cuenta en Mercado Pago o Mercado Libre y tampoco podrás cobrar en efectivo ni transferencia.

Para aceptar pagos exclusivamente de usuarios registrados, agrega el siguiente atributo en tu preferencia:

```json
"purpose": "wallet_purchase"
```

Al hacerlo, tu preferencia tendría una estructura similar al ejemplo siguiente:

```json
{
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
}
```
----[mco]----

## Modifica la tasa de impuestos DIAN

Puedes modificar el valor del impuesto para la Dirección de Impuestos y Aduanas Nacionales (DIAN), aplicado según el producto o servicio que ofrezcas. 

Si no diferencias este valor, se aplicará por defecto una tarifa de 19%.

| Atributo | Descripción |
| --- | --- |
| `type` | Identificador del impuesto. Solo se admite `IVA` como valor. |
| `value` | Monto del impuesto. Se admite un máximo de dos decimales. Para ítems excentos de impuestos se debe informar cero (`0`). |

Por ejemplo:

[[[
```json
"taxes": [
	{
		"type": "IVA",
		"value": 16
	}
]
```
]]]

------------

----[mla, mlb, mco]----

## Cambia la fecha de vencimiento para pagos en efectivo

Puedes cambiar la fecha de vencimiento por defecto de un pago en efectivo enviando el campo `date_of_expiration` en la solicitud de creación de la preferencia. La fecha configurada debe ser entre 1 y 30 días a partir de la fecha de creación de la preferencia de pago.

Por ejemplo:

[[[
```json
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]

> NOTE
>
> Nota
>
> El período de acreditación es de 1 y 2 días hábiles, según el medio de pago. Por lo tanto, te recomendamos establecer la fecha de vencimiento con al menos 3 días para asegurarte de que se realice el pago.

Ten en cuenta los [tiempos de acreditación por medio de pago](https://www.mercadopago.com.ar/ayuda/_221) para realizar la configuración correctamente.

> WARNING
>
> Importante
>
> Si el pago se realiza después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.
------------

## Activa el modo binario

Puedes activar el modo binario si el modelo de negocio requiere que la aprobación del pago sea instantánea. De esta forma, el pago solo puede resultar aprobado o rechazado. En caso de no estar activado el modo binario, el pago puede quedar en pendiente (en caso de requerir alguna acción por parte del comprador) o en proceso (si es necesaria una revisión manual).

Para activarlo, solo debes configurar como `true` el atributo `binary_mode` de la preferencia de pago:

```json
"binary_mode": true
```

> WARNING
>
> Importante
>
> Al activar el modo binario se simplifica la integración con Wallet Brick, pero puede ocasionar una disminución en la tasa de porcentaje de pagos aprobados. Esto se debe a que, para mantener el flujo instantáneo, los pagos pendientes o en proceso se rechazarán automáticamente de forma predeterminada.

## Establece la vigencia de preferencias

Si se quiere habilitar el pago de una preferencia con un tiempo de duración determinado, se puede activar un periodo de vigencia o concluir directamente con los atributos `expires`,` expiration_date_from` y `expiration_date_to`:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

Nota que la fecha usa el formato `ISO 8601: yyyy-MM-dd'T'HH:mm:ssz`.

### Envía una descripción en el resumen de la tarjeta

Puedes agregar una descripción para tu negocio a través del atributo `statement_descriptor` de las preferencias de pago, como se muestra en el siguiente ejemplo:

```json
"statement_descriptor": "MINEGOCIO"
```

El valor del atributo aparecerá en el resumen de la tarjeta de tu comprador dependiendo de la marca de la tarjeta utilizada.

## Establece una preferencia para múltiples ítems

Si se necesita crear una preferencia para más de un ítem, solo debes agregarlos como una lista, tal como se muestra en el siguiente ejemplo:

[[[
```php
<?php
  # Crear un objeto preferencia
  $preference = new MercadoPago\Preference();
  # Crea ítems en la preferencia
  $item1 = new MercadoPago\Item
  $item1->title = "Item de Prueba 1";
  $item1->quantity = 2;
  $item1->unit_price = 11.96;

  $item2= new MercadoPago\Item
  $item2->title = "Item de Prueba 2";
  $item2->quantity = 1;
  $item2->unit_price = 11.96;

  $preference->items = array($item1,$item2);
  # Guardar y postear la preferencia
  $preference->save();
?>
```
```node
// Configura tu preferencia
var preference = {
  items: [
      { title: 'Mi producto',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56 },
	{ title: 'Mi producto 2’,
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56 }
    ]
};
// Crea un botón de pago en tu sitio
mercadopago.preferences.create(preference)
.then(function(preference){
  // Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = preference.body.init_point;
}).catch(function(error){
  console.log(error);
});
```
```java
// Crea un objeto preferencia
PreferenceClient client = new PreferenceClient();
// Crea ítems en la preferencia
List<PreferenceItemRequest> items = new ArrayList<>();

PreferenceItemRequest item1 =
   PreferenceItemRequest.builder()
       .id("1234")
       .title("Produto 1")
       .quantity(2)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();   
PreferenceItemRequest item2 =
   PreferenceItemRequest.builder()
       .id("12")
       .title("Produto 2")
       .quantity(1)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();

items.add(item1);
items.add(item2);

PreferenceRequest request = PreferenceRequest.builder().items(items).build();
// Guardar y postear la preferencia
client.create(request);
```
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Create preference data with items
preference_data = {
  items: [
    {
      title: 'Mi producto 1',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56
    },
    {
      title: 'Mi producto 2',
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56
    }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```csharp
// Crea el request con múltiples ítems
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Mi producto 1",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
        new PreferenceItemRequest
        {
            Title = "Mi producto 2",
            Quantity = 2,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 96.56m,
        },
        // ...
    },
};

// Crea un objeto client
var client = new PreferenceClient();

// Crea la preferencia
Preference preference = await client.CreateAsync(request);
```
```python
# Crea ítems en la preferencia
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.56
        },
        {
            "title": "Mi producto2",
            "quantity": 2,
            "unit_price": 96.56
        }
    ]
}

# Crea la preferencia
preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
  -d '{
	"items": [
	{
		"id_product":1,
		"quantity":1,
		"unit_price": 234.33,
		"titulo":"Mi producto"
	},
	{
		"id_product":2,
		"quantity":2,
		"unit_price": 255.33,
		"titulo":"Mi producto 2"
	}
]
}'
```
]]]

Ten en cuenta que el valor total de la preferencia será la suma del valor del precio unitario de cada ítem listado.

## Muestra el monto del envío 

Si ya tienes estimado el envio desde tu sitio, puedes enviar el monto y mostrarlo por separado del total al ofrecer el pago. 

Para configurarlo, agrega el nodo `shipments` con el valor del monto que quieras cobrar en el atributo `cost` y el valor `not_specified` en el atributo `mode`:

```json
{
    "shipments":{
        "cost": 1000,
        "mode": "not_specified",
  }
}
```

## Redirigir al comprador a tu sitio web

Al final del proceso de pago, tienes la opción de redireccionar al comprador a tu sitio web nuevamente. Para hacer esto, agrega el atributo `back_urls` y define, de acuerdo con el estado del pago, la página deseada para redireccionar a tu comprador cuando haga clic en el botón regresar al sitio.

Si quieres que la redirección sea automática para los pagos aprobados, sin mostrar un botón de retorno, también debes agregar el atributo `auto_return` con el valor de `approved`.

> NOTE
>
> Nota
>
> Ten en cuenta que el atributo `auto_return` solo funciona para el modo `redirect` y `mobile` de Wallet Brick. No funciona en modo modal, ya que en este último el comprador permanece en el sitio durante todo el proceso de pago.

![autoreturn](/images/web-payment-checkout/autoreturn-img.png)

| Atributo | Descripción |
| ------------ | -------- |
| `auto_return` | Redirige automáticamente a los compradores al sitio cuando el pago finaliza como aprobado. El valor predeterminado es `approved`. |
| `back_urls` | URL deseada para retornar al sitio. Los posibles escenarios son:<br/><br/>`success`: URL de retorno ante la aprobación del pago.<br/><br/>`pending`: URL de retorno ante el pago pendiente.<br/><br/>`failure`: URL de retorno ante el pago rechazado.

A través de `back_urls`, se devolverán los siguientes parámetros:

| Parámetro | Descripción |
| ------------ | -------- |
| `payment_id` | ID (identificador) del pago de Mercado Pago. |
| `status` | Estado de pago. Ej .: `approved` para un pago aprobado o `pending` para un pago pendiente. |
| `external_reference` | Valor que hayas enviado a la hora de crear la preferencia de pago. |
| `comerciante_order_id` | ID (identificador) de la orden de pago generada en Mercado Pago. |

> NOTE
>
> Nota
>
> Algunos de los parámetros mantienen la información de compra solo si el comprador ha completado el pago completo en Wallet Brick y no ha abandonado el flujo antes de regresar a tu sitio a través de la `back_urls` de `failure`.

Por ejemplo:

[[[
```php
<?php
$preference = new MercadoPago\Preference();
//...
$preference->back_urls = array(
    "success" => "https://www.tu-sitio/success",
    "failure" => "http://www.tu-sitio/failure",
    "pending" => "http://www.tu-sitio/pending"
);
$preference->auto_return = "approved";
// ...
?>
```
```node
var preference = {}
preference = {
  // ...
  "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "http://www.tu-sitio/failure",
        "pending": "http://www.tu-sitio/pending"
    },
    "auto_return": "approved",
  // ...
}
```
```java
PreferenceBackUrlsRequest backUrls =
// ...
   PreferenceBackUrlsRequest.builder()
       .success("https://www.seu-site/success")
       .pending("https://www.seu-site/pending")
       .failure("https://www.seu-site/failure")
       .build();

PreferenceRequest request = PreferenceRequest.builder().backUrls(backUrls).build();
// ...
```
```ruby
# ...
preference_data = {
  # ...
  back_urls = {
    success: 'https://www.tu-sitio/success',
    failure: 'https://www.tu-sitio/failure',
    pending: 'https://www.tu-sitio/pendings'
  },
  auto_return: 'approved'
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    BackUrls = new PreferenceBackUrlsRequest
    {
        Success = "https://www.tu-sitio/success",
        Failure = "http://www.tu-sitio/failure",
        Pending = "http://www.tu-sitio/pendings",
    },
    AutoReturn = "approved",
};
```
```python
preference_data = {
    "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "https://www.tu-sitio/failure",
        "pending": "https://www.tu-sitio/pendings"
    },
    "auto_return": "approved"
}
```
]]]