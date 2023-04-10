> CLIENT_SIDE
>
> h1
>
> Cambiar variables CSS

| - | Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | customization.visual.style.customVariables.{textPrimaryColor, textSecondaryColor, inputBackgroundColor, formBackgroundColor, baseColor, baseColorFirstVariant, baseColorSecondVariant, errorColor, successColor, outlinePrimaryColor, outlineSecondaryColor, buttonTextColor, fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeExtraLarge, fontWeightNormal, fontWeightSemiBold, formInputsTextTransform, inputVerticalPadding, inputHorizontalPadding, inputFocusedBoxShadow, inputErrorFocusedBoxShadow, inputBorderWidth, inputFocusedBorderWidth, borderRadiusSmall, borderRadiusMedium, borderRadiusLarge, formPadding} |
| Tipo | string |
| Observaciones | Los valores de tamaño como fontSize y padding aceptan valores en px, rem, em y %. Estos ajustes cambian las variables CSS que controlan el tema. |

[[[
```Javascript
const settings = {
    ...,
    customization: {
        visual: {
            style: {
                customVariables: {
                    textPrimaryColor: 'string',
                    textSecondaryColor: 'string',
                    ...,
                },
            },
        }
        ...,
    },
}
```
```react-jsx
const customization = {
 visual: {
   style: {
     customVariables: {
       textPrimaryColor: 'string'
       textSecondaryColor: 'string'
     }
   }
 }
};
```
]]]

> NOTE
>
> Importante
> 
> Si necesita personalizar el estilo visual de Brick además de personalizar **temas y variables personalizadas**, le recomendamos que no utilizar como referencia o selector el valor de las clases e ID de CSS que son enviados con los Bricks, ya que se generan automáticamente durante el proceso de build de la aplicación y cambian regularmente. Utilice la herencia de elementos HTML para acceder a lo que necesita personalizar.