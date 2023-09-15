# Create preferences
 
Preferences are sets of information about a product and/or service that allow you to define the name, payment method and other necessary attributes to obtain the URL to start the payment flow at checkout.
 
> WARNING
>
> Important
>
> Remember that you need to install the Mercado Pago SDK before creating a preference, so make sure that the installation of the Mercado Pago SDKs has already been completed. Check [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/sdks) for instructions.
 
To create a preference via API, use the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) filling in the necessary attributes to execute the request or, if you prefer, check [SDKs](/developers/en/docs/sdks-library/landing) to create preferences using our libraries.
 
When creating the preference you will have access to a field called `id` which will return an identification number for this preference. **This information is mandatory to add Checkout Pro to your website**.