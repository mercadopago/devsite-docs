# Cómo integrar el checkout en marketplace

Marketplace es un sitio/plataforma de comercio electrónico que conecta a vendedores y compradores en un mismo entorno de ventas, permitiendo la venta de productos y/o servicios online con mayor alcance y posibilidad de conversión.

Además de la estructura necesaria para realizar las ventas, algunos _marketplaces_ se encargan de la disposición de productos, formas de pago y envío, optimizando el proceso de venta y facilitando la gestión comercial.

Si eliges vender a través de un _marketplace_, es posible integrar **dos tipos de checkout de Mercado Pago** para procesar los pagos realizados.


* [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction):  en este modelo de checkout, el comprador es dirigido a una página de Mercado Pago para completar el pago.
* ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/introduction)------------ ----[mlb]----[Checkout Transparente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/introduction)------------: este modelo de pago permite al comprador realizar el pago dentro del entorno del _marketplace_.

Ambos checkouts reparten automáticamente los importes entre el vendedor y el _marketplace_ a través del _split del pago_ sin necesidad de ninguna acción por parte del vendedor.

> NOTE
>
> Importante
>
> La comisión de Mercado Pago se descuenta de los fondos recibidos por el vendedor. Es decir, primero se descuenta la comisión de Mercado Pago y la comisión del marketplace se descuenta del saldo restante.

Para realizar la integración deberás seguir el flujo de integración habitual del _checkout_ elegido, utilizando necesariamente un token de acceso para cada vendedor, obtenido a través de OAuth. A continuación, enumeramos los pasos necesarios para integrar una caja con el _mercado_.

1. Sigue los pasos descritos en la [documentación de OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/security/oauth/introduction) para obtener cada `access_token`. Esta información será necesaria durante el proceso de integración de pago en el _marketplace_.
2. Elige el tipo de pago que desea ([Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction) o ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/introduction)------------ ----[mlb]----[Checkout Transparente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/introduction)------------) y sigue todo el flujo de integración.
3. En la integración del _checkout_, usa la `public_key` de tu cuenta de integrador en el frontend e inserta el `access_token` del vendedor obtenido en el paso 1, en el backend o en el _header_ de la solicitud.
4. Para determinar el porcentaje de comisión del mercado:

    - Si el checkout es Pro, completa el parámetro `marketplace_fee` con el monto que se cobrará por cada preferencia de pago creada en la API **/checkout/preferences**.
    - Si el checkout es transparente, completa el parámetro `application_fee` con el monto que se cobrará por cada pago creado en la API **/payments**.

Al completar estos pasos, el pago se habrá integrado en el _marketplace_ y estará listo para procesar pagos.
