> CLIENT_SIDE
>
> h1
>
> Include saved cards

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

![payment-brick-cc](checkout-bricks/payment-brick-cc-en.gif)

----[mlb]----
To learn how to create, modify and get the `customerId` and `cardsIds`, see the [Cards and customers management](/developers/en/docs/checkout-api/customer-management) section of the Checkout Transparente documentation.

------------

----[mla, mlm, mpe, mco, mlu, mlc]---- 
To learn how to create, modify and get the `customerId` and `cardsIds`, see the [Cards and customers management](/developers/en/docs/checkout-api/customer-management) section of the Checkout API documentation.

------------