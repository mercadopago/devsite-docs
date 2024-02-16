# Customizações visuais

Para que se adapte ao estilo da loja, o banner permite as seguintes customizações:

- Mostrar ou ocultar o logo do Mercado Pago;
- Texto (fonte, tamanho, peso, cor, alinhamento, cor de fundo e espaçamento);
- Borda (mostrar ou ocultar, peso, cor, border-radius e espaçamento).

> NOTE
> 
> Importante
>
> Observe atentamente qual cor de fundo e de texto irá adotar para que contrastem e permitam que o conteúdo seja legível.

| Customização | Aplicação|
|---|---|
|`hideMercadoPagoLogo` | Controla se o logo do Mercado Pago será exibido ao lado da mensagem.|
|`contentAlign` | Define o alinhamento do conteúdo não textual no banner.|
|`border` | Controla se será mostrada uma borda ao redor do banner.|
|`borderColor` | Define a cor da borda do banner.|
|`borderWidth` | Define a largura da borda do banner.|
|`borderRadius` | Define a curvatura da borda do banner.|
|`verticalPadding` |Define o preenchimento vertical do banner. |
|`horizontalPadding` | Define o preenchimento horizontal do banner.|
|`useCustomFont` |Controla se o banner usará uma fonte customizada ou a fonte padrão do Mercado Pago. |
|`align` | Define o alinhamento do conteúdo textual no banner.|
|`size` | Define o tamanho do texto no banner.|
|`fontWeight` | Define o peso da fonte no banner.|

Os valores possíveis e os padrões de cada customização estão definidos no snippet abaixo, que devem ser enviados como terceiro parâmetro no método `create()`.

[[[
```javascript
const renderBrandBrick = async (bricksBuilder) => {
  const settings = {
    customization: {
      // the visual changes only apply to the banner, the modal is always default
      visual: {
        hideMercadoPagoLogo: false, // optional boolean.
        contentAlign: "center", // optional "left" | "center" | "right".
        backgroundColor: "white", // optional "white" | "mercado_pago_primary" | "mercado_pago_secondary" | "black" | "transparent"
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
        size: "medium", // optional "extra_small" | "small" | "medium" | "large".
        fontWeight: "semibold", // optional "regular" | "semibold".
        color: "secondary", // optional "primary" | "secondary" |"inverted".
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
      size: "medium", // optional "extra-small" | "small" | "medium" | "large".
      fontWeight: "semibold", // optional "regular" | "semibold".
      color: "secondary", // optional "primary" | "secondary" | "inverted".
    },
  },
};
```
]]]