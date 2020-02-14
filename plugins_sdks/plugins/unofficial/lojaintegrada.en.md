---
 sites_supported:
  - mlb
---

# Loja Integrada

## What is Loja Integrada?

Loja integrada is a **virtual platform that allows you to receive payments with Mercado Pago**.
It is the only payment method available for free accounts.

You can activate the option to [sell directly on your site](https://www.mercadopago.com.br/developers/en/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_set-payment-methods), [receive payments with Bank Ticket](https://www.mercadopago.com.br/developers/en/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_bank-ticket-setting) and [offer interest-free monthly installments](https://www.mercadopago.com.br/developers/en/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_installments-settings).

## Setting steps

The **steps to start charging with Mercado Pago** are the following:

1. Create a [seller account](https://www.mercadopago.com.br/activities) in Mercado Pago if you do not yet have one.
1. Install the app on your site.
1. Set the payment methods with Mercado Pago.

## Install Mercado Pago on your site

To **associate your Mercado Pago account to Loja Integrada**, follow these steps:

1. Access the [payment methods settings](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) in the Loja Integrada menu.
1. Click on “Mercado Pago” and then on “Install Mercado Pago App”.
1. You are going to be redirected to Mercado Pago so that you can enter your account with your account information. To authorize the connection, click on “Allow”.


    ![Installing Mercado Pago - Loja Integrada](/images/lojaintegrada/lojaintegrada-connect-1.gif)

And that’s it! Mercado Pago is installed on your site and you can start charging.

> NOTE
>
> Change the Mercado Pago account
>
> If you wish to change the Mercado Pago account associated to your site, it is necessary to close and reinstall the app.
> 1. Close your Mercado Pago account if you have it open in your browser.
> 1. Click “Options Menu” and then “Exit”.
> 1. Access the [payment methods settings](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) in the Loja Integrada menu, click on “Mercado Pago” and finally, on “Uninstall app”.
> 1. Finally, [install Mercado Pago on your site](https://www.mercadopago.com.br/developers/en/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_install-Mercado-Pago-on-your-site)++ with your new account.

## Set payment methods

After associating your account, you have the option to activate two types of checkout: Transparent Checkout and Checkout Redirect. You will always have to activate one or the other. You can also [set payments with Bank Ticket](https://www.mercadopago.com.br/developers/en/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_bank-ticket-setting) and [interest-free monthly installments](https://www.mercadopago.com.br/developers/en/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_installments-settings).

You can check and configure the [Fees and Deadlines](https://www.mercadopago.com.br/settings/release-options) of your online sales whenever you want.


### Transparent Checkout

It allows the **client to complete the purchase on your site**, without being redirected.

1. Access the [payment methods settings](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) in the Loja Integrada menu and click on “Mercado Pago”.
1. In the item “Transparent Checkout” change the option to “Activated”.
1. Finally, click on “Save changes”.

### Mercado Pago Redirect

In this case, **the buyer will be redirected to Mercado Pago to make the payment** and complete the purchase.

1. Access the [payment methods settings](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) in the Loja Integrada menu and click on “Mercado Pago”.
1. In the item “Mercado Pago Redirect” change the option to “Activated”.
1. Finally, click on “Save changes”.


    ![Activating Checkout transparent and Checkout redirected - Loja Integrada](/images/lojaintegrada/lojaintegrada-checkout-1.gif)

Complete the information from your site that you want it to appear when your client make a payment:

- **Invoice Purchaser’s Name**. Write the name that will appear in your client’s invoice so that they can recognize you (maximum 11 characters).
- **Minimum value**. Set the minimum purchase value you desire. By default, it is R$ 5,00.
- Click on “Save changes”.

## Bank Ticket Setting

Offer **Bank Ticket as a payment option**:

1. Access the [payment methods settings](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) in the Loja Integrada menu and click on “Mercado Pago” and navigate to “Bank Ticket setting”.
1. In the item “Bank Ticket bancário” change the option to “Activated”.
1. Then, set a minimum value for these payments. If you wish to receive all of them, leave the field with the value 0.
1. If you wish that your payments with Bank Ticket have a discount, check the option **“Use discount in your Bank Tickets?”** and complete the percentage that you want to offer as a discount in “Discount applied”.
1. Finally, click “Save changes”.


    ![Setting ticket - Loja Integrada](/images/lojaintegrada/lojaintegrada-ticket-1.gif)

## Installments settings

**Offer the option to pay with interest-free monthly installments** on your site with Mercado Pago.

> WARNING
>
> Important
>
> To ensure that this works properly, it is necessary to have the settings to offer interest-free monthly installments activated in your [Mercado Pago account](https://www.mercadopago.com.br/developers/en/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_set-interest-free-installments-in-your-Mercado-Pago-account).

1. Access the [payment methods settings](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) in the Loja Integrada menu and click on “Mercado Pago” and navigate to “Installment settings”.
1. Complete the following fields:
  - Only for Transparent Checkout payments, **check the option to use the Mercado Pago external installment service**.
  - **Complete the minimum and maximum value of installments** that you want to receive.
  - Lastly, according to your account settings, **choose the number of interest-free monthly installments for your payments**.
1. Finally, click “Save changes”.


    ![Setting credit card - Loja Integrada](/images/lojaintegrada/lojaintegrada-credit-card-1.gif)

### Set interest free installments in your Mercado Pago account

1. Log in to your [Mercado Pago account and](https://www.mercadopago.com.br/business) go to “Your business”.
1. Access the option “Settings”, navigate to “Offering interest free installments” and click “Activate”.
1. Choose “How many do you want to offer?” and confirm the changes with the “Activate” button.


    ![Setting account installment - Loja Integrada](/images/lojaintegrada/lojaintegrada-account-installment-1.gif)

> For more information, visit the [official Loja Integrada site](https://lojaintegrada.com.br/).
