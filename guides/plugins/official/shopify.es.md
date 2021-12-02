# Shopify

----[mlb]----

[Shopify](https://es.shopify.com/?shpxid=7bb7e37d-61C2-4AC4-F4B7-F7598BB65345) és una plataforma de comercio electrónico que ofrece todas las funciones que necesitas para vender online.

Al integrar Mercado Pago en tu Shopify, puedes recibir pagos a través de [Checkout Pro](https://www.mercadopago.com.br/developers/es/guides/online-payments/checkout-pro/introduction), donde se redirecciona al comprador a una página de Mercado Pago para completar el pago, o através de [Checkout Api](https://www.mercadopago.com.br/developers/es/guides/online-payments/checkout-api/introduction) que permite al comprador realizar todo el proceso de pago dentro del entorno de tu tienda.

Si lo desea, solo puede usar un tipo de pago en su tienda (Checkout Pro o Checkout Api), sin embargo, **para ofrecer el Checkout Api, es obligatorio integrar Checkout Pro primero**.

Para realizar la integración, deberá seguir estos pasos:

1. [Instalar Checkout Pro](#bookmark_checkout_pro)
2. [Instalar Checkout Api](#bookmark_checkout_api)

## Checkout Pro

La primera fase de la integración de Mercado Pago con Shopify es la instalación de Checkout Pro. En este modelo de checkout, el cliente es dirigido a una página de Mercado Pago donde deberás completar la información solicitada y concluir el pago.

Si ya tiene Checkout Pro instalado, haga [clic aquí](#bookmark_checkout_api) y siga los pasos para instalar el Checkout Api.

> NOTE
>
> Importante
>
> Checkout Pro de Mercado Pago se instala exclusivamente en **Producción**, es decir, ya permite el procesamiento de pagos reales. Esto significa que **no necesita configurar un modo de producción** para comenzar a recibir pagos realizados en su tienda.

## Instalación

Para instalar Checkout Pro en tu Shopify, sigue las instrucciones a continuación.

1. Acceda al **Panel de administración** de su tienda y haga clic en **Configuración > Pagos**.
2. En **Proveedores de pago**, haga clic en **Seleccionar un proveedor**.
3. Busque Mercado Pago en el espacio de búsqueda y haga clic en la opción disponible.
4.  En _Client_id_ y _Client_secret_, ingrese sus credenciales de **Producción**. Para más detalles sobre cómo obtener esta información, vaya a la documentación de [Credenciales](https://www.mercadopago.com.br/developers/es/guides/resources/credentials).
5. Seleccione las imágenes referentes a los medios de pago que desea mostrar en su tienda. Estas imágenes son sólo para fines ilustrativos y no implican la activación del método de pago seleccionado.
6. En **Modo de prueba**, seleccione la opción **Habilita el modo de prueba** si desea mantener su tienda en un entorno de prueba antes de ponerla a disposición de sus clientes, sin embargo, si prefiere dejar su tienda habilitada para recibir ventas reales, mantenga el campo deshabilitado.
7. Cuando termine de completar, haga clic en **Guardar**.

[TXTSNIPPET][/guides/snippets/test-integration/shopify-cpf-config]

Una vez que haya completado estos ajustes, por favor haga una compra de prueba para asegurar el correcto funcionamiento de lo checkout.

### Pruebas de compras

Las pruebas ayudan a garantizar que los pagos se procesan correctamente antes de permitir las ventas reales.

Siga los pasos a continuación para realizar una compra de prueba en su tienda.

1. Vaya a la página de inicio de su tienda y seleccione un producto para comprar.
2. Haga clic en **Comprar** y continúe con su carrito.
3. Ingrese un código postal para simular el envío y haga clic en **Continuar**.
4. Complete los campos obligatorios y seleccione Mercado Pago como método de pago.
5. Haga clic en Pagar.

Si la prueba se ejecuta sin errores, significa que la instalación se realizó correctamente y su tienda está lista para vender.

## Checkout Api

> WARNING
>
> Importante
>
> La sección de integración de Checkout Api para Shopify está **disponible exclusivamente en inglés y portugués**. Para acceder a la documentación en inglés, [haga clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/official/shopify#bookmark_checkout_transparente) o, si lo prefiere, acceda a la versión en portugués [haciendo clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/official/shopify#bookmark_checkout_transparente).

------------

----[mla, mlm, mlu, mpe, mco, mlc]----

[Shopify](https://es.shopify.com/?shpxid=7bb7e37d-61C2-4AC4-F4B7-F7598BB65345) és una plataforma de comercio electrónico que ofrece todas las funciones que necesitas para vender online.

Al integrar Mercado Pago en tu Shopify, puedes recibir pagos a través de [Checkout Pro](https://www.mercadopago.com.br/developers/es/guides/online-payments/checkout-pro/introduction), donde se redirecciona al comprador a una página de Mercado Pago para completar el pago.

Para obtener más información sobre Checkout Pro y sus beneficios, [haga clic aquí](https://www.mercadopago.com.br/developers/es/guides/online-payments/checkout-pro/introduction) y acceda a nuestra documentación.

## Checkout Pro

Al instalar Checkout Pro, su cliente será dirigido a una página de Mercado Pago donde deberá completar la información solicitada y realizar el pago, es decir, la transacción se procesa y completa fuera del entorno de su tienda.

Para instalar Checkout Pro, siga los pasos a continuación.

> NOTE
>
> Importante
>
> Checkout Pro de Mercado Pago se instala exclusivamente en **Producción**, es decir, ya permite el procesamiento de pagos reales. Esto significa que **no necesita configurar un modo de producción** para comenzar a recibir pagos realizados en su tienda.

## Instalación

Para instalar Checkout Pro en tu Shopify, sigue las instrucciones a continuación.

1. Acceda al **Panel de administración** de su tienda y haga clic en **Configuración > Pagos**.
2. En **Proveedores de pago**, haga clic en **Seleccionar un proveedor**.
3. Busque Mercado Pago en el espacio de búsqueda y haga clic en la opción disponible.
4.  En _Client_id_ y _Client_secret_, ingrese sus credenciales de **Producción**. Para más detalles sobre cómo obtener esta información, vaya a la documentación de [Credenciales](https://www.mercadopago.com.br/developers/es/guides/resources/credentials).
5. Seleccione las imágenes referentes a los medios de pago que desea mostrar en su tienda. Estas imágenes son sólo para fines ilustrativos y no implican la activación del método de pago seleccionado.
6. En **Modo de prueba**, seleccione la opción **Habilita el modo de prueba** si desea mantener su tienda en un entorno de prueba antes de ponerla a disposición de sus clientes, sin embargo, si prefiere dejar su tienda habilitada para recibir ventas reales, mantenga el campo deshabilitado.
7. Cuando termine de completar, haga clic en **Guardar**.

[TXTSNIPPET][/guides/snippets/test-integration/shopify-cpf-config]

Una vez que haya completado estos ajustes, por favor haga una compra de prueba para asegurar el correcto funcionamiento de lo checkout.

### Pruebas de compras

[TXTSNIPPET][/guides/snippets/test-integration/shopify-test-purchase]

------------