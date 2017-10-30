---
sites_supported:
  - mla
  - mlb
  - mpv
  - mco
  - mlm
  - global
---


# Pagos con QR integrados


Mercado Pago te permite recibir pagos de tus clientes a través de un único código QR que identifica el punto de venta.

Cuando tu cliente escanea el código QR se realiza una petición a tu servidor consultando por el monto que debe cobrarse, Tu servidor responde con la [preferencia de pagos](/reference/preferences) y en el celular de tu cliente se levantará el checkout con la información de lo que tiene que pagar. Finalmente el cliente realiza el pago y recibirás una notificación *Webhook* en tu servidor en forma inmediata para impactar el resultado.


## Detalle de integración

Posterior a que se efectúe la orden de venta en tu sistema de gestión:


![instore diagram](/images/wallet-instore.png)


1. El usuario escanea el código QR desde su aplicación de Mercado Pago, al que está asociada la url con la información del puesto donde se realizó la venta. El QR representa unívocamente una puesto en una sucursal.

2. Con la información de dónde el usuario ha escaneado, el MP Server consulta al Server de la empresa por la última orden de venta pendiente de pago para ese puesto en esa sucursal.

    2.1. El Server crea la preferencia de pago (Objeto que contiene toda la información de lo que se está por pagar- Ver anexo)  
    2.2. Mercado Pago devuelve la prefencia de pago creada

3. El Server devuelve la preferencia al MP Server y con dicha información se puede dibujar el *checkout* en el celular del usuario para pagar.

4. El usuario completa los datos requeridos en el *checkout* (generalmente sólo debe ingresar el código de seguridad) y confirma el pago.

5. Inmediatamente luego de procesado el pago, el MP Server  envía al Server de la empresa una notificación *Webhook* informando que hay una novedad,  especificando el identificador del recurso pago.

6. Con el identificador del pago, el Server de la empresa puede consultar si el estado del mismo es `approved` o `rejected`. Si el pago ha sido aprobado se puede liberar la orden y asentar el pago. Si el pago ha sido rechazado, la App de MP reintentará el efectuar el cobro.

7. Se informa al cliente que el pago se procesó correctamente.


### Detalle del QR

El código QR generado debe idenficar en forma única al punto de venta desde donde se quiere pagar.
Por ejemplo, puede generar una url como la siguiente:

`` https://www.miempresa.com/pay-mp?locationId=01&positionId=01 ``

Donde `locationId`representa la sucursal y `positionId`la caja desde donde se efectuo la venta. Este QR pertenece a la sucursal 01, caja 01.  
Define los parámetros necesarios según tu modelo de negocio.



### Obtención de la preferencia de pago

Debes generar la preferencia de pago incluyendo el monto de la compra, para que tu cliente pueda ver el detalle de lo que va a pagar en su aplicación de Mercado Pago en su celular.  

Cuando el comprador escanee el QR, recibirás una petición de Mercado Pago con los parámetros necesarios para que puedas identificar el punto de venta.  

Este *request* se realiza enviando en el *header* `User-Agent` uno de los siguientes valores:    

*  `MercadoPago-Android/${version}`
*  `MercadoPago-iOS/${version}`

 > ${version} es la versión de la aplicación instalada en el dispositivo   


En base al punto de venta desde donde se realiza la petición, se debe [crear la preferencia de pago](/reference/preferences) indicando el monto de la venta y el detalle del producto o servicio.

Para crear este objeto se llama a un servicio de Mercado Pago.

Se recomienda usar el campo `external_reference` (contenido libre, hasta 256 caracteres) para poder asociar la preferencia creada con la orden de compra y con su posible pago.


La respuesta esperada en caso de que haya una venta pendiente y se haya generado la preferencia, será un estado HTTP 200 (OK), y en el cuerpo de la respuesta un JSON del siguiente formato:   

```
{
	"preference_id": "XXXX"
}

```

Si para el punto de venta no hay una orden pendiente de pago, se debe devolver un estado HTTP 400 (*Bad Request*) y en el cuerpo del JSON el siguiente formato:   

```
{
	"error": {
		"type": "XXX",
		"message": "YYYY"
	}
}

```
Donde `message`es un campo opcional y `type`puede tomar uno de los siguientes valores:

* in_process : Hay un pedido en proceso, aún no se puede determinar el monto a cobrar.
* unavailable: No hay pedido en proceso ni pendiente de pago.
* invalid: Los parámetros adicionales (id de sucursal, caja, etc.) hacen referencia a una ubicación desconocida.
* timeout: El servidor del integrador no ha podido comunicarse con alguno de los otros sistemas (surtidor, POS, API de Mercado Pago) y ha abortado.


> Es importante que en cualquier caso la respuesta lleve el header `Content-Type: application/json`.



### Notificaciones

Revisa la sección de [Webhooks](/guides/notifications/webhooks.es.md) para integrar las notificaciones de pago en tu sistema de gestión e impactar el resultado de mismo en forma inmediata, imprimiendo la factura corresponiente.


## Casos de prueba

Crea dos usuarios de prueba. Con uno simulas ser el vendedor y configuras las credenciales en la preferencia de pago. Con el segundo simulas ser el comprador, iniciando sesión en la aplicación móvil de Mercado Pago y utilizas las [tarjetas de prueba](/guides/payments/api/testing.es.md) para realizar pagos.


```
# Get access_token

AT=`curl -s -X POST -H 'content-type: application/x-www-form-urlencoded' 'https://api.mercadopago.com/oauth/token' -d 'grant_type=client_credentials' -d 'client_id=CLIENT_ID' -d 'client_secret=CLIENT_SECRET' | grep -o '"access_token":"[^"]*"' | sed -n 's/.*"access_token":"\(.*\)"/\1/p'`

```

```
# Create test user

curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=$AT" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'

```

Antes de salir a producción verifica los siguientes escenarios.



| Caso 		| Escenario 				 | Respuesta de la App        |
| ---- 		| ---- 				 | ----------        |
| 1  	| El usuario escanea un código válido antes de finalizar el pedido.|Primero debes cargar. Podrás pagar una vez que termines el pedido.|
| 2  	| El usuario escanea un código válido durante un pedido.|Ahora estás cargando. Podrás pagar una vez que termines el pedido.|
| 3   	| El usuario escanea un código con parámetros inválidos. (Hace referencia a un punto de venta inexistente)|Algo no salió bien. Por favor, intenta nuevamente.|
| 4  	| El usuario escanea  un código válido, una vez finalizado el pedido.|Se continúa con el flujo normal de pago.|
| 5  	| El usuario escanea múltiples veces un código válido con pedido terminado.|Se continúa con el flujo normal de pago.|
| 6    	| El usuario escanea un código válido con pedido terminado y paga|Se continúa con el flujo normal de pago.|
| 7  	| El usuario escanea un código válido con pedido terminado y paga. Vuelve a escanear el QR una vez finalizado el pago (habiendo impactado la notificación *webhook*)|Se continúa con el flujo normal de pago. Cuando vuelve a escanear obtiene el mensaje: Primero debes realizar un pedido. Podrás pagar al finalizar.|
| 8  	| El usuario escanea un código válido con pedido terminado y aborta el flujo. Paga con otro medio de pago y vuelve a escanear.|Primero debes cargar. Podrás pagar al finalizar el pedido.|
| 9 	| El usuario escanea un código válido con pedido terminado y paga con tarjeta mock para *call4auth*. (Card holder name = CALL) Luego ingresa otro medio de pago y completar el flujo ok.|Mensaje de pago rechazado, solicitando que el usuario llame a la tarjeta. Luego se continúa con el flujo normal de pago.|
| 10	| En caso de que lo permita, ingresar dos pedidos pendientes de pago|Se continúa con el flujo normal de pago (correspondiente al usuario que escaneó)|



> Cualquier consulta sobre tu integración puedes enviar un correo a instore@mercadopago.com
