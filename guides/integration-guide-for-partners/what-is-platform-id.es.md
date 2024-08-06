### O que é o Platform ID?

O `platform_id` es una información utilizada para identificar las plataformas asociadas oficiales de Mercado Pago.

Su aplicación consiste en asignar el ID proporcionado por el equipo de Partners en el _header_ de las solicitudes de pago, utilizando el campo `x-platform-id`.

Ejemplo a través del _header_:

```curl
--header 'x-platform-id: (PLATFORM_ID proporcionado por el equipo de Partners)'
```

### Requisito previo

Antes de obtener tu `platform_id`, es necesario solicitarlo al equipo de Partners y esperar la aprobación de tu solución. Después de ser aprobado, se creará y proporcionará el `platform_id` para que puedas asignar el ID correspondiente en tu integración.