# Payment Preferences


Find the payment preference settings in the *Configure* option once you have the module installed. Once inside, activate the checkout you want to offer and configure the options you prefer.

> NOTE
>
> Note
>
> Remember that we have different [types of checkout](https://www.mercadopago.com.ar/developers/en/guides/plugins/prestashop/introduction/#bookmark_tipos_de_checkout) that adapt to the needs of your business and that each one has its own settings.

## Business Information

Enter the name of the business to appear on your customers' invoice and make it easier for them to recognize the payment when a purchase summary arrives. Select to which category the products or services offered by the store belong and make other adjustments according to your needs.

![Basic information](/images/prestashop/preferences_en.png)

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
> All our modules have an open source license. Do you want to participate in its construction? [Suggest improvements and editions in Github](https://github.com/mercadopago/cart-prestashop-7).

## Basic Configuration

* Define the experience your customers will have:
 * Use the Checkout Mercado Pago to support payments with cards, cash and money in account. It will provide security and comfort to the user. And now you can also configure it as a modal to open in your store!
 * Use the Custom Checkout and Ticket Checkout to have control over other settings. Activate both to offer all means of payment.


> WARNING
>
> Important
>
> While you can activate all checkouts, we recommend selecting only one of the experiences so as not to confuse your customers.

* Select the [payment methods available](https://www.mercadopago.com.ar/developers/en/guides/localization/payment-methods/) to your customers according to the country in which you operate and the type of checkout you are configuring.

* Set the maximum number of installments in which they can pay you.

* Indicate the expiration of face to face payments (Ticket Checkout only).

## Advanced Configuration

You will have different settings available depending on the type of checkout you activate in your store. Customize the shopping experience with the advanced settings that apply to each.

### Settings common to all checkouts

| Configuration | Description                                                               	                |
|---------------|-----------------------------------------------------------------------------------------------|
| Binary mode   | Activate this option when you do not want to leave payments pending or under review. With binary mode payments will be accepted or rejected automatically.|

> WARNING
>
> Important
>
> Activating the binary mode can affect fraud prevention. Leave it inactive so we can take care of your charges.

### Checkout Mercado Pago

| Configuration            | Description                                                              	                                   |
|--------------------------|---------------------------------------------------------------------------------------------------------------|
| Return to the store      | When you choose redirect, you will always have the option of having your customers return or not to your store once the payment is finished. |
| Save payment preferences | When the user accesses our checkout, we generate a payment link with the information of that purchase. Here you can set the time in which we save that preference. |

Choose what shopping experience your customers will have when paying:

| Payment Experience            | Characteristics                                                              	                                 |
|-------------------------------|----------------------------------------------------------------------------------------------------------------|
| Redirect     	                | Your customers will be redirected to a Mercado Pago page with the payment form to complete the purchase. |
| Modal **(NEW)**               | Your customers will access the Mercado Pago payment form without leaving your store. If you deactivate it, they will be redirected to another page. |

> NOTE
>
> Note
>
> Check [the documentation of the Checkout Mercado Pago](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/introduction/) to learn more about all its features and functionalities.

### Custom Checkout

| Configuration                          | Description                                                                      |
|----------------------------------------|----------------------------------------------------------------------------------|
| Discount for paying with Mercado Pago. | Offer a special discount to encourage your customers to make the purchase.       |

### Last step

> LEFT_BUTTON_REQUIRED_EN
>
> Test and receive payments
>
> Test the module and verify that everything works well to start receiving money from your sales in Mercado Pago.
>
>
> [Recibir pagos](https://www.mercadopago.com.ar/developers/en/guides/plugins/prestashop/receive-payments/)