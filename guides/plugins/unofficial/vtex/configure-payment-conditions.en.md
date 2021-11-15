# Configure payment conditions

**Payment conditions** are the payment methods that are displayed on the website for the checkout. They allow the configuration of fees, interests, special conditions, etc.

After you have created your affiliation with **MercadoPagoV2**, you must configure the **payment conditions** that will be offered to buyers.

> WARNING
>
> Important
>
> Verify in your VTEX application store that the App **Mercado Pago Payment APP** has been installed to use the **MercadoPagoPro, MercadoPagoWallet and MercadoPagoOff**  payment conditions, or request its installation by the VTEX team through a ticket in [VTEX Support](https://help.vtex.com/en/support).

The configuration of the payment conditions is carried out in the administration portal of the VTEX platform in the **Payment conditions** tab of the **Settings** menu within the **Payments** module.

In this tab, you must click on the "+" button (*Add new payment condition for ...*) and select a payment condition.

On the following screen, you must write the **Rule Name** to easily identify it, activate the payment condition from the `Status` field, select **MercadoPagoV2** from the list offered by the `Process with affiliation` and finally save your changes by clicking on `Save`.

For more information on how to configure payment terms in VTEX, click [here](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455).

![Configure payment plans](/images/vtex/paymentconditions-en.gif)

Integration with Mercado Pago allows you to configure the following payment conditions:

|Payment ocndition|Section within the payment plans tab|
|---|---|
|Credit Card|Credit Card|
|Debit Card|Debit Card|
|MercadoPagoOff|Othe|
|MercadoPagoWallet|Other|
|MercadoPagoPro|Other|
----[mlb]----|Boleto Bancário|Invoice|
|PIX|Instant payment|------------

You can also configure **special payment conditions**. Click [here](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456?&utm_source=admin) for more information.

To finalize the configuration, click on **Save**.


> NOTE
>
> NOTE
> 
> Changes to payment conditions can take up to 10 minutes to apply to the checkout flow.

&nbsp;

## Checkout Mercado Pago configuration

Configure this solution to charge through **Mercado Pago**, using all the payment methods available on the platform.

If you configure **MercadoPagoPro**, the buyer will pay in the Mercado Pago environment through the modal web form directly in your store.

If you configure **MercadoPagoWallet**, the buyer completes the payment with the Mercado Pago wallet exclusively for registered users, and once the process is finished, they will return to your store.

This is configured following the same steps shown above, common to other payment conditions.

&nbsp;

## Credit card configuration

Configuring payment conditions with **credit card** requires that you [select the credit card brand](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/payment-methods) that you wish to add. In addition, its configuration may require you to complete additional fields to those presented above, depending on whether you select **Prepaid in full** or **In Installments**.

For more information on how to configure installments in VTEX, click [here](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros).

![Credit card configuration](/images/vtex/paymentconditions-cc-en.gif)

&nbsp;

----[mlb]----

## Pix Configuration

To configure PIX in your integration with Mercado Pago, it is necessary for your PIX key to be configured as well.

For more information on how to create your PIX key, click [here](https://www.mercadopago[FAKER][URL][DOMAIN]/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).

If you already have your PIX key, the process follows the steps common to the other payment plans.

&nbsp;

------------

> LEFT_BUTTON_REQUIRED_EN
>
> Device Fingerprint
>
> Lean how to configure fingerprint.
>
> [Device Fingerprint](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/device-fingerprint)