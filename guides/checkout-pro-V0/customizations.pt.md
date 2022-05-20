# Interface de usuário

Customize o Checkout Pro de acordo com o modelo do seu negócio para oferecer a melhor experiência de compra possível para os seus compradores.

## Abertura do Checkout Pro

Você pode personalizar como abrir o Checkout Pro por meio de funções e atributos a serem adicionados à configuração da sua integração. 

### Abra o Checkout Pro sem botão de pagamento

Use o método `open` para abrir o Checkout a partir de qualquer elemento desejado do seu _site_, sem necessariamente mostrar o botão de pagamento para os seus compradores. 

Por exemplo:

[[[
```html
<!-- Inicializa o checkout -->
<script>
const checkout = mp.checkout({
  preference: {
      id: 'YOUR_PREFERENCE_ID'
  }
});
</script>
<!-- Chame a função ‘open' a partir do elemento de página desejado  -->
<!-- Por exemplo: um radio button -->
<input type="radio" id="checkout-open-radio" onclick="checkout.open()">
```
]]]

### Abra o Checkout Pro com botão de pagamento

Use o método `render` para renderizar um botão de pagamento responsável por abrir o Checkout Pro no seu _site_ com os seguintes parâmetros:

| Parâmetro | Tipo de dado | Descrição |
| --- | --- | --- |
| `container` | `string` | CSS Selector (identificador) do elemento HTML onde se deseja mostrar o botão de pagamento. Permite definir o tipo de botão desejado. |
| `type` (opcional) | `string` | Define o tipo de botão desejado. Atualmente, aceita apenas o valor `wallet`, que mostra um botão de pagamento com a marca do Mercado Pago. |
| `label` (opcional) | `string` | Texto renderizado no botão. Valor padrão: `Pagar`. |

Você pode usar o método `render` de duas maneiras diferentes:

- Incluindo a opção `render` com seus respectivos parâmetros dentro das opções de inicialização do checkout.
- Usando a função `render` posteriormente, do lugar que você preferir dentro de seu código, com seus respectivos parâmetros.

Por exemplo:

[[[
  ```javascript
 // Dentro das opções de inicialização
const checkout = mp.checkout({
   preference: {
       id: 'YOUR_PREFERENCE_ID'
   },
   render: {
       container: '.cho-container',
       label: 'Pagar',
    }
});

// Invocando a função posteriormente
checkout.render({
    container: '.cho-container',
    label: 'Pagar'
});
  ```
]]]

#### Botão de pagamento padrão

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

#### Botão de pagamento personalizado

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/><br/>

### Abra o Checkout Pro automaticamente

Adicione o parâmetro `autoOpen` nas opções de inicialização do Checkout para exibir automaticamente o Checkout Pro, sem precisar que seus compradores interajam com um botão ou qualquer outro elemento para abri-lo:

[[[
```javascript
// Inicializa o checkout
const checkout = mp.checkout({
  preference: {
      id: 'YOUR_PREFERENCE_ID'
  },
  autoOpen: true, // Habilita a abertura automática do Checkout Pro
});
```
]]]

## Esquema de abertura

O Checkout Pro permite que você altere o seu esquema de abertura padrão.

Atualmente, os esquemas disponíveis são:

- **Redirect**: abre o Checkout Pro em uma nova janela.
- **Modal**: abre o Checkout Pro em seu _site_.

![Checkout-redirect](/images/web-payment-checkout/checkout-redirect-pt.png)

Para integrar o esquema de redirecionamento à sua integração, substitua o botão de pagamento configurado na implementação básica e adicione o link do Web Checkout ao seu _site_ no local em que deseja exibi-lo, como mostra o exemplo abaixo:

[[[
```php
===
O Checkout Pro será aberto no <code>init_point</code> definido pela preferência:
===
<!doctype html>
<html>
  <head>
    <title>Pagar</title>
  </head>
  <body>
    <a href="<?php echo $preference->init_point; ?>">Pagar com Mercado Pago</a>
  </body>
</html>
```
```node
===
O Checkout Pro será aberto no <code>init_point</code> definido pela preferência:
===
<!doctype html>
<html>
  <head>
    <title>Meu site</title>
  </head>
  <body>
    <a href="$$init_point$$" target="_blank">Pagar</a>
  </body>
</html>
```
```java
===
O Checkout Pro será aberto no <code>init_point</code> definido pela preferência:
===
<!doctype html>
<html>
  <head>
    <title>Pagar</title>
  </head>
  <body>
    <a href="${preference.initPoint}">Pagar com Mercado Pago</a>
  </body>
</html>
```
```ruby
===
O Checkout Pro será aberto no <code>init_point</code> definido pela preferência:
===
<!doctype html>
<html>
  <head>
    <title>Meu site</title>
  </head>
  <body>
    <a href="<%= @init_point %>" target="_blank">Pagar</a>
  </body>
</html>
```
```csharp
===
O Checkout Pro será aberto no <code>init_point</code> definido pela preferência:
===
<!doctype html>
<html>
  <head>
    <title>Pagar</title>
  </head>
  <body>
    <a href="@Html.DisplayFor(model => model.InitPoint)">Pagar com Mercado Pago</a>
  </body>
</html>
```
```python
===
O Checkout Pro será aberto no <code>init_point</code> definido pela preferência:
===
<!doctype html>
<html>
  <head>
    <title>Pagar</title>
  </head>
  <body>
    <a href="{{ init_point }}" target="_blank">Pagar com Mercado Pago</a>
  </body>
</html>
```
]]]

## Estilo de cores

Adicione o atributo `theme`, de acordo com o exemplo abaixo, nas opções de inicialização do Checkout Pro para customizar a cor do cabeçalho e dos seus elementos:

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
> A customização de cores e elementos é válida somente para o esquema de abertura **modal**.

### Cabeçalho 

Mude a cor do cabeçalho adicionando o atributo `headerColor` no objeto `theme`. Note que o valor do atributo deve estar no formato hexadecimal. 

Por exemplo:

[[[
```javascript
theme: {
  headerColor: '#c0392b'
}
```
]]]

### Elementos

Os elementos do Checkout Pro que podem ser customizados são:

- Botões;
- Campos de dados;
- Elementos de transição, como spinners e barras de progresso;
- Bordas.

Você pode mudar a cor desses elementos adicionando o atributo `elementsColor` no objeto `theme`. Note que o valor do atributo deve estar no formato hexadecimal. 

Por exemplo:

```javascript
theme: {
  elementsColor: '#c0392b'
}
```

![Custom-Component](/images/web-payment-checkout/custom_components-br.gif)

#### Textos

A cor do texto dos botões e do cabeçalho do Checkout Pro será determinada automaticamente dependendo do [contraste](https://24ways.org/2010/calculating-color-contrast) da cor definida para esses mesmos elementos.

Elementos de cor clara terão a cor de seu texto em preto ou `#000`. Por exemplo:

```javascript
theme: {
    elementsColor: '#81ecec' // Cor clara
}
```

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

Elementos de cor escura terão a cor de seu texto em branco ou `#fff`. Por exemplo:

```javascript
theme: {
    elementsColor: '#8e44ad' // Cor escura
}
```

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)


> PREV_STEP_CARD_PT
>
> Configuração de preferências
>
> Configure os atributos de suas preferências e adapte o Checkout Pro ao seu modelo de negócios.
>
> [Configuração de preferências](/developers/pt/docs/checkout-pro/checkout-customization/preferences)

> NEXT_STEP_CARD_PT
>
> Configurações adicionais
>
> Adapte o estilo da sua marca na experiência de compra do Checkout Pro
>
> [Configuração de preferências](/developers/pt/docs/checkout-pro/checkout-customization/additional-configuration)