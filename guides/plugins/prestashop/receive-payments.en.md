# Receiving of payments
 
After performing the integration and testing, your store is ready to go into production.
 
## Activation of production mode
 
To start receiving payments you need to activate Production mode. To do this, follow the procedures below.
 
1. On your store's Administrative Panel, access the **Modules and Services** menu, find the Mercado Pago plugin and click in **configure**.
2. On the plugin management screen, confirm that the production [credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/credentials) are the same as the account that you get money from sales. This information can be viewed on your [Dashboard](https://www.mercadopago.com.br/developers/panel).
3. Then click **yes** to activate Production mode.
 
> NOTE
>
> Important
>
> Check the [requirements to go into production](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/go-live-requirements) if you have any questions with the process.
 
Ready! The Mercado Pago plugin is ready to receive payments online.
 
## Sales Processing
 
With all the steps completed, your customers will be able to make purchases in your store. When performing a transaction, it is common for some messages to return with specific information about the purchase, as every sale generates a payment status that shows the status of the sale including confirmation, pending or denial of payment and other important information about the transaction.
 
For more information, access the [Activities](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) section of your Mercado Pago account.
 
![Payment status](/images/prestashop/status_en.png)

## Reasons for refusals 

Regarding the **approval of payments** in your store, three main reasons can directly impact these results.  

Below, we detail the factors that influence a payment refusal.

| Reason | Situation | How to avoid |
|---|---|---|
| Buyer's mistakes | Errors in filling in address, CPF or card details. | Checkout with clear information in the step-by-step purchase. |
| Banking refusals | Cards with an expiration date, lack of limit, insufficient funds, or disabled for online purchases. | Offer alternatives to other methods and/or payment terms. |
| Fraud prevention | Mercado Pago's anti-fraud system protects your business against malicious attacks that can generate losses.| This type of refusal is beneficial to your store. |

For more information on the reasons mentioned above, visit the articles:

* [Payment refusals](https://conteudo.mercadopago.com.br/entenda-como-funcionam-as-recusas-de-aprovacao-de-pagamentos-no-mercado-pago) 
* [How to handle payment denials](https://conteudo.mercadopago.com.br/como-lidar-com-as-recusas-de-pagamento-do-cartao-de-credito-no-seu-e-commerce)

> LEFT_BUTTON_RECOMMENDED_EN
>
> FAQ
>
> Check the main doubts about the integration.
>
> [FAQ](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/prestashop/faq)