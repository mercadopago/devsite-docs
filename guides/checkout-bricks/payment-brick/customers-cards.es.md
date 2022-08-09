> CLIENT_SIDE
>
> h1
>
> Customers & Cards

Payment Brick permite al integrador utilizar la funcionalidad Customers & Cards, que permite el uso de tarjetas guardadas en pagos en su sitio web.

## Incluyendo tarjetas guardadas en Payment Brick

Para que Payment Brick pueda mostrar las tarjetas guardadas de un determinado comprador, es necesario enviar a Brick en el momento de su inicialización, la identificación del cliente y las tarjetas, como en el ejemplo a continuación.

[[[
```Javascript
settings = {
   initialization: {
       ...,
       payer: {
           ...,
           customerId: '209277402-FqRqgEc3XItrxs',
           cardsIds: [ '1518023392627', '1518023332143' ]
       },
   },
   ...
}
```
]]]

Con solo pasar estas dos propiedades, Brick le dará automáticamente al usuario la opción de realizar el pago con sus tarjetas guardadas.

> WARNING
>
> Atención
>
> Solo se mostrarán al comprador las tarjetas caducadas, las tarjetas caducadas no estarán disponibles.

## Obtener customerId y cardsIds

Para el `customerId` y los `cardsIds` necesarios para la función C&C, el integrador debe tener acceso al correo electrónico de un usuario y al token generado a través de un pago con tarjeta.

Con el email del usuario es posible generar un ID de Cliente y, utilizando el ID de Cliente combinado con el token de la tarjeta, es posible guardarlo para que el comprador pueda utilizarlo en las próximas compras.

> PREV_STEP_CARD_ES 
>
> Ejemplo de código
>
> Para facilitar y optimizar el proceso de integración, consulta un ejemplo de integración con Checkout Bricks.
>
> [Enviar pago a Mercado Pago](/developers/es/docs/checkout-bricks/payment-brick/code-example)

> NEXT_STEP_CARD_ES
>
> Inicializar datos en Bricks
>
> xxx
>
> [Inicializar datos en Bricks](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/initialize-data-on-the-bricks)