> CLIENT_SIDE
>
> h1
>
> Ocultar título

| - | Brick |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.hideFormTitle |
| Tipo | Boolean |
| Observações | Quando **true**, oculta a linha de título. |

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

| - | Brick |
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
    window.paymentBrickController.getFormData()
        .then(({ paymentType, formData }) => {
            console.log('formData received, creating payment...');
            if (paymentType === 'credit_card' || paymentType === 'debit_card') {
                fetch("/process_payment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })
            }
        })
        .catch((error) => {
            // tratamento de erros ao chamar getFormData()
        });
};
```

> CLIENT_SIDE
>
> h1
>
> Ocultar painel da Conta Mercado Pago

| - | Brick |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.visual.hideRedirectionPanel |
| Tipo | Boolean |
| Observações | Quando **true**, oculta dentro da opção de pagamento com a Conta Mercado Pago, o painel de redirecionamento para o site do Mercado Pago. |

[[[
```Javascript
const settings = {
   ...,
   customization: {
       visual: {
           hideRedirectionPanel: true
       }
   }
}
```
```react-jsx
const customization = {
 visual: {
   hideRedirectionPanel: true
 }
};
```
]]]

> NOTE
>
> Importante
> 
> Caso precise customizar o estilo visual do Brick para além das customizações de **temas e variáveis customizadas**, recomendamos que não utilize as classes e ids CSS que são enviadas com os Bricks como referência, visto que são gerados automaticamente durante o processo de build da aplicação e mudam regularmente. Utilize a herança dos elementos HTML para acessar os elementos que necessitar customizar.