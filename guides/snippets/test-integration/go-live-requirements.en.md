# Requirements to go to production

When you have your integration ready and want to start receiving payments, you must [activate your credentials]([FAKER][CREDENTIALS][URL]) for production and replace the test credentials if needed.

You must also test your [integration’s quality](/developers/en/guides/additional-content/homologator/homologator) to verify if you are meeting the Mercado Pago quality and security standards.

## Do not forget to have an SSL certificate

In order for you to be secure and to take care of the data, **it is necessary that you have an SSL certificate and that the payment form be made available on an HTTPS page**. This allows to protect the transactions carried out by buyers and their data.
During the tests you may not have it, but it is mandatory in order to go to production.

### Why is this process necessary? 

With this process, you can guarantee the security of your customers' data, compliance with the regulations or legal provisions of each country and achieve the best shopping experience for your customers.

[View the Terms and Conditions of Mercado Pago](/developers/en/guides/resources/legal/terms-and-conditions).

----[mlb]----
# Receive payments with Pix

The Pix payment option will only be displayed if there is a Pix key registered] in Mercado Pago. If you haven't created it yet, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and check the necessary steps.

------------

## Additional considerations

We share some points of attention to increase the quality of your integrations:

+ Improve the [payment approval](/developers/en/guides/additional-content/how-tos/payment-rejections) by submitting the item and payer information, shipping data, and industry information.
+ Keep the status of orders updated in your systems by using and processing notifications correctly [IPN](/developers/en/guides/additional-content/your-integrations/ipn) or [Webhooks](/developers/en/guides/additional-content/your-integrations/webhooks).
+ Use reconciliation reports via API to improve the financial management of the business.