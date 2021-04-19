# Personalizaciones

## Apertura del Checkout Pro

Puedes personalizar de qué forma abrir el checkout a través de funciones y atributos que pueden agregarse a la configuración en el código de tu integración:

### Sin botón de pago 

Usa el método `open` para <b>abrir el checkout sin mostrar el botón de pago</b>. Esto te permite conectarlo al elemento de tu página web desde el que prefieras realizar la apertura del Checkout Pro. 

[[[
```html
<!-- Inicializa el checkout -->
<script>
const checkout = mp.checkout({
  preference: {
      id: 'YOUR_PREFERENCE_ID'
  }
});
</script>
<!-- Llama a la función ‘open’ desde el elemento de tu página que desees -->
<!-- Por ejemplo: un radio button --> 
<input type="radio" id="checkout-open-radio" onclick="checkout.open()">
```
]]]

### Con botón de pago

Utiliza el método `render` para mostrar un <b>botón de pago que permita la apertura del Checkout Pro</b>. Para ello, debes incluir los siguientes parámetros: 

| Parámetro | Tipo de dato | Descripción |
| --- | --- | --- |
|`container`|string|CSS Selector (identificador) del elemento donde se quiere mostrar el botón de pago.|
|`type` (opcional)|string|Permite definir el tipo de botón. Actualmente solo acepta el valor ‘wallet’ que muestra un botón de pago con el branding de Mercado Pago. <b>Valor por defecto:</b> botón de pago simple.|
|`label` (opcional)|string|Valor del texto del botón. <b>Por defecto:</b> “Pagar”

Puedes utilizar este método de dos formas distintas: 

* Incluyendo la opción `render` con sus respectivos parámetros dentro de las opciones de inicialización del checkout.
* Invocando a la función `render` posteriormente, desde el lugar que prefieras dentro de tu código, con sus respectivos parámetros.

[[[
  ```javascript
 // Dentro de las opciones de inicialización 
mp.checkout({
   preference: {
       id: 'YOUR_PREFERENCE_ID'
   },
   render: {
       container: '.cho-container',
       label: 'Pagar',
    }
});

// Invocando la función posteriormente
mp.checkout.render({
    container: '.cho-container',
    label: 'Pagar'
});
  ```
]]]

#### Botón de pago por defecto:

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

#### Personalizado:

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/><br/>

### Apertura automática del Checkout Pro 
Añade el parámetro `autoOpen` a tus opciones de inicialización del checkout en tu integración para <b>mostrar automáticamente el Checkout Pro</b>, sin necesitar de la interacción con un botón u otro elemento para su apertura.

[[[
```javascript
// Inicializa el checkout 
const checkout = mp.checkout({
  preference: {
      id: 'YOUR_PREFERENCE_ID'
  },
  autoOpen: true, // habilita la apertura automática del Checkout Pro
});
```
]]]

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

## Colores para encabezado y elementos

Agrega el atributo `theme` de la siguiente manera a las opciones de inicialización para personalizar el color de algunos elementos y el encabezado de la interfaz del checkout. 

[[[
```html
<script>
  mp.checkout({
    preference: {...},
    render: {...},
    theme: {
        elementsColor: ''.
        headerColor: '',
    }
  });
</script>
```
]]]
> NOTE
>
> Nota
>
> Válido solo para el esquema modal.

### Encabezado
Modifica el color del encabezado agregando el atributo `headerColor` al objeto `theme`. El valor del atributo deberá ser en formato hexadecimal. Por ejemplo:
[[[
```javascript
theme: {
  headerColor: '#c0392b'
}```
]]]

### Elementos

Los elementos que puedes personalizar son:

* Botones
* Campos de ingreso de datos
* Elementos de transiciones: spinners y barras de progreso
* Bordes

Modifica el color de esos elementos agregando el atributo `elementsColor` al objeto `theme`. El valor del atributo debe estar en formato hexadecimal. Por ejemplo:

```javascript
theme: {
  elementsColor: '#c0392b'
}
```

![Custom-Component](/images/web-payment-checkout/custom_components.gif)
</p><br/>

#### Color del texto

El color del texto de los botones y encabezado, **será determinado automáticamente** dependiendo del [contraste](https://24ways.org/2010/calculating-color-contrast) del color definido.
Para un color de elemento *claro*, el color del texto será *negro* o `#000`. Por ejemplo:

```javascript
theme: {
    elementsColor: '#81ecec' // Color claro
}
```

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

<br/>Para un color de elementos *oscuro*, el color del texto será *blanco* o `#fff`. Por ejemplo:

```javascript
theme: {
    elementsColor: '#8e44ad' // Color oscuro
}
```

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)

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
