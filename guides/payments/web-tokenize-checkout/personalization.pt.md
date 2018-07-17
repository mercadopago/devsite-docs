# Web Tokenize Checkout - Personalização

## Botão

### Status padrão

![Payment button](/images/paybutton.png)

### Personalização

#### Texto

Por padrão o botão contém o texto *"Pagar"*. Você pode modificar o texto do botão adicionando o atributo `"data-button-label"` ao fragmento de código javascript. Por exemplo:

```html
data-button-label="Comprar"
```

![Payment button - Modified label](/images/paybutton-modified-label.png)

#### Estilo

Para utilizar seu próprio estilo inclua o seguinte código CSS:

```css
button.mercadopago-button {
  /* Seus atributos CSS */
}
```

*Por exemplo:*

```css
button.mercadopago-button {
  background-color: #fff;
  color: #111;
  border: 1px solid #111;
  border-radius: 0;
}
```

![Payment button - Modified CSS](/images/paybutton-modified-css.png)


## Cores na interface

### Elementos

#### Status padrão

![Standard elements](/images/cow-ui-elements__pt.png)

#### Personalização

Os elementos que podem ser personalizados incluem:

- Botões
- Campos de ingresso de dados: inputs
- Elementos de transições: spinners
- Bordas

É possível modificar a cor adicionando o atributo `data-elements-color` ao fragmento de código HTML.

O valor do atributo deverá ser em formato hexadecimal. Por exemplo:

```html
data-elements-color="#c0392b"
```

![Custom elements](/images/cow-ui-elements--custom__pt.png)


### Cabeçalho

#### Status padrão

![Standard header](/images/cow-ui-header__pt.png)

#### Personalização

É possível modificar a cor do cabeçalho adicionando o atributo `data-header-color` ao fragmento de código HTML.

O valor do atributo deverá ser em formato hexadecimal. Por exemplo:

```html
data-header-color="#c0392b"
```

![Custom header](/images/cow-ui-header--custom__pt.png)

### Color de texto

El color del texto de los botones y encabezado, **será determinado automáticamente** dependiendo del [contraste](https://24ways.org/2010/calculating-color-contrast) del color definido.

Para un color de elemento *claro*, el color del texto será *negro* o `#000`. Por ejemplo:

```html
data-elements-color="#81ecec" <!-- Color claro -->
```

![Font color in light element](/images/cow-ui-fontcolor__light.png)

Para un color de elementos *oscuro*, el color del texto será *blanco* o `#fff`. Por ejemplo:

```html
data-elements-color="#8e44ad" <!-- Color oscuro -->
```

![Font color in dark element](/images/cow-ui-fontcolor__dark.png)


## Detalhe da compra

### Status padrão

![Summary Default](/images/summary-default.png)


### Personalização

Os atributos que podem ser adicionados e modificados são os seguintes.

**Montantes numéricos:**

- Produtos: `data-summary-product`
- Desconto: `data-summary-discount`
- Envio: `data-summary-shipping`
- Recarga: `data-summary-charges`
- Impostos: `data-summary-taxes`
- Saldo pendente: `data-summary-arrears`

**Textos:**

- Para modificar o título "Produtos": `data-summary-product-label`
- Para modificar o título "Desconto": `data-summary-discount-label`


#### Produtos

Usando o atributo `data-summary-product-label`, você pode especificar o texto que aparece como *"Produtos"* no detalhe da compra. Por exemplo, você pode adicionar o detalhe do que se está pagando:

```html
data-summary-product-label="4 produtos"
```

Mediante o atributo `data-summary-product`, você pode especificar o montante no detalhe da compra. Por exemplo:

```html
data-summary-product="654"
```


#### Desconto

Usando o atributo `data-summary-discount-label`, você pode especificar o texto que aparece como *"Desconto"* no detalhe da compra. Por exemplo, você pode adicionar a porcentagem do desconto:

```html
data-summary-discount-label="Descuento 10%"
```

Mediante o atributo `data-summary-discount`,  você pode especificar o montante de desconto no detalhe da compra. Por exemplo:

```html
data-summary-discount="65.4"
```

> NOTE
>
> Nota
>
> Verá o montante como um *número negativo*.


#### Envio

Usando o atributo `data-summary-shipping`, você pode especificar o montante do envio no detalhe da compra. Por exemplo:

```html
data-summary-shipping="10"
```

> NOTE
>
> Nota
>
> No caso em que o envio especificado seja *"0"* (zero), mostrará automaticamente o texto *"Grátis"*.


#### Recarga

Usando o atributo `data-summary-charges`, você pode especificar o montante da recarga no detalhe da compra. Por exemplo:

```html
data-summary-charges="10"
```

Aparecerá no detalhe da compra abaixo o conceito de *"Recarga"*.


#### Impostos

Usando o atributo `data-summary-taxes`, você pode especificar o montante de impostos no detalhe da compra. Por exemplo:

```html
data-summary-taxes="10"
```

Aparecerá no detalhe da compra abaixo o conceito de *"Impostos"*.

#### Saldo pendente

Usando o atributo `data-summary-arrears`, você pode especificar o montante de saldo pendente no detalhe da compra. Por exemplo:

```html
data-summary-arrears="10"
```

Aparecerá no detalhe da compra abaixo o conceito de *"Saldo pendente"*.
