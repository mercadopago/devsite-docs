> CLIENT_SIDE
>
> h1
>
> Ocultar fecha de transacción

Por defecto, el Brick muestra la fecha de la transacción al usuario, sin embargo, si lo desea, es posible ocultar estos datos a través de la configuración a continuación.

[[[
```Javascript
const settings = {
 initialization: {
   paymentId: 100, // id de pago generado por Mercado Pago
 },
 callbacks: {
   onReady: () => {
     // callback llamado cuando Brick está listo
   },
   onError: (error) => {
     // callback llamado para todos los casos de error de Brick
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