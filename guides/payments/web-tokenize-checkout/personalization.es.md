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

```
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

## Summary

### Estado por defecto

```
data-transaction-amount="654"
```

![Summary Default](/images/summary-default.png)

### Personalización

Puedes agregar información en el Summary usando los atributos `data-summary-*` en el fragmento de código HTML.

#### Envío

Usando el atributo `data-summary-shipping`, puedes especificar el monto de envío en el detalle. Por ejemplo:

```
data-summary-shipping="10"
```

En caso de que el envío que especifiques sea `0` (cero), se mostrará automáticamente el texto "Envío gratis". Por ejemplo:

```
data-summary-shipping="0"
```

![Summary Shipping](/images/summary-shipping.png)

#### Producto

Si agregas el monto de envío u otro detalle en el Summary, deberás modificar el detalle del monto del pago.

Por ejemplo si el `data-transaction-amount` (total) es `674` y el `data-summary-shipping` (envío) es `10`, deberás especificar el detalle a través de los atributos `data-summary-*`. En este caso, `data-summary-product` podría mostrarse como `654`:

```
data-transaction-amount="674"
data-summary-shipping="10"
data-summary-product="654"
```

![Summary Product](/images/summary-product.png)

#### Descuento

Usando el atributo `data-summary-discount`, puedes especificar el monto de descuento en el detalle. Por ejemplo:

```
data-summary-discount="34"
```

Verás el monto como un número negativo:

![Summary Discount](/images/summary-discount.png)

#### Cargos

Usando el atributo `data-summary-charge`, puedes especificar el monto de cargos en el detalle. Por ejemplo:

```
data-summary-charges="123"
```

Aparecerá en el detalle bajo el concepto de *"Cargos"*.

#### Impuestos

Usando el atributo `data-summary-taxes`, puedes especificar el monto de impuestos en el detalle. Por ejemplo:

```
data-summary-taxes="123"
```

Aparecerá en el detalle bajo el concepto de *"Impuestos"*.

#### Mora

Usando el atributo `data-summary-arrears`, puedes especificar el monto de mora en el detalle. Por ejemplo:

```
data-summary-arrears="123"
```

Aparecerá en el detalle bajo el concepto de *"Mora"*.
