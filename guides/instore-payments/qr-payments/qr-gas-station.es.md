---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global


---

# Pagos QR en Petroleras

## Flujo

![QR Petrolera Flow](/images/mobile/qr-gas-flow.es.svg)

1. El usuario escanea el código QR desde la app de Mercado Pago o Mercado Libre. El QR contiene el `STORE_ID` con la información del puesto donde se realizó la venta. 

2. Nuestro servidor consulta a tu servidor por la última venta pendiente de pago para ese puesto en esa sucursal. 

3. Tu servidor busca la última orden pendiente de pago, y si existe, devuelve el cuerpo de la orden con QR. 

4. Tu servidor devuelve la orden a nuestro servidor y así se crea la orden de compra en el celular del usuario.

5. El usuario sigue el flujo de compra y confirma el pago. 

6. Inmediatamente luego de ser procesado el pago, enviamos a tu servidor una notificación [IPN](https://www.mercadopago.com.mx/developers/es/guides/notifications/ipn/) informando que hay una novedad.

7. Con el identificador del pago, puedes [buscar](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments_search/get/) el pago y continuar con tus procesos internos. 

   > Si el estatus es `approved` se debe acreditar el pago. En cambio si es `rejected`, la app reintentará el cobro solicitando otro medio de pago.

8. ¡Listo! Informa al cliente que el pago se procesó correctamente.

## Conceptos

Primero debes familiarizarte con los siguiente conceptos ya que los usarás durante la integración.

| Atributo                    | Descripción                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `ACCESS_TOKEN`              | Es el [token de acceso](https://www.mercadopago.com/mlm/account/credentials) de la cuenta de Mercado Pago a la cual se acreditarán los cobros. |
| `COLLECTOR_ID`              | Es el número de usuario de la cuenta de Mercado Pago, son los últimos 9 dígitos de tu `access_token`, posterior al guión medio. |
| `EXTERNAL_ID`               | Es el identificador único del surtidor. Es un código alfanumérico definido por el integrador, no puede contener espacios ni caracteres especiales y no se distinguen las mayúsculas de las minúsculas. |
| `SPONSOR_ID`                | `COLLECTOR_ID` de la cuenta de Mercado Pago del integrador. Se debe crear una cuenta por marca (YPF, Shell, Axion, etc). |
| `APIES`, `STORE`,`STORE_ID` | Identificador único de la estación de servicio.              |

## Objetos

Además de los conceptos anteriores, también debes conocer los objetos con los que trabajaremos.

### Objeto POS

```json
{
    "name":"Surtidor 1", 
    "external_id": "pos_1",
    "category": 473000,
    "store_id": "123456",
    "url": "api.integration.com?apies=1&pos=1"   
}
```

**Definiciones**

- `name`: Nombre descriptivo. Es un String de hasta 45 caracteres.
- `external_id`: es el identificador único del punto de venta. Es un código alfanumérico definido por ti, no puede contener espacios ni caracteres especiales y no se distinguen las mayúsculas de las minúsculas.
- `category` : Código MCC que indica el rubro del punto de venta. Los valores posibles son
  - Gastronomía: 621102
  - Petrolera o Gasolinera: 473000
  - General: `null`
- `store_id`: Es un número identificador de la sucursal a la que pertenece el punto de venta. El el id del Store.
- `url`: URL del servidor del sistema de gestión, que devuelve los datos de un surtidor o bomba de una determinada estación.

### Objeto Order

```json
{
   "collector_id": 178106235,
   "sponsor_id": 334249281,
   "items":[
      {
         "title":" $500.00 de Premium",
         "currency_id": "MXN",
         "description":"$500.00 de Premium",
         "quantity": 1.0,
         "unit_price": 500.00
      }
   ],
   "external_reference":"45ea80da",
   "notification_url":"https://www.tusitio.com/notifiaction",
   "loyalty":{
      "program":"payback",
      "transaction_id":"45ea80da",
      "invoice_number":"3592",
      "transaction_date":"2018-09-21T12:33:13.000+00:00",
      "transaction_amount":500.00,
      "store_id":"802",
      "products":[
         {
            "code":"1",
            "quantity":1.0,
            "unit":"litre",
            "unit_price":500.00
         }
      ],
      "cashier_identification":{
         "type":"INE",
         "number":"00000000"
      },
      "period":"0000",
      "shift":"1",
      "affinity_plan":"7"
   }
}
```

**Definiciones**

* `collector_id`: Long. Identificador de la cuenta de Mercado Pago a la que se le acreditarán los pagos.
* `sponsor_id`: Long. Identificador de una cuenta de Mercado Pago que integra la solución.
* `external_reference`: String. Referencia para sincronizar con tu sistema.
* `notification_url`: String. URL a la cual se enviarán las notificaciones, definida por el integrador.
* `items`: Array. Lista de los productos, donde cada item es un `object` con los siguientes campos:
  * `title`: String. Nombre del producto.
  * `quantity`: Entero. Cantidad de este producto.
  * `unit_price`: Decimal. Precio unitario del producto.
* `loyalty`: Objeto. Datos necesarios para sumar puntos en un determinado programa de fidelización:
  * `program`: String. Programa de fidelización (serviclub, payback, etc.)
  * `transaction_id`: String. Número de transacción.
  * `invoice_number`: String. Número de comprobante.
  * `transaction_date`: String. Fecha y hora de la transacción (ISO 8601).
  * `transaction_amount`: Decimal. Importe total de la transacció.
  * `store_id`: String. Identificador único del negocio (identificador de estación de servicio o APIES).
  * `products`: Array. Lista de los productos comprados con los siguientes atributos
    * `code`: String. Código del producto.
    * `quantity`: Decimal o entero. Por ejemplo 20.50 litros.
    * `unit_price`: Decimal. Precio unitario del producto.
    * `unit`: String. Unidad de medida si aplica (litre, etc.)
  * `cashier_identification`: Object. Datos del empleado
    * `type`: String. Tipo de documento (DNI, INE, etc.)
    * `number`: String. Id de documento.
  * `period`: String. Número del período.
  * `shift`: String. Número del turno. 
  * `affinity_plan`: String. Plan de afinidad.

### Objeto Payment

```json
{
    "id": 420101010101,
    "external_reference": "id de transacción interno",
    "status": "approved",
    "status_detail": "accredited",
    ...
}
```

**Definiciones**

- `id`: Id único generado por Mercado Pago (lo necesitarás para realizar devoluciones).

- `external_reference`: Mismo string alfanumérico que añadiste al crear la orden.

- `status`: Estatus del pago.

  - `approved`: El pago fue aprobado y acreditado.

  - `rejected`: El pago fue rechazado. El usuario podría reintentar el pago.

  - `refunded`: El pago fue devuelto al usuario.

  - `charged_back`: Se ha realizado un contracargo en la tarjeta de crédito del comprador.

- `status_detail`: Información detallada del estado actual o el motivo de rechazo.

Consultar la [documentación completa](https://www.mercadopago.com.mx/developers/es/reference/payments/resource/) sobre este objeto en nuestra Referencia API.

## Configuración inicial

### Configurar URL

Es necesario que cuentes con una URL del tu software de gestión que devuelva los datos del surtidor o bomba de una determinada estación.  La misma contiene los parámetros adicionales que se deseen en la query (APIES de la estación, identificador del surtidor o bomba, etc.). Por ejemplo: `https://www.miempresa.com/pay-mp?apies=6232&pos=1`

Esta URL o endpoint deberá devolver la información con la que se creará el cuerpo de la orden que añadiremos al QR.

Recomendamos usar el campo `external_reference` para poder asociar la orden (y su eventual pago) con la compra. Es un código alfanumérico de hasta 256 caracteres definido por el integrador, no puede contener espacios ni caracteres especiales y no se distinguen las mayúsculas de las minúsculas.

Si tu sistema cuenta con algún programa de fidelización, deberás añadir el campo loyalty que brinda la información necesaria para acreditarle los puntos al comprador una vez aprobado el pago.

La respuesta esperada de este endpoint contiene el header `Content-Type: application/json`y se espera que responda con un estado `HTTP 200 (OK)`; además, debe incluir en el cuerpo un JSON correspondiente al objeto `order`.

En caso de error, ser regresará un código de estado `HTTP 400 (Bad Request)`, y en el cuerpo de la respuesta un JSON con el siguiente formato:

```json
{
	"error": {
		"type": "XXX",
		"message": "YYYY"
	}
}
```

**Donde**

| Type        | Descripción                                                  |
| ----------- | ------------------------------------------------------------ |
| in_process  | Hay un pedido en proceso, aún no se puede determinar el monto a cobrar. |
| unavailable | No hay pedido en proceso ni pendiente de pago.               |
| invalid     | Los parámetros adicionales (id de estación, posición, etc.) hacen referencia a una ubicación desconocida. |
| timeout     | El servidor de tu sistema no ha podido comunicarse con alguno de los otros sistemas (surtidor, POS, API de Mercado Pago) y ha abortado. |

El `message` es opcional, corresponde a una explicación en texto plano de la causa del problema.

### Notificar URL

Ya sea en fase de pruebas o producción, se debe informar la URL a [Mercado Pago](https://www.mercadopago.com.mx/developers/es/support) para configurarla y comenzar a hacer pruebas.

## Cobros

### Crear QR

Deberás crear un código QR para cada surtidor o bomba con un `url` configurado dentro del POS.

**API de creación de QRs**

```bash
curl -X POST https://api.mercadopago.com/pos?access_token=ACCESS_TOKEN -d
'{
    "name":"Caja Principal", 
    "fixed_amount": true,
    "category": 621102,
    "store_id": "123456",
    "external_id": "4lph4num3r1c",
    "url": "api.integration.com?apies=1&pos=1"   
}'
```

### Recibir el pago

Luego de que el usuario realiza el pago podrás obtener los datos usando cualquiera de las siguientes formas:

1. [IPN](https://www.mercadopago.com.mx/developers/es/guides/notifications/ipn/): Cuando el pago es creado, enviamos una notificación vía webhook a la URL configurada en la `notification_url` de la orden, deberás estar suscrito a las notificaciones tipo `merchant_order`. 
2. Hacer la [búsqueda del pago](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments_search/get/) utilizando el `external_reference` como criterio de búsqueda.

## Devoluciones

Habrán ocasiones en las que necesitarás realizar una [devolución](https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds/) parcial o total de un pago.

**Devolución total**

```bash
curl -X POST https://api.mercadopago.com/v1/payments/PAYMENT_ID/refunds?access_token=ACCESS_TOKEN
```

**Devolución parcial**

```bash
curl -X POST https://api.mercadopago.com/v1/payments/PAYMENT_ID/refunds?access_token=ACCESS_TOKEN -d '{ "amount": 10.50 }'
```

## Pruebas

Para probar la integración, deberás crear dos usuarios de prueba: uno comprador, otro vendedor:

Usarás el usuario vendedor para crear el QR y completar el dato `collector_id` ; así, con el usuario comprador ingresar en la app de Mercado Pago o Mercado Libre y compretar el flujo. 

Consulta los [datos de prueba](https://www.mercadopago.com.ar/developers/es/guides/payments/web-checkout/testing): usuarios de prueba y tarjetas de prueba que se pueden utilizar.

> **NOTA**: Si en las pruebas usarás una cuenta de prueba, todas las cuentas deben ser de prueba. De lo contrario, si usas una cuenta real, todas las cuentas relacionadas deben ser reales.  **Si en fase de pruebas se agrega el `sponsor_id`, recuerda que debe ser un usuario de prueba.**

**Escenarios a probar**

| Caso                                                         | Resultado esperado                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| El usuario escanea un código válido antes de finalizar el pedido. | La app informa que hay que avisarle al empleado de playa y luego se queda esperando a que finalice la carga. |
| El usuario escanea un código válido durante un pedido.       | La app informa que se está haciendo una carga y que se podrá pagar una vez que termine el despacho. |
| El usuario escanea un código válido pero la URL que tiene el QR no responde. | La app informa que la estación de servicio no puede operar con el medio de pago. |
| El usuario escanea un código válido pero la URL tiene parámetros inválidos | La app informa que algo no salió bien.                       |
| El usuario escanea un código válido, una vez finalizado el pedido. | Se muestra el checkout en el celular del usuario pagador.    |
| El usuario escanea un código válido con pedido terminado y realiza el pago. | El PDV recibe la información del pago.                       |

### Diccionario de errores

[Aquí](https://www.mercadopago.com.mx/developers/es/guides/payments/api/handling-responses/) podrás encontrar nuestro diccionario de errores.

## Reportes

Consultar la [documentación completa](https://www.mercadopago.com.ar/ayuda/herramienta-conciliacion_2116) sobre los reportes de Mercado Pago.
