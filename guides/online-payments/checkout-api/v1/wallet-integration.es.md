# Recibe pagos con la billetera de Mercado Pago

Agrega en tu integración el Checkout Pro modo billetera, para que **recibas pagos únicamente de usuarios registrados en Mercado Pago, con sus tarjetas y dinero disponible**.

Esto significa que tus clientes tienen más formas de pagarte y pueden acceder a mejores beneficios, sin alterar la dinámica de tu Checkout API.

![Checkout-Wallet](/images/web-payment-checkout/cho-wallet-landing.png)

## Beneficios de la billetera de Mercado Pago

* Tus clientes pueden pagarte con más medios de pago y de forma más rápida:
  * **Con tarjetas de crédito o débito ya guardadas** en sus cuentas de Mercado Pago, ahorrando el esfuerzo de ingresar una tarjeta desde el comienzo. También tienen sus **direcciones guardadas**, lo que simplifica todo el proceso de carga.
  * **Con dinero disponible en Mercado Pago** tienen su dinero listo para ser usado en el momento, en tan solo 1 click.
----[mla]----
* Tus clientes pueden pagarte en hasta 12 cuotas sin usar tarjeta de crédito, siendo financiados por [Mercado Crédito](https://www.mercadolibre.com.ar/mercado-credito/meses-sin-tarjeta/).
------------
----[mlb]----
* Tus clientes pueden pagarte en hasta 12 cuotas sin usar tarjeta de crédito, siendo financiados por [Mercado Crédito](https://www.mercadolibre.com.br/mercado-credito/meses-sin-tarjeta/).
------------
* La conversión de tu Checkout mejora al ofrecer medios de pago más dinámicos y fáciles de usar.
* Mejora la aprobación de tus pagos con menor riesgo de fraude.

## Cómo sumar la billetera en tu sitio

Necesitas integrar [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction) configurado como [modo billetera](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations#bookmark_aceptar_pagos_%C3%BAnicamente_de_usuarios_registrados) para agregar la billetera de Mercado Pago en tu sitio.

Para integrarlo, tienes que [generar la preferencia de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/integration#bookmark_pasos_para_integrarte) con la información del producto o servicio que quieras ofrecer y agregar la opción de pago en tu sitio. 

### Pasos para integrar la billetera

> SERVER_SIDE
>
> h4
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Genera tu preferencia

Para comenzar, tienes que generar tu preferencia de pago desde tu backend con la [SDK de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements#bookmark_utiliza_nuestras_librer%C3%ADas_siempre) que utilizaste en tu Checkout API. 

[[[
```php
===
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
===
<?php
// Crea un objeto de preferencia
$preference = new MercadoPago\Preference();

// Crea un ítem en la preferencia
$item = new MercadoPago\Item();
$item->title = 'Mi producto';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
===
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
===
// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ],
  purpose: 'wallet_purchase'
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
===
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
===
// Crea un objeto de preferencia
Preference preference = new Preference();

// Crea un ítem en la preferencia
Item item = new Item();
item.setTitle("Mi producto")
    .setQuantity(1)
    .setUnitPrice((float) 75);
preference.appendItem(item);
preference.setPurpose("wallet_purchase");
preference.save();
```
```ruby
===
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
===
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Crea un objeto de preferencia
preference_data = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1
    }
  ],
  purpose: 'wallet_purchase'
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor reemplazará el string "<%= @preference_id %>" en tu HTML
@preference_id = preference['id']
```
```csharp
===
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
===
// Crea el objeto de request de la preferencia
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Mi producto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
    Purpose = "wallet_purchase",
};
// Crea la preferencia
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
    "purpose": "wallet_purchase"
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
El modo billetera funciona agregando el atributo _purpose_ en la preferencia.
===
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
    "purpose": "wallet_purchase"
}'
```
]]]

----[mlc, mco]----

> WARNING
>
> Importante
>
> El valor de `unit_price` debe ser entero.

------------
<span></span>

> CLIENT_SIDE
>
> h4
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Suma el checkout a tu sitio

Luego, desde tu frontend, agrega el siguiente código para mostrar el botón de pago de Checkout Pro modo billetera en el lugar que quieras que aparezca.

[[[
```php
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="<?php echo $preference->id; ?>"
  data-button-label="Pagar con Mercado Pago"
  data-button-type="wallet">
</script>
```
```node
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="<%= global.id %>"
  data-button-label="Pagar con Mercado Pago"
  data-button-type="wallet">
</script>
```
```java
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="${preference.id}"
  data-button-label="Pagar con Mercado Pago"
  data-button-type="wallet">
</script>
```
```ruby
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="<%= @preference_id %>"
  data-button-label="Pagar con Mercado Pago"
  data-button-type="wallet">
</script>
```
```csharp
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="@Html.DisplayFor(model => model.id)"
  data-button-label="Pagar con Mercado Pago"
  data-button-type="wallet">
</script>
```
```python
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="{{ preference_id }}"
  data-button-label="Pagar con Mercado Pago"
  data-button-type="wallet">
</script>
```
]]]

> WARNING
>
> Importante
>
> Esta documentación utiliza la antigua versión de la librería. Para ver la versión nueva, ve a la [sección de Recibe pagos con la billetera de Mercado Pago con MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/wallet-integration).


Para más información sobre cada atributo, consulta la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post). 

¡Y listo! Ya tienes integrada la billetera de Mercado Pago en tu sitio. 

> WARNING
>
> Importante
>
> Para probarlo, no te olvides de acceder desde otro navegador o cerrar la sesión de tu cuenta de Mercado Pago ya que no puedes pagarte a ti mismo.<br/> 

---

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada de Checkout Pro
>
> Optimiza la integración de tu billetera para mejorar la gestión de tus ventas.
>
> [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/advanced-integration)


> RIGHT_BUTTON_RECOMMENDED_ES
>
> Prueba la billetera
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Pruebas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration)
