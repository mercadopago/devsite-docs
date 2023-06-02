# How to integrate 3DS with Checkout Bricks

In this documentation you will find all the necessary information to carry out the integration with 3DS with Checkout Bricks. For more information on how this type of authentication works, see [3DS 2.0](/developers/en/docs/checkout-bricks/how-tos/improve-payment-approval/3ds).

> NOTE
>
> Important
>
> To integrate with 3DS, certain requirements must be met. Before moving on to the next steps, review the [Prerequisites](/developers/en/docs/checkout-bricks/prerequisites) section and make sure that all are met.

## Integrate with 3DS

3DS authentication can be done through two different flows: **with or without Challenge**, which are additional steps that the buyer must complete to ensure their identity. The decision to include or exclude the Challenge depends on the card issuer and the risk profile of the transaction being performed.

For **low-risk transactions**, the information sent at checkout is sufficient and the additional Challenge steps are not necessary. However, **for cases of high fraud risk**, the Challenge is necessary to **verify the buyer's identity**, which increases card transaction conversion.

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

Response overview:

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

2. To continue the flow and display the _Challenge_ in a simplified way, it is recommended to integrate with the [Status Screen Brick](/developers/en/docs/checkout-bricks/status-screen-brick/default-rendering), informing the ID generated payment, in addition to the content of the `three_ds_info` object, which was returned by the payment API.

If you do not want to use the Status Screen Brick at this stage, we advise you to access the [Deployment](/developers/en/docs/checkout-api/how-tos/how-to-integrate-3ds) section in the [Checkout API](/developers/en/docs/checkout-api/landing) documentation, as additional steps will be needed to, for example, capture the event emitted when the _Challenge_ is completed.

```javascript
{
const renderStatusScreenBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     paymentId: "<PAYMENT_ID>", // id do pagamento a ser mostrado
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

The user must respond to the challenge for the transition to be properly validated. It is worth noting that the _Challenge_ experience is the sole responsibility of the bank in charge.

> NOTE
>
> Important
>
> For security reasons, the payment will be rejected if the _Challenge_ process is not started within 30 seconds after its creation. Therefore, it is important that the challenge starts exactly after its generation.

3. After solving the challenge, the final result of the payment will be displayed according to the answer issued by the bank at the end of the _Challenge_.

----[mlb]----
<center>

![payment-Brick-layout-mlb](checkout-bricks/payment-brick-layout-mlb-en.gif)

</center>
------------
----[mla]----
<center>

![payment-Brick-layout-mla](checkout-bricks/payment-brick-layout-mla-en.gif)

</center>

------------
----[mlm]----
<center>

![payment-Brick-layout-mlm](checkout-bricks/payment-brick-layout-mlm-en.gif)

</center>

------------
----[mco]----
<center>

![payment-brick-layout-mco](checkout-bricks/payment-brick-layout-mco-en.gif)

</center>

------------
----[mpe, mlu, mlc]----
<center>

![payment-brick-layout-all](checkout-bricks/payment-brick-layout-all-en.gif)

</center>

------------

## Possible payment statuses

A transaction with 3DS can return different statuses depending on the type of integration performed (with or without Challenge). In a payment **without Challenge**, the transaction status will be directly `approved` or `rejected`.

In a payment **with Challenge**, the transaction will have a `pending` status and the authentication process with the bank will be initiated. Only after this step, the final status will be displayed.

See below the table with the possible statuses and their respective descriptions.

| Status | Description |
| --- | --- |
| `pending` | Transaction with pending authentication or Challenge timeout. |
| `approved` | Transaction approved with authentication. |
| `rejected`| Transaction denied without authentication. |

## Integration test

Before going into production, it is possible to test the integration to ensure that the 3DS flow works correctly and that payments are processed without errors. This way, it avoids buyers from abandoning the transaction because they can't complete it.

To make a test purchase, you will need to have the test credentials of your production user and a test credit card with 3DS enabled.

> WARNING
>
> Important
>
> To perform the tests, we recommend that you contact your Mercado Pago consultant.