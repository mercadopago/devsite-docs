# Add checkout
 
Once you have created the preference in your backend, you will need to install the Mercado Pago frontend SDK to your project to add the Checkout Pro button.
 
Installation is done in two steps: adding the Mercado Pago SDK to the project with your configured credentials, and starting the checkout from the previously generated preference ID.
 
1. To include the Mercado Pago.js SDK V2, add the code below to the project's HTML.
 
[[[
```html
<html>
<head>
   <title>Pay Redirect Version</title>
</head>
 
<body>
   <div class="cho-container"></div>
   //Add the MercadoPago SDK.js/v2
       <script src="https://sdk.mercadopago.com/js/v2"></script>
```
]]]
      
2. When you finish adding the Mercado Pago.js SDK V2, configure the SDK credentials and initialize your checkout with the ID of the previously created preference and the identifier of the element where the payment button should be displayed, as shown in the example below.
 
[[[
```html
<script>
           // Add your Mercado Pago account credentials along with the SDK
           const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
               locale: 'pt-BR'
           });
           const checkout = mp.checkout({
              preference: {
                  id: 'YOUR_PREFERENCE_ID' // Enter the preference ID
              },
              render: {
                  container: '.cho-container', // CSS class to render the payment button
                  label: 'Pagar', // Change payment button text (optional)
               }
           });
   </script>       
  
</body>
</html>
```
]]]
 
In the example above, a payment button will be rendered and will be responsible for opening Checkout Pro. If you want to customize the way the checkout opens, see the Opening scheme section
 
> WARNING
>
> Important
>
> To test the checkout, you must access it through another browser or log out of your Mercado Pago account. This is because being logged into the same account responsible for creating the payment form makes it impossible to test the payment flow and guarantee its operation.

> PREV_STEP_CARD_EN
>
> Create preferences
>
> Check how to create information sets about a product and/or service.
>
> [Create preferences](/developers/es/docs/checkout-pro/create-preference)

> NEXT_STEP_CARD_EN
>
> Term of preference 
>
> Learn how to set the validity period for a given payment preference.
>
> [Term of preference](/developers/en/docs/checkout-pro/checkout-customization/preferences/term-of-preference)