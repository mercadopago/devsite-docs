# Requirements for the production environment

Once your integration is ready, to start receiving payments you must [activate your credentials]([FAKER][CREDENTIALS][URL]).

## Why is this process required?

This process can ensure your customers' data security, compliance with legal standards or the provisions in each country, and the best shopping experience for your sales.

[View the Terms and Conditions of Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/legal/terms-and-conditions).

## What we validate?
In order to ensure both the best integration quality and user experience for the end customer, from Mercado Pago we need certain conditions before going into production environment.

## Security

### Use the official libraries and ensure data security

On one hand, you need to use MercadoPago.js library, as provided by Mercado Pago. You can't change or host it on your servers. And, on the other hand, you need to make sure not to put the `name` attribute when creating a card form to take care of data security.

These measures protect your customer's sensitive data, meet the required security standards, and keep yours up to date.

### Don't forget to get an SSL certificate

To ensure security and data protection, you need a valid SSL certificate and make the payment form available on an HTTPS page. This protects buyers' transactions and data. You may not have it while running tests, but it is mandatory for the production environment.

## Sending information

To prevent real payments being rejected by security non-compliance, you must add as much information as you can while performing an operation.

In order to optimize payment security validation and avoid rejected payments, you can send us the customer and item data so we can analyze it. I.e., if you send us this information, we can detect if the buyer has made suspicious payments in the past.

You can see more information in the [Improves approval section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/payment-rejections).

## Notifications and payment search

In order to take full advantage of the Mercado Pago integration, one of the key points to highlight is the use of notifications to update orders in real time in your system.
Both types of notifications, [IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction) or [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks/webhooks), are sent from one server to another through an `HTTP POST` request informing your transactions.
By implementing these notifications, you will be able to find out all the updates of your transactions at the moment.

## User experience

### Response Handling

As mentioned in the [Handling Responses](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/handling-responses) section, you should be shown the messages corresponding to the client, depending on the result of the payment, so that they can act in the correct way.

### Be transparent with promotions and financing

You need to be clear about which promotions are offered by Mercado Pago. You can [include a payment method banner](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/banners/introduction) or [add a link to the promotions section](https://www.mercadopago.com/mla/credit_card_promos.htm). Besides, you need to inform [financing costs applicable to your customers](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/costos-financiacion_621).

----[mla]----
> NOTE
>
> Note
>
> Per Resolution [E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) from the Argentine Secretary of Trade, on transparent prices, you are required to comply with [additional requirements](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/considerations-argentina).
------------

## Make your terms and conditions available

You need to have a policy on terms and conditions and make it clear that you are responsible for all the data uploaded to your website.

---
### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Receive payments by Mercado Pago wallet
>
> It allows payments only from Mercado Pago registered users, with cards and available balance.
>
> [Registered users](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/wallet-integration)

> RIGHT_BUTTON
>
> API References
>
> Find all the information required to interact with our APIs.
>
> [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference)
