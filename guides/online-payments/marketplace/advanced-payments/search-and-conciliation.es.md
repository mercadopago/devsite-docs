---
  indexable: false
---

# Búsqueda y Conciliación

Una parte importante de la generación de pagos es la conciliación. La API permite realizar búsquedas de tus `advanced payments` para poder conciliar todas las operaciones que se hicieron a través de tu Marketplace.

Es posible buscar por medio de la API de Advanced Payments.

#### Request
```curl
curl -X GET \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer MKT_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/search?limit=10&offset=0'
```

#### Response
Lo cual retorna los resultados en una estructura que muestra, además, la cantidad de resultados e información para la paginación de los mismos.
```json
{
  "paging": {
    "total": 3,
    "limit": 10,
    "offset": 0
  },
  "results": [
    {
      "id": 11111111,
      "status": "approved",
      ...
    },
    {
      "id": 22222222,
      "status": "rejected",
      ...
    },
    {
      "id": 33333333,
      "status": "pending",
      ...
    }
  ]
}
```

#### Filtros de búsqueda

Estado                      |Descripción                                                        |
----------------------------|-------------------------------------------------------------------|
status                      |Estado del Advanced Payment.                                       |
payments.id                 |ID del pago del comprador.                                         |
payments.payment_method_id  |Método del pago.                                                   |
payments.payment_type_id    |Tipo del pago.                                                     |
payer.id                    |ID del comprador.                                                  |
payer.email                 |Email del comprador.                                               |
disbursement.collector_id   |ID del vendedor.                                                   |
external_reference          |ID generado por el marketplace que identifica al Advanced Payment. |

#### Filtros de búsquedas por rango de fechas

También es posible realizar búsquedas por fechas especificas:

* `range`: Atributo de búsqueda, puede ser `date_created` o `date_last_updated`.
* `begin_date`: Fecha de inicio de búsqueda (ISO 8601), por ejemplo `2017-05-06T00:00:00.000-04:00`.
* `end_date`: Fecha de fin de búsqueda (ISO 8601), por ejemplo `2017-05-06T23:59:59.999-04:00`.

#### Request
```curl
curl -X GET \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer MKT_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/search?range=date_created&begin_date=2017-05-06T00:00:00.000-04:00&end_date=2017-05-06T23:59:59.999-04:00'
```

### Exportar Activities

Además está la posibilidad de exportar las activities desde el listado de tu cuenta de Mercado Pago con el link `Exportar`.

![export_activities](/images/advanced-payments/export_activities_es.png)

Puedes seleccionar los filtros que necesites y elegir el formato CSV o XLS para realizar la conciliación de forma manual.

![export_activities_2](/images/advanced-payments/export_activities_2_es.png)