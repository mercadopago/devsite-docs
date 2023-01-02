# Payment Button
 
After integrating Checkout Pro it is possible to define and customize the interface displayed to the user, including the checkout screen input mode. 
 
By default, **Checkout Pro opens with a payment button directing the user to complete the purchase**, however, it is also possible to customize a button that allows opening the checkout from any desired element on the website, without necessarily showing the payment button to the buyer.
 
In addition, Checkout Pro can also be opened automatically, without any action on the part of the buyer.
 
## Opening with custom button
 
Opening with a custom button is done through the `open` method, which allows opening the Checkout from any element of the website, without necessarily showing the payment button to the buyer.
 
To configure opening with a custom button, insert the HTML below directly into your project.
 
[[[
```html
<!DOCTYPE html>
<html>
<head>
   <script src="https://sdk.mercadopago.com/js/v2"></script>
</head>
<body>
   <script>
   // Add SDK credentials
       const mp = new MercadoPago('PUBLIC_KEY', {
           locale: 'pt-BR'
       });
       const checkout = mp.checkout({
         preference: {
             id: 'YOUR_PREFERENCE_ID' // Enter the preference ID
         }
       });
   </script>       
   <div class="cho-container">
     <li>
     <label for="radio">Button open-radio: </label>
     <input type="radio" id="checkout-open-radio" onclick="checkout.open()">
      </li>
 
 
   </div>
</body>
</html>
```
]]]
 
## Automatic opening
 
Automatic opening is done via the `autoOpen` parameter in the checkout launch options. This parameter will allow buyers to interact with a button or any other element to open the checkout.
 
To configure automatic opening, insert the code below directly into your project.
 
[[[
```html
<!DOCTYPE html>
<html>
<head>
   <script src="https://sdk.mercadopago.com/js/v2"></script>
</head>
<body>
   <script>
   // Add SDK credentials
       const mp = new MercadoPago('PUBLIC_KEY', {
           locale: 'pt-BR'
       });
       const checkout = mp.checkout({
         preference: {
             id: 'YOUR_PREFERENCE_ID' // Enter the preference ID
         },
         autoOpen: true, // Enable automatic opening of Checkout Pro
       });
   </script>       
   <div class="cho-container"></div>
</body>
</html>
```
]]]
