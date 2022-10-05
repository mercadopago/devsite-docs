# Integración vía Deep Linking

Una de las formas de integrarse con Mercado Pago Point es mediante un deep linking. Cuando se llama a dicho _link_, el mismo va a ser interceptado como un _Point-handled address_ por parte de la aplicación de Mercado Pago.

En la llamada a este _link_ se pueden enviar diferentes parámetros que serán levantados por la aplicación de Mercado Pago e impactados en el pago. Una vez que se hace el llamado a este link, el usuario será redireccionado a la pantalla de la aplicación de Mercado Pago para pasar la tarjeta del cliente y así realizar el cobro.

Una vez que el pago es procesado, el usuario será redireccionado a la `success_url` o `fail_url`, dependiendo del estado del pago. Esto deberá ser interceptado para retornar al usuario al flujo de la aplicación.

## Diagrama de Flujo

![Diagrama de flujo de Deep linking Mercado Pago Point](/images/point_diagram.png)

## Creación del Deep Linking

La URL a ser interceptada es la siguiente: `https://www.mercadopago.com/point/integrations`

Los parámetros que se pueden incluir son:

* `amount`: El monto que se le va a cobrar al cliente (\*).
* `description`: Una descripción de la operación (Máx.: 19 carácteres) (\*).
* `external_reference`: El código de referencia de tu sistema, el mismo es el que permitirá conciliar tu orden de compra con el pago.
* `notification_url`: Es la URL donde vas a recibir la notificación de ese pago.
* `payer_email`: Es el email del pagador.
* `success_url`: Es la URL donde será redireccionado el usuario luego de un pago aprobado.
* `fail_url`: Es la URL donde será redireccionado el usuario luego de un pago rechazado.

> WARNING
>
> Importante
>
> * Los campos marcados con (\*) son campos obligatorios.


En el artículo de [GitHub](https://github.com/mercadopago/point-android_integration#deep-linking) podes obtener más información y el ejemplo correspondiente.
