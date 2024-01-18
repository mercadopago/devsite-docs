# Personalizaciones visuales

Para adaptarse al estilo de la tienda, el banner permite las siguientes personalizaciones:

- Mostrar o ocultar el logo de Mercado Pago;
- Texto (fuente, tamaño, peso, color, alineación, color de fondo y espaciado);
- Borde (mostrar u ocultar, peso, color, border-radius y espaciado).

> NOTE
> 
> Importante
>
> Presta atención a qué color de fondo y de texto adoptarás para asegurarte de que contrasten y permitan que el contenido sea legible.

| Personalización | Aplicación|
|---|---|
| `hideMercadoPagoLogo` | Controla si se mostrará el logo de Mercado Pago junto al mensaje.|
| `contentAlign` | Define el alineamiento del contenido no textual en el banner.|
| `border` | Controla si se mostrará un borde alrededor del banner.|
| `borderColor` | Define el color del borde del banner.|
| `borderWidth` | Define el ancho del borde del banner.|
| `borderRadius` | Define la curvatura del borde del banner.|
| `verticalPadding` | Define el relleno vertical del banner.|
| `horizontalPadding` | Define el relleno horizontal del banner.|
| `useCustomFont` | Controla si el banner usará una fuente personalizada o la fuente predeterminada de Mercado Pago.|
| `align` | Define el alineamiento del contenido textual en el banner.|
| `textSize` | Define el tamaño del texto en el banner.|
| `fontWeight` | Define el peso de la fuente en el banner.|

Los valores posibles y los predeterminados para cada personalización están definidos en el fragmento a continuación, que debe enviarse como tercer parámetro en el método `create()`.

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
         useCustomFont: false, // optional boolean. OBS: If is true the Brick inheriths the font from the parent
         textSize: "medium", // optional "extra-small" | "small" | "medium" | "large".
         fontWeight: "semibold", // optional "regular" | "semibold".
      textColor: "primary", // optional "primary" | "secondary" | "inverted".
    },
  },
};
```
]]]