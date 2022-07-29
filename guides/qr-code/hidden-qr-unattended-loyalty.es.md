---
sites_supported:
- mla
indexable: false  
---


# Programa de fidelización

## ¿Qué es el programa de fidelización?

Programa de fidelización es un objeto utilizado en el modelo desatendido que **permite sumar puntos en programas seleccionados**. En cada una de las órdenes deben agregarse estos datos para poder cargar puntos.

> WARNING
>
> ADVERTENCIA
>
> Ten en cuenta que el programa de fidelización es exclusivo del [modelo desatendido de Código QR](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/qr-code/qr-unattended/qr-unattended-part-a).

## ¿Cómo funciona?

Dentro de la orden, agrega el campo `loyalty` con todos sus datos requeridos como en el siguiente ejemplo:

```JSON

{
    "collector_id": 446566691,
    "sponsor_id": 446559784,
    "items":[{
        "title": "$500.00 de SUPER",
        "currency_id": "ARS",
        "description": "$500.00 de SUPER",
        "quantity": 1.0,
        "unit_price": 500.00
        }],
    "external_reference": "45ea80da",
    "notification_url": "https://www.tusitio.com",

    "loyalty": {
        "program": "serviclub",
        "transaction_id": "00029-45ea80da",
        "invoice_number": "45ea80da",
        "transaction_date": "2019-12-12T10:40:49.000+00:00",
        "transaction_amount": 500,
        "store_id": "00029",
        "products": [{
            "code": "2",
            "quantity": 11.2,
            "unit": "litre",
            "unit_price": 62.24
            }],
        "cashier_identification": {
            "type": "DNI",
            "number": "00000000"
        },
        "period": "0000",
        "shift": "1",
        "affinity_plan": "7"
    }
}

```

## Atributos

| Parámetro | Tipo (*type*) | Descripción |
| --- | --- | --- |
| `program` | *String* | Programa de fidelización (Serviclub, CTC) |
| `transaction_id`  | *String* (40) | Número de transacción o comprobante. |
| `invoice_number` | *String* (8) | Número de comprobante definido por el integrador. Completar con ceros a la izquierda si tiene menos de 8 dígitos. Ej: “00000001” |
| `transaction_date` | *String* | Fecha y hora de la transacción (ISO 8601). |
| `transaction_amount` | *Decimal* | Importe total de la transacción.           |
| `store_id` | *String* (5) | Identificador único del comercio (APIES en caso de YPF, SiteID en caso de Shell). Completar con ceros a la izquierda si tiene menos de 5 dígitos. Ej: "00001" |
| `products` | *Array* | Lista de productos. |
| `code` | *String*  | Código del producto. |
| `quantity` | *Decimal* | Cantidad de producto. Hasta 3 decimales. Ej: 20.513. |
| `unit_price` | *Decimal* | Precio unitario del producto.|
| `unit` | *String* | Unidad de medida (piece o litre). |
| `cashier_identification` | *Object* | Datos del empleado. |
| `type` | *String* | Tipo de documento. |
| `number` | *String* | ID del documento. En caso de no estar disponible enviar “00000000”. |
| `period` | *String* (4) | Número del período. En caso de no estar disponible enviar “0000”. |
| `shift` | *String* (1) | Número del turno. |
| `affinity_plan` | *String* (1) | Plan de afinidad (7). |

## Programas de fidelización activos

Actualmente contamos con los siguientes programas de fidelización.

| Programa de fidelización | Atributo `program` |
| --- | --- |
| Shell | `CTC` |
| YPF | `serviclub` |


## Códigos de producto

Usa los siguientes códigos de producto para los programas de fidelización activos. Los mismos deben agregarse en el campo `code` dentro del objeto `products`.

Códigos de producto **Shell (CTC)**:
- 1 = NAFTA VPN
- 2 = SUPER
- 3 = DIESEL VPD
- 4 = LUBRI PREM
- 5 = LUBRI REGU
- 6 = PRODUCTO GENÉRICO
- 7 = PRODUCTO SHOP

Códigos de producto **YPF (Serviclub)**:
- 0 = PRODUCTO SHOP
- 1 = SUPER XXI
- 3 = ULTRADIESEL
- 4 = INFINIA
- 6 = EURODIESEL
- 7 = GNC
- 8 = D DIESEL 500
- 11 = GENÉRICO BOXES

## Puntos a tener en cuenta

1. El parámetro `quantity` no puede contener más de 3 puntos decimales.
2. Para Producto shop, se hace el cálculo de `quantity` multiplicado por `unit_price` para calcular los puntos a cargar. Es por esto que debe ponerse el número de código de shop, `quantity = 1` y `unit_price` = monto total de los productos vendidos en shop.
3. La cantidad de puntos que se suman para combustibles depende del código de producto (`code`) y la cantidad (`quantity`), validando la unidad (`unit`). Cada producto suma una cantidad distinta en base a la cantidad cargada. Esta lógica la aplica directamente el programa de fidelización.
4. El `transaction_id` debe ser único tanto para cada integrador como para todo el universo de operaciones de fidelización. Recomendamos concatenarlo con el `store_id` y la cara del surtidor.
5. Los códigos de combustible deben situarse siempre en el primer ítem del arreglo de productos. 


---
### Próximos pasos


> LEFT_BUTTON_RECOMMENDED_ES
>
> Integrar QR modelo desatendido
>
> Conoce paso a paso cómo integrar este modelo.
>
>[Integrar QR modelo desatendido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/qr-code/qr-unattended/qr-unattended-part-a)
