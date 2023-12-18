# How to integrate 3DS with Checkout Bricks

In this documentation you will find all the necessary information to carry out the integration with 3DS with Checkout Bricks. For more information on how this type of authentication works, see [3DS 2.0](/developers/en/docs/checkout-bricks/how-tos/improve-payment-approval/3ds).

> NOTE
>
> Important
>
> To integrate with 3DS, certain requirements must be met. Before moving on to the next steps, review the [Prerequisites](/developers/en/docs/checkout-bricks/prerequisites) section and make sure that all are met.

## Integrate with 3DS

The integration with 3DS results in an authentication process that is carried out through two flows: with or without _Challenge_, with _Challenge_ being the additional steps that the buyer must take to guarantee their identity.

For **low-risk transactions**, the information submitted at checkout is sufficient, the flow proceeds transparently, and additional _Challenge_ steps are not required. However, **for high fraud risk cases**, the _Challenge_ is required to verify the buyer's identity, which increases the approval of card transactions.

The decision to include the _Challenge_ or not depends on the card issuer and the risk profile of the transaction being carried out.

Below are the steps to integrate with 3DS.

1. After generating a payment intent using [Card Payment Brick](/developers/en/docs/checkout-bricks/card-payment-brick/introduction) or [Payment Brick](/developers/en/docs/checkout-bricks/payment-brick/introduction), it is necessary to send, from your backend, a payment request to Mercado Pago through our APIs. Enabling the 3DS 2.0 stream is done by adding the `three_d_secure_mode: 'optional'` field to this request.

```javascript
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

const paymentData = {
...req.body,
three_d_secure_mode: 'optional'
};

mercadopago.payment.save(paymentData)
  .then(function(response) {
    const { status, status_detail, id } = response.body;
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(function(error) {
    console.error(error);
  });
```

If it is not necessary to use the _Challenge_ flow, the `status` field of the payment will have the value `approved` and it will not be necessary to display it, in this way, the payment flow will proceed normally.

For cases where _Challenge_ is required, `status` will show the value `pending`, and `status_detail` will be `pending_challenge`.

Simplified response overview:

```javascript
{
   "payment_id":52044997115,
   "status":"pending",
   "status_detail":"pending_challenge",
   "three_ds_info":{
      "external_resource_url":"https://acs-public.tp.mastercard.com/api/v1/browser_Challenges",
      "creq":"eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImJmYTVhZjI0LTliMzAtNGY1Yi05MzQwLWJkZTc1ZjExMGM1MCIsImFjlOWYiLCJjW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IS4wIn0"
   },
   "owner":null
}
```

> NOTE
>
> Important
>
> The returned field `three_ds_info` contains the necessary information to continue the payment process if the `status_detail` is `pending_challenge`.

2. To continue the flow and display the _Challenge_ in a simplified way, it is recommended to integrate with the [Status Screen Brick](/developers/en/docs/checkout-bricks/status-screen-brick/introduction), informing the ID generated payment, in addition to the content of the `three_ds_info` object, which were returned by the payment API.

If you do not want to use the Status Screen Brick at this stage, we advise you to access the [Deployment](/developers/en/docs/checkout-api/how-tos/integrate-3ds) section in the [Checkout API](/developers/en/docs/checkout-api/landing) documentation, as additional steps will be needed to, for example, capture the event emitted when the _Challenge_ is completed.

```javascript
const renderStatusScreenBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     paymentId: "<PAYMENT_ID>", // payment id to be displayed
     additionalInfo: {
       externalResourceURL: "<EXTERNAL_RESOURCE_URL>",
       creq: "<C_REQ>",
     },
   },
   callbacks: {
     onReady: () => {},
     onError: (error) => {
       console.error(error);
     },
   },
 };
 window.statusScreenBrickController = await bricksBuilder.create(
   "statusScreen",
   "statusScreenBrick_container",
   settings
 );
};
renderStatusScreenBrick(bricksBuilder);
```

The Status Screen Brick will display a transition indicating redirection and then the _Challenge_ of the bank in question will be displayed.

<center>

![how-to-integrate-3ds](checkout-bricks/how-to-integrate-3ds-en.gif)

</center>

The user must respond to the _Challenge_ for the transition to be properly validated. It is worth noting that the _Challenge_ experience is the sole responsibility of the bank in charge.

> NOTE
>
> Important
>
> For security reasons, the payment will be rejected if the _Challenge_ process is not started within 30 seconds after its creation. Therefore, it is important that the _Challenge_ starts exactly after its generation.

3. After solving the _Challenge_, the final result of the payment will be displayed according to the answer issued by the bank at the end of the _Challenge_.

<center>

![status-screen-Brick](checkout-bricks/status-screen-brick-en.jpg)

</center>

## Integration test

Before going into production, it is possible to test the integration to ensure that the 3DS flow works correctly and that payments are processed without errors. This way, it avoids buyers from abandoning the transaction because they can't complete it.

To enable the validation of payments with 3DS, we provide a **sandbox testing environment** that returns simulated results solely for simulation and implementation validation purposes. To perform payment tests in a sandbox environment, it is necessary to use your **test credentials and specific cards** that allow testing the _Challenge_ implementation with success and failure flows. The following table presents the details of these cards

| Flow | Number | Security code | Expiration date |
|---|---|---|---|
| Successful Challenge | 5483 9281 6457 4623| 123 | 11/25 |
| Unauthorized Challenge | 5361 9568 0611 7557| 123 | 11/25 |

> The steps to generate the payment are the same as [exemplified previously](/developers/en/docs/checkout-bricks/how-tos/integrate-3ds#bookmark_integrar_com_3ds) in this section.

### Challenge

In both flows (success and failure), the _Challenge_, which is a screen similar to the one shown below, must be displayed by the [Status Screen Brick](/developers/pt/docs/checkout-bricks/status-screen-brick/introduction).

<center>

![bricks_sandbox](checkout-bricks/sandbox-v1-en.png)

</center>

The provided verification code is for illustrative purposes only. To complete the test flow, simply click the **Confirm** button, and the Status Screen will display the final state of the payment.