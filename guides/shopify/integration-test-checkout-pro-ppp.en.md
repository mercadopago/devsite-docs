# Make a test

The test purchases ensure that payments are processed correctly before allowing actual sales. Follow the steps below to make a test purchase:

1. Go to the store's home page and **select a product to purchase**.
2. Click on **Buy**, and continue with your cart.
3. Enter a valid zip code according to the country where the store operates, to simulate the shipping. Click on **Continue**.
4. Complete the requested fields, and select **Mercado Pago as a payment method**.
5. On the checkout screen, choose to pay with a new credit card and use the [test cards](/developers/en/docs/shopify/test-cards) to make the payment. **Important**: don't log into your Mercado Pago account or try to make the payment with cards for personal use.
6. Enter the test card information provided, and click on **Pay**.
7. After the checkout, you will see a purchase confirmation with Mercado Pago, and you will be redirected back to the store.

> WARNING
>
> Important
>
> When completing the purchase test with Checkout Pro, it will not appear as approved in the Shopify Admin Panel as the process was performed within the Mercado Pago environment and not in the store environment. That is, the order will be generated automatically, but it will not appear as paid. Furthermore, the approved payment information will not appear in the Mercado Pago account history as it only contains actual expenses, made in production.

> PREV_STEP_CARD_EN
>
> Configuration
>
> Learn how to configure Checkout Pro in your Shopify store.
>
> [Configuration](/developers/en/docs/shopify/checkout-pro-ppp/configuration)

