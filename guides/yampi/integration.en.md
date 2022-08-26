# Integration configuration
 
To integrate with Mercado Pago, follow the procedures below.

1. On your Yampi store's Dashboard, access the **Checkout** menu and click on **Pagamento**.
2. On the **payment gateway management** screen, click on the **+ Nova afiliação**  button and select the Mercado Pago gateway.
3. Then, indicate the **payment method name** that will appear to the buyer, for example, "Mercado Pago - Pix".
4. Enter the text that **will identify the payment on the card statement**. This field cannot contain spaces or special characters.
5. Select **Sim** to indicate that transactions will be automatically authorized and captured or **Não** for transactions to be automatically authorized and captured later within 5 days.
6. On the same page, you will find the `Public key` and `Access token` fields, which must be filled in with the [credentials](/developers/en/guides/additional-content/credentials/credentials) of **production** indicated in your [Dashboard](/developers/en/guides/additional-content/dashboard/introduction) of Mercado Pago. If your account is new and the credentials have not been activated previously, Mercado Pago will ask you to [create a new application](/developers/en/guides/additional-content/dashboard/applications).
7. Click **Salvar** to confirm the integration information. To change the information entered, on the **payment gateway management** screen, click on **Editar** next to the Mercado Pago gateway.
8. Once the integration settings have been made, select the payment methods that will be available for use with Mercado Pago. You will be able to select all the ones you want and then edit them or configure them manually after the plugin settings. For more information, see the [Payment configuration](/developers/en/docs/yampi/payment-configuration-cho-api) section.

Once the business settings are done, configure your store's payment experience with Mercado Pago's Checkout Transparente.