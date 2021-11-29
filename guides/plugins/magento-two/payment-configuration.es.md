# Configura los medios de pago (Custom Checkout)

Para configurar el módulo y aceptar pagos con tarjeta de crédito----[mlb]----, Pix------------ y ticket en el Custom Checkout, sigue estos pasos:


1. Ve al menú Stores > Configuration > Sales > Payment Methods

2. Para este paso, te recomendamos tener a mano tus [Credenciales]([FAKER][CREDENTIALS][URL]). Luego, accede a la opción **Mercado Pago > Credenciales**. Allí encontrarás los campos **Public key** y **Access token**, que deberás completar con tus credenciales.

Existen dos tipos de credenciales:

- **Modo Sandbox:** Las credenciales de este modo se utilizan para realizar pruebas.
- **Modo Producción:** Las credenciales de este modo se utilizan para recibir los pagos en Producción. Para utilizar las credenciales del modo de producción debe activar tus credenciales.
- Lee [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials)

3. El siguiente paso es habilitar los medios de pago. Para eso, debes dirigirte al medio que deseas habilitar:

- Para habilitar **pagos con tarjeta**, ve a Checkout - Credit and Debit Card.
- Para habilitar **pagos con ticket**, ve a Custom Checkout - Offline Payment Methods (Ticket).
----[mlb]----
- Para habilitar pagos con Pix  > **Custom Checkout - Pix**.
------------

----[mlb]----
> WARNING
>
> Importante
>
> Antes de configurar Pix como medio de pago, ten en cuenta estos pasos:<br><br>
> - [Verifica la última versión](https://marketplace.magento.com/mercadopago-core.html#product.info.details.release_notes) y actualiza tu plugin de Mercado Pago.<br>
> - Registra tu clave en Mercado Pago. Si no lo haces, tus clientes no podrán finalizar la compra. Aquí te contamos [cómo hacerlo](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).
------------

Luego de acceder al medio de pago que deseas habilitar, haz clic en el botón “Configure” para ver las opciones de configuración. Allí, selecciona las opciones que prefieras y luego marca el campo “Enabled” como **Yes**. A continuación, haz clic en “Save Config” para guardar tus preferencias.

![Mercado Pago Custom Checkout Configuration](images/magento2/mercadopago_custom_checkout_configuration.png)

¡Listo! El medio de pago se habilitará correctamente en el checkout.

### Próximo paso

> LEFT_BUTTON_REQUIRED_ES
>
> Configura Checkout Pro
>
> Configura el módulo para aceptar pagos con Checkout Pro.
>
> 
> [Configuración del Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/magento-two/checkout-pro-configuration)