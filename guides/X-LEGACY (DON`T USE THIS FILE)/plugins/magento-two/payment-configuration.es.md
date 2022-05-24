# Configura los medios de pago 

Para configurar el módulo y aceptar pagos con tarjeta de crédito----[mlb]----, Pix------------ y ticket en el Custom Checkout, sigue estos pasos:

## Configura tus credenciales

Primero, deberás colocar tus credenciales para poder habilitar los medios de pago disponibles en el país de donde sea la tienda.

1. Ve al menú Stores > Configuration > Sales > Payment Methods

2. Para este paso, te recomendamos tener a mano tus [Credenciales]([FAKER][CREDENTIALS][URL]). Luego, accede a la opción **Mercado Pago > Credenciales**. Allí encontrarás los campos **Public key** y **Access token**, que deberás completar con tus credenciales.

Existen dos tipos de credenciales:

- **Modo Sandbox:** Las credenciales de este modo se utilizan para realizar pruebas.
- **Modo Producción:** Las credenciales de este modo se utilizan para recibir los pagos en Producción. Para utilizar las credenciales del modo de producción debes activar tus credenciales.
- Lee [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) para más información.

3. Una vez que hayas colocado las credenciales, haz clic en el botón **Save Config** que se encuentra en la esquina superior derecha. 

> Es importante que guardes tus credenciales antes de continuar, ya que esto habilitará los medios de pago disponibles para tu país.

## Habilita los medios de pago

El siguiente paso es habilitar los medios de pago. Para eso, debes dirigirte al medio que deseas habilitar:

- Para habilitar **pagos con tarjeta**, ve a Checkout > Credit and Debit Card.
- Para habilitar **pagos con ticket**, ve a Custom Checkout > Offline Payment Methods (Ticket).
----[mlb]----
- Para habilitar **pagos con Pix**, ve a Custom Checkout > Pix.
------------

----[mlb]----
> WARNING
>
> Importante
>
> Antes de configurar Pix como medio de pago, ten en cuenta estos pasos:<br><br>
> - [Verifica la última versión](https://marketplace.magento.com/mercadopago-core.html#product.info.details.release_notes) y actualiza tu plugin de Mercado Pago.<br>
> - Registra tu clave en Mercado Pago. Si no lo haces, tus clientes no podrán finalizar la compra. Aquí te contamos [cómo hacerlo](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).
> [Haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-pix) para más información sobre pagos con Pix en Checkout Transparente. 
------------

## Configura tu Checkout para pagos con tarjetas de crédito y débito

La configuración de este medio de pago ofrecerá la opción al comprador de realizar pagos con tarjeta de crédito y debito disponibles en el país donde esté configurada la tienda.
Te compartimos un detalle de las distintas opciones que encontrarás para configurarlo:

| Campo | Descripción |
|---|---|
| Custom Checkout - Tarjetas de Crédito y Débito | La configuración de este campo ofrecerá la opción del comprador realizar pagos con tarjeta de crédito y débito disponibles en su país. Por defecto, el método de pago con tarjeta ya se encuentra activado. Para desactivarlo, solo es necesario cambiar la opción **Habilitado** por "Yes" a "No".  |
| Título del método de pago  | Esta opción permite cambiar el titulo del método de pago que aparecerá para el comprador.  |
| Identificación en la Factura de la Tarjeta de Crédito | Texto que identificará el pago en el resumen de tarjeta. Esta funcionalidad no está disponible en todos los países.  |
| Modo binario  | Al habilitarlo, este modo de procesamiento solo tendrá como resultados de estado de un pago `approved` o `rejected`. No habrá estados intermedios como `in_proccess` o `pending`.  |
| Banner Checkout | Por defecto, el módulo de Mercado Pago configurará un banner con los métodos disponibles de acuerdo al país en donde esté configurada la tienda. Si deseas puedes personalizarlo cambiando la url de la imagen. |
| Posición del método de pago | Permite cambiar la posición en la que el método pago está disponible para el comprador en el flujo de checkout.  |
| Cupones de descuento de Mercado Pago | Si habilitas esta opción, aparecerá un campo en el que el comprador podrá ingresar su cupón de descuento creado en Mercado Pago. |

A continuación, haz clic en “Save Config” para guardar tus preferencias.


## Configura tu Checkout Custom para medios de Pago offline

La configuración de este método de pago ofrecerá la opción del comprador realizar pagos con métodos de pago offline disponibles en el país donde esté configurada la tienda.
Te compartimos un detalle de las distintas opciones que encontrarás para configurar tu Checkout Custom:

| Campo | Descripción |
|---|---|
| Custom Checkout - Medios de pago off (ticket) | La configuración de este campo ofrecerá la opción del comprador realizar pagos con medios de pago off disponibles en su país. Por defecto, el método de pago con tarjeta ya se encuentra activado. Para desactivarlo, solo es necesario cambiar la opción **Habilitado** por "Yes" a "No".  |
| Título del método de pago  | Esta opción permite cambiar el titulo del método de pago que aparecerá para el comprador.  |
| Banner Checkout | Por defecto, el módulo de Mercado Pago configurará un banner con los métodos disponibles de acuerdo a su país. Si deseas puedes personalizarlo cambiando la url de la imagen. |
| Excluir métodos de pago | Por defecto, el módulo mostrará al comprador todos los métodos de pago del tipo Ticket y ATM. Puedes elegir solo lo métodos que deseas aceptar y dejar sin seleccionar aquellos que no deseas ofrecer. |
| Posición del método de pago | Permite cambiar la posición en la que el método pago está disponible para el comprador en el flujo de checkout.  |
| Posición del método de pago | Permite cambiar la posición en la que el método pago está disponible para el comprador en el flujo de checkout.  |
| Cupones de descuento de Mercado Pago | Si habilitas esta opción, aparecerá un campo en el que el comprador podrá ingresar su cupón de descuento creado en Mercado Pago. |

A continuación, haz clic en “Save Config” para guardar tus preferencias.

## Devoluciones y cancelaciones

Las **devoluciones** son transacciones que se realizan cuando se revierte un determinado cargo y los importes abonados se devuelven al comprador. Esto significa que el cliente recibirá el monto pagado por la compra de un determinado producto o servicio en su cuenta o en el extracto de su tarjeta de crédito.

Las **cancelaciones** ocurren cuando se realiza una compra pero el pago aún no ha sido aprobado por algún motivo. En este caso, considerando que la transacción no fue procesada y el establecimiento no recibió ningún monto, la compra se cancela y no ocurre ningún cargo.

A continuación encontrarás los pasos necesarios para aceptar devoluciones y realizar cancelaciones en tu tienda.

### Devoluciones

Para aceptar la devolución de pagos en tu tienda, deberás activar la opción en la configuración de tu medio de pago seleccionando la opción "Yes" en el campo desplegable.

Al habilitar esta opción, el módulo realizará la devolución parcial o total del pago en el Mercado Pago cuando se cree un memo de crédito en la órden. La devolución sólo se realiza en los pagos que tienen el estado Approved (aprobados).

> Si la devolución se realiza en el panel del Mercado Pago, el módulo no está preparado para crear memo de crédito automáticamente. Debido a esta limitación, es aconsejable que sea creado a partir de la tienda.

### Cancelaciones

Para cancelar pagos de transacciones reaizadas en tu tienda, deberás activar la opción en la configuración de tu medio de pago seleccionando la opción "Yes" en el campo desplegable. 
Al habilitar esta opción, el módulo cancelará el pago en Mercado Pago cuando se cancele la órden.
El pago se cancelará cuando el estado esté en `pending` o `in_process`, de lo contrario el módulo devolverá un mensaje de error.

> PREV_STEP_CARD_ES
>
> Instalación del plugin
>
> Sigue los pasos para instalar el plugin.
>
> [Instalación del plugin](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/magento-two/instalation)

> NEXT_STEP_CARD_ES
>
> Configura Checkout Pro
>
> Configura el módulo para aceptar pagos con Checkout Pro.
> 
> [Configuración del Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/magento-two/checkout-pro-configuration)