# Integration configuration

With the Mercado Pago Plugin installed, it will be necessary to configure it to be able to charge using our solution.

----[mlb]----
The basic configuration of the plugin is done in 3 steps: **Mercado Pago integration**, **Store Name**, **Category and Integrator ID**, and **Integration API**, followed by **Payment configuration** (Checkout Transparente and Checkout Pro).

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
The basic configuration of the plugin is done in 3 steps: **Mercado Pago integration**, **Store Name**, **Category and Integrator ID**, and **Integration API**, followed by **Payment configuration** (Checkout Transparente and Checkout Pro).

------------
Follow the steps described in this documentation to configure the Mercado Pago plugin in Adobe Commerce (Magento) store.

> NOTE
>
> Important
>
> To make real sales or test the store, you need to have production and/or test credentials. If you haven't created your credentials yet, access the [Credentials](/developers/en/guides/additional-content/credentials/credentials) documentation and learn how to create them before moving on to the next steps.


## Mercado Pago integration

1. In the store Control Panel, access **Stores > Configuration > Sales > Payment Methods**.
2. Under **Other Payment Methods**, click **Configure** on the Mercado Pago plugin.
3. Click **Basic Settings > Mercado Pago Integration**.
4. Under **Checkout operation mode**, select **Production** if you want to configure for receiving real sales, or **Sandbox** if you want to perform tests before going to production.
5. If you have selected **Production**, enter your production _Public key_ and _Access Token_. If you have selected **Sandbox**, enter your Sandbox _Public Key_ and _Access Token_.
6. Click **Save Configuration** at the top right corner of the screen.

After completing these steps, the basic information for the integration with the plugin will be concluded. Follow the next steps to continue the integration configuration process.


## Store Name, Category and Integrator ID

In this configuration step, it is necessary to enter store information and, optionally, the `integrator_id`, which allows monitoring integrations performed by the integrator.

1. Click **Store Name, Category and Integrator ID** and in the **Store Name** field enter the name that should be displayed on the buyer's invoice.
2. Under **Category of your store**, set the category of the products that are sold, for example, "Cell Phones and Accessories".
3. Under **Integrator ID**, enter your _integrator_id_ so that it is possible to register how many sales were processed with your account. If you don't have one, leave the field blank.

![Store Name, Category and Integrator ID](/images/adobe-commerce/nome_cat_id.png)


## API Integration

In the **API Integration** step, it will be possible to define whether or not you want to receive refund notification. By selecting "Yes", your store will receive the refund notification by processing a "Credit Note".

![API Integration](/images/adobe-commerce/api_integracao.png)


## Developer support

In this step, it is possible to define the transaction log registration behavior. To do this, follow the steps below according to the description of each option.

1. Under **Debug**, select "Yes" or "No". This field will allow registering the store's communications with Mercado Pago to offer even better support (do not use debug mode with the store in production mode).
2. Under **Rewrite Notification URL**, it is possible to enter an alternative URL to receive the refund notification. This function is exclusive to developers.

![Support](/images/adobe-commerce/suporte_para_devs.png)

----[mlb]----
After completing all the steps, the integration with the Mercado Pago plugin will be finalized and ready for payment configuration (Checkout Pro and Checkout Transparente).

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
After completing all the steps, the integration with the Mercado Pago plugin will be finalized and ready for payment configuration (Checkout Pro and Checkout API).

------------