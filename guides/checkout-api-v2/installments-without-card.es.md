----[mla, mlb, mlu, mco, mlc, mpe]----
# Financiación sin tarjeta

**Mercado Crédito** es el método de financiación de Mercado Pago que ofrece la opción de pagar en cuotas sin contar con una tarjeta.

Con esta línea de crédito, administrada por Mercado Pago, el dinero se acredita en su totalidad en la cuenta del vendedor, mientras que el cliente puede optar por pagar en hasta 12 pagos fijos mensuales, sin necesidad de contar con una tarjeta. El usuario solamente tendrá que ingresar a su cuenta de Mercado Pago (o crear una), conocer su límite disponible y elegir en cuántas cuotas quiere pagar.

> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible configurar **cuotas sin tarjeta** utilizando el **Brick de Wallet**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering#editor_2) de Wallet para obtener más detalles.

En esta guía encontrarás los pasos necesarios para ofrecer cuotas sin tarjeta en tu tienda.

------------
----[mlm]----
# Financiamiento sin tarjeta

**Mercado Crédito** es el método de financiación de Mercado Pago que ofrece la opción de pagar en mensualidades sin contar con una tarjeta.

Con esta línea de crédito, administrada por Mercado Pago, el dinero se acredita en su totalidad en la cuenta del vendedor, mientras que el cliente puede optar por pagar en hasta 12 pagos fijos mensuales, sin necesidad de contar con una tarjeta. El usuario solamente tendrá que ingresar a su cuenta de Mercado Pago (o crear una), conocer su límite disponible y elegir en cuántos meses quiere pagar.

> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar pagos con tarjeta a través de la **SDK de React**. Consulte la documentación [SDK JS - React](/developers/es/docs/sdks-library/client-side/sdk-js-react-installation) para obtener más información.

En esta guía encontrarás los pasos necesarios para ofrecer meses sin tarjeta en tu tienda.

------------

## Requisitos previos

Para realizar la integración es importante cumplir con los requisitos que se muestran a continuación.

| Requisitos | Descripción | 
|---|---|
| Cuenta de vendedor de Mercado Pago o Mercado Libre | Para integrar necesitas una cuenta de vendedor en Mercado Pago o Mercado Libre. Si no, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crear. | 
| Aplicación  | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Tus integraciones](/developers/es/docs/checkout-bricks/additional-content/your-integrations/introduction) para obtener más información sobre cómo crear una aplicación. |
| Instalar el SDK de Mercado Pago | Instale los SDK oficiales para simplificar su integración con nuestras [APIs](/developers/es/reference/payments/_payments/post). Para obtener más información, [haz clic aquí](/developers/es/docs/sdks-library/landing). |

Si se cumplen todos los requisitos previos, podrás realizar la integración de pagos en cuotas sin tarjeta.

## Configuración de integración

> SERVER_SIDE
>
> h3
>
> Crear preferencia 

Las preferencias son conjuntos de información sobre un producto y/o servicio que te permiten definir el nombre, el método de pago y otros atributos necesarios para obtener la URL para iniciar el flujo de pago al finalizar la compra.

La primera etapa para configurar los pagos con Mercado Crédito es la creación de la preferencia. Para esto, envía un POST con el parámetro `purpose` y el valor `onboarding_credits` al **endpoint** [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de los SDKs indicados a continuación.

[[[
```php
<?php
// Crea un objeto de preferencia
$preference = new MercadoPago\Preference();

// Crea un ítem en la preferencia
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
// Crea un objeto de preferencia
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
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
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
   PreferenceRequest.builder().items(items).purpose("onboarding_credits").build();

client.create(request);
```
```ruby
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
  purpose: 'onboarding_credits'
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor substituirá a la string "<%= @preference_id %>" en tu HTML
@preference_id = preference['id']
```
```csharp
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
    Purpose = "onboarding_credits",
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
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75
        }
    ],
    "purpose": "onboarding_credits"
}'
```
]]]

> CLIENT_SIDE
>
> h3
>
> Añadir checkout

Después de haber creado la preferencia en el backend, para adicionar el botón de pago será necesario instalar el SDK de frontend de Mercado Pago en el proyecto.

La instalación se hace en **dos etapas**: primero, **incluyendo el SDK de Mercado Pago** en el proyecto con tus credenciales configuradas, y luego, **iniciando el checkout** a partir de esa preferencia generada anteriormente.

1. Para incluir el SDK MercadoPago.js, agrega el código disponible debajo en el HTML del proyecto, o instálalo vía NPM de acuerdo a lo indicado en los ejemplos a continuación.

[[[
```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>

```
```bash
npm install @mercadopago/sdk-js

```
]]]

Luego, inicializa la integración al definir tu [clave pública](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials) usando el siguiente código.

[[[
```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>

```
```javascript

import { loadMercadoPago } from "@mercadopago/sdk-js";


await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

Hecho esto, es necesario que crees un container para definir la ubicación que el botón tendrá en la pantalla. La creación de este container se hace insertando un elemento en el código HTML de la página en la que el componente será renderizado.

> NOTE
>
> Importante
>
> El valor exhibido en **propiedad ID** es solo un ejemplo y puede ser alterado, pero se debe corresponder con el ID indicado en la etapa de renderización.

[[[
```html
<div id="wallet_container"></div>

```
]]]

2. Al finalizar la etapa anterior, inicializa tu checkout utilizando el ID de la preferencia previamente creada con el identificador del elemento donde el botón deberá ser exhibido.

[[[
```javascript
mp.bricks().create("wallet", "wallet_container", {
  initialization: {
    preferenceId: "<PREFERENCE_ID>",
  },
  customization: {
    texts: {
      valueProp: "convenience",
    },
  },
});

```
]]]

¡Listo! Al completar los pasos descritos anteriormente, el botón de pago se mostrará en la pantalla y habrás completado la integración. Sigue los siguientes pasos para explicar a tus clientes cómo funciona Mercado Crédito.

1. [Crea una cuenta](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) o ingresa en Mercado Pago. Si usas **Mercado Libre**, ¡ya tienes cuenta!
----[mla, mlb]----
2. Elige **Mercado Crédito** y la cantidad de cuotas en las que quieres pagar.
3. Después paga mes a mes tus cuotas desde la **app de Mercado Pago**.
------------
----[mlm]----
2. Elige Mercado Crédito y la cantidad de mensualidades en las que quieras pagar.
3. Después paga tus mensualidades desde la app de Mercado Pago.
------------