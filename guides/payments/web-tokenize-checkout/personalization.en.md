

# Web Tokenize Checkout - Customization

## Button

### Default state

![Payment button](/images/paybutton.png)

### Customization

#### Text

By default the button contains the text *"Pay"*. You can modify the text of the button by adding the `data-button-label` attribute to the fragment of HTML code. For example:

```html
data-button-label="Pay"
```

![Payment button - Modified label](/images/paybutton-modified-label.png)

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

![Payment button - Modified CSS](/images/paybutton-modified-css.png)


## Colors in the interface

### Elements

#### Default state

![Standard elements](/images/cow-ui-elements.png)

#### Customization

The elements that can be customized are:

- Buttons
- Data entry fields: inputs
- Elements of transitions: spinners and progress bars
- Edges

You can modify the color of those elements by adding the attribute `data-elements-color` to the fragment of HTML code.

The value of the attribute must be in hexadecimal format. For example:

```html
data-elements-color="#c0392b"
```

![Custom elements](/images/cow-ui-elements--custom.png)


### Header

#### Default state

![Standard header](/images/cow-ui-header.png)

#### Customization

You can modify the header color by adding the attribute `data-header-color` to the fragment of HTML code.

The value of the attribute must be in hexadecimal format. For example:

```html
data-header-color="#c0392b"
```

![Custom header](/images/cow-ui-header--custom.png)


### Text color

The color of the text of the buttons and header, **will be automatically determined** depending on the [contrast](https://24ways.org/2010/calculating-color-contrast) of the defined color.

For a *light* element color, the text color will be *black* or `# 000`. For example:

```html
data-elements-color="#81ecec" <!-- Light color -->
```

![Font color in light element](/images/cow-ui-fontcolor__light.png)

For a *dark* element color, the text color will be *white* or `# fff`. For example:

```html
data-elements-color="#8e44ad" <!-- Dark color -->
```

![Font color in dark element](/images/cow-ui-fontcolor__dark.png)

## Purchase detail

### Default state

![Summary Default](/images/cow-summary.png)


### Customization

The attributes that can be added and modified are the following.

**Numerical amounts:**

- Products: `data-summary-product`
- Discount: `data-summary-discount`
- Shipping: `data-summary-shipping`
- Surcharges: `data-summary-charges`
- Taxes: `data-summary-taxes`
- Outstanding balance: `data-summary-arrears`

**Texts:**

- To modify the title "Products": `data-summary-product-label`
- To modify the title "Discount": `data-summary-discount-label`

#### Products

Using the attribute `data-summary-product-label`, you can specify the text that appears as *"Products"* in the detail of the purchase. For example, you can add the detail of what is being paid:

```html
data-summary-product-label="4 products"
```

Using the attribute `data-summary-product`, you can specify the amount in the detail of the purchase. For example:

```html
data-summary-product="654"
```


#### Discount

Using the attribute `data-summary-discount-label`, you can specify the text that appears as *"Discount"* in the detail of the purchase. For example, you can add the discount percentage:

```html
data-summary-discount-label="10% off"
```

Using the `data-summary-discount` attribute, you can specify the discount amount in the detail of the purchase. For example:

```html
data-summary-discount="65.4"
```

> NOTE
>
> Note
>
> You will see the amount as a *negative number*.


#### Shipping

Using the `data-summary-shipping` attribute, you can specify the shipping amount in the purchase detail. For example:

```html
data-summary-shipping="10"
```

> NOTE
>
> Note
>
> In case the specified delivery is *"0"* (zero), the text *"Free"* will be automatically displayed.


#### Surcharges

Using the attribute `data-summary-charges`, you can specify the amount of surcharges in the detail of the purchase. For example:

```html
data-summary-charges="10"
```

It will appear in the detail of the purchase under the concept of *"Surcharges"*.


#### Taxes

Using the attribute `data-summary-taxes`, you can specify the amount of taxes in the detail of the purchase. For example:

```html
data-summary-taxes="10"
```
 
It will appear in the detail of the purchase under the concept of *"Taxes"*.

#### Outstanding balance

Using the `data-summary-arrears` attribute, you can specify the outstanding balance amount in the purchase detail. For example:

```html
data-summary-arrears="10"
```

It will appear in the detail of the purchase under the concept of *"Outstanding balance"*.
