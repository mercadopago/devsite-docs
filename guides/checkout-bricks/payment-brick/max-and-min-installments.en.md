> CLIENT_SIDE
>
> h1
>
> Configure installments

| Brick | Payment Brick |
| --- | --- |
| Customization moment | When rendering Brick. |
| Property | customization.paymentMethods.minInstallments && customization.paymentMethods.maxInstallments |
| Type | number |
| Comments | When a value is passed for min or maxInstallments, the number of installments will be constrained by the values ​​passed. |

[[[
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
```react-jsx
const customization = {
  paymentMethods: {
   minInstallments: number,
   maxInstallments: number,
 },
};
```
]]]