# Requirements to go to production

When completing the integration process, your environement will be ready to be set into production. In this documentation, you will find the necessary requirements you need to meet to do this in a secure and effective way, guaranteeing that your integration is ready to receive real payments.


## Activate production credentials

To start receiving payments, you must **activate your production credentials** and replace the test credentials. 

To do so, enter the [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials) and, in the side menu, access **Production > Production credentials**. There, you will find your productive _Public Key_ and _Access Token_, which should replace the test ones used in previous stages.

![Production Credentials](/images/woocomerce/test-prod-credentials-es.png)

For more information, check our [Credenctials documentation](/developers/en/guides/additional-content/your-integrations/credentials).

## SSL Certificate

To ensure the security of your integration and protect the data involved in transactions, **it is necessary that you have an SSL certificate and that the payment form be made available on an HTTPS page**. 

This process aims to guarantee the security of your customer's data, comply with legal requirements in each country, and provide the best purchasing experience for your sales.

Although an SSL certificate may not be required during the testing phase, it is mandatory when going live. For more information, [check the Terms and Conditions of Mercado Pago](/developers/en/guides/resources/legal/terms-and-conditions).

----[mlb]----
# Pix key

The Pix payment option will only be displayed if there is a Pix key registered in Mercado Pago. If you haven't created it yet, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and check the necessary steps.

------------

## Additional considerations

### Homologation

Before going to production, and to provide the best experience for both sellers and buyers,you must test your [integration’s quality](/developers/en/guides/additional-content/homologator/homologator) with our homologation tool. 

This is a certification process that will allow you to verify if you are complying with **Mercado Pago's quality and security standards** before you start receiving real payments. You only need to provide the `payment ID` of a payment made with productive credentials, and the tool will take care of carrying out the measurement, considering fundamental aspects for your integration, such as improving payment approval, financial reconciliation or security, among others.

If adjustments are required, necessary actions and good practices will be suggested to improve these evaluated aspects and, by doing so, guarantee that your integration meets the necessary standards.

### Payment approval

Get to know what measures you can take to improve your [payment approval](/developers/en/guides/additional-content/how-tos/payment-rejections), such as submitting the item and payer information, shipping data, and industry information, among others.

### Notifications

Keep the status of orders updated in your systems by using and processing notifications correctly [IPN](/developers/en/guides/additional-content/your-integrations/ipn) or [Webhooks](/developers/en/guides/additional-content/your-integrations/webhooks).

### Reports

[Mercado Pago reports](/developers/en/guides/additional-content/reports/introduction) provide financial information to track account transactions, such as available balance, movements, and liquidity. This facilitates the reconciliation of sales and other operations with your internal management systems.

We recommend using the reports to improve your company's financial management once you go live.