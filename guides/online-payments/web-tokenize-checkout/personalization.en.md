

# Web Tokenize Checkout - Customization

## Ways to open the Web Tokenize Checkout

You can customize how to open the checkout through the use of functions and attributes that can be added to your integration's configuration:

### Without payment button

Use the `open` function to **open the checkout without displaying a payment button**. This allows you to connect it to any element of your website from which you prefer to trigger the Web Tokenize Checkout opening.

[[[
```html
<!-- Initialize the checkout -->
<script>
const checkout = mp.checkout({
  tokenizer: {
    totalAmount: 4000,
    backUrl: 'https://www.my-store.com/process'
  },
});
</script>
<!-- Call the 'open' function from the element of your preference -->
<!-- For instance: a radio button --> 
<input type="radio" id="tokenizer-open-radio" onclick="checkout.open()">
```
]]]

### With a payment button 

Use the `render` function to display a <b>payment button that allows the opening of the Web Tokenize Checkout</b>. In order to do this, you need to add the following parameters: 

| Parameter | Type | Description |
| --- | --- | --- |
|`container` |string| CSS Selector (identifier) for the element in which you want the payment button to be displayed. |
| `type` (optional) | string | Allows you to define the button type. Currently only the 'wallet' value is accepted, which shows a payment button with Mercado Pago branding. **Default value**: basic payment button. |
| `label` (optional) | string | Value for the button's text. **Default value**: “Pay” |

You can use this method in two different ways: 

* Including the `render` option with its corresponding parameters along with the rest of the initialization options for the checkout.
* Calling the `render` function with its corresponding parameters after the initialization, from wherever you prefer inside your code.

[[[
  ```javascript
 // Along with the initialization options
const checkout = mp.checkout({
tokenizer: {
  totalAmount: 4000,
  backUrl: 'https://www.my-store.com/process'
},
render: {
  container: '.tokenizer-container',
  label: 'Pay'
 }
});

// Calling the function after configuring the initialization options
checkout.render({
  container: '.tokenizer-container',
  label: 'Pay'
});
  ```
]]]

### Default payment button:

![Default Label Button](/images/web-payment-checkout/default_label_button.png)<br/>

### Customized:

![Custom Label Button](/images/web-payment-checkout/custom_label_button.png)<br/><br/>


#### Style

To use your own style, include the following CSS code:

```css
button.mercadopago-button {
  /* Tus atributos CSS */
}
```

*For example:*

```css
button.mercadopago-button {
  background-color: #fff;
  color: #111;
  border: 1px solid #111;
  border-radius: 0;
}
```

![Payment button Mercado Pago modified CSS](/images/paybutton-modified-css.png)

### Opening the Web Tokenize Checkout automatically

Add the `autoOpen` parameter to your checkout initialization options to **automatically display the Web Tokenize Checkout**, without the need of any interactions with buttons or other elements for its opening.

[[[
```javascript
// Initialize the checkout
const checkout = mp.checkout({
  preference: {
      id: 'YOUR_PREFERENCE_ID'
  },
  autoOpen: true, // Allow the Web Tokenize Checkout to open automatically
});
```
]]]

## Header and elements colors

Add the `theme` attribute to your initialization options as shown below to customize colors for some of the checkout's UI elements and header. 

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

### Header 

#### Default state

----[mla, mlc, mco, mpe, mlm]----

![Standard status header Mercado Pago](/images/cow/cow-ui-header.png)

------------

----[mlb]----

![Standard status header Mercado Pago](/images/cow/cow-ui-header__pt.png)

------------

#### Personalization

Modify the header's color by adding the `headerColor` attribute to the `theme` object. Its value must be in hexadecimal format. For example:

[[[
```javascript
theme: {
  headerColor: '#c0392b'
}
```
]]]

----[mla, mlc, mco, mpe, mlm]----

![Header customization Mercado Pago](/images/cow/cow-ui-header--custom.png)

------------

![Header customization Mercado Pago](/images/cow/cow-ui-header--custom__pt.png)

----[mlb]----
------------

### Elements

#### Default state

----[mla, mlc, mco, mpe, mlm]----

![Standard status elements](/images/cow/cow-ui-elements.png)

------------

----[mlb]----

![Standard status elements](/images/cow/cow-ui-elements__pt.png)

------------


#### Customization

The elements that can be customized are:

- Buttons
- Data entry fields: inputs
- Elements of transitions: spinners and progress bars
- Edges

You can modify the color of those elements by adding the `elementsColor` attribute to the `theme` object. Its value must be in hexadecimal format. For example:

```javascript
theme: {
  elementsColor: '#c0392b'
}
```

----[mla, mlc, mco, mpe, mlm]----

![Customization elements](/images/cow/cow-ui-elements--custom.png)

------------

----[mlb]----

![Customization elements](/images/cow/cow-ui-elements--custom__pt.png)

------------

### Text color

The color of the text of the buttons and header, **will be automatically determined** depending on the [contrast](https://24ways.org/2010/calculating-color-contrast) of the defined color.

For a *light* element color, the text color will be *black* or `# 000`. For example:

```javascript
theme: {
    elementsColor: '#81ecec' // Light color
}
```

![Font color in light element Mercado Pago](/images/cow/cow-ui-fontcolor__light.png)

For a *dark* element color, the text color will be *white* or `# fff`. For example:

```javascript
theme: {
    elementsColor: '#8e44ad' // Dark color
}
```

![Font color in dark element Mercado Pago](/images/cow/cow-ui-fontcolor__dark.png)

## Purchase detail

### Default state

----[mla, mlc, mco, mpe, mlm]----

![Purchase detail standard status](/images/cow/cow-summary.png)

------------

----[mlb]----

![Purchase detail standard status](/images/cow/cow-summary__pt.png)

------------


### Customization

You can add and modify elements from the purchase detail by adding the `summary` attribute to the `tokenizer` object in your initialization configurations: 

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

The attributes that can be added and modified are the following.

| Attribute | Description |
| --- | --- |
| `productLabel` <br> `product`| Products |
| `installments` | Amount of installments |
| `discount` <br> `discountLabel`| Discount |
| `shipping` | Shipping |
| `charge` | Surcharges |
| `taxes` | Taxes |
| `arrears` | Outstanding balance |

#### Products

Using the attribute `productLabel`, you can specify the text that appears as *"Products"* in the purchase detail. For example, you can add the detail of what is being paid:

```javascript
summary: {
     productLabel: ‘4 products’
}
```

Using the attribute `product`, you can specify the amount in the detail of the purchase. For example:

```javascript
summary: {
     product: 654
}
```

#### Minimum and maximum amount of installments

Customize limits for installments by adding the `installments` attribute to the `tokenizer` object in your initialization configurations, and using `minInstallments` or `maxInstallments` to set the minimum or maximum amount of installments you want to offer your payer.

For example:

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

> The minimum value for both attributes is `1`. In case the values are the same, the checkout installment section will be skipped.


#### Discount

Using the attribute `discountLabel`, you can specify the text that appears as *"Discount"* in the detail of the purchase. For example, you can add the discount percentage:

```javascript
summary: {
     discountLabel: ‘Descuento 10%’
}
```

Using the `discount` attribute, you can specify the discount amount in the detail of the purchase. For example:

```javascript
summary: {
     discount: 70
}
```

> NOTE
>
> Note
>
> You will see the amount as a *negative number*.


#### Shipping

Using the `shipping` attribute, you can specify the shipping amount in the purchase detail. For example:

```javascript
summary: {
     shipping: 100
}
```

> NOTE
>
> Note
>
> In case the specified delivery is *"0"* (zero), the text *"Free"* will be automatically displayed.


#### Surcharges

Using the attribute `charge`, you can specify the amount of surcharges in the detail of the purchase. For example:

```javascript
summary: {
      charge: 10
}
```
It will appear in the detail of the purchase under the concept of *"Surcharges"*.


#### Taxes

Using the attribute `taxes`, you can specify the amount of taxes in the detail of the purchase. For example:

```javascript
summary: {
      taxes: 10
}
```

It will appear in the detail of the purchase under the concept of *"Taxes"*.

#### Outstanding balance

Using the `arrears` attribute, you can specify the outstanding balance amount in the purchase detail. For example:

```javascript
summary: {
      arrears: 10
}
```

It will appear in the detail of the purchase under the concept of *"Outstanding balance"*.

> This documentation uses the new library version. To see the previous version, go to [Customization section with MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/web-tokenize-checkout/v1/personalization).
