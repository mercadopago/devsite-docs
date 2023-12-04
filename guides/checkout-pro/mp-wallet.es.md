# Cuenta de Mercado Pago

La opción de pagar con Cuenta de Mercado Pago, por defecto, se presenta en todos los Checkouts de Mercado Pago en combinación con los pagos de los usuarios invitados (sin login).

Esta opción permite a los usuarios registrados en Mercado Pago y/o Mercado Libre iniciar sesión y utilizar los métodos disponibles para realizar sus pagos, además de poder incluir nuevas opciones de pago, como tarjetas de crédito.

----[mco, mpe, mlu, mlc]----
Es posible pagar con **tarjeta** y **saldo disponible** en un entorno seguro y optimizado, aumentando las posibilidades de conversión de ventas, además de permitir al vendedor ofrecer únicamente pagos con Cuenta de Mercado Pago. Con esto, la opción de pagar sin iniciar sesión no existirá, sin embargo, contribuirá a un aumento en la conversión de pagos. 

------------
----[mla]----
Es posible pagar con **tarjeta**, **saldo disponible** y **financiación sin tarjeta** en un entorno seguro y optimizado, aumentando las posibilidades de conversión de ventas, además de permitir al vendedor ofrecer únicamente pagos con Cuenta de Mercado Pago. Con esto, la opción de pagar sin iniciar sesión no existirá, sin embargo, contribuirá a un aumento en la conversión de pagos. 

------------
----[mlm]----
Es posible pagar con **tarjeta**, **saldo disponible** y **Financiamiento sin tarjeta** en un entorno seguro y optimizado, aumentando las posibilidades de conversión de ventas, además de permitir al vendedor ofrecer únicamente pagos con Cuenta de Mercado Pago. Con esto, la opción de pagar sin iniciar sesión no existirá, sin embargo, contribuirá a un aumento en la conversión de pagos. 

------------
----[mlb]----
Es posible pagar con **tarjeta**, **saldo disponible**, **Pix** y **financiación sin tarjeta** en un entorno seguro y optimizado, aumentando las posibilidades de conversión de ventas, además de permitir al vendedor ofrecer únicamente pagos con Cuenta de Mercado Pago. Con esto, la opción de pagar sin iniciar sesión no existirá, sin embargo, contribuirá a un aumento en la conversión de pagos.

------------

> WARNING
>
> Importante
>
> Al agregar esta opción, no será posible recibir pagos de usuarios no registrados en Mercado Pago, así como tampoco podrá recibir pagos vía efectivo o transferencia.

Sigue los pasos a continuación para configurar el Cuenta de Mercado Pago como método de pago.

> SERVER_SIDE
>
> h2
>
> Crear preferencia

Si eres un usuario y deseas que todos tus pagos se realicen a través de Wallet, puedes determinarlo a través de un atributo en la llamada a la API de preferencias. Para crear una preferencia, usa uno de los SDK disponibles a continuación.

> Además de las SDKs, también es posible crear una preferencia a través de la API de preferencias. Para eso, envíe un **POST** con el parámetro `purpose` y el valor `wallet_purchase` al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta el request o, si lo prefieres, usa uno de los SDK a continuación.

[[[
```php
===
El modo Cuenta de Mercado Pago funciona añadiendo el atributo _purpose_ en la preferencia.
===
<?php
   $client = new PreferenceClient();
   $preference = $client->create([
          "items"=> array(
            array(
              "title" => "My product",
              "description" => "Test product",
              "picture_url" => "http://i.mlcdn.com.br/portaldalu/fotosconteudo/48029_01.jpg",
              "category_id" => "electronics",
              "quantity" => 1,
              "currency_id" => "BRL",
              "unit_price" => 100
            )
          )
  ]);
  echo implode($preference);
?>
```
```node
===
El modo Cuenta de Mercado Pago funciona añadiendo el atributo _purpose_ en la preferencia.
===
const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.create({ body: {
items: [
 {
  id: '<ID>',
  title: '<title>',
  quantity: 1,
  unit_price: 100
 }
],
} }).then(console.log).catch(console.log);
```
```java
===
El modo Cuenta de Mercado Pago funciona añadiendo el atributo _purpose_ en la preferencia.
===
// Crea un objeto de preferencia
PreferenceClient client = new PreferenceClient();

// Crea un ítem en la preferencia
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Mi producto")
       .quantity(1)
       .unitPrice(new BigDecimal("75"))
       .build();

List<PreferenceItemRequest> items = new ArrayList<>();
items.add(item);

PreferenceRequest request =
   PreferenceRequest.builder().items(items).purpose("wallet_purchase").build();

client.create(request);
```
```ruby
===
El modo Cuenta de Mercado Pago funciona añadiendo el atributo _purpose_ en la preferencia.
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

# Este valor substituirá a la string "<%= @preference_id %>" en tu HTML
@preference_id = preference['id']
```
```csharp
===
El modo Cuenta de Mercado Pago funciona añadiendo el atributo _purpose_ en la preferencia.
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
]]]

----[mlc, mco]----

> WARNING
>
> Importante
>
> El valor `unit_price` debe ser un número entero.

------------

> CLIENT_SIDE
>
> h2
>
> Añadir checkout

Los pasos para configurar el Cuenta de Mercado Pago (*client-side*) son los mismos que los presentados [en esta sección](/developers/es/docs/checkout-pro/integrate-preferences).