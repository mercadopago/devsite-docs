> CLIENT_SIDE
>
> h1
>
> Configurar URL de redireccionamiento

Con el Status Screen Brick, es posible redirigir a su usuario a otra página de su sitio a través de los botones de redirección, para que este usuario pueda realizar una nueva compra o, en caso de error de pago, intente realizar un nuevo pago. Para configurar las URL de retorno, debe enviar las URL deseadas en la configuración de Brick.

> NOTE
>
> Atención
>
> El Brick solo aceptará direcciones URL del mismo dominio que la página en la que está cargado el Status Screen Brick. Se ignorarán las URL pertenecientes a otros dominios o subdominios. 

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
   backUrls: {
       error: 'URL',
	return: 'URL'
   }
 }
};
```

La URL del `error` se mostrará al usuario solo cuando falle un pago. La URL de `retorno` se mostrará al usuario en todos los estados de pago.

> NOTE
>
> Atención
>
> Es posible personalizar los textos de los botones que contienen las URL de retorno a través de la configuración de texto de Brick. Las claves para los textos de los botones son: `ctaGeneralErrorLabel` (para errores de pago), `ctaCardErrorLabel` (para errores en el llenado de los datos de la tarjeta) y `ctaReturnLabel` (para la URL de retorno, que se mostrará en todos los estados).

![configure-redirect-urls](checkout-bricks/configure-redirect-urls-es.jpg)