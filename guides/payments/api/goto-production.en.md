# Requirements for production environment

When you have your application ready and working in sandbox mode, and you want to start processing real payments, you shall [complete your integration's homologation from the credentials section]([FAKER][CREDENTIALS][URL]). Later, Mercado Pago may audit your site or app, verifying that the rules listed below are met. Otherwise, a consultant will contact you to discuss if you need to correct something in your integration.

## Why is this process needed?

Because in that way, both Mercado Pago and you can guarantee, besides other things, your customers' data security and the accomplishment of standards or legal dispositions in each country. Also, following these advices, you can get a good purchasing experience, which helps to maximize your received payments conversion.

Non-compliance of these rules may involve from no payment processing to legal actions according to the established on the [terms and conditions](https://www.mercadopago.com.ar/ayuda/terminos-y-condiciones_299).

## Use of the SDK provided by Mercado Pago

You've to use the official Mercado Pago SDK in your site or application. You cannot modify it or host it in your servers. With this ensured, we can do all controls related to the user in order to improve payments conversion and avoid fraud.

## Credit card data cannot reach your servers

When creating a credit card data form, be sure that you don't include the name attribute in input tags. This prevents this data from reaching your server when the user submits the form. Don't worry, the SDK will identify the required parameters through the data-checkout attribute and will send them to Mercado Pago servers.
By not dealing with card data you may save yourself a lot of headaches and don't need to accomplish the PCI-DSS standards to prevent possible data vulnerability. Mercado Pago deals with the accomplishment of these rules for you.

## SSL certificate

We try to ensure your customers the highest flexibility and security in their transactions, as well as keep their data protected from being stolen by third parties. That's why it is a requirement that you have a SSL certificate, and the payment form to be provided under an HTTPS page.
During the sandbox mode tests, you can operate over HTTP, but for homologation you'll need to acquire the certificate in case you don't have it.

## Promos and financing

If you offer credit card payments in multiple installments, you must be clear about the fact that the promos are offered by Mercado Pago. [You can use one of our payment methods banners](https://www.mercadopago.com.ar/developers/en/guides/banners/introduction/), or [link to the promos section](https://www.mercadopago.com/mla/credit_card_promos.htm).
Also, you must inform the financing fee that will be applied to your users, linking to the [Mercado Pago financing costs section](https://www.mercadopago.com.ar/ayuda/costos-financiacion_621).

## Status communication

You must offer the user the best possible communication about the status that can be applied to a payment as well as about the possible errors in the credit card data entry. This will allow you to improve the checkout conversion, and to offer your customers clear and precise information about what they have to complete or correct in order to finalize the payment process.

To do this, [check the possible error codes of the API](https://www.mercadopago.com.ar/developers/en/guides/payments/api/handling-responses/), along with the communication we suggested for you to implement in each case.

Besides, when a credit card payment is appoved, you must show in screen and in a possible accredited-payment email, how the users can identify the charge in their credit card statement. You just need to show the value of the `statement_descriptor` attribute obtained in the payment response. So, there will be less chances of a chargeback due to a charge rejection from the users when they see their statement.

If you allow payment refunds, you must be clear that this can be done only within 90 days after the payment credits.

### Terms and conditions

You must have a policy of terms and conditions, in which you specify that you're the responsible of all the data entered in your site.