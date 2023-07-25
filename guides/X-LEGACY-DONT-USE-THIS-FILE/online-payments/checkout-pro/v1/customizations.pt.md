# Customizações


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
    <title>Pay</title>
  </head>
  <body>
    <a href="{{ init_point }}" target="_blank">Pay with Mercado Pago</a>
  </body>
</html>
```
]]]


## Cores

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

Você pode mudar a cor desses elementos adicionando o atributo `data-elements-color` no código HTML.
O valor do atributo deve estar em formato hexadecimal. Por exemplo:


```html
data-header-color="#c0392b"
```
![Custom-Component](/images/web-payment-checkout/custom_components-br.gif)
</p><br/>

#### Textos

A cor do texto dos botões será determinado automaticamente dependendo do contraste da cor definida.
Para uma cor de elemento claro, a cor do texto será preta ou #000. Por exemplo:


```html
data-elements-color="#81ecec" <!-- Cor clara -->
```

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

<br/>Para uma cor de elemento escuro, a cor do texto será branca ou #fff. Por exemplo:

```html
data-elements-color="#8e44ad" <!-- Cor escura -->
```

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)

## Botões

### Texto

Por padrão, o botão mostra o texto “Pagar”. Você pode alterar o texto do botão adicionando o atributo `data-button-label` no código HTML. Por exemplo:

```html
data-button-label="Comprar"
```

### Por padrão:

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

### Customizado:

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/><br/>

> WARNING
>
> Importante
>
> Esta documentação utiliza a antiga versão da biblioteca. Para ver a versão nova, vá para a [seção de Customizações com MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/customizations).

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
