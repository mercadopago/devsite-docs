> CLIENT_SIDE
>
> h1
>
> Change texts

| - | Description |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.visual.texts.{cardNumber, cardExpirationDate, cardSecurityCode, cardholderName, cardholderIdentification, cardholderEmail, formTitle, emailSectionTitle, installmentsSectionTitle, selectInstallments, formSubmit}  |
| Attribute  | label, placeholder  |
| Type  | String  |
| Comments  | When sending empty text, the screen will present the text defined by the default layout. On the other hand, when you submit a custom text, it will replace the default text. To check what the default texts are, check the [Layout section](/developers/en/docs/checkout-bricks/card-payment-brick/introduction) of the Card Payment Brick. <br><br> If the custom texts are larger than the available space, the displayed text will be broken up to the maximum size allowed and the excess will be replaced by the "..." symbol.  |

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