# Cómo integrar Mercado Pago Point

Para poder cobrar de manera integrada con nuestro dispositivo Point es necesario descargar la aplicación de Mercado Pago Point disponible en los marketplaces de iOS y Android.

Actualmente, permitimos llevar a cabo una integración desde cualquier tipo de aplicación externa que pueda ser accedida desde el mismo dispositivo donde el vendedor tiene instalada la aplicación de Point:

- Aplicación Mobile para Android o iOS nativa.
- Aplicación Mobile Híbirida.
- Aplicación Web.

> WARNING
>
> Pre-requisitos
>
> * Contar con la aplicación de Mercado Pago Point
> * Contar con un dispositivo Point asociado a la cuenta de Mercado
> Pago
> * El vendedor debe estar logueado con su cuenta de Mercado Pago en la aplicación de Mercado Pago Point.
> * Disponible para Android versión 2.8.0 o superior, iOS versión 1.7.0 o superior y solo cuando corren en iOS 9 o superior.

## Diagrama de Flujo
Diagrama



## 1. Integración vía Deep Linking

Una de las formas de integrarse con Mercado Pago Point es mediante un deep link. Cuando se accede a dicho link, el mismo va a ser interceptado como un Point-handled address.
En la llamada a este link se pueden enviar diferentes parámetros que serán levantados por la aplicación de Point e impactados en el pago. Una vez que se hace el llamado a este link, el vendedor será redireccionado a la pantalla de la aplicación de Mercado Pago Point para pasar la tarjeta del cliente y así realizar el cobro.Una vez que el pago es procesado, el usuario será redireccionado a la success_url o fail_url, dependiendo del estado del pago. Esto deberá ser interceptado para retornar al usuario al flujo de la aplicación.


### Creación del Deep Linking

La URL a ser interceptadas es la siguiente. `https://secure.mlstatic.com/org-img/point/app/index.html`


Los parámetros que se pueden incluir son:

* `amount`: El monto que se le va a cobrar al cliente (\*).
* `description`: Una descripción de la operación (Máx.: 20 carácteres) (\*).
* `external_reference`: El código de referencia de tu sistema, el mismo es el que permitirá conciliar tu orden de compra con el pago.
* `notification_url`: Es la URL donde vas a recibir la notificación de ese pago.
* `payer_email`: Es el email del pagador.
* `success_url`: Es la URL donde será redireccionado el usuario luego de un pago aprobado.
* `fail_url`: Es la URL donde será redireccionado el usuario luego de un pago rechazado.

> WARNING
>
> * Los campos marcados con (\*) son campos obligatorios.
> * Los campos external reference, notification url y payer email sólo se encuentran disponibles para la integración con la aplicación de Mercado Pago Point en Android.

En el artículo de [GitHub](https://github.com/sebad78/android-integration#deep-linking) podes obtener más información y el ejemplo correspondiente.

## 2. Integración vía Intent-Based
> WARNING
>
> * Esta integración sólo esta disponible para Android versión 2.8.0 o superior.

La otra forma de integrarse con la aplicación de Mercado Pago Point es mediante código nativo de Android, mediante el concepto de Intent-Based.

Debes utilizar el método “startActivityForResult” para iniciar directamente el proceso de pago. El resultado del pago va a retornar como “activityResult”Es muy importante que el código maneje la posibilidad de que el usuario no tenga instalada la aplicación de Mercado Pago Point en su dispositivo, en este caso, recomendamos redireccionar al usuario al Play Store para descargar la misma.
Como referencia puedes utilizar el código de ejemplo y documentación que tiene el formato para poder enviar la información del pago y manejar el objeto de retorno.

En el artículo de [GitHub](https://github.com/sebad78/android-integration#intent) podes obtener más información y el ejemplo correspondiente.


## 3. Notificaciones de Pago

Es necesario que envíes tu `notification_url`, donde recibirás aviso de todos los nuevos pagos y actualizaciones de estados que se generen.

En el artículo de [notificaciones](../../notifications/ipn.es.md) podes obtener más información.

## 4. Identificación de Pagos de Point

Los pagos de Point se identifican de la siguiente manera cuando se busca el mismo en la API de Payments


- operation_type = pos\_payment
- created_from = `2707436798674401`(Android) ó `7353443692214630`(iOS)

En el artículo de [API's](../../notifications/ipn.es.md) podes obtener más información sobre la API de Payments.
