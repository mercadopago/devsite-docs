---
sites_supported:
  - mla
  - mlb
  - mlm
  - global
---


# Cómo integrar Mercado Pago Point

Para poder cobrar de manera integrada con nuestro dispositivo Point es necesario descargar la aplicación de Mercado Pago disponible en los marketplaces de iOS y Android.

Existen dos grandes mundos a la hora de integrar Point:

1) Cuando la aplicación se puede utilizar desde el mismo dispositivo (celular o tablet) donde esta instalada la aplicación de Mercado Pago. Esto se puede logar con una integración de deep linking o intent-based mediante

2) Cuando la aplicación no se puede utilizar desde el mismo dispositivo (celular o tablet) donde esta instalada la aplicación de Mercado Pago. Esto se puede logar con una integración vía API.


> WARNING
>
> Pre-requisitos
>
> * Contar con la aplicación de Mercado Pago (Desde la versión 2.34 para Android y 2.32 para iOS).
> * Contar con un dispositivo Point.
> * El usuario debe estar logueado con su cuenta de Mercado Pago en la aplicación de Mercado Pago.
> * Disponible para Android versión 2.8.0 o superior, iOS versión 1.7.0 o superior y solo cuando corren en iOS 9 o superior.


## Integración vía Deep Linking

Una de las formas de integrarse con Mercado Pago Point es mediante un deep linking. Cuando se llama a dicho _link_, el mismo va a ser interceptado como un _Point-handled address_ por parte de la aplicación de Mercado Pago.

En la llamada a este _link_ se pueden enviar diferentes parámetros que serán levantados por la aplicación de Mercado Pago e impactados en el pago. Una vez que se hace el llamado a este link, el usuario será redireccionado a la pantalla de la aplicación de Mercado Pago para pasar la tarjeta del cliente y así realizar el cobro.

Una vez que el pago es procesado, el usuario será redireccionado a la `success_url` o `fail_url`, dependiendo del estado del pago. Esto deberá ser interceptado para retornar al usuario al flujo de la aplicación.

### Diagrama de Flujo

![instore diagram](/images/point_diagram.png)


### Creación del Deep Linking

La URL a ser interceptada es la siguiente: `https://www.mercadopago.com/point/integrations`

Los parámetros que se pueden incluir son:

* `amount`: El monto que se le va a cobrar al cliente (\*).
* `description`: Una descripción de la operación (Máx.: 20 carácteres) (\*).
* `external_reference`: El código de referencia de tu sistema, el mismo es el que permitirá conciliar tu orden de compra con el pago.
* `notification_url`: Es la URL donde vas a recibir la notificación de ese pago.
* `payer_email`: Es el email del pagador.
* `success_url`: Es la URL donde será redireccionado el usuario luego de un pago aprobado.
* `fail_url`: Es la URL donde será redireccionado el usuario luego de un pago rechazado.

> WARNING
>
> * Los campos marcados con (\*) son campos obligatorios.


En el artículo de [GitHub](https://github.com/mercadopago/point-android_integration#deep-linking) podes obtener más información y el ejemplo correspondiente.


## Integración vía Intent-Based

> WARNING
>
> * Esta integración sólo esta disponible para Android versión 2.8.0 o superior.


Otra forma de integrarse con la aplicación de Mercado Pago es mediante código nativo de Android, mediante el concepto de _Intent-Based_.

Debes utilizar el método “startActivityForResult” para iniciar directamente el proceso de pago. El resultado del pago va a retornar como “activityResult”.

Es muy importante que el código maneje la posibilidad de que el usuario no tenga instalada la aplicación de Mercado Pago en su dispositivo, en este caso, recomendamos redireccionar al usuario al Play Store para descargar la misma.


Como referencia puedes utilizar el código de ejemplo y documentación que tiene el formato para poder enviar la información del pago y manejar el objeto de retorno.

En el artículo de [GitHub](https://github.com/mercadopago/point-android_integration#intent) podes obtener más información y el ejemplo correspondiente.


## Integración vía API

> WARNING
>
> * Esta integración sólo esta disponible para Android versión 2.8.0 o superior.
> * No esta disponible para iOS.
> * Para poder utilizar esta integración es necesario que te comuniques con [integracioneshispanos@mercadopago.com](mailto:integracioneshispanos@mercadopago.com) para que te habiliten las opciones de integraciones en la app de Mercado Pago.

La otra forma de integrarse con la aplicación de Mercado Pago para cobrar con nuestro Point es mediante nuestras API.

Para esta integración, primero es necesario configurar desde la aplicación de Mercado Pago el `device_name` . El mismo sirve para identificar tu celular o tablet y relacionarlo con tu cuenta de Mercado Pago. De esta manera, sabrás a que dispositivo enviar la orden de pago.

El siguiente paso, consiste en generar una orden de pago y enviarsela vía API al device desde donde queres cobrarla. El usuario verá que en la pantalla de ese dispositivo se levanta la aplicación de Mercado Pago lista para pasar la tarjeta y avanzar con el flujo de pago utilizando el Point.

Una vez que el pago es procesado, el usario verá el resultado del pago en la aplicación de Mercado Pago. Finalmente, la orden generada se cerrará y se creará el pago correspondiente.


### Creación de la orden de pago

El POST en esta API genera una orden, que es la que recibe la aplicación de Mercado Pago para cobrar con el Point, con un identificador, que se puede utilizar para saber el estado de la misma.

```curl
curl -X POST \
-H "Content-Type: application/json" \
-d '{"parameter_name":"parameter_value"}' \
'https://mobile.mercadopago.com/point/services/integrations/v1?access_token=ACCESS_TOKEN'
```

Los parámetros que se pueden incluir son:

* `amount`: El monto que se le va a cobrar al cliente (\*).
* `description`: Una descripción de la operación (Máx.: 20 carácteres) (\*).
* `device_name`: Es el nombre del dispositivo que queres que levante la orden de pago (\*).
* `cc_type`: El tipo de tarjeta. Puede ser credit_card o debit_card (\*).
* `external_reference`: El código de referencia de tu sistema, el mismo es el que permitirá conciliar tu orden de compra con el pago.
* `disable_back_button`: True o False. Para que al clickear en el back button la orden de pago se cierre.
* `notification_url`: Es la URL donde vas a recibir la notificación de ese pago.
* `payer_email`: Es el email del pagador.

> WARNING
>
> * Los campos marcados con (\*) son campos obligatorios.

La respuesta tendra el siguiente formato:

```json
{
	"status":"OPEN",
	"id":<order_id>
}
```

**Response status code: 200 OK**

### Obtener la orden de pago

El GET en esta API, junto al `order_id`, es la que posibilita recuperar el estado de la misma para saber si se generó o no un pago.

```curl
curl -X GET \
-H "Content-Type: application/json" \
'https://mobile.mercadopago.com/point/services/integrations/v1/:ID?access_token=ACCESS_TOKEN'
```

Si el status de la orden es `OPEN` quiere decir que la misma todavía no se pago. Si el status es `CLOSED` quiere decir que la orden ya se pago y por lo tanto obtendrás el `payment_id` con el resto de la información. La respuesta tendra el siguiente formato.

```json
{
	"status":"CLOSED",
	"id":<order_id>,
	"payment_id":<payment_id>,
	"payment_status":"<payment_status>",
	"external_reference": "<external_reference>",
	"payer_email": "<email_payer>"
}
```

**Response status code: 200 OK**

### Eliminar la orden de pago

El DELETE en esta API es la que posibilita eliminar una orden. Existen dos formas de eliminar la orden.

Podes eliminar la orden por `device_name`:

```curl
curl -X DELETE \
-H "Content-Type: application/json" \
'https://mobile.mercadopago.com/point/services/integrations/v1/attempt/device/:DEVICE_NAME?access_token=ACCESS_TOKEN'
```

La respuesta tendra el siguiente formato.

```json
{
	"status":"OK"
}
```

**Response status code: 200 OK**

O podes eliminar la orden por `order_id`:

```curl
curl -X DELETE \
-H "Content-Type: application/json" \
'https://mobile.mercadopago.com/point/services/integrations/v1/:ID?access_token=ACCESS_TOKEN'
```

**Response status code: 204 OK**


### Obtener todos los devices de una cuenta

El GET en esta API es la que posibilita obtener todos los devices configurados y sincronizados para tu cuenta de Mercado Pago

```curl
curl -X GET \
-H "Content-Type: application/json" \
'https://mobile.mercadopago.com/point/services/integrations/v1/devices?access_token=ACCESS_TOKEN'
```

Si el status del device es `FREE` quiere decir que el dispositivo puede recibir una orden nueva. Si el status es `BUSY` quiere decir que el dispostivo ya tiene asignado una orden. La respuesta tendra el siguiente formato.

```json
{
	"devices"[{
		"name": "<device_name>",
		"caller": <id_interno>,
		"id": <id_interno>,
		”status”:{
			status”:”FREE”,
			"payment_attempt": <order_id>
		}
	}]
}
```

**Response status code: 200 OK**


### Eliminar un device de una cuenta

El DELETE en esta API es la que posibilita borrar alguno de los devices configurados y sincronizados para tu cuenta de Mercado Pago


```curl
curl -X DELETE \
-H "Content-Type: application/json" \
'https://mobile.mercadopago.com/point/services/integrations/v1/devices/:DEVICE_NAME?access_token=ACCESS_TOKEN'
```

La respuesta tendra el siguiente formato.

```json
{
	"status":"OK"
}
```

**Response status code: 200 OK**


## Notificaciones de Pago

Es necesario que envíes tu `notification_url`, donde recibirás aviso de todos los nuevos pagos y actualizaciones de estados que se generen.

En el artículo de [notificaciones](/guides/notifications/webhooks.es.md) podes obtener más información.


## Pagos de Point
Los pagos de Point se pueden buscar en la API de Payments. Podes encontrar más información en el artículo de [API's](/reference/payments/_payments_id/get/)

A su vez, existe una API exclusiva de Point que cuenta con alguna información adicional del pago: `https://api.mercadolibre.com/point/services/payment/<payment_id>?access_token=<access_token>`

La respuesta tendra el siguiente formato:

```json
{
  "payment_id": 12345,
  "caller_id": 44444,
  "poi": "BBPOS-123123123",
  "poi_type": "BBPOS",
  "operator_id": 555555,
  "buyer_info": {
    "email": "email@email.com"
  }
}
```

> El campo "poi" es el identificador físico del dispositivo Point.
