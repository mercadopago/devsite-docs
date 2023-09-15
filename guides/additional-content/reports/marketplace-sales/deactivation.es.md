# Desactivación

Si lo deseas, puedes desactivar una estructura, notificación o evento previamente creados. Para eso, utiliza los siguientes endpoints, dependiendo de lo que estés queriendo desactivar. 

### DELETE Structures
```curl
curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/structures/{{structure_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```

### DELETE Event
```curl
	curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/events/{{event_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```

### DELETE Notifier
```curl
	curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/{{notifier_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```

> WARNING
>
> Importante
>
> En caso de éxito, las solicitudes no generarán una respuesta. En caso de error, se devolverá un código de estado 404.

> Ten en cuenta que, luego de eliminar alguno de los elementos arriba mencionados, va a ser necesario verificar que los reportes, ya sean manuales o automáticos, sigan funcionando correctamente.
