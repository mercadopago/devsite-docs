# Cómo integrar 3DS con Checkout Bricks

En esta documentación encontrarás toda la información necesaria para realizar la integración con 3DS con Checkout Bricks. Para obtener más información sobre cómo funciona este tipo de autenticación, consulte [3DS 2.0](/developers/es/docs/checkout-bricks/how-tos/improve-payment-approval/3ds).

> NOTE
>
> Importante
>
> Para integrarse con 3DS, se deben cumplir ciertos requisitos. Antes de continuar con los siguientes pasos, revise la sección [Requisitos previos](/developers/es/docs/checkout-bricks/prerequisites) y asegúrese de que se cumplan todos.

## Integrar con 3DS

La autenticación 3DS se puede realizar a través de dos flujos distintos: **con o sin _Challenge_**, que son pasos adicionales que el comprador debe completar para garantizar su identidad. La decisión de incluir o no el _Challenge_ depende del emisor de la tarjeta y del perfil de riesgo de la transacción que se realiza.  

Para **transacciones de bajo riesgo**, la información enviada en el momento del pago es suficiente y los pasos adicionales de _Challenge_ **no son necesarios**. Sin embargo, **para casos donde existe un alto riesgo de fraude**, _Challenge_ es requerido para **verificar la identidad del comprador**, lo que aumenta la conversión de las transacciones con tarjeta.

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

Descripción general de la respuesta:

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

2. Para continuar el flujo y mostrar el _Challenge_ de manera simplificada, se recomienda integrar con el [Status Screen Brick](/developers/es/docs/checkout-bricks/status-screen-brick/default-rendering), informando el ID de pago generado, además del contenido del objeto `three_ds_info`, que fue devuelto por la API de pago.

Si no desea utilizar el Status Screen Brick en esta etapa, le recomendamos que acceda a la sección [Implementación](/developers/es/docs/checkout-api/how-tos/how-to-integrate-3ds) en la documentación de [Checkout API](/developers/es/docs/checkout-api/landing), ya que se necesitarán pasos adicionales para, por ejemplo, capturar el evento emitido cuando se completa el _Challenge_.

```javascript
{
const renderStatusScreenBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     paymentId: "<PAYMENT_ID>", // id do pagamento a ser mostrado
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

----[mlb]----
<center>

![payment-Brick-layout-mlb](checkout-bricks/payment-brick-layout-mlb-es.gif)

</center>
------------
----[mla]----
<center>

![payment-Brick-layout-mla](checkout-bricks/payment-brick-layout-mla-es.gif)

</center>

------------
----[mlm]----
<center>

![payment-Brick-layout-mlm](checkout-bricks/payment-brick-layout-mlm-es.gif)

</center>

------------
----[mco]----
<center>

![payment-brick-layout-mco](checkout-bricks/payment-brick-layout-mco-es.gif)

</center>

------------
----[mpe, mlu, mlc]----
<center>

![payment-brick-layout-all](checkout-bricks/payment-brick-layout-all-es.gif)

</center>

------------

## Posibles status del pago 

Una transacción con 3DS puede devolver diferentes status según el tipo de integración realizada (con o sin challenge). En un pago sin _Challenge_, el estado de la transacción será directamente "approved" o "rejected".

En un pago con _Challenge_, la transacción estará en status `pending` y se iniciará el proceso de autenticación con el banco. Solo después de esta etapa se mostrará el status final.

A continuación se muestra una tabla con los posibles status y sus descripciones correspondientes.

| Status  | Descrição  |
| --- | --- |
| “pending”  | Transacción pendiente de autenticación o timeout del challenge.  |
| “approved”  | Transacción aprobada con autenticación.  |
| “rejected”  | Transacción denegada sin autenticación.  |

## Prueba de integración

Antes de pasar a producción, es posible probar la integración para asegurarse de que el flujo de 3DS funcione correctamente y que los pagos se procesan sin errores. De esta manera, evitas que los compradores abandonen la transacción porque no pueden completar la compra.

Para realizar una compra de prueba, además de las credenciales de prueba de tu usuario de producción, es necesario utilizar una tarjeta de crédito de prueba con 3DS habilitado. 

> WARNING
>
> Importante
>
> Para la realización de pruebas, recomendamos que te pongas en contacto con tu consultor de Mercado Pago.