# Requirements for going to production

Once the integration and testing process is complete, the environment will be ready to go to production. In this documentation, we will detail the necessary requirements to make this transition effectively and securely, ensuring that your integration is ready to receive real payments.

## Verify the use of production credentials

Although the entire integration testing process with Mercado Pago Point is carried out using production credentials of real users, it is important to **confirm that the credentials being used to go live belong to the integrating account**.

To do this, go to [Your Integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials), access your application, and in the side menu, go to **Production > Production Credentials**, where you will find your production Public Key and Access Token. You can compare this information with what you have used during the development and testing stage. If you detect any differences, replace the credentials with those present in the Panel.

## Verify the Configuration of Webhooks Notifications

We recommend verifying that you have correctly configured your [Webhooks notifications](/developers/en/docs/mp-point/additional-content/your-integrations/notifications/webhooks) to keep the order status updated in your systems.

To do this, access [Your Integrations](/developers/panel/app) and, in the side menu, go to **Webhooks**. If your notifications are correctly configured, you should see the URL and established events. If, on the other hand, you detect any irregularities, you can reset your initial settings and replace them with new ones.

----[mlb]----
## Pix Key
The Pix payment option will only be displayed if there is a Pix Key registered in Mercado Pago. If you haven't created one yet, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and follow the step-by-step instructions.
------------

## Measure the Integration Quality

Before going to production, and in order to offer the best experience to both the seller and the buyer, you must assess the [quality of your integration](/developers/en/docs/mp-point/how-tos/integration-quality) with our homologation tool.

This is a certification process that allows you to verify if you are meeting the **quality and security standards of Mercado Pago** before starting to receive real payments. By entering the `payment ID` of a payment made with production credentials, our tool measures essential aspects for the effectiveness of your integration, such as payment approval improvement, financial reconciliation, security, among others.

If adjustments are needed, necessary actions and best practices will be suggested to improve the evaluated aspects and ensure that your integration meets the necessary standards.

## Reports

The [Mercado Pago reports](/developers/en/guides/additional-content/reports/introduction) provide information to track the transactions of the accounts, such as available balance, movements, and liquidity. This facilitates the reconciliation of sales and other operations with your internal management systems.

We recommend using the reports to improve financial management once you go live.