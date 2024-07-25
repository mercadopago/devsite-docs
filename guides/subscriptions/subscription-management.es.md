# Gestión de suscripciones

A través de la gestión de suscripciones es posible pausar, cancelar o reactivar una suscripción ya creada, además de realizar otros cambios específicos dentro de su configuración inicial.

En la siguiente tabla encontrarás más información sobre las posibilidades de gestión.

| Tipo | Descripción |
|---|---|
| Buscar suscripción | Permite buscar suscripciones independientemente de su estado (activa, en pausa, cancelada). Para hacerlo, envía un GET con los parámetros necesarios al endpoint [/preapproval/search](/developers/es/reference/subscriptions/_preapproval_search/get) y ejecuta la solicitud. |
| Modificar monto | Permite modificar el monto de una suscripción existente. Envía el nuevo monto a través de `auto_recurring.transaction_amount` y `auto_recurring.currency_id` en un PUT al endpoint [/preapproval/{id}](/developers/es/reference/subscriptions/_preapproval_id/put). |
| Modificar tarjeta del medio de pago principal | Permite modificar la tarjeta asociada a la suscripción existente. Envía un PUT con el nuevo token en atributo `card_token_id` para el endpoint [/preapproval/{id}](/developers/es/reference/subscriptions/_preapproval_id/put). |
| Modificar medio de pago secundario | Permite agregar un segundo medio de pago a una suscripción existente. Envía un PUT en el endpoint [/preapproval/{id}](/developers/es/reference/subscriptions/_preapproval_id/put) con los parámetros `card_token_id_secondary` y `payment_method_id_secondary` en caso de que el método secundario sea una tarjeta, y sólo `payment_method_id_secondary` para otros medios de pago. |
| Cancelar o pausar suscripción | Permite cancelar o pausar una suscripción existente. Para hacerlo, envía un PUT con el atributo `status` y el valor `cancelled` al endpoint [/preapproval/{id}](/developers/es/reference/subscriptions/_preapproval_id/put) y ejecuta la solicitud. Y para pausar una suscripción, envía un PUT con el atributo `status` y el valor `paused` al mismo endpoint  y ejecuta la solicitud. |
| Reactivar una suscripción | Permite reactivar una suscripción en pausa y establecer una fecha límite para su finalización. Para hacerlo, envía un PUT con los parámetros necesarios al endpoint [/preapproval/{id}](/developers/es/reference/subscriptions/_preapproval_id/put) y ejecuta la solicitud.|
| Cambiar la fecha de facturación | Para las suscripciones con una frecuencia de pago mensual, puedes elegir un día fijo del mes para que se produzca la facturación. Para hacerlo, envía un PUT con los parámetros necesarios al endpoint [/preapproval/{id}](/developers/es/reference/subscriptions/_preapproval_id/put) y ejecuta la solicitud. |
| Establecer monto proporcional | Puedes establecer un monto proporcional para facturar una suscripción en particular. Para hacerlo, envía un PUT con los parámetros necesarios al endpoint [/preapproval/{id}](/developers/es/reference/subscriptions/_preapproval_id/put) y ejecuta la solicitud. |
| Ofrecer prueba gratuita | Es posible ofrecer un período de prueba gratuito para que los clientes puedan probar el producto y/o servicio antes de comprarlo. Para ello, envía un PUT con los parámetros `free_trial`, `frequency` y `frequency_type` con el número de días y el tipo (días/meses) al endpoint [/preapproval_plan/{id}](/developers/es/reference/subscriptions/_preapproval_plan_id/put) y ejecuta la solicitud. |
