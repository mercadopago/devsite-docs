# Integration quality

Self homologator is a tool where you can **measure the quality of your application**, making it possible to identify points of improvement in your integration to bring it in line with Mercado Pago standards.

> WARNING
>
> Attention
>
> For now, the integration quality measuring tool is only available for integrations with [Checkout Pro](/developers/en/docs/checkout-pro/landing).

To measure the quality of your application, follow the steps below.

1. In [Devsite](/developers/en/docs), access the menu **Your integrations > [Dashboard](/developers/en/guides/additional-content/dashboard/introduction)**.
2. In the [Your applications](/developers/en/docs/dashboard/applications) area of ​​the Dashboard, **click on the card** of the desired application.
3. Then click on **Score details** to access the tool where you can **measure the quality of your application** and view the score that indicates how secure and aligned your application configuration is with the good practices of Mercado Pago integration.
4. On the "Integration Quality" screen, click **Evaluate quality** and enter the `payment ID` of a payment made with production [credentials](/developers/en/guides/additional-content/credentials/credentials) of the application in question. Whenever possible, we will show in the field the last productive `payment ID` that we identified in the application in question.

Ready! The quality measurement has been performed and the following information will be displayed:

* **Score**: indicates how safe your application's configuration is and is in line with Mercado Pago's best integration practices.
* **Payment ID**: `payment ID` on which the application quality score is based.
* **Last update**: Date of last update of the application's quality score.
* **Improve the experience of the person who buys**: indicate the required actions or best practices that can improve the experience of your buyers when using Mercado Pago as a payment solution.
* **Financial reconciliation**: necessary actions or best practices that could improve consistency in checking financial information.
* **Increase payment approval**: present the required actions or best practices that may increase payment approvals of the payment solution integrated into the application.
* **Scalability**: necessary actions or good practices that can improve the scalability of your integration, that is, meeting the demands without losing the qualities that add value.
* **Security**: necessary actions or good practices that can increase the security of your integration.

> WARNING
>
> Important
>
> Actions indicated as **required** must be completed to add points that will improve the quality of your integration, while those indicated as **best practices** will not impact the score.

![integration-quality](homologator/integration-quality-pt.png)

After finishing the indicated actions, click on **Update score** to complete the measurement and leave your application complete for integration.