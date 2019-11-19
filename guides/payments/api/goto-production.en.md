# Requirements for production environment

When you have your application ready and working in sandbox mode, and you want to start processing real payments, you shall [complete your integration's homologation from the credentials section]([FAKER][CREDENTIALS][URL]). Later, MercadoPago may audit your site or app, verifying that the rules listed below are met. Otherwise, a consultant will contact you to discuss if you need to correct something in your integration.

## Why is this process needed?

Because in that way, both MercadoPago and you can guarantee, besides other things, your customers' data security and the accomplishment of standards or legal dispositions in each country. Also, following these advices, you can get a good purchasing experience, which helps to maximize your received payments conversion.

Non-compliance of these rules may involve from no payment processing to legal actions according to the established on the [terms and conditions](https://www.mercadopago.com.ar/ayuda/terminos-y-condiciones_299).

## Use of the SDK provided by MercadoPago

You've to use the official MercadoPago SDK in your site or application. You cannot modify it or host it in your servers. With this ensured, we can do all controls related to the user in order to improve payments conversion and avoid fraud.

## Credit card data cannot reach your servers

When creating a credit card data form, be sure that you don't include the name attribute in input tags. This prevents this data from reaching your server when the user submits the form. Don't worry, the SDK will identify the required parameters through the data-checkout attribute and will send them to MercadoPago servers.
By not dealing with card data you may save yourself a lot of headaches and don't need to accomplish the PCI-DSS standards to prevent possible data vulnerability. MercadoPago deals with the accomplishment of these rules for you.

## SSL certificate

We try to ensure your customers the highest flexibility and security in their transactions, as well as keep their data protected from being stolen by third parties. That's why it is a requirement that you have a SSL certificate, and the payment form to be provided under an HTTPS page.
During the sandbox mode tests, you can operate over HTTP, but for homologation you'll need to acquire the certificate in case you don't have it.

