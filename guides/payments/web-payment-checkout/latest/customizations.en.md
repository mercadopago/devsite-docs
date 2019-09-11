---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlm
  - mlc
---

# Customization

> INDEX
>
> In this page
>
>
>
> [Redirect scheme](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/customizations#bookmark_redirect_scheme)
>
> [Colors](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/customizations#bookmark_colors)
>
> [Buttons](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/customizations#bookmark_buttons)

## Redirect Scheme

The Smart Checkout redirect allows you to change your opening scheme.

The schemes currently available are:

* **Redirect**: Opens the Smart Checkout in a new window.
* **Modal**: Opens the Smart Checkout on your website.

![Checkout-redirect](/images/web-payment-checkout/checkout-redirect.png)

To integrate the redirect scheme, replace the payment button you made in the basic integration with the following snippet:

[[[
```php
===
Redirect to the 'init_point' of the preference.
===
<!doctype html>
<html>
  <head>
    <title>Pay</title>
  </head>
  <body>
    <a href="<?php echo $preference->init_point; ?>">Pay with Mercado Pago</a>
  </body>
</html>
```
```node
===
Redirect to the 'init_point' of the preference.
===
<!doctype html>
<html>
  <head>
    <title>Pay</title>
  </head>
  <body>
    <a href="$$init_point$$" target="_blank">Pay with Mercado Pago</a>
  </body>
</html>
```
```java
===
Redirect to the 'init_point' of the preference.
===
<!doctype html>
<html>
  <head>
    <title>Pay</title>
  </head>
  <body>
    <a href="${preference.initPoint}">Pay with Mercado Pago</a>
  </body>
</html>
```
```ruby
===
Redirect to the 'init_point' of the preference.
===
<!doctype html>
<html>
  <head>
    <title>Pay</title>
  </head>
  <body>
    <a href="<%= @init_point %>" target="_blank">Pay with Mercado Pago</a>
  </body>
</html>
```
```csharp
===
Redirect to the 'init_point' of the preference.
===
<!doctype html>
<html>
  <head>
    <title>Pay</title>
  </head>
  <body>
    <a href="@Html.DisplayFor(model => model.InitPoint)">Pay with Mercado Pago</a>
  </body>
</html>
```
]]]


## Colors

> NOTE
>
> Note
>
> Valid only for modal scheme.

### Elements

The elements that can be customized are:

* Buttons
* Data Entry Fields
* Transition Elements: spinners and progress bars
* Borders

You can modify the color of those elements by adding the `data-elements-color attribute in the HTML code.
The attribute value must be in hexadecimal format. For example:


```html
data-header-color="#c0392b"
```
![Custom-Component](/images/web-payment-checkout/custom_components-br.gif)
</p><br/>

#### Texts

The color of the button text will be determined automatically depending on the contrast of the defined color.
For a light element color, the text color will be black or #000. For example:


```html
data-elements-color="#81ecec" <!-- Light color -->
```

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

<br/>For a dark element color, the text color will be white or #fff. For example:

```html
data-elements-color="#8e44ad" <!-- Dark color -->
```

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)

## Buttons

### Text

By default, the button shows the text “Pay”. You can modify the text of the button by adding the `data-button-label` attribute in the HTML code. For example:

```html
data-button-label="Buy"
```

### By default:

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

### Customized:

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/><br/>

---

### Next steps


> LEFT_BUTTON_RECOMMENDED_EN
>
> Other functionalities
>
> Set up your payment and adapt Smart Checkout to your business.
>
> [Other functionalities](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations/)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Advanced Integration
>
> Optimize your integration and improve the management of your sales.
>
> [Advanced Integration](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/advanced-integration/)
