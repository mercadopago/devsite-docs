> CLIENT_SIDE
>
> h1
>
> Include saved cards

In order for Payment Brick to be able to display the saved cards of a given buyer, it is necessary to send the customer ID and card IDs to Brick at the time of its initialization, as in the example below.

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
```react-jsx
const initialization = {
 ...,
 payer: {
   ...,
   customerId: '209277402-FqRqgEc3XItrxs',
   cardsIds: [ '1518023392627', '1518023332143' ]
 },
};
```
]]]

Just passing these two properties, Brick will automatically give the user the option to make the payment with their saved cards.

> WARNING
>
> Attention
>
> Only no expired cards will be shown to the buyer, expired cards will not be made available.

![payment-Brick-cc](checkout-bricks/payment-brick-cc.en.gif)

----[mlb]----
To learn how to create, modify and get the `customerId` and `cardsIds`, see the [Cards and customers management](/developers/en/docs/checkout-api/customer-management) section of the Checkout Transparente documentation.

------------

----[mla, mlm, mpe, mco, mlu, mlc]---- 
To learn how to create, modify and get the `customerId` and `cardsIds`, see the [Cards and customers management](/developers/en/docs/checkout-api/customer-management) section of the Checkout API documentation.

------------