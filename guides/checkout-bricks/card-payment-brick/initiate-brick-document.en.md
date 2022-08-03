> CLIENT_SIDE
>
> h1
>
> Initiate brick with document

| Brick | Card Payment Brick |
| --- | --- |
| Customization moment | When rendering Brick |
| Property | initialization.payer.identification.type & initialization.payer.identification.number |
| Type | string |
| Comments | When a valid identification.number and a corresponding identification.type are sent, the payer document field is automatically filled in. |

```javascript
const settings = {
   initialization: {
       amount: number,
       payer: {
           identification: {
               type: 'string',
               number: 'string',
           },
       },
   },
   ...
}
```

> PREV_STEP_CARD_EN
>
> Initiate Brick with e-mail
>
> Check how to initiate Card Payment Brick with e-mail.
>
> [Initiate Brick with e-mail](/developers/en/docs/checkout-bricks/card-payment-brick/additional-customization/initiate-brick-with-email)

> NEXT_STEP_CARD_EN
>
> Set up the maximum and minimum number of installments
>
> Check how to set up the maximum and minimum number of installments allowed in Card Payment Brick.
>
> [Set up the maximum and minimum number of installments](/developers/en/docs/checkout-bricks/card-payment-brick/additional-customization/configure-installments)