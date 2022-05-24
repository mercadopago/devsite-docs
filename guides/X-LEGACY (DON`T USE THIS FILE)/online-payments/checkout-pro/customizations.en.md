# Customizations

Customize Checkout Pro to your business model to provide the best possible shopping experience for your shoppers.

## Checkout Pro opening

You can customize how you open Checkout Pro through functions and attributes to add to your integration configuration.

### Open Checkout Pro without a payment button

Use the `open` method to open Checkout from any desired element of your site, without necessarily showing the checkout button to your buyers.

For example:

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

### Open Checkout Pro with a payment button

Use the `render` method to render a payment button responsible for opening Checkout Pro on your site with the following parameters:

| Parameter | Data Type | Description |
| --- | --- | --- |
| `container` | `string` | CSS Selector (identifier) of the HTML element where you want to show the payment button. It allows you to define the type of button you want. |
| `type` (optional) | `string` | Defines the desired button type. Currently, it only accepts the `wallet` value, which shows a payment button with the Mercado Pago branding. |
| `label` (optional) | `string` | Text to be rendered on the button. Default value: `Pay`. |

You can use the `render` method in two different ways:

- Including the `render` option with its respective parameters within the checkout initialization options.
- Using the `render` function later, from the place you prefer within your code, with its respective parameters.

For example:

[[[
  ```javascript
 // Along with the initialization options
const checkout = mp.checkout({
   preference: {
       id: 'YOUR_PREFERENCE_ID'
   },
   render: {
       container: '.cho-container',
       label: 'Pay',
    }
});

// Calling the function after configuring the initialization options
checkout.render({
    container: '.cho-container',
    label: 'Pay'
});
  ```
]]]

#### Default payment button

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

#### Customized payment button

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/><br/>

### Automatically open Checkout Pro

Add the `autoOpen` parameter to Checkout's launch options to automatically display Checkout Pro, without needing your customers to interact with a button or any other element to open it:

[[[
```javascript
// Initialize the checkout
const checkout = mp.checkout({
  preference: {
      id: 'YOUR_PREFERENCE_ID'
  },
  autoOpen: true, // Allow the Checkout Pro to open automatically
});
```
]]]

## Opening scheme

Checkout Pro allows you to change your default opening scheme.

Currently, the available schemes are:

- **Redirect**: opens Checkout Pro in a new window.
- **Modal**: open Checkout Pro on your site.

![Checkout-redirect](/images/web-payment-checkout/checkout-redirect.png)

To integrate the redirect scheme with your integration, replace the payment button configured in the basic implementation and add the Web Checkout link to your site where you want to display it, as shown in the example below:

[[[
```php
===
Checkout Pro will open at the <code>init_point</code> defined by the preference:
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
Checkout Pro will open at the <code>init_point</code> defined by the preference:
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
Checkout Pro will open at the <code>init_point</code> defined by the preference:
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
Checkout Pro will open at the <code>init_point</code> defined by the preference:
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
Checkout Pro will open at the <code>init_point</code> defined by the preference:
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
Checkout Pro will open at the <code>init_point</code> defined by the preference:
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

## Color style

According to the example below, add the `theme` attribute to the Checkout Pro initialization options to customize the color of its header and elements:

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
> Important
>
> The customization of colors and elements is valid only for the **modal** opening scheme.

### Header

Change the header color by adding the `headerColor` attribute to the `theme` object. Note that the attribute value must be in hexadecimal format.

For example:

[[[
```javascript
theme: {
  headerColor: '#c0392b'
}
```
]]]

### Elements

You can customize the following elements of Checkout Pro:

- Buttons;
- Data fields;
- Transition elements such as spinners and progress bars;
- Edges.

You can change the color of these elements by adding the `elementsColor` attribute to the `theme` object. Note that the attribute value must be in hexadecimal format.

For example:

```javascript
theme: {
  elementsColor: '#c0392b'
}
```

----[mla, mlc, mco, mpe, mlm, mlu]----

![Custom-Component](/images/web-payment-checkout/custom_components.gif)

------------

----[mlb]----

![Custom-Component](/images/web-payment-checkout/custom_components-br.gif)

------------

#### Texts

The text color of the Checkout Pro buttons and header will automatically be determined depending on the [contrast](https://24ways.org/2010/calculating-color-contrast) of the color defined for those same elements.

Light-colored elements will have their text color black or `#000`. For example:

```javascript
theme: {
    elementsColor: '#81ecec' // Light color
}
```

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

Dark-colored elements will have their text color in white or `#fff`. For example:

```javascript
theme: {
    elementsColor: '#8e44ad' // Dark color
}
```

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)
