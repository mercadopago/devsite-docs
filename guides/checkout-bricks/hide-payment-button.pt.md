> CLIENT_SIDE
>
> h1
>
> Ocultar botão de pagamento

| Brick | Card Payment Form |
|--- |--- |
| Momento de customização | Ao renderizar brick |
| Propriedade | customization.visual.hidePaymentButton |
| Tipo | Boolean |
| Observações | Quando **true** não mostra o botão de enviar o formulário e passa a ser necessário utilizar a função getCardFormData para obter os dados do formulário (veja exemplo abaixo). |

```javascript
const settings = {
    ...,
    callbacks: {
        onReady: () => {
            // callback chamado quando o Brick estiver pronto
        },
        onError: (error) => { 
            // callback chamado para todos os casos de erro do Brick
        },
    },
    customization: {
        visual: {
            hidePaymentButton: true
        }
    }
}
```

```html
<button type="button" onclick="createPayment();">Custom Payment Button</button>
```

```javascript
function createPayment(){
    window.cardPaymentBrickController.getFormData()
        .then((cardFormData) => {
            console.log('cardFormData received, creating payment...');
            fetch("/process_payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData),
            })
        })
        .catch((error) => {
            // tratamento de erros ao chamar getFormData()
        });
};
```

> PREV_STEP_CARD_PT
>
> Configurar quantidade máxima e mínima de parcelas 
>
> Caso deseje, saiba como configurar quantidade máxima e mínima de parcelas aceitas no Card Payment Brick.
>
> [Configurar quantidade máxima e mínima de parcelas](/developers/pt/docs/checkout-bricks/additional-customization/configure-installments)

> NEXT_STEP_CARD_PT
>
> Ocultar título e bandeiras 
>
> Caso deseje, veja como ocultar a linha de título e as bandeiras aceitas no Card Payment Brick.
>
> [Ocultar título e bandeiras](/developers/pt/docs/checkout-bricks/additional-customization/hide-title-and-flags)