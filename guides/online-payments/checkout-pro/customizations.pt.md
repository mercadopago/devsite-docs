# Customizações

## Abertura do Checkout Pro

Você pode personalizar como abrir o checkout através de funções e atributos que podem ser adicionados à configuração no código de sua integração:

### Sem botão de pagamento

Use o método `open` para abrir o checkout sem mostrar o botão de pagamento. Permite conectar ao elemento em seu site a partir do qual você prefere fazer a abertura do Checkout Pro.

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
<!-- Chama a função ‘open' a partir do item da tua página que desejas  -->
<!-- Por exemplo: um radio button -->
<input type="radio" id="checkout-open-radio" onclick="checkout.open()">
```
]]]

### Com botão de pagamento

Ao usar o método `render` um botão de pagamento é mostrado para abrir o Checkout Pro.</b> Para isso, você deve incluir os seguintes parâmetros:

| Parâmetro | Tipo de dado | Descrição |
| --- | --- | --- |
| `container` | string | CSS Selector (identificador) do elemento onde se deseja mostrar o botão de pagamento. Permite definir o tipo de botão. |
| `type` (opcional) | string | Permite definir o tipo de botão. Atualmente, só aceita o valor ’wallet’ que mostra um botão de pagamento com a marca do Mercado Pago. **Valor por padrão**: botão de pagamento simples. |
| `label` (opcional) | string | Valor do texto do botão. **Por padrão**: “Pagar” |

Você pode usar este método de duas maneiras diferentes:

* Incluindo a opção `render` com seus respectivos parâmetros dentro das opções de inicialização do checkout.
* Invocando a função `render` posteriormente, do lugar que você preferir dentro de seu código, com seus respectivos parâmetros.

[[[
  ```javascript
 // Dentro das opções de inicialização
mp.checkout({
   preference: {
       id: 'YOUR_PREFERENCE_ID'
   },
   render: {
       container: '.cho-container',
       label: 'Pagar',
    }
});

// Invocando a função posteriormente
mp.checkout.render({
    container: '.cho-container',
    label: 'Pagar'
});
  ```
]]]

#### Botão de pagamento padrão:

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

#### Personalizado:

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/><br/>

### Abertura automática do Checkout Pro

Adicione o parâmetro `autoOpen` às suas opções de inicialização do checkout em sua integração para **exibir automaticamente o Checkout Pro**, sem precisar da interação com um botão ou outro elemento para sua abertura

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

## Esquema redirect

O Checkout Pro permite alterar seu esquema de abertura.

Os esquemas disponíveis atualmente são:

* **Redirect**: abre o Checkout Pro em uma nova janela.
* **Modal**: abre o Checkout Pro no seu site.

![Checkout-redirect](/images/web-payment-checkout/checkout-redirect-pt.png)

Para integrar o esquema de redirecionamento, substitua o botão de pagamento que você fez na integração básica por este novo e adicione o link do Web Checkout ao seu site no local em que deseja que ele apareça.

[[[
```php
===
Redireciona ao 'init_point' da preferência
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
Redireciona ao 'init_point' da preferência
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
Redireciona ao 'init_point' da preferência
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
Redireciona ao 'init_point' da preferência
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
Redireciona ao 'init_point' da preferência
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
Redireciona ao 'init_point' da preferência
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

## Cores do cabeçalho e elementos

Adicione o atributo `theme` da seguinte maneira às opções de inicialização para personalizar a cor de alguns elementos e o cabeçalho da interface de checkout.

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
> válido somente para o esquema modal.

### Elementos

Os elementos que podem ser customizados são:

* Botões
* Campos para inserir dados
* Elementos de transição: spinners e barras de progresso
* Bordas

Você pode mudar a cor desses elementos adicionando o atributo `elementsColor` no objeto `theme`.
O valor do atributo deve estar no formato hexadecimal. Por exemplo:

```javascript
theme: {
  elementsColor: '#c0392b'
}
```

![Custom-Component](/images/web-payment-checkout/custom_components-br.gif)

#### Cores do texto

A cor do texto dos botões e cabeçalho será determinada automaticamente dependendo do [contraste](https://24ways.org/2010/calculating-color-contrast) da cor definida.

Para uma cor de elemento claro, a cor do texto será preta ou #000. Por exemplo:

```javascript
theme: {
    elementsColor: '#81ecec' // Cor clara
}
```

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

Para uma cor de elemento escuro, a cor do texto será branca ou #fff. Por exemplo:

```javascript
theme: {
    elementsColor: '#8e44ad' // Cor escura
}
```

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)

---

### Próximos passos


> LEFT_BUTTON_RECOMMENDED_PT
>
> Outras funcionalidades
>
> Configure seus pagamentos e adapte o Checkout Pro ao seu negócio.
>
> [Outras funcionalidades](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Integração avançada
>
> Otimize sua integração e melhore o gerenciamento de suas vendas.
>
> [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/advanced-integration)
