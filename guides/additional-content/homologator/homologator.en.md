# Integration quality

With this tool you will be able to **measure the quality of your application**, making it possible to identify points of improvement in your integration to bring it up to Mercado Pago standards.

> WARNING
>
> Attention
>
> For now, the integration quality measuring tool is only available for integrations with [Checkout Pro,](/developers/en/docs/checkout-pro/landing) [Checkout API](/developers/en/docs/checkout-api/landing) and [Checkout Bricks.](/developers/en/docs/checkout-bricks/landing)

To measure the quality of your application, follow the steps below.

1. In [Devsite](/developers/en/docs), access the menu **Your integrations >** [Dashboard](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)**.
2. In the [Your applications](/developers/en/guides/additional-content/dashboard/applications) area of ​​the Dashboard, **click on the desired application**. It must be an application in which there is a product to be integrated and that this is one of which the measurement tool is available.
3. Then click on **Score details** to access the tool where you can **measure the quality of your application** and view the score that indicates how secure and aligned your application configuration is with the good practices of Mercado Pago integration.
4. On the "Integration Quality" screen, click **Evaluate quality** and enter the `payment ID` of a payment made with production [credentials](/developers/en/guides/additional-content/credentials/credentials) of the application in question. Whenever possible, we will show in the field the last productive `payment ID` that we identified in the application in question.

Ready! The quality measurement has been performed and the information below will be displayed.

* **Score**: indicates how safe your application's configuration is and is in line with Mercado Pago's best integration practices.
* **Payment ID**: `payment ID` on which the application quality score is based.
* **Last update**: Date of last update of the application's quality score.
* **Improve the experience of the person who buys**: indicate the required actions or best practices that can improve the experience of your buyers when using Mercado Pago as a payment solution.
* **Financial reconciliation**: necessary actions or best practices that could improve consistency in checking financial information.
* **Increase payment approval**: necessary actions or good practices that could increase the payment approvals of the payment solution integrated into the application, since by providing more information when generating a transaction, we give more elements to our fraud tools so that they can make a more detailed assessment.
* **Scalability**: necessary actions or good practices that may facilitate some changes and maintenance of the integration in the future (examples of scalability items are the SDKs, which abstract us from implementing the logic of some changes), meeting the demands without losing the qualities that add value .
* **Security**: necessary actions or good practices that can increase the security of your integration.

> WARNING
>
> Important
>
> Actions indicated as **required** must be completed to add points that will improve the quality of your integration, while those indicated as **best practices** will not impact the score.

After completing the indicated actions, click **Refresh score** to reassess the quality and leave your application complete for integration.