## Hide payment button

| Brick  | Card Payment Form  |
| --- | --- |
| Customization moment  | When rendering the brick  |
| Property  | customization.hidePaymentButton  |
| Type  | Boolean  |
| Comments  | When true, the form submit button is not displayed and it becomes necessary to use the getCardFormData function to get the form data (see example below). |

[[[
```html
 <br><br> <button type="button" onclick="createPayment();">Custom Payment Button</button>
<script>
   function createPayment(){
       cardPaymentBrick.getCardFormData()
       .then(cardFormData: cardFormData) => {
           console.log('cardFormData received, creating payment...');
           fetch("/process_payment", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify(cardPaymentData),
           });
       }
       .catch(error: string) => {
               console.warn('error getting data', error)
       }
   }
</script> 
```
]]]

