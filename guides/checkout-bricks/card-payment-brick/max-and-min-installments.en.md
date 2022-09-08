CLIENT_SIDE
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