# Cómo integrar QR modelo desatendido

> WARNING
>
> Contacto comercial requerido
>
> Solo puedes integrar este producto si tu contacto comercial te compartió toda la información necesaria para hacerlo.
>
> Para obtener más información sobre este modelo de facturación, consulta la documentación [Pagos QR modelo desatendido.](/developers/es/docs/qr-code/qr-unattended/qr-unattended-part-a)

Para integrar el modelo desatendido es necesario:

1. Crear el servicio que será invocado al recibir una intención de pago y su lógica asociada cuando:

    1.1 La información de la orden **aún no está disponible**.

    1.2 La información de la orden **está disponible**.

2. Declarar la URL de tu dominio a Mercado Pago.

## 1. Crear el servicio que será invocado para recibir una intención de  pago

Tienes que **crear un servicio que será invocado por Mercado Pago cada vez que se quiera realizar un pago** con un código QR. 

Este servicio debe devolver la información de la orden a cobrar. Por ejemplo: 

> https://www.miempresa.com/pay-mp?storeid=6232&posid=1

La URL del servicio se declara en el campo URL de la caja (QR).

## Lógica del servicio

Implementa la siguiente lógica en el servicio para soportar los siguientes casos: 

### 1.1 La información de la orden aún no está disponible

Puede suceder que la información de la orden todavía no se encuentre disponible al querer realizar el pago. Por ejemplo, durante la carga de combustible. 

En estos casos, el servicio debe responder un mensaje de error para que el usuario pueda ver una pantalla de espera. El servicio debe retornar un código de estado `HTTP 202 (ACCEPTED)` y la respuesta debe seguir el siguiente formato: 

```json
{
  "status": {
    "status_detail": "<STATUS_DETAIL_TYPE>",
    "message": "<MESSAGE>"
  }
}

```

### Atributos

| Tipo (type)       |  Descripción                                                 |
| ------------- | ------------------------------------------------------------ |
| `in_process`     | Hay un pedido en proceso pero todavía no se pudo determinar el monto a cobrar. |
| `notihing_to_pay`           | La orden procesada no tiene monto remanente a pagar |
| `Waiting_for_order`           | Aún no se recibió la orden |

El `message` es opcional, es  una explicación en texto plano que puede acompañar al type declarado.

### 1.2 La información de la orden está disponible

Si ya existe la orden para ser cobrada, el servicio debe devolver su información. 

La respuesta esperada de este servicio debe contener los headers:  `Content-Type: application/json`, `order-version: “2”` y `client-id: “<CLIENT_ID>”`  junto con el estado `HTTP 200 (OK)`. (el header client-id unicamente es requerido si se esta utilizando [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/qr-code/additional-content/security/oauth/introduction), el cual serán los ultimos digitos del access token de la cuenta administradora).

La respuesta debe contener el siguiente mensaje de la orden a ser cobrada: 

```json
{
    "external_reference": "<EXTERNAL_REFERENCE>",
    "total_amount": <TOTAL_AMOUNT>,
    "items": [
        {
            "sku_number": "<SKU_NUMBER>",
            "category": "<ITEM_CATEGORY>",
            "title": "<ITEM_TITLE>",
            "description": "<ITEM_DESC>",
            "quantity": <ITEM_QUANTITY>,
            "unit_measure": "<ITEM_UNIT_MEASURE>",
            "unit_price": <ITEM_UNIT_PRICE>,
            "total_amount": <ITEM_TOTAL_AMOUNT>,
        }
    ],
    "title": "<PURCHASE_TITLE>",
    "description": "<PURCHASE_DESC>",
    "notification_url": "<NOTIFICATION_URL>",
    "sponsor": {
        "id": <SPONSOR_ID>
    },
    ----[mco]----

    "taxes": [
      {
        "type": "<TAX_TYPE>",
        "value": "<TAX_VALUE>",
        "percentage": "<TAX_PERCENTAGE>"
      }
    ],

    ------------
    "marketplace_fee": <MARKETPLACE_FEE_NUMBER>
}

```

Debes usar el campo `external_reference` para poder identificar la orden de tu sistema dentro de Mercado Pago.

### Atributos

| Atributo | Tipo (_type_) | Descripción |
| --- | --- | --- |
| `external_reference` | _String (256)_ | Referencia para poder asociar la orden en Mercado Pago con la orden de compra, comanda o despacho en tu sistema. Generalmente se usa el número de factura. |
| `total_amount` | _Double_ | Suma de los `total_amount` en los items. |
| `items.sku_number` | _String_ | código del producto. |
| `items.category` | _String_ | categoría del producto. |
| `items.title` | _String_ | Título del producto. |
| `items.description` | _String_ | Descripción del producto.  |
| `items.quantity` | _Integer_ | Cantidad del producto en cuestión. |
| `items.unit_measure` | _string_ | Unidad de medida ("unit"). |
| `items.unit_price` | _Double_ | Precio unitario del producto. |
| `items.total_amount` | _Double_ | Precio total del item. |
| `title` | _Long_ | Título de la compra.  |
| `description` | _Long_ | Descripción de la compra.  |
| `notification_url` | _String_ | URL a la cual se enviarán las notificaciones. |
| `sponsor.id` | _Long_ | Identificador de la cuenta Mercado Pago del sistema integrador. |
| `marketplace_fee` | _Double_ | Monto del fee a cobrar del marketplace derivado del proceso de [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/qr-code/additional-content/security/oauth/introduction) |

## 2. Declarar la URL de tu dominio a Mercado Pago

Debes informar a tu asesor técnico asignado la URL base de tu dominio a la que Mercado Pago consultará por cada transacción. 

> WARNING
> 
> ATENCIÓN
> 
> No funcionará la integración si no cumples con este paso.