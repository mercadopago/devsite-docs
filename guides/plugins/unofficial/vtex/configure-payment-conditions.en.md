# Configure payment conditions

**Payment conditions** are the payment methods that are displayed on the website for the checkout. They allow the configuration of fees, interests, special conditions, etc.

After you have created your affiliation with **MercadoPagoV2**, you must configure the **payment conditions** that will be offered to buyers.

> WARNING
>
> Important
>
> Verify in your VTEX application store that the App **Mercado Pago Payment APP** has been installed to use the **MercadoPagoPro, MercadoPagoWallet and MercadoPagoOff**  payment conditions, or request its installation by the VTEX team through a ticket in [VTEX Support](https://help.vtex.com/en/support).

The configuration of **payment conditions** is done in the **Payment conditions** tab of the **Settings** menu in the **Payments** module in the VTEX platform administrator portal.

In this tab, you must click on the "+" button (*Add new payment condition for ...*) and select on eof the following payment conditions:

* **Credit Card:** this referers to credit card transactions. Configuring payment conditions with **credit card** requires that you select the credit card brand that you wish to add. [Click here to see what credit card brands you can select](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/payment-methods). In addition, its configuration may require you to complete additional fields to those presented above, depending on whether you select **Prepaid in full** or **In Installments**. For more information on how to configure installments in VTEX, click [here](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros).
* **Debit Card:** his referers to debit card transactions.
* **Other:** this may refer to transactions with  **MercadoPagoOff**, **MercadoPagoWallet**, or **MercadoPagoPro**.
  * If you configure **MercadoPagoPro**, the buyer will pay in the Mercado Pago environment through the modal web form directly in your store.
  * If you configure **MercadoPagoWallet**, the buyer completes the payment with the Mercado Pago wallet exclusively for registered users, and once the process is finished, they will return to your store.
  * If you configure **MercadoPagoOff**, you will have access to Boleto Bancário and Payments with PEC (lottery shops), using your MercadoPagoV2 affiliation.  ----[mlb]----
* **Boleto Bancário:** this refers to boleto bancário transactions.
* **Pix:** This refers to Pix transactions. To configure Pix in your integration with Mercado Pago, it is necessary for your Pix key to be configured as well. For more information on how to create your Pix key, click [here](https://www.mercadopago[FAKER][URL][DOMAIN]/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required). If you already have your Pix key, the process follows the steps common to the other payment plans. ------------

![Configure payment plans](/images/vtex/paymentconditions-en.gif)

> NOTE
>
> NOTE
> 
> You can also configure **special payment conditions**. Click [here](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456?&utm_source=admin) for more information.

On the following screen:

1. Write the **Rule Name**. You can write a name of your choice to easily identify it.
2. Select **MercadoPagoV2** from the list offered by the `Process with affiliation` field.
3. Activate the payment condition from the `Status` field. This must be activated for your selection in the `Process with affiliation` field to work.
4. Save your changes by clicking on `Save`.

![Credit card configuration](/images/vtex/paymentconditions-cc-en.gif)

> WARNING
>
> Important
> 
> Changes to payment conditions can take up to 10 minutes to apply to the checkout flow.

For more information on how to configure payment terms in VTEX, click [here](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455).

> NOTE
>
> Note
> 
> If you have difficulties during your integration, check our [errors list](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/common-errors), and our document about [VTEX logs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/logs).

> LEFT_BUTTON_REQUIRED_EN
>
> Device Fingerprint
>
> Lean how to configure fingerprint.
>
> [Device Fingerprint](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/device-fingerprint)