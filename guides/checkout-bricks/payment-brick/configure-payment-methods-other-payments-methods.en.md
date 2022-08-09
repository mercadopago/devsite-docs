> CLIENT_SIDE 
>
> h1
>
> Configure accepted payment methods

As Payment Brick provides several means of payment, it is necessary to customize which ones will be made available. It is currently possible to select up to four:

## Methods off

To include offline payment methods, just use the following configuration:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: [ 'pec', 'bolbradesco' ]
    }
  }
}
}
```
]]]

The `ticket` property accepts 2 variable types, `string` and `string[]`. In the example above, payments via **boleto** and **payment in lottery** will be accepted. The allowed methods for offline payment are: `pec` (lottery payment) and `bolbradesco` (boleto bancário).

If you want to select all methods, you can also pass a string instead of an array, as in the example below.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: 'all'
    }
  }
}
}
```
]]]

> PREV_STEP_CARD_EN
>
> Customers & Cards
>
> Check how to configure the Customers & Cards functionality, which allows the use of cards saved in payments on your website.
>
> [Customers & Cards](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/customers-cards) 

> NEXT_STEP_CARD_EN
>
> Set theme
>
> See how you can select another theme when instantiating/rendering the Card Payment Brick.
>
> [Set theme](/developers/en/docs/checkout-bricks/card-payment-brick/additional-customization/set-theme)