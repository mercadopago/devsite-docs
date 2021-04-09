

# Web Tokenize Checkout - Personalización

## Apertura del Web Tokenize Checkout

Puedes personalizar de qué forma abrir el checkout a través de funciones y atributos que pueden agregarse a la configuración en el código de tu integración:

### Sin botón de pago 

Usa el método `open` para <b>abrir el checkout sin mostrar el botón de pago</b>. Esto te permite conectarlo al elemento de tu página web desde el que prefieras realizar la apertura del Web Tokenize Checkout. 

[[[
```node
// Inicializa el checkout
const checkout = mp.checkout({
  tokenizer: {
    totalAmount: 4000,
    backUrl: 'https://www.mi-sitio.com/process'
  },
});
(...)
// Llama a la función ‘open’ desde el elemento de tu página que desees
// Por ejemplo: un radio button
<input type="radio" id="tokenizer-open-radio" onclick="checkout.open()">
```
]]]

### Con botón de pago

Utiliza el método `render` para mostrar un <b>botón de pago que permita la apertura del Web Tokenize Checkout</b>. Para ello, debes incluir los siguientes parámetros: 

| Parámetro | Tipo de dato | Descripción |
| --- | --- | --- |
|`container`|string|CSS Selector (identificador) del elemento donde se quiere mostrar el botón de pago.|
|`type` (opcional)|string|Permite definir el tipo de botón. Actualmente solo acepta el valor ‘wallet’ que muestra un botón de pago con el branding de Mercado Pago. <b>Valor por defecto:</b> botón de pago simple.|
|`label` (opcional)|string|Valor del texto del botón. <b>Por defecto:</b> “Pagar”

Puedes utilizar este método de dos formas distintas: 

* Incluyendo la opción `render` con sus respectivos parámetros dentro de las opciones de inicialización del checkout.
* Invocando a la función `render` posteriormente, desde el lugar que prefieras dentro de tu código, con sus respectivos parámetros.

[[[
  ```node
 // Dentro de las opciones de inicialización 
mp.checkout({
tokenizer: {
  totalAmount: 4000,
  backUrl: 'https://www.mi-sitio.com/process'
},
render: {
  container: '.tokenizer-container', // Indica dónde se mostrará el botón
  label: 'Pagar' // Cambia el texto del botón de pago (opcional)
 }
});

// Invocando la función posteriormente
mp.checkout.render({
  container: '.tokenizer-container',
  label: 'Pagar'
});
  ```
]]]

#### Botón de pago por defecto:

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

#### Personalizado:

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/>

#### Estilo
Para utilizar tu propio estilo, incluye el siguiente código CSS:

```css
button.mercadopago-button {
  /* Tus atributos CSS */
}
```

*Por ejemplo:*

```css
button.mercadopago-button {
  background-color: #fff;
  color: #111;
  border: 1px solid #111;
  border-radius: 0;
}
```

![Botón de pago con estilo personalizado Mercado Pago Web Tokenize Checkout](/images/paybutton-modified-css.png)

### Apertura automática del Web Tokenize Checkout
Añade el parámetro `autoOpen` a tus opciones de inicialización del checkout en tu integración para <b>mostrar automáticamente el Web Tokenize Checkout</b>, sin necesitar de la interacción con un botón u otro elemento para su apertura.

[[[
```node
// Inicializa el checkout 
const checkout = mp.checkout({
  tokenizer: {
    totalAmount: 4000,
    backUrl: 'https://www.mi-sitio.com/process'
  },
  autoOpen: true, // habilita la apertura automática del checkout
});
```
]]]

## Colores para encabezado y elementos

Agrega el atributo `theme` de la siguiente manera a las opciones de inicialización para personalizar el color de algunos elementos y el encabezado de la interfaz del checkout. 

[[[
```node
<script>
  mp.checkout({
    tokenizer: {...},
    render: {...},
    theme: {
        elementsColor: ''.
        headerColor: '',
    }
  });
</script>
```
]]]

### Encabezado

#### Estado por defecto

![Encabezado por defecto Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-header.png)

#### Personalización

Modifica el color del encabezado agregando el atributo `headerColor` al objeto `theme`. El valor del atributo deberá ser en formato hexadecimal. Por ejemplo:
[[[
```node
theme: {
  headerColor: '#c0392b'
}```
]]]

![Encabezado personalizado Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-header--custom.png)

### Elementos

#### Estado por defecto

![Interfaz por defecto Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-elements.png)

#### Personalización

Los elementos que puedes personalizar son:

* Botones
* Campos de ingreso de datos
* Elementos de transiciones: spinners y barras de progreso
* Bordes

Modifica el color de esos elementos agregando el atributo `elementsColor ` al objeto `theme`. El valor del atributo debe estar en formato hexadecimal. Por ejemplo:

```node
theme: {
  elementsColor: '#c0392b'
}
```

![Interfaz personalizada Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-elements--custom.png)


### Color de texto

El color del texto de los botones y encabezado, **será determinado automáticamente** dependiendo del [contraste](https://24ways.org/2010/calculating-color-contrast) del color definido.

Para un color de elemento *claro*, el color del texto será *negro* o `#000`. Por ejemplo:

```node
theme: {
    elementsColor: '#81ecec' // Color claro
}
```

![Personalización del color de fuente Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-fontcolor__light.png)

Para un color de elementos *oscuro*, el color del texto será *blanco* o `#fff`. Por ejemplo:

```node
theme: {
    elementsColor: '#8e44ad' // Color oscuro
}
```

![Personalización de color de fuente en elementos oscuros Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-fontcolor__dark.png)

## Detalle de la compra

### Estado por defecto

![Detalle de compra Mercado Pago Web Tokenize Checkout](/images/cow/cow-summary.png)


### Personalización

Puedes agregar y modificar elementos al detalle de la compra sumando el atributo `summary` dentro del objeto `tokenizer` en tus configuraciones de inicialización de la siguiente manera: 

[[[
  ```node
mp.checkout({
  tokenizer: {
      …
      summary: {...}, 
  },
  render: {...},
})
  ```
]]]

Los atributos que pueden agregarse y modificarse son los siguientes: 

| Atributo | Descripción |
| --- | --- |
| `productLabel` <br> `product`| Productos |
| `installments` | Cantidad de cuotas |
| `discount` <br> `discountLabel`| Descuento |
| `shipping` | Envío |
| `charge` | Recargo |
| `taxes` | Impuestos |
| `arrears` | Saldo pendiente |

#### Productos

Con  el atributo `productLabel` puedes especificar el texto que aparece como *"Productos"* en el detalle de la compra. Por ejemplo, puedes agregar el detalle de lo que se está pagando:

```node
summary: {
     productLabel: ‘4 productos’
}
```

Mediante el atributo `product` puedes especificar el monto en el detalle de la compra. Por ejemplo:

```node
summary: {
     product: 654
}
```

#### Cantidad mínima y máxima de cuotas

Personaliza los límites de cuotas sumando el atributo `installments` dentro del objeto tokenizer en tus configuraciones de inicialización, y agregando `minInstallments` o `maxInstallments` para establecer la cantidad mínima y máxima de cuotas respectivamente. Por ejemplo: 

```node
mp.checkout({
tokenizer: {
    …
    installments: {
        minInstallments: 1,
        maxInstallments: 12,
    }, 
},
render: {...},
});
```

> El valor mínimo para ambos atributos es `1`. Si completas los atributos con el mismo valor, se salteará la sección de cuotas del checkout.


#### Descuento

Usa el atributo `discountLabel` para  especificar el texto que aparece como *"Descuento"* en el detalle de la compra. Por ejemplo, puedes agregar el porcentaje de descuento:

```node
summary: {
     discountLabel: ‘Descuento 10%’
}
```

Mediante el atributo `discount`, agrega el monto de descuento en el detalle de la compra. Por ejemplo:

```node
summary: {
     discount: 70
}
```

> NOTE
>
> Nota
>
> Verás el monto como un *número negativo*.


#### Envío

Con el atributo `shipping` puedes especificar el monto de envío en el detalle de la compra. Por ejemplo:

```node
summary: {
     shipping: 100
}
```

> NOTE
>
> Nota
>
> En caso de que el envío especificado sea *"0"* (cero), se mostrará automáticamente el texto *"Gratis"*.


#### Recargos

Usa el atributo `charge` para especificar el monto de recargos en el detalle de la compra. Por ejemplo:

```node
summary: {
      charge: 10
}
```

Aparecerá en el detalle de la compra bajo el concepto de *"Recargos"*.


#### Impuestos

Con el atributo `taxes` puedes especificar el monto de impuestos en el detalle de la compra. Por ejemplo:

```node
summary: {
      taxes: 10
}
```

Aparecerá en el detalle de la compra bajo el concepto de *"Impuestos"*.

#### Saldo pendiente

Agrega el atributo `arrears` para especificar el monto de saldo pendiente en el detalle de la compra. Por ejemplo:

```node
summary: {
      arrears: 10
}
```

Aparecerá en el detalle de la compra bajo el concepto de *"Saldo pendiente"*.
