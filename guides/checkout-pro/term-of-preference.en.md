# Term of preference
 
Term is the validity period defined for a given payment preference. When defining the validity of the preference, you choose a date for it to start to be valid and the expiration date, in this way, when the chosen period expires, the preference will lose its validity and cannot be used.
 
1. Send a POST with the parameters `expires`, `expiration_date_from` and `expiration_date_to` to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).
2. In "expires", enter `true`.
3. In "expiration_date_from", enter the start date and time. The value must follow the ISO 8601 format: yyyy-MM-dd'T'HH:mm:sszas.
4. In "expiration_date_to", enter the expiration date and time. The value must follow the ISO 8601 format: yyyy-MM-dd'T'HH:mm:sszas
5. Execute the request.

> PREV_STEP_CARD_EN
>
> Add checkout
>
> Check how to install the Mercado Pago frontend SDK to your project and add the Checkout Pro button. 
>
> [Add checkout](/developers/en/docs/checkout-pro/integration-configuration/add-checkout)

> NEXT_STEP_CARD_EN
>
> Payment methods  
>
> Learn how to customize the Checkout Pro integration and determine which payment methods will be accepted. 
>
> [Payment methods](/developers/en/docs/checkout-pro/checkout-customization/preferences/payment-methods)