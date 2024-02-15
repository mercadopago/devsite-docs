---
 sites_supported:
  - mlb
---

# Set payment methods

After activating Mercado Pago, you have the option to offer the following payment methods: [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/iset/set-payment-methods#bookmark_checkout_pro), [Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/iset/set-payment-methods#bookmark_checkout_api) or [both checkouts](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/iset/set-payment-methods#bookmark_both_checkouts).

You also have the option to [offer interest free installments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/iset/set-interestfree-installments) and set the [rates and terms](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) of your online sales whenever you want.

## Set payment types

1. Go to “Payment methods” in the section Modules from the admin panel of your store. 
1. Search in the payment methods list for Mercado Pago and go to “Setting options”.
1. Select the payment types that you wish to offer: “Boleto bancario” and/or “Credit card”.
1. Complete in “Brief description/Name of the store" the name that will appear in your client’s invoice so that they can recognize you (maximum 13 characters). 
1. Click on “Close” and then on “Save changes”.
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_methods_2.gif)
<p>&nbsp;</p>

## Checkout Pro

**The buyer will be redirected to Mercado Pago** to make the payment and complete the purchase.

To activate this model, follow these steps:

1. Go to “Payment methods” in the section Modules from the admin panel of your store. 
1. Search in the payment methods list for Mercado Pago and go to “Setting options”.
1. In the section Checkout model, choose the option “Pattern”. 
1. Enter the [e-mail from your Mercado Pago account](https://www.mercadopago[FAKER][URL][DOMAIN]/profile#from-section=menu) in “Registered e-mail in Mercado Pago”.
1. Complete the fields Client ID and Client Secret with the [credentials of your Mercado Pago account](https://www.mercadopago[FAKER][URL][DOMAIN]developers/en/guides/resources/credentials).
1. Click on “Close” and then on “Save changes”.
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_checkout_padrao_3.gif)
<p>&nbsp;</p>

## Checkout API

Allows the **client to complete the purchase on your store** without being redirected to a different site.

To activate this model, follow these steps:

1. Go to “Payment methods” in the section Modules from the admin panel of your store.
1. Search in the payment methods list for Mercado Pago and go to “Setting options”.
1. In the section Checkout model, choose the option “Transparent”.
1. Enter the [e-mail from your Mercado Pago account](https://www.mercadopago[FAKER][URL][DOMAIN]/profile#from-section=menu) in “Registered e-mail in Mercado Pago”.
1. Complete the fields Client ID, Client Secret and Public Key with the [credentials of your Mercado Pago account](/developers/en/guides/additional-content/your-integrations/credentials).
1. Click on “Close” and then on “Save changes”.
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_checkout_transparente_4.gif)
<p>&nbsp;</p>

## Both checkouts

You can offer your clients the option to complete the payment directly on your store or to be redirected to Mercado Pago website.

To **activate both checkouts**, follow these steps:

1. Go to “Payment methods” in the section Modules from the admin panel of your store. 
1. Search in the payment methods list for Mercado Pago and go to “Setting options”.
1. In the section Checkout model, choose the option “Both”.
1. Enter the [e-mail from your Mercado Pago account](https://www.mercadopago.com.br/profile#from-section=menu) in “Registered e-mail in Mercado Pago”.
1. Complete the fields “Client ID, Client Secret and Public Key” with the [credentials of your Mercado Pago account](/developers/en/guides/additional-content/your-integrations/credentials).
1. Click on “Close” and then on “Save changes”.
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_checkout_ambos_5.gif)
<p>&nbsp;</p>

<!-- -->
> For more information, visit [iSET official website](https://www.iset.com.br/).