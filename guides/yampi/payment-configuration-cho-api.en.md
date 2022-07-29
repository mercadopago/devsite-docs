# Configure payments with Checkout Transparente

With the [Checkout Transparente](/developers/pt/guides/checkout-api/landing), the entire checkout process will take place within the online store environment, without the need to redirect to an external page. In addition to allowing greater control in the customization and integration process, the checkout offers a complete structure for processing payments with the main means available on the market.

See below which payment methods are available for the store when integrating the Checkout Transparente.

* Credit cards.
* Boleto bancário.
* Pix (bank transfer available 24 hours a day).

To integrate the Mercado Pago Checkout Transparente to your store on Yampi, follow the steps below.

1. On the **payment gateway management** screen, locate the payment method you want to use or edit and click **Visualizar**.
2. In the **management of the selected payment method** screen, if it is not already indicated, select the **afiliação** registered for Mercado Pago.
3. For some of the available payment methods, you can also configure some information, such as:
 
* **Boleto Bancário**: indicate a discount percentage for payments made with bank slip, inform the number of days to be considered for expiration and cancellation of overdue slips, in addition to inserting possible instructions related to the means of payment.
* **Pix**: indicate a discount percentage for payments made with Pix.
 
4. Click **Salvar** to complete the configuration.

Ready! Mercado Pago checkout is ready to receive online payments from your store at Yampi.

> NOTE
>
> Important
>
> For payments with credit cards, the installment and interest settings must be verified directly in your [Mercado Pago user panel](https://www.mercadopago.com.br/costs-section#from-section=menu).
>
> The Pix payment option can only be used if there is a [Pix key registered](/developers/em/docs/checkout-api/integration-configuration/integrate-with-pix) in Mercado Pago. In addition, there is a limit to the value of Pix, established by the Central Bank of Brazil, which can be moved during the night period (between 8:00 pm and 6:00 am) of R$1,000. For the daytime period (between 6 am and 8 pm), however, there is no movement limit.

> PREV_STEP_CARD_EN
>
> Payment configuration
>
> Learn how to configure Mercado Pago checkouts to receive payments from your store.
>
> [Payment configuration](/developers/en/docs/yampi/payment-configuration-cho-api)