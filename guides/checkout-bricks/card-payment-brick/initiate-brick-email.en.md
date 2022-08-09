> CLIENT_SIDE
>
> h1
>
> Initiate Brick with e-mail

| Brick | Card Payment Brick |
| --- | --- |
| Customization moment | When rendering Brick |
| Property | initialization.payer.email |
| Type | string |
| Comments | When a valid email is sent, the email field is hidden. |

```javascript
const settings = {
   initialization: {
       amount: number,
       payer: {
           email: 'string',
       },
   },
   ...
}
```
 
> PREV_STEP_CARD_EN
>
> Code example
>
> To simplify and optimize the integration process, view an example of a Card Payment Brick integration.
>
> [Code example](/developers/en/docs/checkout-bricks/card-payment-brick/code-example)

> NEXT_STEP_CARD_EN
>
> Initiate Brick with identity document
>
> If you prefer, check how to initiate Card Payment Brick with an identity document.
>
> [Initiate Brick with identity document](/developers/en/docs/checkout-bricks/card-payment-brick/additional-customization/initiate-brick-with-document)