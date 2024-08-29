## ¿Qué es el Sponsor ID?

El Sponsor ID es el identificador necesario utilizado en todas las transacciones de los comerciantes que forman parte de la plataforma del Partner. Su aplicación consiste en asignar el ID de la cuenta de Mercado Pago en nombre del Partner en las solicitudes de pago, utilizando el campo `sponsor_id` en el cuerpo de la solicitud.

```curl
"sponsor_id": "(ID de la cuenta MP de la plataforma)"
```