## Ocultar botão de pagamento


| Brick | Card Payment Form |
|--- |--- |
| Momento de customização | Ao renderizar brick |
| Propriedade | customization.hidePaymentButton |
| Tipo | Boolean |
| Observações | Quando **true** não mostra o botão de enviar o formulário e passa a ser necessário utilizar a função getCardFormData para obter os dados do formulário (veja exemplo abaixo). |

[[[
```html
<button type="button" onclick="createPayment();">Custom Payment Button</button>
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
