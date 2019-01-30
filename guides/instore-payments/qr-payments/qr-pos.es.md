---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global

---

# Pagos QR en Punto de Venta

## Flujo

![QR PDV Flow](/images/mobile/qr-user-flow.es.svg)

## Conceptos

Primero debes familiarizarte con los siguiente conceptos ya que los usarás durante la integración.

| Atributo       | Descripción                                                  |
| -------------- | ------------------------------------------------------------ |
| `ACCESS_TOKEN` | Es el [token de acceso](https://www.mercadopago.com/mlm/account/credentials) de la cuenta de Mercado Pago a la cual se acreditarán los cobros. |
| `COLLECTOR_ID` | Es el número de usuario de la cuenta de Mercado Pago, son los últimos 9 dígitos de tu `access_token`, posterior al guión medio. |

## Objetos

Además de los conceptos anteriores, también debes conocer los objetos con los que trabajaremos.

### Objeto POS

```json
{
    "name":"Caja Principal", 
    "fixed_amount": true,
    "category": 621102,
    "store_id": "123456",
    "external_id": "4lph4num3r1c"
}
```

**Definiciones**

* `name`: Nombre descriptivo. Es un String de hasta 45 caracteres.
* `external_id`: es el identificador único del punto de venta. Es un código alfanumérico definido por ti, no puede contener espacios ni caracteres especiales y no se distinguen las mayúsculas de las minúsculas. Es un String de hasta 40 caracteres.
* `category` : Código MCC que indica el rubro del punto de venta. Los valores posibles son
  * Gastronomía Argentina: 621102
  * General: `null`
* `store_id`: Es un número identificador de la sucursal a la que pertenece el punto de venta. El el id del Store.
* `fixed_amount`: Indica si el usuario podrá ingresar algún monto al leer el QR o tendrá que esperar a que esté una orden disponible. Es un booleano. 

### Objeto Order

```json
{
    "external_reference": "id de transacción interno",
	"notification_url": "www.yourserver.com/endpoint",
      "items" :[{
        "title" : "Tacos",
        "currency_id" : "MXN",
        "unit_price" : 16.0,
        "quantity" : 4
      },{
        "title" : "Refresco",
        "currency_id" : "MXN",
        "unit_price" : 15.0,
        "quantity" : 1
      }]
}
```

**Definiciones**

* `external_reference`: String alfanumérico para uso externo, normalmente es el número de ticket o de pedido.
* `notification_url`: URI donde se enviará vía POST la notificación de pago.
* `items`: Arreglo de hashes de productos a comprar.
  * `title`: Título del producto.
  * `currency_id`: Identificador de moneda en formato ISO_4217.
  * `unit_price`: Precio unitario (máximo 2 decimales).
  * `quantity`: Cantidad del producto.

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

* `id`: Id único generado por Mercado Pago (lo necesitarás para realizar devoluciones).

* `external_reference`: Mismo string alfanumérico que añadiste al crear la orden.

* `status`: Estatus del pago.

  * `approved`: El pago fue aprobado y acreditado.

  * `rejected`: El pago fue rechazado. El usuario podría reintentar el pago.

  * `refunded`: El pago fue devuelto al usuario.

  * `charged_back`: Se ha realizado un contracargo en la tarjeta de crédito del comprador.

* `status_detail`: Información detallada del estado actual o el motivo de rechazo.

Consultar la [documentación completa](https://www.mercadopago.com.mx/developers/es/reference/payments/resource/) sobre este objeto en nuestra Referencia API.

## Cobros

### Crear QR

Deberás crear un código QR para cada caja con un `external_id` que identifique la misma.

**API de creación de QRs**

```bash
curl -X POST https://api.mercadopago.com/pos?access_token=ACCESS_TOKEN -d
'{
    "name":"Caja Principal", 
    "fixed_amount": true,
    "category": 621102,
    "store_id": "123456",
    "external_id": "4lph4num3r1c"
}'
```

### Crear orden

Para realizar un cobro a través de un código QR de Mercado Pago deberás crear una orden con el detalle del cobro pendiente.

**API de creación de órdenes**

```bash
curl -X POST https://api.mercadopago.com/mpmobile/instore/qr/COLLECTOR_ID/EXTERNAL_ID?access_token=ACCESS_TOKEN -d
'{
    "external_reference": "id de transacción interno",
	"notification_url": "www.yourserver.com/endpoint",
      "items" :[{
        "title" : "Tacos",
        "currency_id" : "MXN",
        "unit_price" : 16.0,
        "quantity" : 4
      }]
}'
```

La orden expira a los 10 minutos de ser creada y automáticamente al ser pagada. Si se desea un tiempo de expiración diferente, puedes enviar el header `X-Ttl-Store-Preference` con el tiempo deseado en segundos. 

Por ejemplo si deseas que esté disponible durante 5 minutos se debe enviar el header `'X-Ttl-Store-Preference: 300'`. Hay que tener presente que si una persona paga esa orden antes del tiempo configurado, expirará.

### Recibir el pago

Luego de que el usuario realiza el pago podrás obtener los datos usando cualquiera de las siguientes formas:

1. [IPN](https://www.mercadopago.com.mx/developers/es/guides/notifications/ipn/): Cuando el pago es creado, enviamos una notificación vía webhook a la URL configurada en la `notification_url` de la orden, deberás estar suscrito a las notificaciones tipo `merchant_order`. 
2. Hacer la [búsqueda del pago](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments_search/get/) utilizando el `external_reference` como criterio de búsqueda.

### Eliminar orden

Si quieres eliminar la orden asociada a un QR antes de que expire el tiempo (`X-Ttl-Store-Preference`) o sea pagada.

```bash
curl -X DELETE https://api.mercadopago.com/mpmobile/instore/qr/COLLECTOR_ID/EXTERNAL_ID?access_token=ACCESS_TOKEN
```

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

Se deben crear dos usuarios de prueba: uno comprador y otro cobrador. Con el usuario cobrador se debe crear el QR y con el otro ingresar en las apps de Mercado Pago o Mercado Libre.

Consultar los [datos de prueba](https://www.mercadopago.com.ar/developers/es/guides/payments/web-checkout/testing): usuarios de prueba y tarjetas de prueba que se pueden utilizar.

| Casos a probar                                               | Resultado esperado                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| El usuario escanea un código QR válido antes de hacer el pedido. | La app no muestra una orden.                                 |
| El usuario escanea un código QR con parámetros inválidos, es decir que hace referencia a una cuenta inexistente. | La app informa que ocurrió un error.                         |
| El usuario escanea un código válido, una vez realizado el pedido y creada la orden de venta. | La app muestra la orden.                                     |
| El usuario realiza un pago aprobado.                         | El sistema de PDV recibe la información de un pago aprobado. |
| El usuario realiza un pago rechazado.                        | El sistema de PDV recibe la información de un pago rechazado. |
| Se hace una devolución de un pago desde el PDV.              | En la cuenta del comprador se impacta la devolución.         |

### Diccionario de errores

[Aquí](https://www.mercadopago.com.mx/developers/es/guides/payments/api/handling-responses/) podrás encontrar nuestro diccionario de errores.

## Reportes

Consultar la [documentación completa](https://www.mercadopago.com.ar/ayuda/herramienta-conciliacion_2116) sobre los reportes de Mercado Pago.
