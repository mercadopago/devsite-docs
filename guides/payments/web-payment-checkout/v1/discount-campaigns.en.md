---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlc
  - mlm
---

# Discount campaigns

> WARNING
>
> Note
>
> This documentation refers to the new version of the Smart Checkout.
>
> Remember there is only active support and new functionalities for the [new version of the Smart Checkout.](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/introduction/)

Create discount campaigns to boost your sales using the marketing tools of your Mercado Pago account in the section Configuration for your Business: [Create discount](https://www.mercadopago.com.ar/campaigns/create).

You can create two types of campaigns:

* Encompassing all your buyers, e.g. seasonal discounts
* With a discount code sent to your buyers.

All you should do is choose how much you want to invest and when, without any additional costs.

## Buyer experience

Before showing the checkout, Mercado Pago will check whether there is a campaign created for that buyer.

If the campaign is valid, the discount will be applied or a coupon will be requested. The discount will be automatically calculated and the promotional price will be displayed.

To find out whether a payment had any discount, you should check if `coupon_id` attribute is not `null`. Check the amount of discount in the `coupon_amount` attribute.

### Next steps

* [Customizations](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/v1/personalization/)
* [Test the integration](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/v1/testing/)
