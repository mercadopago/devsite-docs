# Test payments
 
The Mercado Pago plugin comes with the **Sandbox test environment** active by default. In this environment you'll be able to simulate in-store payments and see if everything is working correctly before you start receiving real payments from your customers. To perform the test, follow the steps below.
 
1. On the Admin Panel of your Prestashop store, access the Modules and Services menu, locate the Mercado Pago plugin and click on **configure**.
2. On the plugin management screen, confirm that the test [credentials](/developers/en/guides/additional-content/credentials/credentials) are properly filled in accordingly with the information available on its [Dashboard](/developers/en/guides/additional-content/dashboard/introduction).
3. Then scroll down to the **Test Your Store** section and click on **I want to test my sales**.  
4. On your PrestaShop store home page, select a product and click to add to your cart.
5. With the product selected, complete the order.
6. Fill in with personal information, indicate a shipping address and select a shipping method. Remember that all this information is just for testing.

Once the initial purchase process is complete, see below how to test the integration according to the type of checkout selected to receive payments.

## Checkout Pro

1. Select the option **I want to pay with Mercado Pago at no additional cost**.
2. Click on **order with mandatory payment** to be redirected to the Mercado Pago payment environment.
3. On the checkout screen, choose to pay with a new credit card and use the [test cards](/developers/en/guides/additional-content/testing/test-cards) to make the payment. It is important not to log in to the Mercado Pago account or try to pay with cards for personal use.
3. Add the indicated test card information (card number, CVV and expiration date).
4. At the end of the purchase, you will be able to view, within Mercado Pago, the proof that the purchase was made and you will be redirected to the store again.

## Checkout API

1. Select the option **I want to pay by credit card**.
2. Choose to pay with a new credit card and use the [test cards](/developers/en/guides/additional-content/testing/test-cards) to make the payment. It is important not to pay with cards for personal use.
3. Add the indicated test card information (card number, CVV and expiration date).
4. Click on **order with payment required**.
5. At the end of the purchase, it will be possible to see that the purchase has been approved.

----[mlb]---- 
> WARNING
>
> Attention
>
> When finalizing the test purchase with Checkout Pro, in the PrestaShop Admin Panel it will not be possible to view the purchase as approved because the process takes place within the Mercado Pago environment and not in the store environment. With testing done with Checkout Transparente you will be able to view the order approval.<br>
> </br> <br/>
> In addition, in both checkouts this information about the approved payment will not be included in the Mercado Pago account history because it only contains real expenses (made in production).
------------

----[mla, mlm, mpe, mco, mlu, mlc]---- 
> WARNING
>
> Attention
>
> When finalizing the test purchase with Checkout Pro, in the PrestaShop Admin Panel it will not be possible to view the purchase as approved because the process takes place within the Mercado Pago environment and not in the store environment. With testing done with Checkout API you will be able to view the order approval.<br>
> </br> <br/>
> In addition, in both checkouts this information about the approved payment will not be included in the Mercado Pago account history because it only contains real expenses (made in production).
------------