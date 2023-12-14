# Mercado Crédito

It is the financing option from Mercado Pago that offers the possibility to pay in installments without needing a credit card.

With this line of credit, administered by Mercado Pago, the payment is credited in full to the seller's account, while the customer can choose to pay in up to 12 fixed monthly installments, no card needed. The user just has to enter their Mercado Pago account (or create one), determine their available limit, and choose how many installments they want to pay in.
 
**Mercado Credits** is currently offered in our [Checkout Pro](/developers/en/docs/checkout-pro/landing) (**Checkout Mercado Pago**), and now it is also possible to access directly from the store checkout. If you haven't set up Checkout Pro yet, you must access the [Integration configuration > Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro) section.

If you want to **show Mercado Credits in your store's checkout**, follow the steps below.

1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.
2. In the store's administrative panel, click on **Settings**.
3. Once there, select the **Payments** option. 
4. In "Additional payment methods", click on the **Add payment methods** option.
5. Go to the **Search by provider** tab and look for the new app with the name "Mercado Crédito".
6. Once you have found it, select it and click **Activate** and then **Connect**.
7. Select **Install App** and then **Manage**.
8. Put your **production credentials** (`public key` and `access token`) in the fields that request it and click **Save**. Remember to keep your [credentials](/developers/en/docs/shopify/additional-content/your-integrations/credentials) handy.
9. To finish the installation, select **Activate Mercado Crédito**.

> WARNING
>
> Attention
>
> It is important to note that in the Mercado Crédito plugin **there is no test flow**, so it is not necessary to select the _checkbox_ "activate test mode".
> <br/><br/>
> In case you renew your credentials, remember to replace them in your integration.

Ready! The financing method is enabled in your store.