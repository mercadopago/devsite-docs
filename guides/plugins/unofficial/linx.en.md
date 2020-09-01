---
 sites_supported:
  - mlb
---

# Linx Commerce

## What is Linx Commerce?

It is a **virtual platform that enables you to receive payments with Mercado Pago**.

You can offer your customers payment by [credit card](#bookmark_set_up_credit_card_data) and [boleto](#bookmark_set_up_boleto_data) in your store.

## Settings Steps

These are the **steps to start charging with Mercado Pago**:

1. Create a [seller account](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) in Mercado Pago if you don't have one yet.
1. Add Mercado Pago as method of payment in your store.
1. Set up methods of payment with Mercado Pago.
1. Set up contract methods of payment.  

## Add Mercado Pago as method of payment

To **add Mercado Pago to your store**, follow these steps:

1. Go to "Methods of payment" in your store administration panel, Settings section. 
1. Enter "Add method of payment".
1. On the Service Vendor list, look for Mercado Pago and click on "Next step".
1. Define a name for Mercado Pago V2 method of payment and select "Active" state.
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_adicione_meio_pagamento-1.gif)
<p>&nbsp;</p>

## Set up methods of payment

Once Mercado Pago is added, you can offer payment by [credit card](#bookmark_set_up_credit_card_data) and [Boleto](#bookmark_set_up_boleto_data).

You can also [offer interest free installments](#bookmark_set_interest_free_installments_in_your_mercado_pago_account) and set up [rates and terms](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) of your online sales whenever you want.

### Set up data for integration

Once you added the method of payment, **set up data for integration with Mercado Pago** like this: 

1. Go to “Integration” tab and fill out Public Key and Access Token Key fields with the relevant [production credentials]([FAKER][CREDENTIALS][URL]) of your Mercado Pago account.
1. Fill out the name to appear on your invoice so that your customer can recognize you.
1. If you want to test your payments, in Test Mode section, select "Yes". Then fill out Public Key and Access Token Key with [test credentials]([FAKER][CREDENTIALS][URL]) of your Mercado Pago account. 
1. In installment section, select "External (Mercado Pago API) to use instalment settings from your Mercado Pago account directly. 
1. Finally, click on "Save".
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_configurando_integracao-2.gif)
<p>&nbsp;</p>

> Find all the information about your credentials in our [frequently asked questions](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/faqs/credentials/).

### Set up credit card data 

To **set up credit card data in your store**, follow these steps:

1. Go to "Methods of payment" in your store administration panel, Settings section. 
1. Look for created method of payment and click on "Edit".
1. Go to "Credit Card" tab, choose the flag you want to set up and select "Active" state. 
1. Fill out the relevant fields, if needed:

    | Fields | Data  |
    | --- | ---|
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

### Set up boleto data

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

## Set interest free installments in your Mercado Pago account

1. Log in your Mercado Libre account and see "Your business".
1. Go to "Settings" option, then to "Offering interest free installments" and click on "Activate".
1. Choose "How many do you want to offer?" and push "Activate" button to confirm changes.
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_parcelamento_conta-5.gif)
<p>&nbsp;</p>

Ready! You are already offering interest free installments with the configured financing cost.

## Set up contract methods of payment

The purpose of the contract is to determine specific settings to be used in your store.

### Create a contract

To **create a contract in your store**, follow these steps: 

1. From Back office in administration panel, go to "Contracts".
1. Click on "Add Contract". 
1. Fill out name for contract being created. 
1. Finally, click on "Save".
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_criando_um_contrato-6.gif)
<p>&nbsp;</p>

## Define contract methods of payment

To **define contract methods of payment** follow these steps: 

1. From Back office in administration panel, go to "Contracts".
1. Look for created contract and click on "Edit"
1. Find payment method section and define the contract option you want to use:
 - **All methods of payments active in platform**. This allows to show all methods of payment enabled in the platform.
 - **Defined below**. Choose methods of payment you want for your contract.
1. Finally, click on "Save".
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_meio_pagamento_contrato-7.gif)
<p>&nbsp;</p>

### Assign contract methods of payment to a channel

To **assign contract methods of payment to a channel** follow these steps: 

1. From Channels in administration panel, go to "Channels".
1. Look for your store channel and click on "Edit".
1. In master contract section, add contract created.
1. Finally, click on "Save".
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_atribuindo_contrato_ao_canal-8.gif)
<p>&nbsp;</p>

<!-- -->
> For more information, go to [Linx Commerce official site](https://docs.linxcommerce.com.br/docs).
