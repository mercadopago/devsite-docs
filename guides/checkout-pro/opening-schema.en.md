# Opening scheme
 
The opening scheme allows you to define how the checkout will open to the user. By default, checkout pro opens in  **Modal** format, that is, in a window within the website itself, without redirecting to an external page to complete the payment.
 
However, it is possible to customize the opening and define the **Redirect** model, in which Checkout Pro opens in a new window redirecting the buyer to the payment screen.
 
To define the **redirect** opening template, insert the HTML code below directly into your project informing the `init_point` of the previously generated preference.
 
[[[
```html
<!doctype html>
<html>
 <head>
   <title>Pay</title>
 </head>
 <body>
   <a href="YOUR_INIT_POINT"> // Enter the preference ID
   <button>
     Pay with Mercado Pago
   </button>
  
</a>
</body>
</html>
```
]]]

> PREV_STEP_CARD_EN
>
> Boleto expiration
>
> Check how to change the default due date for boleto payments. 
>
> [Boleto expiration](/developers/en/docs/checkout-pro/checkout-customization/preferences/expiration-date)

> NEXT_STEP_CARD_EN
>
> Payment button 
>
> Learn how to define and customize the interface displayed to the user, including how to enter the checkout screen. 
>
> [Payment button](/developers/en/docs/checkout-pro/checkout-customization/user-interface/payment-button)