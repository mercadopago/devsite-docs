---
  sites_supported:
      - mla
      - mco
      - mlu
---

# Web Tokenize Checkout - Personalización

## Estado por defecto

![Payment button](/images/paybutton.png)

## Personalización

### Texto

Por defecto el botón contiene el texto *"Pagar"*. Puedes modificar el texto del botón agregando el atributo `"data-button-label"` al fragmento de código javascript. Por ejemplo:

```
data-button-label="Comprar"
```

![Payment button - Modified label](/images/paybutton-modified-label.png)

### Estilo

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
