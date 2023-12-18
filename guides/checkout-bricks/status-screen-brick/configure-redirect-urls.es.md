> CLIENT_SIDE
>
> h1
>
> Configurar URL de redireccionamiento

Con el Status Screen Brick, es posible redirigir al usuario a otra página de tu sitio a través de los botones de redirección, para que este usuario pueda realizar una nueva compra o, en caso de error de pago, intente realizar uno nuevo. Para configurar las URL de retorno, debes enviar las URL deseadas en la configuración de Brick.

> NOTE
>
> Atención
>
> El Brick solo aceptará direcciones URL del mismo dominio que la página en la que está cargado el Status Screen Brick. Se ignorarán las URL pertenecientes a otros dominios o subdominios. 

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
       backUrls: {
           'error': '<http://<seu dominio>/error>',
           'return': '<http://<seu dominio>/homepage>'
       }
   }
};
```
```react-jsx
const customization = {
 backUrls: {
   error: '<http://<your_domain>/error>',
   return: '<http://<your_domain>/homepage>',
 },
};
```
]]]

La dirección proporcionada en la propiedad `return` del objeto `backUrls` se mostrará como un enlace al usuario cada vez que se muestre el Brick de Status Screen, mientras que la dirección proporcionada en la propiedad `error` se mostrará como un enlace al usuario cuando hay un error en el procesamiento del pago.

> NOTE
>
> Atención
>
> Es posible personalizar los textos de los botones que contienen las URL de retorno a través de la configuración de texto de Brick. Las claves para los textos de los botones son: `ctaGeneralErrorLabel` (para errores de pago), `ctaCardErrorLabel` (para errores en el llenado de los datos de la tarjeta) y `ctaReturnLabel` (para la URL de retorno, que se mostrará en todos los estados).

![configure-redirect-urls](checkout-bricks/configure-redirect-urls-es.jpg)