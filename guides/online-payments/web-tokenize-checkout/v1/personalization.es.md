

# Web Tokenize Checkout - Personalización

> WARNING
>
> Importante
>
> Esta documentación utiliza la antigua versión de la librería. Para ver la versión nueva, ve a la [sección de Personalización con MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/web-tokenize-checkout/personalization).


## Botón

### Estado por defecto

![Botón de pago por defecto de Mercado Pago en Web Tokenize Checkout](/images/paybutton.png)

### Personalización

#### Texto

Por defecto el botón contiene el texto *"Pagar"*. Puedes modificar el texto del botón agregando el atributo `data-button-label` al fragmento de código HTML. Por ejemplo:

```html
data-button-label="Comprar"
```

![Botón de pago con personalización de texto Mercado Pago en Web Tokenize Checkout](/images/paybutton-modified-label.png)

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


## Colores en la interfaz

### Elementos

#### Estado por defecto

![Interfaz por defecto Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-elements.png)

#### Personalización

Los elementos que pueden personalizarse son:

- Botones
- Campos de ingreso de datos: inputs
- Elementos de transiciones: spinners y barras de progreso
- Bordes

Puedes modificar el color de esos elementos agregando el atributo `data-elements-color` al fragmento de código HTML.

El valor del atributo deberá ser en formato hexadecimal. Por ejemplo:

```html
data-elements-color="#c0392b"
```

![Interfaz personalizada Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-elements--custom.png)


### Encabezado

#### Estado por defecto

![Encabezado por defecto Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-header.png)

#### Personalización

Puedes modificar el color del encabezado agregando el atributo `data-header-color` al fragmento de código HTML.

El valor del atributo deberá ser en formato hexadecimal. Por ejemplo:

```html
data-header-color="#c0392b"
```

![Encabezado personalizado Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-header--custom.png)


### Color de texto

El color del texto de los botones y encabezado, **será determinado automáticamente** dependiendo del [contraste](https://24ways.org/2010/calculating-color-contrast) del color definido.

Para un color de elemento *claro*, el color del texto será *negro* o `#000`. Por ejemplo:

```html
data-elements-color="#81ecec" <!-- Color claro -->
```

![Personalización del color de fuente Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-fontcolor__light.png)

Para un color de elementos *oscuro*, el color del texto será *blanco* o `#fff`. Por ejemplo:

```html
data-elements-color="#8e44ad" <!-- Color oscuro -->
```

![Personalización de color de fuente en elementos oscuros Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-fontcolor__dark.png)

## Detalle de la compra

### Estado por defecto

![Detalle de compra Mercado Pago Web Tokenize Checkout](/images/cow/cow-summary.png)


### Personalización

Los atributos que pueden agregarse y modificarse son los siguientes.

**Montos numéricos:**

- Productos: `data-summary-product`
- Cantidad mínima de cuotas: `data-min-installments`
- Cantidad máxima de cuotas: `data-max-installments`
- Descuento: `data-summary-discount`
- Envío: `data-summary-shipping`
- Recargos: `data-summary-charge`
- Impuestos: `data-summary-taxes`
- Saldo pendiente: `data-summary-arrears`

**Textos:**

- Para modificar el título "Productos": `data-summary-product-label`
- Para modificar el título "Descuento": `data-summary-discount-label`


#### Productos

Usando el atributo `data-summary-product-label`, puedes especificar el texto que aparece como *"Productos"* en el detalle de la compra. Por ejemplo, puedes agregar el detalle de lo que se está pagando:

```html
data-summary-product-label="4 productos"
```

Mediante el atributo `data-summary-product`, puedes especificar el monto en el detalle de la compra. Por ejemplo:

```html
data-summary-product="654"
```

#### Cantidad mínima y máxima de cuotas

Usando el atributo `data-min-installments` o `data-max-installments`, puedes limitar el mínimo y máximo de la cantidad de cuotas que deseas ofrecer a tu pagador. 
Por ejemplo:

```html
data-min-installments = 1

data-max-installments = 6
```

> El valor mínimo para ambos atributos es `1`. Si completas los atributos con el mismo valor, se salteará la sección de cuotas del checkout.


#### Descuento

Usando el atributo `data-summary-discount-label`, puedes especificar el texto que aparece como *"Descuento"* en el detalle de la compra. Por ejemplo, puedes agregar el porcentaje de descuento:

```html
data-summary-discount-label="Descuento 10%"
```

Mediante el atributo `data-summary-discount`, puedes especificar el monto de descuento en el detalle de la compra. Por ejemplo:

```html
data-summary-discount="65.4"
```

> NOTE
>
> Nota
>
> Verás el monto como un *número negativo*.


#### Envío

Usando el atributo `data-summary-shipping`, puedes especificar el monto de envío en el detalle de la compra. Por ejemplo:

```html
data-summary-shipping="10"
```

> NOTE
>
> Nota
>
> En caso de que el envío especificado sea *"0"* (cero), se mostrará automáticamente el texto *"Gratis"*.


#### Recargos

Usando el atributo `data-summary-charge`, puedes especificar el monto de recargos en el detalle de la compra. Por ejemplo:

```html
data-summary-charge="10"
```

Aparecerá en el detalle de la compra bajo el concepto de *"Recargos"*.


#### Impuestos

Usando el atributo `data-summary-taxes`, puedes especificar el monto de impuestos en el detalle de la compra. Por ejemplo:

```html
data-summary-taxes="10"
```

Aparecerá en el detalle de la compra bajo el concepto de *"Impuestos"*.

#### Saldo pendiente

Usando el atributo `data-summary-arrears`, puedes especificar el monto de saldo pendiente en el detalle de la compra. Por ejemplo:

```html
data-summary-arrears="10"
```

Aparecerá en el detalle de la compra bajo el concepto de *"Saldo pendiente"*.
