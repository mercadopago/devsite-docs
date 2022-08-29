> CLIENT_SIDE
>
> h1
>
> Incluir tarjetas guardadas

Para que Payment Brick pueda mostrar las tarjetas guardadas de un determinado comprador, es necesario enviar a Brick en el momento de su inicialización, lo ID del customer y los IDs de los cards, como en el ejemplo a continuación.

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
> Solo se mostrarán al comprador las tarjetas no caducadas, las tarjetas caducadas no estarán disponibles.

![payment-brick-cc](checkout-bricks/payment-brick-cc.es.gif)

----[mlb]----
Para obtener información sobre cómo crear, modificar y obtener `customerId` y `cardsIds`, consulte la sección [Gestión de tarjetas y clientes](/developers/es/docs/checkout-api/customer-management) de la documentación de Checkout Transparente.

------------

----[mla, mlm, mpe, mco, mlu, mlc]---- 
Para obtener información sobre cómo crear, modificar y obtener `customerId` y `cardsIds`, consulte la sección [Gestión de tarjetas y clientes](/developers/es/docs/checkout-api/customer-management) de la documentación de Checkout API.

------------