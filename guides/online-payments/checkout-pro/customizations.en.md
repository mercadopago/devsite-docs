# Customization

## Ways to open the Checkout Pro

You can customize how to open the checkout through the use of functions and attributes that can be added to your integration's configuration: 

### Without payment button 

Use the `open` function to <b>open the checkout without displaying a payment button</b>. This allows you to connect it to any element of your website from which you prefer to trigger the Checkout Pro opening. 

[[[
```html
<!-- Initialize the checkout -->
<script>
const checkout = mp.checkout({
  preference: {
      id: 'YOUR_PREFERENCE_ID'
  }
});
</script>
<!-- Call the 'open' function from the element of your preference -->
<!-- For instance: a radio button --> 
<input type="radio" id="checkout-open-radio" onclick="checkout.open()">
```
]]]

### With a payment button 

Use the `render` function to display a <b>payment button that allows the opening of the Checkout Pro</b>. In order to do this, you need add the following parameters: 

| Parameter | Type | Description |
| --- | --- | --- |
|`container`|string|CSS Selector (identifier) for the element in which you want the payment button to be displayed.|
|`type` (optional)|string|Allows you to define the button type. Currently only the 'wallet' value is accepted, which shows a payment button with Mercado Pago branding. <b>Default value:</b> basic payment button.|
|`label` (optional)|string|Value for the button's text. <b>Default value:</b> “Pay”

You can use this method in two different ways: 

* Including the `render` option with its corresponding parameters along with the rest of the initialization options for the checkout.
* Calling the `render` function with its corresponding parameters after the initialization, from wherever you prefer inside your code.

[[[
  ```javascript
 // Along with the initialization options
mp.checkout({
   preference: {
       id: 'YOUR_PREFERENCE_ID'
   },
   render: {
       container: '.cho-container',
       label: 'Pagar',
    }
});

// Calling the function after configuring the initialization options
mp.checkout.render({
    container: '.cho-container',
    label: 'Pagar'
});
  ```
]]]

### Default payment button:

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

### Customized:

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/><br/>

### Opening the Checkout Pro automatically
Add the `autoOpen` parameter to your checkout initialization options to <b>automatically display the Checkout Pro</b>, without the need of any interactions with buttons or other elements for its opening.

[[[
```javascript
// Initialize the checkout
const checkout = mp.checkout({
  preference: {
      id: 'YOUR_PREFERENCE_ID'
  },
  autoOpen: true, // allow the Checkout Pro to open automatically
});
```
]]]

## Redirect Scheme

The Checkout Pro allows you to change your opening scheme.

The schemes currently available are:

* **Redirect**: Opens the Checkout Pro in a new window.
* **Modal**: Opens the Checkout Pro on your website.

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
```python
===
Redirect to the 'init_point' of the preference.
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


## Header and elements colors

Add the `theme` attribute to your initialization options as shown below to customize colors for some of the checkout's UI elements and header. 

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
> Note
>
> Valid only for modal scheme.

### Header 
Modify the header's color by adding the `headerColor` attribute to the `theme` object. Its value must be in hexadecimal format. For example: 

[[[
```javascript
theme: {
  headerColor: '#c0392b'
}```
]]]

### Elements

The elements that can be customized are:

* Buttons
* Data Entry Fields
* Transition Elements: spinners and progress bars
* Borders

You can modify the color of those elements by adding the `elementsColor` attribute to the `theme` object. Its value must be in hexadecimal format. For example:

```javascript
theme: {
  elementsColor: '#c0392b'
}
```

![Custom-Component](/images/web-payment-checkout/custom_components-br.gif)
</p><br/>

#### Text color

The color of the button text will be **determined automatically** depending on the [contrast]((https://24ways.org/2010/calculating-color-contrast)) of the defined color.
For a light element *color*, the text color will be *black* or `#000`. For example:

```javascript
theme: {
    elementsColor: '#81ecec' // Light color
}
```

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

<br/>For a *dark* element color, the text color will be *white* or `#fff`. For example:

```javascript
theme: {
    elementsColor: '#8e44ad' // Dark color
}
```

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)

---

### Next steps


> LEFT_BUTTON_RECOMMENDED_EN
>
> Other functionalities
>
> Set up your payment and adapt Checkout Pro to your business.
>
> [Other functionalities](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Advanced Integration
>
> Optimize your integration and improve the management of your sales.
>
> [Advanced Integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/advanced-integration)
