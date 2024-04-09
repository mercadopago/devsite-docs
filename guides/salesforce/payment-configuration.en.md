# Configure payment methods

----[mlb]----
To start receiving payments with Checkout Pro, Checkout Transparente and Pix, follow the steps outlined below.

------------
----[mlm, mla]----
To start receiving payments with Checkout Pro and Checkout Transparente, follow the steps outlined below.

------------
----[mlu, mpe, mco, mlc]----
To start receiving payments with Checkout Pro and Checkout Transparente, follow the outlined steps below.

------------
## Activate payment methods

Here's how to activate each payment method in your Salesforce Commerce Cloud store:

* [Configure Checkout Pro](/developers/en/docs/salesforce-commerce-cloud/payments-configuration/checkout-pro)
* [Configure Checkout Transparente](/developers/en/docs/salesforce-commerce-cloud/payments-configuration/checkout-api)
----[mlb]----
* [Configure Pix payments](/developers/en/docs/salesforce-commerce-cloud/payments-configuration/checkout-api/pix)
* [Configure installments without a card](/developers/en/docs/salesforce-commerce-cloud/payments-configuration/checkout-api/credits)
------------
----[mla, mlm]----
* [Up to 12 installments without card with Mercado Pago](/developers/en/docs/salesforce-commerce-cloud/payments-configuration/checkout-api/credits)
------------

## Choose the location of the means of payment

By default, the Mercado Pago cartridge will show the means of payment in a certain order.

----[mlb]----
![payment_methods_v2](salesforce/payment_methods_v2.png)

------------

If you want to change this order, follow these steps.

1. Within your Salesforce Commerce Cloud store, go to the **Merchant Tools** menu and click the **Payment Methods** option found within the Ordering group of options. You can also find the option using the menu search engine.
2. Within the box, look for the **Sort Order** column. In this column, assign a numerical order to the payment methods of your store to define the order in which you want to display them.