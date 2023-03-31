> CLIENT_SIDE
>
> h1
>
> Ocultar título e bandeiras

| Brick | Card Payment Form |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.hideFormTitle |
| Tipo | Boolean |
| Observações | Quando **true**, oculta a linha de título e as bandeiras aceitas. |

[[[
```Javascript
const settings = {
   ...,
   customization: {
       visual: {
           hideFormTitle: true
       }
   }
}
```
```react-jsx
const customization = {
 visual: {
   hideFormTitle: true
 }
};
```
]]]

> CLIENT_SIDE
>
> h1
>
> Ocultar botão de pagamento

| Brick | Card Payment Form |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.visual.hidePaymentButton |
| Tipo | Boolean |
| Observações | Quando **true** não mostra o botão de enviar o formulário e passa a ser necessário utilizar a função getFormData para obter os dados do formulário (veja exemplo abaixo). |

[[[
```Javascript
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
```react-jsx
const customization = {
 visual: {
   hidePaymentButton: true
 }
};
```
]]]

```html
<button type="button" onclick="createPayment();">Custom Payment Button</button>
```

```Javascript
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

> NOTE
>
> Importante
> 
> Caso precise customizar o estilo visual do Brick para além das customizações de **temas e variáveis customizadas**, recomendamos que não utilize as classes e ids CSS que são enviadas com os Bricks como referência, visto que são gerados automaticamente durante o processo de build da aplicação e mudam regularmente. Utilize a herança dos elementos HTML para acessar os elementos que necessitar customizar.