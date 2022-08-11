> CLIENT_SIDE
>
> h1
>
> Alterar variáveis CSS 

| Brick  | Card Payment Brick  |
| --- | --- |
| Momento da customização  | Ao renderizar Brick  |
| Propriedade  | customization.visual.style.customVariables.{textPrimaryColor, textSecondaryColor, inputBackgroundColor, formBackgroundColor, baseColor, baseColorFirstVariant, baseColorSecondVariant, errorColor, successColor, outlinePrimaryColor, outlineSecondaryColor, buttonTextColor, fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeExtraLarge, fontWeightNormal, fontWeightSemiBold, formInputsTextTransform, inputVerticalPadding, inputHorizontalPadding, inputFocusedBoxShadow, inputErrorFocusedBoxShadow, inputBorderWidth, inputFocusedBorderWidth, borderRadiusSmall, borderRadiusMedium, borderRadiusLarge, formPadding} |
| Tipo  | string  |
| Observações  | Os valores de tamanho, como fontSize e padding, aceitam valores em px, rem, em e %. Essas configurações alteram as variáveis CSS que controlam o tema.  |

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

> NOTE
>
> Importante
> 
> Caso precise customizar o estilo visual do Brick para além das customizações de **temas e variáveis customizadas**, recomendamos que não utilize as classes e ids CSS que são enviadas com os Bricks como referência, visto que são gerados automáticamente durante o processo de build da aplicação e mudam regularmente. Utilize a herança dos elementos HTML para acessar os elementos que necessitar customizar.

> PREV_STEP_CARD_PT
>
> Definir tema 
>
> Caso deseje, veja como selecionar outro tema ao instanciar/renderizar o Card Payment Brick.
>
> [Definir tema ](/developers/pt/docs/checkout-bricks/additional-customization/set-theme)

> NEXT_STEP_CARD_PT
>
> Iniciar Brick com e-mail 
>
> Caso deseje, saiba como iniciar o Card Payment Brick com e-mail.
>
> [Iniciar Brick com e-mail](/developers/pt/docs/checkout-bricks/additional-customization/initiate-brick-with-email)