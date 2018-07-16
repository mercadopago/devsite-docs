

# Web Payment Checkout - Personalización

## Botón

### Estado por defecto

![Payment button](/images/paybutton.png)

### Personalización

#### Texto

Por defecto el botón contiene el texto *"Pagar"*. Puedes modificar el texto del botón agregando el atributo `data-button-label` al fragmento de código HTML. Por ejemplo:

```html
data-button-label="Comprar"
```

![Payment button - Modified label](/images/paybutton-modified-label.png)

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

![Payment button - Modified CSS](/images/paybutton-modified-css.png)

## Detalle de la compra

### Estado por defecto

![Summary Default](/images/summary-default.png)


### Personalización

Los atributos que pueden agregarse y modificarse son los siguientes.

**Montos numéricos:**

- Productos: `data-summary-product`
- Descuento: `data-summary-discount`
- Envío: `data-summary-shipping`
- Recargos: `data-summary-charges`
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

Usando el atributo `data-summary-charges`, puedes especificar el monto de recargos en el detalle de la compra. Por ejemplo:

```html
data-summary-charges="10"
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
