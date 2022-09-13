# How to migrate your integration to Checkout Bricks

If your integration currently uses another Mercado Pago product that is being deprecated or if you simply want to migrate to Checkout Bricks, check the instructions below to be able to integrate.

Select the type of product you currently use to learn the step-by-step of how to migrate.

## Web Tokenize Checkout

Mercado Pago's Web Tokenize Checkout was a product that provided with a form with the design and the front-end ready.

> WARNING
>
> Important
>
> This product was deprecated in August 2022.

Learn how to migrate from Web Tokenize Checkout V1 or V2 in the following documentations:

- [Migrate from Web Tokenize Checkout V1](/developers/en/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v1/clientside)
- [Migrate from Web Tokenize Checkout V2](/developers/en/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v2/clientside)

## CardForm

Integration via CardForm is done as part of the ----[mlb]----Transparent Checkout------------ ----[mla, mlu, mlm, mlc, mco, mpe]----Checkout API------------ integration. In this integration mode, **MercadoPago.js** takes care of the necessary flows to obtain the information required to generate a payment. When initialized, a search is performed to collect the types of documents available for the corresponding country.
To migrate from CardForm to Checkout Bricks, go to this documentation:

- [CardForm](/developers/en/docs/checkout-bricks/how-tos/how-to-migrate/cardform/clientside)