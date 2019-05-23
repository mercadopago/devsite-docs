# Búsqueda y Conciliación

Una parte importante de la generación de pagos es la conciliación. La API permite realizar búsquedas de tus `advanced payments` para poder conciliar todas las operaciones que se hicieron a través de tu Marketplace.

Es posible buscar por medio de la API de Advanced Payments.

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/search?access_token=MKT_ACCESS_TOKEN&limit=10&offset=0'
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
date_created                |Fecha de creación del Advanced Payment.                            |
status                      |Estado del Advanced Payment.                                       |
payment.id                  |ID del pago del comprador.                                         |
payment.payment_method_id   |Método del pago.                                                   |
payment.external_reference  |ID generado para este pago de entrada en particular.               |
payment.transaction_amount  |Monto del pago.                                                    |
payer.id                    |ID del comprador.                                                  |
payer.email                 |Email del comprador.                                               |
disbursement.collector_id   |ID del vendedor.                                                   |
external_reference          |ID generado por el marketplace que identifica al Advanced Payment. |

### Exportar Activities

Además está la posibilidad de exportar las activities desde el listado de tu cuenta de Mercado Pago con el link `Exportar`.

![export_activities](/images/advanced-payments/export_activities_es.png)

Puedes seleccionar los filtros que necesites y elegir el formato CSV o XLS para realizar la conciliación de forma manual.

![export_activities_2](/images/advanced-payments/export_activities_2_es.png)