> CLIENT_SIDE
>
> h1
>
> Ocultar detalles de procesamiento

De manera predeterminada, cuando sea relevante, Brick mostrará detalles del procesamiento de pagos, por ejemplo, informando datos que se ingresaron incorrectamente desde una tarjeta u otros [resultados de creación de un cobro](/developers/es/docs/checkout-api/response-handling/collection-results). Si lo desea, puede ocultar estos detalles a través de la configuración a continuación.

```javascript
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
       hideStatusDetails: true
   }
 }
};
```

![status-screen-brick-hide-processing-details](checkout-bricks/status-screen-brick-hide-processing-details-es.jpg)