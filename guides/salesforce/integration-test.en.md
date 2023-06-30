# Test the integration

The test purchases ensure that payments are processed correctly before allowing actual sales. To test your store, you'll need to use the Salesforce Commerce Cloud **Sandbox environment**.

> WARNING
>
> Important
>
> Place test orders using a fictitious email ending in **@testuser.com**.

Find out how to test the different types of payment below.

## Checkout Pro

To run a test, follow these steps:

1. Add a product to your store cart.
1. Click the "buy" button.
1. Continue shopping as a guest user and fill out the shipping information. Then click "Next: Payment".
1. On the payment page, select the **Mercado Pago** option.
1. Complete the transaction on the Mecado Pago page using one of the available payment methods. If you choose to pay by credit card, remember to use [test cards](/developers/en/docs/salesforce-commerce-cloud/additional-content/your-integrations/test/cards) to make the payment. **Never use your personal cards**.
1. Click the **Pay** button.
1. If the test was successful, it will show you the Mercado Pago purchase success screen.

## Credit card purchases

1. Add a product to your store cart.
1. Click the "buy" button.
1. Continue shopping as a guest user and fill out the shipping information. Then click "Next: Payment".
1. On the payment page, select the **Credit Card** option.
1. Choose to pay with a new credit card and use the [test cards](/developers/en/docs/salesforce-commerce-cloud/additional-content/your-integrations/test/cards) to make the payment. **It is important not to pay with cards for personal use**.
1. Add the information of the indicated test card (card number, CVV and expiration date).
1. Click the **Pay** button.

At checkout, check with your store that the purchase is listed as "Approved."