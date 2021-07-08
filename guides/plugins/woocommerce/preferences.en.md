# Payment Preferences
<br/>

Find the payment preference settings in the WooCommerce *Settings* once you have installed the module. There, go to the *Payments* section, activate the checkout you want to offer and configure the options you prefer for your shopping gateway.

> NOTE
>
> Note
>
> Remember that we have different [checkout types]() that adapt to your business’ needs and that each one has its own settings.

## Business information

Enter the **name of the business** to appear on your customers' invoice and make it easier for them to recognize the payment when a purchase summary arrives. Select to which **category** the products or services offered by the store belong and make other adjustments according to your needs.

![Basic information](/images/woocomerce/en_info_basica.png)

> WARNING
>
> Important
>
> Do not forget to enter your `integrator_id` as a certified Mercado Pago [Partner](https://partners.mercadopago.com/). If you don't have it, you can [request it now](https://docs.google.com/forms/d/1EeO__nZuqHf4cb81NpwtDSybPT7COluSZVrXR4A8F7Q/viewform?edit_requested=true).

<span></span>

> NOTE
>
> Note
>
> All our modules have an open source license. **Do you want to participate in its construction?** [Suggest improvements and editions](https://github.com/mercadopago/cart-woocommerce) on Github.

## Basic configuration

Activate the checkout you want to offer your customers according to your preferences and choose the payment methods with which they can make the purchase.

* Activate a checkout type.
  * Use Checkout Pro to support payments with cards, ----[mlb]---- Pix,------------ cash and money in the Mercado Pago account.
  * Use the Custom Checkout to have control over other settings and accept payments with credit card, ----[mlb]---- Pix,------------ boleto and in-person.

* Choose the [payment methods available](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/payment-methods/) to your customers according to the marketplace in which you operate and the type of checkout you are configuring.

* Set the maximum number of installments in which they can pay you.

* Activate the currency conversion with the one you have in Mercado Pago.

----[mlb]----
> WARNING
>
> Important
>
> Before setting up Pix as a payment method, remember to:
>
> - [Download the latest version](https://br.wordpress.org/plugins/woocommerce-mercadopago/#description) to update your Mercado Pago plugin.
> - Register your key in Mercado Pago. If this is not done, your customers will not be able to finalize the purchase. [See how to do it](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).

<span></span>
------------

> NOTE
>
> Note
>
> The option to the activate currency conversion is available only for the Custom Checkout. The Checkout Pro converts automatically.

## Advanced configuration

You will have different settings available depending on the type of checkout you activate in your store. Customize the shopping experience with the advanced settings that apply to each.

### Common settings to all checkouts

| Configuration | Description |
| --- | --- |
| Binary Mode | Activate this option when you do not want to leave payments pending or under review. With binary mode payments will be accepted or rejected automatically.|

### Checkout Pro

#### Payment experiences in Checkout Pro

Choose what shopping experience your customers will have when paying: 

| Payment experience | Characteristics |
| --- | --- |
| Redirect | Your customers will be redirected to a Mercado Pago page with the payment form to complete the purchase. |
| Modal | Your customers will access the Mercado Pago payment form without leaving your store. |

> NOTE
>
> Nota
>
> Check out the [Checkout Pro documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/introduction) to learn more about all its features and functionalities.

| Configuration | Description |
| --- | --- |
| Back to the store | When you choose redirect, you will always have the option of having your customers return or not to your store once the payment is finished. |
| Configurable URLs | Payment successful, declined or pending. |

### Custom Checkout

#### Card payments

| Configuration | Description |
| --- | --- |
| Discount coupon | Activate this option when you want to offer discounts to your customers. A field will appear on the form where they can enter their coupon. |

#### Pay with cash

| Configuration | Description |
| --- | --- |
| Discount coupon | Activate this option when you want to offer discounts to your customers. A field will appear on the form where they can enter their coupon. |
| Reduce inventory | Activate this option when you want to automate the inventory reduction for each purchase order that is approved after a payment with Mercado Pago. |

----[mlb]----
#### Payments with Pix

| Configuration | Description |
| --- | --- |
| Pix expiration | Set the expiration time for the code sent to the customer after the order is placed. This is the period in which the customer will have to pay for the purchase. |
| Discounts in Mercado Pago | Enable this option when you want to select a percentage amount to discount from your customers who pay with Mercado Pago. |
| Commission for purchases with Mercado Pago | Enable this option when you want to select an additional amount to charge your customers who pay with Mercado Pago, as a fee. |
------------

---

### Next steps

> LEFT_BUTTON_REQUIRED_ES
>
> Test and receive payments
>
> Test the module and verify that everything works well to start receiving money from your sales in Mercado Pago.
>
>
> [Receive payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/woocommerce/receive-payments)
