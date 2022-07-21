# Integración vía API

> WARNING
>
> Importante
>
> * Esta integración sólo esta disponible para Android versión 2.8.0 o superior.<br>
> * No esta disponible para iOS.

La otra forma de integrarse con la aplicación de Mercado Pago para cobrar con nuestro Point es mediante nuestras API.

Para poder integrarte, tienes que habilitar las opciones de integraciones en la app de Mercado Pago. Ejecuta el siguiente curl para realizarlo:

```curl
--location --request POST ‘https://api.mercadopago.com/point/services/user/status/integrators?access_token=<ENV_ACCESTOKEN>’ \
--header ‘Content-Type: application/json’ \
--data-raw ‘{
    “id”: <user_id>
}’
```

Luego es necesario configurar desde la aplicación de Mercado Pago el `device_name`. El mismo sirve para identificar tu celular o tablet y relacionarlo con tu cuenta de Mercado Pago. De esta manera, sabrás a que dispositivo enviar la orden de pago.

El siguiente paso, consiste en generar una orden de pago y enviarsela vía API al device desde donde queres cobrarla. El usuario verá que en la pantalla de ese dispositivo se levanta la aplicación de Mercado Pago lista para pasar la tarjeta y avanzar con el flujo de pago utilizando el Point.

Una vez que el pago es procesado, el usario verá el resultado del pago en la aplicación de Mercado Pago. Finalmente, la orden generada se cerrará y se creará el pago correspondiente.


## Creación de la orden de pago

El POST en esta API genera una orden, que es la que recibe la aplicación de Mercado Pago para cobrar con el Point, con un identificador, que se puede utilizar para saber el estado de la misma.

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
-d '{"amount":100,"description":"taza","device_name":"dispositivo","cc_type":"credit_card"}' \
'https://api.mercadopago.com/point/services/integrations/v1'
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
> Importante
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

## Obtener la orden de pago

El GET en esta API, junto al `order_id`, es la que posibilita recuperar el estado de la misma para saber si se generó o no un pago.

```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/:ID'
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

## Eliminar la orden de pago

El DELETE en esta API es la que posibilita eliminar una orden. Existen dos formas de eliminar la orden.

Podes eliminar la orden por `device_name`:

```curl
curl -X DELETE \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/attempt/device/:DEVICE_NAME'
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
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/:ID'
```

**Response status code: 204 OK**


## Obtener todos los devices de una cuenta

El GET en esta API es la que posibilita obtener todos los devices configurados y sincronizados para tu cuenta de Mercado Pago

```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/devices'
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


## Eliminar un device de una cuenta

El DELETE en esta API es la que posibilita borrar alguno de los devices configurados y sincronizados para tu cuenta de Mercado Pago


```curl
curl -X DELETE \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/devices/:DEVICE_NAME'
```

La respuesta tendra el siguiente formato.

```json
{
	"status":"OK"
}
```

**Response status code: 200 OK**

> PREV_STEP_CARD_ES
>
> Integración vía Deep Linking
>
> Aprende a integrar Mercado Pago Point vía Deep Linking.
>
> [Integración vía Deep Linking](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking)