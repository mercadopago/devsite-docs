---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global

---

# QR modelo Petroleras

Intro

## Flujo de pago vía App de MercadoPago

Imagen

Posterior al pedido o entrega del mismo:

1. El usuario escanea el código QR desde su wallet de Mercado Pago, al que está asociada la url con la información del puesto donde se realizó la venta. El QR representa unívocamente una puesto en una sucursal.
2. Con la información de dónde el usuario ha escaneado, el _MP Server_ consulta al _Server_ de la empresa por la última venta pendiente de pago para ese puesto en esa sucursal.
3. El server busca la última órden pendiente de pago y si existe, el _Server_ retorna el cuerpo de la [preferencia de pago](https://www.mercadopago.com.ar/developers/es/api-docs/basic-checkout/checkout-preferences/) con QR (Objeto que contiene toda la información de lo que se está por pagar- Ver anexo).
4. El _Server_ devuelve la preferencia al _MP Server_ y con dicha información se puede dibujar el checkout en el celular del usuario para que pagar.
5. El usuario completa los datos requeridos en el checkout (generalmente sólo debe ingresar el código de seguridad) y confirma el pago.
6. Inmediatamente luego de procesado el pago, el _MP Server_  envía al Server de la empresa una [notificación Webhook](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/webhooks/) informando que hay una novedad,  especificando el identificador del recurso (Ver anexo).
7. Con el identificador del pago, el _Server_ de la empresa puede consultar si el estado del mismo es &#39;approved&#39; o &#39;rejected&#39;. Si el pago ha sido aprobado puede liberar la orden y asentar el pago. Si el pago ha sido rechazado, la _App de MP_ reintentará el cobro, solicitando otro medio de pago por ejemplo.
8. Se informa al cliente que el pago se procesó correctamente.

## Integración

### Obtener la preferencia de pago

Como se detalla en el punto 2 del diagrama de secuencia, el _MP Server_ pide al _Server_ de la empresa detalles del pago a efectuarse. Para esto, MP realizará un request GET sobre HTTP / HTTPS. La URL a la que se hace este request es obtenida directamente del código QR escaneado, incluyendo todos los parámetros adicionales que el integrador desee en la query (id de sucursal, identificador del puesto, etc.). Por ejemplo, la misma podría ser:

https://www.miempresa.com/pay-mp?locationId=6232&amp;positionId=1

Este request se realiza enviando en el header User-Agent o bien MercadoPago-Android/_${version}_ o MercadoPago-iOS/_${version}_ según el dispositivo utilizado para escanear el QR, y reemplazando _${version}_ por la versión de la aplicación instalada en el dispositivo.

Este endpoint creado por el integrador deberá, a partir de los datos adicionales obtenidos, determinar el monto final a ser cobrado, y con esta información crear el cuerpo de una preferencia de pago con QR.

Es posible, como parte de esta preferencia de pago incluir detalle de los productos cobrados para una mejor experiencia de usuario, pero el uso de esta funcionalidad es opcional.

Se recomienda usar el campo external\_reference (contenido libre, hasta 256 caracteres) para poder asociar la preferencia (y su eventual pago) con la orden de compra / comanda / despacho para luego poder asociar el pago correspondiente.

 En el caso de que exista un programa de fidelización, deberá agregarse el campo loyalty que brinda la información necesaria para acreditarle los puntos al comprador una vez aprobado el pago.

La respuesta esperada de este endpoint será un estado HTTP 200 (OK), y en el cuerpo de la respuesta un JSON del siguiente formato (cuerpo de la preferencia de pago con QR):

```json
{
	"collector_id": 12345678,
	"items": [
		{
			"title": "Carga de [qty] [unit] [code]"           
			"quantity": 1,
			"unit_price": 600.0,
		}
	],
	"external_reference": "12345678",
	"sponsor_id": 12345678,
	"notification_url": "https://notification.com",
	"loyalty": {
		"program": "serviclub",
		"transaction_id”: "12345678",
		"invoice_number": "12345678",
		"transaction_date": "2018-06-25T11:32:17.000-04:00",
		"transaction_amount": 600.0,
		"store_id": "03073",
	"products": [
			{
				"code": "infinia",             
				"quantity": 20.0,
				"unit_price": 30.0,
				"unit": "litre"
			}
		],
		"cashier_identification": {
			"type":"DNI",
			"number":"12345678"
		},
		"period": "6433",
		"shift": "1",
		"affinity_plan": "7"
	}
}
```

En caso de cualquier error, debe retornarse un código de estado HTTP 400 (Bad Request), y en el cuerpo de la respuesta un JSON del formato.

```json
{    
    "error": {
            "type": "error.id",
            "message": "Here you will find the human description for the error."
    }
}
```

Donde, type corresponde a la siguiente tabla:

| **Type**    | **Descripción**                                              |
| ----------- | ------------------------------------------------------------ |
| in\_process | Hay un pedido en proceso, aún no se puede determinar el monto a cobrar. |
| unavailable | No hay pedido en proceso ni pendiente de pago.               |
| invalid     | Los parámetros adicionales (id de estación, posición, etc.) hacen referencia a una ubicación desconocida. |
| timeout     | El servidor del integrador no ha podido comunicarse con alguno de los otros sistemas (surtidor, POS, API de Mercado Pago) y ha abortado. |

 Por su parte el message es una explicación en texto plano de la causa del problema. Su uso es opcional.

 Es importante que en cualquier caso la respuesta lleve el header Content-Type: application/json



### Notificaciones Webhook

Un [webhook](https://www.mercadopago.com.ar/developers/es/api-docs/custom-checkout/webhooks/) es una notificación que enviará el MP Server a otro mediante una llamada HTTP POST al ocurrir un evento en un pago.

Este servidor que escucha notificaciones webhooks debe ser definido desde la [cuenta de mercado pago](https://www.mercadopago.com/mla/account/webhooks) de la empresa.

Se notifica únicamente el identificador del recurso. Para obtener la información del pago, se debe hacer un GET a:

https://api.mercadopago.com/v1/payments/ID?access\_token=TOKEN

 Entre los detalles del pago obtenidos estará el estado del mismo, y el external\_reference que se haya incluido al crear la preferencia de pago. De esta forma el integrador puede marcar el pago como procesado y emitir la factura correspondiente.

**Homologación**

Antes de salir a producción, debes comunicarte a [instore@mercadopago.com](mailto:instore@mercadopago.com) para que realicemos el proceso de homologación de la integración y posterior habilitación del flujo para usuarios productivos.

Probaremos casos de uso tales como:

| **ID** | **Escenario**                                                | **Respuesta de la Wallet**                                   |
| ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1      | El usuario escanea un código válido antes de finalizar el pedido. | Primero debes cargar. Podrás pagar una vez que termines el pedido. |
| 2      | El usuario escanea un código válido durante un pedido.       | Ahora estás cargando. Podrás pagar una vez que termines el pedido. |
| 3      | El usuario escanea un código con parámetros inválidos. (Hace referencia a un punto de venta inexistente) | Algo no salió bien. Por favor, intenta nuevamente.           |
| 4      | El usuario escanea  un código válido, una vez finalizado el pedido. | Se continúa con el flujo normal de pago.                     |
| 5      | El usuario escanea múltiples veces un código válido con pedido terminado. | Se continúa con el flujo normal de pago.                     |
| 6      | El usuario escanea un código válido con pedido terminado y paga | Se continúa con el flujo normal de pago.                     |
| 7      | El usuario escanea un código válido con pedido terminado y paga. Vuelve a escanear el QR una vez finalizado el pago (habiendo impactado la notificación webhook) | Se continúa con el flujo normal de pago. Cuando vuelve a escanear obtiene el mensaje: Primero debes realizar un pedido. Podrás pagar al finalizar. |
| 8      | El usuario escanea un código válido con pedido terminado y aborta el flujo. Paga con otro medio de pago y vuelve a escanear. | Primero debes cargar. Podrás pagar al finalizar el pedido.   |
| 9      | El usuario escanea un código válido con pedido terminado y paga con tarjeta mock para call4auth. (Card holder name = CALL) Luego ingresa otro medio de pago y completar el flujo ok. | Mensaje de pago rechazado, solicitando que el usuario llame a la tarjeta. Luego se continúa con el flujo normal de pago. |
| 10     | En caso de que lo permita, ingresar dos pedidos pendientes de pago | Se continúa con el flujo normal de pago (correspondiente al usuario que escaneó) |



```
**Anexo**

**1. Ejemplo de una preferencia de pago con QR completa**

{

&quot;collector\_id&quot;: 12345678,

        &quot;items&quot;: [

                {

&quot;title&quot;: &quot;Nafta Infinia 20 Litros&quot;

                        &quot;quantity&quot;: 1,

                        &quot;unit\_price&quot;: 600.0,

                }

        ],

        &quot;external\_reference&quot;: &quot;12345678&quot;,

&quot;sponsor\_id&quot;: 12345678,

        &quot;notification\_url&quot;: &quot;https://notification.com&quot;,

        &quot;loyalty&quot;: {

&quot;program&quot;: &quot;serviclub&quot;,

                &quot;transaction\_id&quot;: &quot;12345678&quot;,

&quot;invoice\_number&quot;: &quot;12345678&quot;,

                &quot;transaction\_date&quot;: &quot;2018-06-25T11:32:17.000-04:00&quot;,

                &quot;transaction\_amount&quot;: 600.0,

                &quot;store\_id&quot;: &quot;03073&quot;,

&quot;products&quot;: [

                        {

                                &quot;code&quot;: &quot;infinia&quot;,

                                &quot;quantity&quot;: 20.0,

                                &quot;unit\_price&quot;: 30.0,

                                &quot;unit&quot;: &quot;litre&quot;

                        }

                ],

        **       **&quot;cashier\_identification&quot;: {

                        &quot;type&quot;:&quot;DNI&quot;,

                        &quot;number&quot;:&quot;12345678&quot;

                },

                &quot;period&quot;: &quot;6433&quot;,

                &quot;shift&quot;: &quot;1&quot;,

                &quot;affinity\_plan&quot;: &quot;7&quot;

}

}

Detalle de los campos:

- **●●**** collector\_id:** Long. Identificador de usuario de la cuenta de Mercado Pago a la que se le acreditarán los pagos.
- **●●**** items:** Array. Lista de los productos, donde cada item es un Object con los siguientes campos:
  - **○○**** title:** String. Nombre del producto.
  - **○○**** quantity:** Entero. Cantidad de este producto
  - **○○**** unit\_price:** Decimal. Precio unitario del producto.
- **●●**** external\_reference:** String. Referencia que puedes sincronizar con tu sistema de pagos.
- **●●**** sponsor\_id:** Long. Sponsor id.
- **●●**** notification\_url:** String. URL a la cual te gustaría recibir notificaciones de pagos.
- **●●**** loyalty:** Object. Datos necesarios para sumar puntos a un determinado programa de fidelización:
  - **○○**** program:** String. Programa de fidelización (serviclub, latampass, etc.)
  - **○○**** transaction\_id:** String. Número de transacción
  - **○○**** invoice\_number:** String. Número de comprobante
  - **○○**** transaction\_date:** String. Fecha y hora de la transacción (ISO 8601)
  - **○○**** transaction\_amount:** Decimal. Importe total de la transacción
  - **○○**** store\_id:** String. Identificador único del negocio (identificador de estación de servicio, restaurante, etc.)
  - **○○**** products:** Lista de los productos comprados
    - **■■**** code:** String. Código del producto.
    - **■■**** quantity:** Decimal o entero. Por ejemplo 20.50 litros o 4 unidades.
    - **■■**** unit\_price:** Decimal. Precio unitario del producto.
    - **■■**** unit:** String. Unidad de medida si aplica (litre, etc.).
  - **○○**** cashier\_identification:** Object. Datos del vendedor (cajero, playero, etc.)
    - **■■**** type:** String. Tipo de documento (DNI, etc.)
    - **■■**** number:** String. Número de documento.
  - **○○**** period:** String. Número del período.
  - **○○**** shift:** String.Número del turno.
  -
**○○**
**affinity\_plan:** String. Plan de afinidad.

**2. Devoluciones y cancelaciones**

Se pueden implementar devoluciones y/o cancelaciones de los pagos. La documentación se encuentra en [éste link](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/refund-cancel/).



**3. Bloques de IP de Mercado Libre**

[&quot;{bloque : 209.225.49.0/24}&quot;,&quot;{bloque : 216.33.197.0/24}&quot;,&quot;{bloque : 216.33.196.0/24}&quot;,&quot;{bloque : 63.128.82.0/24}&quot;,&quot;{bloque : 63.128.83.0/24}&quot;,&quot;{bloque : 63.128.94.0/24}&quot;]

**5. Usuarios de Prueba**





**Comprador**

Descargar la wallet de Mercado Pago, e iniciar sesión con la test user comprador.

_# Get access token_
AT=`curl -s -X POST -H &#39;content-type: application/x-www-form-urlencoded&#39;&#39;https://api.mercadopago.com/oauth/token&#39; -d &#39;grant\_type=client\_credentials&#39; -d &#39;client\_id=CLIENT\_ID&#39; -d &#39;client\_secret=CLIENT\_SECRET&#39; | grep -o &#39;&quot;access\_token&quot;:&quot;[^&quot;]\*&quot;&#39; | sed -n &#39;s/.\*&quot;access\_token&quot;:&quot;\(.\*\)&quot;/\1/p&#39;`

Debes efectuar las siguientes llamadas a la API para crear **el usuario**.

curl -X POST \
-H &quot;Content-Type: application/json&quot; \
&quot;https://api.mercadopago.com/users/test\_user?access\_token=$AT&quot; \
-d &#39;{&quot;site\_id&quot;:&quot;MLA&quot;}&#39;



[https://play.google.com/store/apps/details?id=com.mercadopago.wallet&amp;hl=es\_419](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&amp;hl=es_419)

En el menú → Código QR → Escanear el código generado por el vendedor→ Se levanta el checkout en donde se indica lo que se va a pagar.

Utilizar las [tarjetas de prueba](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/test-cards/) y los prefijos para simular pagos aprobados o rechazados.

Consulta de puntos acumulados de algún programa de fidelidad asociado

Para las preferencias de pago con QR que tengan un programa de fidelidad asociado (loyalty) se podrá consultar el estado de la acreditación de puntos una vez notificado el pago.

Para ello podrá realizarse un GET a la siguiente URL:

[https://api.mercadopago.com/instore/loyalty/{merchant\_order\_id](https://api.mercadopago.com/instore/loyalty/%7Bmerchant_order_id)}

donde la merchant order id es el identificador de la orden de compra asociada al pago notificado (campo order del pago).

El servicio retorna:

1.  **200 OK**

{

&quot;status&quot;: &quot;pending&quot;

}

si los puntos están en proceso de acreditación.

2.  **200 OK**

{

&quot;status&quot;: &quot;accredited&quot;,

&quot;total\_points&quot;: 100,

&quot;products&quot;: [

        {

                &quot;code&quot;: &quot;prod\_1&quot;,

                &quot;points&quot;: &quot;70&quot;

},

{

                &quot;code&quot;: &quot;prod\_2&quot;,

                &quot;points&quot;: &quot;30&quot;

}

]

}

si los puntos fueron acumulados satisfactoriamente.

3.  **200 OK**

{

                &quot;status&quot;: &quot;not\_applicable&quot;

}

si los puntos no son aplicables, por ejemplo porque el comprador no está asociado al programa de fidelidad.

4.  **200 OK       **

{

                &quot;status&quot;: &quot;failure&quot;

}

si falló la acreditación de puntos por un motivo genérico (por ejemplo porque está caído el servicio externo que los acredita). De todas maneras, se harán reintentos en segundo plano y los puntos podrían aplicarse en el futuro.

4.  **404 Not Found       **

{

                &quot;message&quot;: &quot;Loyalty registry not found for the given merchant order id.&quot;,

&quot;error&quot;: &quot;loyalty\_registry\_not\_found&quot;,

&quot;status&quot;: 404

}

si no hay información de fidelidad asociada a la orden de compra mencionada.
```