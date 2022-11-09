# Configure payment conditions

**Payment conditions** are the payment methods that are displayed on the website for the checkout. They allow the configuration of fees, interests, special conditions, etc.

After you have created your affiliation with **MercadoPagoV2**, you must configure the **payment conditions** that will be offered to buyers.

> WARNING
>
> Important
>
> Verify in your VTEX application store that the App **Mercado Pago Payment APP** has been installed to use the **MercadoPagoPro, MercadoPagoWallet and MercadoPagoOff**  payment conditions, or request its installation by the VTEX team through [VTEX Support](https://help.vtex.com/en/support).

The configuration of payment conditions is done in the **Payment conditions** tab of the **Settings** menu in the **Payments** module in the VTEX platform administrator portal. In this tab, you must click on the "+" button (*Add new payment condition for ...*) and select on eof the following payment conditions:

* **Credit Card:** this refers to credit card transactions carried out on your store's website. This setup requires you to select each credit card brand that you want in your store. [Click here to see a list of available credit card brands](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/vtex/payment-methods). In addition, depending on the payment terms you select (Cash or Installments), your configuration may require you to fill in additional fields. For more information on how to configure installments in VTEX, click [here](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros). ----[mla, mlu, mlc, mlm, mpe, mco]----
* **Debit Card:** this referers to debit card transactions. ------------

----[mla, mlm, mlb]----
* **Mercado Credits:** it's Mercado Pago's financing method
that allows you to pay in installments without a credit card. To activate the Mercado Credits button, you must follow these steps listed below:
 * You must have created a MercadoPagoV2 gateway affiliation. If you haven't, you can learn how to do it in [this documentation](/developers/en/docs/vtex/gateway-affiliations).
 * In the VTEX administration panel, go to **Payments > Settings**.
 * Go to the **Payment Conditions** tab, click on the "+" button and search for Mercado Credits.
 * Name the rule to facilitate its identification and activate the payment condition in the Status field.
 * In **Process with affiliation**, choose MercadoPagoV2 as your affiliation.
 * Save your changes by clicking on **Save**.
------------

* **Other:** this refers to transactions with  **MercadoPagoOff**, **MercadoPagoWallet**, or **MercadoPagoPro**.
  * If you configure **MercadoPagoPro**, the buyer will make the payment in the Mercado Pago environment, via a form presented directly in their store and will have access to all payment methods available on the platform.
  * If you configure **MercadoPagoWallet**, the buyer will use their Mercado Pago wallet. This mode is exclusive to buyers registered in Mercado Pago or Mercado Libre and we suggest using it if you select **Credit Card Payment Condition**.
  * If you configure **MercadoPagoOff**, you can use means of payment in cash.  ----[mlb]----
* **Boleto Bancário:** this refers to boleto bancário transactions **exclusively**.
* **Pix:** This refers to transactions with Pix via **QR Code** or **Copy and Paste**. To configure this payment condition, you must have a Pix key registered in your Mercado Pago account. For more information on creating your Pix key, click [here](https://www.mercadopago[FAKER][URL][DOMAIN]/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required). ------------

![Configure payment plans](/images/vtex/paymentconditions-imagenv2-en.gif)

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

![Credit card configuration](/images/vtex/paymentconditions-cc-imagenv2-en.gif)

> WARNING
>
> Important
> 
> Changes to payment conditions can take up to 10 minutes to apply to the checkout flow.
> <br>
> If your store has layout customization at checkout, when adding a new payment method, check if it is necessary to perform new customizations.

For more information on how to configure payment terms in VTEX, click [here](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455).

> NOTE
>
> Note
> 
> Rates and taxes must be configured on the platform, since Mercado Pago processes them according to the information provided by VTEX. Click [here](https://help.vtex.com/en/tutorial/creando-la-tasaimpuesto/) for more information.
> <br>
> <br>
> If you have difficulties during your integration, check our [errors list](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/vtex/common-errors), and our document about [VTEX logs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/vtex/logs).

> NEXT_STEP_CARD_EN
>
> Device Fingerprint
>
> Lean how to configure fingerprint.
>
> [Device Fingerprint](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/vtex/device-fingerprint)