---
 sites_supported:
  - mlb
---

# iSET

## What is iSET?

iSET is a **virtual platform that allows you to receive payments with Mercado Pago**. 
You can offer your clients the possibility of paying by credit card or boleto and [you can sell directly on your site](#bookmark_transparent_checkout), [charge through Mercado Pago website](#bookmark_checkout_pro) or through [both checkouts](#bookmark_both_checkouts).

## Setting steps

The **steps to start charging with Mercado Pago** are the following:

1. Create a [seller’s account](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) in Mercado Pago if you do not yet have one.
1. Activate Mercado Pago as a payment method on your store.
1. Set the payment methods.

## Activate Mercado Pago on your store

To **activate your Mercado Pago account in iSET**, follow these steps:

1. Go to “Payment methods” in the section Modules from the admin panel of your store.
1. Search in the payment methods list for Mercado Pago and go to “Setting options”.
1. In the field Status, select the option “Active”.
1. Click on “Close” and then on “Save changes”.
![Payments Connect - iSET](/images/iset/iset_active_modulo_1.gif)

Done! Mercado Pago is now installed on your store.

## Set payment methods

After activating Mercado Pago, you have the option to offer the following payment methods: [Checkout Pro](#bookmark_checkout_pro), [Transparent Checkout](#bookmark_transparent_checkout) or [both checkouts](#bookmark_both_checkouts).

You also have the option to [offer interest free installments](#bookmark_set_interest_free_installments_in_your_mercado_pago_account) and set the [rates and terms](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) of your online sales whenever you want.

### Set payment types

1. Go to “Payment methods” in the section Modules from the admin panel of your store. 
1. Search in the payment methods list for Mercado Pago and go to “Setting options”.
1. Select the payment types that you wish to offer: “Boleto bancario” and/or “Credit card”.
1. Complete in “Brief description/Name of the store" the name that will appear in your client’s invoice so that they can recognize you (maximum 13 characters). 
1. Click on “Close” and then on “Save changes”.
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_methods_2.gif)
<p>&nbsp;</p>

### Checkout Pro

**The buyer will be redirected to Mercado Pago** to make the payment and complete the purchase.

To activate this model, follow these steps:

1. Go to “Payment methods” in the section Modules from the admin panel of your store. 
1. Search in the payment methods list for Mercado Pago and go to “Setting options”.
1. In the section Checkout model, choose the option “Pattern”. 
1. Enter the [e-mail from your Mercado Pago account](https://www.mercadopago[FAKER][URL][DOMAIN]/profile#from-section=menu) in “Registered e-mail in Mercado Pago”.
1. Complete the fields Client ID and Client Secret with the [credentials of your Mercado Pago account](/developers/en/guides/additional-content/your-integrations/credentials).
1. Click on “Close” and then on “Save changes”.
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_checkout_padrao_3.gif)
<p>&nbsp;</p>

### Transparent Checkout

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

### Both checkouts

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

## Installments settings

You can set the maximum or minimum amount of installments and apply surcharges or discounts for the installments on your store.

> WARNING
>
> Important
>
> Installments must be set as automatic to avoid any problems when processing payments. We are going to take the enabled [installments in your Mercado Pago account](#bookmark_set_interest_free_installments_in_your_mercado_pago_account) as appropriate.

1. Go to “Payment methods” in the section Modules from the admin panel of your store.
1. Search in the payment methods list for Mercado Pago and go to “Setting options”.
1. Select in “Product category” the category that applies to your products.
1. Complete the following fields according to the settings of your Mercado Pago account:

    | Field | Description |
    | --- | --- |
    | Sale in installments up to | Select the maximum number of installments you wish to offer |
    | Minimum value of installment R$ | Indicate the minimum value of installments that you wish to offer in Reales |
    | Only orders over R$ | Set if you want to use a minimum value range to accept orders on your store. |
    | Discounts for payments in cash (%) | Enter the discount value for cash payments that you want. |
    | Surcharge/Discount | Apply a surcharge or discount on the order. |

1. Click on “Close” and then on “Save changes”.
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_installments_6.gif)
<p>&nbsp;</p>

## Set interest free installments in your Mercado Pago account

1. Go to [Your business](https://www.mercadopago[FAKER][URL][DOMAIN]/business/) section in your Mercado Pago account.
1. Go to the option “Settings”, navigate to “Offer interest-free installments” and click “Activate”.
1. Choose “How many do you want to offer?” and confirm the changes with the “Activate” button.
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_account_installment_7.gif)
<p>&nbsp;</p>

And that’s it! You are now offering interest-free installments, with the financing cost you have set.

## Information for the orders on your store iSET

To **set the information for the orders on your store**, follow these steps:

1. Go to “Payment methods” in the section Modules from the admin panel of your store.
1. Search in the payment methods list for Mercado Pago and go to “Setting options”.
1. Complete the following fields according to the settings on your store: 

    | Field | Description |
    | --- | --- |
    | Information to the user about the type of payment | Instructions when making the payment. |
    | Information to the user about the type of payment | Instructions shown after payment is complete. |
    | New orders status | Select a status for new orders. |
    | Approved orders status | Select a status for approved orders. |
    | Cancelled orders status | Select a status for cancelled orders. |
    | Use discount campaign | Informs you if you have any discount coupons available from your Mercado Pago account. |

1. Click on “Close” and then on “Save changes”. 
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_informacion_9.gif)
<p>&nbsp;</p>

> WARNING
>
> Important
>
> Currently, it is not possible to use discount campaigns with Mercado Pago.

<!-- -->
> For more information, visit [iSET official website](https://www.iset.com.br/).
