> CLIENT_SIDE
>
> h1
>
> Configurar cuotas

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick. |
| Propiedad | customization.paymentMethods.minInstallments && customization.paymentMethods.maxInstallments |
| Tipo | number |
| Observaciones | Cuando se pasa un valor para min o maxInstallments, la cantidad de cuotas estará limitada por los valores pasados. |

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