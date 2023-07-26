# Cómo integrar 3DS con Checkout Bricks

En esta documentación encontrarás toda la información necesaria para realizar la integración con 3DS con Checkout Bricks. Para obtener más información sobre cómo funciona este tipo de autenticación, consulte [3DS 2.0](/developers/es/docs/checkout-bricks/how-tos/improve-payment-approval/3ds).

> NOTE
>
> Importante
>
> Para integrarse con 3DS, se deben cumplir ciertos requisitos. Antes de continuar con los siguientes pasos, revise la sección [Requisitos previos](/developers/es/docs/checkout-bricks/prerequisites) y asegúrese de que se cumplan todos.

## Integrar con 3DS

La integración con 3DS da como resultado un proceso de autenticación que se realiza a través de dos flujos: con o sin _Challenge_, siendo _Challenge_ los pasos adicionales que debe realizar el comprador para garantizar su identidad.

Para **transacciones de bajo riesgo**, la información enviada al finalizar la compra es suficiente, el flujo procede de manera transparente y no se requieren pasos adicionales de _Challenge_. Sin embargo, **para casos de alto riesgo de fraude**, se requiere el _Challenge_ para verificar la identidad del comprador, lo que aumenta la aprobación de las transacciones con tarjeta.

La decisión de incluir o no el _Challenge_ depende del emisor de la tarjeta y del perfil de riesgo de la operación que se esté realizando.

A continuación se presentan los pasos para realizar una integración con 3DS.

1. Después de generar una intención de pago usando [Card Payment Brick](/developers/es/docs/checkout-bricks/card-payment-brick/introduction) o [Payment Brick](/developers/es/docs/checkout-bricks/pago-brick/introduction), es necesario enviar, desde tu backend, una solicitud de pago a Mercado Pago a través de nuestras APIs. La habilitación de la transmisión 3DS 2.0 se realiza agregando el campo `three_d_secure_mode: 'opcional'` a esta solicitud.

```javascript
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

const paymentData = {
...req.body,
three_d_secure_mode: 'optional'
};

mercadopago.payment.save(paymentData)
  .then(function(response) {
    const { status, status_detail, id } = response.body;
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(function(error) {
    console.error(error);
  });
```

Si no es necesario utilizar el flujo _Challenge_, el campo `status` del pago tendrá el valor `approved` y no será necesario mostrarlo, de esta forma el flujo de pago procederá con normalidad.

Para los casos en los que se requiere _Challenge_, `status` mostrará el valor `pending` y `status_detail` será `pending_challenge`.

Descripción general simplificada de la respuesta:

```javascript
{
   "payment_id":52044997115,
   "status":"pending",
   "status_detail":"pending_challenge",
   "three_ds_info":{
      "external_resource_url":"https://acs-public.tp.mastercard.com/api/v1/browser_Challenges",
      "creq":"eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImJmYTVhZjI0LTliMzAtNGY1Yi05MzQwLWJkZTc1ZjExMGM1MCIsImFjlOWYiLCJjW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IS4wIn0"
   },
   "owner":null
}
```

> NOTE
>
> Importante
>
> El campo devuelto `three_ds_info` contiene la información necesaria para continuar con el proceso de pago si `status_detail` es `pending_challenge`.

2. Para continuar el flujo y mostrar el _Challenge_ de manera simplificada, se recomienda integrar con el [Status Screen Brick](/developers/es/docs/checkout-bricks/status-screen-brick/default-rendering), informando el ID de pago generado, además del contenido del objeto `three_ds_info`, que fueron devueltos por la API de pago.

Si no desea utilizar el Status Screen Brick en esta etapa, le recomendamos que acceda a la sección [Implementación](/developers/es/docs/checkout-api/how-tos/integrate-3ds) en la documentación de [Checkout API](/developers/es/docs/checkout-api/landing), ya que se necesitarán pasos adicionales para, por ejemplo, capturar el evento emitido cuando se completa el _Challenge_.

```javascript
const renderStatusScreenBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     paymentId: "<PAYMENT_ID>", // id de pago que se mostrará
     additionalInfo: {
       externalResourceURL: "<EXTERNAL_RESOURCE_URL>",
       creq: "<C_REQ>",
     },
   },
   callbacks: {
     onReady: () => {},
     onError: (error) => {
       console.error(error);
     },
   },
 };
 window.statusScreenBrickController = await bricksBuilder.create(
   "statusScreen",
   "statusScreenBrick_container",
   settings
 );
};
renderStatusScreenBrick(bricksBuilder);
```

El Status Screen Brick mostrará una transición que indica la redirección y, luego, se mostrará el _Challenge_ del banco en cuestión.

<center>

![how-to-integrate-3ds](checkout-bricks/how-to-integrate-3ds-es.gif)

</center>

El usuario debe responder al desafío para que la transición se valide correctamente. Cabe señalar que la experiencia _Challenge_ es responsabilidad exclusiva del banco a cargo.

> NOTE
>
> Importante
>
> Por razones de seguridad, el pago será rechazado si el proceso _Challenge_ no se inicia dentro de los 30 segundos posteriores a su creación. Por lo tanto, es importante que el desafío comience exactamente después de su generación.

3. Después de resolver el desafío, se mostrará el resultado final del pago de acuerdo con la respuesta emitida por el banco al final del _Challenge_.

<center>

![status-screen-Brick](checkout-bricks/status-screen-brick-es.jpg)

</center>

## Prueba de integración

Antes de pasar a producción, es posible probar la integración para asegurarse de que el flujo de 3DS funcione correctamente y que los pagos se procesan sin errores. De esta manera, evitas que los compradores abandonen la transacción porque no pueden completar la compra.

Para poder validar pagos con 3DS, ponemos a disposición un **entorno de pruebas tipo sandbox** que devuelve resultados simulados solo para la simulación y validación de la implementación. Para realizar pruebas de pago en un entorno sandbox, es necesario utilizar sus **credenciales de prueba y tarjetas específicas** que permitan probar la implementación del _Challenge_ con flujos de éxito y fallo. La tabla a continuación muestra los detalles de estas tarjetas:

| Flujo	 | Número | Código de seguridad | Fecha de vencimiento |
|---|---|---|---|
| _Challenge_ exitoso	 | 5483 9281 6457 4623| 123 | 11/25 |
| _Challenge_ no autorizado	 | 5361 9568 0611 7557| 123 | 11/25 |

> Los pasos para generar el pago son los mismos [ejemplificados anteriormente](/developers/es/docs/checkout-bricks/how-tos/integrate-3ds#bookmark_integrar_com_3ds) en esta sección.

### Challenge

En ambos los flujos (éxito y fallo), el _Challenge_, que es una pantalla similar a la mostrada a continuación, debe ser mostrado por el [Status Screen Brick](/developers/en/docs/checkout-bricks/status-screen-brick/introduction).

<center>

![bricks_sandbox](checkout-bricks/bricks_sandbox-es.png)

</center>

El código de verificación proporcionado es solo ilustrativo. Para concluir el flujo de prueba, simplemente haz clic en el botón **Confirmar** y el Status Screen mostrará el estado final del pago.