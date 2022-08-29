# Types of integration

The integration with Checkout API can be done by using different procedures that vary according to technical knowledge and business needs. See the table below for details on each of the available options.

| Integration type | Payment methods | Frontend complexity | User Interface (UI) |
| --- | --- | --- | --- |
| [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) | Debit and Credit | Easy | Components with UI already defined and that can be customized if necessary. |
| [Cardform](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) | All available methods | Medium | Form without styling so it is possible to start the settings from scratch. |
| [Core Methods](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) | All available methods | High | Create your form and styling |

The three types of integration mentioned above are eligible for **PCI SAQ A certification**. This is because **card data**, **CVV** and **expiration date** travel through an iframe directly to Mercado Pago servers, which prevent PCI data (card number, security code and expiration date) from being accessible to third parties.

> NOTE
>
> Important
>
> To be eligible for PCI SAQ A, the integration must be done using Secure Fields (card fields in Iframe format).

In addition to the payment methods shown in the table above, it is also possible to offer other payment methods. For a detailed list of all available options for integration, send a **GET** to the endpoint [/v1/payment_methods](/developers/en/reference/payment_methods/_payment_methods/get) and execute the request. In the answer you will have access to each of the options.


> PREV_STEP_CARD_EN
>
> Home page
>
> Return to the Checkout API documentation home page.
>
> [Home](/developers/en/docs/checkout-api/landing)


> NEXT_STEP_CARD_EN
>
> Prerequisites
>
> See the necessary prerequisites to integrate the Checkout API.
>
> [Integrate Checkout API](/developers/en/docs/checkout-api/prerequisites)
