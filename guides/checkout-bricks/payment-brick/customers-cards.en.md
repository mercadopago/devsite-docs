> CLIENT_SIDE
>
> h1
>
> Customers & Cards

Payment Brick allows the integrator to use the Customers & Cards functionality, which allows the use of cards saved in payments on their website.

## Including cards saved in Payment Brick

In order for Payment Brick to be able to display the saved cards of a certain buyer, it is necessary to send to Brick at the time of its initialization, the customer ID and the cards, as in the example below.

[[[
```Javascript
settings = {
   initialization: {
       ...,
       payer: {
           ...,
           customerId: '209277402-FqRqgEc3XItrxs',
           cardsIds: [ '1518023392627', '1518023332143' ]
       },
   },
   ...
}
```
]]]

Just passing these two properties, Brick will automatically give the user the option to make the payment with their saved cards.

> WARNING
>
> Attention
>
> Only expired cards will be shown to the buyer, expired cards will not be made available.

## Getting customerId and cardsIds

For the `customerId` and `cardsIds` required for the C&C feature, the integrator must have access to a user's email and to the token generated through a card payment.

With the user's email it is possible to generate a Customer ID and using the Customer ID combined with the card token, it is possible to save it so that the buyer can use it in the next purchases.

> PREV_STEP_CARD_EN
>
> Code example
>
> To simplify and optimize the integration process, view an example of a Checkout Bricks integration.
>
> [Send payments to Mercado Pago](/developers/en/docs/checkout-bricks/payment-brick/code-example)

> NEXT_STEP_CARD_EN
>
> Configure accepted payment methods
>
> Check how to set up payments with the various methods accepted in your country.
>
> [Configure accepted payment methods](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/configure-payment-methods)