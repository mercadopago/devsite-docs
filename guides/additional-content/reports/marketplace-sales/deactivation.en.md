# Deactivation

If you wish to deactivate a previously created structure, notification, or event, please use the corresponding endpoints listed below.

> WARNING
>
> Important
>
> If the request is successful, there will be no response. If there is an error, a status code of 404 will be returned. After deleting any of the mentioned elements, it is essential to confirm that the reports continue to function correctly. Please note that it is **not possible** to deactivate manually generated reports (statements).

## DELETE Structure

```curl
curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/structures/{{structure_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```

## DELETE Event

```curl
curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/events/{{event_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```

## DELETE Notifier

```curl
curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/{{notifier_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```