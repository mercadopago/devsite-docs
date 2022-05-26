# Personalizaciones


## Esquema redirect

El Checkout Pro permite cambiar su esquema de apertura.

Los esquemas disponibles actualmente son:

* **Redirect**: abre el Checkout Pro en una nueva ventana.
* **Modal**: abre el Checkout Pro en tu sitio.

----[mla]----
![Checkout-redirect](/images/web-payment-checkout/checkout-redirect.png)
------------
----[mlc, mco, mlu, mlb, mlm]----
![Checkout-redirect](/images/web-payment-checkout/checkout-redirect-sv.png)
------------


Para integrar el esquema redirect, reemplaza el botón de pago que realizaste en la integración básica por este nuevo y suma el link del Web Checkout en tu sitio en el lugar que quieras que aparezca.

[[[
```php
===
Redirige al 'init_point' de la preferencia
===
<!doctype html>
<html>
  <head>
    <title>Pagar</title>
  </head>
  <body>
    <a href="<?php echo $preference->init_point; ?>">Pagar con Mercado Pago</a>
  </body>
</html>
```
```node
===
Redirige al 'init_point' de la preferencia
===
<!doctype html>
<html>
  <head>
    <title>Mi sitio</title>
  </head>
  <body>
    <a href="$$init_point$$" target="_blank">Pagar</a>
  </body>
</html>
```
```java
===
Redirige al 'init_point' de la preferencia
===
<!doctype html>
<html>
  <head>
    <title>Pagar</title>
  </head>
  <body>
    <a href="${preference.initPoint}">Pagar con Mercado Pago</a>
  </body>
</html>
```
```ruby
===
Redirige al 'init_point' de la preferencia
===
<!doctype html>
<html>
  <head>
    <title>Mi sitio</title>
  </head>
  <body>
    <a href="<%= @init_point %>" target="_blank">Pagar</a>
  </body>
</html>
```
```csharp
===
Redirige al 'init_point' de la preferencia
===
<!doctype html>
<html>
  <head>
    <title>Pagar</title>
  </head>
  <body>
    <a href="@Html.DisplayFor(model => model.InitPoint)">Pagar con Mercado Pago</a>
  </body>
</html>
```
```python
===
Redirige al 'init_point' de la preferencia
===
<!doctype html>
<html>
  <head>
    <title>Pay</title>
  </head>
  <body>
    <a href="{{ init_point }}" target="_blank">Pay with Mercado Pago</a>
  </body>
</html>
```
]]]

## Colores

> NOTE
>
> Nota
>
> Válido solo para el esquema modal.

### Elementos

Los elementos que pueden personalizarse son:

* Botones
* Campos de ingreso de datos
* Elementos de transiciones: spinners y barras de progreso
* Bordes

Puedes modificar el color de esos elementos agregando el atributo `data-elements-color` en el código HTML.
El valor del atributo debe estar en formato hexadecimal. Por ejemplo:


```html
data-header-color="#c0392b"
```

![Custom-Component](/images/web-payment-checkout/custom_components.gif)
</p><br/>

#### Textos

El color del texto de los botones será determinado automáticamente dependiendo del contraste del color definido.
Para un color de elemento claro, el color del texto será negro o #000. Por ejemplo:

```html
data-elements-color="#81ecec" <!-- Color claro -->
```

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

<br/>Para un color de elementos oscuro, el color del texto será blanco o #fff. Por ejemplo:

```html
data-elements-color="#8e44ad" <!-- Color oscuro -->
```

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)

## Botones

### Texto

Por defecto, el botón muestra el texto “Pagar”. Puedes modificar el texto del botón agregando el atributo `data-button-label` en el código HTML. Por ejemplo:

```html
data-button-label="Comprar"
```

### Por defecto:

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

### Personalizado:

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/><br/>

> WARNING
>
> Importante
>
> Esta documentación utiliza la antigua versión de la librería. Para ver la versión nueva, ve a la [sección de Personalizaciones con MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/customizations).

---

### Próximos pasos


> LEFT_BUTTON_RECOMMENDED_ES
>
> Otras funcionalidades
>
> Configura tus pago y adapta Checkout Pro a tu negocio.
>
> [Otras funcionalidades](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Optimiza tu integración y mejora la gestión de tus ventas.
>
> [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/advanced-integration)
