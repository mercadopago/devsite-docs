> CLIENT_SIDE
>
> h1
>
> Configure maximum and minimum number of installments

| Brick | Card Payment Brick |
| --- | --- |
| Customization moment | When rendering Brick |
| Property | customization.paymentMethods.minInstallments && customization.paymentMethods.maxInstallments |
| Type | number |
| Comments | When a value is passed for min or maxInstallments, the number of installments will be constrained by the values ​​passed. |

```javascript
const settings = {
    ...,
    customization: {
        paymentMethods: {
            minInstallments: number,
            maxInstallments: number,
        },
    },
}
```

> PREV_STEP_CARD_EN
>
> Initiate Brick with identity document
>
> If you prefer, check how to initiate Card Payment Brick with an identity document.
>
> [Initiate Brick with identity document](/developers/en/docs/checkout-bricks/additional-customization/initiate-brick-with-document)

> NEXT_STEP_CARD_EN
>
> Hide Payment button
>
> Learn how you can hide the Payment Button in the Card Payment Brick.
>
> [Hide Payment button](/developers/en/docs/checkout-bricks/additional-customization/hide-payment-button)