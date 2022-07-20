> CLIENT_SIDE
>
> h1
>
> Modify CSS variables

| Brick | Card Payment Brick |
| --- | --- |
| Customization moment | When rendering Brick |
| Property | customization.visual.style.customVariables.{textPrimaryColor, textSecondaryColor, inputBackgroundColor, formBackgroundColor, baseColor, baseColorFirstVariant, baseColorSecondVariant, errorColor, successColor, outlinePrimaryColor, outlineSecondaryColor, buttonTextColor, fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeExtraLarge, fontWeightNormal, fontWeightSemiBold, formInputsTextTransform, inputVerticalPadding, inputHorizontalPadding, inputFocusedBoxShadow, inputErrorFocusedBoxShadow, inputBorderWidth, inputFocusedBorderWidth, borderRadiusSmall, borderRadiusMedium, borderRadiusLarge, formPadding} |
| Type | string |
| Comments | Size values ​​such as fontSize and padding accept values ​​in px, rem, em, and %. These settings change the CSS variables that control the theme. |

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

> PREV_STEP_CARD_EN
>
> Set theme
>
> See how you can select another theme when instantiating/rendering the Card Payment Brick.
>
> [Set theme](/developers/en/docs/checkout-bricks/additional-customization/set-theme)

> NEXT_STEP_CARD_EN
>
> Initiate Brick with E-mail
>
> Check how to initiate Card Payment Brick with E-mail.
>
> [Initiate Brick with E-mail](/developers/en/docs/checkout-bricks/additional-customization/initiate-brick-with-email)