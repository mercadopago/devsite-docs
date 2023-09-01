# Web Tokenize Checkout - Personalização

## Abertura do Web Tokenize Checkout

Você pode personalizar como abrir o checkout através de funções e atributos que podem ser adicionados à configuração no código de sua integração:

### Sem botão de pagamento

Use o método `open` para **abrir o checkout sem mostrar o botão de pagamento**. Permite conectar ao elemento em seu site a partir do qual você prefere fazer a abertura do Web Tokenize Checkout.

[[[
```javascript
// Inicializa o checkout
const checkout = mp.checkout({
  tokenizer: {
    totalAmount: 4000,
    backUrl: 'https://www.minha-loja.com/process'
  },
});
(...)
// Chama a função ‘open' a partir do item da tua página que desejas
// Por exemplo: um radio button
<input type="radio" id="tokenizer-open-radio" onclick="checkout.open()">
```
]]]

### Com botão de pagamento

Ao usar o método `render` um **botão de pagamento é mostrado para abrir o Web Tokenize Checkout**. Para isso, você deve incluir os seguintes parâmetros:

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
const checkout = mp.checkout({
tokenizer: {
  totalAmount: 4000,
  backUrl: 'https://www.minha-loja.com/process'
},
render: {
  container: '.tokenizer-container', // Indica onde o botão será exibido
  label: 'Pagar' // Muda o texto do botão de pagamento (opcional)
 }
});

// Invocando a função posteriormente
checkout.render({
  container: '.tokenizer-container',
  label: 'Pagar'
});
  ```
]]]

#### Botão de pagamento padrão:

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

#### Personalizado:

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/>

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

![Botón de pago con estilo personalizado Mercado Pago Web Tokenize Checkout](/images/paybutton-modified-css.png)

### Abertura automática do  Web Tokenize Checkout

Adicione o parâmetro `autoOpen` às suas opções de inicialização do checkout em sua integração para **exibir automaticamente o Web Tokenize Checkout**, sem precisar da interação com um botão ou outro elemento para sua abertura

[[[
```javascript
// Inicializa o checkout
const checkout = mp.checkout({
  tokenizer: {
    totalAmount: 4000,
    backUrl: 'https://www.mi-sitio.com/process'
  },
  autoOpen: true, // Habilita a abertura automática do checkout
});
```
]]]

## Cores do cabeçalho e elementos

Adicione o atributo `theme` da seguinte maneira às opções de inicialização para personalizar a cor de alguns elementos e o cabeçalho da interface de checkout.

[[[
```html
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

### Cabeçalho

#### Status padrão

![Standard status header Mercado Pago](/images/cow/cow-ui-header__pt.png)

#### Personalização

Muda a cor do cabeçalho adicionando o atributo `headerColor` no objeto `theme`. O valor do atributo deve estar no formato hexadecimal. Por exemplo:

[[[
```javascript
theme: {
  headerColor: '#c0392b'
}
```
]]]

![Header customization Mercado Pago](/images/cow/cow-ui-header--custom__pt.png)

### Elementos

#### Status padrão

![Standard status elements](/images/cow/cow-ui-elements__pt.png)

#### Personalização

Os elementos que podem ser personalizados incluem:

- Botões
- Campos de ingresso de dados: inputs
- Elementos de transições: spinners
- Bordas

Você pode mudar a cor desses elementos adicionando o atributo `elementsColor` no objeto `theme`.O valor do atributo deve estar no formato hexadecimal. Por exemplo:

```javascript
theme: {
  elementsColor: '#c0392b'
}
```

![Customization elements](/images/cow/cow-ui-elements--custom__pt.png)

### Cores do texto

A cor do texto dos botões e cabeçalho **será determinada automaticamente** dependendo do [contraste](https://24ways.org/2010/calculating-color-contrast) da cor definida.

Para uma cor de elemento *claro*, a cor do texto será *preta* ou `#000`. Por exemplo:

```javascript
theme: {
    elementsColor: '#81ecec' // Cor claro
}
```

![Personalización del color de fuente Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-fontcolor__light.png)

Para uma cor de elemento *escuro*, a cor do texto será *branca* ou `#fff.` Por exemplo:

```javascript
theme: {
    elementsColor: '#8e44ad' // Cor oscuro
}
```

![Personalización de color de fuente en elementos oscuros Mercado Pago Web Tokenize Checkout](/images/cow/cow-ui-fontcolor__dark.png)

## Detalhe da compra

### Status padrão

![Purchase detail standard status](/images/cow/cow-summary__pt.png)

### Personalização

Você pode adicionar e modificar itens ao detalhe da compra adicionando o atributo `summary` dentro do objeto `tokenizer` em suas configurações de inicialização da seguinte forma:

[[[
  ```javascript
mp.checkout({
  tokenizer: {
      …
      summary: {...},
  },
  render: {...},
})
  ```
]]]

Os atributos que podem ser adicionados e modificados são os seguintes.

| Atributo | Descrição |
| --- | --- |
| `productLabel` <br> `product`| Produtos |
| `installments` | Quantidade de parcelas |
| `discount` <br> `discountLabel`| Desconto |
| `shipping` | Envío |
| `charge` | Cobrança |
| `taxes` | Impostos |
| `arrears` | Saldo pendente |

#### Produtos

Usando o atributo `productLabel`, você pode especificar o texto que aparece como *"Produtos"* no detalhe da compra. Por exemplo, você pode adicionar o detalhe do que se está pagando:

```javascript
summary: {
     productLabel: ‘4 produtos’
}
```

Mediante o atributo `product`, você pode especificar o valor no detalhe da compra. Por exemplo:

```javascript
summary: {
     product: 654
}
```

#### Quantidade mínima e máxima de parcelas

Personaliza os limites de parcelas adicionando o atributo `installments` dentro do objeto tokenizer nas suas configurações de inicialização, e adiciona `minInstallments` ou `maxInstallments` para estabelecer a quantidade mínima e máxima de parcelas respectivamente. Por exemplo:

```javascript
mp.checkout({
  tokenizer: {
    installments: {
        minInstallments: 1,
        maxInstallments: 12,
    }, 
  },
  render: {...},
});
```

> O valor mínimo para ambos atributos é `1`. Se completar os atributos com o mesmo valor, a seção de parcelas não será exibida no checkout.

#### Desconto

Usando o atributo `discountLabel`, você pode especificar o texto que aparece como *"Desconto"* no detalhe da compra. Por exemplo, você pode adicionar a porcentagem do desconto:

```javascript
summary: {
     discountLabel: ‘Descuento 10%’
}
```

Mediante o atributo `discount`, você pode especificar o valor de desconto no detalhe da compra. Por exemplo:

```javascript
summary: {
     discount: 70
}
```

> NOTE
>
> Nota
>
> Verá o montante como um *número negativo*.

#### Envío

Usando o atributo `shipping`, você pode especificar o valor do envio no detalhe da compra. Por exemplo:

```javascript
summary: {
     shipping: 100
}
```

> NOTE
>
> Nota
>
> No caso em que o envio especificado seja *"0"* (zero), mostrará automaticamente o texto *"Grátis"*.

#### Cobrança

Usando o atributo  `charge`, você pode especificar o valor da cobrança no detalhe da compra. Por exemplo:

```javascript
summary: {
      charge: 10
}
```

Aparecerá no detalhe da compra abaixo o atributo de *"Cobrança"*.

#### Impostos

Usando o atributo `taxes`, você pode especificar o valor de impostos no detalhe da compra. Por exemplo:

```javascript
summary: {
      taxes: 10
}
```

Aparecerá no detalhe da compra abaixo o atributo de *"Impostos"*.

#### Saldo pendente

Usando o atributo `arrears`, você pode especificar o valor de saldo pendente no detalhe da compra. Por exemplo:

```javascript
summary: {
      arrears: 10
}
```

Aparecerá no detalhe da compra abaixo o atributo de *"Saldo pendente"*.

> Esta documentação utiliza a nova versão da biblioteca. Para ver a versão anterior, vá para a [seção de Personalização com MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/web-tokenize-checkout/v1/personalization).
