> CLIENT_SIDE
>
> h1
>
> Esconder data da transação

Por padrão, o Brick exibe a data da transação para o usuário, porém, caso deseje, é possível ocultar esse dado através da configuração abaixo.

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
       hideTransactionDate: true
   }
 }
};
```
```react-jsx
const customization = {
 visual: {
   hideTransactionDate: true
 }
};
```
]]]