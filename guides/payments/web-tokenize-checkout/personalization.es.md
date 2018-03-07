---
  sites_supported:
      - mla
      - mco
      - mlu
---

# Web Tokenize Checkout - Personalización

## Botón

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

Para utilizar tu propio estilo incluye el siguiente código CSS:

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

## Detalle

### Estado por defecto

```
data-transaction-amount="654"
```

![Summary Default](/images/summary-default.png)


### Personalización

#### "Producto"

##### Monto

Si agregas el monto de envío u otro detalle en el Detalle, deberás modificar el monto del pago.

Por ejemplo si el **total** es `664` y el **envío** es `10`, deberás especificar el detalle del **producto** a través de los atributos `data-summary-*`. En este ejemplo, `data-summary-product` podría mostrarse como `654`:

```html
data-transaction-amount="664" <!-- Total -->
data-summary-shipping="10" <!-- Envío -->
data-summary-product="654" <!-- Producto -->
```

![Summary Product](/images/summary-shipping.png)

##### Texto

Usando el atributo `data-summary-product-label`, puedes especificar el texto que aparece como *"Productos"* en el detalle. Por ejemplo, puedes agregar el detalle de lo que se está pagando:

```html
data-summary-product-label="4 productos"
```

![Summary Product](/images/summary-product.png)


#### "Descuento"

##### Monto

Usando el atributo `data-summary-discount`, puedes especificar el monto de descuento en el detalle. Por ejemplo:

```html
data-transaction-amount="588.6" <!-- Total -->
data-summary-discount="65.4" <!-- Descuento -->
data-summary-product="654" <!-- Producto -->
```

Verás el monto como un *número negativo*:

![Summary Discount](/images/summary-discount.png)

##### Texto

Usando el atributo `data-summary-product-label`, puedes especificar el texto que aparece como *"Descuento"* en el detalle. Por ejemplo, puedes agregar el porcentaje de descuento:

```html
data-summary-discount-label="Descuento 10%"
```

![Summary Discount](/images/summary-discount.png)

Puedes agregar información en el Summary usando los atributos `data-summary-*` en el fragmento de código HTML.


#### Envío

Usando el atributo `data-summary-shipping`, puedes especificar el monto de envío en el detalle. Por ejemplo:

```html
data-transaction-amount="664" <!-- Total -->
data-summary-shipping="10" <!-- Envío -->
data-summary-product="654" <!-- Producto -->
```

![Summary Shipping](/images/summary-shipping.png)

En caso de que el envío que especifiques sea `0` (cero), se mostrará automáticamente el texto "Envío gratis". Por ejemplo:

```html
data-transaction-amount="654" <!-- Total -->
data-summary-shipping="0" <!-- Envío -->
```

![Summary Free Shipping](/images/summary-free-shipping.png)


#### Recargos

Usando el atributo `data-summary-charges`, puedes especificar el monto de recargos en el detalle. Por ejemplo:

```html
data-transaction-amount="664" <!-- Total -->
data-summary-charges="10" <!-- Recargos -->
data-summary-product="654" <!-- Producto -->
```

Aparecerá en el detalle bajo el concepto de *"Recargos"*.

![Summary Charges](/images/summary-charges.png)

#### Impuestos

Usando el atributo `data-summary-taxes`, puedes especificar el monto de impuestos en el detalle. Por ejemplo:

```html
data-transaction-amount="664" <!-- Total -->
data-summary-taxes="10" <!-- Impuestos -->
data-summary-product="654" <!-- Producto -->
```

Aparecerá en el detalle bajo el concepto de *"Impuestos"*.

![Summary Taxes](/images/summary-taxes.png)

#### Saldo pendiente

Usando el atributo `data-summary-arrears`, puedes especificar el monto de saldo pendiente en el detalle. Por ejemplo:

```html
data-transaction-amount="664" <!-- Total -->
data-summary-arrears="10" <!-- Saldo pendiente -->
data-summary-product="654" <!-- Producto -->
```

Aparecerá en el detalle bajo el concepto de *"Saldo pendiente"*.

![Summary Arrears](/images/summary-arrears.png)
