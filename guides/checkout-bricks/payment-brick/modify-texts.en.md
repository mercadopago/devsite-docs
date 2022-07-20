> CLIENT_SIDE
>
> h1
>
> Modify texts

| Brick  | Card Payment Brick  |
| --- | --- |
| Customization moment  | When rendering the brick  |
| Property  | customization.visual.texts.{cardNumber, cardExpirationDate, cardSecurityCode, cardholderName, cardholderIdentification, cardholderEmail, formTitle, emailSectionTitle, installmentsSectionTitle, selectInstallments, formSubmit}  |
| Attribute  | label, placeholder  |
| Type  | String  |
| Comments  | When sending empty text, the screen will present the text defined by the default layout. On the other hand, when you submit a custom text, it will replace the default text. To check what the default texts are, check the Layout section of the desired brick. <br><br> If the custom texts are larger than the available space, the displayed text will be broken up to the maximum size allowed and the excess will be replaced by the "..." symbol.  |

```javascript
const settings = {
    ...,
    customization: {
        visual: {
            texts: {
                formTitle: 'string',
                installmentsSectionTitle: 'string',
                ...,
            },
        }
    },
}
```

> PREV_STEP_CARD_EN
>
> Hide UI titles and card brands
>
> Learn how you can hide the UI titles and the card brands in Card Payment Brick.
>
> [Hide UI titles and card brands](/developers/en/docs/checkout-bricks/additional-customization/hide-title-and-flags)

> NEXT_STEP_CARD_EN
>
> Select language
>
> You can select the Card Payment Brick's language when required. Check how.
>
> [Select language](/developers/en/docs/checkout-bricks/additional-customization/select-language)