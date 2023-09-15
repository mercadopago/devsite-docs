# Descargar el reporte

> WARNING
>
> Importante
>
> La descarga de reportes sólo está disponible para statements; es decir, reportes generados de manera manual.  Por ahora, no está disponible la descarga de reportes generados automáticamente (events).

Una vez que hayas generado manualmente el reporte, podrás generar una descarga del mismo. Para eso, realiza un llamado a la API como se muestra a continuación, reemplazando  `statement_id` por el valor obtenido en la respuesta  a la generación del reporte. 
Además, ten en cuenta que deberás indicar el formato en el que deseas realizar la descarga, tal como se indica en la tabla debajo. 

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
| statement_id (obligatorio) | Identificación del reporte, obtenida en la respuesta a su creación.                                                    |
| format (opcional)        | Formato en el que se desea descargar el reporte. Puede ser csv o json. Por defecto, csv.                            |

> Si ocurre un error durante la generación del reporte, recibirás un status 404 y el _body_ de la respuesta estará vacío.