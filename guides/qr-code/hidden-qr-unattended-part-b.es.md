---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
  - mlb
---

# Cómo integrar QR modelo desatendido

> WARNING
>
> Contacto comercial requerido
>
> Solo puedes integrar este producto si tu contacto comercial te compartió toda la información necesaria para hacerlo.


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

En estos casos, el servicio debe responder un mensaje de error para que el usuario pueda ver una pantalla de espera. El servicio debe retornar un código de estado `HTTP 400 (Bad Request)` y la respuesta debe seguir el siguiente formato: 

```json
{
"error": 
{  "type": "XXX",
  "message": "YYYY" }
}
```

### Atributos

| Tipo (type)       |  Descripción                                                 |
| ------------- | ------------------------------------------------------------ |
| `in_process`     | Hay un pedido en proceso pero todavía no se pudo determinar el monto a cobrar. |
| `unavailable`           | No hay pedido en proceso o pendiente de pago. |

El `message` es opcional, es  una explicación en texto plano que puede acompañar al type declarado.

### 1.2 La información de la orden está disponible

Si ya existe la orden para ser cobrada, el servicio debe devolver su información. 

La respuesta esperada de este servicio debe contener el header `Content-Type: application/json` y el estado `HTTP 200 (OK)`.

La respuesta debe contener el siguiente mensaje de la orden a ser cobrada: 

```json
{
   "collector_id": 446560529,
   "sponsor_id": 446566691,
   "items":[
      {
         "title":" $500.00 de SUPER",
         "currency_id": [FAKER][CURRENCY][ACRONYM],
         "description":"$500.00 de SUPER",
         "quantity": 1.0,
         "unit_price": 500.00
      }
   ],
   "external_reference":"45ea80da",
   "notification_url":"https://www.tusitio.com"
}
```

Debes usar el campo `external_reference` para poder identificar la orden de tu sistema dentro de Mercado Pago.

### Atributos

| Atributo | Tipo (_type_) | Descripción |
| --- | --- | --- |
| `collector_id` | _Long_ | Identificador de la cuenta Mercado Pago a la que se le acreditarán los pagos.  |
| `sponsor_id` | _Long_ | Identificador de la cuenta Mercado Pago del sistema integrador. |
| `items.title` | _String_ | Título del producto. |
| `items.currency_id` | _String (3)_ | Identificador de moneda en formato ISO-4217. |
| `items.description` | _String_ | Descripción del producto.  |
| `items.quantity` | _Integer_ | Cantidad del producto en cuestión. |
| `items.unit_price` | _Decimal_ | Precio unitario del producto. |
| `external_reference` | _String (256)_ | Referencia para poder asociar la orden en Mercado Pago con la orden de compra, comanda o despacho en tu sistema. Generalmente se usa el número de factura. |
| `notification_url` | _String_ | URL a la cual se enviarán las notificaciones. |

## 2. Declarar la URL de tu dominio a Mercado Pago

Debes informar a tu asesor técnico asignado la URL base de tu dominio a la que Mercado Pago consultará por cada transacción. 

> WARNING
> 
> ATENCIÓN
> 
> No funcionará la integración si no cumples con este paso.

---

### Próximos pasos


> LEFT_BUTTON_REQUIRED_ES
>
> Integración avanzada
>
> Conoce las opciones que dispones para llevar tu integración al siguiente nivel.
>
> [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/qr-code/qr-unattended-model/qr-advanced-integration)


> RIGHT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Realiza los casos de uso más frecuentes para validar tu integración.
>
> [Prueba tu integración](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/qr-code/qr-unattended-model/qr-integration-test)
