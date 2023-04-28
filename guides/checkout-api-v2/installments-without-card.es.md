----[mla, mlb]----
# Pagos en cuotas sin tarjeta

**Mercado Crédito** es el método de financiación de Mercado Pago que permite pagar en cuotas sin tarjeta.

Al ofrecer esta opción en tu tienda, tus clientes podrán comprar un producto hoy y pagarlo después en cuotas. Para tu negocio, la aprobación de la compra es inmediata y está garantizada, se te acredita la totalidad por adelantado y tus clientes nos pagan después.

> NOTE
>
> Importante
>
> Ahora también es posible integrar el pago con tarjeta a través del SDK React. Consulta los detalles cliqueando aqui.

En esta guía encontrarás los pasos necesarios para ofrecer cuotas sin tarjeta en tu tienda.

------------
----[mlm]----
# Pagos en meses sin tarjeta de crédito

Mercado Crédito es el método de financiación de Mercado Pago que permite pagar en meses sin tarjeta de crédito.

Al ofrecer esta opción en tu tienda, tus clientes podrán comprar un producto hoy y pagarlo después a meses. Para tu negocio, la aprobación de la compra es inmediata y está garantizada, se te acredita la totalidad por adelantado y tus clientes nos pagan después.

> NOTE
>
> Importante
>
> Ahora también es posible integrar el pago con tarjeta a través del SDK React. Consulta los detalles cliqueando aqui.

En esta guía encontrarás los pasos necesarios para ofrecer meses sin tarjeta en tu tienda.

------------

## Requisitos previos

Para realizar la integración es importante cumplir con los requisitos que se muestran a continuación.

| Requisitos | Descripción | 
|---|---|
| Cuenta de vendedor de Mercado Pago o Mercado Libre | Para integrar necesitas una cuenta de vendedor en Mercado Pago o Mercado Libre. Si no, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crear. | 
| Aplicación  | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Dashboard](/developers/es/docs/checkout-bricks/additional-content/dashboard/introduction) para obtener más información sobre cómo crear una aplicación. |
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
// Este valor substituirá a la string "<%= global.id %>" en tu HTML
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

2. Luego, inicializa la integración al definir tu [clave pública](/developers/es/docs/checkout-api/additional-content/credentials) usando el siguiente código.

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

3. Hecho esto, es necesario que crees un container para definir la ubicación que el botón tendrá en la pantalla. La creación de este container se hace insertando un elemento en el código HTML de la página en la que el componente será renderizado.

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

4. Al finalizar la etapa anterior, inicializa tu checkout utilizando el ID de la preferencia previamente creada con el identificador del elemento donde el botón deberá ser exhibido.

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

Al concluir los pasos mencionados anteriormente, debería ver un botón similar al ejemplo ilustrado a continuación.

----[mla, mlb]---- 
![cuotas sin tarjeta](api/button-installments-w-card-mla-es.png)

------------
----[mlm]---- 
![meses sin tarjeta](api/button-installments-w-card-mlm-es.png)

------------

### Ejemplo del flujo de pago

----[mla, mlb]---- 
![ejemplo flujo](api/flow-installments-w-card-mla-es.gif)

------------
----[mlm]---- 
![ejemplo flujo](api/flow-installments-w-card-mlm-es.gif)

------------

### Sugerencias y buenas prácticas

Para ofrecer la mejor experiencia a tus compradores usando Mercado Crédito, te sugerimos:

* Usar mayúsculas en las iniciales de la marca: Mercado Pago

----[mla, mlb]----
![iniciales](api/suggestions1-installments-w-card-mla-es.png)

------------
----[mlm]----
![iniciales](api/suggestions1-installments-w-card-mlm-es.png)

------------

* Mantener el logo de Mercado Pago

----[mla, mlb]----
![logo](api/suggestions2-installments-w-card-mla-es.png)

------------
----[mlm]----
![logo](api/suggestions2-installments-w-card-mlm-es.png)

------------

----[mla, mlb]----
* Mantener la propuesta de valor de cuotas sin tarjeta

![propuesta](api/suggestions3-installments-w-card-mla-es.png)

------------
----[mlm]----
* Mantener la propuesta de valor de cuotas sin meses

![propuesta](api/suggestions3-installments-w-card-mlm-es.png)

------------

* Mantener la alineación y los espacios entre los elementos del botón

----[mla, mlb]----
![alineación](api/suggestions4-installments-w-card-mla-es.png)

------------
----[mlm]----
![alineación](api/suggestions4-installments-w-card-mlm-es.png)

------------

Para explicar mejor a tus clientes cómo funciona Mercado Crédito, puedes compartirles estos pasos a continuación.

1. [Crea una cuenta](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) o ingresa en Mercado Pago. Si usas **Mercado Libre**, ¡ya tienes cuenta!
----[mla, mlb]----
2. Elige **Mercado Crédito** y la cantidad de cuotas en las que quieres pagar.
3. ¡Listo! Después paga mes a mes tus cuotas desde la **app de Mercado Pago**.
------------
----[mlm]----
2. Elige Mercado Crédito y la cantidad de mensualidades en las que quieras pagar.
3. ¡Listo! Después paga tus mensualidades desde la app de Mercado Pago.
------------