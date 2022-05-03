# Redirection
 
At the end of the payment process, it is possible to redirect the buyer to another environment of the site through the `back_urls` attribute. This attribute allows you to define the URLs where the buyer should be redirected when completing the payment.
 
To define the `back_urls`, send a POST with the `back_urls` attribute informing the URLs where the buyer should be directed when finalizing the payment to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) or, if you prefer, see [SDKs](/developers/en/docs/sdks-library/landing) to integrate using our libraries.

> PREV_STEP_CARD_EN
>
> Payment button 
>
> Learn how to define and customize the interface displayed to the user, including how to enter the checkout screen. 
>
> [Payment button](/developers/en/docs/checkout-pro/checkout-customization/user-interface/payment-button)

> NEXT_STEP_CARD_EN
>
> Color style  
>
> Learn how to customize the color style of your interface elements.
>
> [Color style](/developers/en/docs/checkout-pro/checkout-customization/user-interface/color-style)