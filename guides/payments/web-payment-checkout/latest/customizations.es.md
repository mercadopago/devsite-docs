---
sites_supported:
  - mla
---

# Personalizaciones

## Esquema modal

El Web Checkout modal permite cambiar su esquema de apertura.

Los esquemas disponibles actualmente son:

* **Redirect**: abre el Web Checkout en una nueva ventana.
* **Modal**: abre el Web Checkout en tu sitio.

![Checkout-Modal](/images/web-payment-checkout/checkout-modal.png)

Para integrar el esquema modal, reemplaza el botón de pago que realizaste en la integración 
básica por el siguiente snippet:

[[[
```php
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-access-token= “ENV_ACCESS_TOKEN”
   data-preference-id="<?php echo $preference->id; ?>">
  </script>
</form>
```
```node
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-access-token= “ENV_ACCESS_TOKEN”
   data-preference-id="$$id$$">
  </script>
</form>
```
```java
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-access-token= “ENV_ACCESS_TOKEN”
   data-preference-id="${preference.id}">
  </script>
</form>
```
```ruby
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-access-token= “ENV_ACCESS_TOKEN”
   data-preference-id="%= @init_point %>">
  </script>
</form>
```
```csharp
<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-access-token= “ENV_ACCESS_TOKEN”
   data-preference-id="@Html.DisplayFor(model => model.id)">
  </script>
</form>
```
]]]

### Colores

> NOTE
> 
> Nota
> 
> Válido sólo para el esquema modal.

#### Elementos

Los elementos que pueden personalizarse son:

* Botones
* Campos de ingreso de datos
* Elementos de transiciones: spinners y barras de progreso
* Bordes

Puedes modificar el color de esos elementos agregando el atributo data-elements-color en el código HTML.
El valor del atributo debe estar en formato hexadecimal. Por ejemplo:


[[[
```html
data-header-color="#c0392b"
```
]]]

![Custom-Component](/images/web-payment-checkout/custom_components.gif)

#### Textos

El color del texto de los botones será determinado automáticamente dependiendo del contraste del color definido.
Para un color de elemento claro, el color del texto será negro o #000. Por ejemplo:

[[[
```html
data-elements-color="#81ecec" <!-- Color claro -->
```
]]

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

Para un color de elementos oscuro, el color del texto será blanco o #fff. Por ejemplo:

[[[
```html
data-elements-color="#8e44ad" <!-- Color oscuro -->
```
]]

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)

### Botones

#### Texto

Por defecto, el botón muestra el texto “Pagar”. Puedes modificar el texto del botón agregando el atributo data-button-label en el código HTML. Por ejemplo:

[[[
```html
data-button-label="Comprar"
```
]]

**Por defecto:**

![Default Label Button](/images/web-payment-checkout/default_label_button.png)

**Personalizado:**

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)

[Ir a Configuraciones]()