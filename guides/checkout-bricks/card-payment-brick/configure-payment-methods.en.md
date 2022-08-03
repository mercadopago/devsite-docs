> CLIENT_SIDE 
>
> h1
>
> Configure accepted payment methods

With Checkout Bricks it is possible to define which payment methods (debit and/or credit) will be accepted in a purchase. **By default, both are enabled at the time of integration**, however, it is also possible to offer only one of these options, limiting payment to debit or credit only.

In the table below you will find the details of the customization and the code necessary to carry out the configuration.

| Brick | Card Payment Brick |
| --- | --- |
| Customization moment | When rendering Brick |
| Property | customization.paymentMethods.types.excluded |
| Type | string [] |
| Notes | The values ​​accepted within the array are: `credit_card`, `debit_card`. |

[[[
```Javascript

settings = {
  ...,
  customization: {
    paymentMethods: {
      types:{
        excluded: ['debit_card']
      }
    }
  }
}
```
]]]

> PREV_STEP_CARD_EN
>
> Configure installments
>
> Check how to set up the maximum and minimum number of installments allowed in Card Payment Brick.
>
> [Configure installments](/developers/en/docs/checkout-bricks/card-payment-brick/additional-customization/configure-installments)

> NEXT_STEP_CARD_EN
>
> Hide payment button
>
> Learn how you can hide the Payment Button in the Card Payment Brick.
>
> [Hide payment button](/developers/en/docs/checkout-bricks/card-payment-brick/additional-customization/hide-payment-button)