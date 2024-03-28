# Hacer compra de prueba

La etapa de prueba permite analizar si la integración se realizó correctamente y si los pagos se están procesando sin errores, evitando que aparezcan errores al poner el checkout a disposición de los compradores finales.

Para realizar una compra de prueba, debe usar las **credenciales de prueba** de su **usuario de producción**. Para obtenerlos, vaya a **Detalles de la aplicación > Credenciales** dentro del [Panel del desarrollador](/developers/panel/app) o en tu cuenta de Mercado Pago, accediendo a [Tu negocio > Configuraciones > Gestión y administración > Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).
Con las credenciales configuradas, siga los pasos a continuación para realizar la compra de prueba.

Con las credenciales en tu poder y la [integración realizada](/developers/es/docs/checkout-bricks/common-initialization), sigue los pasos a continuación para realizar la compra de prueba.

## Tarjetas

1. Inicia la integración de tu proyecto con las **credenciales de prueba**.
2. Ingresa cualquier correo electrónico como usuario pagador (**recuerda que debe ser diferente al correo electrónico que utilizas en Mercado Pago**).
3. Ingresa los datos de una de nuestras [tarjetas de prueba](/developers/es/guides/additional-content/your-integrations/test-cards).
4. Prueba diferentes resultados de pago utilizando la tabla disponible en las [tarjetas de prueba](/developers/es/guides/additional-content/your-integrations/test-cards) y completando el estatus deseado en el nombre del titular de la tarjeta (campo `card_holder_name`).
5. Confirma la compra. Se generará un pago con el **status indicado para prueba**.

## Medios de pago offline

1. Inicia la integración de tu proyecto con las **credenciales de prueba**.
2. Ingresa cualquier correo electrónico como usuario pagador (**recuerda que debe ser diferente al correo electrónico que utilizas en Mercado Pago**).
3. Ingresa los datos requeridos en el formulario.
4. Confirma la compra. Se generará un pago con **status pendiente**.

## Pago con Mercado Pago

----[mlb, mla, mlm]----

1. [Crea una preferencia](/developers/es/reference/preferences/_checkout_preferences/post) con tus **credenciales de prueba** e inicia la integración de tu proyecto con las credenciales utilizadas.
2. Dirígete a Mercado Pago (a través de [Payment Brick](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits) o [Wallet Brick](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering)).
3. Ingresa a Mercado Pago con una cuenta diferente a la utilizada para **crear la preferencia**.
4. Confirma la compra.

------------
----[mpe, mco, mlu, mlc]----

1. [Crea una preferencia](/developers/es/reference/preferences/_checkout_preferences/post) con tus **credenciales de prueba** e inicia la integración de tu proyecto con las credenciales utilizadas.
2. Dirígete a Mercado Pago (a través de [Payment Brick](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet) o [Wallet Brick](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering)).
3. Ingresa a Mercado Pago con una cuenta diferente a la utilizada para **crear la preferencia**.
4. Confirma la compra.

------------

¡Listo! Una vez que se completen estos pasos, la integración estará completa y podrá usar sus credenciales de producción para usar el Checkout Bricks.

> WARNING
>
> Atención
>
> No use el correo electrónico de usuario de prueba en el campo de correo electrónico del Brick (si corresponde).