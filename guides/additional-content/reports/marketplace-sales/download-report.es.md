# Descargar el reporte

Después de crear el reporte manualmente, podrás descargarlo. Ejecuta una llamada a la API utilizando el código a continuación y reemplaza `statement_id` por el valor obtenido en la respuesta de la creación del reporte. Asegúrate también de especificar el formato de descarga deseado, como se muestra en la tabla a continuación.

> WARNING
>
> Importante
>
> La descarga de reportes sólo está disponible para `statements`; es decir, reportes generados de manera manual.  Por ahora, no está disponible la descarga de reportes generados automáticamente (_events_).

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/statements/{{statement_id}}/download?format=csv' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Respuesta
```
COLLECTOR;COLLECTOR_NICKNAME;PAYMENT;STATUS_DESCRIPTION;STATUS_DETAIL;PURCHASE_ORDER;PAYMENT_METHOD_TYPE;TRANSACTION_AMOUNT;DATE_CREATED;DATE_APPROVED;MARKETPLACE_FEE_AMOUNT;MERCADOPAGO_FEE_AMOUNT;TOTAL_PAID_AMOUNT;NET_RECEIVED_AMOUNT
{{report rows}}
```

| Campo                   | Descripción                                                                                                          |
|-------------------------|----------------------------------------------------------------------------------------------------------------------|
| `statement_id` (obligatorio) | Identificación del reporte, obtenida en la respuesta a su creación.                                                    |
| `format` (opcional)        | Formato en el que se desea descargar el reporte. Puede ser csv o json. Por defecto, csv.                            |

> En caso de que haya un error en la creación del reporte, el _status_ devuelto será 404 y el cuerpo de la respuesta estará vacio.