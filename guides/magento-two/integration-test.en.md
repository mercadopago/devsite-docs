# Test payments

The Mercado Pago module comes with the **Sandbox environment** active by default. In this environment you can simulate in-store payments and see if everything is working correctly before you start receiving real payments from your customers. To perform the test, follow the steps below.
 
1. Go to the **Stores > Configuration > Sales > Payment Methods** menu.
2. In the **Merchant Country** field, select the country of operation for your store.
3. Next, access the **Mercado Pago > Credentials** section to enable the payment methods available in the store's country of origin.
4. On the page in question, you will find the **Public key** and **Access token** fields, which you must fill in with the [credentials](/developers/en/guides/additional-content/credentials/credentials) of **test** indicated in your [Dashboard](/developers/en/guides/additional-content/dashboard/introduction).
5. After setting your credentials, click the **Save Config** button in the upper right corner. It is important that you save your credentials before proceeding as this will enable the payment methods available in your country.
6. Once the settings have been made, go to your Magento store homepage, select a product and click **Add to Cart**.
7. With the product in the cart, click on **Proceed to Checkout**.
8. Fill in your personal information, indicate a delivery address and select a shipping method. The registration of information is mandatory, but it is important to note that all this information is for the test only.

Once the initial purchase process is complete, see below how to test the integration according to the type of checkout selected to receive payments.

## Checkout Pro

1. Select the option **I want to pay with Mercado Pago at no additional cost**.
2. Click on **order with mandatory payment** to be redirected to the Mercado Pago payment environment.
3. On the checkout screen, choose to pay with a new credit card and use the [test cards](/developers/en/guides/additional-content/testing/test-cards) to make the payment. It is important not to log in to the Mercado Pago account or try to pay with cards for personal use.
3. Add the indicated test card information (card number, CVV and expiration date).
4. At the end of the purchase, you will be able to view, within Mercado Pago, the proof that the purchase was made and you will be redirected to the store again.

----[mlb]----
## Checkout Transparente
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
## Checkout API
------------

1. Select the option **Credit and Debit Card - Mercado Pago**.
2. Choose to pay with a new credit card and use the [test cards](/developers/en/guides/additional-content/testing/test-cards) to make the payment. It is important not to pay with cards for personal use.
3. Add the indicated test card information (card number, CVV and expiration date).
4. At the end of the purchase, it will be possible to see that the purchase has been approved.

> WARNING
>
> Important
>
> When finalizing the test purchase with Checkout Pro, in the Magento 2 Administrative Panel, it will not be possible to view the purchase as approved, the order is automatically generated, but it is not listed as paid because the process took place within the Mercado Pago environment and not in the from the store.
> </br> <br/>
> Already with test purchase done with Checkout API, you will be able to view the order approval. </br>
> </br> <br/>
> It is also important to note that, in both checkouts, this information about the approved payment will not be included in the Mercado Pago account history because it only contains actual expenses (made in production).

> NEXT_STEP_CARD_EN
>
> Configure payments with Checkout Pro
>
> Learn how to set up Checkout Pro to receive payments from your store.
>
> [Configure payments with Checkout Pro](/developers/en/docs/magento-two/payment-configuration/checkout-pro)

> NEXT_STEP_CARD_EN
>
> Receive payments
> 
> Learn how to enable the store to process real sales.
>
> [Receive payments](/developers/en/docs/magento-two/sales-processing/go-to-production)