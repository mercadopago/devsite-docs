# Create preferences
 
Preferences are sets of information about a product and/or service that allow you to define the name, payment method and other necessary attributes to obtain the URL to start the payment flow at checkout.
 
> WARNING
>
> Important
>
> Remember that you need to install the Mercado Pago SDK before creating a preference, so make sure that the installation of the Mercado Pago SDKs has already been completed. Check [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/sdks) for instructions.
 
To create a preference via API, use the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) filling in the necessary attributes to execute the request or, if you prefer, check [SDKs](/developers/en/docs/sdks-library/landing) to create preferences using our libraries.
 
When creating the preference you will have access to a field called `id` which will return an identification number for this preference. **This information is mandatory to add Checkout Pro to your website**.

> PREV_STEP_CARD_EN
>
> Prerequisites  
>
> Learn about the requirements to integrate Checkout Pro.
>
> [Prerequisites](/developers/en/docs/checkout-pro/requirements)

> NEXT_STEP_CARD_EN
>
> Add checkout
>
> Check how to install the Mercado Pago frontend SDK to your project and add the Checkout Pro button. 
>
> [Add checkout](/developers/en/docs/checkout-pro/integration-configuration/add-checkout)