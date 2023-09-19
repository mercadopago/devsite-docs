----[mla, mlb]---- 
> SERVER_SIDE
>
> h1
>
> Cuenta de Mercado Pago y Financiación sin tarjeta

Los pagos con **Cuenta de Mercado Pago y Financiación sin tarjeta**, la opción de pagar en cuotas sin contar con una tarjeta, no necesitan ser enviados a través del backend. 

Si el usuario selecciona esta opción como medio de pago, el `preferenceId` enviado en la inicialización del Brick es el encargado de redirigir al comprador al sitio web de Mercado Pago, donde el pago se realizará directamente en nuestro sitio. 

Para redirigir al comprador a tu sitio, puede configurar `back_urls` como se describe [en este artículo](/developers/es/docs/checkout-bricks/payment-brick/advanced-features/preferences#bookmark_redirigir_al_comprador_a_tu_sitio_web).
 
------------
----[mlm]---- 
> SERVER_SIDE
>
> h1
>
> Cuenta de Mercado Pago y Financiamiento sin tarjeta

Los pagos con **Cuenta de Mercado Pago y Financiamiento sin tarjeta**, la opción de pagar en mensualidades sin contar con una tarjeta, no necesitan ser enviados a través del backend. 

Si el usuario selecciona esta opción como medio de pago, el `preferenceId` enviado en la inicialización del Brick es el encargado de redirigir al comprador al sitio web de Mercado Pago, donde el pago se realizará directamente en nuestro sitio. 

Para redirigir al comprador a tu sitio, puede configurar `back_urls` como se describe [en este artículo](/developers/es/docs/checkout-bricks/payment-brick/advanced-features/preferences#bookmark_redirigir_al_comprador_a_tu_sitio_web).

------------

# Marketplace

_Marketplace_ es un sitio/plataforma de comercio electrónico que conecta vendedores y compradores en un único entorno de venta, permitiendo la venta de productos y servicios en línea con mayor alcance y posibilidad de conversión.

Además de la estructura necesaria para realizar ventas, algunos _marketplaces_ se encargan de la disposición de los productos, los métodos de pago y el envío, optimizando el proceso de venta y facilitando la gestión del negocio.

La división de los valores entre el vendedor y el _marketplace_ se realiza automáticamente a partir del _split_ de pago, sin necesidad de ninguna acción por parte del vendedor.

> NOTE
>
> Importante
>
> La comisión de Mercado Pago se descuenta del valor recibido por el vendedor. Es decir, primero se descuenta la comisión de Mercado Pago y, sobre el valor restante, se descuenta la comisión del _marketplace_.

Para configurar el _marketplace_ en Checkout Bricks, siga los siguientes pasos:

1. Cree un `access_token` para cada vendedor siguiendo la documentación de [OAuth](/developers/es/docs/checkout-bricks/additional-content/security/oauth/creation).
2. En la [configuración de inicialización](/developers/es/docs/checkout-bricks/common-initialization) de Bricks, agregue `marketplace: true`.

```javascript
const settings = {
  initialization : {
    amount: 100,
    preferenceId: "<PREFERENCE_ID>",
    marketplace: true,
  },
};
```

3. Utilice la `public_key` de su cuenta de integrador en el **frontend** e inserte el `access_token` del vendedor, obtenido en el paso 1, en el **backend o en el header** de la solicitud.
4. Para determinar el porcentaje de comisión del _marketplace_, complete el parámetro `marketplace_fee` con un valor en moneda local (**su valor predeterminado es 0**) que se cobrará por cada preferencia creada en la API [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post). Recuerde agregar el ID de preferencia en la inicialización del Brick.

Una vez que haya completado estos pasos, el Checkout Bricks habrá sido integrado en el _marketplace_ y estará listo para procesar los pagos.

> WARNING
>
> Atención
>
> En el flujo de _marketplace_ no es posible habilitar pagos a plazos sin tarjeta de crédito.