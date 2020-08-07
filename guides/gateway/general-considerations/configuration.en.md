---
sites_supported:
  - mla
  - mco
  - global
indexable: false
---

# Mercado Pago Gateway: Configuration

> NOTE
>
> Unfortunately Mercado Pago's Gateway Configuration Section is not currently translated to english. Nonetheless this guide will be helpful to you to understand the configuration flow.

</br>

> WARNING
>
> Commercial contact required
>
> This product is only available through prior contact with one of our executives.

## Introduction

From Mercado Pago's backoffice you are able to configure both your merchant IDs and commercial agreements with acquirers or issuers in case of promotions.

To do this, please visit the _Configuración_ section:

![Configuration](/images/gateway/configuration.png)

## Merchant IDs

In the _Configuración &rarr; Nº de comercio_ section you will se the list of the Merchant IDs created. From this list you can create more or administrate the ones already created.

![Merchant IDs](/images/gateway/merchant_accounts.png)

### Creating a Merchant ID

When pressing the _Agregar Nº comercio_ button you will see the following section:

![Merchant IDs](/images/gateway/merchant_accounts_new.png)

Fill in the necessary information and press the _Continuar_ button.

![Merchant ID created](/images/gateway/merchant_accounts_congrats.png)

Done! Your merchant ID was created

> By default, each Merchant ID created is deactive. You need to activate it later when you are ready to process payments.

**What is the "ID externo" (External ID) and how can I use it?**

This field is related to the technical integration. Its purpose is to quickly identify a Merchant ID.

> If you don't know what to put here you can leave it blank. Your development team will address whether its needed it or not.

### Editing a Merchant ID

By pressing on a list item you can go to the edition view:

![Merchant ID edition](/images/gateway/merchant_accounts_edit.png)

Here you will be able to edit any information you need.

### Deleting a Merchant ID

Is not possible to delete a Merchant ID. Only deactivate it.

## Commercial Agreements (payment methods)

The commercial agreements can be managed from the _Configuración &rarr; Medios de pago_ section. You will see there is a tab for Gateway and another for Aggregator.

### Custom agreements (Gateway Model)

In this section you will be able to manage your payment methods related to your commercial agreements

![Gateway payment methods](/images/gateway/payment_methods_gateway.png)

#### Creating a payment method

By pressing the _Agregar medio de pago_ button you will reach the following:

![New Gateway payment method](/images/gateway/payment_methods_gateway_new.png)

Continue by pressing the _Continuar_ button:

![New Gateway payment method 2](/images/gateway/payment_methods_gateway_new_2.png)

Here you need to select which Merchant IDs are valid for the payment method just created.

![New Gateway payment method 3](/images/gateway/payment_methods_gateway_new_3.png)

Done! Your payment method was created

> By default, each payment method created is available on the test environment (Sandbox). You need to activate it later when you are ready to process payments in production.

#### Editing a payment method

By pressing on a list item of the payment methods you can go into the edit view. There you will be able to edit any information you want.

#### Deleting a payment method

Is not possible to delete a payment method. Only deactivate it.

### Mercado Pago's agreements (Aggregator Model)

In this section you will be able to manage Mercado Pago's payment methods

![Aggregator payment methods](/images/gateway/payment_methods_aggregator.png)

### Deactivating a payment method

By pressing on a list item of the payment methods you can go into the edit view:

![Edit aggregator payment method](/images/gateway/payment_methods_aggregator_edit.png)

Deactivate the agreements you don't want to offer.

> If you want to deactivate an entire payment method deselect all the items in the list.

### Do you need help?

Get in touch with your sales representative.

### Next steps


* [Integrate the Mercado Pago Checkout](https://www.mercadopago.com.ar/developers/en/guides/gateway/web-checkout/receiving-payments) for the Gateway Model
* [Integrate the Checkout API](https://www.mercadopago.com.ar/developers/en/guides/gateway/api/receiving-payments) for the Gateway Model
