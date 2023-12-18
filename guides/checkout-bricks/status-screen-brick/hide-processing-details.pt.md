> CLIENT_SIDE
>
> h1
>
> Esconder detalhes do processamento

Por padrão, quando for relevante o Brick exibirá detalhes do processamento do pagamento como, por exemplo, informar os dados que foram ingressados incorretamente de um cartão ou outros [resultados da criação de uma cobrança](/developers/pt/docs/checkout-api/response-handling/collection-results). Caso deseje, é possível ocultar esses detalhes através da configuração abaixo.

[[[
```Javascript
const settings = {
 initialization: {
   paymentId: 100, // id de pagamento gerado por Mercado Pago
 },
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
       hideStatusDetails: true
   }
 }
};
```
```react-jsx
const customization = {
 visual: {
   hideStatusDetails: true
 }
};
```
]]]

![status-screen-brick-hide-processing-details](checkout-bricks/status-screen-brick-hide-processing-details-pt.jpg)