# Interfaz de usuario

Personaliza Checkout Pro según tu modelo de negocio para ofrecer la mejor experiencia de compra posible a tus compradores.

## Apertura del Checkout Pro

Puedes personalizar cómo abre Checkout Pro a través de roles y atributos para agregar a tu configuración de integración.

### Abrir Checkout Pro sin botón de pago

Utiliza el método `open` para abrir Checkout desde cualquier elemento deseado de tu _sitio_, sin mostrar necesariamente el botón de pago a tus compradores.

Por ejemplo:

[[[
```html
<!-- Inicializa el checkout -->
<script>
  const checkout = mp.checkout({
    preference: {
      id: "YOUR_PREFERENCE_ID",
    },
  });
</script>
<!-- Llama a la función ‘open’ desde el elemento de tu página que desees -->
<!-- Por ejemplo: un radio button -->
<input type="radio" id="checkout-open-radio" onclick="checkout.open()" />
```
]]]

### Abrir Checkout Pro con botón de pago

Utiliza el método `render` para generar un botón de pago responsable de abrir Checkout Pro en tu sitio con los siguientes parámetros:

| Parámetro          | Tipo de datos | Descripción                                                                                                                                |
| ------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `container`        | `string`      | Selector CSS (identificador) del elemento HTML donde desees mostrar el botón de pago. Te permite definir el tipo de botón que deseas.      |
| `type` (opcional)  | `string`      | Define el tipo de botón deseado. Actualmente, solo acepta el valor de 'billetera', que muestra un botón de pago con la marca Mercado Pago. |
| `label` (opcional) | `string`      | Texto representado en el botón. Valor predeterminado: `Pagar`.                                                                             |

Puedes utilizar el método `render` de dos formas diferentes:

- Incluyendo la opción `render` con sus respectivos parámetros dentro de las opciones de inicialización de checkout.
- Invocando la función `render` más tarde, desde el lugar que prefieras dentro de tu código, con sus respectivos parámetros.

Por ejemplo:

[[[
```javascript
// Dentro de las opciones de inicialización
const checkout = mp.checkout({
  preference: {
    id: "YOUR_PREFERENCE_ID",
  },
  render: {
    container: ".cho-container",
    label: "Pagar",
  },
});

// Invocando la función posteriormente
checkout.render({
  container: ".cho-container",
  label: "Pagar",
});
```
]]]

#### Botón de pago por defecto

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

#### Botón de pago personalizado

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/><br/>

### Abrir Checkout Pro automáticamente

Agrega el parámetro `autoOpen` a las opciones de inicio de Checkout para mostrar automáticamente Checkout Pro, sin necesidad de que tus compradores interactúen con un botón o cualquier otro elemento para abrirlo:

[[[
```javascript
// Inicializa el checkout
const checkout = mp.checkout({
  preference: {
    id: "YOUR_PREFERENCE_ID",
  },
  autoOpen: true, // Habilita la apertura automática del Checkout Pro
});
```
]]]

## Esquema de apertura

Checkout Pro te permite cambiar tu esquema de apertura predeterminado.

Actualmente, los esquemas disponibles son:

- **Redirect**: abre Checkout Pro en una nueva ventana.
- **Modal**: abre Checkout Pro en tu sitio.

----[mla]----
![Checkout-redirect](/images/web-payment-checkout/checkout-redirect.png)

------------

----[mlc, mco, mlu, mlb, mlm]----
![Checkout-redirect](/images/web-payment-checkout/checkout-redirect-sv.png)

------------

Para integrar el esquema de redireccionamiento en tu integración, reemplaza el botón de pago configurado en la implementación básica y agrega el enlace web Checkout a tu sitio donde deseas que aparezca, como se muestra en el siguiente ejemplo:

[[[

```php
===
Checkout Pro se abrirá en el <code>init_point</code> definido por la preferencia
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
Checkout Pro se abrirá en el <code>init_point</code> definido por la preferencia
===
<!doctype html>
<html>
  <head>
    <title>Mi sitio</title>
  </head>
  <body>
    <a href="{{ init_point }}" target="_blank">Pagar</a>
    <!--Donde el valor que debe tomar href es el init_point de la preferencia creada en el Server-Side -->
  </body>
</html>
```

```java
===
Checkout Pro se abrirá en el <code>init_point</code> definido por la preferencia
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
Checkout Pro se abrirá en el <code>init_point</code> definido por la preferencia
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
Checkout Pro se abrirá en el <code>init_point</code> definido por la preferencia
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
Checkout Pro se abrirá en el <code>init_point</code> definido por la preferencia
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

## Estilo de color

Agrega el atributo `theme`, de acuerdo con el ejemplo a continuación, a las opciones de inicio de Checkout Pro para personalizar el color del encabezado y tus elementos:

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

> WARNING
>
> Importante
>
> La personalización de colores y elementos es válida solo para el esquema de apertura **modal**.

### Encabezado

Cambia el color del encabezado agregando el atributo `headerColor` al objeto` theme`. Ten en cuenta que el valor del atributo debe estar en formato hexadecimal.

Por ejemplo:

[[[
```javascript
theme: {
  headerColor: "#c0392b";
}
```
]]]

### Elementos

Los elementos de Checkout Pro que se pueden personalizar son:

- Botones;
- Campos de información;
- Elementos de transición como _spinners_ y barras de progreso;
- Bordes.

Puedes cambiar el color de estos elementos agregando el atributo `elementsColor` al objeto `theme`. Ten en cuenta que el valor del atributo debe estar en formato hexadecimal.

Por ejemplo:

```javascript
theme: {
  elementsColor: "#c0392b";
}
```

![Custom-Component](/images/web-payment-checkout/custom_components.gif)

#### Textos

El color del texto de los botones y el encabezado de Checkout Pro se determinará automáticamente según el [contraste](https://24ways.org/2010/calculating-color-contrast) del color definido para esos mismos elementos.

Los elementos de color claro tendrán el texto en color negro o `#000`. Por ejemplo:

```javascript
theme: {
  elementsColor: "#81ecec"; // Color claro
}
```

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

Los elementos de color oscuro tendrán el texto en color blanco o `#fff`. Por ejemplo:

```javascript
theme: {
  elementsColor: "#8e44ad"; // Color oscuro
}
```

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)

> PREV_STEP_CARD_ES
>
> Configuración de preferencias
>
> Configura los atributos de tus preferencias y adapta el Checkout Pro a tu modelo de negocio.
>
> [Configuración de preferencias](/developers/es/docs/checkout-pro/checkout-customization/preferences)

> NEXT_STEP_CARD_ES
>
> Configuraciones adicionales
>
> Adapta el estilo de tu marca en la experiencia de compra de Checkout Pro
>
> [Configuraciones adicionales](/developers/es/docs/checkout-pro/checkout-customization/additional-configuration)