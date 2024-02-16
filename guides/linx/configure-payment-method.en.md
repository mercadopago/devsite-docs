---
 sites_supported:
  - mlb
---

# Set up payment methods

Once Mercado Pago is added, you can offer payment by [credit card](#bookmark_set_up_credit_card_data) and [Boleto](#bookmark_set_up_boleto_data).

You can also [offer interest free installments](#bookmark_set_interest_free_installments_in_your_mercado_pago_account) and set up [rates and terms](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) of your online sales whenever you want.

## Set up data for integration

Once you added the method of payment, **set up data for integration with Mercado Pago** like this: 

1. Go to “Integration” tab and fill out Public Key and Access Token Key fields with the relevant production [credentials](/developers/en/guides/additional-content/your-integrations/credentials) of your Mercado Pago account.
1. Fill out the name to appear on your invoice so that your customer can recognize you.
1. If you want to test your payments, in Test Mode section, select "Yes". Then fill out Public Key and Access Token Key with test [credentials](/developers/en/guides/additional-content/your-integrations/credentials) of your Mercado Pago account. 
1. In installment section, select "External (Mercado Pago API) to use instalment settings from your Mercado Pago account directly. 
1. Finally, click on "Save".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_configurando_integracao-2.gif)
<p>&nbsp;</p>

## Set up credit card data 

To **set up credit card data in your store**, follow these steps:

1. Go to "Methods of payment" in your store administration panel, Settings section. 
1. Look for created method of payment and click on "Edit".
1. Go to "Credit Card" tab, choose the flag you want to set up and select "Active" state. 
1. Fill out the relevant fields, if needed:

    | Fields | Data |
    | --- | --- |
    | Interest percentage | Fill out interest percentage you want to add. If you don't want to add any, leave 0.00. |
    | Type of interest | Issuer - Interest included in total order.<br> Issuer - Interest accrued by issuer.<br> Seller -Interest included in total order. |
    | Total number of instalments | Enter total number of instalments you want to offer per sale. |
    | Total number of interest free installments | Enter total number of interest free installments you want to offer per sale. |
    | Minimum instalment | Minimum instalment price available per purchase. |
    | Integration ID | Add code for ERP identification. |
    | Order | Set up order of flags to finalize purchase. |
    | Road picture | Fill out road to get card flags picture. |

1. Click on "Save".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_configurando_cartao-3.gif)
<p>&nbsp;</p>

> WARNING
>
> Important
>
> If you use external instalment settings, take into account that instalments made in the platform will not be taken.<br>
> External instalments will not be shown on lists or product details.<br>

## Set up boleto data

To **set up boleto data in your store**, follow these steps: 

1. Go to "Methods of payment" in your store administration panel, Settings section. 
1. Look for created method of payment and click on "Edit".
1. Go to "Boleto" tab and select "Active" mode. 
1. Fill out integration ID field with information to be identified in your ERP. 
1. Enter order to show boleto option in your store. 
1. Finally, click on "Save".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_configurando_boleto-4.gif)
<p>&nbsp;</p>
