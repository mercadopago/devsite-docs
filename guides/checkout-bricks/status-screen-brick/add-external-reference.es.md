> CLIENT_SIDE
>
> h1
>
> Agregar referencia externa

De forma predeterminada, el Status Screen Brick no muestra el campo `external_reference` de la API de [Pagos](/developers/es/reference/pagos/_pagos/post), pero cómo estos datos pueden ser útiles para permitir que el integrador identifique el compra en su sitio web, puede habilitar el campo a través de la configuración a continuación.

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
       showExternalReference: true
   }
 }
};
```