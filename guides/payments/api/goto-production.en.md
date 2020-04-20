# Requirements for the production environment

Once your integration is ready, to start receiving payments you just need to fill out the form for the production environment in the [Credentials section]([FAKER][CREDENTIALS][URL]).

## Why is this process required?

This process can ensure your customers' data security, compliance with legal standards or the provisions in each country, and the best shopping experience for your sales.

[Learn about Mercado Pago terms and conditions](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/terminos-y-condiciones_299).

## Use the official libraries and ensure data security

On the one hand, you need to use MercadoPago.js library, as provided by Mercado Pago. You cannot change or host it in your servers. And, on the other, you need to make sure not to put the `name` attribute when creating a card data form. This way your servers will never store data when the customer sends the form.

These measures protect your customer's sensitive data, meet the required security standards, and keep yourself up to date.

## Don't forget to get an SSL certificate

To ensure security and data protection, you need to have a valid SSL certificate and make the payment form available on an HTTPS page. This protects buyers' transactions and data. You may not have it for tests, but it is mandatory for the production environment.

## Be transparent with promotions and financing

You need to make clear that promotions are offered by Mercado Pago. You can [include a payment method banner](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/banners/introduction/) or [add a link to the promotions section](https://www.mercadopago.com/mla/credit_card_promos.htm). Besides, you need to inform [financing costs applicable to your customers](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/costos-financiacion_621).

----[mla]----
> NOTE
>
> Note
>
> Per Resolution [E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) from the Argentine Secretary of Trade, on transparent prices, you are required to comply with [additional requirements](https://www.mercadopago.com.ar/developers/en/guides/localization/considerations-argentina/).
------------

## Make your terms and conditions available

You need to have a policy on terms and conditions and make it clear that you are responsible for all the data uploaded to your website.

---
### Next steps

> LEFT_BUTTON
>
> Test your integration
>
> Check that everything works in your integration with test users.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/test-integration/)

> RIGHT_BUTTON
>
> API References
>
> Find all the information required to interact with our APIs.
>
> [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/)