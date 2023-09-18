# Desactivación

Si deseas desactivar una estructura, notificación o evento creado previamente, utiliza los _endpoints_ correspondientes listados a continuación.

> WARNING
>
> Importante
>
> Si la solicitud tiene éxito, no habrá respuesta. Si hay un error, se devolverá el código de _status_ 404. Después de eliminar cualquiera de los elementos mencionados, es esencial confirmar que los reportes, ya sean manuales o automáticos, sigan funcionando correctamente.

## DELETE Structures

Esta llamada permitirá desactivar los reportes creados ya sea manualmente o automáticamente.

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