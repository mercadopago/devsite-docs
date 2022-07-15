> CLIENT_SIDE
>
> h1
>
> Cambiar variables CSS

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | customization.visual.style.customVariables.{textPrimaryColor, textSecondaryColor, inputBackgroundColor, formBackgroundColor, baseColor, baseColorFirstVariant, baseColorSecondVariant, errorColor, successColor, outlinePrimaryColor, outlineSecondaryColor, buttonTextColor, fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeExtraLarge, fontWeightNormal, fontWeightSemiBold, formInputsTextTransform, inputVerticalPadding, inputHorizontalPadding, inputFocusedBoxShadow, inputErrorFocusedBoxShadow, inputBorderWidth, inputFocusedBorderWidth, borderRadiusSmall, borderRadiusMedium, borderRadiusLarge, formPadding} |
| Tipo | string |
| Observaciones | Los valores de tamaño como fontSize y padding aceptan valores en px, rem, em y %. Estos ajustes cambian las variables CSS que controlan el tema. |

```javascript
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

> PREV_STEP_CARD_ES
>
> Definir tema
>
> Si lo deseas, aprende a seleccionar otro tema al instanciar/renderizar Card Payment Brick.
>
> [Definir tema](/developers/es/docs/checkout-bricks/additional-customization/set-theme)

> NEXT_STEP_CARD_ES
>
> Iniciar Brick con email
>
> Consulta cómo iniciar Card Payment Brick con un email, si lo deseas.
>
> [Iniciar Brick con email](/developers/es/docs/checkout-bricks/additional-customization/initiate-brick-with-email)