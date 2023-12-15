# Visual customizations

To adapt to the store's style, the banner allows the following customizations:

- Show or hide the Mercado Pago logo;
- Text (font, size, weight, color, alignment, background color and spacing);
- Border (show or hide, weight, color, border-radius and spacing).

> NOTE
> 
> Important
>
> Pay close attention to which background and text color you will adopt to ensure they contrast and allow the content to be readable.

| Customization	 | Application|
|---|---|
| `hideMercadoPagoLogo` | Controls whether the Mercado Pago logo will be displayed next to the message.|
| `contentAlign` | Defines the alignment of non-textual content in the banner.|
| `border` | Controls whether a border will be shown around the banner.|
| `borderColor` | Defines the color of the banner border.|
| `borderWidth` | Defines the width of the banner border.|
| `borderRadius` | Defines the curvature of the banner border.|
| `verticalPadding` | Defines the vertical padding of the banner.|
| `horizontalPadding` | Defines the horizontal padding of the banner.|
| `useCustomFont` | Controls whether the banner will use a custom font or the default Mercado Pago font.|
| `align` | Defines the alignment of textual content in the banner.|
| `textSize` | Defines the font size of the text in the banner.|
| `fontWeight` | Defines the font weight in the banner.|

The possible values and defaults for each customization are defined in the snippet below, which should be sent as the third parameter in the `create()` method.

[[[
```javascript
const renderBrandBrick = async (bricksBuilder) => {
  const settings = {
    customization: {
      // the visual changes only apply to the banner, the modal is always default
      visual: {
        hideMercadoPagoLogo: false, // optional boolean.
        contentAlign: "center", // optional "left" | "center" | "right".
        backgroundColor: "white", // optional "white" | "MPPrimary" | "MPSecondary" | "black" | "transparent"
        border: false, // optional boolean
        borderColor: "dark", // optional "dark" | "light"
        borderWidth: "1px", // optional "1px" | "2px"
        borderRadius: "0px", // optional  string format: "Npx"
        verticalPadding: "8px", // optional  string format: "Npx". max "40px"
 horizontalPadding: "16px", // optional  string format: "Npx". max "40px"
      },
      text: {
         align: "left", // optional "left" | "center" | "right",
        useCustomFont: false, // optional boolean. OBS: If is true the Brick inheriths the font from the parent
        textSize: "medium", // optional "extra_small" | "small" | "medium" | "large".
        fontWeight: "semibold", // optional "regular" | "semibold".
textColor: "primary", // optional "primary" | "secondary" |"inverted".
      },
    },
  };
};
```
```react-jsx
const customization = {
    // the visual changes only apply to the banner, the modal is always default
    visual: {
      hideMercadoPagoLogo: false, // optional boolean
      contentAlign: "center", // optional "left" | "center" | "right"
      backgroundColor: "white", // optional "white" | "mercado_pago_primary" | "mercado_pago_secondary" | "black" | "transparent"
      border: false, // optional boolean
      borderColor: "dark", // optional "dark" | "light"
      borderWidth: "1px", // optional "1px" | "2px"
      borderRadius: "0px", // optional  string format: "Npx"
      verticalPadding: "8px" // optional  string format: "Npx". max "40px"
      horizontalPadding: "16px" // optional  string format: "Npx". max "40px"
    },
    text: {
         align: "left", // optional "left" | "center" | "right",
   valueProp: "payment_methods", // optional "installments" | "payment_methods" | "security" | "payment_methods_icons"
        useCustomFont: false, // optional boolean. OBS: If is true the Brick inheriths the font from the parent
       textSize: "medium", // optional "extra-small" | "small" | "medium" | "large".
         fontWeight: "semibold", // optional "regular" | "semibold".
       textColor: "primary", // optional "primary" | "secondary" | "inverted".
    },
  },
};
```
]]]