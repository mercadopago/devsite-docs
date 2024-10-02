# Fecha de vencimiento

Al integrar tipos de pago en efectivo con Checkout Pro, es posible cambiar la fecha de vencimiento predeterminada. Esta configuración permite personalizar la fecha hasta la cual el pago se encontrará disponible para ser efectuado.

Para cambiar la fecha de vencimiento, envía un **POST** al endpoint [Crear preferencia](/developers/es/reference/preferences/_checkout_preferences/post) con el parámetro `date_of_expiration`, incluyendo la fecha, hora y huso horario que asignaste al vencimiento del ítem y ejecuta el request. 

[[[
```json
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]

| Atributo | Descripción | Tipo | Requerido |
|---|---|---|---|
| `date_of_expiration` | Establece la fecha de vencimiento para un pago en efectivo. | string | Opcional |


> WARNING
>
> Importante
>
> El período de acreditación del pago es de hasta 2 horas hábiles, según el pago elegido. Recomendamos **establecer un vencimiento con al menos 3 días de margen** para garantizar el pago. Si el pago se realiza tras el vencimiento, será devuelto a la cuenta de Mercado Pago, y si se asigna un vencimiento mayor al permitido, será ajustado al límite máximo.

## Fechas de vencimiento por defecto

Los tipos de pago en efectivo tienen asignada una fecha de vencimiento por defecto. Es decir, si no se envía el campo `date_of_expiration`, el pago tendrá una fecha de vencimiento máxima asignada automáticamente. 

Además, la fecha de vencimiento enviada no puede superar a la cantidad de días asignados por defecto a cada tipo de pago. Si eso sucede, el pago se mostrará disponible hasta el último día habilitado por defecto. 

A continuación, encontrarás las fechas de vencimiento por defecto para cada tipo de pago disponible por país:

### Argentina

| Tipo de pago | Días de vigencia hasta vencimiento |
|---|---|
| Pago Fácil | 7 |
| Rapipago | 20 |

### Brasil

| Tipo de pago | Días de vigencia hasta vencimiento |
|---|---|
| Boleto Bancário (bolbradesco) | 3 |
| PEC | 4 |
| Pix | 3 |

### Colombia

| Tipo de pago | Días de vigencia hasta vencimiento |
|---|---|
| Efecty | 7 |

### México

| Tipo de pago | Días de vigencia hasta vencimiento |
|---|---|
| SPEi | 20 |
| Oxxo | 20 |
| Paycash | 1 |
| ATM (BBVA, Citibanamex, Santander) | 30 |

### Perú

| Tipo de pago | Días de vigencia hasta vencimiento |
|---|---|
| Pago Efectivo | 2 |

### Uruguay

| Tipo de pago | Días de vigencia hasta vencimiento |
|---|---|
| Abitab | 3 |
| Redpagos | 3 |


